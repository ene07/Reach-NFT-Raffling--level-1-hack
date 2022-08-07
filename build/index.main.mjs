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
      7: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2],
      8: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      9: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc2, ctc2]
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
  
  
  const v460 = stdlib.protect(ctc4, await interact.startRaffleDraw(), {
    at: './index.rsh:57:89:application',
    fs: ['at ./index.rsh:56:9:application call to [unknown function] (defined at: ./index.rsh:56:13:function exp)'],
    msg: 'startRaffleDraw',
    who: 'Alice'
    });
  const v461 = v460.nftId;
  const v462 = v460.numberOfBobs;
  const v463 = v460.numberOfTickets;
  const v467 = stdlib.protect(ctc1, await interact.getRandomNumber(v463), {
    at: './index.rsh:58:52:application',
    fs: ['at ./index.rsh:56:9:application call to [unknown function] (defined at: ./index.rsh:56:13:function exp)'],
    msg: 'getRandomNumber',
    who: 'Alice'
    });
  const v468 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:59:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:56:9:application call to [unknown function] (defined at: ./index.rsh:56:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v469 = stdlib.digest(ctc5, [v468, v467]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v461, v463, v462, v469],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:62:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v472, v473, v474, v475], secs: v477, time: v476, didSend: v55, from: v471 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v472
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
  const {data: [v472, v473, v474, v475], secs: v477, time: v476, didSend: v55, from: v471 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.displayHashValue(v475), {
    at: './index.rsh:63:30:application',
    fs: ['at ./index.rsh:63:30:application call to [unknown function] (defined at: ./index.rsh:63:30:function exp)', 'at ./index.rsh:63:30:application call to "liftedInteract" (defined at: ./index.rsh:63:30:application)'],
    msg: 'displayHashValue',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v471, v472, v473, v475],
    evt_cnt: 0,
    funcNum: 1,
    lct: v476,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:5:13:decimal', stdlib.UInt_max, '1'), v472]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v488, time: v487, didSend: v66, from: v486 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:5:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v472
        });
      
      const v503 = stdlib.checkedBigNumberify('./index.rsh:73:38:decimal', stdlib.UInt_max, '0');
      const v504 = v487;
      const v511 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v515 = stdlib.lt(v503, v473);
        
        return v515;})()) {
        const v522 = stdlib.add(v504, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '10'));
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
  const {data: [], secs: v488, time: v487, didSend: v66, from: v486 } = txn2;
  ;
  ;
  const v498 = stdlib.addressEq(v471, v486);
  stdlib.assert(v498, {
    at: './index.rsh:65:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.getUsers(), {
    at: './index.rsh:67:22:application',
    fs: ['at ./index.rsh:67:22:application call to [unknown function] (defined at: ./index.rsh:67:22:function exp)', 'at ./index.rsh:67:22:application call to "liftedInteract" (defined at: ./index.rsh:67:22:application)'],
    msg: 'getUsers',
    who: 'Alice'
    });
  
  let v503 = stdlib.checkedBigNumberify('./index.rsh:73:38:decimal', stdlib.UInt_max, '0');
  let v504 = v487;
  let v511 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v515 = stdlib.lt(v503, v473);
    
    return v515;})()) {
    const v522 = stdlib.add(v504, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '10'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc7],
      timeoutAt: ['time', v522],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v471, v472, v473, v475, v503, v511, v522],
        evt_cnt: 0,
        funcNum: 11,
        lct: v504,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:87:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v552, time: v551, didSend: v145, from: v550 } = txn4;
          
          ;
          const v554 = stdlib.add(v503, stdlib.checkedBigNumberify('./index.rsh:89:20:decimal', stdlib.UInt_max, '1'));
          const cv503 = v554;
          const cv504 = v551;
          const cv511 = v511;
          
          await (async () => {
            const v503 = cv503;
            const v504 = cv504;
            const v511 = cv511;
            
            if (await (async () => {
              const v515 = stdlib.lt(v503, v473);
              
              return v515;})()) {
              const v522 = stdlib.add(v504, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '10'));
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
      const {data: [], secs: v552, time: v551, didSend: v145, from: v550 } = txn4;
      ;
      const v553 = stdlib.addressEq(v471, v550);
      stdlib.assert(v553, {
        at: './index.rsh:87:15:dot',
        fs: ['at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v554 = stdlib.add(v503, stdlib.checkedBigNumberify('./index.rsh:89:20:decimal', stdlib.UInt_max, '1'));
      const cv503 = v554;
      const cv504 = v551;
      const cv511 = v511;
      
      v503 = cv503;
      v504 = cv504;
      v511 = cv511;
      
      continue;
      }
    else {
      const {data: [v534], secs: v536, time: v535, didSend: v114, from: v533 } = txn3;
      undefined /* setApiDetails */;
      const v538 = v534[stdlib.checkedBigNumberify('./index.rsh:76:10:spread', stdlib.UInt_max, '0')];
      ;
      const v541 = true;
      await txn3.getOutput('Bob_join', 'v541', ctc8, v541);
      await stdlib.mapSet(map0, v533, v538);
      const v548 = stdlib.add(v503, stdlib.checkedBigNumberify('./index.rsh:81:28:decimal', stdlib.UInt_max, '1'));
      const cv503 = v548;
      const cv504 = v535;
      const cv511 = v511;
      
      v503 = cv503;
      v504 = cv504;
      v511 = cv511;
      
      continue;}
    
    }
  stdlib.protect(ctc0, await interact.displayWinningNumber(v467), {
    at: './index.rsh:96:34:application',
    fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:13:function exp)'],
    msg: 'displayWinningNumber',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v471, v472, v473, v475, v511, v468, v467],
    evt_cnt: 2,
    funcNum: 3,
    lct: v504,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:99:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v560, v561], secs: v563, time: v562, didSend: v157, from: v559 } = txn3;
      
      ;
      
      const v568 = true;
      const v569 = stdlib.checkedBigNumberify('./index.rsh:104:72:decimal', stdlib.UInt_max, '0');
      const v570 = stdlib.checkedBigNumberify('./index.rsh:104:74:decimal', stdlib.UInt_max, '0');
      const v571 = v471;
      const v572 = v562;
      const v579 = v511;
      
      if (await (async () => {
        
        return v568;})()) {
        const v589 = stdlib.add(v572, stdlib.checkedBigNumberify('./index.rsh:130:27:decimal', stdlib.UInt_max, '10'));
        sim_r.isHalt = false;
        }
      else {
        
        sim_r.txns.push({
          kind: 'from',
          to: v571,
          tok: v472
          });
        const v707 = stdlib.sub(v579, v579);
        sim_r.txns.push({
          kind: 'from',
          to: v471,
          tok: undefined /* Nothing */
          });
        
        const v709 = true;
        const v710 = stdlib.checkedBigNumberify('./index.rsh:151:43:decimal', stdlib.UInt_max, '0');
        const v711 = v572;
        const v718 = v707;
        
        if (await (async () => {
          
          return v709;})()) {
          const v728 = stdlib.add(v711, stdlib.checkedBigNumberify('./index.rsh:164:25:decimal', stdlib.UInt_max, '10'));
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v471,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v472
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc1, ctc6, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v560, v561], secs: v563, time: v562, didSend: v157, from: v559 } = txn3;
  ;
  const v564 = stdlib.addressEq(v471, v559);
  stdlib.assert(v564, {
    at: './index.rsh:99:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v565 = stdlib.digest(ctc5, [v560, v561]);
  const v566 = stdlib.digestEq(v475, v565);
  stdlib.assert(v566, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:100:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.rewardReady(), {
    at: './index.rsh:102:25:application',
    fs: ['at ./index.rsh:102:25:application call to [unknown function] (defined at: ./index.rsh:102:25:function exp)', 'at ./index.rsh:102:25:application call to "liftedInteract" (defined at: ./index.rsh:102:25:application)'],
    msg: 'rewardReady',
    who: 'Alice'
    });
  
  let v568 = true;
  let v569 = stdlib.checkedBigNumberify('./index.rsh:104:72:decimal', stdlib.UInt_max, '0');
  let v570 = stdlib.checkedBigNumberify('./index.rsh:104:74:decimal', stdlib.UInt_max, '0');
  let v571 = v471;
  let v572 = v562;
  let v579 = v511;
  
  while (await (async () => {
    
    return v568;})()) {
    const v589 = stdlib.add(v572, stdlib.checkedBigNumberify('./index.rsh:130:27:decimal', stdlib.UInt_max, '10'));
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc11],
      timeoutAt: ['time', v589],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v471, v472, v473, v561, v569, v570, v579, v589],
        evt_cnt: 0,
        funcNum: 9,
        lct: v572,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:131:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v681, time: v680, didSend: v287, from: v679 } = txn5;
          
          ;
          const v683 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v679), null);
          const v684 = stdlib.fromSome(v683, stdlib.checkedBigNumberify('./index.rsh:132:45:decimal', stdlib.UInt_max, '0'));
          const v685 = stdlib.eq(v684, v561);
          const v686 = v685 ? v679 : v471;
          const v687 = stdlib.add(v569, stdlib.checkedBigNumberify('./index.rsh:135:33:decimal', stdlib.UInt_max, '1'));
          const cv568 = false;
          const cv569 = v687;
          const cv570 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const cv571 = v686;
          const cv572 = v680;
          const cv579 = v579;
          
          await (async () => {
            const v568 = cv568;
            const v569 = cv569;
            const v570 = cv570;
            const v571 = cv571;
            const v572 = cv572;
            const v579 = cv579;
            
            if (await (async () => {
              
              return v568;})()) {
              const v589 = stdlib.add(v572, stdlib.checkedBigNumberify('./index.rsh:130:27:decimal', stdlib.UInt_max, '10'));
              sim_r.isHalt = false;
              }
            else {
              
              sim_r.txns.push({
                kind: 'from',
                to: v571,
                tok: v472
                });
              const v707 = stdlib.sub(v579, v579);
              sim_r.txns.push({
                kind: 'from',
                to: v471,
                tok: undefined /* Nothing */
                });
              
              const v709 = true;
              const v710 = stdlib.checkedBigNumberify('./index.rsh:151:43:decimal', stdlib.UInt_max, '0');
              const v711 = v572;
              const v718 = v707;
              
              if (await (async () => {
                
                return v709;})()) {
                const v728 = stdlib.add(v711, stdlib.checkedBigNumberify('./index.rsh:164:25:decimal', stdlib.UInt_max, '10'));
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v471,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v472
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc9, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v681, time: v680, didSend: v287, from: v679 } = txn5;
      ;
      const v682 = stdlib.addressEq(v471, v679);
      stdlib.assert(v682, {
        at: './index.rsh:131:15:dot',
        fs: ['at ./index.rsh:130:35:application call to [unknown function] (defined at: ./index.rsh:130:35:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v683 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v679), null);
      const v684 = stdlib.fromSome(v683, stdlib.checkedBigNumberify('./index.rsh:132:45:decimal', stdlib.UInt_max, '0'));
      const v685 = stdlib.eq(v684, v561);
      const v686 = v685 ? v679 : v471;
      const v687 = stdlib.add(v569, stdlib.checkedBigNumberify('./index.rsh:135:33:decimal', stdlib.UInt_max, '1'));
      const cv568 = false;
      const cv569 = v687;
      const cv570 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const cv571 = v686;
      const cv572 = v680;
      const cv579 = v579;
      
      v568 = cv568;
      v569 = cv569;
      v570 = cv570;
      v571 = cv571;
      v572 = cv572;
      v579 = cv579;
      
      continue;
      }
    else {
      const {data: [v610], secs: v612, time: v611, didSend: v237, from: v609 } = txn4;
      switch (v610[0]) {
        case 'Bob_getReward0_176': {
          const v613 = v610[1];
          undefined /* setApiDetails */;
          ;
          const v620 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v609), null);
          const v621 = stdlib.fromSome(v620, stdlib.checkedBigNumberify('./index.rsh:111:47:decimal', stdlib.UInt_max, '0'));
          const v622 = stdlib.eq(v621, v561);
          const v623 = v622 ? v609 : v471;
          await txn4.getOutput('Bob_getReward', 'v621', ctc1, v621);
          const cv568 = true;
          const cv569 = v569;
          const cv570 = v570;
          const cv571 = v623;
          const cv572 = v611;
          const cv579 = v579;
          
          v568 = cv568;
          v569 = cv569;
          v570 = cv570;
          v571 = cv571;
          v572 = cv572;
          v579 = cv579;
          
          continue;
          break;
          }
        case 'Bob_seeBobsOutcome0_176': {
          const v646 = v610[1];
          undefined /* setApiDetails */;
          ;
          const v664 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v609), null);
          const v665 = stdlib.fromSome(v664, stdlib.checkedBigNumberify('./index.rsh:120:47:decimal', stdlib.UInt_max, '0'));
          const v666 = stdlib.eq(v665, v561);
          const v667 = v666 ? v609 : v471;
          const v669 = v666 ? stdlib.checkedBigNumberify('./index.rsh:9:39:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:9:42:decimal', stdlib.UInt_max, '0');
          const v670 = stdlib.lt(v569, stdlib.checkedBigNumberify('./index.rsh:124:36:decimal', stdlib.UInt_max, '2'));
          await txn4.getOutput('Bob_seeBobsOutcome', 'v669', ctc1, v669);
          const v677 = stdlib.add(v569, stdlib.checkedBigNumberify('./index.rsh:126:41:decimal', stdlib.UInt_max, '1'));
          const cv568 = v670;
          const cv569 = v677;
          const cv570 = v669;
          const cv571 = v667;
          const cv572 = v611;
          const cv579 = v579;
          
          v568 = cv568;
          v569 = cv569;
          v570 = cv570;
          v571 = cv571;
          v572 = cv572;
          v579 = cv579;
          
          continue;
          break;
          }
        }}
    
    }
  stdlib.protect(ctc0, await interact.seeOutcome(v570), {
    at: './index.rsh:139:25:application',
    fs: ['at ./index.rsh:139:25:application call to [unknown function] (defined at: ./index.rsh:139:25:function exp)', 'at ./index.rsh:139:25:application call to "liftedInteract" (defined at: ./index.rsh:139:25:application)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  ;
  const v707 = stdlib.sub(v579, v579);
  ;
  stdlib.protect(ctc0, await interact.balanceReady(), {
    at: './index.rsh:149:26:application',
    fs: ['at ./index.rsh:149:26:application call to [unknown function] (defined at: ./index.rsh:149:26:function exp)', 'at ./index.rsh:149:26:application call to "liftedInteract" (defined at: ./index.rsh:149:26:application)'],
    msg: 'balanceReady',
    who: 'Alice'
    });
  
  let v709 = true;
  let v710 = stdlib.checkedBigNumberify('./index.rsh:151:43:decimal', stdlib.UInt_max, '0');
  let v711 = v572;
  let v718 = v707;
  
  while (await (async () => {
    
    return v709;})()) {
    const v728 = stdlib.add(v711, stdlib.checkedBigNumberify('./index.rsh:164:25:decimal', stdlib.UInt_max, '10'));
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc10],
      timeoutAt: ['time', v728],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v471, v472, v473, v561, v710, v718, v728],
        evt_cnt: 0,
        funcNum: 7,
        lct: v711,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:165:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v755, time: v754, didSend: v377, from: v753 } = txn5;
          
          ;
          const cv709 = false;
          const cv710 = v710;
          const cv711 = v754;
          const cv718 = v718;
          
          await (async () => {
            const v709 = cv709;
            const v710 = cv710;
            const v711 = cv711;
            const v718 = cv718;
            
            if (await (async () => {
              
              return v709;})()) {
              const v728 = stdlib.add(v711, stdlib.checkedBigNumberify('./index.rsh:164:25:decimal', stdlib.UInt_max, '10'));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v471,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v472
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
        tys: [ctc9, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v755, time: v754, didSend: v377, from: v753 } = txn5;
      ;
      const v756 = stdlib.addressEq(v471, v753);
      stdlib.assert(v756, {
        at: './index.rsh:165:13:dot',
        fs: ['at ./index.rsh:164:33:application call to [unknown function] (defined at: ./index.rsh:164:33:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv709 = false;
      const cv710 = v710;
      const cv711 = v754;
      const cv718 = v718;
      
      v709 = cv709;
      v710 = cv710;
      v711 = cv711;
      v718 = cv718;
      
      continue;
      }
    else {
      const {data: [v736], secs: v738, time: v737, didSend: v344, from: v735 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v740 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v735), null);
      const v741 = stdlib.fromSome(v740, stdlib.checkedBigNumberify('./index.rsh:157:45:decimal', stdlib.UInt_max, '0'));
      const v742 = stdlib.eq(v741, v561);
      const v743 = v742;
      await txn4.getOutput('Bob_seeBalance', 'v743', ctc8, v743);
      const v749 = stdlib.lt(v710, v473);
      const v751 = stdlib.add(v710, stdlib.checkedBigNumberify('./index.rsh:161:26:decimal', stdlib.UInt_max, '1'));
      const cv709 = v749;
      const cv710 = v751;
      const cv711 = v737;
      const cv718 = v718;
      
      v709 = cv709;
      v710 = cv710;
      v711 = cv711;
      v718 = cv718;
      
      continue;}
    
    }
  ;
  return;
  
  
  
  
  
  
  };
export async function _Bob_getReward8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_getReward8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_getReward8 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v471, v472, v473, v561, v569, v570, v579, v589] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v593 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:109:27:application call to [unknown function] (defined at: ./index.rsh:109:27:function exp)', 'at ./index.rsh:104:67:application call to "runBob_getReward0_176" (defined at: ./index.rsh:109:10:function exp)', 'at ./index.rsh:104:67:application call to [unknown function] (defined at: ./index.rsh:104:67:function exp)'],
    msg: 'in',
    who: 'Bob_getReward'
    });
  const v597 = ['Bob_getReward0_176', v593];
  
  const txn1 = await (ctc.sendrecv({
    args: [v471, v472, v473, v561, v569, v570, v579, v589, v597],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:110:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v610], secs: v612, time: v611, didSend: v237, from: v609 } = txn1;
      
      switch (v610[0]) {
        case 'Bob_getReward0_176': {
          const v613 = v610[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_getReward"
            });
          ;
          const v620 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v609), null);
          const v621 = stdlib.fromSome(v620, stdlib.checkedBigNumberify('./index.rsh:111:47:decimal', stdlib.UInt_max, '0'));
          const v624 = await txn1.getOutput('Bob_getReward', 'v621', ctc1, v621);
          
          const v1217 = v569;
          const v1218 = v570;
          const v1221 = v579;
          const v1222 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:130:27:decimal', stdlib.UInt_max, '10'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'Bob_seeBobsOutcome0_176': {
          const v646 = v610[1];
          
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
  const {data: [v610], secs: v612, time: v611, didSend: v237, from: v609 } = txn1;
  switch (v610[0]) {
    case 'Bob_getReward0_176': {
      const v613 = v610[1];
      undefined /* setApiDetails */;
      ;
      const v620 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v609), null);
      const v621 = stdlib.fromSome(v620, stdlib.checkedBigNumberify('./index.rsh:111:47:decimal', stdlib.UInt_max, '0'));
      const v624 = await txn1.getOutput('Bob_getReward', 'v621', ctc1, v621);
      if (v237) {
        stdlib.protect(ctc0, await interact.out(v613, v624), {
          at: './index.rsh:109:11:application',
          fs: ['at ./index.rsh:109:11:application call to [unknown function] (defined at: ./index.rsh:109:11:function exp)', 'at ./index.rsh:113:15:application call to "notify" (defined at: ./index.rsh:110:27:function exp)', 'at ./index.rsh:110:27:application call to [unknown function] (defined at: ./index.rsh:110:27:function exp)'],
          msg: 'out',
          who: 'Bob_getReward'
          });
        }
      else {
        }
      
      const v1217 = v569;
      const v1218 = v570;
      const v1221 = v579;
      const v1222 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:130:27:decimal', stdlib.UInt_max, '10'));
      return;
      
      break;
      }
    case 'Bob_seeBobsOutcome0_176': {
      const v646 = v610[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_join9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_join9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_join9 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v471, v472, v473, v475, v503, v511, v522] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc1]);
  const v526 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:76:25:application call to [unknown function] (defined at: ./index.rsh:76:25:function exp)', 'at ./index.rsh:76:25:application call to [unknown function] (defined at: ./index.rsh:76:25:function exp)'],
    msg: 'in',
    who: 'Bob_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v471, v472, v473, v475, v503, v511, v522, v526],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v534], secs: v536, time: v535, didSend: v114, from: v533 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_join"
        });
      const v538 = v534[stdlib.checkedBigNumberify('./index.rsh:76:10:spread', stdlib.UInt_max, '0')];
      ;
      const v541 = true;
      const v542 = await txn1.getOutput('Bob_join', 'v541', ctc7, v541);
      
      await stdlib.simMapSet(sim_r, 0, v533, v538);
      const v548 = stdlib.add(v503, stdlib.checkedBigNumberify('./index.rsh:81:28:decimal', stdlib.UInt_max, '1'));
      const v1286 = v548;
      const v1288 = v511;
      const v1289 = stdlib.lt(v548, v473);
      if (v1289) {
        const v1290 = stdlib.add(v535, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '10'));
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
  const {data: [v534], secs: v536, time: v535, didSend: v114, from: v533 } = txn1;
  undefined /* setApiDetails */;
  const v538 = v534[stdlib.checkedBigNumberify('./index.rsh:76:10:spread', stdlib.UInt_max, '0')];
  ;
  const v541 = true;
  const v542 = await txn1.getOutput('Bob_join', 'v541', ctc7, v541);
  if (v114) {
    stdlib.protect(ctc0, await interact.out(v534, v542), {
      at: './index.rsh:76:11:application',
      fs: ['at ./index.rsh:76:11:application call to [unknown function] (defined at: ./index.rsh:76:11:function exp)', 'at ./index.rsh:79:10:application call to "k" (defined at: ./index.rsh:78:22:function exp)', 'at ./index.rsh:78:22:application call to [unknown function] (defined at: ./index.rsh:78:22:function exp)'],
      msg: 'out',
      who: 'Bob_join'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v533, v538);
  const v548 = stdlib.add(v503, stdlib.checkedBigNumberify('./index.rsh:81:28:decimal', stdlib.UInt_max, '1'));
  const v1286 = v548;
  const v1288 = v511;
  const v1289 = stdlib.lt(v548, v473);
  if (v1289) {
    const v1290 = stdlib.add(v535, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '10'));
    return;
    }
  else {
    return;
    }
  
  
  };
