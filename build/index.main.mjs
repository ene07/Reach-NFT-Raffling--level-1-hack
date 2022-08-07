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
      6: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      7: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc2, ctc2]
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
    Bob_getReward0_176: ctc10,
    Bob_seeBobsOutcome0_176: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v371 = stdlib.protect(ctc4, await interact.startRaffleDraw(), {
    at: './index.rsh:55:89:application',
    fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:13:function exp)'],
    msg: 'startRaffleDraw',
    who: 'Alice'
    });
  const v372 = v371.nftId;
  const v373 = v371.numberOfBobs;
  const v374 = v371.numberOfTickets;
  const v378 = stdlib.protect(ctc1, await interact.getRandomNumber(v374), {
    at: './index.rsh:56:52:application',
    fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:13:function exp)'],
    msg: 'getRandomNumber',
    who: 'Alice'
    });
  const v379 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:57:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v380 = stdlib.digest(ctc5, [v379, v378]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v372, v374, v373, v380],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:60:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v383, v384, v385, v386], secs: v388, time: v387, didSend: v55, from: v382 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v383
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
  const {data: [v383, v384, v385, v386], secs: v388, time: v387, didSend: v55, from: v382 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.displayHashValue(v386), {
    at: './index.rsh:61:30:application',
    fs: ['at ./index.rsh:61:30:application call to [unknown function] (defined at: ./index.rsh:61:30:function exp)', 'at ./index.rsh:61:30:application call to "liftedInteract" (defined at: ./index.rsh:61:30:application)'],
    msg: 'displayHashValue',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v382, v383, v384, v386],
    evt_cnt: 0,
    funcNum: 1,
    lct: v387,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:5:13:decimal', stdlib.UInt_max, '1'), v383]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v399, time: v398, didSend: v66, from: v397 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:5:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v383
        });
      
      const v414 = stdlib.checkedBigNumberify('./index.rsh:71:38:decimal', stdlib.UInt_max, '0');
      const v415 = v398;
      const v422 = stdlib.checkedBigNumberify('./index.rsh:52:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v426 = stdlib.lt(v414, v384);
        
        return v426;})()) {
        const v433 = stdlib.add(v415, stdlib.checkedBigNumberify('./index.rsh:84:27:decimal', stdlib.UInt_max, '10'));
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
  const {data: [], secs: v399, time: v398, didSend: v66, from: v397 } = txn2;
  ;
  ;
  const v409 = stdlib.addressEq(v382, v397);
  stdlib.assert(v409, {
    at: './index.rsh:63:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.getUsers(), {
    at: './index.rsh:65:22:application',
    fs: ['at ./index.rsh:65:22:application call to [unknown function] (defined at: ./index.rsh:65:22:function exp)', 'at ./index.rsh:65:22:application call to "liftedInteract" (defined at: ./index.rsh:65:22:application)'],
    msg: 'getUsers',
    who: 'Alice'
    });
  
  let v414 = stdlib.checkedBigNumberify('./index.rsh:71:38:decimal', stdlib.UInt_max, '0');
  let v415 = v398;
  let v422 = stdlib.checkedBigNumberify('./index.rsh:52:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v426 = stdlib.lt(v414, v384);
    
    return v426;})()) {
    const v433 = stdlib.add(v415, stdlib.checkedBigNumberify('./index.rsh:84:27:decimal', stdlib.UInt_max, '10'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc7],
      timeoutAt: ['time', v433],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v382, v383, v384, v386, v414, v422, v433],
        evt_cnt: 0,
        funcNum: 8,
        lct: v415,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:85:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v463, time: v462, didSend: v145, from: v461 } = txn4;
          
          ;
          const v465 = stdlib.add(v414, stdlib.checkedBigNumberify('./index.rsh:87:20:decimal', stdlib.UInt_max, '1'));
          const cv414 = v465;
          const cv415 = v462;
          const cv422 = v422;
          
          await (async () => {
            const v414 = cv414;
            const v415 = cv415;
            const v422 = cv422;
            
            if (await (async () => {
              const v426 = stdlib.lt(v414, v384);
              
              return v426;})()) {
              const v433 = stdlib.add(v415, stdlib.checkedBigNumberify('./index.rsh:84:27:decimal', stdlib.UInt_max, '10'));
              sim_r.isHalt = false;
              }
            else {
              
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc9, ctc3, ctc1, ctc6, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v463, time: v462, didSend: v145, from: v461 } = txn4;
      ;
      const v464 = stdlib.addressEq(v382, v461);
      stdlib.assert(v464, {
        at: './index.rsh:85:15:dot',
        fs: ['at ./index.rsh:84:35:application call to [unknown function] (defined at: ./index.rsh:84:35:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v465 = stdlib.add(v414, stdlib.checkedBigNumberify('./index.rsh:87:20:decimal', stdlib.UInt_max, '1'));
      const cv414 = v465;
      const cv415 = v462;
      const cv422 = v422;
      
      v414 = cv414;
      v415 = cv415;
      v422 = cv422;
      
      continue;
      }
    else {
      const {data: [v445], secs: v447, time: v446, didSend: v114, from: v444 } = txn3;
      undefined /* setApiDetails */;
      const v449 = v445[stdlib.checkedBigNumberify('./index.rsh:74:10:spread', stdlib.UInt_max, '0')];
      ;
      const v452 = true;
      await txn3.getOutput('Bob_join', 'v452', ctc8, v452);
      await stdlib.mapSet(map0, v444, v449);
      const v459 = stdlib.add(v414, stdlib.checkedBigNumberify('./index.rsh:79:28:decimal', stdlib.UInt_max, '1'));
      const cv414 = v459;
      const cv415 = v446;
      const cv422 = v422;
      
      v414 = cv414;
      v415 = cv415;
      v422 = cv422;
      
      continue;}
    
    }
  stdlib.protect(ctc0, await interact.displayWinningNumber(v378), {
    at: './index.rsh:94:34:application',
    fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:13:function exp)'],
    msg: 'displayWinningNumber',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v382, v383, v384, v386, v422, v379, v378],
    evt_cnt: 2,
    funcNum: 3,
    lct: v415,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:97:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v471, v472], secs: v474, time: v473, didSend: v157, from: v470 } = txn3;
      
      ;
      
      const v479 = stdlib.checkedBigNumberify('./index.rsh:102:69:decimal', stdlib.UInt_max, '0');
      const v480 = stdlib.checkedBigNumberify('./index.rsh:102:71:decimal', stdlib.UInt_max, '0');
      const v481 = v382;
      const v482 = v473;
      const v489 = v422;
      
      if (await (async () => {
        const v493 = stdlib.lt(v479, v384);
        
        return v493;})()) {
        const v500 = stdlib.add(v482, stdlib.checkedBigNumberify('./index.rsh:125:27:decimal', stdlib.UInt_max, '10'));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v481,
          tok: v383
          });
        sim_r.txns.push({
          kind: 'from',
          to: v382,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v383
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
  const {data: [v471, v472], secs: v474, time: v473, didSend: v157, from: v470 } = txn3;
  ;
  const v475 = stdlib.addressEq(v382, v470);
  stdlib.assert(v475, {
    at: './index.rsh:97:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v476 = stdlib.digest(ctc5, [v471, v472]);
  const v477 = stdlib.digestEq(v386, v476);
  stdlib.assert(v477, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:98:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.rewardReady(), {
    at: './index.rsh:100:25:application',
    fs: ['at ./index.rsh:100:25:application call to [unknown function] (defined at: ./index.rsh:100:25:function exp)', 'at ./index.rsh:100:25:application call to "liftedInteract" (defined at: ./index.rsh:100:25:application)'],
    msg: 'rewardReady',
    who: 'Alice'
    });
  
  let v479 = stdlib.checkedBigNumberify('./index.rsh:102:69:decimal', stdlib.UInt_max, '0');
  let v480 = stdlib.checkedBigNumberify('./index.rsh:102:71:decimal', stdlib.UInt_max, '0');
  let v481 = v382;
  let v482 = v473;
  let v489 = v422;
  
  while (await (async () => {
    const v493 = stdlib.lt(v479, v384);
    
    return v493;})()) {
    const v500 = stdlib.add(v482, stdlib.checkedBigNumberify('./index.rsh:125:27:decimal', stdlib.UInt_max, '10'));
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc11],
      timeoutAt: ['time', v500],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v382, v383, v384, v472, v479, v480, v489, v500],
        evt_cnt: 0,
        funcNum: 6,
        lct: v482,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:126:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v588, time: v587, didSend: v285, from: v586 } = txn5;
          
          ;
          const v590 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v586), null);
          const v591 = stdlib.fromSome(v590, stdlib.checkedBigNumberify('./index.rsh:127:45:decimal', stdlib.UInt_max, '0'));
          const v592 = stdlib.eq(v591, v472);
          const v593 = v592 ? v586 : v382;
          const v594 = stdlib.add(v479, stdlib.checkedBigNumberify('./index.rsh:130:33:decimal', stdlib.UInt_max, '1'));
          const cv479 = v594;
          const cv480 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const cv481 = v593;
          const cv482 = v587;
          const cv489 = v489;
          
          await (async () => {
            const v479 = cv479;
            const v480 = cv480;
            const v481 = cv481;
            const v482 = cv482;
            const v489 = cv489;
            
            if (await (async () => {
              const v493 = stdlib.lt(v479, v384);
              
              return v493;})()) {
              const v500 = stdlib.add(v482, stdlib.checkedBigNumberify('./index.rsh:125:27:decimal', stdlib.UInt_max, '10'));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v481,
                tok: v383
                });
              sim_r.txns.push({
                kind: 'from',
                to: v382,
                tok: undefined /* Nothing */
                });
              
              sim_r.txns.push({
                kind: 'halt',
                tok: v383
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc9, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v588, time: v587, didSend: v285, from: v586 } = txn5;
      ;
      const v589 = stdlib.addressEq(v382, v586);
      stdlib.assert(v589, {
        at: './index.rsh:126:15:dot',
        fs: ['at ./index.rsh:125:35:application call to [unknown function] (defined at: ./index.rsh:125:35:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v590 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v586), null);
      const v591 = stdlib.fromSome(v590, stdlib.checkedBigNumberify('./index.rsh:127:45:decimal', stdlib.UInt_max, '0'));
      const v592 = stdlib.eq(v591, v472);
      const v593 = v592 ? v586 : v382;
      const v594 = stdlib.add(v479, stdlib.checkedBigNumberify('./index.rsh:130:33:decimal', stdlib.UInt_max, '1'));
      const cv479 = v594;
      const cv480 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const cv481 = v593;
      const cv482 = v587;
      const cv489 = v489;
      
      v479 = cv479;
      v480 = cv480;
      v481 = cv481;
      v482 = cv482;
      v489 = cv489;
      
      continue;
      }
    else {
      const {data: [v521], secs: v523, time: v522, didSend: v237, from: v520 } = txn4;
      switch (v521[0]) {
        case 'Bob_getReward0_176': {
          const v524 = v521[1];
          undefined /* setApiDetails */;
          ;
          const v531 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v520), null);
          const v532 = stdlib.fromSome(v531, stdlib.checkedBigNumberify('./index.rsh:107:47:decimal', stdlib.UInt_max, '0'));
          const v533 = stdlib.eq(v532, v472);
          const v534 = v533 ? v520 : v382;
          await txn4.getOutput('Bob_getReward', 'v532', ctc1, v532);
          const cv479 = v479;
          const cv480 = v480;
          const cv481 = v534;
          const cv482 = v522;
          const cv489 = v489;
          
          v479 = cv479;
          v480 = cv480;
          v481 = cv481;
          v482 = cv482;
          v489 = cv489;
          
          continue;
          break;
          }
        case 'Bob_seeBobsOutcome0_176': {
          const v555 = v521[1];
          undefined /* setApiDetails */;
          ;
          const v573 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v520), null);
          const v574 = stdlib.fromSome(v573, stdlib.checkedBigNumberify('./index.rsh:116:47:decimal', stdlib.UInt_max, '0'));
          const v575 = stdlib.eq(v574, v472);
          const v576 = v575 ? v520 : v382;
          const v578 = v575 ? stdlib.checkedBigNumberify('./index.rsh:9:39:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:9:42:decimal', stdlib.UInt_max, '0');
          await txn4.getOutput('Bob_seeBobsOutcome', 'v578', ctc1, v578);
          const v584 = stdlib.add(v479, stdlib.checkedBigNumberify('./index.rsh:121:41:decimal', stdlib.UInt_max, '1'));
          const cv479 = v584;
          const cv480 = v578;
          const cv481 = v576;
          const cv482 = v522;
          const cv489 = v489;
          
          v479 = cv479;
          v480 = cv480;
          v481 = cv481;
          v482 = cv482;
          v489 = cv489;
          
          continue;
          break;
          }
        }}
    
    }
  ;
  ;
  stdlib.protect(ctc0, await interact.seeOutcome(v480), {
    at: './index.rsh:141:23:application',
    fs: ['at ./index.rsh:141:23:application call to [unknown function] (defined at: ./index.rsh:141:23:function exp)', 'at ./index.rsh:141:23:application call to "liftedInteract" (defined at: ./index.rsh:141:23:application)'],
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
    Bob_getReward0_176: ctc5,
    Bob_seeBobsOutcome0_176: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v382, v383, v384, v472, v479, v480, v489, v500] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v504 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:105:27:application call to [unknown function] (defined at: ./index.rsh:105:27:function exp)', 'at ./index.rsh:102:64:application call to "runBob_getReward0_176" (defined at: ./index.rsh:105:10:function exp)', 'at ./index.rsh:102:64:application call to [unknown function] (defined at: ./index.rsh:102:64:function exp)'],
    msg: 'in',
    who: 'Bob_getReward'
    });
  const v508 = ['Bob_getReward0_176', v504];
  
  const txn1 = await (ctc.sendrecv({
    args: [v382, v383, v384, v472, v479, v480, v489, v500, v508],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:106:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v521], secs: v523, time: v522, didSend: v237, from: v520 } = txn1;
      
      switch (v521[0]) {
        case 'Bob_getReward0_176': {
          const v524 = v521[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_getReward"
            });
          ;
          const v531 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v520), null);
          const v532 = stdlib.fromSome(v531, stdlib.checkedBigNumberify('./index.rsh:107:47:decimal', stdlib.UInt_max, '0'));
          const v533 = stdlib.eq(v532, v472);
          const v534 = v533 ? v520 : v382;
          const v535 = await txn1.getOutput('Bob_getReward', 'v532', ctc1, v532);
          
          const v949 = v479;
          const v950 = v480;
          const v953 = v489;
          const v954 = stdlib.lt(v479, v384);
          if (v954) {
            const v955 = stdlib.add(v522, stdlib.checkedBigNumberify('./index.rsh:125:27:decimal', stdlib.UInt_max, '10'));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v534,
              tok: v383
              });
            sim_r.txns.push({
              kind: 'from',
              to: v382,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v383
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Bob_seeBobsOutcome0_176': {
          const v555 = v521[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v521], secs: v523, time: v522, didSend: v237, from: v520 } = txn1;
  switch (v521[0]) {
    case 'Bob_getReward0_176': {
      const v524 = v521[1];
      undefined /* setApiDetails */;
      ;
      const v531 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v520), null);
      const v532 = stdlib.fromSome(v531, stdlib.checkedBigNumberify('./index.rsh:107:47:decimal', stdlib.UInt_max, '0'));
      const v533 = stdlib.eq(v532, v472);
      const v534 = v533 ? v520 : v382;
      const v535 = await txn1.getOutput('Bob_getReward', 'v532', ctc1, v532);
      if (v237) {
        stdlib.protect(ctc0, await interact.out(v524, v535), {
          at: './index.rsh:105:11:application',
          fs: ['at ./index.rsh:105:11:application call to [unknown function] (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:109:15:application call to "notify" (defined at: ./index.rsh:106:27:function exp)', 'at ./index.rsh:106:27:application call to [unknown function] (defined at: ./index.rsh:106:27:function exp)'],
          msg: 'out',
          who: 'Bob_getReward'
          });
        }
      else {
        }
      
      const v949 = v479;
      const v950 = v480;
      const v953 = v489;
      const v954 = stdlib.lt(v479, v384);
      if (v954) {
        const v955 = stdlib.add(v522, stdlib.checkedBigNumberify('./index.rsh:125:27:decimal', stdlib.UInt_max, '10'));
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'Bob_seeBobsOutcome0_176': {
      const v555 = v521[1];
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
  
  
  const [v382, v383, v384, v386, v414, v422, v433] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc1]);
  const v437 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:74:25:application call to [unknown function] (defined at: ./index.rsh:74:25:function exp)', 'at ./index.rsh:74:25:application call to [unknown function] (defined at: ./index.rsh:74:25:function exp)'],
    msg: 'in',
    who: 'Bob_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v382, v383, v384, v386, v414, v422, v433, v437],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v445], secs: v447, time: v446, didSend: v114, from: v444 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_join"
        });
      const v449 = v445[stdlib.checkedBigNumberify('./index.rsh:74:10:spread', stdlib.UInt_max, '0')];
      ;
      const v452 = true;
      const v453 = await txn1.getOutput('Bob_join', 'v452', ctc7, v452);
      
      await stdlib.simMapSet(sim_r, 0, v444, v449);
      const v459 = stdlib.add(v414, stdlib.checkedBigNumberify('./index.rsh:79:28:decimal', stdlib.UInt_max, '1'));
      const v963 = v459;
      const v965 = v422;
      const v966 = stdlib.lt(v459, v384);
      if (v966) {
        const v967 = stdlib.add(v446, stdlib.checkedBigNumberify('./index.rsh:84:27:decimal', stdlib.UInt_max, '10'));
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v445], secs: v447, time: v446, didSend: v114, from: v444 } = txn1;
  undefined /* setApiDetails */;
  const v449 = v445[stdlib.checkedBigNumberify('./index.rsh:74:10:spread', stdlib.UInt_max, '0')];
  ;
  const v452 = true;
  const v453 = await txn1.getOutput('Bob_join', 'v452', ctc7, v452);
  if (v114) {
    stdlib.protect(ctc0, await interact.out(v445, v453), {
      at: './index.rsh:74:11:application',
      fs: ['at ./index.rsh:74:11:application call to [unknown function] (defined at: ./index.rsh:74:11:function exp)', 'at ./index.rsh:77:10:application call to "k" (defined at: ./index.rsh:76:22:function exp)', 'at ./index.rsh:76:22:application call to [unknown function] (defined at: ./index.rsh:76:22:function exp)'],
      msg: 'out',
      who: 'Bob_join'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v444, v449);
  const v459 = stdlib.add(v414, stdlib.checkedBigNumberify('./index.rsh:79:28:decimal', stdlib.UInt_max, '1'));
  const v963 = v459;
  const v965 = v422;
  const v966 = stdlib.lt(v459, v384);
  if (v966) {
    const v967 = stdlib.add(v446, stdlib.checkedBigNumberify('./index.rsh:84:27:decimal', stdlib.UInt_max, '10'));
    return;
    }
  else {
    return;
    }
  
  
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
    Bob_getReward0_176: ctc5,
    Bob_seeBobsOutcome0_176: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v382, v383, v384, v472, v479, v480, v489, v500] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v512 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:113:31:application call to [unknown function] (defined at: ./index.rsh:113:31:function exp)', 'at ./index.rsh:102:64:application call to "runBob_seeBobsOutcome0_176" (defined at: ./index.rsh:113:10:function exp)', 'at ./index.rsh:102:64:application call to [unknown function] (defined at: ./index.rsh:102:64:function exp)'],
    msg: 'in',
    who: 'Bob_seeBobsOutcome'
    });
  const v516 = ['Bob_seeBobsOutcome0_176', v512];
  
  const txn1 = await (ctc.sendrecv({
    args: [v382, v383, v384, v472, v479, v480, v489, v500, v516],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:114:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v521], secs: v523, time: v522, didSend: v237, from: v520 } = txn1;
      
      switch (v521[0]) {
        case 'Bob_getReward0_176': {
          const v524 = v521[1];
          
          break;
          }
        case 'Bob_seeBobsOutcome0_176': {
          const v555 = v521[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_seeBobsOutcome"
            });
          ;
          const v573 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v520), null);
          const v574 = stdlib.fromSome(v573, stdlib.checkedBigNumberify('./index.rsh:116:47:decimal', stdlib.UInt_max, '0'));
          const v575 = stdlib.eq(v574, v472);
          const v576 = v575 ? v520 : v382;
          const v578 = v575 ? stdlib.checkedBigNumberify('./index.rsh:9:39:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:9:42:decimal', stdlib.UInt_max, '0');
          const v579 = await txn1.getOutput('Bob_seeBobsOutcome', 'v578', ctc1, v578);
          
          const v584 = stdlib.add(v479, stdlib.checkedBigNumberify('./index.rsh:121:41:decimal', stdlib.UInt_max, '1'));
          const v1020 = v584;
          const v1021 = v578;
          const v1024 = v489;
          const v1025 = stdlib.lt(v584, v384);
          if (v1025) {
            const v1026 = stdlib.add(v522, stdlib.checkedBigNumberify('./index.rsh:125:27:decimal', stdlib.UInt_max, '10'));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v576,
              tok: v383
              });
            sim_r.txns.push({
              kind: 'from',
              to: v382,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v383
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
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v521], secs: v523, time: v522, didSend: v237, from: v520 } = txn1;
  switch (v521[0]) {
    case 'Bob_getReward0_176': {
      const v524 = v521[1];
      return;
      break;
      }
    case 'Bob_seeBobsOutcome0_176': {
      const v555 = v521[1];
      undefined /* setApiDetails */;
      ;
      const v573 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v520), null);
      const v574 = stdlib.fromSome(v573, stdlib.checkedBigNumberify('./index.rsh:116:47:decimal', stdlib.UInt_max, '0'));
      const v575 = stdlib.eq(v574, v472);
      const v576 = v575 ? v520 : v382;
      const v578 = v575 ? stdlib.checkedBigNumberify('./index.rsh:9:39:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:9:42:decimal', stdlib.UInt_max, '0');
      const v579 = await txn1.getOutput('Bob_seeBobsOutcome', 'v578', ctc1, v578);
      if (v237) {
        stdlib.protect(ctc0, await interact.out(v555, v579), {
          at: './index.rsh:113:11:application',
          fs: ['at ./index.rsh:113:11:application call to [unknown function] (defined at: ./index.rsh:113:11:function exp)', 'at ./index.rsh:120:10:application call to "k" (defined at: ./index.rsh:114:19:function exp)', 'at ./index.rsh:114:19:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)'],
          msg: 'out',
          who: 'Bob_seeBobsOutcome'
          });
        }
      else {
        }
      
      const v584 = stdlib.add(v479, stdlib.checkedBigNumberify('./index.rsh:121:41:decimal', stdlib.UInt_max, '1'));
      const v1020 = v584;
      const v1021 = v578;
      const v1024 = v489;
      const v1025 = stdlib.lt(v584, v384);
      if (v1025) {
        const v1026 = stdlib.add(v522, stdlib.checkedBigNumberify('./index.rsh:125:27:decimal', stdlib.UInt_max, '10'));
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
  appApproval: `BiAWAAEgKAhQBwYDBAmVm9TgBYLniPcLBWBYMDgCSKCNBgomAwEAAAEBIjUAMRhBBSkpZEkiWzUBIQRbNQIxGSMSQQAKMQAoIQqvZkIE9TYaABdJQQA+IjUEIzUGSSELDEAAH0khDAxAAA4hDBJEKTX/KDT/UEIBciELEkQ2GgFCAIqBnprUlQQSRCk1/yo0/1BCAVY2GgIXNQQ2GgM2GgEXSSENDEACKEkhBgxAAMRJIQQMQABVIQQSRCEGNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEF/zbLrAyBjQDIQ5bD0Q0/zEAEkQ0/zQDJFs0AyVbNANXMCA0AyEFWyMIMgY0AyEPW0IDAUghBjQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEZtmCFTT/ULAyBjQDIQ5bDESACQAAAAAAAAHEAbAqNQcxACgqNP9QZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQVbIwgyBjQDIQ9bQgKZSSEHDEAAb0ghBzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IRBbNf6ABGG0rAywMgY0AyEFWw9ENP8xABJENP80AyRbNAMlWzT+NAMhEVsjCCESNP8xACIxAIgDp0k1/SNbNP0iVU00/hJNMgY0AyETW0ICkEghBzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8kWzX+JVs1/SEQWzX8IRFbNfshE1s1+kk1BTX5gASxmSJFNPlQsDIGNAMhBVsMRDT5IlVAAEYiMQCIAzRJNfcjWzT3IlVNNfiACAAAAAAAAAIUNPgWULA0+BY1BzT/NP40/TT8NPs0A4FAWzT/MQA0+DT8Ek0yBjT6QgH1IjEAiALuSTX3I1s09yJVTTT8EjX4IiM0+E0194AIAAAAAAAAAkI09xZQsDT3FjUHNP80/jT9NPw0+yMINPc0/zEANPhNMgY0+kIBqUkjDEAAukkhCAxAAGohCBJEIQg0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFSSJbNf4hBFs1/YAEpKXwiDT+FlA0/RZQsDT/MQASRDQDVzAgNP4WNP0WUAESRDT/NAMkWzQDJVs0/SIiNP8yBjQDIQVbQgEyIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JFs1/oAEmouRdLAjNP6IAik0/zEAEkQ0/zT+NAMlWzQDVzAgIjIGIkIAfEghFIgB8SI0ARJENARJIhJMNAISEURJNQVJSiJbNf8hBFs1/oEQWzX9VxggNfyABKOJocE0/xZQNP4WUDT9FlA0/FCwIRSIAa6xIrIBIrISIQmyEDIKshQ0/7IRszEANP8WUDT+FlA0/FAoSwFXAFBnSCM1ATIGNQJCARo1/zX+Nf01/DX7Nfo1+TT9NPsMQQAzNP4hFQg1+DT5NPoWUDT7FlA0/FA0/RZQNP8WUDT4FlAoSwFXAGhnSCEGNQEyBjUCQgDRNPk0+hZQNPsWUDT8UDT/FlAoSwFXAFhnSCEINQEyBjUCQgCtNf81/jX9Nfw1+zX6Nfk1+DX3NPs0+QxBADg0/iEVCDX2NPc0+BZQNPkWUDT6FlA0+xZQNPwWUDT/FlA09hZQKEsBVwBYZ0ghBzUBMgY1AkIAW7EisgEjshIhCbIQNP2yFDT4shGzsSKyATT/sggjshA097IHs7EisgEishIhCbIQMgmyFTIKshQ0+LIRs0IAADEZIQ0SRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhEjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghCq+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhCRJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 104,
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
                "name": "v383",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v384",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v385",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v386",
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
                "name": "v383",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v384",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v385",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v386",
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
                "name": "v471",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v472",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_getReward0_176",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_seeBobsOutcome0_176",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T17",
                "name": "v521",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T20",
                "name": "v445",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
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
    "name": "_reach_e8",
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
    "name": "_reach_oe_v452",
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
    "name": "_reach_oe_v532",
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
    "name": "_reach_oe_v578",
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
                "name": "v471",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v472",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_getReward0_176",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_seeBobsOutcome0_176",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T17",
                "name": "v521",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T20",
                "name": "v445",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
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
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200257838038062002578833981016040819052620000269162000252565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f112545cf4cc4ef4cc46259a35cf4621d5a4b14828a08081bb8649d32a39f1bd99181900360c00190a1620000aa341560076200014b565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a86018051516001600160a01b0390811687528151880151865290518401518352600197889055439097558951808701919091529351909516838901529051908201529151828401528451808303909301835260a09091019093528051919262000142926002929091019062000175565b50505062000349565b81620001715760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000183906200030c565b90600052602060002090601f016020900481019282620001a75760008555620001f2565b82601f10620001c257805160ff1916838001178555620001f2565b82800160010185558215620001f2579182015b82811115620001f2578251825591602001919060010190620001d5565b506200020092915062000204565b5090565b5b8082111562000200576000815560010162000205565b604051608081016001600160401b03811182821017156200024c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200026657600080fd5b604080519081016001600160401b03811182821017156200029757634e487b7160e01b600052604160045260246000fd5b604052835181526080601f1983011215620002b157600080fd5b620002bb6200021b565b60208501519092506001600160a01b0381168114620002d957600080fd5b80835250604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b600181811c908216806200032157607f821691505b602082108114156200034357634e487b7160e01b600052602260045260246000fd5b50919050565b61221f80620003596000396000f3fe6080604052600436106100bd5760003560e01c806351c56a5f11610079578063ad2d91d111610056578063ad2d91d1146101b3578063c4619511146101c6578063c7980037146101ce578063e533a29d146101e157005b806351c56a5f14610173578063832307571461017b578063ab53f2c61461019057005b80631a6a439b146100c65780631e93b0f1146100d95780632ad04dc3146100fd5780632c10a159146101205780633bc5b7bf146101335780634eb0899b1461016057005b366100c457005b005b6100c46100d4366004611ae1565b6101f4565b3480156100e557600080fd5b506003545b6040519081526020015b60405180910390f35b61011061010b366004611af9565b610236565b60405190151581526020016100f4565b6100c461012e366004611b24565b61027b565b34801561013f57600080fd5b5061015361014e366004611b55565b6102b9565b6040516100f49190611ba6565b6100c461016e366004611b24565b6102e5565b6100ea610323565b34801561018757600080fd5b506001546100ea565b34801561019c57600080fd5b506101a5610361565b6040516100f4929190611c02565b6100c46101c1366004611c3c565b6103fe565b6100ea61043c565b6100c46101dc366004611b24565b610481565b6100c46101ef366004611b24565b6104bf565b61021a604051806060016040528060008152602001600015158152602001600081525090565b61023261022c36849003840184611cc4565b826104fd565b5050565b60006102406118e1565b602080820151518490526040805160608101825260008082529281018390529081019190915261027082826108c6565b602001519392505050565b6102a1604051806060016040528060008152602001600015158152602001600081525090565b6102326102b336849003840184611d7e565b82610acd565b60408051606081018252600080825260208201819052918101919091526102df82610c75565b92915050565b61030b604051806060016040528060008152602001600015158152602001600081525090565b61023261031d36849003840184611db6565b826108c6565b600061032d611913565b602081810151516000908190526040805160608101825282815292830182905282015261035a82826104fd565b5192915050565b60006060600054600280805461037690611e0d565b80601f01602080910402602001604051908101604052809291908181526020018280546103a290611e0d565b80156103ef5780601f106103c4576101008083540402835291602001916103ef565b820191906000526020600020905b8154815290600101906020018083116103d257829003601f168201915b50505050509050915091509091565b610424604051806060016040528060008152602001600015158152602001600081525090565b61023261043636849003840184611e42565b82610d48565b6000610446611913565b60208181015151600190526040805160608101825260008082529281018390529081019190915261047782826104fd565b6040015192915050565b6104a7604051806060016040528060008152602001600015158152602001600081525090565b6102326104b936849003840184611d7e565b82610f5e565b6104e5604051806060016040528060008152602001600015158152602001600081525090565b6102326104f736849003840184611d7e565b8261117f565b61050d60066000541460146112c6565b815161052890158061052157508251600154145b60156112c6565b60008080556002805461053a90611e0d565b80601f016020809104026020016040519081016040528092919081815260200182805461056690611e0d565b80156105b35780601f10610588576101008083540402835291602001916105b3565b820191906000526020600020905b81548152906001019060200180831161059657829003601f168201915b50505050508060200190518101906105cb9190611ea7565b90506105f3604051806060016040528060008152602001600015158152602001600081525090565b6106048260e00151431060166112c6565b7fa45a7348ca5cb8930ab81f28bdf5d2e7da1c0042d26fe1c06917a7da6db0b2de3385604051610635929190611f58565b60405180910390a1600060208501515151600181111561065757610657611b72565b141561078a57610669341560126112c6565b600161067433610c75565b51600181111561068657610686611b72565b146106925760006106a0565b61069b33610c75565b604001515b8082526040519081527f2c9cf28f8ecee0d56f976fe717c5b3bdb179bb0386f93a538bb247125b8aec029060200160405180910390a1805183526106e261194c565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608085018051845190920191909152608085015182840180519190915260a08601519051909201919091525182511461074b57825161074d565b335b6020820180516001600160a01b0390921660409092019190915280514360609091015260c0840151905160800152610784816112ec565b506108c0565b60016020850151515160018111156107a4576107a4611b72565b14156108c0576107b6341560136112c6565b606082015160016107c633610c75565b5160018111156107d8576107d8611b72565b146107e45760006107f2565b6107ed33610c75565b604001515b1460208201819052610805576000610808565b60015b6040828101829052519081527f8b63a71eac5217959ec006ec81676cd2c302402ad3eef0c62b80d2f5b5a3cc5b9060200160405180910390a16040808201519084015261085361194c565b825181516001600160a01b03918216905260208085015183519216910152604080840151825190910152606080840151825190910152608083015161089a90600190611fab565b60208083018051929092526040840151915181019190915282015161074b57825161074d565b50505050565b6108d6600760005414601d6112c6565b81516108f19015806108ea57508251600154145b601e6112c6565b60008080556002805461090390611e0d565b80601f016020809104026020016040519081016040528092919081815260200182805461092f90611e0d565b801561097c5780601f106109515761010080835404028352916020019161097c565b820191906000526020600020905b81548152906001019060200180831161095f57829003601f168201915b50505050508060200190518101906109949190611fd1565b90506109a78160c001514310601f6112c6565b60408051338152845160208083019190915285015151518183015290517f5c82a4a2d8eaa52925008d03eead7221eca30a4d81fc671e221fb8d5b67b24c79181900360600190a16109fa3415601c6112c6565b604051600181527fc8b17b9acfce3c64219ec972aa5180635107f7b160bea661e7ac4047bd0dab869060200160405180910390a1600160208381018290523360009081526004825260409020805460ff191683178155908501515151910155610a616119b7565b815181516001600160a01b039182169052602080840151835192169101526040808301518251909101526060808301518251909101526080820151610aa890600190611fab565b602080830180519290925281514391015260a08301519051604001526108c0816114d4565b610add600160005414600b6112c6565b8151610af8901580610af157508251600154145b600c6112c6565b600080805560028054610b0a90611e0d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3690611e0d565b8015610b835780601f10610b5857610100808354040283529160200191610b83565b820191906000526020600020905b815481529060010190602001808311610b6657829003601f168201915b5050505050806020019051810190610b9b9190612075565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051610bce9291906120f8565b60405180910390a1610be2341560086112c6565b610bfc610bf533836020015160016116ca565b60096112c6565b8051610c14906001600160a01b03163314600a6112c6565b610c1c6119b7565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835182015260608085015184519091015281830180516000908190528151439401939093525101526108c0816114d4565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610cc157610cc1611b72565b1415610d38576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610d0257610d02611b72565b6001811115610d1357610d13611b72565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b610d5860036000541460106112c6565b8151610d73901580610d6c57508251600154145b60116112c6565b600080805560028054610d8590611e0d565b80601f0160208091040260200160405190810160405280929190818152602001828054610db190611e0d565b8015610dfe5780601f10610dd357610100808354040283529160200191610dfe565b820191906000526020600020905b815481529060010190602001808311610de157829003601f168201915b5050505050806020019051810190610e169190612120565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a1610e753415600d6112c6565b8051610e8d906001600160a01b03163314600e6112c6565b602080840151805190820151604051610edb93610eb593929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826060015114600f6112c6565b610ee361194c565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845182015286820151820151845160609081019190915282850180516000908190528151909401939093528551835194169390910192909252805143920191909152608080840151915101526108c0816112ec565b610f6e60066000541460196112c6565b8151610f89901580610f8257508251600154145b601a6112c6565b600080805560028054610f9b90611e0d565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc790611e0d565b80156110145780601f10610fe957610100808354040283529160200191611014565b820191906000526020600020905b815481529060010190602001808311610ff757829003601f168201915b505050505080602001905181019061102c9190611ea7565b90506110408160e00151431015601b6112c6565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae33846040516110719291906120f8565b60405180910390a1611085341560176112c6565b805161109d906001600160a01b0316331460186112c6565b6110a561194c565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608083015182519091015260808201516110ec90600190611fab565b6020808301805192909252905160029101526060820151600161110e33610c75565b51600181111561112057611120611b72565b1461112c57600061113a565b61113533610c75565b604001515b14611146578151611148565b335b6020820180516001600160a01b0390921660409092019190915280514360609091015260c08301519051608001526108c0816112ec565b61118f60076000541460226112c6565b81516111aa9015806111a357508251600154145b60236112c6565b6000808055600280546111bc90611e0d565b80601f01602080910402602001604051908101604052809291908181526020018280546111e890611e0d565b80156112355780601f1061120a57610100808354040283529160200191611235565b820191906000526020600020905b81548152906001019060200180831161121857829003601f168201915b505050505080602001905181019061124d9190611fd1565b90506112618160c0015143101560246112c6565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb6077633846040516112929291906120f8565b60405180910390a16112a6341560206112c6565b80516112be906001600160a01b0316331460216112c6565b610a616119b7565b816102325760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516020810190915260008152815160400151602083015151101561145f57600a8260200151606001516113229190611fab565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528251516001600160a01b039081168252835160209081015190911681830152835160409081015181840152845160609081015190840152818501805151608080860191909152815184015160a08601529051015160c0840152835160e08401526006600055436001555161143b9183910160006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906108c0929190611a0b565b61147b82600001516020015183602001516040015160016116e2565b8151516020830151608001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156114bd573d6000803e3d6000fd5b506000808055600181905561023290600290611a8f565b60408051602081019091526000815281516040015160208301515110156115ff57600a82602001516020015161150a9190611fab565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b03908116825283516020908101519091168183015283516040908101518184015284516060908101519084015281850180515160808501525181015160a0840152835160c08401526007600055436001555161143b9183910181516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b6116436040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168083528451602090810151831681850190815286516040908101518187019081528851606090810151818901908152858b01518401516080808b019182526003600055436001558551978801989098529451909716928501929092525190830152925191810191909152905160a082015260c00161143b565b60006116d8838530856116fb565b90505b9392505050565b6116ed8383836117d5565b6116f657600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611762916121b0565b60006040518083038185875af1925050503d806000811461179f576040519150601f19603f3d011682016040523d82523d6000602084013e6117a4565b606091505b50915091506117b5828260016118a6565b50808060200190518101906117ca91906121cc565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611834916121b0565b60006040518083038185875af1925050503d8060008114611871576040519150601f19603f3d011682016040523d82523d6000602084013e611876565b606091505b5091509150611887828260026118a6565b508080602001905181019061189c91906121cc565b9695505050505050565b606083156118b55750816116db565b8251156118c55782518084602001fd5b60405163100960cb60e01b8152600481018390526024016112e3565b60405180604001604052806000815260200161190e60408051808201909152600060208201908152815290565b905290565b60405180604001604052806000815260200161190e60408051608081018252600060208201818152928201819052606082015290815290565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161190e6040518060a00160405280600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161190e60405180606001604052806000815260200160008152602001600081525090565b828054611a1790611e0d565b90600052602060002090601f016020900481019282611a395760008555611a7f565b82601f10611a5257805160ff1916838001178555611a7f565b82800160010185558215611a7f579182015b82811115611a7f578251825591602001919060010190611a64565b50611a8b929150611acc565b5090565b508054611a9b90611e0d565b6000825580601f10611aab575050565b601f016020900490600052602060002090810190611ac99190611acc565b50565b5b80821115611a8b5760008155600101611acd565b600060808284031215611af357600080fd5b50919050565b600060208284031215611b0b57600080fd5b5035919050565b600060408284031215611af357600080fd5b600060408284031215611b3657600080fd5b6116db8383611b12565b6001600160a01b0381168114611ac957600080fd5b600060208284031215611b6757600080fd5b81356116db81611b40565b634e487b7160e01b600052602160045260246000fd5b60028110611ac957634e487b7160e01b600052602160045260246000fd5b81516060820190611bb681611b88565b808352506020830151151560208301526040830151604083015292915050565b60005b83811015611bf1578181015183820152602001611bd9565b838111156108c05750506000910152565b8281526040602082015260008251806040840152611c27816060850160208701611bd6565b601f01601f1916919091016060019392505050565b600060608284031215611af357600080fd5b6040805190810167ffffffffffffffff81118282101715611c7f57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715611c7f57634e487b7160e01b600052604160045260246000fd5b8015158114611ac957600080fd5b60008183036080811215611cd757600080fd5b611cdf611c4e565b833581526060601f1983011215611cf557600080fd5b611cfd611c85565b91506040516060810181811067ffffffffffffffff82111715611d3057634e487b7160e01b600052604160045260246000fd5b604052602085013560028110611d4557600080fd5b81526040850135611d5581611cb6565b60208201526060850135611d6881611cb6565b6040820152825260208101919091529392505050565b600060408284031215611d9057600080fd5b611d98611c4e565b823581526020830135611daa81611cb6565b60208201529392505050565b60008183036040811215611dc957600080fd5b611dd1611c4e565b833581526020601f1983011215611de757600080fd5b611def611c85565b9150611df9611c85565b602094850135815282529283015250919050565b600181811c90821680611e2157607f821691505b60208210811415611af357634e487b7160e01b600052602260045260246000fd5b60008183036060811215611e5557600080fd5b611e5d611c4e565b833581526040601f1983011215611e7357600080fd5b611e7b611c4e565b60208581013582526040909501358582015293810193909352509092915050565b8051610d4381611b40565b6000610100808385031215611ebb57600080fd5b6040519081019067ffffffffffffffff82118183101715611eec57634e487b7160e01b600052604160045260246000fd5b8160405283519150611efd82611b40565b818152611f0c60208501611e9c565b602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190611f8481611b88565b80604085015250602081015115156060840152604081015115156080840152509392505050565b60008219821115611fcc57634e487b7160e01b600052601160045260246000fd5b500190565b600060e08284031215611fe357600080fd5b60405160e0810181811067ffffffffffffffff8211171561201457634e487b7160e01b600052604160045260246000fd5b604052825161202281611b40565b8152602083015161203281611b40565b8060208301525060408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b60006080828403121561208757600080fd5b6040516080810181811067ffffffffffffffff821117156120b857634e487b7160e01b600052604160045260246000fd5b60405282516120c681611b40565b815260208301516120d681611b40565b6020820152604083810151908201526060928301519281019290925250919050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b600060a0828403121561213257600080fd5b60405160a0810181811067ffffffffffffffff8211171561216357634e487b7160e01b600052604160045260246000fd5b604052825161217181611b40565b8152602083015161218181611b40565b806020830152506040830151604082015260608301516060820152608083015160808201528091505092915050565b600082516121c2818460208701611bd6565b9190910192915050565b6000602082840312156121de57600080fd5b81516116db81611cb656fea2646970667358221220c621b686f2579f89c42736631337dadbb99272bfea63800e13c174b0d82cde7b64736f6c634300080c0033`,
  BytecodeLen: 9592,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:62:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:96:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:142:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:102:64:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:71:36:after expr stmt semicolon',
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
