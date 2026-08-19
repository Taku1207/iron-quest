
(function(){
"use strict";
const defaultMenu=[
{name:"オーバーヘッドプレス",muscle:"SHOULDER",sets:[{kg:35,reps:15},{kg:35,reps:15}]},
{name:"ラットプルダウン",muscle:"BACK",sets:[{kg:35,reps:15},{kg:45,reps:15}]},
{name:"チェストプレス",muscle:"STR",sets:[{kg:25,reps:15},{kg:25,reps:15}]},
{name:"ペクトラル",muscle:"STR",sets:[{kg:15,reps:15},{kg:15,reps:15}]},
{name:"アブドミナルクランチ",muscle:"CORE",sets:[{kg:25,reps:15},{kg:25,reps:15}]},
{name:"ローバック",muscle:"BACK",sets:[{kg:43,reps:15},{kg:43,reps:15}]},
{name:"ロータリートーソー",muscle:"CORE",sets:[{kg:20,reps:15},{kg:20,reps:15}]},
{name:"レッグプレス",muscle:"LEG",sets:[{kg:41,reps:20},{kg:41,reps:20}]},
{name:"アダクター",muscle:"LEG",sets:[{kg:15,reps:20}]}
];
const enemies=[
{name:"ゴブリン見習い",recLv:1,recPower:648,hp:483,atk:91,def:29,crit:3,gold:66,exp:28,img:"enemy_goblin.jpg",drop:"守りの護符",dropItem:"guard_charm"},
{name:"ゴブリン兵",recLv:2,recPower:738,hp:651,atk:101,def:34,crit:3,gold:88,exp:32,img:"enemy_goblin.jpg",drop:"鉄剣",dropItem:"iron_sword"},
{name:"スケルトン従兵",recLv:3,recPower:828,hp:821,atk:110,def:39,crit:3,gold:109,exp:36,img:"enemy_skeleton.jpg",drop:"骨の護符",dropItem:"bone_charm"},
{name:"スケルトン剣士",recLv:4,recPower:919,hp:992,atk:120,def:44,crit:3,gold:131,exp:40,img:"enemy_skeleton.jpg",drop:"鉄兜",dropItem:"iron_helm"},
{name:"オーク戦士",recLv:5,recPower:1011,hp:1165,atk:129,def:48,crit:3,gold:153,exp:44,img:"enemy_orc.jpg",drop:"オークの腕輪",dropItem:"orc_bracer"},
{name:"紫帽の呪戦士",recLv:6,recPower:1102,hp:1339,atk:139,def:53,crit:3,gold:175,exp:48,img:"enemy_special_a.jpg",drop:"会心の指輪",dropItem:"crit_ring"},
{name:"オーク隊長",recLv:7,recPower:1194,hp:1514,atk:148,def:58,crit:3,gold:198,exp:52,img:"enemy_orc.jpg",drop:"鉄鎧",dropItem:"iron_armor"},
{name:"オーガ",recLv:8,recPower:1287,hp:1689,atk:158,def:63,crit:3,gold:220,exp:56,img:"enemy_ogre.jpg",drop:"巨人の護符",dropItem:"giant_charm"},
{name:"ワイバーン幼体",recLv:9,recPower:1379,hp:1866,atk:167,def:68,crit:3,gold:242,exp:60,img:"enemy_wyvern.jpg",drop:"飛竜の腕甲",dropItem:"wyvern_bracer"},
{name:"骨騎士",recLv:10,recPower:1472,hp:2042,atk:177,def:73,crit:3,gold:265,exp:64,img:"enemy_blackknight.jpg",drop:"鋼鉄剣",dropItem:"steel_sword"},
{name:"紫煙の魔女",recLv:12,recPower:1658,hp:2398,atk:196,def:83,crit:4,gold:310,exp:72,img:"enemy_special_b.jpg",drop:"命の首飾り",dropItem:"life_necklace"},
{name:"ワイバーン",recLv:14,recPower:1844,hp:2755,atk:215,def:93,crit:4,gold:355,exp:80,img:"enemy_wyvern.jpg",drop:"飛竜の腕甲",dropItem:"wyvern_bracer"},
{name:"黒騎士",recLv:16,recPower:2031,hp:3114,atk:234,def:102,crit:4,gold:400,exp:88,img:"enemy_blackknight.jpg",drop:"黒鋼兜",dropItem:"black_helm"},
{name:"デーモン衛兵",recLv:18,recPower:2219,hp:3475,atk:254,def:112,crit:4,gold:445,exp:96,img:"enemy_blackknight.jpg",drop:"黒鋼手甲",dropItem:"black_bracer"},
{name:"闇の女騎士",recLv:20,recPower:2407,hp:3837,atk:273,def:122,crit:4,gold:491,exp:104,img:"enemy_special_c.jpg",drop:"魔剣",dropItem:"demon_sword"},
{name:"ドラゴニュート",recLv:24,recPower:2783,hp:4565,atk:311,def:142,crit:5,gold:582,exp:120,img:"enemy_dragonewt.jpg",drop:"竜角兜",dropItem:"dragon_helm"},
{name:"ヘルハウンド王",recLv:28,recPower:3162,hp:5298,atk:350,def:162,crit:5,gold:674,exp:136,img:"enemy_dragonewt.jpg",drop:"黒鋼脚甲",dropItem:"black_legs"},
{name:"死霊術師",recLv:32,recPower:3541,hp:6035,atk:389,def:181,crit:5,gold:767,exp:152,img:"enemy_undeadking.jpg",drop:"黒鋼鎧",dropItem:"black_armor"},
{name:"巨鬼将軍",recLv:36,recPower:3921,hp:6775,atk:428,def:201,crit:6,gold:859,exp:168,img:"enemy_ogre.jpg",drop:"巨人の護符",dropItem:"giant_charm"},
{name:"古竜",recLv:40,recPower:4303,hp:7519,atk:466,def:221,crit:6,gold:952,exp:184,img:"enemy_finalboss.jpg",drop:"竜の紋章",dropItem:"dragon_emblem"},
{name:"魔王親衛隊長",recLv:50,recPower:5260,hp:9390,atk:564,def:270,crit:7,gold:1185,exp:224,img:"enemy_undeadking.jpg",drop:"神話剣",dropItem:"mythic_sword"},
{name:"災厄竜",recLv:60,recPower:6221,hp:11277,atk:661,def:320,crit:8,gold:1419,exp:264,img:"enemy_finalboss.jpg",drop:"竜鎧",dropItem:"dragon_armor"},
{name:"堕ちた英雄",recLv:75,recPower:7669,hp:14132,atk:807,def:394,crit:9,gold:1773,exp:324,img:"enemy_undeadking.jpg",drop:"覇者の指輪",dropItem:"conqueror_ring"},
{name:"深淵魔王",recLv:90,recPower:9124,hp:17011,atk:954,def:468,crit:10,gold:2128,exp:384,img:"enemy_undeadking.jpg",drop:"覇者の指輪",dropItem:"conqueror_ring"},
{name:"終焉の竜帝",recLv:120,recPower:12051,hp:22833,atk:1248,def:617,crit:13,gold:2844,exp:504,img:"enemy_finalboss.jpg",drop:"覇者の指輪",dropItem:"conqueror_ring"}
];
const stages=[
{lv:1,title:"冒険者",desc:"修行の始まり。",img:"hero_v82_lv1.jpg",tier:1},
{lv:3,title:"木剣士",desc:"最初の武器を手にした。",img:"hero_v82_lv3.jpg",tier:2},
{lv:5,title:"革装戦士",desc:"軽装備が整い戦士らしくなる。",img:"hero_v82_lv5.jpg",tier:2},
{lv:10,title:"蒼刃兵",desc:"蒼い武装を解放。",img:"hero_v82_lv10.jpg",tier:3},
{lv:15,title:"鉄刃剣士",desc:"鉄刃を操る前線戦士。",img:"hero_v82_lv15.jpg",tier:3},
{lv:20,title:"紋章騎士",desc:"紋章を授かった騎士。",img:"hero_v82_lv20.jpg",tier:4},
{lv:30,title:"黒鋼隊長",desc:"黒鋼装備を纏う隊長級。",img:"hero_v82_lv30.jpg",tier:4},
{lv:40,title:"王国騎士",desc:"王国を代表する重騎士。",img:"hero_v82_lv40.jpg",tier:5},
{lv:50,title:"魔鋼の戦士",desc:"魔力を帯びた鋼を扱う。",img:"hero_v82_lv50.jpg",tier:5},
{lv:60,title:"紫電の剣豪",desc:"紫電を纏う剣豪へ。",img:"hero_v82_lv60.jpg",tier:6},
{lv:75,title:"竜刻の戦将",desc:"竜の力を刻んだ戦将。",img:"hero_v82_lv75.jpg",tier:6},
{lv:90,title:"神鉄覇者",desc:"神鉄の武装を得た覇者。",img:"hero_v82_lv90.jpg",tier:7},
{lv:110,title:"深淵征服者",desc:"深淵を越えてなお進む。",img:"hero_v82_lv110.jpg",tier:8},
{lv:140,title:"星喰い王",desc:"人の領域を越えた王。",img:"hero_v82_lv140.jpg",tier:9},
{lv:200,title:"鉄神皇",desc:"IRON QUESTの超越到達点。レベルはこの先も上昇する。",img:"hero_v82_lv200.jpg",tier:10}
];
const slotNames={weapon:"武器",head:"頭",body:"胴",arms:"腕",legs:"脚",accessory:"アクセ"};
const slotIcons={weapon:"⚔️",head:"🪖",body:"🛡️",arms:"🥊",legs:"🥾",accessory:"💍"};
const rarityNames={common:"COMMON",uncommon:"UNCOMMON",rare:"RARE",epic:"EPIC",legendary:"LEGENDARY"};
const equipment=[
{id:"starter_sword",slot:"weapon",name:"古びた木剣",art:"🗡️",rarity:"common",price:0,minLv:1,tier:1,atk:8},
{id:"iron_sword",slot:"weapon",name:"鉄剣",art:"⚔️",rarity:"uncommon",price:300,minLv:3,tier:2,atk:18},
{id:"steel_sword",slot:"weapon",name:"鋼鉄剣",art:"⚔️",rarity:"rare",price:700,minLv:8,tier:3,atk:32},
{id:"demon_sword",slot:"weapon",name:"魔剣",art:"🗡️",rarity:"epic",price:1500,minLv:20,tier:4,atk:52,crit:3},
{id:"dragon_sword",slot:"weapon",name:"竜剣",art:"⚔️",rarity:"epic",price:3000,minLv:40,tier:5,atk:80,crit:5},
{id:"mythic_sword",slot:"weapon",name:"神話剣",art:"🗡️",rarity:"legendary",price:6000,minLv:70,tier:7,atk:120,crit:8},
{id:"cloth_head",slot:"head",name:"布のバンダナ",art:"🎗️",rarity:"common",price:0,minLv:1,tier:1,hp:10,def:2},
{id:"leather_helm",slot:"head",name:"革の兜",art:"🪖",rarity:"uncommon",price:180,minLv:3,tier:2,hp:40,def:10},
{id:"iron_helm",slot:"head",name:"鉄兜",art:"🪖",rarity:"rare",price:520,minLv:10,tier:3,hp:70,def:18},
{id:"black_helm",slot:"head",name:"黒鋼兜",art:"🪖",rarity:"epic",price:1200,minLv:25,tier:4,hp:120,def:30},
{id:"dragon_helm",slot:"head",name:"竜角兜",art:"🐲",rarity:"legendary",price:2600,minLv:55,tier:6,hp:180,def:50},
{id:"cloth_body",slot:"body",name:"布の修行着",art:"🥋",rarity:"common",price:0,minLv:1,tier:1,hp:40,def:8},
{id:"leather_armor",slot:"body",name:"革鎧",art:"🦺",rarity:"uncommon",price:250,minLv:5,tier:2,hp:80,def:18},
{id:"iron_armor",slot:"body",name:"鉄鎧",art:"🛡️",rarity:"rare",price:700,minLv:12,tier:3,hp:140,def:30},
{id:"black_armor",slot:"body",name:"黒鋼鎧",art:"🛡️",rarity:"epic",price:1600,minLv:30,tier:5,hp:220,def:50},
{id:"dragon_armor",slot:"body",name:"竜鎧",art:"🐉",rarity:"legendary",price:3400,minLv:60,tier:6,hp:320,def:80},
{id:"cloth_arms",slot:"arms",name:"布のリスト",art:"🥊",rarity:"common",price:0,minLv:1,tier:1,atk:1,def:2},
{id:"leather_bracer",slot:"arms",name:"革手甲",art:"🥊",rarity:"uncommon",price:200,minLv:4,tier:2,atk:4,def:4},
{id:"iron_bracer",slot:"arms",name:"鉄手甲",art:"🥊",rarity:"rare",price:600,minLv:12,tier:3,atk:8,def:8},
{id:"black_bracer",slot:"arms",name:"黒鋼手甲",art:"🥊",rarity:"epic",price:1400,minLv:30,tier:5,atk:14,def:14},
{id:"dragon_bracer",slot:"arms",name:"竜爪手甲",art:"🐲",rarity:"legendary",price:2900,minLv:58,tier:6,atk:22,def:18},
{id:"cloth_legs",slot:"legs",name:"布の脚絆",art:"🥾",rarity:"common",price:0,minLv:1,tier:1,hp:20,def:2},
{id:"leather_legs",slot:"legs",name:"革脚甲",art:"🥾",rarity:"uncommon",price:180,minLv:4,tier:2,hp:30,def:5},
{id:"iron_legs",slot:"legs",name:"鉄脚甲",art:"🥾",rarity:"rare",price:560,minLv:12,tier:3,hp:60,def:10},
{id:"black_legs",slot:"legs",name:"黒鋼脚甲",art:"🥾",rarity:"epic",price:1300,minLv:28,tier:5,hp:110,def:18},
{id:"dragon_legs",slot:"legs",name:"竜脚甲",art:"🐉",rarity:"legendary",price:2800,minLv:55,tier:6,hp:180,def:30},
{id:"plain_charm",slot:"accessory",name:"素朴な護符",art:"📿",rarity:"common",price:0,minLv:1,tier:1,hp:20},
{id:"power_ring",slot:"accessory",name:"力の指輪",art:"💍",rarity:"uncommon",price:350,minLv:6,tier:2,atk:10},
{id:"guard_charm",slot:"accessory",name:"守りの護符",art:"📿",rarity:"uncommon",price:350,minLv:6,tier:2,def:10},
{id:"life_necklace",slot:"accessory",name:"命の首飾り",art:"📿",rarity:"rare",price:850,minLv:15,tier:3,hp:100},
{id:"crit_ring",slot:"accessory",name:"会心の指輪",art:"💍",rarity:"epic",price:1800,minLv:30,tier:5,crit:4},
{id:"bone_charm",slot:"accessory",name:"骨の護符",art:"🦴",rarity:"rare",price:0,minLv:6,tier:3,hp:60,def:8},
{id:"orc_bracer",slot:"arms",name:"オークの腕輪",art:"🦾",rarity:"rare",price:0,minLv:11,tier:3,atk:10,def:6},
{id:"giant_charm",slot:"accessory",name:"巨人の護符",art:"🩸",rarity:"epic",price:0,minLv:21,tier:4,hp:160,atk:8},
{id:"wyvern_bracer",slot:"arms",name:"飛竜の腕甲",art:"🐲",rarity:"epic",price:0,minLv:36,tier:5,atk:18,def:16},
{id:"dragon_emblem",slot:"accessory",name:"竜の紋章",art:"🔶",rarity:"legendary",price:0,minLv:61,tier:6,atk:20,def:10,crit:2},
{id:"conqueror_ring",slot:"accessory",name:"覇者の指輪",art:"💠",rarity:"legendary",price:0,minLv:86,tier:7,hp:220,atk:35,def:20,crit:4}
];
const starters=["starter_sword","cloth_head","cloth_body","cloth_arms","cloth_legs","plain_charm"];
const starterEquipped={weapon:"starter_sword",head:"cloth_head",body:"cloth_body",arms:"cloth_arms",legs:"cloth_legs",accessory:"plain_charm"};
const BP_MAX=5,BP_REGEN_MS=8*60*60*1000;
const initial={level:1,xp:0,totalWorkouts:0,kills:0,enemyTier:0,selectedEnemyTier:0,enemyHp:400,bp:5,bpLastRegen:Date.now(),
 muscles:{STR:{lv:1,xp:0},SHOULDER:{lv:1,xp:0},BACK:{lv:1,xp:0},CORE:{lv:1,xp:0},LEG:{lv:1,xp:0}},
 menu:defaultMenu,records:{},history:[],gold:0,inventory:{},equipped:starterEquipped,shopFilter:"weapon",clearedAll:false,lastWorkoutBpDate:"",progressionVersion:82};
const clone=x=>JSON.parse(JSON.stringify(x));
function load(){
 try{
  const old=JSON.parse(localStorage.getItem("ironQuestV4"));
  const s=clone(initial);
  if(old&&typeof old==="object")Object.assign(s,old);
  s.muscles=Object.assign(clone(initial.muscles),old?.muscles||{});
  s.menu=old?.menu?.length?old.menu:clone(defaultMenu);
  s.records=old?.records||{};s.history=old?.history||[];
  s.inventory=Object.assign({},old?.inventory||{});
  Object.keys(s.inventory).forEach(id=>{const inv=s.inventory[id]||{};s.inventory[id]={owned:inv.owned!==false,copies:Math.max(1,Number.isFinite(+inv.copies)?+inv.copies:1),upgrade:Math.max(0,Math.min(5,Number.isFinite(+inv.upgrade)?+inv.upgrade:0)),fuseLevel:Math.max(1,Math.min(5,Number.isFinite(+inv.fuseLevel)?+inv.fuseLevel:1)),new:!!inv.new}});
  starters.forEach(id=>{if(!s.inventory[id])s.inventory[id]={owned:true,copies:1,upgrade:0,fuseLevel:1,new:false}});
  s.equipped=Object.assign({},starterEquipped,old?.equipped||{});
  if(old&&old.progressionVersion!==82){
   const oldToV8=[0,2,3,5,8,11,14];
   const oldTier=Math.max(0,Math.min(6,Number.isFinite(+old.enemyTier)?+old.enemyTier:0));
   const oldSelected=Math.max(0,Math.min(6,Number.isFinite(+old.selectedEnemyTier)?+old.selectedEnemyTier:oldTier));
   if(old.progressionVersion===8){
     s.enemyTier=Math.max(0,Math.min(24,Number.isFinite(+old.enemyTier)?+old.enemyTier:0));
     s.selectedEnemyTier=Math.max(0,Math.min(s.enemyTier,Number.isFinite(+old.selectedEnemyTier)?+old.selectedEnemyTier:s.enemyTier));
     s.clearedAll=!!old.clearedAll;
   }else if(old.clearedAll){s.enemyTier=23;s.selectedEnemyTier=23;s.clearedAll=false}else{
     const oldToV82=[0,5,10,14,18,21,23];
     s.enemyTier=oldToV82[oldTier];s.selectedEnemyTier=Math.min(s.enemyTier,oldToV82[oldSelected])
   }
  }
  s.progressionVersion=82;
  s.enemyTier=Math.max(0,Math.min(enemies.length-1,Number.isFinite(+s.enemyTier)?+s.enemyTier:0));
  s.selectedEnemyTier=Math.max(0,Math.min(s.enemyTier,Number.isFinite(+s.selectedEnemyTier)?+s.selectedEnemyTier:s.enemyTier));
  s.bp=old&&Number.isFinite(+old.bp)?Math.max(0,Math.min(BP_MAX,+old.bp)):BP_MAX;
  s.bpLastRegen=old&&Number.isFinite(+old.bpLastRegen)?+old.bpLastRegen:Date.now();
  s.gold=Math.max(0,+s.gold||0);return s;
 }catch(e){const s=clone(initial);starters.forEach(id=>s.inventory[id]={owned:true,copies:1,upgrade:0,fuseLevel:1,new:false});return s}
}
let state=load(),audioCtx=null,bgmTimer=null,bgmOn=false;
function save(){try{localStorage.setItem("ironQuestV4",JSON.stringify(state))}catch(e){}}
function xpNeed(lv){return 70+Math.floor((lv-1)*3)}
function stage(){let s=stages[0];stages.forEach(v=>{if(state.level>=v.lv)s=v});return s}
function currentEnemy(){return enemies[Math.max(0,Math.min(enemies.length-1,state.enemyTier||0))]}
function selectedEnemy(){const max=state.clearedAll?enemies.length-1:state.enemyTier;state.selectedEnemyTier=Math.max(0,Math.min(max,Number.isFinite(+state.selectedEnemyTier)?+state.selectedEnemyTier:max));return enemies[state.selectedEnemyTier]}
function syncBp(){const now=Date.now();state.bp=Math.max(0,Math.min(BP_MAX,+state.bp||0));if(!Number.isFinite(+state.bpLastRegen))state.bpLastRegen=now;if(state.bp>=BP_MAX){state.bp=BP_MAX;state.bpLastRegen=now;return false}const elapsed=Math.max(0,now-state.bpLastRegen),gain=Math.floor(elapsed/BP_REGEN_MS);if(gain<1)return false;state.bp=Math.min(BP_MAX,state.bp+gain);state.bpLastRegen=state.bp>=BP_MAX?now:state.bpLastRegen+gain*BP_REGEN_MS;save();return true}
function bpNext(){syncBp();if(state.bp>=BP_MAX)return "MAX";const left=Math.max(0,BP_REGEN_MS-(Date.now()-state.bpLastRegen)),h=Math.floor(left/3600000),m=Math.floor((left%3600000)/60000),s=Math.floor((left%60000)/1000);return String(h).padStart(2,"0")+":"+String(m).padStart(2,"0")+":"+String(s).padStart(2,"0")}
function addBp(n){syncBp();const before=state.bp;state.bp=Math.min(BP_MAX,state.bp+n);if(state.bp>=BP_MAX)state.bpLastRegen=Date.now();save();return state.bp-before}
function spendBp(){syncBp();if(state.bp<1)return false;if(state.bp>=BP_MAX)state.bpLastRegen=Date.now();state.bp--;save();return true}
function itemById(id){return equipment.find(x=>x.id===id)}
function itemUpgrade(id){return state.inventory[id]?.upgrade||0}
function itemFuseLevel(id){return state.inventory[id]?.fuseLevel||1}
function itemCopies(id){return state.inventory[id]?.copies||0}
function scaledValue(v,u,l=1){return v?Math.round(v*(1+u*.08)*(1+(l-1)*.12)*10)/10:0}
function itemStats(item){const u=itemUpgrade(item.id),l=itemFuseLevel(item.id);return {hp:scaledValue(item.hp,u,l),atk:scaledValue(item.atk,u,l),def:scaledValue(item.def,u,l),crit:scaledValue(item.crit,u,l)}}
function equipmentTotals(){const t={hp:0,atk:0,def:0,crit:0,tier:1};Object.values(state.equipped).forEach(id=>{const it=itemById(id);if(!it)return;const z=itemStats(it);t.hp+=z.hp;t.atk+=z.atk;t.def+=z.def;t.crit+=z.crit;t.tier=Math.max(t.tier,it.tier||1)});return t}
function combatStats(){const m=state.muscles,e=equipmentTotals();const base={hp:600+state.level*70+m.CORE.lv*45+m.LEG.lv*35,atk:45+state.level*17+m.STR.lv*18+m.LEG.lv*5,def:25+state.level*9+m.BACK.lv*14+m.CORE.lv*8,crit:4+m.SHOULDER.lv*1.5};const x={hp:Math.round(base.hp+e.hp),atk:Math.round(base.atk+e.atk),def:Math.round(base.def+e.def),crit:Math.round((base.crit+e.crit)*10)/10};x.power=Math.round(x.hp*.24+x.atk*2.3+x.def*1.8+x.crit*18);return x}
function power(){return combatStats().power}
function riskInfo(en){const p=power(),ratio=p/en.recPower;if(ratio>=1.12)return {cls:"good",text:"有利：十分に勝機があります"};if(ratio>=.92)return {cls:"warn",text:"互角：勝負になる戦闘力です"};return {cls:"bad",text:"⚠️ 苦戦が予想されます。修行・装備強化を推奨"}}
function toast(msg){const e=document.getElementById("toast");e.textContent=msg;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1800)}
function go(id){document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===id));document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",t.dataset.page===id));if(id==="train")renderTraining();if(id==="settings")renderEditor();renderAll()}
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>go(b.dataset.page)));
function formatBonus(z){const a=[];if(z.hp)a.push("HP +"+z.hp);if(z.atk)a.push("ATK +"+z.atk);if(z.def)a.push("DEF +"+z.def);if(z.crit)a.push("CRIT +"+z.crit+"%");return a.join(" / ")||"補正なし"}
function renderEnemySelector(){const root=document.getElementById("enemySelector");if(!root)return;const max=state.clearedAll?enemies.length-1:state.enemyTier;root.innerHTML="";enemies.forEach((en,i)=>{const unlocked=i<=max,cleared=i<state.enemyTier||state.clearedAll,b=document.createElement("button");b.className="enemyPick"+(i===state.selectedEnemyTier?" active":"")+(cleared?" cleared":"")+(unlocked?"":" locked");b.disabled=!unlocked;b.innerHTML='<b>STAGE '+(i+1)+' '+en.name+'</b><span>推奨Lv.'+en.recLv+' / '+(cleared?'再戦可':i===state.enemyTier?'攻略中':'未解放')+'</span>';if(unlocked)b.addEventListener("click",()=>{state.selectedEnemyTier=i;save();renderAll()});root.appendChild(b)})}
function renderBpUI(){syncBp();const next=bpNext();const a=document.getElementById("bpText"),b=document.getElementById("battleBpText"),c=document.getElementById("bpNextText"),d=document.getElementById("battleBpNext"),btn=document.getElementById("challengeBtn");if(a)a.textContent="BP "+state.bp+" / "+BP_MAX;if(b)b.textContent="BP "+state.bp+" / "+BP_MAX;if(c)c.textContent=next;if(d)d.textContent=next==="MAX"?"自然回復 MAX":"次回復 "+next;if(btn){btn.disabled=state.bp<1;btn.textContent=state.bp<1?"BPが足りません":"BP 1を使って挑戦"}}
function renderAll(){
 const st=stage(),en=currentEnemy(),ben=selectedEnemy(),cs=combatStats(),r=riskInfo(en),br=riskInfo(ben);
 ["heroImg","gearImg"].forEach(id=>document.getElementById(id).src=st.img);
 document.getElementById("enemyImg").src=en.img;document.getElementById("battleEnemyImg").src=ben.img;
 document.getElementById("titleBadge").textContent=st.title;document.getElementById("formText").textContent=st.title;document.getElementById("levelText").textContent="Lv."+state.level;document.getElementById("powerText").textContent=cs.power.toLocaleString();
 document.getElementById("xpText").textContent=state.xp+" / "+xpNeed(state.level);document.getElementById("xpFill").style.width=Math.min(100,state.xp/xpNeed(state.level)*100)+"%";
 document.getElementById("totalWorkouts").textContent=state.totalWorkouts;document.getElementById("kills").textContent=state.kills;document.getElementById("goldText").textContent=state.gold.toLocaleString();document.getElementById("gearTier").textContent=equipmentTotals().tier;
 document.getElementById("combatStats").innerHTML='<div class="combatMini"><span>HP</span><b>'+cs.hp.toLocaleString()+'</b></div><div class="combatMini"><span>ATK</span><b>'+cs.atk.toLocaleString()+'</b></div><div class="combatMini"><span>DEF</span><b>'+cs.def.toLocaleString()+'</b></div><div class="combatMini"><span>CRIT</span><b>'+cs.crit+'%</b></div>';
 const labels={STR:"STR 胸・腕",SHOULDER:"SHOULDER 肩",BACK:"BACK 背中",CORE:"CORE 体幹",LEG:"LEG 脚"};document.getElementById("muscleGrid").innerHTML=Object.entries(state.muscles).map(([k,m])=>'<div class="muscle"><b>'+labels[k]+'</b><span>Lv.'+m.lv+'</span><div class="small">EXP '+m.xp+' / 100</div></div>').join("");
 document.getElementById("enemyName").textContent=en.name;document.getElementById("enemyLv").textContent="STAGE "+(state.enemyTier+1);document.getElementById("enemyHpText").textContent=en.hp.toLocaleString()+" HP";document.getElementById("enemyHpFill").style.width="100%";document.getElementById("enemyRecLv").textContent="Lv."+en.recLv;document.getElementById("enemyRecPower").textContent=en.recPower.toLocaleString();document.getElementById("homeRisk").className="risk "+r.cls;document.getElementById("homeRisk").textContent=r.text;
 document.getElementById("battleEnemy").textContent=ben.name;document.getElementById("battleHp").textContent=ben.hp.toLocaleString()+" HP";document.getElementById("battleHpFill").style.width="100%";document.getElementById("battleRecLv").textContent="Lv."+ben.recLv;document.getElementById("battleRecPower").textContent=ben.recPower.toLocaleString();document.getElementById("battleRisk").className="risk "+br.cls;document.getElementById("battleRisk").textContent=br.text;
 document.getElementById("battleVsStats").innerHTML='<b>TAKU</b>　HP '+cs.hp.toLocaleString()+' / ATK '+cs.atk+' / DEF '+cs.def+' / CRIT '+cs.crit+'%<br><span class="small">推奨Lvは目安です。撃破済みの敵は何度でも再戦できます。</span>';
 document.getElementById("gearDesc").innerHTML='<b style="color:#e9bb54">'+st.title+'</b><div class="small">'+st.desc+'</div>';const next=stages.find(x=>x.lv>state.level);document.getElementById("evolutionText").textContent=next?'Lv.'+next.lv+'「'+next.title+'」で '+next.desc:'Lv.200到達済み。レベルは200以降も上昇します';
 renderEnemySelector();renderBpUI();renderGear();renderHistory();
}
function renderTraining(){
 const root=document.getElementById("exerciseList");root.innerHTML="";state.menu.forEach(ex=>{const box=document.createElement("div");box.className="exercise";box.innerHTML='<div class="exhead"><div class="exname"></div><span class="type"></span></div><div class="setlabels"><span>SET</span><span>重量</span><span>回数</span><span>完了</span></div><div class="sets"></div>';box.querySelector(".exname").textContent=ex.name;box.querySelector(".type").textContent=ex.muscle;const sets=box.querySelector(".sets");ex.sets.forEach((set,j)=>{const rr=document.createElement("div");rr.className="setrow";rr.innerHTML='<b>'+(j+1)+'</b><div class="unitfield"><input class="kg" inputmode="decimal"><span class="unit">kg</span></div><div class="unitfield"><input class="reps" inputmode="numeric"><span class="unit">回</span></div><input class="check" type="checkbox">';const kg=rr.querySelector(".kg"),reps=rr.querySelector(".reps");kg.value=set.kg;reps.value=set.reps;kg.addEventListener("change",()=>{set.kg=Number(kg.value)||0;save()});reps.addEventListener("change",()=>{set.reps=Number(reps.value)||0;save()});rr.querySelector(".check").addEventListener("change",updateProgress);sets.appendChild(rr)});if(state.records[ex.name]){const d=document.createElement("div");d.className="record";d.textContent="自己ベスト総負荷："+state.records[ex.name].toLocaleString()+"kg";box.appendChild(d)}root.appendChild(box)});updateProgress();
}
function updateProgress(){const all=[...document.querySelectorAll("#exerciseList .check")],done=all.filter(x=>x.checked).length;document.getElementById("progressBadge").textContent=all.length?Math.round(done/all.length*100)+"%":"0%"}
let pendingWorkout=[];
function localDayKey(){const d=new Date(),y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),day=String(d.getDate()).padStart(2,"0");return y+"-"+m+"-"+day}
document.getElementById("reviewBtn").addEventListener("click",()=>{
 const boxes=[...document.querySelectorAll("#exerciseList .exercise")];pendingWorkout=[];
 boxes.forEach((box,i)=>{const ex=state.menu[i],rows=[...box.querySelectorAll(".setrow")],done=[];rows.forEach((row,j)=>{if(row.querySelector(".check").checked){const kg=Number(row.querySelector(".kg").value)||0,reps=Number(row.querySelector(".reps").value)||0;ex.sets[j].kg=kg;ex.sets[j].reps=reps;done.push({setIndex:j,kg,reps})}});if(done.length)pendingWorkout.push({exerciseIndex:i,name:ex.name,muscle:ex.muscle,sets:done,totalSets:ex.sets.length})});
 if(!pendingWorkout.length){toast("1セット以上完了すると修行を記録できます");return}
 save();const root=document.getElementById("reviewList");root.innerHTML='<div class="reviewRow"><b>種目</b><b>重量</b><b>回数</b><b>SET</b></div>';
 pendingWorkout.forEach(ex=>{const rr=document.createElement("div");rr.className="reviewRow";rr.innerHTML='<b></b><span></span><span></span><span></span>';rr.children[0].textContent=ex.name;rr.children[1].textContent=ex.sets.map(s=>s.kg+"kg").join(" / ");rr.children[2].textContent=ex.sets.map(s=>s.reps+"回").join(" / ");rr.children[3].textContent=ex.sets.map(s=>s.setIndex+1).join(",");root.appendChild(rr)});
 document.getElementById("reviewOverlay").classList.add("show")
});
document.getElementById("backToTrain").addEventListener("click",()=>document.getElementById("reviewOverlay").classList.remove("show"));
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function showTrainingResult(data){const ov=document.getElementById("resultOverlay");document.getElementById("resultTitle").textContent="+"+data.exp+" EXP";const bpLine=data.bpGain?'<b style="color:#73d4ff">BP +1</b>（'+state.bp+'/'+BP_MAX+'）':'<b style="color:#91a5b8">BP +0</b>（本日の修行BPは獲得済み）';document.getElementById("resultText").innerHTML='総トレーニング '+state.totalWorkouts+' 回<br>'+bpLine+'<br><span class="small">筋肉EXP：'+data.muscleText+'</span>';document.getElementById("loot").textContent=data.prs?"🏆 PR × "+data.prs:"💪";ov.classList.add("show");return new Promise(resolve=>{document.getElementById("closeResult").onclick=()=>{ov.classList.remove("show");resolve()}})}
async function playLevelSequence(data){if(data.newLv<=data.oldLv)return;const ov=document.getElementById("levelOverlay"),st=stage();document.getElementById("levelJump").textContent="Lv."+data.oldLv+" → Lv."+data.newLv;document.getElementById("levelCharImg").src=st.img;document.getElementById("levelPowerGain").textContent="+"+Math.max(0,data.powerAfter-data.powerBefore).toLocaleString();document.getElementById("levelMuscleGain").textContent=data.muscleUps.length+" UP";const oldStage=stages.slice().reverse().find(x=>x.lv<=data.oldLv)||stages[0],newStage=stage();document.getElementById("levelUnlock").textContent=newStage.title!==oldStage.title?'進化解放：「'+newStage.title+'」':(data.muscleUps.length?data.muscleUps.join(" / "):"基礎戦闘力が上昇した");ov.classList.add("show");ov.setAttribute("aria-hidden","false");playSfx("win");return new Promise(resolve=>{document.getElementById("levelContinue").onclick=()=>{ov.classList.remove("show");ov.setAttribute("aria-hidden","true");resolve()}})}
async function finalizeWorkout(){
 document.getElementById("reviewOverlay").classList.remove("show");if(!pendingWorkout.length){toast("実施したセットがありません");return}
 let earned=12,prs=0,gains={STR:0,SHOULDER:0,BACK:0,CORE:0,LEG:0};const powerBefore=power();
 pendingWorkout.forEach(ex=>{const vol=ex.sets.reduce((a,s)=>a+s.kg*s.reps,0),prev=state.records[ex.name]||0;let gain=5*ex.sets.length+Math.min(28,Math.round(vol/270));if(vol>prev){gain+=15;prs++;state.records[ex.name]=vol}gains[ex.muscle]+=gain;earned+=Math.max(4,Math.round(gain*.45))});
 const ups=[];Object.entries(gains).forEach(([k,g])=>{if(!g)return;const m=state.muscles[k];m.xp+=g;while(m.xp>=100){m.xp-=100;m.lv++;ups.push(k+" Lv."+m.lv)}});
 const oldLv=state.level;state.xp+=earned;while(state.xp>=xpNeed(state.level)){state.xp-=xpNeed(state.level);state.level++}state.totalWorkouts++;
 let bpGain=0;const today=localDayKey();if(state.lastWorkoutBpDate!==today){bpGain=addBp(1);state.lastWorkoutBpDate=today}
 state.history.unshift({date:new Date().toLocaleDateString("ja-JP"),kind:"TRAIN",exp:earned,prs,bp:bpGain,level:state.level,sets:pendingWorkout.reduce((n,x)=>n+x.sets.length,0),exercises:pendingWorkout.map(x=>x.name)});state.history=state.history.slice(0,16);pendingWorkout=[];save();renderAll();const powerAfter=power();await showTrainingResult({exp:earned,prs,bpGain,muscleText:Object.entries(gains).filter(x=>x[1]>0).map(x=>x[0]+" +"+x[1]).join(" / ")});await playLevelSequence({oldLv,newLv:state.level,powerBefore,powerAfter,muscleUps:ups});go("home")
}
document.getElementById("finalizeBtn").addEventListener("click",finalizeWorkout);
function roll(mult=1){return (.90+Math.random()*.20)*mult}
function playerAttack(cs,en){const crit=Math.random()*100<cs.crit;if(crit)return {type:"CRITICAL",cls:"critical",dmg:Math.max(15,Math.round((cs.atk*1.08-en.def*.52)*roll(1.75)))};const powerHit=Math.random()<.2;return {type:powerHit?"POWER":"NORMAL",cls:powerHit?"power":"normal",dmg:Math.max(15,Math.round((cs.atk*1.08-en.def*.52)*roll(powerHit?1.28:1)))} }
function enemyAttack(en,cs){const crit=Math.random()*100<en.crit;return {type:crit?"ENEMY CRITICAL":"ENEMY",crit,dmg:Math.max(10,Math.round((en.atk*.95-cs.def*.45)*roll(crit?1.5:1)))} }
function addExp(amount){const old=state.level;state.xp+=amount;while(state.xp>=xpNeed(state.level)){state.xp-=xpNeed(state.level);state.level++}return old}
let activeBattleEnemy=null;
function grantDrop(id){if(!id)return null;const it=itemById(id);if(!it)return null;let inv=state.inventory[id],wasNew=false;if(!inv){inv=state.inventory[id]={owned:true,copies:1,upgrade:0,fuseLevel:1,new:true};wasNew=true}else{inv.owned=true;inv.copies=Math.max(1,+inv.copies||1)+1;inv.new=true}return {name:it.name,count:inv.copies,wasNew}}
async function animateHit(side,hit,enemyHp,enemyMax,playerHp,playerMax,turn){const p=document.getElementById("animPlayer"),e=document.getElementById("animEnemy"),pop=document.getElementById("damagePop"),slash=document.getElementById("slashFx"),flash=document.getElementById("screenFlash");document.getElementById("battleRound").textContent="TURN "+turn;if(side==="player"){p.classList.add("attack");await wait(110);slash.classList.add("fire");flash.classList.add("fire");e.classList.add(hit.cls==="critical"?"criticalHit":"hit");pop.className="damagePop "+hit.cls+" show";document.getElementById("damageType").textContent=hit.type;document.getElementById("damageNumber").textContent=hit.dmg.toLocaleString();document.getElementById("battleMessage").textContent="TAKUの攻撃！ "+hit.type+" "+hit.dmg+" DAMAGE";playSfx(hit.cls==="critical"?"win":"hit");await wait(260);p.classList.remove("attack");e.classList.remove("hit","criticalHit");slash.classList.remove("fire");flash.classList.remove("fire")}else{e.classList.add("attack");await wait(110);p.classList.add("hit");pop.className="damagePop enemyDamage show";document.getElementById("damageType").textContent=hit.type;document.getElementById("damageNumber").textContent=hit.dmg.toLocaleString();document.getElementById("battleMessage").textContent=(activeBattleEnemy?.name||selectedEnemy().name)+"の反撃！ "+hit.dmg+" DAMAGE";playSfx("hit");await wait(260);e.classList.remove("attack");p.classList.remove("hit")};document.getElementById("animHpFill").style.width=Math.max(0,enemyHp/enemyMax*100)+"%";document.getElementById("animHpText").textContent=Math.max(0,enemyHp).toLocaleString()+" / "+enemyMax.toLocaleString();document.getElementById("animPlayerHpFill").style.width=Math.max(0,playerHp/playerMax*100)+"%";document.getElementById("animPlayerHpText").textContent=Math.max(0,playerHp).toLocaleString()+" / "+playerMax.toLocaleString();await wait(250)}
async function startBattle(){syncBp();if(state.bp<1){toast("BPが足りません。修行または自然回復を待ちましょう");renderBpUI();return}const selectedTier=state.selectedEnemyTier,en={...selectedEnemy()},isFirstClear=!state.clearedAll&&selectedTier===state.enemyTier,cs=combatStats(),tierBefore=state.enemyTier,ov=document.getElementById("battleOverlay");if(!spendBp()){toast("BPが足りません");return}activeBattleEnemy=en;renderBpUI();let ehp=en.hp,php=cs.hp,turn=1;document.getElementById("animPlayerImg").src=stage().img;document.getElementById("animEnemyImg").src=en.img;document.getElementById("animEnemyName").textContent=en.name;document.getElementById("animHpName").textContent=en.name;document.getElementById("animHpText").textContent=en.hp.toLocaleString()+" / "+en.hp.toLocaleString();document.getElementById("animHpFill").style.width="100%";document.getElementById("animPlayerHpText").textContent=cs.hp.toLocaleString()+" / "+cs.hp.toLocaleString();document.getElementById("animPlayerHpFill").style.width="100%";document.getElementById("rewardPanel").classList.remove("show");document.getElementById("battleMessage").textContent="BP -1　BATTLE START";ov.classList.add("show");ov.setAttribute("aria-hidden","false");await wait(500);while(ehp>0&&php>0){const ph=playerAttack(cs,en);ehp=Math.max(0,ehp-ph.dmg);await animateHit("player",ph,ehp,en.hp,php,cs.hp,turn);if(ehp<=0)break;const eh=enemyAttack(en,cs);php=Math.max(0,php-eh.dmg);await animateHit("enemy",eh,ehp,en.hp,php,cs.hp,turn);turn++;if(turn>40){php=0;break}}
 const won=ehp<=0;const oldLv=state.level,powerBefore=power();let goldDelta=0,expDelta=0,drop="—";if(won){goldDelta=isFirstClear?en.gold:Math.max(10,Math.round(en.gold*(.65+Math.random()*.2)));expDelta=isFirstClear?en.exp:Math.max(1,Math.round(en.exp*.25));state.gold+=goldDelta;state.kills++;let dropInfo=null;if(isFirstClear){dropInfo=grantDrop(en.dropItem)}else if(Math.random()<.15){dropInfo=grantDrop(en.dropItem)}drop=dropInfo?(dropInfo.wasNew?"NEW! ":"")+dropInfo.name+(dropInfo.count>1?" ×"+dropInfo.count:""):(isFirstClear?en.drop:"ドロップなし");addExp(expDelta);if(isFirstClear){if(state.enemyTier<enemies.length-1){state.enemyTier++;state.selectedEnemyTier=state.enemyTier}else{state.clearedAll=true;state.selectedEnemyTier=enemies.length-1}}state.history.unshift({date:new Date().toLocaleDateString("ja-JP"),kind:"BATTLE",result:"WIN",enemy:en.name,gold:goldDelta,exp:expDelta,bp:-1,replay:!isFirstClear,level:state.level})}else{goldDelta=Math.floor(state.gold*.10);state.gold=Math.max(0,state.gold-goldDelta);state.history.unshift({date:new Date().toLocaleDateString("ja-JP"),kind:"BATTLE",result:"LOSE",enemy:en.name,gold:-goldDelta,exp:0,bp:-1,replay:!isFirstClear,level:state.level})}state.history=state.history.slice(0,16);save();renderAll();document.getElementById("rewardTitle").textContent=won?"VICTORY!":"DEFEAT";document.getElementById("rewardTitle").classList.toggle("defeatTitle",!won);document.getElementById("battleResultSub").textContent=won?(isFirstClear?en.name+"を初回撃破！":en.name+"に再戦勝利！"):"所持GOLDの10%を失った";document.getElementById("rewardExp").textContent=won?"+"+expDelta:"+0";document.getElementById("rewardGold").textContent=won?"+"+goldDelta:"-"+goldDelta;document.getElementById("rewardDrop").textContent=won?drop:"—";document.getElementById("battleMessage").textContent=won?(isFirstClear?(tierBefore<enemies.length-1?"次の敵が解放された！":"最終敵を撃破した！"):"再戦報酬を獲得！"):"さらに修行・装備強化して再挑戦しよう";document.getElementById("rewardPanel").classList.add("show");await new Promise(resolve=>{document.getElementById("battleContinue").onclick=()=>{document.getElementById("rewardPanel").classList.remove("show");ov.classList.remove("show");ov.setAttribute("aria-hidden","true");resolve()}});activeBattleEnemy=null;const powerAfter=power();if(won)await playLevelSequence({oldLv,newLv:state.level,powerBefore,powerAfter,muscleUps:[]});go(won&&isFirstClear?"home":"battle")}
