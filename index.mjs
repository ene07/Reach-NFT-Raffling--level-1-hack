import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log("creating the NFT")
const AudioNFT =await stdlib.launchToken(accAlice,"Audio Deeds" ,"AMT", {supply:1})
const params ={
  nftId: AudioNFT.id,
  totalTickets:10,
}
const OUTCOME=["Your Number is not a match","Your number matches"]
await accBob.tokenAccept(params.nftId)
const shared={
  getNum:( totalTickets)=>{
    const num =(Math.floor(Math.random()*totalTickets) +1)
    return num
  },
  seeOutcome:(num)=>{
    console.log(`The Outcome is: "${OUTCOME[num]}"`)
  }
}
console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ...shared,
    startRaffle:()=>{
      return params
    },
    seeHash:(value)=>{
      console.log(`Winning Number Hash is:${value}`)
    }
    // implement Alice's interact object here
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ...shared,
    showNum:(num)=>{
      console.log(`Your num is:${num}`)
    },
    seeWinningNum:(num)=>{
      console.log(`Winning Number is:${num}`)
    }
    // implement Bob's interact object here
  }),
]);

console.log('Goodbye, Alice and Bob!');