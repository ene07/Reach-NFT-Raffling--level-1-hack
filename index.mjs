import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

// constants
const numberOfTickets = 10;
const numberOfBobs = 10;

// helper functions
const getRandomNumber = (num) => {
  const randomNumber = Math.floor((Math.random() * num) + 1);
  return randomNumber;
}

const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);
const ctcAlice = accAlice.contract(backend)

console.log("Creating NFT")
const raffleNFT = await stdlib.launchToken(accAlice, "Goodness Baby", "GNB", { supply: 1 })
const raffleParameters = {
  nftId: raffleNFT.id,
  numberOfTickets,
  numberOfBobs,
}

const OUTCOME=["Your Number is not a match","Your number matches","Timeout"]
const users = [];
const createUsers = async () => {
  console.log(`\nCreating 10 users\n`)
  const newAccBob = async (who) => {
    const acc = await stdlib.newTestAccount(startingBalance);
    // accept token Id
    acc.tokenAccept(raffleParameters.nftId)
    users.push({who, acc})
    const ctc = acc.contract(backend, ctcAlice.getInfo());
    // const [bobRaffleNumber] = await ctc.apis.B.getRandomNumber(numberOfTickets)
    //   console.log(`${who} raffle's number is ${bobRaffleNumber}`)
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    // const getBal =await stdlib.balanceOf(acc,raffleParameters.nftId)
    try {
      const value = await ctc.apis.Bob.join(randomNumber)
      const word = value ? "joined" : "did not join"
  
      console.log(`${who}  ${word} raffle`)
      // await stdlib.wait(1)
      // const bobRaffleNumber = await ctc.apis.Bob.getReward()
      // console.log(`${who} raffle's number is: ${bobRaffleNumber}`)
      // const bobOutcome= await ctc.apis.Bob.seeOutcome()
      // console.log(`${who}:${OUTCOME[bobOutcome]}`)
  
      // console.log(`${who} balance: ${ getBal}`)
    } catch (error) {
      // console.log(`${who} did not get a raffle number`)
      console.log(error)
    }
  }

  await newAccBob("Bob")
  await newAccBob("Thomas")
  await newAccBob("Nick")
  await newAccBob("Jack")
  await newAccBob("Candance")
  await newAccBob("Jay")
  await newAccBob("Bobby")
  await newAccBob("Abram")
  await newAccBob("Moses")
  await newAccBob("precious")
  await newAccBob("precious")
 

  
}

const claimRewards=async()=>{
   users.map(async(user)=>{
     const acc =user.acc
     const who=user.who
     const ctc = acc.contract(backend, ctcAlice.getInfo());
     const getBal =await stdlib.balanceOf(acc,raffleParameters.nftId)

     try {
      const bobRaffleNumber = await ctc.apis.Bob.getReward()
      console.log(`${who} raffle's number is: ${bobRaffleNumber}`)
      const bobOutcome= await ctc.apis.Bob.seeBobsOutcome()
      console.log(`${who}:${OUTCOME[bobOutcome]}`)
  
      console.log(`${who} balance: ${ getBal}`)
    } catch (error) {
      // console.log(`${who} did not get a raffle number`)
      console.log(error)
    }
   })
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
    console.log('get users')
   createUsers()
    
  },
  startRaffleDraw: async () => {
    console.log("Starting raffle draw - raffle parameters has been sent to the backend");
    return raffleParameters
  },
  displayHashValue: (hash) => {
    console.log(`Winning hash value is ${hash}`)
  },
  displayWinningNumber: (winningNumber) => {
    console.log(`Winning raffle number is ${winningNumber}`)
  },
  seeOutcome:(outcome)=>{

    console.log(`Alice saw:${OUTCOME[outcome]}`)
  },
  rewardReady:()=>{
    console.log("claiming rewards")
    claimRewards()
  }
} 



console.log('Starting backends...');
// await backend.Alice(ctcAlice, AliceInteract)
await Promise.all([
  backend.Alice(ctcAlice, AliceInteract),
  // backend.Bob(ctcBob, {
  //   ...stdlib.hasRandom,
  //   // implement Bob's interact object here
  // }),
]);

console.log('Goodbye, Alice and Bob!');