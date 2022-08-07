import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

// constants
const numberOfTickets = 3;
const numberOfBobs = 3;

// helper functions
const getRandomNumber = (num) => {
  const randomNumber = Math.floor((Math.random() * num) + 1);
  return randomNumber;
}

const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);
const ctcAlice = accAlice.contract(backend)

console.log("Creating NFT")
const raffleNFT = await stdlib.launchToken(accAlice, "Audio NFT", "AMT", { supply: 1 })
const raffleParameters = {
  nftId: raffleNFT.id,
  numberOfTickets,
  numberOfBobs,
}

const OUTCOME=["Your Number is not a match","Your number matches","Timeout"]
const users = [];
const createUsers = async () => {
  console.log(`\nCreating ${numberOfBobs} users`)
  const newAccBob = async (who) => {
    const acc = await stdlib.newTestAccount(startingBalance);
 
   
    acc.tokenAccept(raffleParameters.nftId)
    users.push({who, acc})
    const ctc = acc.contract(backend, ctcAlice.getInfo());
    const randomNumber = Math.floor((Math.random() * 10) + 1);
   
    try {
      const value = await ctc.apis.Bob.join(randomNumber)
      const word = value ? "joined" : "did not join"
  
      console.log(`${who}  ${word} raffle`)
     
    } catch (error) {
       console.log(`${who} did not get a raffle number`)
    
    }
  }

  await newAccBob("Bob")
  await newAccBob("Thomas")
  await newAccBob("Nick")
  await newAccBob("Jack")

 

  
}

const claimRewards=async()=>{
   users.map(async(user)=>{
     const acc =user.acc
     const who=user.who
     const ctc = acc.contract(backend, ctcAlice.getInfo());
     acc.tokenAccept(raffleParameters.nftId)
     const getBal =await stdlib.balanceOf(acc,raffleParameters.nftId)

     try {
      const bobRaffleNumber = await ctc.apis.Bob.getReward()
      console.log(`${who} raffle's number is: ${bobRaffleNumber}`)
      const bobOutcome= await ctc.apis.Bob.seeBobsOutcome()
      console.log(`${who}:${OUTCOME[bobOutcome]}`)
  
     
    } catch (error) {
     
    }
   })
}

const showBalances=async=>{
  users.map(async(user)=>{
    const acc =user.acc
    const who=user.who
    const ctc = acc.contract(backend, ctcAlice.getInfo());
   // const getBal =await stdlib.balanceOf(acc,raffleParameters.nftId)
   const [netAmnt, nftAmnt] = await stdlib.balancesOf(acc, [
    null,
    raffleParameters.nftId,
  ]);
    try {
      const value= await ctc.apis.Bob.seeBalance()
    if(value) returnconsole.log(
      `${who} has ${fmt(netAmnt)} ${stdlib.standardUnit
      } and ${nftAmnt} ${raffleNFT.name}`
    );
    console.log(`${who}:${nftAmnt} ${raffleNFT.name}`)
 
   } catch (error) {
    
   }
  })
  console.log('Goodbye, Alice and Bob!');
}

const commonInteract = {
  getRandomNumber:(num) => {
    const randomNumber = Math.floor((Math.random() * num) + 1);
    return randomNumber;
  },
}

const AliceInteract = {
  ...commonInteract,
  ...stdlib.hasConsoleLogger ,
  ...stdlib.hasRandom,
  getUsers:()=>{
    console.log('getting users')
   createUsers()
    
  },
  startRaffleDraw: async () => {
    console.log("Starting raffle draw - raffle parameters has been sent to the backend");
    return raffleParameters
  },
  displayHashValue: (hash) => {
    console.log(`\n Winning hash value is ${hash} `)
  },
  displayWinningNumber: (winningNumber) => {
    console.log(`\n Winning raffle number is ${winningNumber} `)
  },
  seeOutcome:(outcome)=>{

    console.log(`\n Alice saw:${OUTCOME[outcome]} `)
  },
  rewardReady:()=>{
    console.log(`\n claiming rewards `)
    claimRewards()
  },
  balanceReady:()=>{
    console.log(`\n Showing balance of users `)
    showBalances()
  }
} 



console.log('Starting backends...');

await Promise.all([
  backend.Alice(ctcAlice, AliceInteract),
 
]);

console.log('Goodbye, Alice and Bob!');