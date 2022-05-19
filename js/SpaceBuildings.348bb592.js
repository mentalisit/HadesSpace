"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[142],{7786:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(6252),n=r(3577);const i={class:"container"},o={class:"list"},S=["href"];function s(e,t,r,s,l,_){const I=(0,a.up)("v-data"),D=(0,a.Q2)("t");return(0,a.wg)(),(0,a.iD)("div",i,[Object.keys(r.args.data).length>1?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("h2",null,(0,n.zw)(e.$t("CONTENT")),1),(0,a._)("div",o,[(0,a._)("ol",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.args.data,(({Name:e,TID:t})=>((0,a.wg)(),(0,a.iD)("li",{key:e},[(0,a.wy)((0,a._)("a",{href:`#${e}`},null,8,S),[[D,t]])])))),128))])])],64)):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.args.data,((e,t)=>((0,a.wg)(),(0,a.j4)(I,{key:t,data:e,"table-opts":r.args.tableOpts,"icon-dir":r.args.iconDir},null,8,["data","table-opts","icon-dir"])))),128))])}var l=r(4178);const _={components:{VData:l.Z},props:{args:{type:Object,default:()=>({}),required:!0}}};var I=r(3744);const D=(0,I.Z)(_,[["render",s],["__scopeId","data-v-46131bcd"]]),d=D},7346:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(6252),n=r(3577);const i={class:"portrait-container"},o=["src","alt"],S={class:"topic"};function s(e,t,r,s,l,_){const I=(0,a.up)("Head"),D=(0,a.up)("v-content");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a._)("title",null,(0,n.zw)(l.title),1)])),_:1}),(0,a._)("div",i,[r.portrait?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"portrait",src:r.portrait.src,alt:r.portrait.alt},null,8,o)):(0,a.kq)("",!0),(0,a._)("h1",S,(0,n.zw)(l.title),1)]),(0,a.Wm)(D,{args:r.contentArgs},null,8,["args"])])}var l=r(1232),_=r(7786);const I={components:{Head:l.Fb,VContent:_.Z},props:{contentArgs:{type:Object,requested:!0,default:()=>({})},titleLocKey:{type:String,requested:!0,default:null},portrait:{type:Object,requested:!1,default:null,validator:e=>["src","alt"].every((t=>t in e))}},data(){return{title:this.$t(this.titleLocKey)}}};var D=r(3744);const d=(0,D.Z)(I,[["render",s],["__scopeId","data-v-5d8d711a"]]),c=d},2811:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var a=r(6252);function n(e,t,r,n,i,o){const S=(0,a.up)("Page");return(0,a.wg)(),(0,a.j4)(S,{"title-loc-key":"TID_PRODUCTION_DLG_STATIONS","content-args":{data:i.data,iconDir:"game/SpaceBuildings"},portrait:{src:i.img,alt:"spacebuildings"}},null,8,["content-args","portrait"])}var i=r(7346),o=r(4007),S=r(1334),s=r(1131);s.Z.WarpLaneHub.Model=new o.Z("WarpLane"),s.Z.TimeModulator.Model=new o.Z("TimeModulator");const l={components:{Page:i.Z},data(){return{data:(0,S.Z)(s.Z,"spacebuildings.player"),img:r(6246)}}};var _=r(3744);const I=(0,_.Z)(l,[["render",n]]),D=I},1334:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(5888),n=r(553);function i(e,t,r){const i=t.split(".").reduce(((e,t)=>e[t]),a.Z);return(0,n.Z)(e,{filter:([e])=>i.includes(e),sort:([e],[t])=>i.indexOf(e)-i.indexOf(t),...r})}},5888:(e,t,r)=>{r.d(t,{Z:()=>a});const a={capital_ships:{player:["Transport","Miner","Battleship","CorpFlagship"],cerberus:["CerberusSentinel","CerberusGuardian","CerberusInterceptor","CerberusColossus","CerberusDestroyer","CerberusBomber","CerberusPhoenix","CerberusStorm","CerberusGhosts","CerberusHydra","Hydraling1","Hydraling2"],drones:["ShipmentDrone","MiningDrone","AlphaDrone","RelicDrone"]},planets:{yellowstar:["desert_lv1","lava_lv1","water_lv1","terran_lv1","gas_lv1","terran_lv2","lava_lv2","water_lv2","gas_lv2","desert_lv2","lava_lv3","desert_lv3","water_lv3","terran_lv3","ice_variation1","ice_variation2"],redstar:["destroyed01","destroyed02","destroyed03","destroyed04","destroyed05","destroyed06","destroyed07","destroyed08","destroyed09","destroyed10"],whitestar:["whitestar1","whitestar2","whitestar_l1"]},spacebuildings:{player:["Shipyard","ShortRangeScanner","RedStarScanner","ResearchStation","DiplomacyCenter","TradingStation","WarpLaneHub","WhiteStarScanner","TimeModulator","BlueStarScanner","ShipmentRelay"]},player_goals:{all:["SalvageArtifacts","DestroySentinels","DestroyGuardians","DestroyColossus","DestroyInterceptor","DestroyPhoenix","ReachInfluence","MineHydrogenInRS","UploadHydroRS","EMPPEnemyShips","RepairOtherPlayerShips","UseAlphaRocket","EntrustArtifacts","UseDestinyNoSanct","DeliverShipmentsBatch","UseShipmentComputer","UseTradeBoostOrBurst","UseShipmentDrone","UseCrunch","UseSalvage","UseShipmentBeam","UseBlastShield","UseMiningDrone","UseGenesis","UseOffload","EarnFragments","WinBSWithEMP1","WinBSWithEMP2","WinBSWithEMP3","WinBSWithRepair1","WinBSWithRepair2","WinBSWithRepair3","WinBSWithTimeWarp","WinBSWithStealth1","WinBSWithStealth2","WinBSWithFortify1","WinBSWithFortify2","WinBSWithSalvage1","WinBSWithSalvage2","WinBSWithSupress1","WinBSWithSupress2","WinBSWithImpulse1","WinBSWithImpulse2","WinBSWithAlphaRocket1","WinBSWithAlphaRocket2","WinBSWithDestiny","WinBSWithVengeance","WinBSWithDeltaRocket","WinBSWithBarrier","WinBSWithAlphaDrone","WinBSWithBond","WinBSWithOmegaRocket"],fixed:["MineHydrogenInRS","SalvageArtifacts","ReachInfluence","DeliverShipmentsBatch","EarnFragments","DestroySentinels","DestroyGuardians","DestroyColossus","DestroyInterceptor","DestroyPhoenix","UploadHydroRS","UseCrunch","UseMiningDrone","UseGenesis","UseBlastShield","EMPPEnemyShips","RepairOtherPlayerShips","UseAlphaRocket","EntrustArtifacts","UseDestinyNoSanct","UseSalvage","UseShipmentComputer","UseTradeBoostOrBurst","UseShipmentDrone","UseShipmentBeam","UseOffload","WinBSWithModule"]}}},1131:(e,t,r)=>{r.d(t,{Z:()=>a});const a={Shipyard:{Name:"Shipyard",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_SHIPYARD",TID_Description:"TID_BUILDING_SHIPYARD_DESCR",TID_INFO_SCREEN:"TID_BUILDING_SHIPYARD_DESCR",TID_UPGRADE:"TID_BLD_SHIPYARD_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_SHIPYARD",ConceptImage:"portrait_SpaceBuilding",Model:"shipyard",RequiredPlanetLevel:1,Cost:[800,1e3,5e3,2e4,8e4,2e5,5e5,1e6,2e6,5e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,ShipyardCapacity:[4,5,7,8,10,12,13,14,15,16],BuildNotifMode:0,ShowInStarLinks:1,ConstructionTime:[5,60,1800,3600,28800,86400,172800,259200,345600,432e3]},ShortRangeScanner:{Name:"ShortRangeScanner",CanBeBuilt:1,CanCancelBuild:1,CancelBuildRefundPct:90,SeparateBuildingPerLevel:1,AllowAdditionalBuildingsAtMaxLevel:1,MoveHydrogenCostPerSector:500,AllowMoveInSameSectorOnly:1,TID:"TID_BUILDING_SHORT_RANGE_SCANNER",TID_Description:"TID_BUILDING_SHORT_RANGE_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_SHORT_RANGE_SCANNER_INFO",ConceptImage:"portrait_SpaceBuilding",Model:"radar",RequiredPlanetLevel:3,Cost:[500,1e4,2e4,4e4,8e4,15e4,3e5,6e5,1e6,2e6,3e6,4e6],SectorUnlockCost:[2500,1e4,2e4,4e4,8e4,15e4,3e5,6e5,1e6,2e6,3e6,4e6],SectorUnlockTime:[3600,28800,57600,86400,129600,172800,259200,345600,432e3,518400,604800,604800],RequiresEmptySector:0,MaxPerSector:1,CanScanSectors:1,BuildNotifMode:2,ConstructionTime:[60,14400,43200,86400,86400,86400,86400,86400,86400,86400,86400,86400]},RedStarScanner:{Name:"RedStarScanner",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_REDSTAR_SCANNER",TID_Description:"TID_BUILDING_REDSTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_REDSTAR_SCANNER_INFO",TID_UPGRADE:"TID_BLD_REDSTAR_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_MISSION_BUILDING",ConceptImage:"portrait_JumpGate",Model:"redStarScanner",RequiredPlanetLevel:4,Cost:[1e3,2e3,2e4,6e4,12e4,25e4,1e6,2e6,4e6,8e6,12e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:0,StargateModel:"JumpGate",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[3,1800,14400,86400,172800,259200,345600,432e3,518400,604800,864e3]},ResearchStation:{Name:"ResearchStation",CanBeBuilt:1,MoveHydrogenCostPerSector:200,TID:"TID_BUILDING_RESEARCH",TID_Description:"TID_BUILDING_RESEARCH_DESCR",TID_INFO_SCREEN:"TID_BUILDING_RESEARCH_INFO",TID_UPGRADE:"TID_BLD_RESEARCH_STATION_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_RESEARCH_STATION",ConceptImage:"portrait_SpaceBuilding",Model:"ResearchStation",RequiredPlanetLevel:5,Cost:1e3,ResearchSlots:4,RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:5},DiplomacyCenter:{Name:"DiplomacyCenter",CanBeBuilt:1,SeparateBuildingPerLevel:1,MoveHydrogenCostPerSector:2e3,TID:"TID_BUILDING_DIPLOMACY_CENTER",TID_Description:"TID_BUILDING_DIPLOMACY_CENTER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_DIPLOMACY_CENTER_INFO",ConceptImage:"portrait_SpaceBuilding",Model:"embassy",RequiredPlanetLevel:7,Cost:[25e3,5e5,4e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:3,MaxPerSector:1,StargateModel:"JumpGate",BuildNotifMode:3,ShowInStarLinks:1,ConstructionTime:[28800,432e3,864e3]},TradingStation:{Name:"TradingStation",CanBeBuilt:1,CanBeRenamed:1,MoveHydrogenCostPerSector:3e3,TID:"TID_BUILDING_TRADINGSTATION",TID_Description:"TID_BUILDING_TRADINGSTATION_DESCR",TID_INFO_SCREEN:"TID_BUILDING_TRADINGSTATION_DESCR",ConceptImage:"portrait_SpaceBuilding",Model:"trade_station",RequiredPlanetLevel:13,Cost:[6e4,12e4,25e4,5e5,1e6,2e6,3e6,4e6,6e6,8e6],TotalShipmentCRPerDay:[5e3,7e3,9800,13720,19208,26891,37647,52705,73787,103301],RequiresEmptySector:1,MaxOnOwnSolarSystem:3,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[86400,172800,345600,432e3,518400,604800,691200,777600,864e3,950400]},WarpLaneHub:{Name:"WarpLaneHub",CanBeBuilt:1,SeparateBuildingPerLevel:1,AllowAdditionalBuildingsAtMaxLevel:1,BuyInPairs:1,MoveHydrogenCostPerSector:2e3,TID:"TID_BUILDING_WARPLANE_HUB",TID_Description:"TID_BUILDING_WARPLANE_HUB_DESCR",TID_INFO_SCREEN:"TID_BUILDING_WARPLANE_HUB_INFO",ConceptImage:"portrait_WarpLane",PrefabModel:"warpLaneHub",PrefabModel_BuildMenu:"warpLaneHub_BuildIcon",RequiredPlanetLevel:12,Cost:[5e4,5e4,1e5,1e5,2e5,2e5,4e5,4e5,8e5,8e5,15e5,15e5,3e6,3e6,5e6,5e6,6e6,6e6,7e6,7e6,8e6,8e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:24,MaxPerSector:8,IsWarpLane:1,OverrideMinAsteroidDistSquared:1e6,BuildNotifMode:1,ConstructionTime:[43200,43200,86400,86400,172800,172800,259200,259200,345600,345600,432e3,432e3,518400,518400,604800,604800,691200,691200,777600,777600,864e3,864e3]},Stargate:{Name:"Stargate",CanBeBuilt:0,TID:"TID_BUILDING_STARGATE",TID_Description:"TID_BUILDING_STARGATE_DESCR",TID_INFO_SCREEN:"TID_BUILDING_STARGATE_DESCR",ConceptImage:"portrait_JumpGate",IsStargate:1,RequiresEmptySector:0,OverrideMinAsteroidDistSquared:1e6,StargateModel:"JumpGate"},OrangeStarScanner:{Name:"OrangeStarScanner",CanBeBuilt:0,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_ORANGESTAR_SCANNER",TID_Description:"TID_BUILDING_ORANGESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_ORANGESTAR_SCANNER_INFO",ConceptImage:"portrait_JumpGate",Model:"redStarScanner",RequiredPlanetLevel:5,Cost:4e4,RequiresEmptySector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:1,StargateModel:"JumpGate",ConstructionTime:86400},WhiteStarScanner:{Name:"WhiteStarScanner",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BLD_WHITESTAR_SCANNER",TID_Description:"TID_BLD_WHITESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BLD_WHITESTAR_SCANNER_DESCR",TID_UPGRADE:"TID_BLD_REDSTAR_UPGRADE",ConceptImage:"portrait_JumpGate",Model:"whiteStarScanner",RequiredPlanetLevel:10,Cost:25e3,RequiresEmptySector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,StargateModel:"JumpGateWhiteStar",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:1},TimeModulator:{Name:"TimeModulator",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,AllowMoveInSameSectorOnly:1,TID:"TID_BLD_TIME_MODULATOR",TID_Description:"TID_BLD_TIME_MODULATOR_DESCR",TID_INFO_SCREEN:"TID_BLD_TIME_MODULATOR_INFO",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"timeModulator",PrefabModel_BuildMenu:"timeModulator_BuildIcon",RequiredPlanetLevel:6,Cost:[1e3,4e3,1e4,3e4,1e5,2e5,4e5,6e5,8e5,1e6,2e6,3e6,4e6,5e6,6e6,7e6],TimeSpeedupFactor:[15e3,17500,2e4,22500,25e3,27500,3e4,32500,35e3,37500,4e4,42500,45e3,5e4,55e3,6e4],TimeSpeedupMaxSeconds:600,TimeSpeedupRegenPerDay:1200,RequiresStarSector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[600,3600,28800,172800,345600,432e3,518400,604800,691200,777600,864e3,864e3,864e3,864e3,864e3,864e3],Model:"TimeModulator"},BlueStarScanner:{Name:"BlueStarScanner",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_BLUESTAR_SCANNER",TID_Description:"TID_BUILDING_BLUESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_BLUESTAR_SCANNER_INFO",TID_UPGRADE:"TID_BUILDING_BLUESTAR_SCANNER_INFO",ConceptImage:"portrait_Anomaly",Model:"blueStarScanner",RequiredPlanetLevel:9,Cost:2e4,RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:1,StargateModel:"JumpGate",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:3},ShipmentRelay:{Name:"ShipmentRelay",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BLD_RELAY",TID_Description:"TID_BLD_RELAY_DESCR",TID_INFO_SCREEN:"TID_BLD_RELAY_INFO",ConceptImage:"portrait_SpaceBuilding",Model:"shipmentRelay",RequiredPlanetLevel:10,Cost:[1e4,25e3,5e4,1e5,2e5,4e5,6e5,1e6,4e6,8e6],MaxOnOwnSolarSystem:1,MaxPerSector:1,TeleportShipmentsPerHr:[4,5,7,9,12,16,22,30,42,60],TeleportShipmentsDurationHr:[4,5,6,8,10,12,16,17,20,24],TeleportShipmentActivationFragments:[5,4,4,4,4,4,4,3,3,3],FragmentCapacity:[5,10,15,20,25,30,35,40,45,50],TeleportShipmentMaxSectors:[1,2,3,4,5,6,8,11,14,18],TSHydroCost:[50,100,250,500,750,1e3,2e3,3e3,4e3,5e3],BuildNotifMode:0,ShowInStarLinks:1,ConstructionTime:[14400,86400,172800,259200,345600,432e3,518400,604800,691200,777600]},DSS:{Name:"DSS",CanBeBuilt:0}}}}]);