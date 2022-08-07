
'reach 0.1';

// constants
const amt = 1
 const [ isOutcome,NO_MATCH, A_MATCH,TIMEOUT] = makeEnum(3);
 
 const resultOfRaffle=(bobsNum,aliceWinningNum)=>{
  const res=bobsNum==aliceWinningNum? 1: 0
  return res
 }

forall(UInt,bobsNum =>
  forall(UInt, aliceWinningNum =>
    assert(isOutcome(resultOfRaffle(bobsNum,aliceWinningNum)))));

const commonInteract = {
  getRandomNumber: Fun([UInt], UInt),
}

const AInteract = {
  ...commonInteract,
  ...hasRandom,
  getUsers: Fun([], Null),
  startRaffleDraw: Fun([], Object({
    nftId: Token,
    numberOfTickets: UInt,
    numberOfBobs: UInt,
  })),
  displayHashValue: Fun([Digest], Null),
  displayWinningNumber: Fun([UInt], Null),
  deadline: UInt,
  rewardReady:Fun([],Null),
  seeOutcome:Fun([UInt],Null),
  balanceReady:Fun([],Null)
}

// const BInteract = {
//   ...commonInteract,
//   // ...hasRandom,
//   // showRaffleNumber: Fun([UInt], UInt),
// }

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true })
  const A = Participant('Alice', AInteract);
  const B = API('Bob', {
  
    join: Fun([UInt], Bool),
    getReward: Fun([],UInt),
    seeBobsOutcome:Fun([],UInt),
    seeBalance:Fun([],Bool)
  });
  init();
  // The first one to publish deploys the contract
  A.only(() => {
    const { nftId, numberOfTickets, numberOfBobs } = declassify(interact.startRaffleDraw());
    const _winningNumber = interact.getRandomNumber(numberOfTickets)
    const [_commitAlice, _saltAlice] = makeCommitment(interact, _winningNumber)
    const commitAlice = declassify(_commitAlice)
  });
  A.publish(nftId, numberOfTickets, numberOfBobs, commitAlice);
  A.interact.displayHashValue(commitAlice);
  commit()
  A.pay([[amt, nftId]])
  assert(balance(nftId) == amt, "balance of NFT is wrong");
  A.interact.getUsers();




  const bobsMap = new Map(Address, UInt);
  const [bobAdded] = parallelReduce([0])
    .invariant(balance(nftId) == amt)
    .while(bobAdded <numberOfTickets)
    .api_(B.join, (num) => {
      // check(num == UInt, "number of Bobs is wrong");
      return [0, (k) => {
        k(true)
        bobsMap[this] = num
        return [bobAdded + 1]
      }

      ]
    })
    .timeout(relativeTime(10), () => {
      Anybody.publish()
      return [
        bobAdded + 1
      ]
    })

  A.only(() => {
    const saltAlice = declassify(_saltAlice)
    const winningNumber = declassify(_winningNumber)
    interact.displayWinningNumber(winningNumber);
  });
  commit()
  A.publish(saltAlice, winningNumber);
  checkCommitment(commitAlice, saltAlice, winningNumber);

  A.interact.rewardReady();
 
  const [winnerAddress, numberOfDraws,outcome,kM] = parallelReduce([A, 0,0,true])
    .invariant(balance(nftId) == amt)
    // .while(numberOfDraws < numberOfTickets)
   .while(kM)

    .api_(B.getReward, () => {
      return [0, (notify) => {
        const number = fromSome(bobsMap[this],0)
        const address = number == winningNumber ? this : A
        notify(number)
        return [address, numberOfDraws ,outcome,kM]
      }]
    })
    .api_(B.seeBobsOutcome,() => {
      return[0,(k)=>{
      
        const number = fromSome(bobsMap[this],0)
        const address = number == winningNumber ? this : A
        // const raffleOutcome= number == winningNumber ? A_MATCH : NO_MATCH
        const raffleOutcome= resultOfRaffle(number,winningNumber)
        const kM_N=numberOfDraws < numberOfTickets? true :false
        k(raffleOutcome)
        return [address, numberOfDraws +1,raffleOutcome,kM_N]

      }]
    })
    .timeout(relativeTime(10), () => {
      Anybody.publish()
      const number = fromSome(bobsMap[this],0)
        const address = number == winningNumber ? this : A
      return [
        address, numberOfDraws +1,TIMEOUT,false
        
      ]
    })
   A.interact.seeOutcome(outcome)
  if (winnerAddress) {
    //transfer(amt, nftId).to(winnerAddress)
    transfer([0, [amt, nftId]]).to(winnerAddress);
  } else {
    //transfer(amt, nftId).to(A)
    transfer([0, [amt, nftId]]).to(A);
  }
  transfer(balance()).to(A)

  A.interact.balanceReady();

  const [usersCount,kG] = parallelReduce([0,true])
  .invariant(balance(nftId) < 1)
  //.while(usersCount < numberOfTickets)
  .while(kG)
  .api_(B.seeBalance, () => {
    return [0, (notify) => {
      const number = fromSome(bobsMap[this],0)
      const isWinner = number == winningNumber ? true : false
      notify(isWinner)
      const kG_N=usersCount <numberOfTickets? true :false
      return [usersCount+1,kG_N]
    }]
  })
  .timeout(relativeTime(10), () => {
    Anybody.publish()
    return [
      usersCount,false
    ]
  })
  transfer(balance()).to(A)
  commit()
  exit();
});