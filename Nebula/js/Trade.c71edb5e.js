"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[683],{4790:(t,e,r)=>{r.d(e,{Z:()=>A,V:()=>c});var o=r(6252);function a(t,e,r,a,n,i){const p=(0,o.up)("Page");return(0,o.wg)(),(0,o.j4)(p,{"title-loc-key":n.locKey,"content-args":{data:n.data,iconDir:"game/Modules"},portrait:{src:n.img,alt:`${r.type} modules`}},null,8,["title-loc-key","content-args","portrait"])}var n=r(8558),i=r(5284),p=r(2022);const s=!0,T={Trade:"TID_TRADEITEM_ARTIFACT_UTILITY",Mining:"TID_TRADEITEM_ARTIFACT_UTILITY",Shield:"TID_TRADEITEM_ARTIFACT_COMBAT",Weapon:"TID_TRADEITEM_ARTIFACT_COMBAT",Support:"TID_TRADEITEM_ARTIFACT_SUPPORT"},l=(0,p.Z)(i.Z,{filter:([,t])=>!t.Hide,sort:([,t],[,e])=>s?t.RSLevel-e.RSLevel:t.AwardLevel-e.AwardLevel}),c=t=>(0,p.Z)(l,{filter:([,e])=>e.SlotType===t}),d={components:{Page:n.Z},props:{type:{type:String,required:!0},portrait:{type:String,required:!0},postFilter:{type:Function,default:t=>t}},data(){return{data:this.postFilter(this.addArtifactName(c(this.type))),img:r(5691)(`./${this.portrait}.png`),locKey:`TYPE_MOD_${this.type.toUpperCase()}`}},methods:{addArtifactName(t){for(const e of Object.values(t))e.SlotType&&e.RSLevel&&(e.artifact=`${this.$t(T[e.SlotType])} ${this.$t("TID_LEVEL_GENERIC",[e.RSLevel]).toLowerCase()}`);return t}}};var u=r(3744);const _=(0,u.Z)(d,[["render",a]]),A=_},70:(t,e,r)=>{r.r(e),r.d(e,{default:()=>T});var o=r(6252);function a(t,e,r,a,n,i){const p=(0,o.up)("ModulePage");return(0,o.wg)(),(0,o.j4)(p,{type:"Trade",portrait:"portrait_ShipmentDrone","post-filter":i.postFilter},null,8,["post-filter"])}var n=r(4790);const i={components:{ModulePage:n.Z},methods:{postFilter(t){const e={...t.ShipmentDrone};return e.DroneShipmentBonusMax=e.DroneShipmentBonus.map(((t,r)=>(e.SpawnCapacity[r]-1)*t)),t.ShipmentDrone=e,t}}};var p=r(3744);const s=(0,p.Z)(i,[["render",a]]),T=s}}]);