export async function _Bob_seeBalance7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_seeBalance7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_seeBalance7 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v471, v472, v473, v561, v710, v718, v728] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v732 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:155:26:application call to [unknown function] (defined at: ./index.rsh:155:26:function exp)', 'at ./index.rsh:155:26:application call to [unknown function] (defined at: ./index.rsh:155:26:function exp)'],
    msg: 'in',
    who: 'Bob_seeBalance'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v471, v472, v473, v561, v710, v718, v728, v732],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:156:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v736], secs: v738, time: v737, didSend: v344, from: v735 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_seeBalance"
        });
      ;
      const v740 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v735), null);
      const v741 = stdlib.fromSome(v740, stdlib.checkedBigNumberify('./index.rsh:157:45:decimal', stdlib.UInt_max, '0'));
      const v742 = stdlib.eq(v741, v561);
      const v743 = v742;
      const v744 = await txn1.getOutput('Bob_seeBalance', 'v743', ctc6, v743);
      
      const v749 = stdlib.lt(v710, v473);
      const v751 = stdlib.add(v710, stdlib.checkedBigNumberify('./index.rsh:161:26:decimal', stdlib.UInt_max, '1'));
      const v1361 = v751;
      const v1363 = v718;
      if (v749) {
        const v1364 = stdlib.add(v737, stdlib.checkedBigNumberify('./index.rsh:164:25:decimal', stdlib.UInt_max, '10'));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v471,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v472
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v736], secs: v738, time: v737, didSend: v344, from: v735 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v740 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v735), null);
  const v741 = stdlib.fromSome(v740, stdlib.checkedBigNumberify('./index.rsh:157:45:decimal', stdlib.UInt_max, '0'));
  const v742 = stdlib.eq(v741, v561);
  const v743 = v742;
  const v744 = await txn1.getOutput('Bob_seeBalance', 'v743', ctc6, v743);
  if (v344) {
    stdlib.protect(ctc0, await interact.out(v736, v744), {
      at: './index.rsh:155:9:application',
      fs: ['at ./index.rsh:155:9:application call to [unknown function] (defined at: ./index.rsh:155:9:function exp)', 'at ./index.rsh:159:13:application call to "notify" (defined at: ./index.rsh:156:25:function exp)', 'at ./index.rsh:156:25:application call to [unknown function] (defined at: ./index.rsh:156:25:function exp)'],
      msg: 'out',
      who: 'Bob_seeBalance'
      });
    }
  else {
    }
  
  const v749 = stdlib.lt(v710, v473);
  const v751 = stdlib.add(v710, stdlib.checkedBigNumberify('./index.rsh:161:26:decimal', stdlib.UInt_max, '1'));
  const v1361 = v751;
  const v1363 = v718;
  if (v749) {
    const v1364 = stdlib.add(v737, stdlib.checkedBigNumberify('./index.rsh:164:25:decimal', stdlib.UInt_max, '10'));
    return;
    }
  else {
    ;
    return;
    }
  
  
  };
