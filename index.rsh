
'reach 0.1';

// constants
const amt = 1
 const [ isOutcome, A_MATCH, NO_MATCH] = makeEnum(2);


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
  seeOutcome:Fun([UInt],Null)
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
    seeBobsOutcome:Fun([],UInt)
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
    .while(true)
    .api_(B.join, (num) => {
      // check(num == UInt, "number of Bobs is wrong");
      return [0, (k) => {
        k(true)
        bobsMap[this] = num
        return [bobAdded + 1]
      }

      ]
    })
    .timeout(absoluteTime(10), () => {
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
 
  const [winnerAddress, numberOfDraws,outcome] = parallelReduce([A, 0,0])
    .invariant(balance(nftId) == amt)
    .while(numberOfDraws < numberOfTickets)
    .api_(B.getReward, () => {
      return [0, (notify) => {
        const number = fromSome(bobsMap[this],0)
        const address = number == winningNumber ? this : A
        notify(number)
        return [address, numberOfDraws ,outcome]
      }]
    })
    .api_(B.seeBobsOutcome,() => {
      return[0,(k)=>{
      
        const number = fromSome(bobsMap[this],0)
        const address = number == winningNumber ? this : A
        const raffleOutcome= number == winningNumber ? A_MATCH : NO_MATCH
        k(raffleOutcome)
        return [address, numberOfDraws +1,raffleOutcome]

      }]
    })

  if (winnerAddress) {
    transfer(amt, nftId).to(winnerAddress)
  } else {
    transfer(amt, nftId).to(A)
  }
  transfer(balance()).to(A)
 A.interact.seeOutcome(outcome)
  commit()
  exit();
});