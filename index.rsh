'reach 0.1';
const amt =1

const shared={
  getNum:Fun([UInt],UInt),
  seeOutcome:Fun([UInt],Null)
}
export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface 
    ...hasRandom,
    ...shared,
    startRaffle:Fun([],Object({
      nftId:Token,
      totalTickets:UInt
    })),
    seeHash:Fun([Digest],Null)
  });
  const B = Participant('Bob', {
    ...shared,
    showNum:Fun([UInt],Null),
    seeWinningNum:Fun([UInt],Null),
    // Specify Bob's interact interface here
  });
  init();
  A.only(()=>{
    const {nftId, totalTickets}=declassify(interact.startRaffle())
    const _winningNum =interact.getNum(totalTickets)
   const [_commitA,_saltA] =makeCommitment(interact,_winningNum)
   const commitA=declassify(_commitA)
  })
  // The first one to publish deploys the contract
  A.publish(nftId, totalTickets,commitA);
  A.interact.seeHash(commitA)
   commit();
   A.pay([[amt,nftId]])
   commit()
   unknowable(B,A(_winningNum,_saltA))

   B.only(()=>{
    const chosenNum = declassify(interact.getNum(totalTickets))
    interact.showNum(chosenNum)
   })
  // The second one to publish always attaches
  B.publish(chosenNum);
  commit();
  A.only(()=>{
    const saltA =declassify(_saltA)
    const winnigNum=declassify(_winningNum)
  })
  A.publish(saltA,winnigNum)
  checkCommitment(commitA,saltA,winnigNum)

  B.interact.seeWinningNum(winnigNum)
  const outcome=(chosenNum ==winnigNum ? 1:0)
  transfer(amt,nftId).to(outcome==0?A:B)
  each([A,B],()=>{
    interact.seeOutcome(outcome)
  })
  commit()
  // write your program here
  exit();
});
