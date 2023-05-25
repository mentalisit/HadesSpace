"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[902],{73902:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var a=i(66252),s=i(3577);const r={key:0,class:"wrapper"},n={class:"body"},l={class:"text-side"},o=["id"],c={key:0},d={key:2,class:"characteristics"},u={key:0,class:"icon"},m={key:2,class:"value"};function y(e,t,i,y,p,f){const k=(0,a.up)("Stats"),g=(0,a.up)("icon"),D=(0,a.up)("v-node");return(0,a.wg)(),(0,a.iD)("div",null,[p.isObject(i.items)||Array.isArray(i.items)&&i.items.every(p.isObject)?((0,a.wg)(),(0,a.iD)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.itemsToArray,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:"item"},[(0,a._)("div",n,[(0,a._)("div",l,[t||e.TID?((0,a.wg)(),(0,a.iD)("div",{key:0,id:i.parentId?`${i.parentId}-${t}`:e.Name,class:"title"},["data"!=t?((0,a.wg)(),(0,a.iD)("div",c,(0,s.zw)(i.format.key(t||e.TID))+" ("+(0,s.zw)(e.Name)+") ",1)):(0,a.kq)("",!0)],8,o)):(0,a.kq)("",!0),Array.isArray(e)&&e.every((e=>e!==Object(e)))?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)((0,s.zw)(i.format.value(t,e)),1)],64)):((0,a.wg)(),(0,a.iD)("ul",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.getCharacteristics(e),(([r,n,l],o)=>((0,a.wg)(),(0,a.iD)("li",{key:o,class:(0,s.C_)({line:!0,filtered:l})},[(0,a.Wm)(k,{"item-key":o,items:r,format:i.format,"parent-id":`${i.parentId}-${t}`,parent:e,status:n},null,8,["item-key","items","format","parent-id","parent","status"])],2)))),128))]))]),e.PrefabModel||e.Icon||e.Model?((0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(g,{name:e.PrefabModel||e.Icon||e.Model,dir:i.iconDir||p.iconDirList[t]||p.iconDirList.default},null,8,["name","dir"])])):(0,a.kq)("",!0)])])))),128))])):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("span",{class:(0,s.C_)(`status-${i.status||i.parent[i.itemKey]?.status}`)},["data"!=i.itemKey?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("b",null,(0,s.zw)("en-data"!=i.parentId?i.format.key(i.itemKey):i.itemKey),1),e.$store.state.userSettings.showKeys?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.Uk)(" ("+(0,s.zw)(i.itemKey)+")",1)],64)):(0,a.kq)("",!0),(0,a.Uk)(" : ")],64)):(0,a.kq)("",!0),"function"===typeof i.format.value(i.itemKey,i.items)?((0,a.wg)(),(0,a.j4)(D,{key:1,render:i.format.value(i.itemKey,i.items)},null,8,["render"])):((0,a.wg)(),(0,a.iD)("span",m,[Array.isArray(i.items)?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.Uk)((0,s.zw)(i.items.map((e=>i.format.value(f.keyFormatter,e))).map((e=>"en-data"==i.parentId?`"${e}"`:e)).join(2==i.items.length?" >> ":", ")),1)],64)):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)((0,s.zw)(i.format.value(f.keyFormatter,i.items)),1)],64))]))],2),(0,a.WI)(e.$slots,"default",{},void 0,!0)],64))])}var p=i(70050),f=i(78642),k=i(96124);const g={drone:"game/Ships",modules:"game/Modules",default:"game/Modules"};function D(e){return"object"===typeof e&&!Array.isArray(e)&&null!==e}function w({render:e}){return e(a.h)}function h(e){const t=(0,f.Z)(e,{map:([t,i])=>[t,["object"==typeof i&&"data"in i?i.data:i,"status"in e?e.status:null,(0,k.Z)(t,e.Name)]],filter:([e])=>!(e.startsWith("_")||(0,k.Z)(e,null,{asMeta:!0}))});for(const i in t)if("object"==typeof t[i][0]){const e=Object.keys(t[i][0]);e.every((e=>D(t[i][0]?.[e])&&"data"in t[i][0][e]))&&(e.forEach((e=>t[e]=[...Object.values(t[i][0][e]),...t[i].slice(2)])),delete t[i])}if(t.projectile){const{projectile:e}=t;delete t.projectile,t.projectile=e}return t}const v={name:"Stats",components:{Icon:p.Z,VNode:w},inject:{additionalStatsContent:{default:null}},props:{items:{type:null,required:!0},itemKey:{type:String,default:null},parentId:{type:String,default:null},parent:{type:Object,default:()=>({TID_Description:null})},format:{type:Object,required:!0},iconDir:{type:String,default:""},status:{type:String,default:""}},data(){return{isObject:D,iconDirList:g,getCharacteristics:h,minimumFormatting:"en"==this?.parent?.Name}},computed:{itemsToArray(){return Array.isArray(this.items)||Object.values(this.items).every((e=>this.isObject(e)||Array.isArray(e)))?this.items:[this.items]},keyFormatter(){return"data"==this.itemKey?this.parentId.split("-").pop():this.itemKey}},methods:{formatDescr(e){const t=e.endsWith("_DESCR")?e.replace("_DESCR","_CUSTOM_DESCR"):null,i=this.$t(e,["X","Y","Z"]).replace(/<[^>]*>/g,""),a=t&&this.$te(t)?this.$t(t):null;return a?`${i}\n\n${a}`:i}}};var b=i(83744);const j=(0,b.Z)(v,[["render",y],["__scopeId","data-v-845ba5b4"]]),_=j}}]);