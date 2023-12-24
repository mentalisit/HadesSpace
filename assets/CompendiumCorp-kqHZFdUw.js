import{d as Q,s as W,g as ee,i as f,j as x,v as _,x as F,y as te,z,r as se,o as r,b as c,e as u,h as y,f as a,t as h,u as p,H as ne,A,w as $,F as E,B as S,S as H,M as j,l as C,I as G,C as ae,_ as oe}from"./index-F337FC47.js";import{C as ie,g as le,m as re}from"./CompendiumPage-QJFXaQrh.js";import{T as J}from"./TechList-q6_iVnB1.js";import{s as D}from"./capital_ships-ioQeNDqF.js";import{s as ce}from"./spacebuildings-NmTc9Pj4.js";import{m as R}from"./ModulePage.vue_vue_type_script_setup_true_lang-YXahEtZV.js";import{o as ue}from"./Data-x0LUHjxt.js";import"./byTypes-1BYQ2hUk.js";import"./Page-2X-PQB3G.js";import"./globals-zpsYnYkF.js";import"./sec2str-rs34F7FZ.js";const de={class:"container"},me={class:"select"},pe=["value","selected"],fe=["onClick"],ve={class:"meta"},_e={class:"avatar"},he=["src","alt"],Ce={class:"sort-tech"},ge=["k"],Ie={class:"modal-filter-tech"},Te={class:"sections-group other"},ye={class:"type",name:"user-info"},Ee=["onClick"],Se=5,V=50,Me=Q({__name:"CompendiumCorp",setup(be){var U;const g=W(),{t:Y}=ee(),X=Y("HS_COMPENDIUM"),O=(U=new Intl.Locale(navigator.language))==null?void 0:U.hourCycles,Z=O?["h23","h24"].some(t=>O.includes(t)):!0,l={LocalTime:{icon:{name:"time",dir:"icons/compendium"},formatter:({localTime:t,localTime24:s})=>Z?s:t},AfkFor:{icon:{name:"afk",dir:"icons/compendium"},formatter:({afkFor:t})=>t},CargoCap:{icon:{name:"cargo",dir:"icons/compendium"},formatter:({tech:t})=>{const[s]=t[C("Transport")]||[],[o]=t[C("TransportCapacity")]||[];return s&&o?D.Transport.JobCapacity[s]+R.TransportCapacity.ExtraTradeSlots[o]:0}}},v=f(!1),M=f(!1),b=f(!1),I=f(g.state.userSettings.compendiumCorpLastRoleId),i=x([]),k=f({}),d=f([]),T=x({title:"",lvlMap:void 0});let m=[];d.value=Array.from({length:10},t=>({userId:t,name:"",avatarUrl:""})),_.on("connected",()=>B()),_.on("disconnected",()=>{m=[],d.value=Array.from({length:10},t=>({userId:t,name:"",avatarUrl:""})),I.value="",i.splice(0),g.commit(F.SET_COMPENDIUM_CORP_LAST_ROLE_ID)}),te(()=>{_.getUser()&&B()}),z(I,async t=>{v.value=!0,g.commit(F.SET_COMPENDIUM_CORP_LAST_ROLE_ID,t),m=await _.corpdata(t).then(s=>s.members),d.value=m,v.value=!1,P(i)}),z(()=>i,P,{deep:!0});async function B(){v.value=!0;const t=await _.corpdata(g.state.userSettings.compendiumCorpLastRoleId);k.value=t,m=t.members,d.value=t.members.slice(0,V),v.value=!1}async function N(t){L(t.Name)?i.splice(i.indexOf(t.Name),1):i.push(t.Name)}function L(t){return i.includes(t)}function q(t){m.length&&(T.title=t.name,T.lvlMap=ue(t.tech,{map:([s,o])=>[ae(s),o[0]]}),b.value=!0)}function P(t){d.value=m.sort((s,o)=>{var e,n;return t.length&&!(t[0]in l)?(((e=o.tech[C(t[0])])==null?void 0:e[0])||0)-(((n=s.tech[C(t[0])])==null?void 0:n[0])||0):t[0]=="CargoCap"?l.CargoCap.formatter(o)-l.CargoCap.formatter(s):0}).slice(0,V)}function K(t){if(!i.length)return{};const s={},o=Object.fromEntries(i.map(e=>{var n;return e in l?[e,l[e].formatter(t)]:[e,(n=t.tech[C(e)])==null?void 0:n[0]]}).slice(Se*-1));for(const e in o){const n=s[e]={icon:{dir:"",name:""},level:o[e]};e in R?(n.icon.dir="game/Modules",n.icon.name=R[e].Icon):e in D?(n.icon.dir="game/Ships",n.icon.name=D[e].Model[5]):e in l?n.icon=l[e].icon:(n.icon.dir="game/SpaceBuildings",n.icon.name=ce[e].PrefabModel)}return s}return(t,s)=>{const o=se("t");return r(),c("div",null,[u(p(ne),null,{default:y(()=>[a("title",null,h(p(X)),1)]),_:1}),u(ie,null,{default:y(()=>[a("div",de,[a("div",{class:A(["filter",{disable:d.value.length>p(m).length}])},[a("div",null,[$(a("button",{class:"btn-tech-filter",onClick:s[0]||(s[0]=e=>M.value=!0)},null,512),[[o,"FILTER"]])]),a("div",me,[a("select",{onChange:s[1]||(s[1]=e=>I.value=e.target.value)},[(r(!0),c(E,null,S(k.value.roles,e=>(r(),c("option",{key:e.id,value:e.id,selected:I.value==e.id},h(e.name),9,pe))),128))],32)])],2),a("ul",{class:A(["members-list",{"animated-fetch":v.value}])},[(r(!0),c(E,null,S(d.value,e=>(r(),c("li",{key:e.userId,class:"member",onClick:n=>q(e)},[a("div",ve,[a("div",_e,[a("img",{src:p(le)(e.userId,e.avatar),alt:`${e.name} avatar`,onError:s[2]||(s[2]=n=>n.target.src=p(re))},null,40,he)]),a("p",null,h(e.name),1)]),a("div",Ce,[a("ul",null,[(r(!0),c(E,null,S(K(e),(n,w)=>(r(),c("li",{key:w},[a("div",null,[u(G,{name:n.icon.name,dir:n.icon.dir},null,8,["name","dir"]),a("span",{k:w,class:"level"},h(n.level),9,ge)])]))),128))])])],8,fe))),128))],2)])]),_:1}),u(j,{open:M.value,"onUpdate:open":s[4]||(s[4]=e=>M.value=e),title:"Code",size:p(H).LARGE},{body:y(()=>[a("div",Ie,[a("button",{class:"button accent",onClick:s[3]||(s[3]=e=>i.splice(0))},h(t.$t("RESET_ALL")),1),a("div",Te,[a("section",ye,[$(a("h3",null,null,512),[[o,"TID_OBJECT_ACTION_PLAYER_INFO"]]),a("ul",null,[(r(),c(E,null,S(l,({icon:e},n)=>a("li",{key:n,class:"item"},[a("div",{class:A({mute:L(n)}),onClick:()=>N({Name:n})},[u(G,{name:e.name,dir:e.dir},null,8,["name","dir"])],10,Ee)])),64))])])]),u(J,{"on-click":N,"is-muted":L})])]),_:1},8,["open","size"]),u(j,{open:b.value,"onUpdate:open":s[5]||(s[5]=e=>b.value=e),title:T.title,size:p(H).LARGE},{body:y(()=>[u(J,{"level-map":T.lvlMap},null,8,["level-map"])]),_:1},8,["open","title","size"])])}}}),xe=oe(Me,[["__scopeId","data-v-bd93dd8f"]]);export{xe as default};
