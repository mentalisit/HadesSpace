import{d as _,i as k,o as e,b as s,F as l,f as o,A as f,e as c,h,B as g,I as m,E as i,t as d,L as I,aA as $,c as D,_ as v,g as V,a as b,u as A,H as C,G as M}from"./index-_uruua_d.js";import{V as N}from"./Data-i0oFVlNi.js";const B={class:"container"},P={class:"title"},L=["href"],T={key:0},O={key:0,class:"icon"},w=_({__name:"Content",props:{args:{}},setup(p){const n=k(!0);function u(a){if(Array.isArray(a)){const r=Math.floor(Math.random()*a.length);return a[r]}return a}return(a,r)=>(e(),s("div",B,[Object.keys(a.args.data).length>1?(e(),s(l,{key:0},[o("div",P,[o("div",{class:f(["chat-icon",[n.value?"opened":"closed"]]),onClick:r[0]||(r[0]=t=>n.value=!n.value)},null,2)]),c($,null,{default:h(()=>[n.value?(e(),s("ol",{key:0,class:f(["list",{"with-icons":"iconDir"in a.args}])},[(e(!0),s(l,null,g(a.args.data,t=>(e(),s("li",{key:t.Name},[o("a",{href:`#${t.Name}`},["iconDir"in a.args?(e(),s("div",T,[t.PrefabModel||t.Icon||t.Model?(e(),s("div",O,[c(m,{name:u(t.PrefabModel||t.Icon||t.Model),dir:a.args.iconDir},null,8,["name","dir"])])):i("",!0),o("p",null,d(a.$t(t.TID)),1)])):(e(),s(l,{key:1},[I(d(a.$t(t.TID)),1)],64))],8,L)]))),128))],2)):i("",!0)]),_:1})],64)):i("",!0),(e(!0),s(l,null,g(a.args.data,(t,y)=>(e(),D(N,{key:y,data:t,"table-opts":a.args.tableOpts,"icon-dir":a.args.iconDir},null,8,["data","table-opts","icon-dir"]))),128))]))}}),E=v(w,[["__scopeId","data-v-5c3a6450"]]),F={class:"portrait-container"},H=["src","alt"],K={class:"topic"},S=_({__name:"Page",props:{contentArgs:{},titleLocKey:{},portrait:{default:null}},setup(p){const{t:n}=V(),u=p,a=b(()=>n(u.titleLocKey));return(r,t)=>(e(),s("div",null,[c(A(C),null,{default:h(()=>[o("title",null,d(a.value),1)]),_:1}),o("div",F,[r.portrait?(e(),s("img",{key:0,class:"portrait",src:r.portrait.src,alt:r.portrait.alt},null,8,H)):i("",!0),o("h1",K,d(a.value),1)]),M(r.$slots,"default",{},void 0,!0),c(E,{args:r.contentArgs},null,8,["args"])]))}}),G=v(S,[["__scopeId","data-v-ce5df9d2"]]);export{G as P,E as V};
