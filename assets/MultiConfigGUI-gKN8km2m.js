var A=Object.defineProperty;var R=(o,s,t)=>s in o?A(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t;var N=(o,s,t)=>(R(o,typeof s!="symbol"?s+"":s,t),t);import{j as F,d as U,s as $,g as k,i as B,a as G,r as J,o as I,b as w,f as u,w as _,A as P,t as D,aM as j,F as K,B as z,J as V,K as H,_ as Y}from"./index-3YbIOA3X.js";const T={crush:(o,s=50)=>{const t="",a=(e,i)=>{let f=i.length,d="";const v=r=>encodeURI(encodeURIComponent(r)).replace(/%../g,"i").length,x=r=>{let c=r.charCodeAt(0),h=r.charCodeAt(r.length-1);return c>=56320&&c<=57343||h>=55296&&h<=56319};let m={};for(let r=2;r<s;r++)for(let c=0;c<e.length-r;++c){let h=e.substr(c,r);if(m[h]||x(h))continue;let E=1;for(let b=e.indexOf(h,c+r);b>=0;++E)b=e.indexOf(h,b+r);E>1&&(m[h]=E)}for(;;){for(;f--&&e.includes(i[f]););if(f<0)break;let r=i[f],c,h=0,E=v(r);for(let y in m){let S=m[y],g=(S-1)*v(y)-(S+1)*E;d.length||(g-=v(t)),g<=0?delete m[y]:g>h&&(c=y,h=g)}if(!c)break;e=e.split(c).join(r)+r+c,d=r+d;let b={};for(let y in m){let S=y.split(c).join(r),g=0;for(let O=e.indexOf(S);O>=0;++g)O=e.indexOf(S,O+S.length);g>1&&(b[S]=g)}m=b}return{a:e,b:d}};let n=[];const l="-_.!~*'()";for(let e=127;--e;)(e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122||l.includes(String.fromCharCode(e)))&&n.push(String.fromCharCode(e));for(let e=32;e<255;++e){let i=String.fromCharCode(e);i!="\\"&&!n.includes(i)&&n.unshift(i)}o=o.replace(new RegExp(t,"g"),""),o=L(o);const p=a(o,n);let C=p.a;return p.b.length&&(C+=t+p.b),C+="_",C},uncrush:o=>{o=o.substring(0,o.length-1);const s=o.split("");let t=s[0];if(s.length>1){let a=s[1];for(let n of a){let l=t.split(n);t=l.join(l.pop())}}return L(t,0)}},L=(o,s=1)=>{const t=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],a=(n,l)=>{let p=new RegExp(`${(l[2]?l[2]:"")+l[0]}|${(l[3]?l[3]:"")+l[1]}`,"g");return n.replace(p,C=>C===l[0]?l[1]:l[0])};if(s)for(let n=0;n<t.length;++n)o=a(o,t[n]);else for(let n=t.length;n--;)o=a(o,t[n]);return o},M="default entry";class Z{constructor(s,t){N(this,"store");this.localStoreKey=s,this.zeroConfig=t,this.store=F({configs:[],selected:0}),this.load()}get selectedConfig(){return this.store.configs[this.store.selected].value}load(){const s=JSON.parse(localStorage.getItem(this.localStoreKey)||"{}");if(s){if(s.configs){Object.assign(this.store,s);return}localStorage.removeItem(this.localStoreKey)}this.add(this.zeroConfig)}save(){localStorage.setItem(this.localStoreKey,JSON.stringify(this.store))}removeSelected(){if(this.store.configs.splice(this.store.selected,1),this.store.configs.length==0){this.add(this.zeroConfig);return}this.store.selected=this.store.configs.length-1}add(s,{temporary:t}={temporary:!1}){let a=0,n;do n=a?`${M} #${a}`:M,a++;while(this.store.configs.length&&this.store.configs.some(l=>l.name==n));this.store.configs=[...this.store.configs,{name:n,value:s}],this.store.selected=this.store.configs.length-1,t||this.save()}static stringifyUrl(s){const t=JSON.stringify(s);return T.crush(t)}static parseUrl(s){return JSON.parse(T.uncrush(s))}}const q={class:"container"},Q={class:"config-category"},W={class:"flex-end"},X={class:"select"},ee={class:"name"},te=["value"],se={class:"input"},oe={class:"name"},ne=["placeholder"],le={class:"flex-end margin-bottom"},re=U({__name:"MultiConfigGUI",props:{instance:{},onCreateNew:{type:Function},dataToString:{}},setup(o){const s=$(),{t}=k(),a=o,n=B({text:t("COPY"),color:"yellow"}),l=G(()=>`${location.origin}${location.pathname}`);function p(){const e=Z.stringifyUrl(a.dataToString??a.instance.selectedConfig);navigator.clipboard.writeText(`${l.value}?d=${e}`).then(()=>{n.value={text:t("COPIED"),color:"green"},setTimeout(()=>n.value={text:t("COPY"),color:"yellow"},2e3)}).catch(i=>{n.value={text:t("TID_DLG_TITLE_ERROR"),color:"red"},alert(i.message),console.error(i)})}async function C(){const{name:e}=a.instance.store.configs[a.instance.store.selected];await s.dispatch(H.OPEN_CONFIRM,t("REMOVE_CONFIG",[e])).then(()=>{a.instance.removeSelected()}).catch(()=>{})}return(e,i)=>{const f=J("t");return I(),w("div",q,[u("div",Q,[_(u("p",null,null,512),[[f,"CONFIG"]]),u("div",W,[u("button",{class:P(`button ${n.value.color}`),onClick:p},D(n.value.text),3),_(u("button",{class:"button green",onClick:i[0]||(i[0]=(...d)=>e.onCreateNew&&e.onCreateNew(...d))},null,512),[[f,"CREATE"]])])]),u("div",X,[_(u("p",ee,null,512),[[f,"LIST"]]),_(u("select",{"onUpdate:modelValue":i[1]||(i[1]=d=>e.instance.store.selected=d)},[(I(!0),w(K,null,z(e.instance.store.configs,(d,v)=>(I(),w("option",{key:v,value:v},D(d.name),9,te))),128))],512),[[j,e.instance.store.selected]])]),u("div",se,[_(u("p",oe,null,512),[[f,"TID_CHANGE_NAME_TITLE"]]),_(u("input",{"onUpdate:modelValue":i[2]||(i[2]=d=>e.instance.store.configs[e.instance.store.selected].name=d),placeholder:e.$t("TID_CORP_NAME_LABEL")},null,8,ne),[[V,e.instance.store.configs[e.instance.store.selected].name]])]),u("div",le,[_(u("button",{class:"button red",onClick:C},null,512),[[f,"TID_SOCIAL_DELETE_MESSAGE"]])])])}}}),ce=Y(re,[["__scopeId","data-v-fdcb7439"]]);export{Z as M,ce as a};
