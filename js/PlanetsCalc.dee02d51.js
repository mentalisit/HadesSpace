"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[530],{9367:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var r=a(6252),o=a(3577);const n={class:"topic"},l={class:"planetsCalc"},i={colspan:"3"},s={class:"btn-warp"},S={class:"btn-reset"},_=(0,r.Uk)(),I=["onChange"],u=["selected","disabled"];function c(e,t,a,c,D,T){const d=(0,r.up)("Head"),p=(0,r.up)("v-data"),C=(0,r.Q2)("t");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r._)("title",null,(0,o.zw)(D.title),1)])),_:1}),(0,r._)("h1",n,(0,o.zw)(D.title),1),(0,r._)("table",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(D.output.calculated,((e,t)=>((0,r.wg)(),(0,r.iD)("tr",{key:t},[(0,r._)("td",null,(0,o.zw)(T.formatKey(t)),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e,((e,a)=>((0,r.wg)(),(0,r.iD)("td",{key:t+a,class:(0,o.C_)(T.outputClassesTable(a,t))},(0,o.zw)(e.toLocaleString()),3)))),128))])))),128)),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(D.output.total,((e,t)=>((0,r.wg)(),(0,r.iD)("tr",{key:t,class:"total"},[(0,r._)("td",null,(0,o.zw)(T.formatKey(t)),1),(0,r._)("td",i,(0,o.zw)(T.formatValue(t,e)),1)])))),128))]),(0,r._)("div",s,[(0,r._)("div",S,[(0,r._)("button",{name:"plan",onClick:t[0]||(t[0]=(...e)=>T.reset&&T.reset(...e))},(0,o.zw)(e.$t("RESET_PLAN")),1),(0,r._)("button",{class:"btn-reset-all",name:"all",onClick:t[1]||(t[1]=(...e)=>T.reset&&T.reset(...e))},(0,o.zw)(e.$t("RESET_ALL")),1)])]),(0,r.Wm)(p,{data:{TID:"",TID2:D.planets.TID},"table-opts":{lvlColKey:"№"}},{"table-head":(0,r.w5)((()=>[(0,r.wy)((0,r._)("th",null,null,512),[[C,"LVL"]]),_,(0,r.wy)((0,r._)("th",null,null,512),[[C,"PLAN"]])])),"table-body":(0,r.w5)((({row:e})=>[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(["actually","plan"],(t=>(0,r._)("td",{key:t},[(0,r._)("select",{class:"select",onChange:a=>T.changeLvl(t,D.planets.Name[e],a.target.value)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(D.planets.MaxUpgradeLevel[e]+1,((a,n)=>((0,r.wg)(),(0,r.iD)("option",{key:t+a,selected:T.isSelected(t,e,n),disabled:T.isDisabled(t,e,n)},(0,o.zw)(n),9,u)))),128))],40,I)]))),64))])),_:1},8,["data"])])}var D=a(1232),T=a(6837),d=a(9922),p=a(4964),C=a(1131),R=a(9114),N=a(3322),E=a(9413);const{TradingStation:m}=C.Z,g=(0,E.Z)(d.Z,{filterByType:{path:"planets.yellowstar"}}),h={TID:g.TID,Name:g.Name,MaxUpgradeLevel:g.MaxUpgradeLevel},L="planetsCalc",B=["CreditStorage","FuelStorage","CreditsPerHour","FuelPerHour","ShipmentsCRValuePerDay"],M=["CreditStorageModifier","FuelStorageModifier","CreditIncomeModifier","FuelIncomeModifier","CreditShipmentModifier"],A=["Cost","TimeToUpgrade"],y=["actually","plan","result"],O={ShipmentsCRValuePerDay:"TotalShipmentCRPerDay",Cost:"Cost",TimeToUpgrade:"ConstructionTime"};for(let f=0;m.MaxOnOwnSolarSystem>f;f++)h.Name.push(`${m.Name}_${f}`),h.MaxUpgradeLevel.push(m.Cost.length),h.TID.push(m.TID);const P={components:{Head:D.Fb,VData:T.Z},data(){return{title:this.$t("PLANETS_CALC"),planets:h,output:{calculated:{},total:{}},storage:{actually:{},plan:{}}}},created(){if(localStorage.getItem(L))try{this.storage=JSON.parse(localStorage.getItem(L))}catch(e){localStorage.removeItem(L)}this.formatOpts={$t:this.$t.bind(this),$te:this.$te.bind(this)}},mounted(){this.updateOutput()},methods:{createCells(){B.forEach((e=>{const t={};y.forEach((e=>t[e]=0)),this.output.calculated[e]=t})),A.forEach((e=>{this.output.total[e]=0}))},formatKey(e){return(0,R.Z)(e,this.$route.name,this.formatOpts)},formatValue(e,t){return(0,N.Z)(e,t,g.Name,this.formatOpts)},isSelected(e,t,a){const r=h.Name[t];let o=this.storage.plan[r]||0;const n=this.storage.actually[r];return n>o&&(o=this.changeLvl("plan",r,n)),"plan"==e?a==o:this.storage[e][r]==a},isDisabled(e,t,a){const r=h.Name[t];if("plan"==e&&this.storage.actually)return a<this.storage.actually[r]},reset(e){if("all"==e.target.name){const e=confirm("Reset all? Ar u serious ?");if(!e)return;this.storage={actually:{},plan:{}}}else this.storage.plan?Object.keys(this.storage.plan).forEach((e=>{this.storage.plan[e]=this.storage.actually[e]})):this.storage.plan={};this.updateOutput()},changeLvl(e,t,a){return a=parseInt(a),this.storage[e][t]=a,this.updateOutput(),a},updateStorage(){localStorage.setItem(L,JSON.stringify(this.storage))},updateOutput(){const e=this.output.calculated,t=this.output.total;function a(t,a){Object.keys(a).forEach((r=>{const o=a[r]-1,n=h.Name.indexOf(r);a[r]&&Object.keys(e).forEach(((a,l)=>{let i,s;"result"==t?(i=e[a].plan,s=e[a].actually):(i=e[a][t]||0,M[l]?(s=p.Z[a][o]*g[M[l]][n]/100,r.includes("TradingStation")&&(s=0,a in O&&(s=m[O[a]][o]))):s=p.Z[a][o]),e[a][t]=i+s}))}))}function r(e){Object.keys(e.plan).forEach((a=>{0!=e.plan[a]&&Object.keys(t).forEach((r=>{const o=e.plan[a]-1,n=(e.actually[a]||0)-1,l=void 0==t[r]?0:t[r];let i=0;for(let e=n;o>e;e++){let t=p.Z[r][e+1]||0;a.includes("TradingStation")&&r in O&&(t=m[O[r]][e+1]||0),i+=t}t[r]=l+i}))}))}this.createCells(),this.updateStorage(),Object.keys(this.storage).forEach((e=>{Object.keys(this.storage[e]).length&&a(e,this.storage[e])})),Object.keys(e).forEach((t=>{e[t].plan=e[t].plan-e[t].actually})),a("result",this.storage.plan),r(this.storage)},outputClassesTable(e,t){if("plan"==e)return{"plan-plus":this.output.calculated[t].plan,hide:0==this.output.calculated[t].plan};if("result"==e){const e=this.output.calculated[t].actually<this.output.calculated[t].result,a=!this.output.total[Object.keys(this.output.total)[0]];return{"result-growth":e,"result-not-growth":!e,hide:a}}}}};var U=a(3744);const G=(0,U.Z)(P,[["render",c],["__scopeId","data-v-977a1b3e"]]),w=G},4964:(e,t,a)=>{a.d(t,{Z:()=>r});const r={Cost:[0,50,200,400,800,2e3,4e3,8e3,1e4,2e4,3e4,4e4,5e4,75e3,1e5,125e3,15e4,175e3,2e5,25e4,3e5,4e5,5e5,6e5,8e5,1e6,125e4,15e5,175e4,2e6,225e4,25e5,275e4,3e6,35e5,4e6,45e5,5e6,55e5,6e6,65e5,7e6,75e5,8e6,85e5,9e6,95e5,1e7,105e5,11e6],CreditStorage:[1e3,1400,1800,3e3,4e3,5e3,6e3,7500,1e4,13e3,16e3,2e4,24e3,28e3,35e3,45e3,65e3,9e4,13e4,17e4,21e4,25e4,29e4,33e4,37e4,41e4,45e4,49e4,53e4,57e4,61e4,65e4,69e4,73e4,77e4,81e4,85e4,89e4,93e4,97e4,101e4,105e4,109e4,113e4,117e4,121e4,125e4,129e4,133e4,137e4],FuelStorage:[200,260,340,450,570,750,960,1250,1600,2100,2750,3600,5e3,7e3,9e3,11e3,13e3,15e3,17e3,19e3,2e4,21e3,22e3,23e3,24e3,25e3,26e3,27e3,28e3,29e3,3e4,31e3,32e3,33e3,34e3,35e3,36e3,37e3,38e3,39e3,4e4,41e3,42e3,43e3,44e3,45e3,46e3,47e3,48e3,49e3],XPAward:[0,10,20,30,40,50,60,70,80,90,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1e3,1050,1100,1150,1200,1250,1300,1350,1400,1450,1500,1550,1550,1550,1550,1550,1550,1550,1550,1550,1550,1550],CreditsPerHour:[1,2,4,6,8,10,12,15,18,21,25,28,31,35,38,42,46,50,55,60,60,65,65,70,70,75,75,80,80,85,85,90,90,95,95,100,100,105,105,110,110,115,115,120,120,125,125,130,130,135],FuelPerHour:[16,16,16,16,16,18,18,20,20,22,22,24,24,26,26,28,28,30,30,32,32,34,34,36,36,38,38,40,40,40,40,40,40,40,40,40,40,40,40,40,42,42,42,42,44,44,44,44,44,46],ShipmentsCRValuePerDay:[3e3,3240,3499,3778,4080,4406,4758,5138,5549,5992,6471,6988,7547,8150,8802,9506,1e4,10700,11449,12250,13107,14024,15005,16055,17178,18380,19666,21042,22514,24089,25775,27579,29509,31574,33784,36148,38678,41385,44281,47380,48500,49600,50700,51800,52900,54e3,55100,56200,57300,58400],ShipmentsHydroValuePerDay:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],TimeToUpgrade:[3,3,30,60,120,300,1200,3600,14400,28800,57600,86400,129600,216e3,259200,302400,345600,388800,432e3,475200,518400,561600,604800,648e3,691200,734400,777600,820800,864e3,907200,950400,993600,1036800,108e4,1123200,1166400,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600],CrystalsWeight:[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40],Name:"planet_levels"}},1131:(e,t,a)=>{a.d(t,{Z:()=>r});const r={Shipyard:{Name:"Shipyard",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_SHIPYARD",TID_Description:"TID_BUILDING_SHIPYARD_DESCR",TID_INFO_SCREEN:"TID_BUILDING_SHIPYARD_DESCR",TID_UPGRADE:"TID_BLD_SHIPYARD_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_SHIPYARD",ConceptImage:"portrait_SpaceBuilding",Model:"shipyard",RequiredPlanetLevel:1,Cost:[800,1e3,5e3,2e4,8e4,2e5,5e5,1e6,2e6,5e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,ShipyardCapacity:[4,5,7,8,10,12,13,14,15,16],BuildNotifMode:0,ShowInStarLinks:1,ConstructionTime:[5,60,1800,3600,28800,86400,172800,259200,345600,432e3]},ShortRangeScanner:{Name:"ShortRangeScanner",CanBeBuilt:1,CanCancelBuild:1,CancelBuildRefundPct:90,SeparateBuildingPerLevel:1,AllowAdditionalBuildingsAtMaxLevel:1,MoveHydrogenCostPerSector:500,AllowMoveInSameSectorOnly:1,TID:"TID_BUILDING_SHORT_RANGE_SCANNER",TID_Description:"TID_BUILDING_SHORT_RANGE_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_SHORT_RANGE_SCANNER_INFO",ConceptImage:"portrait_SpaceBuilding",Model:"radar",RequiredPlanetLevel:3,Cost:[500,1e4,2e4,4e4,8e4,15e4,3e5,6e5,1e6,2e6,3e6,4e6],SectorUnlockCost:[2500,1e4,2e4,4e4,8e4,15e4,3e5,6e5,1e6,2e6,3e6,4e6],SectorUnlockTime:[3600,28800,57600,86400,129600,172800,259200,345600,432e3,518400,604800,604800],RequiresEmptySector:0,MaxPerSector:1,CanScanSectors:1,BuildNotifMode:2,ConstructionTime:[60,14400,43200,86400,86400,86400,86400,86400,86400,86400,86400,86400]},RedStarScanner:{Name:"RedStarScanner",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_REDSTAR_SCANNER",TID_Description:"TID_BUILDING_REDSTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_REDSTAR_SCANNER_INFO",TID_UPGRADE:"TID_BLD_REDSTAR_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_MISSION_BUILDING",ConceptImage:"portrait_JumpGate",Model:"redStarScanner",RequiredPlanetLevel:4,Cost:[1e3,2e3,2e4,6e4,12e4,25e4,1e6,2e6,4e6,8e6,12e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:0,StargateModel:"JumpGate",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[3,1800,14400,86400,172800,259200,345600,432e3,518400,604800,864e3]},ResearchStation:{Name:"ResearchStation",CanBeBuilt:1,MoveHydrogenCostPerSector:200,TID:"TID_BUILDING_RESEARCH",TID_Description:"TID_BUILDING_RESEARCH_DESCR",TID_INFO_SCREEN:"TID_BUILDING_RESEARCH_INFO",TID_UPGRADE:"TID_BLD_RESEARCH_STATION_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_RESEARCH_STATION",ConceptImage:"portrait_SpaceBuilding",Model:"ResearchStation",RequiredPlanetLevel:5,Cost:1e3,ResearchSlots:4,RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:5},DiplomacyCenter:{Name:"DiplomacyCenter",CanBeBuilt:1,SeparateBuildingPerLevel:1,MoveHydrogenCostPerSector:2e3,TID:"TID_BUILDING_DIPLOMACY_CENTER",TID_Description:"TID_BUILDING_DIPLOMACY_CENTER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_DIPLOMACY_CENTER_INFO",ConceptImage:"portrait_SpaceBuilding",Model:"embassy",RequiredPlanetLevel:7,Cost:[25e3,5e5,4e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:3,MaxPerSector:1,StargateModel:"JumpGate",BuildNotifMode:3,ShowInStarLinks:1,ConstructionTime:[28800,432e3,864e3]},TradingStation:{Name:"TradingStation",CanBeBuilt:1,CanBeRenamed:1,MoveHydrogenCostPerSector:3e3,TID:"TID_BUILDING_TRADINGSTATION",TID_Description:"TID_BUILDING_TRADINGSTATION_DESCR",TID_INFO_SCREEN:"TID_BUILDING_TRADINGSTATION_DESCR",ConceptImage:"portrait_SpaceBuilding",Model:"trade_station",RequiredPlanetLevel:13,Cost:[6e4,12e4,25e4,5e5,1e6,2e6,3e6,4e6,6e6,8e6],TotalShipmentCRPerDay:[5e3,7e3,9800,13720,19208,26891,37647,52705,73787,103301],RequiresEmptySector:1,MaxOnOwnSolarSystem:3,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[86400,172800,345600,432e3,518400,604800,691200,777600,864e3,950400]},WarpLaneHub:{Name:"WarpLaneHub",CanBeBuilt:1,SeparateBuildingPerLevel:1,AllowAdditionalBuildingsAtMaxLevel:1,BuyInPairs:1,MoveHydrogenCostPerSector:2e3,TID:"TID_BUILDING_WARPLANE_HUB",TID_Description:"TID_BUILDING_WARPLANE_HUB_DESCR",TID_INFO_SCREEN:"TID_BUILDING_WARPLANE_HUB_INFO",ConceptImage:"portrait_WarpLane",PrefabModel:"warpLaneHub",PrefabModel_BuildMenu:"warpLaneHub_BuildIcon",RequiredPlanetLevel:12,Cost:[5e4,5e4,1e5,1e5,2e5,2e5,4e5,4e5,8e5,8e5,15e5,15e5,3e6,3e6,5e6,5e6,6e6,6e6,7e6,7e6,8e6,8e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:24,MaxPerSector:8,IsWarpLane:1,OverrideMinAsteroidDistSquared:1e6,BuildNotifMode:1,ConstructionTime:[43200,43200,86400,86400,172800,172800,259200,259200,345600,345600,432e3,432e3,518400,518400,604800,604800,691200,691200,777600,777600,864e3,864e3]},Stargate:{Name:"Stargate",CanBeBuilt:0,TID:"TID_BUILDING_STARGATE",TID_Description:"TID_BUILDING_STARGATE_DESCR",TID_INFO_SCREEN:"TID_BUILDING_STARGATE_DESCR",ConceptImage:"portrait_JumpGate",IsStargate:1,RequiresEmptySector:0,OverrideMinAsteroidDistSquared:1e6,StargateModel:"JumpGate"},OrangeStarScanner:{Name:"OrangeStarScanner",CanBeBuilt:0,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_ORANGESTAR_SCANNER",TID_Description:"TID_BUILDING_ORANGESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_ORANGESTAR_SCANNER_INFO",ConceptImage:"portrait_JumpGate",Model:"redStarScanner",RequiredPlanetLevel:5,Cost:4e4,RequiresEmptySector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:1,StargateModel:"JumpGate",ConstructionTime:86400},WhiteStarScanner:{Name:"WhiteStarScanner",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BLD_WHITESTAR_SCANNER",TID_Description:"TID_BLD_WHITESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BLD_WHITESTAR_SCANNER_DESCR",TID_UPGRADE:"TID_BLD_REDSTAR_UPGRADE",ConceptImage:"portrait_JumpGate",Model:"whiteStarScanner",RequiredPlanetLevel:10,Cost:25e3,RequiresEmptySector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,StargateModel:"JumpGateWhiteStar",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:1},TimeModulator:{Name:"TimeModulator",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,AllowMoveInSameSectorOnly:1,TID:"TID_BLD_TIME_MODULATOR",TID_Description:"TID_BLD_TIME_MODULATOR_DESCR",TID_INFO_SCREEN:"TID_BLD_TIME_MODULATOR_INFO",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"timeModulator",PrefabModel_BuildMenu:"timeModulator_BuildIcon",RequiredPlanetLevel:6,Cost:[1e3,4e3,1e4,3e4,1e5,2e5,4e5,6e5,8e5,1e6,2e6,3e6,4e6,5e6,6e6,7e6],TimeSpeedupFactor:[15e3,17500,2e4,22500,25e3,27500,3e4,32500,35e3,37500,4e4,42500,45e3,5e4,55e3,6e4],TimeSpeedupMaxSeconds:600,TimeSpeedupRegenPerDay:1200,RequiresStarSector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[600,3600,28800,172800,345600,432e3,518400,604800,691200,777600,864e3,864e3,864e3,864e3,864e3,864e3],Model:"TimeModulator"},BlueStarScanner:{Name:"BlueStarScanner",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_BLUESTAR_SCANNER",TID_Description:"TID_BUILDING_BLUESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_BLUESTAR_SCANNER_INFO",TID_UPGRADE:"TID_BUILDING_BLUESTAR_SCANNER_INFO",ConceptImage:"portrait_Anomaly",Model:"blueStarScanner",RequiredPlanetLevel:9,Cost:2e4,RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:1,StargateModel:"JumpGate",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:3},ShipmentRelay:{Name:"ShipmentRelay",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BLD_RELAY",TID_Description:"TID_BLD_RELAY_DESCR",TID_INFO_SCREEN:"TID_BLD_RELAY_INFO",ConceptImage:"portrait_SpaceBuilding",Model:"shipmentRelay",RequiredPlanetLevel:10,Cost:[1e4,25e3,5e4,1e5,2e5,4e5,6e5,1e6,4e6,8e6],MaxOnOwnSolarSystem:1,MaxPerSector:1,TeleportShipmentsPerHr:[4,5,7,9,12,16,22,30,42,60],TeleportShipmentsDurationHr:[4,5,6,8,10,12,16,17,20,24],TeleportShipmentActivationFragments:[5,4,4,4,4,4,4,3,3,3],FragmentCapacity:[5,10,15,20,25,30,35,40,45,50],TeleportShipmentMaxSectors:[1,2,3,4,5,6,8,11,14,18],TSHydroCost:[50,100,250,500,750,1e3,2e3,3e3,4e3,5e3],BuildNotifMode:0,ShowInStarLinks:1,ConstructionTime:[14400,86400,172800,259200,345600,432e3,518400,604800,691200,777600]},DSS:{Name:"DSS",CanBeBuilt:0}}}}]);