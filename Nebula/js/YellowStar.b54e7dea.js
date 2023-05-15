"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[790],{2578:(e,l,n)=>{n.d(l,{Z:()=>T});var a=n(6252),t=n(3577),r=n(9963);const u=e=>((0,a.dD)("data-v-3eae0739"),e=e(),(0,a.Cn)(),e),i={class:"container"},s={class:"title"},S=u((()=>(0,a._)("div",null,null,-1))),o=[S],_=["href"];function d(e,l,n,u,S,d){const m=(0,a.up)("v-data"),p=(0,a.Q2)("t");return(0,a.wg)(),(0,a.iD)("div",i,[Object.keys(n.args.data).length>1?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("div",s,[(0,a._)("h2",null,(0,t.zw)(e.$t("CONTENT")),1),(0,a._)("div",{class:(0,t.C_)(["hamburger-icon",{opened:S.contentOpened}]),onClick:l[0]||(l[0]=e=>S.contentOpened=!S.contentOpened)},o,2)]),S.contentOpened?((0,a.wg)(),(0,a.j4)(r.W3,{key:0,tag:"ol",class:"list"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.args.data,(({Name:e,TID:l})=>((0,a.wg)(),(0,a.iD)("li",{key:e},[(0,a.wy)((0,a._)("a",{href:`#${e}`},null,8,_),[[p,l]])])))),128))])),_:1})):(0,a.kq)("",!0)],64)):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.args.data,((e,l)=>((0,a.wg)(),(0,a.j4)(m,{key:l,data:e,"table-opts":n.args.tableOpts,"icon-dir":n.args.iconDir},null,8,["data","table-opts","icon-dir"])))),128))])}var m=n(7190);const p={components:{VData:m.Z},props:{args:{type:Object,required:!0}},data(){return{contentOpened:!1}}};var N=n(3744);const c=(0,N.Z)(p,[["render",d],["__scopeId","data-v-3eae0739"]]),T=c},569:(e,l,n)=>{n.d(l,{Z:()=>p});var a=n(6252),t=n(3577);const r={class:"portrait-container"},u=["src","alt"],i={class:"topic"};function s(e,l,n,s,S,o){const _=(0,a.up)("v-head"),d=(0,a.up)("v-content");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a._)("title",null,(0,t.zw)(o.title),1)])),_:1}),(0,a._)("div",r,[n.portrait?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"portrait",src:n.portrait.src,alt:n.portrait.alt},null,8,u)):(0,a.kq)("",!0),(0,a._)("h1",i,(0,t.zw)(o.title),1)]),(0,a.WI)(e.$slots,"default",{},void 0,!0),(0,a.Wm)(d,{args:n.contentArgs},null,8,["args"])])}var S=n(7451),o=n(2578);const _={components:{VHead:S.Fb,VContent:o.Z},props:{contentArgs:{type:Object,required:!0},titleLocKey:{type:String,required:!0},portrait:{type:Object,default:null,validator:e=>["src","alt"].every((l=>l in e))}},computed:{title(){return this.$t(this.titleLocKey)}}};var d=n(3744);const m=(0,d.Z)(_,[["render",s],["__scopeId","data-v-adad4e2a"]]),p=m},4125:(e,l,n)=>{n.r(l),n.d(l,{default:()=>I});var a=n(6252),t=n(3577);function r(e,l,n,r,u,i){const s=(0,a.up)("Page"),S=(0,a.up)("v-data");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(s,{"title-loc-key":"TID_YELLOW_STAR","content-args":{data:{stars:u.stars},iconDir:"game/Stars"},portrait:{src:u.img,alt:"yellowStar"}},null,8,["content-args","portrait"]),(0,a.Wm)(S,(0,t.vs)((0,a.F4)({data:u.sectors,tableOpts:{lvlColKey:"№"}})),null,16),(0,a.Wm)(S,(0,t.vs)((0,a.F4)({data:u.levels})),null,16),(0,a.Wm)(S,(0,t.vs)((0,a.F4)({data:u.planets,tableOpts:{lvlColKey:"№"}})),null,16),(0,a.Wm)(S,(0,t.vs)((0,a.F4)({data:u.prices,tableOpts:{lvlColKey:"№"}})),null,16)])}var u=n(5925),i=n(569),s=n(7190),S=n(6577);const o={Name:["Start","SL0_0","SL0_1","SL0_2","SL0_3","SL0_4","SL1_0","SL1_1","SL1_2","SL2_0","SL2_1","SL2_2","SL3_0","SL3_1","SL3_2","SL4_0","SL4_1","SL4_2","SL5_0","SL5_1","SL5_2","SL6_0","SL6_1","SL6_2","SL7_0","SL7_1","SL7_2","SL8_0","SL8_1","SL8_2","SL9_0","SL9_1","SL9_2","SL10_0","SL10_1","SL10_2"],MinScannerLevel:[0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10],Weight:[100,100,100,100,100,100,34,34,34,34,34,34,34,34,34,34,34,34,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,4,4,4],PlanetTypes:[["desert_lv1","lava_lv1"],"water_lv1",null,null,"terran_lv1",null,"gas_lv1",null,null,"terran_lv2",null,null,"lava_lv2",null,null,"water_lv2","gas_lv2",null,"desert_lv2",null,null,"lava_lv3",null,null,"desert_lv3","water_lv3",null,"terran_lv3",null,null,"ice_variation1",null,null,"ice_variation2",null,null],MinPlanetDistanceFromCenter:[2e3,0,null,null,0,null,250,null,null,500,null,null,1e3,null,null,1e3,1e3,null,1e3,null,null,1e3,null,null,1e3,1e3,null,1e3,null,null,1e3,null,null,1e3,null,null],MaxPlanetDistanceFromCenter:[2e3,200,null,null,200,null,1e3,null,null,1500,null,null,2e3,null,null,2e3,2e3,null,2e3,null,null,2e3,null,null,2e3,2e3,null,2e3,null,null,2e3,null,null,2e3,null,null],NumMoons:[[2,1],1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],MoonDistance:[800,1e3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],MoonSize:[100,100,null,null,null,null,105,null,null,105,null,105,105,null,null,null,null,null,110,105,105,105,105,105,105,105,105,null,null,null,null,null,null,null,null,null],AsteroidsMin:[3,4,3,4,3,5,5,6,5,6,7,7,8,8,8,9,7,8,10,12,12,9,9,10,11,8,9,10,10,12,11,10,9,8,12,10],AsteroidsMax:[3,4,3,4,3,5,5,6,5,6,7,7,8,8,8,9,7,8,10,12,12,9,9,10,11,8,9,10,10,12,11,10,9,8,12,10],HydrogenPerDay:[600,500,450,300,350,300,250,200,150,200,180,120,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150],AsteroidBeltAxis1Size:[1600,1600,1600,2500,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600,1600],AsteroidBeltAxis2Size:[2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500],CerbGroup:[null,{Name:"YS1",NumSentinels:1},{Name:"YS2",NumSentinels:2},{Name:"YS3",NumGuardians:1},{Name:"YS4",NumSentinels:3},{Name:"YS5",NumGuardians:2},{Name:"YS6",NumSentinels:1,NumGuardians:2},{Name:"YS7",NumSentinels:1,NumGuardians:1},{Name:"YS8",NumSentinels:4},{Name:"YS9",NumSentinels:3,NumGuardians:2},{Name:"YS_10",NumSentinels:6},{Name:"YS_11",NumSentinels:8},{Name:"YS_12",NumSentinels:1,NumGuardians:3},{Name:"YS_13",NumSentinels:1,NumGuardians:4},{Name:"YS_14",NumGuardians:7},{Name:"YS_10",NumSentinels:6},{Name:"YS_15",NumSentinels:2,NumGuardians:1},{Name:"YS_16",NumSentinels:5,NumGuardians:1},{Name:"YS_17",NumSentinels:1,NumColossus:1},{Name:"YS3",NumGuardians:1},{Name:"YS9",NumSentinels:3,NumGuardians:2},{Name:"YS_18",NumSentinels:4,NumGuardians:2},{Name:"YS_19",NumSentinels:5,NumGuardians:3},{Name:"YS_20",NumGuardians:3},{Name:"YS_21",NumSentinels:4,NumColossus:1},{Name:"YS_22",NumSentinels:5,NumColossus:1},{Name:"YS_23",NumSentinels:6,NumGuardians:5},{Name:"YS_24",NumSentinels:7,NumGuardians:4},{Name:"YS_25",NumSentinels:8,NumGuardians:6},{Name:"YS_26",NumSentinels:7,NumGuardians:3},{Name:"YS_27",NumSentinels:8,NumGuardians:2},{Name:"YS_28",NumSentinels:3,NumGuardians:2,NumColossus:1},{Name:"YS_29",NumColossus:2},{Name:"YS_18",NumSentinels:4,NumGuardians:2},{Name:"YS_30",NumSentinels:6,NumGuardians:1},{Name:"YS_31",NumSentinels:3,NumGuardians:2,NumColossus:2}],TutorialUse:[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],BSAnomaly:[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],NumBases:[0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,2,1,0,1,0,0,2,0,0],BaseType:[null,null,null,null,null,null,null,{Name:"HomeSystem1",TID:"TID_CERB_STATION_HOME1",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:15e3,MaxShield:15e3,DPS:100,AttackRange:1e3,Model:"CerberusStation_DrkNeb",WeaponFx:"Gun_Projectile01_Weak",ShieldRegenPerMinute:10,ShieldRegenTimeAfterDamage:3600,MaxShips:3,AwardXP:1e3},null,null,null,{Name:"HomeSystem1",TID:"TID_CERB_STATION_HOME1",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:15e3,MaxShield:15e3,DPS:100,AttackRange:1e3,Model:"CerberusStation_DrkNeb",WeaponFx:"Gun_Projectile01_Weak",ShieldRegenPerMinute:10,ShieldRegenTimeAfterDamage:3600,MaxShips:3,AwardXP:1e3},null,null,null,null,{Name:"HomeSystem2",TID:"TID_CERB_STATION_HOME2",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:5e4,MaxShield:5e4,DPS:140,AttackRange:1600,Model:"CerberusStation_DrkNeb_lv2",WeaponFx:"Gun_Projectile01",ShieldRegenPerMinute:14,ShieldRegenTimeAfterDamage:3600,MaxShips:5,AwardXP:3e3},{Name:"HomeSystem2",TID:"TID_CERB_STATION_HOME2",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:5e4,MaxShield:5e4,DPS:140,AttackRange:1600,Model:"CerberusStation_DrkNeb_lv2",WeaponFx:"Gun_Projectile01",ShieldRegenPerMinute:14,ShieldRegenTimeAfterDamage:3600,MaxShips:5,AwardXP:3e3},null,{Name:"HomeSystem3",TID:"TID_CERB_STATION_HOME3",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:9e4,MaxShield:9e4,DPS:200,AttackRange:2400,Model:"CerberusStation_DrkNeb_lv3",WeaponFx:"Gun_Projectile01_Strong",ShieldRegenPerMinute:20,ShieldRegenTimeAfterDamage:3600,MaxShips:7,AwardXP:5e3},null,null,null,{Name:"HomeSystem3",TID:"TID_CERB_STATION_HOME3",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:9e4,MaxShield:9e4,DPS:200,AttackRange:2400,Model:"CerberusStation_DrkNeb_lv3",WeaponFx:"Gun_Projectile01_Strong",ShieldRegenPerMinute:20,ShieldRegenTimeAfterDamage:3600,MaxShips:7,AwardXP:5e3},null,null,{Name:"HomeSystem3",TID:"TID_CERB_STATION_HOME3",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:9e4,MaxShield:9e4,DPS:200,AttackRange:2400,Model:"CerberusStation_DrkNeb_lv3",WeaponFx:"Gun_Projectile01_Strong",ShieldRegenPerMinute:20,ShieldRegenTimeAfterDamage:3600,MaxShips:7,AwardXP:5e3},{Name:"HomeSystem3",TID:"TID_CERB_STATION_HOME3",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:9e4,MaxShield:9e4,DPS:200,AttackRange:2400,Model:"CerberusStation_DrkNeb_lv3",WeaponFx:"Gun_Projectile01_Strong",ShieldRegenPerMinute:20,ShieldRegenTimeAfterDamage:3600,MaxShips:7,AwardXP:5e3},{Name:"HomeSystem3",TID:"TID_CERB_STATION_HOME3",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:9e4,MaxShield:9e4,DPS:200,AttackRange:2400,Model:"CerberusStation_DrkNeb_lv3",WeaponFx:"Gun_Projectile01_Strong",ShieldRegenPerMinute:20,ShieldRegenTimeAfterDamage:3600,MaxShips:7,AwardXP:5e3},null,{Name:"HomeSystem3",TID:"TID_CERB_STATION_HOME3",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:9e4,MaxShield:9e4,DPS:200,AttackRange:2400,Model:"CerberusStation_DrkNeb_lv3",WeaponFx:"Gun_Projectile01_Strong",ShieldRegenPerMinute:20,ShieldRegenTimeAfterDamage:3600,MaxShips:7,AwardXP:5e3},null,null,{Name:"HomeSystem3",TID:"TID_CERB_STATION_HOME3",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:9e4,MaxShield:9e4,DPS:200,AttackRange:2400,Model:"CerberusStation_DrkNeb_lv3",WeaponFx:"Gun_Projectile01_Strong",ShieldRegenPerMinute:20,ShieldRegenTimeAfterDamage:3600,MaxShips:7,AwardXP:5e3},null,null]};var _=n(5487),d=n(1355);const m=[250,300,3e3,5e3,4e4,8e4,1e5,12e4,2e5,3e5,5e5,75e4,1e6,2e6,4e6];var p=n(6015);const N={...S["default"].YellowStar};delete N.Models;const c=(0,p.Z)(d.Z,{filterByType:{path:"planets.yellowstar"}});delete c.ModelFolders,delete c.ConceptImage,c.TID2=c.TID,c.TID="PLANETS",c.Name="Planets";const{t:T}=u["default"].global,D={Name:"colonize_prices",TID:"COLONIZATION_PLANETS",ProbableTypePlanet:c.TID2.map((e=>T(e))),_:[0,...m]},C={components:{Page:i.Z,VData:s.Z},data(){return{stars:N,sectors:{Name2:o.Name,...o,BaseType:o.BaseType.map(((e,l)=>e?{...e,NumBases:o.NumBases[l]}:null)),TID:"SECTORS",Name:"yellow_star_sectors"},levels:{TID:"LVLS_PLANETS",..._.Z},planets:c,prices:D,img:n(5111)}}};var v=n(3744);const g=(0,v.Z)(C,[["render",r],["__scopeId","data-v-38ae4b5b"]]),I=g},6015:(e,l,n)=>{n.d(l,{Z:()=>t});var a=n(5888);function t(e,{filterByType:{path:l}}){const n={},t=l?l.split(".").reduce(((e,l)=>e[l]),a.Z):null;return Object.entries(e).filter((([e])=>!t||t.includes(e))).sort((([e],[l])=>t?t.indexOf(e)-t.indexOf(l):0)).forEach((([,e])=>{Object.entries(e).forEach((([e,l])=>{e in n?Array.isArray(n[e])?n[e].push(l):n[e]=[n[e],l]:n[e]=l}))})),n}},5888:(e,l,n)=>{n.d(l,{Z:()=>a});const a={capital_ships:{player:["Transport","Miner","Battleship","CorpFlagship"],cerberus:["CerberusSentinel","CerberusGuardian","CerberusInterceptor","CerberusColossus","CerberusDestroyer","CerberusBomber","CerberusPhoenix","CerberusStorm","CerberusGhosts","CerberusHydra","Hydraling1","Hydraling2","CerberusCarrier"],darkCerberus:["DarkSentinel","DarkGuardian","DarkInterceptor","DarkColossus","DarkDestroyer","DarkBomber","DarkPhoenix"]},planets:{yellowstar:["desert_lv1","lava_lv1","water_lv1","terran_lv1","gas_lv1","terran_lv2","lava_lv2","water_lv2","gas_lv2","desert_lv2","lava_lv3","desert_lv3","water_lv3","terran_lv3","ice_variation1","ice_variation2"],redstar:["destroyed01","destroyed02","destroyed03","destroyed04","destroyed05","destroyed06","destroyed07","destroyed08","destroyed09","destroyed10"],whitestar:["whitestar1","whitestar2","whitestar_l1"]}}},5487:(e,l,n)=>{n.d(l,{Z:()=>a});const a={Cost:[0,50,200,400,800,1500,2e3,3e3,4e3,5e3,6e3,8e3,16e3,4e4,6e4,8e4,15e4,2e5,25e4,3e5,35e4,4e5,5e5,8e5,1e6,12e5,15e5,17e5,175e4,2e6,225e4,25e5,275e4,3e6,35e5,4e6,45e5,5e6,55e5,6e6,65e5,7e6,75e5,8e6,9e6,1e7,11e6,12e6,13e6,14e6,15e6],CreditStorage:[1e3,1400,1800,3e3,4e3,5e3,6e3,7e3,8e3,1e4,12e3,14e3,16e3,18e3,2e4,24e3,3e4,4e4,5e4,6e4,8e4,1e5,12e4,15e4,18e4,21e4,24e4,27e4,3e5,33e4,36e4,4e5,45e4,5e5,55e4,6e5,65e4,7e5,75e4,8e5,85e4,9e5,95e4,1e6,105e4,11e5,115e4,12e5,125e4,13e5,2e6],FuelStorage:[200,260,340,450,570,750,960,1250,1600,2e3,2400,2800,3200,3600,4e3,4400,4800,5e3,5100,5200,5300,5400,5500,5600,5700,5800,5900,6e3,6100,6200,6300,6400,6500,6600,6700,6800,6900,7e3,7100,7200,7300,7400,7500,7600,7700,7800,7900,8e3,8100,8200,9600],XPAward:[0,10,20,30,40,50,60,70,80,90,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1e3,1050,1100,1150,1200,1250,1300,1350,1400,1450,1500,1550,1550,1550,1550,1550,1550,1550,1550,1550,1550,1550,1550],CreditsPerHour:[1,2,3,4,5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,118],FuelPerHour:[10,10,10,10,10,11,11,12,12,13,14,16,18,20,23,26,29,32,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36],ShipmentsCRValuePerDay:[200,400,600,1e3,1400,1800,2e3,2200,2400,2600,2800,3e3,3050,3100,3150,3200,3250,3300,3350,3400,3450,3500,3550,3600,3700,3800,3900,4e3,4100,4200,4300,4400,4500,4600,5e3,5500,6e3,6500,7e3,7500,8e3,8500,9e3,9500,1e4,10100,10200,10300,10400,10500,12e3],TimeToUpgrade:[3,3,20,40,60,120,300,600,1200,1800,2400,3600,216e3,216e3,259200,302400,345600,388800,432e3,475200,518400,561600,604800,648e3,691200,734400,777600,820800,864e3,907200,950400,993600,1036800,108e4,1123200,1166400,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1728e3],CrystalsWeight:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],RSLevelReq:[null,null,null,null,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],Name:"planet_levels"}}}]);