export async function _Bob_seeBobsOutcome8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_seeBobsOutcome8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_seeBobsOutcome8 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v471, v472, v473, v561, v569, v570, v579, v589] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v601 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:117:31:application call to [unknown function] (defined at: ./index.rsh:117:31:function exp)', 'at ./index.rsh:104:67:application call to "runBob_seeBobsOutcome0_176" (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:104:67:application call to [unknown function] (defined at: ./index.rsh:104:67:function exp)'],
    msg: 'in',
    who: 'Bob_seeBobsOutcome'
    });
  const v605 = ['Bob_seeBobsOutcome0_176', v601];
  
  const txn1 = await (ctc.sendrecv({
    args: [v471, v472, v473, v561, v569, v570, v579, v589, v605],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:118:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v610], secs: v612, time: v611, didSend: v237, from: v609 } = txn1;
      
      switch (v610[0]) {
        case 'Bob_getReward0_176': {
          const v613 = v610[1];
          
          break;
          }
        case 'Bob_seeBobsOutcome0_176': {
          const v646 = v610[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_seeBobsOutcome"
            });
          ;
          const v664 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v609), null);
          const v665 = stdlib.fromSome(v664, stdlib.checkedBigNumberify('./index.rsh:120:47:decimal', stdlib.UInt_max, '0'));
          const v666 = stdlib.eq(v665, v561);
          const v667 = v666 ? v609 : v471;
          const v669 = v666 ? stdlib.checkedBigNumberify('./index.rsh:9:39:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:9:42:decimal', stdlib.UInt_max, '0');
          const v670 = stdlib.lt(v569, stdlib.checkedBigNumberify('./index.rsh:124:36:decimal', stdlib.UInt_max, '2'));
          const v672 = await txn1.getOutput('Bob_seeBobsOutcome', 'v669', ctc1, v669);
          
          const v677 = stdlib.add(v569, stdlib.checkedBigNumberify('./index.rsh:126:41:decimal', stdlib.UInt_max, '1'));
          const v1401 = v677;
          const v1402 = v669;
          const v1405 = v579;
          if (v670) {
            const v1406 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:130:27:decimal', stdlib.UInt_max, '10'));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v667,
              tok: v472
              });
            const v1407 = stdlib.sub(v579, v579);
            sim_r.txns.push({
              kind: 'from',
              to: v471,
              tok: undefined /* Nothing */
              });
            const v1431 = stdlib.checkedBigNumberify('./index.rsh:151:43:decimal', stdlib.UInt_max, '0');
            const v1433 = v1407;
            const v1434 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:164:25:decimal', stdlib.UInt_max, '10'));
            sim_r.isHalt = false;
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
  const {data: [v610], secs: v612, time: v611, didSend: v237, from: v609 } = txn1;
  switch (v610[0]) {
    case 'Bob_getReward0_176': {
      const v613 = v610[1];
      return;
      break;
      }
    case 'Bob_seeBobsOutcome0_176': {
      const v646 = v610[1];
      undefined /* setApiDetails */;
      ;
      const v664 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v609), null);
      const v665 = stdlib.fromSome(v664, stdlib.checkedBigNumberify('./index.rsh:120:47:decimal', stdlib.UInt_max, '0'));
      const v666 = stdlib.eq(v665, v561);
      const v667 = v666 ? v609 : v471;
      const v669 = v666 ? stdlib.checkedBigNumberify('./index.rsh:9:39:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:9:42:decimal', stdlib.UInt_max, '0');
      const v670 = stdlib.lt(v569, stdlib.checkedBigNumberify('./index.rsh:124:36:decimal', stdlib.UInt_max, '2'));
      const v672 = await txn1.getOutput('Bob_seeBobsOutcome', 'v669', ctc1, v669);
      if (v237) {
        stdlib.protect(ctc0, await interact.out(v646, v672), {
          at: './index.rsh:117:11:application',
          fs: ['at ./index.rsh:117:11:application call to [unknown function] (defined at: ./index.rsh:117:11:function exp)', 'at ./index.rsh:125:10:application call to "k" (defined at: ./index.rsh:118:19:function exp)', 'at ./index.rsh:118:19:application call to [unknown function] (defined at: ./index.rsh:118:19:function exp)'],
          msg: 'out',
          who: 'Bob_seeBobsOutcome'
          });
        }
      else {
        }
      
      const v677 = stdlib.add(v569, stdlib.checkedBigNumberify('./index.rsh:126:41:decimal', stdlib.UInt_max, '1'));
      const v1401 = v677;
      const v1402 = v669;
      const v1405 = v579;
      if (v670) {
        const v1406 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:130:27:decimal', stdlib.UInt_max, '10'));
        return;
        }
      else {
        ;
        const v1407 = stdlib.sub(v579, v579);
        ;
        const v1431 = stdlib.checkedBigNumberify('./index.rsh:151:43:decimal', stdlib.UInt_max, '0');
        const v1433 = v1407;
        const v1434 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:164:25:decimal', stdlib.UInt_max, '10'));
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
  if (step == 8) {return _Bob_getReward8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_join(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_join expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_join expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Bob_join9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_seeBalance(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_seeBalance expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_seeBalance expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_seeBalance7(ctcTop, interact);}
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
  if (step == 8) {return _Bob_seeBobsOutcome8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_getReward()uint64`, `Bob_join(uint64)byte`, `Bob_seeBalance()byte`, `Bob_seeBobsOutcome()uint64`],
    pure: [],
    sigs: [`Bob_getReward()uint64`, `Bob_join(uint64)byte`, `Bob_seeBalance()byte`, `Bob_seeBobsOutcome()uint64`]
    },
  appApproval: `BiAXAAEgKAgJUAcKMDhIAwQCQILniPcLw+aZhA6Vm9TgBQtgWKCNBiYDAQAAAQEiNQAxGEEGpSlkSSJbNQEhBFs1AjEZIxJBAAoxACghBa9mQgZxNhoAF0lBAE0iNQQjNQZJIRAMQAAdSSERDEAACCEREkQpQgLbIRASRCk1/yg0/1BCAYFJIRIMQAAKIRISRDYaAUIAkYGemtSVBBJEKTX/KjT/UEIBXjYaAhc1BDYaAzYaARdJIQcMQAKHSSEFDEABO0khCAxAAMRJIRMMQABVIRMSRCEFNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AE49k2NbAyBjQDIRRbD0Q0/zEAEkQ0/zQDJFs0AyVbNANXMCA0AyEGWyMIMgY0AyEVW0ID/EghBTQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEN+njIDT/ULAyBjQDIRRbDESACQAAAAAAAAIdAbAqNQcxACgqNP9QZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQZbIwgyBjQDIRVbQgOUSCEENAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hCVs1/oAEogVmjrAyBjQDIQZbD0Q0/zEAEkQ0/zQDJFs0AyVbNP4iNAMhClsjCCEONP8xACIxAIgFE0k1/SNbNP0iVU00/hJNMgY0AyELW0IDkUkhBAxAAO1IIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/JFs1/iVbNf0hCVs1/CEKWzX7IQtbNfpJNQU1+YAEyJJcqDT5ULAyBjQDIQZbDEQ0+SJVQABHIjEAiASZSTX3I1s09yJVTTX4gAgAAAAAAAACbTT4FlCwNPgWNQc0/zT+NP00/CM0+zQDIQ9bNP8xADT4NPwSTTIGNPpCAu4iMQCIBFJJNfcjWzT3IlVNNPwSNfgiIzT4TTX3gAgAAAAAAAACnTT3FlCwNPcWNQc0/zT+NP00/DT7IQ4MNPsjCDT3NP8xADT4TTIGNPpCAp1IIQc0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gATiG7OpsDIGNAMhC1sPRDT/MQASRDT/NAMkWzQDJVs0AyEJWyI0AyEKWzIGNAMhD1tCAtRJIQwMQAENSYEGDEAAm0ghBzQBEkQ0BEkiEkw0AhIRRChkSTUDSUklWzX/IQlbNf4hCls1/Uk1BTX8gATJ6I0MNPxQsDIGNAMhC1sMRIAIAAAAAAAAAuciMQCIA1lJNfsjWzT7IlVNNP4SFlEHCFCwIjEAiANASTX7I1s0+yJVTTT+EhZRBwg1BzQDVwAgNAMkWzT/NP40/TT/DDT9IwgyBjQDIQ9bQgIrIQwSRCEMNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BUkiWzX+IQRbNf2ABKSl8Ig0/hZQNP0WULA0/zEAEkQ0A1cwIDT+FjT9FlABEkQ0/zQDJFs0AyVbNP0jIiI0/zIGNAMhBltCAThJIwxAAEkjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8kWzX+gASai5F0sCM0/ogClDT/MQASRDT/NP40AyVbNANXMCAiMgYiQgB8SCEWiAJcIjQBEkQ0BEkiEkw0AhIRREk1BUlKIls1/yEEWzX+gRBbNf1XGCA1/IAEo4mhwTT/FlA0/hZQNP0WUDT8ULAhFogCGbEisgEishIhDbIQMgqyFDT/shGzMQA0/xZQNP4WUDT8UChLAVcAUGdIIzUBMgY1AkIBhTX/Nf41/TX8Nfs1+jX5NP00+wxBADM0/iEICDX4NPk0+hZQNPsWUDT8UDT9FlA0/xZQNPgWUChLAVcAaGdIIQU1ATIGNQJCATw0+TT6FlA0+xZQNPxQNP8WUChLAVcAWGdIIQw1ATIGNQJCARg1/zX+Nf01/DX7Nfo1+TX4Nfc19jT6QQA4NP4hCAg19TT2NPcWUDT4FlA0+RZQNPsWUDT8FlA0/xZQNPUWUChLAVcAWGdIIQQ1ATIGNQJCAMexIrIBI7ISIQ2yEDT9shQ097IRs7EisgE0/7III7IQNPayB7M09jT3NPg0+SMiNP40/0kJQgAANf81/jX9Nfw1+zX6Nfk1+DT8QQA0NP4hCAg19zT4NPkWUDT6FlA0+xZQNP0WUDT/FlA09xZQKEsBVwBQZ0ghBzUBMgY1AkIAR7EisgE0/7III7IQNPiyB7OxIrIBIrISIQ2yEDIJshUyCrIUNPmyEbNCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQ4xNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQWviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQ0SRDgRTwISRDgSEkSJ`,
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
                "name": "v472",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v473",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v474",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v475",
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
                "name": "v472",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v473",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v474",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v475",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T25",
                "name": "v534",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
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
    "name": "_reach_e11",
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
                "name": "v560",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v561",
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
                "internalType": "bool",
                "name": "v736",
                "type": "bool"
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
                    "internalType": "enum _enum_T22",
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
                "internalType": "struct T22",
                "name": "v610",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
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
    "name": "_reach_e9",
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
    "name": "_reach_oe_v541",
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
    "name": "_reach_oe_v621",
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
    "name": "_reach_oe_v669",
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
    "name": "_reach_oe_v743",
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
    "name": "Bob_seeBalance",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T25",
                "name": "v534",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
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
    "name": "_reach_m11",
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
                "name": "v560",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v561",
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
                "internalType": "bool",
                "name": "v736",
                "type": "bool"
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
                    "internalType": "enum _enum_T22",
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
                "internalType": "struct T22",
                "name": "v610",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
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
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002c8838038062002c88833981016040819052620000269162000252565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f112545cf4cc4ef4cc46259a35cf4621d5a4b14828a08081bb8649d32a39f1bd99181900360c00190a1620000aa341560076200014b565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a86018051516001600160a01b0390811687528151880151865290518401518352600197889055439097558951808701919091529351909516838901529051908201529151828401528451808303909301835260a09091019093528051919262000142926002929091019062000175565b50505062000349565b81620001715760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000183906200030c565b90600052602060002090601f016020900481019282620001a75760008555620001f2565b82601f10620001c257805160ff1916838001178555620001f2565b82800160010185558215620001f2579182015b82811115620001f2578251825591602001919060010190620001d5565b506200020092915062000204565b5090565b5b8082111562000200576000815560010162000205565b604051608081016001600160401b03811182821017156200024c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200026657600080fd5b604080519081016001600160401b03811182821017156200029757634e487b7160e01b600052604160045260246000fd5b604052835181526080601f1983011215620002b157600080fd5b620002bb6200021b565b60208501519092506001600160a01b0381168114620002d957600080fd5b80835250604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b600181811c908216806200032157607f821691505b602082108114156200034357634e487b7160e01b600052602260045260246000fd5b50919050565b61292f80620003596000396000f3fe6080604052600436106100eb5760003560e01c806376d369d711610084578063ad2d91d111610056578063ad2d91d11461020f578063bf2c5b2414610222578063c461951114610235578063de7369981461023d57005b806376d369d7146101b157806383230757146101c45780638b9fadc8146101d9578063ab53f2c6146101ec57005b806347478b90116100bd57806347478b901461017b57806351c56a5f14610183578063558879191461018b5780636da017a01461019e57005b80631e93b0f1146100f45780632ad04dc3146101185780632c10a1591461013b5780633bc5b7bf1461014e57005b366100f257005b005b34801561010057600080fd5b506003545b6040519081526020015b60405180910390f35b61012b610126366004612103565b610250565b604051901515815260200161010f565b6100f2610149366004612134565b610280565b34801561015a57600080fd5b5061016e610169366004612165565b6102a4565b60405161010f91906121b6565b61012b6102d0565b6101056102ff565b6100f2610199366004612134565b61032c565b6100f26101ac366004612134565b61034c565b6100f26101bf3660046121e6565b61036c565b3480156101d057600080fd5b50600154610105565b6100f26101e7366004612134565b61038c565b3480156101f857600080fd5b506102016103ac565b60405161010f929190612224565b6100f261021d36600461225e565b610449565b6100f2610230366004612134565b610469565b610105610489565b6100f261024b366004612134565b6104b9565b600061025a611e3d565b60208101515183905261026b611e6f565b61027582826104d9565b602001519392505050565b610288611e6f565b6102a061029a368490038401846122e6565b826106e6565b5050565b60408051606081018252600080825260208201819052918101919091526102ca8261088e565b92915050565b60006102da611e9b565b6020810151600090526102eb611e6f565b6102f58282610961565b6040015192915050565b6000610309611ec5565b6020810151516000905261031b611e6f565b6103258282610bd7565b5192915050565b610334611e6f565b6102a06103463684900384018461231e565b826104d9565b610354611e6f565b6102a061036636849003840184612375565b82610961565b610374611e6f565b6102a0610386368490038401846123cf565b82610bd7565b610394611e6f565b6102a06103a6368490038401846122e6565b82610fb6565b6000606060005460028080546103c190612489565b80601f01602080910402602001604051908101604052809291908181526020018280546103ed90612489565b801561043a5780601f1061040f5761010080835404028352916020019161043a565b820191906000526020600020905b81548152906001019060200180831161041d57829003601f168201915b50505050509050915091509091565b610451611e6f565b6102a0610463368490038401846124be565b826110fd565b610471611e6f565b6102a0610483368490038401846122e6565b82611319565b6000610493611ec5565b602081015151600190526104a5611e6f565b6104af8282610bd7565b6060015192915050565b6104c1611e6f565b6102a06104d3368490038401846122e6565b826114ca565b6104e960096000541460266116fb565b81516105049015806104fd57508251600154145b60276116fb565b60008080556002805461051690612489565b80601f016020809104026020016040519081016040528092919081815260200182805461054290612489565b801561058f5780601f106105645761010080835404028352916020019161058f565b820191906000526020600020905b81548152906001019060200180831161057257829003601f168201915b50505050508060200190518101906105a791906125c9565b90506105ba8160c00151431060286116fb565b60408051338152845160208083019190915285015151518183015290517f8ef10ecf82600a0e607d2b4732e42a9011d02a836d5c8900039202caf70fa8f29181900360600190a161060d341560256116fb565b604051600181527f679e82e741caf112c50273e7724d3a96cb46154291edad259e75e5a52fefee7a9060200160405180910390a1600160208381018290523360009081526004825260409020805460ff191683178155908501515151910155610674611efe565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608083015182519091015260808201516106bb906001906125fb565b602080830180519290925281514391015260a08301519051604001526106e081611721565b50505050565b6106f6600160005414600b6116fb565b815161071190158061070a57508251600154145b600c6116fb565b60008080556002805461072390612489565b80601f016020809104026020016040519081016040528092919081815260200182805461074f90612489565b801561079c5780601f106107715761010080835404028352916020019161079c565b820191906000526020600020905b81548152906001019060200180831161077f57829003601f168201915b50505050508060200190518101906107b49190612613565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516107e7929190612696565b60405180910390a16107fb341560086116fb565b61081561080e33836020015160016118d7565b60096116fb565b805161082d906001600160a01b03163314600a6116fb565b610835611efe565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835182015260608085015184519091015281830180516000908190528151439401939093525101526106e081611721565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156108da576108da612182565b1415610951576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561091b5761091b612182565b600181111561092c5761092c612182565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b61097160076000541460136116fb565b815161098c90158061098557508251600154145b60146116fb565b60008080556002805461099e90612489565b80601f01602080910402602001604051908101604052809291908181526020018280546109ca90612489565b8015610a175780601f106109ec57610100808354040283529160200191610a17565b820191906000526020600020905b8154815290600101906020018083116109fa57829003601f168201915b5050505050806020019051810190610a2f91906125c9565b9050610a428160c00151431060156116fb565b6040805133815284516020808301919091528501515115158183015290517f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe9181900360600190a1610a96341560126116fb565b60608101517fba2ea7dd1b587a116be89df6bae9e5b415c476a6087deb835bc9863b50e82a25906001610ac83361088e565b516001811115610ada57610ada612182565b14610ae6576000610af4565b610aef3361088e565b604001515b6040519114815260200160405180910390a160608101516001610b163361088e565b516001811115610b2857610b28612182565b14610b34576000610b42565b610b3d3361088e565b604001515b146040830152610b50611f52565b815181516001600160a01b039182169052602080840151835192169181019190915260408084018051845190920191909152606080850151845190910152516080840180519284015191909210905251610bac906001906125fb565b602080830180519091019190915280514360409091015260a08301519051606001526106e0816118ef565b610be7600860005414601d6116fb565b8151610c02901580610bfb57508251600154145b601e6116fb565b600080805560028054610c1490612489565b80601f0160208091040260200160405190810160405280929190818152602001828054610c4090612489565b8015610c8d5780601f10610c6257610100808354040283529160200191610c8d565b820191906000526020600020905b815481529060010190602001808311610c7057829003601f168201915b5050505050806020019051810190610ca591906126be565b9050610ccd604051806060016040528060008152602001600015158152602001600081525090565b610cde8260e001514310601f6116fb565b7f543c3f56646b82873a70d59240b56cc7f7dac39df26451cf493a03ffa309cbe73385604051610d0f92919061276f565b60405180910390a16000602085015151516001811115610d3157610d31612182565b1415610e6c57610d433415601b6116fb565b6001610d4e3361088e565b516001811115610d6057610d60612182565b14610d6c576000610d7a565b610d753361088e565b604001515b8082526040519081527fc1c2e148040f7c294e53340ac2b096eaec2921901f51ec0fb46e859cd63cf6f99060200160405180910390a180518352610dbc611f97565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086018051855190920191909152828401805160019052608087015181519094019390935260a086015192519091019190915251825114610e2d578251610e2f565b335b6020820180516001600160a01b0390921660609092019190915280514360809091015260c0840151905160a00152610e6681611a09565b506106e0565b6001602085015151516001811115610e8657610e86612182565b14156106e057610e983415601c6116fb565b60608201516001610ea83361088e565b516001811115610eba57610eba612182565b14610ec6576000610ed4565b610ecf3361088e565b604001515b1460208201819052610ee7576000610eea565b60015b6040828101829052519081527fdcf3c18ceed961142af0a3f1bd3908f6337ce948b9e341aa283c74a078b2b2679060200160405180910390a160408101516060840152610f35611f97565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608085015183519091015260808401805191830151600290921090915251610f8e906001906125fb565b6020808301805182019290925260408085015192510191909152820151610e2d578251610e2f565b610fc6600960005414602b6116fb565b8151610fe1901580610fda57508251600154145b602c6116fb565b600080805560028054610ff390612489565b80601f016020809104026020016040519081016040528092919081815260200182805461101f90612489565b801561106c5780601f106110415761010080835404028352916020019161106c565b820191906000526020600020905b81548152906001019060200180831161104f57829003601f168201915b505050505080602001905181019061108491906125c9565b90506110988160c00151431015602d6116fb565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a55033846040516110c9929190612696565b60405180910390a16110dd341560296116fb565b80516110f5906001600160a01b03163314602a6116fb565b610674611efe565b61110d60036000541460106116fb565b815161112890158061112157508251600154145b60116116fb565b60008080556002805461113a90612489565b80601f016020809104026020016040519081016040528092919081815260200182805461116690612489565b80156111b35780601f10611188576101008083540402835291602001916111b3565b820191906000526020600020905b81548152906001019060200180831161119657829003601f168201915b50505050508060200190518101906111cb91906127c2565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a161122a3415600d6116fb565b8051611242906001600160a01b03163314600e6116fb565b6020808401518051908201516040516112909361126a93929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826060015114600f6116fb565b611298611f97565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201528682015182015184516060908101919091528285018051600190528051600094018490528051909201929092528451815193169290910191909152805143608091820152830151905160a001526106e081611a09565b61132960076000541460186116fb565b815161134490158061133d57508251600154145b60196116fb565b60008080556002805461135690612489565b80601f016020809104026020016040519081016040528092919081815260200182805461138290612489565b80156113cf5780601f106113a4576101008083540402835291602001916113cf565b820191906000526020600020905b8154815290600101906020018083116113b257829003601f168201915b50505050508060200190518101906113e791906125c9565b90506113fb8160c00151431015601a6116fb565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb338460405161142c929190612696565b60405180910390a1611440341560166116fb565b8051611458906001600160a01b0316331460176116fb565b611460611f52565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526060808501518451820152828401805160009052608086015181519094019390935282514392019190915260a0840151915101526106e0816118ef565b6114da60086000541460226116fb565b81516114f59015806114ee57508251600154145b60236116fb565b60008080556002805461150790612489565b80601f016020809104026020016040519081016040528092919081815260200182805461153390612489565b80156115805780601f1061155557610100808354040283529160200191611580565b820191906000526020600020905b81548152906001019060200180831161156357829003601f168201915b505050505080602001905181019061159891906126be565b90506115ac8160e0015143101560246116fb565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33846040516115dd929190612696565b60405180910390a16115f1341560206116fb565b8051611609906001600160a01b0316331460216116fb565b611611611f97565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835190910152606080840151835190910152810151600090526080820151611663906001906125fb565b60208083018051909101919091525160026040909101526060820151600161168a3361088e565b51600181111561169c5761169c612182565b146116a85760006116b6565b6116b13361088e565b604001515b146116c25781516116c4565b335b6020820180516001600160a01b0390921660609092019190915280514360809091015260c0830151905160a001526106e081611a09565b816102a05760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516020810190915260008152815160400151602083015151101561180c57600a82602001516020015161175791906125fb565b81526040805160e0810182526000808252602080830182815283850183815260608086018581526080870186815260a0880187815260c089018881528c51516001600160a01b039081168b528d51890151169096528b518a01519094528a5190920151905288840180515190915251860151905285519052600990915543600155915190916117e891839101612852565b604051602081830303815290604052600290805190602001906106e0929190611ff3565b6118506040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168083528451602090810151831681850190815286516040908101518187019081528851606090810151818901908152858b01518401516080808b019182526003600055436001558551978801989098529451909716928501929092525190830152925191810191909152905160a082015260c0016117e8565b60006118e583853085611c43565b90505b9392505050565b604080516020810190915260008152602082015151156119b057600a82602001516040015161191e91906125fb565b81526040805160e0810182526000808252602080830182815283850183815260608086018581526080870186815260a0880187815260c089018881528c51516001600160a01b039081168b528d51890151169096528b518a01519094528a518301519091528985018051860151909152510151905285519052600790915543600155915190916117e891839101612852565b8151516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156119f2573d6000803e3d6000fd5b50600080805560018190556102a090600290612077565b60408051602081019091526000815260208201515115611b5357600a826020015160800151611a3891906125fb565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528251516001600160a01b03908116825283516020908101519091168183015283516040908101518184015284516060908101519084015281850180518301516080850152805182015160a0808601919091529051015160c0840152835160e0840152600860005543600155516117e89183910160006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b611b6f8260000151602001518360200151606001516001611d1d565b815151602083015160a001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611bb1573d6000803e3d6000fd5b50611bba611f52565b82515181516001600160a01b0391821690528351602090810151835192169181019190915283516040908101518351820152845160609081015184519091015281830180516001905280516000908401529185018051608001519251909101919091525160a00151611c2c90806128a9565b602082015160600152611c3e816118ef565b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611caa916128c0565b60006040518083038185875af1925050503d8060008114611ce7576040519150601f19603f3d011682016040523d82523d6000602084013e611cec565b606091505b5091509150611cfd82826001611d31565b5080806020019051810190611d1291906128dc565b979650505050505050565b611d28838383611d6c565b611c3e57600080fd5b60608315611d405750816118e8565b825115611d505782518084602001fd5b60405163100960cb60e01b815260048101839052602401611718565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611dcb916128c0565b60006040518083038185875af1925050503d8060008114611e08576040519150601f19603f3d011682016040523d82523d6000602084013e611e0d565b606091505b5091509150611e1e82826002611d31565b5080806020019051810190611e3391906128dc565b9695505050505050565b604051806040016040528060008152602001611e6a60408051808201909152600060208201908152815290565b905290565b604051806080016040528060008152602001600015158152602001600015158152602001600081525090565b604051806040016040528060008152602001611e6a60405180602001604052806000151581525090565b604051806040016040528060008152602001611e6a60408051608081018252600060208201818152928201819052606082015290815290565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001611e6a60405180606001604052806000815260200160008152602001600081525090565b6040518060400160405280611f656120b4565b8152602001611e6a60405180608001604052806000151581526020016000815260200160008152602001600081525090565b6040518060400160405280611faa6120b4565b8152602001611e6a6040518060c00160405280600015158152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b828054611fff90612489565b90600052602060002090601f0160209004810192826120215760008555612067565b82601f1061203a57805160ff1916838001178555612067565b82800160010185558215612067579182015b8281111561206757825182559160200191906001019061204c565b506120739291506120ee565b5090565b50805461208390612489565b6000825580601f10612093575050565b601f0160209004906000526020600020908101906120b191906120ee565b50565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081525090565b5b8082111561207357600081556001016120ef565b60006020828403121561211557600080fd5b5035919050565b60006040828403121561212e57600080fd5b50919050565b60006040828403121561214657600080fd5b6118e8838361211c565b6001600160a01b03811681146120b157600080fd5b60006020828403121561217757600080fd5b81356118e881612150565b634e487b7160e01b600052602160045260246000fd5b600281106120b157634e487b7160e01b600052602160045260246000fd5b815160608201906121c681612198565b808352506020830151151560208301526040830151604083015292915050565b60006080828403121561212e57600080fd5b60005b838110156122135781810151838201526020016121fb565b838111156106e05750506000910152565b82815260406020820152600082518060408401526122498160608501602087016121f8565b601f01601f1916919091016060019392505050565b60006060828403121561212e57600080fd5b6040805190810167ffffffffffffffff811182821017156122a157634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156122a157634e487b7160e01b600052604160045260246000fd5b80151581146120b157600080fd5b6000604082840312156122f857600080fd5b612300612270565b823581526020830135612312816122d8565b60208201529392505050565b6000818303604081121561233157600080fd5b612339612270565b833581526020601f198301121561234f57600080fd5b6123576122a7565b91506123616122a7565b602094850135815282529283015250919050565b6000818303604081121561238857600080fd5b612390612270565b833581526020601f19830112156123a657600080fd5b6123ae6122a7565b915060208401356123be816122d8565b825260208101919091529392505050565b600081830360808112156123e257600080fd5b6123ea612270565b833581526060601f198301121561240057600080fd5b6124086122a7565b91506040516060810181811067ffffffffffffffff8211171561243b57634e487b7160e01b600052604160045260246000fd5b60405260208501356002811061245057600080fd5b81526040850135612460816122d8565b60208201526060850135612473816122d8565b6040820152825260208101919091529392505050565b600181811c9082168061249d57607f821691505b6020821081141561212e57634e487b7160e01b600052602260045260246000fd5b600081830360608112156124d157600080fd5b6124d9612270565b833581526040601f19830112156124ef57600080fd5b6124f7612270565b60208581013582526040909501358582015293810193909352509092915050565b805161095c81612150565b600060e0828403121561253557600080fd5b60405160e0810181811067ffffffffffffffff8211171561256657634e487b7160e01b600052604160045260246000fd5b8060405250809150825161257981612150565b8152602083015161258981612150565b8060208301525060408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201525092915050565b600060e082840312156125db57600080fd5b6118e88383612523565b634e487b7160e01b600052601160045260246000fd5b6000821982111561260e5761260e6125e5565b500190565b60006080828403121561262557600080fd5b6040516080810181811067ffffffffffffffff8211171561265657634e487b7160e01b600052604160045260246000fd5b604052825161266481612150565b8152602083015161267481612150565b6020820152604083810151908201526060928301519281019290925250919050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b60006101008083850312156126d257600080fd5b6040519081019067ffffffffffffffff8211818310171561270357634e487b7160e01b600052604160045260246000fd5b816040528351915061271482612150565b81815261272360208501612518565b602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a08301919061279b81612198565b80604085015250602081015115156060840152604081015115156080840152509392505050565b600060a082840312156127d457600080fd5b60405160a0810181811067ffffffffffffffff8211171561280557634e487b7160e01b600052604160045260246000fd5b604052825161281381612150565b8152602083015161282381612150565b806020830152506040830151604082015260608301516060820152608083015160808201528091505092915050565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e081016102ca565b6000828210156128bb576128bb6125e5565b500390565b600082516128d28184602087016121f8565b9190910192915050565b6000602082840312156128ee57600080fd5b81516118e8816122d856fea2646970667358221220f7aa7861f74058745817b27099d8f3711fb4edab8ff2838300b0b57872b4a7f064736f6c634300080c0033`,
  BytecodeLen: 11400,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:64:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:98:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:171:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:151:41:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:104:67:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:73:36:after expr stmt semicolon',
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
  "Bob_seeBalance": Bob_seeBalance,
  "Bob_seeBobsOutcome": Bob_seeBobsOutcome
  };
export const _APIs = {
  Bob: {
    getReward: Bob_getReward,
    join: Bob_join,
    seeBalance: Bob_seeBalance,
    seeBobsOutcome: Bob_seeBobsOutcome
    }
  };
