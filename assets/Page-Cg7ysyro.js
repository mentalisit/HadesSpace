import{d as _,i as k,o as e,b as s,F as l,f as o,B as f,e as c,h,C as g,L as i,aD as m,I,t as d,O as D,c as $,_ as v,g as C,a as V,u as b,H as N,N as M}from"./index-CgF57V4H.js";import{V as A}from"./Data-BTlFPx3f.js";const B={class:"container"},P={class:"title"},L=["href"],O={key:0},T={key:0,class:"icon"},w=_({__name:"Content",props:{args:{}},setup(p){const n=k(!0);function u(a){if(Array.isArray(a)){const r=Math.floor(Math.random()*a.length);return a[r]}return a}return(a,r)=>(e(),s("div",B,[Object.keys(a.args.data).length>1?(e(),s(l,{key:0},[o("div",P,[o("div",{class:f(["chat-icon",[n.value?"opened":"closed"]]),onClick:r[0]||(r[0]=t=>n.value=!n.value)},null,2)]),c(m,null,{default:h(()=>[n.value?(e(),s("ol",{key:0,class:f(["list",{"with-icons":"iconDir"in a.args}])},[(e(!0),s(l,null,g(a.args.data,t=>(e(),s("li",{key:t.Name},[o("a",{href:`#${t.Name}`},["iconDir"in a.args?(e(),s("div",O,[t.PrefabModel||t.Icon||t.Model?(e(),s("div",T,[c(I,{name:u(t.PrefabModel||t.Icon||t.Model),dir:a.args.iconDir},null,8,["name","dir"])])):i("",!0),o("p",null,d(a.$t(t.TID)),1)])):(e(),s(l,{key:1},[D(d(a.$t(t.TID)),1)],64))],8,L)]))),128))],2)):i("",!0)]),_:1})],64)):i("",!0),(e(!0),s(l,null,g(a.args.data,(t,y)=>(e(),$(A,{key:y,data:t,"table-opts":a.args.tableOpts,"icon-dir":a.args.iconDir},null,8,["data","table-opts","icon-dir"]))),128))]))}}),F=v(w,[["__scopeId","data-v-5c3a6450"]]),H={class:"portrait-container"},K=["src","alt"],S={class:"topic"},j=_({__name:"Page",props:{contentArgs:{},titleLocKey:{},portrait:{default:null}},setup(p){const{t:n}=C(),u=p,a=V(()=>n(u.titleLocKey));return(r,t)=>(e(),s("div",null,[c(b(N),null,{default:h(()=>[o("title",null,d(a.value),1)]),_:1}),o("div",H,[r.portrait?(e(),s("img",{key:0,class:"portrait",src:r.portrait.src,alt:r.portrait.alt},null,8,K)):i("",!0),o("h1",S,d(a.value),1)]),M(r.$slots,"default",{},void 0,!0),c(F,{args:r.contentArgs},null,8,["args"])]))}}),R=v(j,[["__scopeId","data-v-ce5df9d2"]]);export{R as P,F as V};
