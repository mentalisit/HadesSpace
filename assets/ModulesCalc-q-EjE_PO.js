import{d as ae,s as le,g as se,i as k,j as oe,S as B,y as ne,D as ue,z as ce,r as ie,o as n,b as u,f as l,e as _,u as i,t as v,E as re,h as R,I as de,F as f,B as y,m as me,M as w,w as $,x as pe,A as N,L as ve,p as fe,q as _e,l as ye,_ as Ce}from"./index-3YbIOA3X.js";import{m as V,g as Le,a as Se}from"./ModulePage.vue_vue_type_script_setup_true_lang-aXyUYlcU.js";import{C as ge}from"./Calculator-Mx-K68k_.js";import{T as he}from"./TechList-VvZ8YUN3.js";import{N as ke}from"./NumberPicker-Rd4sawPe.js";import{c as be}from"./compendiumTechList--XZaCvXQ.js";import{g as Te,s as Ie}from"./globals-zpsYnYkF.js";import{b as Me}from"./byTypes-1BYQ2hUk.js";import{o as q}from"./Data-WJGL2H-q.js";import"./Page-7-Usm1_W.js";import"./MultiConfigGUI-gKN8km2m.js";import"./capital_ships-nQL5Fb_r.js";import"./spacebuildings-NmTc9Pj4.js";import"./sec2str-r_2mboaK.js";const Ne=S=>(fe("data-v-2429909c"),S=S(),_e(),S),Ee={class:"container"},Ue={class:"comp-btn"},Ae={class:"tech-list-wrap"},De={class:"modal-module"},Oe={class:"title"},Pe={class:"reset-buttons"},je={class:"chars"},xe={class:"level-picker"},Be=Ne(()=>l("li",null,[l("br")],-1)),Re={key:0},we={class:"select"},$e={class:"name"},Ve=["value"],qe=["value"],ze=ae({__name:"ModulesCalc",setup(S){const z=["UnlockPrice","UnlockTime"],H={actually:"CURRENT_LVL",plan:"PLAN_LVL"},b=le(),{t:F}=se(),{data:G,levelMap:Y,setTechLevel:K}=be(),{MaxModuleLevel:C}=Te,X=q(V,{map:([t])=>[t,C]}),Z=q(V,{map:([t,a])=>[t,Le(a)]}),J=k({}),d=k({actually:{},plan:{}}),g=k(!1),T=k(!1),s=oe({size:B.SMALL,title:F("TID_TECH_DLG_TITLE"),data:{module:{},minLevel:0,maxLevel:0,get key(){return this.module.Name}}});let o;ne(async()=>{await ue()}),ce([Y,()=>b.state.userSettings.compendiumTechSyncConfigIndex],([t])=>{b.state.userSettings.compendiumTechSyncConfigIndex==o.Config.selected&&(d.value.actually={...t},d.value.plan={...t,...d.value.plan})});function Q(t){o=t;for(const a of Me.artifact)J.value[a]=t.provideGetterElements((...r)=>te.apply(null,[a,...r]))}function h(t,a){if(b.state.userSettings.compendiumTechSyncConfigIndex==o.Config.selected&&t=="actually"){const r=ye(s.data.key);K(r,a)}return o.onChangeLvl(t,s.data.key,a)}async function E(t){g.value&&(t.target.name=="all"&&h("actually",0),h("plan",0))}function I(t,a){return o.outputClasses(t,s.data.key,a)}function W(t){s.data.module=t,s.data.maxLevel=X[t.Name],s.data.minLevel=Z[t.Name],g.value=!0}function ee(t,a){const r=a.total;return r.result.ReqBank=0,function(e,m){const p=t[e].UnlockPrice,c=Array.isArray(p)?p[m.plan[e]-1]:p;r.result.ReqBank=c>r.result.ReqBank?c:r.result.ReqBank}}function te(t,...[a,r]){const e=Se(t);return Object.entries(e).map(([m,p])=>{for(const[,c]of Object.entries(p))Array.isArray(c)&&c.length<C&&c.unshift(...Array(C-c.length));return r[m]=a(e[m],C),[p,C]})}return(t,a)=>{const r=ie("t");return n(),u("div",null,[l("div",Ee,[_(ge,{input:d.value,"onUpdate:input":a[0]||(a[0]=e=>d.value=e),"stack-chars":z,"calc-total":ee,"local-storage-key":"modulesCalc","title-key":"MODULES_CALC",onSetup:Q},null,8,["input"]),l("div",Ue,[i(G)?(n(),u("button",{key:0,class:"button accent",onClick:a[1]||(a[1]=e=>T.value=!0)},v(t.$t("HS_COMPENDIUM")),1)):re("",!0)]),l("div",Ae,[_(he,{"on-click":W,"level-map":d.value.actually,"level-map-alt":d.value.plan,"is-muted":e=>!d.value.plan[e]},null,8,["level-map","level-map-alt","is-muted"])])]),_(w,me({open:g.value,"onUpdate:open":a[2]||(a[2]=e=>g.value=e)},s),{body:R(()=>[l("div",De,[l("div",Oe,[l("div",null,[l("h2",null,v(t.$t(s.data.module.TID)),1),l("div",Pe,[l("button",{name:"plan",class:"button yellow",onClick:E},v(t.$t("RESET_PLAN")),1),l("button",{name:"all",class:"button red",onClick:E},v(t.$t("RESET_ALL")),1)])]),_(de,{name:s.data.module.Icon,dir:"game/Modules"},null,8,["name"])]),l("ul",je,[(n(!0),u(f,null,y(Object.keys(d.value),e=>(n(),u("li",{key:e,class:"input"},[$(l("span",null,null,512),[[r,H[e]]]),l("div",xe,[_(ke,{value:d.value[e][s.data.key]||0,min:s.data.minLevel,max:s.data.maxLevel,"onUpdate:value":m=>h(e,m)},null,8,["value","min","max","onUpdate:value"])])]))),128)),Be,(n(!0),u(f,null,y(Object.keys(i(o).output.plan[s.data.key]||{}),e=>{var m,p;return n(),u("li",{key:e,class:N({output:!0,"sub-chars":typeof((p=(m=i(o).output.plan)==null?void 0:m[s.data.key])==null?void 0:p[e])=="object"})},[l("b",null,v(i(o).format.key(e)),1),l("div",null,[(n(!0),u(f,null,y(Object.keys(d.value),c=>{var U,A,D,O;return n(),u("span",{key:c,class:N({...I(c,e),[i(Ie)(e)]:!0,"stats-style":c=="actually"?!I(c,e).none:!1})},[typeof((A=(U=i(o).output[c])==null?void 0:U[s.data.key])==null?void 0:A[e])=="object"?(n(),u("ul",Re,[(n(!0),u(f,null,y(Object.keys(i(o).output[c][s.data.key][e]||{}),L=>(n(),u("li",{key:L,class:"output"},[l("b",null,v(i(o).format.key(L)),1),l("div",null,[(n(!0),u(f,null,y(Object.keys(d.value),M=>{var P,j,x;return n(),u("span",{key:M,class:N(I(M,L))},v(i(o).format.value(L,(x=(j=(P=i(o).output[M])==null?void 0:P[s.data.key])==null?void 0:j[e])==null?void 0:x[L])),3)}),128))])]))),128))])):(n(),u(f,{key:1},[ve(v(i(o).format.value(e,(O=(D=i(o).output[c])==null?void 0:D[s.data.key])==null?void 0:O[e])),1)],64))],2)}),128))])],2)}),128))])])]),_:1},16,["open"]),_(w,{open:T.value,"onUpdate:open":a[4]||(a[4]=e=>T.value=e),size:i(B).SMALL,title:t.$t("HS_COMPENDIUM")},{body:R(()=>[l("div",we,[$(l("p",$e,null,512),[[r,"SYNC"]]),l("select",{value:t.$store.state.userSettings.compendiumTechSyncConfigIndex,onChange:a[3]||(a[3]=e=>t.$store.commit(i(pe).SET_COMPENDIUM_TECH_SYNC_CONFIG_INDEX,parseInt(e.target.value)))},[(n(!0),u(f,null,y(i(o).Config.configs,(e,m)=>(n(),u("option",{key:m,value:m},v(e.name),9,qe))),128))],40,Ve)])]),_:1},8,["open","size","title"])])}}}),st=Ce(ze,[["__scopeId","data-v-2429909c"]]);export{st as default};
