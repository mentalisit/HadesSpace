"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[749],{84790:(t,e,r)=>{r.d(e,{Z:()=>A,V:()=>c});var a=r(66252);function o(t,e,r,o,i,n){const p=(0,a.up)("Page");return(0,a.wg)(),(0,a.j4)(p,{"title-loc-key":i.locKey,"content-args":{data:i.data,iconDir:"game/Modules"},portrait:{src:i.img,alt:`${r.type} modules`}},null,8,["title-loc-key","content-args","portrait"])}var i=r(78558),n=r(20128),p=r(92022);const s=!!{NODE_ENV:"production",BASE_URL:"/HadesSpace/"}.VUE_APP_NEBULA_BUILD,T={Trade:"TID_TRADEITEM_ARTIFACT_UTILITY",Mining:"TID_TRADEITEM_ARTIFACT_UTILITY",Shield:"TID_TRADEITEM_ARTIFACT_COMBAT",Weapon:"TID_TRADEITEM_ARTIFACT_COMBAT",Support:"TID_TRADEITEM_ARTIFACT_SUPPORT"},l=(0,p.Z)(n.Z,{filter:([,t])=>!t.Hide,sort:([,t],[,e])=>s?t.RSLevel-e.RSLevel:t.AwardLevel-e.AwardLevel}),c=t=>(0,p.Z)(l,{filter:([,e])=>e.SlotType===t}),d={components:{Page:i.Z},props:{type:{type:String,required:!0},portrait:{type:String,required:!0},postFilter:{type:Function,default:t=>t}},data(){return{data:this.postFilter(this.addArtifactName(c(this.type))),img:r(17181)(`./${this.portrait}.png`),locKey:`TYPE_MOD_${this.type.toUpperCase()}`}},methods:{addArtifactName(t){for(const e of Object.values(t))e.SlotType&&e.RSLevel&&(e.artifact=`${this.$t(T[e.SlotType])} ${this.$t("TID_LEVEL_GENERIC",[e.RSLevel]).toLowerCase()}`);return t}}};var _=r(83744);const u=(0,_.Z)(d,[["render",o]]),A=u},42817:(t,e,r)=>{r.r(e),r.d(e,{default:()=>T});var a=r(66252);function o(t,e,r,o,i,n){const p=(0,a.up)("ModulePage");return(0,a.wg)(),(0,a.j4)(p,{type:"Weapon",portrait:"portrait_WhiteStar"})}var i=r(84790);const n={components:{ModulePage:i.Z}};var p=r(83744);const s=(0,p.Z)(n,[["render",o]]),T=s}}]);