document.getElementById("challengeBtn").addEventListener("click",startBattle);
let currentShopFilter="weapon",currentInventoryFilter="all";
function itemLabel(it){const inv=state.inventory[it.id]||{},u=inv.upgrade||0,l=inv.fuseLevel||1;return it.name+" Lv."+l+(u?" +"+u:"")}
function sellValue(it){const rarityBase={common:20,uncommon:50,rare:100,epic:220,legendary:500}[it.rarity]||20;return Math.max(rarityBase,Math.round((it.price||0)*.35),Math.round(rarityBase*(1+(it.tier-1)*.18)))}
function canSellItem(it){const inv=state.inventory[it.id];if(!inv||!inv.copies||starters.includes(it.id))return false;return !(state.equipped[it.slot]===it.id&&inv.copies<=1)}
function equipItem(id){const it=itemById(id),inv=state.inventory[id];if(!it||!inv||inv.copies<1)return;if(state.level<it.minLv){toast("Lv."+it.minLv+"から装備できます");return}state.equipped[it.slot]=id;inv.new=false;save();renderAll();toast(it.name+" を装備しました")}
function fuseItem(id){const it=itemById(id),inv=state.inventory[id];if(!it||!inv)return;if((inv.fuseLevel||1)>=5){toast("装備Lv.5が最大です");return}if((inv.copies||0)<2){toast("同じ装備がもう1個必要です");return}inv.copies--;inv.fuseLevel=(inv.fuseLevel||1)+1;inv.new=false;save();renderAll();toast(it.name+" が Lv."+inv.fuseLevel+" に成長！")}
function sellItem(id){const it=itemById(id),inv=state.inventory[id];if(!it||!inv||!canSellItem(it)){toast("この装備は売却できません");return}const value=sellValue(it);if(!confirm(it.name+" を1個売却して "+value+"G を獲得しますか？"))return;inv.copies--;inv.new=false;state.gold+=value;if(inv.copies<=0){delete state.inventory[id]}save();renderAll();toast(it.name+" を売却 +"+value+"G")}
function renderGear(){
 const totals=equipmentTotals();document.getElementById("gearTierBadge").textContent="Tier "+totals.tier;document.getElementById("shopGoldText").textContent=state.gold.toLocaleString();
 document.getElementById("gearSummary").innerHTML='<div class="gearBonus"><span>HP</span><b>+'+Math.round(totals.hp)+'</b></div><div class="gearBonus"><span>ATK</span><b>+'+Math.round(totals.atk)+'</b></div><div class="gearBonus"><span>DEF</span><b>+'+Math.round(totals.def)+'</b></div><div class="gearBonus"><span>CRIT</span><b>+'+Math.round(totals.crit*10)/10+'%</b></div>';
 const grid=document.getElementById("equippedGrid");grid.innerHTML="";Object.keys(slotNames).forEach(slot=>{const id=state.equipped[slot],it=itemById(id),z=it?itemStats(it):{hp:0,atk:0,def:0,crit:0},inv=it?state.inventory[it.id]:null;const c=document.createElement("div");c.className="slotCard";c.innerHTML='<div class="small">'+slotNames[slot]+'</div><div class="slotTop"><div class="itemArt art-'+slot+'"></div><div><div class="itemName '+(it?'rarity-'+it.rarity:'')+'">'+(it?itemLabel(it):"未装備")+'</div><div class="itemStats">'+(it?formatBonus(z):"—")+'</div>'+(inv?'<div class="copyMini">所持 ×'+inv.copies+'</div>':'')+'</div></div><div class="slotActions">'+(it?'<button class="miniBtn gold upgradeBtn">GOLD強化</button>':'')+'</div>';if(it)c.querySelector(".upgradeBtn").addEventListener("click",()=>upgradeItem(it.id));grid.appendChild(c)});renderInventory();renderShop()
}
function upgradeCost(it){const u=itemUpgrade(it.id);const base=it.price>0?it.price:120;return Math.max(40,Math.round(base*(.28+u*.14)))}
function upgradeItem(id){const it=itemById(id),inv=state.inventory[id];if(!it||!inv)return;if(inv.upgrade>=5){toast("+5が最大です");return}const cost=upgradeCost(it);if(state.gold<cost){toast("GOLDが足りません（必要 "+cost+"G）");return}state.gold-=cost;inv.upgrade++;inv.new=false;save();renderAll();toast(it.name+" を +"+inv.upgrade+" に強化")}
function renderInventory(){
 const filters=document.getElementById("inventoryFilters"),list=document.getElementById("inventoryList"),countEl=document.getElementById("inventoryCount");if(!filters||!list)return;
 const owned=equipment.filter(it=>state.inventory[it.id]&&state.inventory[it.id].copies>0);if(countEl)countEl.textContent=owned.reduce((n,it)=>n+state.inventory[it.id].copies,0)+"個";
 filters.innerHTML="";[["all","ALL"],...Object.keys(slotNames).map(k=>[k,slotIcons[k]+" "+slotNames[k]])].forEach(([key,label])=>{const b=document.createElement("button");b.className="shopFilter"+(currentInventoryFilter===key?" active":"");b.textContent=label;b.addEventListener("click",()=>{currentInventoryFilter=key;renderInventory()});filters.appendChild(b)});
 const items=owned.filter(it=>currentInventoryFilter==="all"||it.slot===currentInventoryFilter).sort((a,b)=>(state.inventory[b.id].new?1:0)-(state.inventory[a.id].new?1:0)||b.tier-a.tier||a.name.localeCompare(b.name,"ja"));list.innerHTML="";
 if(!items.length){list.innerHTML='<div class="emptyInventory">このカテゴリの装備はありません</div>';return}
 items.forEach(it=>{const inv=state.inventory[it.id],equipped=state.equipped[it.slot]===it.id,locked=state.level<it.minLv,z=itemStats(it),canFuse=inv.copies>=2&&(inv.fuseLevel||1)<5,sell=sellValue(it),row=document.createElement("div");row.className="inventoryItem"+(inv.new?" isNew":"");row.innerHTML='<div class="itemArt art-'+it.slot+'"></div><div class="inventoryInfo"><div class="inventoryNameRow"><div class="itemName rarity-'+it.rarity+'">'+itemLabel(it)+'</div>'+(inv.new?'<span class="newBadge">NEW</span>':'')+'</div><div class="itemStats">'+formatBonus(z)+'</div><div class="inventoryMeta">'+rarityNames[it.rarity]+' / Tier '+it.tier+'　<span>所持 ×'+inv.copies+'</span></div><div class="inventoryActions"><button class="miniBtn equipOwned" '+(equipped||locked?'disabled':'')+'>'+(equipped?'装備中':locked?'Lv.'+it.minLv+'必要':'装備')+'</button><button class="miniBtn fuseOwned '+(canFuse?'gold':'')+'" '+(canFuse?'':'disabled')+'>合成'+((inv.fuseLevel||1)>=5?' MAX':' LvUP')+'</button><button class="miniBtn sellOwned" '+(canSellItem(it)?'':'disabled')+'>売却 '+sell+'G</button></div></div>';
 const e=row.querySelector(".equipOwned"),f=row.querySelector(".fuseOwned"),sl=row.querySelector(".sellOwned");if(!e.disabled)e.addEventListener("click",()=>equipItem(it.id));if(!f.disabled)f.addEventListener("click",()=>fuseItem(it.id));if(!sl.disabled)sl.addEventListener("click",()=>sellItem(it.id));list.appendChild(row)
 })
}
function renderShop(){const f=document.getElementById("shopFilters"),list=document.getElementById("shopList");f.innerHTML="";Object.keys(slotNames).forEach(slot=>{const b=document.createElement("button");b.className="shopFilter"+(currentShopFilter===slot?" active":"");b.textContent=slotIcons[slot]+" "+slotNames[slot];b.addEventListener("click",()=>{currentShopFilter=slot;renderShop()});f.appendChild(b)});list.innerHTML="";equipment.filter(it=>it.slot===currentShopFilter&&it.price>0).forEach(it=>{const inv=state.inventory[it.id],owned=!!(inv&&inv.copies>0),equipped=state.equipped[it.slot]===it.id,locked=state.level<it.minLv,z={hp:it.hp||0,atk:it.atk||0,def:it.def||0,crit:it.crit||0};const row=document.createElement("div");row.className="shopItem";row.innerHTML='<div class="itemArt art-'+it.slot+'"></div><div><div class="itemName rarity-'+it.rarity+'">'+it.name+'</div><div class="itemStats">'+formatBonus(z)+'</div><div class="small">'+rarityNames[it.rarity]+' / Tier '+it.tier+' / Lv.'+it.minLv+'〜</div></div><div style="text-align:right"><div class="price">🪙 '+it.price.toLocaleString()+'</div><button class="miniBtn '+(owned?'':'gold')+' buyBtn" '+(locked?'disabled':'')+'>'+(equipped?'装備中':owned?'装備':'購入')+'</button><div class="'+(locked?'locked':owned?'owned':'small')+'">'+(locked?'Lv.'+it.minLv+'必要':owned?'所持済み':'')+'</div></div>';const btn=row.querySelector(".buyBtn");if(equipped)btn.disabled=true;else btn.addEventListener("click",()=>{if(owned)equipItem(it.id);else buyItem(it.id)});list.appendChild(row)})}
function buyItem(id){const it=itemById(id);if(!it)return;if(state.level<it.minLv){toast("Lv."+it.minLv+"から購入できます");return}if(state.gold<it.price){toast("GOLDが足りません");return}state.gold-=it.price;state.inventory[id]={owned:true,copies:1,upgrade:0,fuseLevel:1,new:true};state.equipped[it.slot]=id;state.inventory[id].new=false;save();renderAll();toast(it.name+" を購入・装備しました")}
function syncEditorValues(){[...document.querySelectorAll("#menuEditor .editorItem")].forEach(w=>{const ex=w._menuRef;if(!ex)return;const kg=+w.querySelector(".k").value||0,reps=+w.querySelector(".r").value||0,n=Math.max(1,+w.querySelector(".s").value||1);ex.name=w.querySelector(".n").value.trim()||"種目";ex.muscle=w.querySelector(".muscleSel").value;const old=ex.sets||[];ex.sets=Array.from({length:n},(_,j)=>({kg:old[j]?.kg??kg,reps:old[j]?.reps??reps}));if(ex.sets[0]){ex.sets[0].kg=kg;ex.sets[0].reps=reps}})}
function renderEditor(){
 const root=document.getElementById("menuEditor");root.innerHTML="";
 state.menu.forEach(ex=>{
  const w=document.createElement("div");w.className="editorItem";w._menuRef=ex;
  w.innerHTML='<div class="editorItemTop"><button type="button" class="dragHandle" aria-label="長押しして並び替え"><span class="dragDots">☰</span><span>長押しで移動</span></button></div><div class="editor"><input class="n"><input class="k" inputmode="decimal"><input class="r" inputmode="numeric"><input class="s" inputmode="numeric"></div><div class="editrow"><select class="muscleSel"></select><button class="iconbtn del">削除</button></div>';
  w.querySelector(".n").value=ex.name;w.querySelector(".k").value=ex.sets[0]?.kg||0;w.querySelector(".r").value=ex.sets[0]?.reps||0;w.querySelector(".s").value=ex.sets.length;
  const sel=w.querySelector(".muscleSel");["STR","SHOULDER","BACK","CORE","LEG"].forEach(m=>{const o=document.createElement("option");o.value=m;o.textContent=m;o.selected=m===ex.muscle;sel.appendChild(o)});
  w.querySelector(".del").addEventListener("click",()=>{syncEditorValues();const idx=state.menu.indexOf(ex);if(idx>=0)state.menu.splice(idx,1);renderEditor()});
  attachEditorDrag(w);
  root.appendChild(w)
 })
}
function attachEditorDrag(item){
 const handle=item.querySelector(".dragHandle");
 let dragging=false,startY=0,startX=0,pointerId=null,holdTimer=null,ghost=null,lastY=0;
 const root=()=>document.getElementById("menuEditor");
 const clearMarks=()=>document.querySelectorAll("#menuEditor .editorItem").forEach(x=>x.classList.remove("dropBefore","dropAfter"));
 const cleanupListeners=()=>{document.removeEventListener("pointermove",onMove,true);document.removeEventListener("pointerup",finish,true);document.removeEventListener("pointercancel",finish,true)};
 const makeGhost=(x,y)=>{
  ghost=item.cloneNode(true);ghost.className="editorDragGhost";ghost.querySelectorAll("input,select,button").forEach(el=>{el.disabled=true;el.tabIndex=-1});
  document.body.appendChild(ghost);moveGhost(x,y)
 };
 const moveGhost=(x,y)=>{if(!ghost)return;ghost.style.left=Math.max(8,Math.min(window.innerWidth-ghost.offsetWidth-8,x-ghost.offsetWidth+36))+"px";ghost.style.top=Math.max(8,Math.min(window.innerHeight-ghost.offsetHeight-8,y-34))+"px"};
 const begin=(x,y)=>{if(dragging)return;syncEditorValues();dragging=true;lastY=y;item.classList.add("draggingSource");document.body.classList.add("reorderingMenu");makeGhost(x,y);if(navigator.vibrate)try{navigator.vibrate(18)}catch(_){}};
 const reorderAt=y=>{
  const items=[...document.querySelectorAll("#menuEditor .editorItem")].filter(x=>x!==item);if(!items.length)return;
  clearMarks();let target=null,before=true;
  for(const x of items){const r=x.getBoundingClientRect();if(y<r.top+r.height/2){target=x;before=true;break}}
  if(!target){target=items[items.length-1];before=false}
  target.classList.add(before?"dropBefore":"dropAfter");
  const parent=root();if(before){if(item.nextSibling!==target)parent.insertBefore(item,target)}else{if(target.nextSibling!==item)parent.insertBefore(item,target.nextSibling)}
 };
 const autoScroll=y=>{const edge=110,max=14;if(y<edge)window.scrollBy(0,-Math.ceil((edge-y)/edge*max));else if(y>window.innerHeight-edge)window.scrollBy(0,Math.ceil((y-(window.innerHeight-edge))/edge*max))};
 const onMove=e=>{
  if(e.pointerId!==pointerId)return;lastY=e.clientY;
  if(!dragging){if(holdTimer&&(Math.abs(e.clientY-startY)>10||Math.abs(e.clientX-startX)>10)){clearTimeout(holdTimer);holdTimer=null}return}
  e.preventDefault();moveGhost(e.clientX,e.clientY);autoScroll(e.clientY);reorderAt(e.clientY)
 };
 const finish=e=>{
  if(pointerId!==null&&e.pointerId!==undefined&&e.pointerId!==pointerId)return;
  if(holdTimer){clearTimeout(holdTimer);holdTimer=null}
  cleanupListeners();
  if(!dragging){pointerId=null;return}
  dragging=false;clearMarks();item.classList.remove("draggingSource");document.body.classList.remove("reorderingMenu");if(ghost){ghost.remove();ghost=null}
  const ordered=[...document.querySelectorAll("#menuEditor .editorItem")].map(x=>x._menuRef).filter(Boolean);if(ordered.length===state.menu.length)state.menu=ordered;
  save();renderTraining();renderEditor();toast("種目の順番を保存しました");pointerId=null
 };
 handle.addEventListener("pointerdown",e=>{
  if(pointerId!==null)return;e.preventDefault();pointerId=e.pointerId;startY=e.clientY;startX=e.clientX;
  document.addEventListener("pointermove",onMove,true);document.addEventListener("pointerup",finish,true);document.addEventListener("pointercancel",finish,true);
  if(e.pointerType==="mouse")begin(e.clientX,e.clientY);else holdTimer=setTimeout(()=>begin(startX,startY),260)
 });
}
document.getElementById("addExercise").addEventListener("click",()=>{syncEditorValues();state.menu.push({name:"新しい種目",muscle:"STR",sets:[{kg:10,reps:15},{kg:10,reps:15}]});renderEditor()});
document.getElementById("saveMenu").addEventListener("click",()=>{syncEditorValues();save();toast("メニューを保存しました");renderTraining()});
function renderHistory(){const root=document.getElementById("history");if(!root)return;root.innerHTML=state.history.length?state.history.map(h=>{if(h.kind==="BATTLE")return '<div class="historyItem"><b>'+h.date+'　'+(h.result==="WIN"?'勝利':'敗北')+(h.replay?'（再戦）':'')+' vs '+h.enemy+'</b><div class="small">'+(h.gold>=0?'+':'')+h.gold+' GOLD / +'+(h.exp||0)+' EXP / BP -1 / Lv.'+h.level+'</div></div>';return '<div class="historyItem"><b>'+h.date+'　修行 Lv.'+h.level+'</b><div class="small">+'+(h.exp||0)+' EXP / BP +'+(h.bp||0)+' / PR '+(h.prs||0)+'種目</div></div>'}).join(""):'<div class="small">まだ記録はありません。</div>'}
document.getElementById("resetData").addEventListener("click",()=>{if(confirm("全記録を初期化しますか？")){state=clone(initial);starters.forEach(id=>state.inventory[id]={owned:true,copies:1,upgrade:0,fuseLevel:1,new:false});save();renderAll();renderEditor();renderTraining();toast("初期化しました")}});
function ensureAudio(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();return audioCtx}
async function unlockAudio(){const ctx=ensureAudio();if(ctx.state==="suspended"){try{await ctx.resume()}catch(_){}}return ctx}
function tone(f,d,type="triangle",gain=.02){const ctx=ensureAudio();if(ctx.state!=="running")return;const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.value=f;g.gain.setValueAtTime(gain,ctx.currentTime);o.connect(g);g.connect(ctx.destination);o.start();g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+d);o.stop(ctx.currentTime+d)}
async function playSfx(kind){if(!bgmOn)return;await unlockAudio();if(kind==="win"){[523,659,784,1046].forEach((f,i)=>setTimeout(()=>tone(f,.18,"triangle",.04),i*110))}else tone(120,.12,"sawtooth",.04)}
async function startBgm(){await unlockAudio();if(audioCtx.state!=="running"){toast("音声を開始できませんでした。もう一度♪をタップしてください");return}bgmOn=true;document.getElementById("soundBtn").textContent="♪ ON";clearInterval(bgmTimer);const notes=[220,261.6,329.6,293.7,246.9,293.7,329.6,392];let i=0;tone(notes[i++%notes.length],.32,"triangle",.018);bgmTimer=setInterval(()=>{if(bgmOn)tone(notes[i++%notes.length],.32,"triangle",.012)},420)}
function stopBgm(){bgmOn=false;clearInterval(bgmTimer);bgmTimer=null;document.getElementById("soundBtn").textContent="♪ OFF"}
document.getElementById("soundBtn").addEventListener("click",async()=>{if(bgmOn)stopBgm();else await startBgm()});
document.addEventListener("visibilitychange",()=>{if(!document.hidden&&bgmOn&&audioCtx&&audioCtx.state==="suspended")audioCtx.resume().catch(()=>{})});
syncBp();renderAll();setInterval(()=>{syncBp();renderBpUI()},1000);
})();
