"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[677],{84790:(e,t,r)=>{r.d(t,{Z:()=>A,V:()=>c});var a=r(66252);function o(e,t,r,o,l,n){const p=(0,a.up)("Page");return(0,a.wg)(),(0,a.j4)(p,{"title-loc-key":l.locKey,"content-args":{data:l.data,iconDir:"game/Modules"},portrait:{src:l.img,alt:`${r.type} modules`}},null,8,["title-loc-key","content-args","portrait"])}var l=r(78558),n=r(20128),p=r(92022);const s=!!{NODE_ENV:"production",BASE_URL:"/HadesSpace/"}.VUE_APP_NEBULA_BUILD,i={Trade:"TID_TRADEITEM_ARTIFACT_UTILITY",Mining:"TID_TRADEITEM_ARTIFACT_UTILITY",Shield:"TID_TRADEITEM_ARTIFACT_COMBAT",Weapon:"TID_TRADEITEM_ARTIFACT_COMBAT",Support:"TID_TRADEITEM_ARTIFACT_SUPPORT"},T=(0,p.Z)(n.Z,{filter:([,e])=>!e.Hide,sort:([,e],[,t])=>s?e.RSLevel-t.RSLevel:e.AwardLevel-t.AwardLevel}),c=e=>(0,p.Z)(T,{filter:([,t])=>t.SlotType===e}),u={components:{Page:l.Z},props:{type:{type:String,required:!0},portrait:{type:String,required:!0},postFilter:{type:Function,default:e=>e}},data(){return{data:this.postFilter(this.addArtifactName(c(this.type))),img:r(17181)(`./${this.portrait}.png`),locKey:`TYPE_MOD_${this.type.toUpperCase()}`}},methods:{addArtifactName(e){for(const t of Object.values(e))t.SlotType&&t.RSLevel&&(t.artifact=`${this.$t(i[t.SlotType])} ${this.$t("TID_LEVEL_GENERIC",[t.RSLevel]).toLowerCase()}`);return e}}};var d=r(83744);const _=(0,d.Z)(u,[["render",o]]),A=_},39857:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(66252);function o(e,t,r,o,l,n){const p=(0,a.up)("ModulePage");return(0,a.wg)(),(0,a.j4)(p,{type:"Support",portrait:"portrait_AlphaDrone","post-filter":n.postFilter},null,8,["post-filter"])}var l=r(84790);const n={components:{ModulePage:l.Z},methods:{postFilter(e){const t={...e.Salvage};return t.SalvageHullPercent&&(t.SalvageHullPercent={RS:t.SalvageHullPercent[0],WS:t.SalvageHullPercent[1]},e.Salvage=t),e}}};var p=r(83744);const s=(0,p.Z)(n,[["render",o]]),i=s}}]);