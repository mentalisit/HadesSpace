import{d as R,aI as S,r as O,o as a,b as n,f as s,w as k,F as p,B as m,A as v,e as d,I as _,t as o,E as r,u as g,_ as E}from"./index-F337FC47.js";import{s as y}from"./capital_ships-ioQeNDqF.js";import{s as A}from"./spacebuildings-NmTc9Pj4.js";import{g as P}from"./ModulePage.vue_vue_type_script_setup_true_lang-YXahEtZV.js";import{k as F,v as V}from"./Data-x0LUHjxt.js";import{b as w}from"./byTypes-1BYQ2hUk.js";const G={class:"sections-group other"},H={class:"type",name:"spaceBuildings"},U=["onClick"],X={key:0,class:"level"},j={key:1,class:"level alt-level"},z={class:"type",name:"ships"},Y=["onClick"],$={key:0,class:"level"},q={key:1,class:"level alt-level"},J={class:"type",name:"alliance"},K={class:"item"},Q={key:0,class:"level"},W={key:1,class:"level alt-level"},Z={class:"sections-group modules"},b=["onClick"],x={key:0,class:"level"},ee={key:1,class:"level alt-level"},le=R({__name:"TechList",props:{levelMap:{default:()=>({})},levelMapAlt:{default:()=>({})},onClick:{type:Function,default:()=>{}},isMuted:{type:Function,default:()=>!1}},setup(se){const N=S(),I={RedStarScanner:A.RedStarScanner,ShipmentRelay:A.ShipmentRelay},T={Transport:y.Transport,Miner:y.Miner,Battleship:y.Battleship},B={Name:"AllianceLevel",TID:"TID_CORP_TAB_MY_CORP",Icon:"corpXp",specialIcon:!0},D=Object.fromEntries(w.artifact.map(e=>[e,P(e)])),L={key:e=>F(e,N.currentRoute.value.name),value:(e,u)=>V(e,u,N.currentRoute.value.name)};return(e,u)=>{var h,f;const M=O("t");return a(),n("div",null,[s("div",G,[s("section",H,[k(s("h3",null,null,512),[[M,"TID_BUILDING_LEVEL_DESCR"]]),s("ul",null,[(a(),n(p,null,m(I,(l,c)=>{var t,i;return s("li",{key:c,class:"item"},[s("div",{class:v({mute:e.isMuted(l.Name)}),onClick:()=>e.onClick(l)},[d(_,{name:l.PrefabModel,dir:"game/SpaceBuildings"},null,8,["name"]),(t=e.levelMap)!=null&&t[l.Name]?(a(),n("span",X,o(e.levelMap[l.Name]),1)):r("",!0),(i=e.levelMapAlt)!=null&&i[l.Name]?(a(),n("span",j,o(e.levelMapAlt[l.Name]),1)):r("",!0)],10,U)])}),64))])]),s("section",z,[k(s("h3",null,null,512),[[M,"TID_PRODUCTION_DLG_SHIPS"]]),s("ul",null,[(a(),n(p,null,m(T,(l,c)=>{var t,i;return s("li",{key:c,class:"item"},[s("div",{class:v({mute:e.isMuted(l.Name)}),onClick:()=>e.onClick(l)},[d(_,{name:l.Name in e.levelMap?l.Model[e.levelMap[l.Name]-1]:l.Model[4],dir:"game/Ships"},null,8,["name"]),(t=e.levelMap)!=null&&t[l.Name]?(a(),n("span",$,o(e.levelMap[l.Name]),1)):r("",!0),(i=e.levelMapAlt)!=null&&i[l.Name]?(a(),n("span",q,o(e.levelMapAlt[l.Name]),1)):r("",!0)],10,Y)])}),64))])]),s("section",J,[k(s("h3",null,null,512),[[M,"TID_CHAT_TAB_CORPORATION"]]),s("ul",null,[s("li",K,[s("div",{class:v({mute:e.isMuted("AllianceLevel")}),onClick:u[0]||(u[0]=()=>e.onClick(B))},[d(_,{name:"corpXp",dir:"icons"}),(h=e.levelMap)!=null&&h.AllianceLevel?(a(),n("span",Q,o(e.levelMap.AllianceLevel),1)):r("",!0),(f=e.levelMapAlt)!=null&&f.AllianceLevel?(a(),n("span",W,o(e.levelMapAlt.AllianceLevel),1)):r("",!0)],2)])])])]),s("div",Z,[(a(!0),n(p,null,m(g(D),(l,c)=>(a(),n("section",{key:c,class:"type",name:"modules"},[s("h3",null,o(L.key(c)),1),s("ul",null,[(a(!0),n(p,null,m(l,t=>{var i,C;return a(),n("li",{key:t.Name,class:"item"},[s("div",{class:v({mute:e.isMuted(t.Name)}),onClick:()=>e.onClick(t)},[d(_,{name:t.Icon,dir:"game/Modules"},null,8,["name"]),(i=e.levelMap)!=null&&i[t.Name]?(a(),n("span",x,o(e.levelMap[t.Name]),1)):r("",!0),(C=e.levelMapAlt)!=null&&C[t.Name]?(a(),n("span",ee,o(e.levelMapAlt[t.Name]),1)):r("",!0)],10,b)])}),128))])]))),128))])])}}}),ce=E(le,[["__scopeId","data-v-e7f0cca5"]]);export{ce as T};
