// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc2
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3],
      3: [ctc0, ctc1, ctc2, ctc3, ctc2],
      6: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2],
      7: [ctc0, ctc1, ctc2, ctc3, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    nftId: ctc3,
    numberOfBobs: ctc1,
    numberOfTickets: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Bob_getReward0_160: ctc10,
    Bob_seeBobsOutcome0_160: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v323 = stdlib.protect(ctc4, await interact.startRaffleDraw(), {
    at: './index.rsh:47:89:application',
    fs: ['at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:13:function exp)'],
    msg: 'startRaffleDraw',
    who: 'Alice'
    });
  const v324 = v323.nftId;
  const v325 = v323.numberOfBobs;
  const v326 = v323.numberOfTickets;
  const v330 = stdlib.protect(ctc1, await interact.getRandomNumber(v326), {
    at: './index.rsh:48:52:application',
    fs: ['at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:13:function exp)'],
    msg: 'getRandomNumber',
    who: 'Alice'
    });
  const v331 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:49:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v332 = stdlib.digest(ctc5, [v331, v330]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v324, v326, v325, v332],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v335, v336, v337, v338], secs: v340, time: v339, didSend: v42, from: v334 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v335
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v335, v336, v337, v338], secs: v340, time: v339, didSend: v42, from: v334 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.displayHashValue(v338), {
    at: './index.rsh:53:30:application',
    fs: ['at ./index.rsh:53:30:application call to [unknown function] (defined at: ./index.rsh:53:30:function exp)', 'at ./index.rsh:53:30:application call to "liftedInteract" (defined at: ./index.rsh:53:30:application)'],
    msg: 'displayHashValue',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v334, v335, v336, v338],
    evt_cnt: 0,
    funcNum: 1,
    lct: v339,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:5:13:decimal', stdlib.UInt_max, '1'), v335]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v351, time: v350, didSend: v53, from: v349 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:5:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v335
        });
      
      const v367 = v350;
      const v374 = stdlib.checkedBigNumberify('./index.rsh:44:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v351, time: v350, didSend: v53, from: v349 } = txn2;
  ;
  ;
  const v361 = stdlib.addressEq(v334, v349);
  stdlib.assert(v361, {
    at: './index.rsh:55:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.getUsers(), {
    at: './index.rsh:57:22:application',
    fs: ['at ./index.rsh:57:22:application call to [unknown function] (defined at: ./index.rsh:57:22:function exp)', 'at ./index.rsh:57:22:application call to "liftedInteract" (defined at: ./index.rsh:57:22:application)'],
    msg: 'getUsers',
    who: 'Alice'
    });
  
  let v367 = v350;
  let v374 = stdlib.checkedBigNumberify('./index.rsh:44:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: ['time', stdlib.checkedBigNumberify('./index.rsh:76:27:decimal', stdlib.UInt_max, '10')],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v334, v335, v336, v338, v374],
        evt_cnt: 0,
        funcNum: 7,
        lct: v367,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v410, time: v409, didSend: v129, from: v408 } = txn4;
          
          ;
          const cv367 = v409;
          const cv374 = v374;
          
          await (async () => {
            const v367 = cv367;
            const v374 = cv374;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc9, ctc3, ctc1, ctc6, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v410, time: v409, didSend: v129, from: v408 } = txn4;
      ;
      const v411 = stdlib.addressEq(v334, v408);
      stdlib.assert(v411, {
        at: './index.rsh:77:15:dot',
        fs: ['at ./index.rsh:76:35:application call to [unknown function] (defined at: ./index.rsh:76:35:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv367 = v409;
      const cv374 = v374;
      
      v367 = cv367;
      v374 = cv374;
      
      continue;
      }
    else {
      const {data: [v392], secs: v394, time: v393, didSend: v100, from: v391 } = txn3;
      undefined /* setApiDetails */;
      const v396 = v392[stdlib.checkedBigNumberify('./index.rsh:66:10:spread', stdlib.UInt_max, '0')];
      ;
      const v399 = true;
      await txn3.getOutput('Bob_join', 'v399', ctc8, v399);
      await stdlib.mapSet(map0, v391, v396);
      const cv367 = v393;
      const cv374 = v374;
      
      v367 = cv367;
      v374 = cv374;
      
      continue;}
    
    }
  stdlib.protect(ctc0, await interact.displayWinningNumber(v330), {
    at: './index.rsh:86:34:application',
    fs: ['at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:83:13:function exp)'],
    msg: 'displayWinningNumber',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v334, v335, v336, v338, v374, v331, v330],
    evt_cnt: 2,
    funcNum: 3,
    lct: v367,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v418, v419], secs: v421, time: v420, didSend: v141, from: v417 } = txn3;
      
      ;
      
      const v426 = stdlib.checkedBigNumberify('./index.rsh:94:69:decimal', stdlib.UInt_max, '0');
      const v427 = stdlib.checkedBigNumberify('./index.rsh:94:71:decimal', stdlib.UInt_max, '0');
      const v428 = v334;
      const v429 = v420;
      const v436 = v374;
      
      if (await (async () => {
        const v440 = stdlib.lt(v426, v336);
        
        return v440;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v428,
          tok: v335
          });
        sim_r.txns.push({
          kind: 'from',
          to: v334,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v335
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc1, ctc6, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v418, v419], secs: v421, time: v420, didSend: v141, from: v417 } = txn3;
  ;
  const v422 = stdlib.addressEq(v334, v417);
  stdlib.assert(v422, {
    at: './index.rsh:89:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v423 = stdlib.digest(ctc5, [v418, v419]);
  const v424 = stdlib.digestEq(v338, v423);
  stdlib.assert(v424, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:90:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.rewardReady(), {
    at: './index.rsh:92:25:application',
    fs: ['at ./index.rsh:92:25:application call to [unknown function] (defined at: ./index.rsh:92:25:function exp)', 'at ./index.rsh:92:25:application call to "liftedInteract" (defined at: ./index.rsh:92:25:application)'],
    msg: 'rewardReady',
    who: 'Alice'
    });
  
  let v426 = stdlib.checkedBigNumberify('./index.rsh:94:69:decimal', stdlib.UInt_max, '0');
  let v427 = stdlib.checkedBigNumberify('./index.rsh:94:71:decimal', stdlib.UInt_max, '0');
  let v428 = v334;
  let v429 = v420;
  let v436 = v374;
  
  while (await (async () => {
    const v440 = stdlib.lt(v426, v336);
    
    return v440;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v460], secs: v462, time: v461, didSend: v221, from: v459 } = txn4;
    switch (v460[0]) {
      case 'Bob_getReward0_160': {
        const v463 = v460[1];
        undefined /* setApiDetails */;
        ;
        const v470 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v459), null);
        const v471 = stdlib.fromSome(v470, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', stdlib.UInt_max, '0'));
        const v472 = stdlib.eq(v471, v419);
        const v473 = v472 ? v459 : v334;
        await txn4.getOutput('Bob_getReward', 'v471', ctc1, v471);
        const cv426 = v426;
        const cv427 = v427;
        const cv428 = v473;
        const cv429 = v461;
        const cv436 = v436;
        
        v426 = cv426;
        v427 = cv427;
        v428 = cv428;
        v429 = cv429;
        v436 = cv436;
        
        continue;
        break;
        }
      case 'Bob_seeBobsOutcome0_160': {
        const v494 = v460[1];
        undefined /* setApiDetails */;
        ;
        const v512 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v459), null);
        const v513 = stdlib.fromSome(v512, stdlib.checkedBigNumberify('./index.rsh:108:47:decimal', stdlib.UInt_max, '0'));
        const v514 = stdlib.eq(v513, v419);
        const v515 = v514 ? v459 : v334;
        const v517 = v514 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        await txn4.getOutput('Bob_seeBobsOutcome', 'v517', ctc1, v517);
        const v523 = stdlib.add(v426, stdlib.checkedBigNumberify('./index.rsh:112:41:decimal', stdlib.UInt_max, '1'));
        const cv426 = v523;
        const cv427 = v517;
        const cv428 = v515;
        const cv429 = v461;
        const cv436 = v436;
        
        v426 = cv426;
        v427 = cv427;
        v428 = cv428;
        v429 = cv429;
        v436 = cv436;
        
        continue;
        break;
        }
      }
    
    }
  ;
  ;
  stdlib.protect(ctc0, await interact.seeOutcome(v427), {
    at: './index.rsh:123:23:application',
    fs: ['at ./index.rsh:123:23:application call to [unknown function] (defined at: ./index.rsh:123:23:function exp)', 'at ./index.rsh:123:23:application call to "liftedInteract" (defined at: ./index.rsh:123:23:application)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  };
export async function _Bob_getReward6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_getReward6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_getReward6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Bob_getReward0_160: ctc5,
    Bob_seeBobsOutcome0_160: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v334, v335, v336, v419, v426, v427, v436] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v443 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:97:27:application call to [unknown function] (defined at: ./index.rsh:97:27:function exp)', 'at ./index.rsh:94:64:application call to "runBob_getReward0_160" (defined at: ./index.rsh:97:10:function exp)', 'at ./index.rsh:94:64:application call to [unknown function] (defined at: ./index.rsh:94:64:function exp)'],
    msg: 'in',
    who: 'Bob_getReward'
    });
  const v447 = ['Bob_getReward0_160', v443];
  
  const txn1 = await (ctc.sendrecv({
    args: [v334, v335, v336, v419, v426, v427, v436, v447],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:98:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v460], secs: v462, time: v461, didSend: v221, from: v459 } = txn1;
      
      switch (v460[0]) {
        case 'Bob_getReward0_160': {
          const v463 = v460[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_getReward"
            });
          ;
          const v470 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v459), null);
          const v471 = stdlib.fromSome(v470, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', stdlib.UInt_max, '0'));
          const v472 = stdlib.eq(v471, v419);
          const v473 = v472 ? v459 : v334;
          const v474 = await txn1.getOutput('Bob_getReward', 'v471', ctc1, v471);
          
          const v835 = v426;
          const v836 = v427;
          const v839 = v436;
          const v840 = stdlib.lt(v426, v336);
          if (v840) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v473,
              tok: v335
              });
            sim_r.txns.push({
              kind: 'from',
              to: v334,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v335
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Bob_seeBobsOutcome0_160': {
          const v494 = v460[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v460], secs: v462, time: v461, didSend: v221, from: v459 } = txn1;
  switch (v460[0]) {
    case 'Bob_getReward0_160': {
      const v463 = v460[1];
      undefined /* setApiDetails */;
      ;
      const v470 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v459), null);
      const v471 = stdlib.fromSome(v470, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', stdlib.UInt_max, '0'));
      const v472 = stdlib.eq(v471, v419);
      const v473 = v472 ? v459 : v334;
      const v474 = await txn1.getOutput('Bob_getReward', 'v471', ctc1, v471);
      if (v221) {
        stdlib.protect(ctc0, await interact.out(v463, v474), {
          at: './index.rsh:97:11:application',
          fs: ['at ./index.rsh:97:11:application call to [unknown function] (defined at: ./index.rsh:97:11:function exp)', 'at ./index.rsh:101:15:application call to "notify" (defined at: ./index.rsh:98:27:function exp)', 'at ./index.rsh:98:27:application call to [unknown function] (defined at: ./index.rsh:98:27:function exp)'],
          msg: 'out',
          who: 'Bob_getReward'
          });
        }
      else {
        }
      
      const v835 = v426;
      const v836 = v427;
      const v839 = v436;
      const v840 = stdlib.lt(v426, v336);
      if (v840) {
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'Bob_seeBobsOutcome0_160': {
      const v494 = v460[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_join7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_join7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_join7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v334, v335, v336, v338, v374] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc5, ctc1]);
  const v384 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:66:25:application call to [unknown function] (defined at: ./index.rsh:66:25:function exp)', 'at ./index.rsh:66:25:application call to [unknown function] (defined at: ./index.rsh:66:25:function exp)'],
    msg: 'in',
    who: 'Bob_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v334, v335, v336, v338, v374, v384],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:68:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v392], secs: v394, time: v393, didSend: v100, from: v391 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_join"
        });
      const v396 = v392[stdlib.checkedBigNumberify('./index.rsh:66:10:spread', stdlib.UInt_max, '0')];
      ;
      const v399 = true;
      const v400 = await txn1.getOutput('Bob_join', 'v399', ctc7, v399);
      
      await stdlib.simMapSet(sim_r, 0, v391, v396);
      const v848 = v374;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v392], secs: v394, time: v393, didSend: v100, from: v391 } = txn1;
  undefined /* setApiDetails */;
  const v396 = v392[stdlib.checkedBigNumberify('./index.rsh:66:10:spread', stdlib.UInt_max, '0')];
  ;
  const v399 = true;
  const v400 = await txn1.getOutput('Bob_join', 'v399', ctc7, v399);
  if (v100) {
    stdlib.protect(ctc0, await interact.out(v392, v400), {
      at: './index.rsh:66:11:application',
      fs: ['at ./index.rsh:66:11:application call to [unknown function] (defined at: ./index.rsh:66:11:function exp)', 'at ./index.rsh:69:10:application call to "k" (defined at: ./index.rsh:68:22:function exp)', 'at ./index.rsh:68:22:application call to [unknown function] (defined at: ./index.rsh:68:22:function exp)'],
      msg: 'out',
      who: 'Bob_join'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v391, v396);
  const v848 = v374;
  return;
  
  
  
  };
export async function _Bob_seeBobsOutcome6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_seeBobsOutcome6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_seeBobsOutcome6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Bob_getReward0_160: ctc5,
    Bob_seeBobsOutcome0_160: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v334, v335, v336, v419, v426, v427, v436] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v451 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:105:31:application call to [unknown function] (defined at: ./index.rsh:105:31:function exp)', 'at ./index.rsh:94:64:application call to "runBob_seeBobsOutcome0_160" (defined at: ./index.rsh:105:10:function exp)', 'at ./index.rsh:94:64:application call to [unknown function] (defined at: ./index.rsh:94:64:function exp)'],
    msg: 'in',
    who: 'Bob_seeBobsOutcome'
    });
  const v455 = ['Bob_seeBobsOutcome0_160', v451];
  
  const txn1 = await (ctc.sendrecv({
    args: [v334, v335, v336, v419, v426, v427, v436, v455],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:106:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v460], secs: v462, time: v461, didSend: v221, from: v459 } = txn1;
      
      switch (v460[0]) {
        case 'Bob_getReward0_160': {
          const v463 = v460[1];
          
          break;
          }
        case 'Bob_seeBobsOutcome0_160': {
          const v494 = v460[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_seeBobsOutcome"
            });
          ;
          const v512 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v459), null);
          const v513 = stdlib.fromSome(v512, stdlib.checkedBigNumberify('./index.rsh:108:47:decimal', stdlib.UInt_max, '0'));
          const v514 = stdlib.eq(v513, v419);
          const v515 = v514 ? v459 : v334;
          const v517 = v514 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v518 = await txn1.getOutput('Bob_seeBobsOutcome', 'v517', ctc1, v517);
          
          const v523 = stdlib.add(v426, stdlib.checkedBigNumberify('./index.rsh:112:41:decimal', stdlib.UInt_max, '1'));
          const v889 = v523;
          const v890 = v517;
          const v893 = v436;
          const v894 = stdlib.lt(v523, v336);
          if (v894) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v515,
              tok: v335
              });
            sim_r.txns.push({
              kind: 'from',
              to: v334,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v335
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v460], secs: v462, time: v461, didSend: v221, from: v459 } = txn1;
  switch (v460[0]) {
    case 'Bob_getReward0_160': {
      const v463 = v460[1];
      return;
      break;
      }
    case 'Bob_seeBobsOutcome0_160': {
      const v494 = v460[1];
      undefined /* setApiDetails */;
      ;
      const v512 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v459), null);
      const v513 = stdlib.fromSome(v512, stdlib.checkedBigNumberify('./index.rsh:108:47:decimal', stdlib.UInt_max, '0'));
      const v514 = stdlib.eq(v513, v419);
      const v515 = v514 ? v459 : v334;
      const v517 = v514 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v518 = await txn1.getOutput('Bob_seeBobsOutcome', 'v517', ctc1, v517);
      if (v221) {
        stdlib.protect(ctc0, await interact.out(v494, v518), {
          at: './index.rsh:105:11:application',
          fs: ['at ./index.rsh:105:11:application call to [unknown function] (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:111:10:application call to "k" (defined at: ./index.rsh:106:19:function exp)', 'at ./index.rsh:106:19:application call to [unknown function] (defined at: ./index.rsh:106:19:function exp)'],
          msg: 'out',
          who: 'Bob_seeBobsOutcome'
          });
        }
      else {
        }
      
      const v523 = stdlib.add(v426, stdlib.checkedBigNumberify('./index.rsh:112:41:decimal', stdlib.UInt_max, '1'));
      const v889 = v523;
      const v890 = v517;
      const v893 = v436;
      const v894 = stdlib.lt(v523, v336);
      if (v894) {
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Bob_getReward(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_getReward expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_getReward expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bob_getReward6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_join(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_join expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_join expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_join7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_seeBobsOutcome(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_seeBobsOutcome expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_seeBobsOutcome expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bob_seeBobsOutcome6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_getReward()uint64`, `Bob_join(uint64)byte`, `Bob_seeBobsOutcome()uint64`],
    pure: [],
    sigs: [`Bob_getReward()uint64`, `Bob_join(uint64)byte`, `Bob_seeBobsOutcome()uint64`]
    },
  appApproval: `BiAQAAEHICgECAZQAwmVm9TgBYLniPcLBQqgjQYmAwEAAAEBIjUAMRhBBEwpZEkiWzUBIQZbNQIxGSMSQQAKMQAoIQqvZkIEGDYaABdJQQA+IjUEIzUGSSELDEAAH0khDAxAAA4hDBJEKTX/KDT/UEIA5iELEkQ2GgFCAH6BnprUlQQSRCk1/yo0/1BCAMo2GgIXNQQ2GgM2GgEXSSENDEABlEkhBwxAAK5JJAxAAEokEkQkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AE4huzqbAyBiEOD0Q0/zEAEkQ0/zQDJVs0AyEEWzQDVzAgMgY0AyEIW0ICekgkNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gAR0eKgkNP9QsDIGIQ4MRIAJAAAAAAAAAY8BsCo1BzEAKCo0/1BmNANXACA0AyVbNAMhBFs0A1cwIDIGNAMhCFtCAhxIIQc0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/JVs1/iEEWzX9gTBbNfyBOFs1+4FIWzX6STUFNfmABLGZIkU0+VCwNPkiVUAARiIxAIgC60k19yNbNPciVU01+IAIAAAAAAAAAdc0+BZQsDT4FjUHNP80/jT9NPw0+zQDgUBbNP8xADT4NPwSTTIGNPpCAbciMQCIAqVJNfcjWzT3IlVNNPwSNfgjIjT4TTX3gAgAAAAAAAACBTT3FlCwNPcWNQc0/zT+NP00/DT7Iwg09zT/MQA0+E0yBjT6QgFrSSMMQAC7SSEJDEAAayEJEkQhCTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQVJIls1/iEGWzX9gASkpfCINP4WUDT9FlCwNP8xABJENANXMCA0/hY0/RZQARJENP80AyVbNAMhBFs0/SIiNP8yBjQDIQhbQgDzIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/oAEmouRdLAjNP6IAd80/zEAEkQ0/zT+NAMhBFs0A1cwIDIGIkIAfEghD4gBpyI0ARJENARJIhJMNAISEURJNQVJSiJbNf8hBls1/oEQWzX9VxggNfyABKOJocE0/xZQNP4WUDT9FlA0/FCwIQ+IAWSxIrIBIrISIQWyEDIKshQ0/7IRszEANP8WUDT+FlA0/FAoSwFXAFBnSCM1ATIGNQJCANA1/zX+Nf01/DX7STX6NPsWUDT8FlA0/VA0/xZQKEsBVwBYZ0gkNQEyBjUCQgCiNf81/jX9Nfw1+zX6Nfk1+DX3NPs0+QxBAC009zT4FlA0+RZQNPoWUDT7FlA0/BZQNP8WUChLAVcAUGdIIQc1ATIGNQJCAFuxIrIBI7ISIQWyEDT9shQ0+LIRs7EisgE0/7III7IQNPeyB7OxIrIBIrISIQWyEDIJshUyCrIUNPiyEbNCAAAxGSENEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQqviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQUSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 88,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v335",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v336",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v337",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v335",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v336",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v337",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v418",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v419",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_getReward0_160",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_seeBobsOutcome0_160",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T16",
                "name": "v460",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v392",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v399",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v471",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v517",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bob_getReward",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bob_join",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_seeBobsOutcome",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v418",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v419",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_getReward0_160",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_seeBobsOutcome0_160",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T16",
                "name": "v460",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v392",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200209d3803806200209d833981016040819052620000269162000252565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f112545cf4cc4ef4cc46259a35cf4621d5a4b14828a08081bb8649d32a39f1bd99181900360c00190a1620000aa341560076200014b565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a86018051516001600160a01b0390811687528151880151865290518401518352600197889055439097558951808701919091529351909516838901529051908201529151828401528451808303909301835260a09091019093528051919262000142926002929091019062000175565b50505062000349565b81620001715760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000183906200030c565b90600052602060002090601f016020900481019282620001a75760008555620001f2565b82601f10620001c257805160ff1916838001178555620001f2565b82800160010185558215620001f2579182015b82811115620001f2578251825591602001919060010190620001d5565b506200020092915062000204565b5090565b5b8082111562000200576000815560010162000205565b604051608081016001600160401b03811182821017156200024c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200026657600080fd5b604080519081016001600160401b03811182821017156200029757634e487b7160e01b600052604160045260246000fd5b604052835181526080601f1983011215620002b157600080fd5b620002bb6200021b565b60208501519092506001600160a01b0381168114620002d957600080fd5b80835250604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b600181811c908216806200032157607f821691505b602082108114156200034357634e487b7160e01b600052602260045260246000fd5b50919050565b611d4480620003596000396000f3fe6080604052600436106100a55760003560e01c806383230757116100615780638323075714610150578063ab53f2c614610165578063ac3ab70314610188578063ad2d91d11461019b578063bf2c5b24146101ae578063c4619511146101c157005b80631a6a439b146100ae5780631e93b0f1146100c15780632ad04dc3146100e55780632c10a159146101085780633bc5b7bf1461011b57806351c56a5f1461014857005b366100ac57005b005b6100ac6100bc3660046116ea565b6101c9565b3480156100cd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100f86100f3366004611702565b61020b565b60405190151581526020016100dc565b6100ac61011636600461172d565b610250565b34801561012757600080fd5b5061013b61013636600461175e565b61028e565b6040516100dc91906117af565b6100d26102ba565b34801561015c57600080fd5b506001546100d2565b34801561017157600080fd5b5061017a6102f8565b6040516100dc92919061180b565b6100ac61019636600461172d565b610395565b6100ac6101a9366004611845565b6103d3565b6100ac6101bc36600461172d565b610411565b6100d261044f565b6101ef604051806060016040528060008152602001600015158152602001600081525090565b610207610201368490038401846118cd565b82610494565b5050565b60006102156114f8565b6020808201515184905260408051606081018252600080825292810183905290810191909152610245828261084c565b602001519392505050565b610276604051806060016040528060008152602001600015158152602001600081525090565b61020761028836849003840184611987565b82610a3a565b60408051606081018252600080825260208201819052918101919091526102b482610bea565b92915050565b60006102c461152a565b60208181015151600090819052604080516060810182528281529283018290528201526102f18282610494565b5192915050565b60006060600054600280805461030d906119bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610339906119bf565b80156103865780601f1061035b57610100808354040283529160200191610386565b820191906000526020600020905b81548152906001019060200180831161036957829003601f168201915b50505050509050915091509091565b6103bb604051806060016040528060008152602001600015158152602001600081525090565b6102076103cd368490038401846119f4565b8261084c565b6103f9604051806060016040528060008152602001600015158152602001600081525090565b61020761040b36849003840184611a4b565b82610cbc565b610437604051806060016040528060008152602001600015158152602001600081525090565b61020761044936849003840184611987565b82610ed2565b600061045961152a565b60208181015151600190526040805160608101825260008082529281018390529081019190915261048a8282610494565b6040015192915050565b6104a46006600054146014611024565b81516104bf9015806104b857508251600154145b6015611024565b6000808055600280546104d1906119bf565b80601f01602080910402602001604051908101604052809291908181526020018280546104fd906119bf565b801561054a5780601f1061051f5761010080835404028352916020019161054a565b820191906000526020600020905b81548152906001019060200180831161052d57829003601f168201915b50505050508060200190518101906105629190611aa5565b905061058a604051806060016040528060008152602001600015158152602001600081525090565b7fa45a7348ca5cb8930ab81f28bdf5d2e7da1c0042d26fe1c06917a7da6db0b2de33856040516105bb929190611b49565b60405180910390a160006020850151515160018111156105dd576105dd61177b565b1415610710576105ef34156012611024565b60016105fa33610bea565b51600181111561060c5761060c61177b565b14610618576000610626565b61062133610bea565b604001515b8082526040519081527ff3dada05fa9fd29c0194ba5a1668eb2f05ab636e21d07a9b6800a974ac4ce4dc9060200160405180910390a180518352610668611563565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608085018051845190920191909152608085015182840180519190915260a0860151905190920191909152518251146106d15782516106d3565b335b6020820180516001600160a01b0390921660409092019190915280514360609091015260c084015190516080015261070a8161104a565b50610846565b600160208501515151600181111561072a5761072a61177b565b14156108465761073c34156013611024565b6060820151600161074c33610bea565b51600181111561075e5761075e61177b565b1461076a576000610778565b61077333610bea565b604001515b146020820181905261078b57600161078e565b60005b6040828101829052519081527f45c5907a7a9344631a5c58ad8f5c193a1f328a12bafa9bde1832dbfccdfaecd99060200160405180910390a1604080820151908401526107d9611563565b825181516001600160a01b03918216905260208085015183519216910152604080840151825190910152606080840151825190910152608083015161082090600190611b9c565b6020808301805192909252604084015191518101919091528201516106d15782516106d3565b50505050565b61085c6007600054146017611024565b815161087790158061087057508251600154145b6018611024565b600080805560028054610889906119bf565b80601f01602080910402602001604051908101604052809291908181526020018280546108b5906119bf565b80156109025780601f106108d757610100808354040283529160200191610902565b820191906000526020600020905b8154815290600101906020018083116108e557829003601f168201915b505050505080602001905181019061091a9190611bc2565b905061092a600a43106019611024565b60408051338152845160208083019190915285015151518183015290517f028f10069e3d138251f5b63d2e84687a8240062d4382aa3353ec2f32004dc5519181900360600190a161097d34156016611024565b604051600181527fd6e4ed551c43b3d794d4372357fed9296840b6799a7ea7c2f494dda7e8ebdbb09060200160405180910390a1600160208381018290523360009081526004825260409020805460ff1916831781559085015151519101556109e46115ce565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183519091015260608084015183519091015280820180514390526080840151905190910152610846816111fc565b610a4a600160005414600b611024565b8151610a65901580610a5e57508251600154145b600c611024565b600080805560028054610a77906119bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa3906119bf565b8015610af05780601f10610ac557610100808354040283529160200191610af0565b820191906000526020600020905b815481529060010190602001808311610ad357829003601f168201915b5050505050806020019051810190610b089190611c52565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a1610b5f34156008611024565b610b79610b7233836020015160016112e6565b6009611024565b8051610b91906001600160a01b03163314600a611024565b610b996115ce565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351909101526060808401518351909101528082018051439052516000910152610846816111fc565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610c3657610c3661177b565b1415610cad576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610c7757610c7761177b565b6001811115610c8857610c8861177b565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610ccc6003600054146010611024565b8151610ce7901580610ce057508251600154145b6011611024565b600080805560028054610cf9906119bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610d25906119bf565b8015610d725780601f10610d4757610100808354040283529160200191610d72565b820191906000526020600020905b815481529060010190602001808311610d5557829003601f168201915b5050505050806020019051810190610d8a9190611bc2565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a1610de93415600d611024565b8051610e01906001600160a01b03163314600e611024565b602080840151805190820151604051610e4f93610e2993929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826060015114600f611024565b610e57611563565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845182015286820151820151845160609081019190915282850180516000908190528151909401939093528551835194169390910192909252805143920191909152608080840151915101526108468161104a565b610ee2600760005414601c611024565b8151610efd901580610ef657508251600154145b601d611024565b600080805560028054610f0f906119bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610f3b906119bf565b8015610f885780601f10610f5d57610100808354040283529160200191610f88565b820191906000526020600020905b815481529060010190602001808311610f6b57829003601f168201915b5050505050806020019051810190610fa09190611bc2565b9050610fb1600a431015601e611024565b60408051338152845160208083019190915285015115158183015290517f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb9181900360600190a16110043415601a611024565b805161101c906001600160a01b03163314601b611024565b6109e46115ce565b816102075760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b8051604001516020820151511015611184576110ae6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151831681850190815285516040908101518187019081528751606090810151818901908152858a018051516080808c01918252825189015160a0808e01918252935182015160c0808f0191825260066000554360015589519b8c019c909c529851909b169689019690965293519287019290925251928501929092525190830152925191810191909152905160e0820152610100016040516020818303038152906040526002908051906020019061117f92919061161b565b505050565b6111a081600001516020015182602001516040015160016112fe565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156111e2573d6000803e3d6000fd5b50600080805560018190556111f99060029061169f565b50565b6112406040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151831681850190815285516040908101518187019081528751606090810151818901908152858a01518601516080808b019182526007600055436001558551978801989098529451909716928501929092525190830152925191810191909152905160a082015260c0016040516020818303038152906040526002908051906020019061117f92919061161b565b60006112f483853085611312565b90505b9392505050565b6113098383836113ec565b61117f57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161137991611cd5565b60006040518083038185875af1925050503d80600081146113b6576040519150601f19603f3d011682016040523d82523d6000602084013e6113bb565b606091505b50915091506113cc828260016114bd565b50808060200190518101906113e19190611cf1565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161144b91611cd5565b60006040518083038185875af1925050503d8060008114611488576040519150601f19603f3d011682016040523d82523d6000602084013e61148d565b606091505b509150915061149e828260026114bd565b50808060200190518101906114b39190611cf1565b9695505050505050565b606083156114cc5750816112f7565b8251156114dc5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611041565b60405180604001604052806000815260200161152560408051808201909152600060208201908152815290565b905290565b60405180604001604052806000815260200161152560408051608081018252600060208201818152928201819052606082015290815290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016115256040518060a00160405280600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001611525604051806040016040528060008152602001600081525090565b828054611627906119bf565b90600052602060002090601f016020900481019282611649576000855561168f565b82601f1061166257805160ff191683800117855561168f565b8280016001018555821561168f579182015b8281111561168f578251825591602001919060010190611674565b5061169b9291506116d5565b5090565b5080546116ab906119bf565b6000825580601f106116bb575050565b601f0160209004906000526020600020908101906111f991905b5b8082111561169b57600081556001016116d6565b6000608082840312156116fc57600080fd5b50919050565b60006020828403121561171457600080fd5b5035919050565b6000604082840312156116fc57600080fd5b60006040828403121561173f57600080fd5b6112f7838361171b565b6001600160a01b03811681146111f957600080fd5b60006020828403121561177057600080fd5b81356112f781611749565b634e487b7160e01b600052602160045260246000fd5b600281106111f957634e487b7160e01b600052602160045260246000fd5b815160608201906117bf81611791565b808352506020830151151560208301526040830151604083015292915050565b60005b838110156117fa5781810151838201526020016117e2565b838111156108465750506000910152565b82815260406020820152600082518060408401526118308160608501602087016117df565b601f01601f1916919091016060019392505050565b6000606082840312156116fc57600080fd5b6040805190810167ffffffffffffffff8111828210171561188857634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561188857634e487b7160e01b600052604160045260246000fd5b80151581146111f957600080fd5b600081830360808112156118e057600080fd5b6118e8611857565b833581526060601f19830112156118fe57600080fd5b61190661188e565b91506040516060810181811067ffffffffffffffff8211171561193957634e487b7160e01b600052604160045260246000fd5b60405260208501356002811061194e57600080fd5b8152604085013561195e816118bf565b60208201526060850135611971816118bf565b6040820152825260208101919091529392505050565b60006040828403121561199957600080fd5b6119a1611857565b8235815260208301356119b3816118bf565b60208201529392505050565b600181811c908216806119d357607f821691505b602082108114156116fc57634e487b7160e01b600052602260045260246000fd5b60008183036040811215611a0757600080fd5b611a0f611857565b833581526020601f1983011215611a2557600080fd5b611a2d61188e565b9150611a3761188e565b602094850135815282529283015250919050565b60008183036060811215611a5e57600080fd5b611a66611857565b833581526040601f1983011215611a7c57600080fd5b611a84611857565b60208581013582526040909501358582015293810193909352509092915050565b600060e08284031215611ab757600080fd5b60405160e0810181811067ffffffffffffffff82111715611ae857634e487b7160e01b600052604160045260246000fd5b6040528251611af681611749565b81526020830151611b0681611749565b8060208301525060408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190611b7581611791565b80604085015250602081015115156060840152604081015115156080840152509392505050565b60008219821115611bbd57634e487b7160e01b600052601160045260246000fd5b500190565b600060a08284031215611bd457600080fd5b60405160a0810181811067ffffffffffffffff82111715611c0557634e487b7160e01b600052604160045260246000fd5b6040528251611c1381611749565b81526020830151611c2381611749565b806020830152506040830151604082015260608301516060820152608083015160808201528091505092915050565b600060808284031215611c6457600080fd5b6040516080810181811067ffffffffffffffff82111715611c9557634e487b7160e01b600052604160045260246000fd5b6040528251611ca381611749565b81526020830151611cb381611749565b6020820152604083810151908201526060928301519281019290925250919050565b60008251611ce78184602087016117df565b9190910192915050565b600060208284031215611d0357600080fd5b81516112f7816118bf56fea264697066735822122012f2d97d049b7399c0d4f7b25f52ab727e0a6cb829f819c3d1146a76e5e592fd64736f6c634300080c0033`,
  BytecodeLen: 8349,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:54:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:88:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:124:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:94:64:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:63:36:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_getReward": Bob_getReward,
  "Bob_join": Bob_join,
  "Bob_seeBobsOutcome": Bob_seeBobsOutcome
  };
export const _APIs = {
  Bob: {
    getReward: Bob_getReward,
    join: Bob_join,
    seeBobsOutcome: Bob_seeBobsOutcome
    }
  };
