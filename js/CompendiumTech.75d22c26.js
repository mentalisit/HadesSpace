"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[595],{38871:(e,a,l)=>{l.r(a),l.d(a,{default:()=>N});var n=l(66252),t=l(3577),i=l(2262),u=l(70131),s=l(37610),v=l(95893),c=l(91296),d=l.n(c),r=l(31755),o=l(50930),m=l(11361),p=l(2824);const _={class:"container"},h={class:"input-wrap"},Z=["value"],f=(0,n.aZ)({__name:"NumberPicker",props:{value:{},min:{},max:{}},emits:["update:value"],setup(e,{emit:a}){const l=e;function t(e){e<l.min&&(e=l.min),e>l.max&&(e=l.max),a("update:value",e)}return(e,a)=>((0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("div",{class:"minus",onClick:a[0]||(a[0]=e=>t(l.value-1))}),(0,n._)("div",h,[(0,n._)("input",{type:"text",value:e.value,onChange:a[1]||(a[1]=e=>t(parseInt(e.target.value)))},null,40,Z)]),(0,n._)("div",{class:"plus",onClick:a[2]||(a[2]=e=>t(l.value+1))})]))}});var L=l(83744);const b=(0,L.Z)(f,[["__scopeId","data-v-21e64040"]]),g=b;var k=l(58904),M=l(45715),y=l(32169),P=l(51131),x=l(20128),T=l(78642),C=l(91489);const j=e=>((0,n.dD)("data-v-4fb34cec"),e=e(),(0,n.Cn)(),e),S={class:"container"},I={class:"modal"},w={class:"title"},O=j((()=>(0,n._)("div",null,null,-1))),R={class:"level-picker"},A=(0,n.aZ)({__name:"CompendiumTech",setup(e){const a={RedStarScanner:P.Z.RedStarScanner,ShipmentRelay:P.Z.ShipmentRelay},l={Transport:M.Z.Transport,Miner:M.Z.Miner,Battleship:M.Z.Battleship},{MaxModuleLevel:c}=k["default"];a.RedStarScanner.Cost.shift();const _=Object.fromEntries([...Object.entries(a).map((([e,a])=>[e,a.Cost.length])),...Object.entries(l).map((([e,a])=>[e,a.BuildCost.length])),...Object.keys(x.Z).map((e=>[e,c])),["AllianceLevel",y.Z.XPRequired.length]]),h=Object.fromEntries([...Object.keys(a).map((e=>[e,0])),...Object.keys(l).map((e=>[e,0])),...Object.entries(x.Z).map((([e,a])=>[e,E(a)])),["AllianceLevel",0]]),Z=d()(((...e)=>v.ZP.setTechLevel(...e)),500),{t:f}=(0,u.QT)(),L=(0,i.iH)(!1),b=(0,i.iH)(null),j=(0,i.iH)({}),A=(0,i.qj)({size:o.z.SMALL,title:f("TID_TECH_DLG_TITLE"),data:{value:{},maxLevel:0,minLevel:0,get key(){return this.value.Name}}});function B(e){b.value&&(A.data.value=e,A.data.maxLevel=_[e.Name],A.data.minLevel=h[e.Name],L.value=!0)}function N(e){return!H(e)?.level}function D(e){const a=(0,s.mX)(A.data.key);return b.value[a]||(b.value[a]={level:0}),0!=A.data.minLevel&&e==A.data.minLevel&&0!=b.value[a].level&&(e=0),b.value[a].level!=e&&(b.value[a].level=e,Z(a,e)),e}function E(e){let a=1;for(const[,l]of Object.entries(e))Array.isArray(l)&&l.length>a&&(a=l.length);return c-a+1}function H(e){return b.value?.[(0,s.mX)(e)]||null}function U(){const e=A.data.value;return e.Icon?(0,n.h)(r.Z,{name:e.Icon,dir:e.specialIcon?"icons":"game/Modules"}):e.Model?(0,n.h)(r.Z,{name:e.Model[H(e.Name)?.level-1||5],dir:"game/Ships"}):e.PrefabModel?(0,n.h)(r.Z,{name:e.PrefabModel,dir:"game/SpaceBuildings"}):void 0}return(0,n.bv)((()=>{v.ZP.getUser()&&(b.value=v.ZP.getTechLevels())})),(0,n.YP)(b,(e=>{e&&(j.value=(0,T.Z)(e,{map:([e,a])=>[(0,C.pc)(e),a.level]}))}),{deep:!0}),v.ZP.on("sync",(e=>b.value=e)),v.ZP.on("connected",(()=>b.value=v.ZP.getTechLevels())),v.ZP.on("disconnected",(()=>{b.value=void 0,j.value=void 0})),(e,a)=>{const l=(0,n.Q2)("t");return(0,n.wg)(),(0,n.j4)(m.Z,null,{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n._)("div",S,[(0,n.Wm)(p.Z,{"on-click":B,"is-muted":N,"level-map":j.value},null,8,["level-map"])]),(0,n.Wm)(o.Z,(0,n.dG)({open:L.value,"onUpdate:open":a[0]||(a[0]=e=>L.value=e)},A),{body:(0,n.w5)((()=>[(0,n._)("div",I,[(0,n._)("div",w,[(0,n._)("div",null,[(0,n._)("h2",null,(0,t.zw)(e.$t(A.data.value.TID)),1),O]),(0,n.Wm)(U)]),(0,n.wy)((0,n._)("span",null,null,512),[[l,"CURRENT_LVL"]]),(0,n._)("div",R,[(0,n.Wm)(g,{value:H(A.data.key)?.level||0,min:A.data.minLevel,max:A.data.maxLevel,"onUpdate:value":D},null,8,["value","min","max"])])])])),_:1},16,["open"])])])),_:1})}}}),B=(0,L.Z)(A,[["__scopeId","data-v-4fb34cec"]]),N=B},32169:(e,a,l)=>{l.d(a,{Z:()=>n});const n={Name:"alliance_levels",XPRequired:[0,1,30,100,250,500,1e3,2e3,3e3,5e3,7e3,9e3,11e3,13e3,16e3,2e4,25e3,32e3,4e4,5e4,6e4],MaxMembers:[25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,40,40,40,40,40],PassiveIncomeModifier:[100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140],BaseArtifactYieldBonus:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],MaxArtifactYieldBonus:[0,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60],MaxFlagshipLevel:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}}}]);