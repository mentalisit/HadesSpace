"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[130],{97786:(e,r,i)=>{i.d(r,{Z:()=>D});var t=i(66252),a=i(3577);const o={class:"container"},l={class:"list"},d=["href"];function n(e,r,i,n,S,s){const _=(0,t.up)("v-data"),p=(0,t.Q2)("t");return(0,t.wg)(),(0,t.iD)("div",o,[Object.keys(i.args.data).length>1?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t._)("h2",null,(0,a.zw)(e.$t("CONTENT")),1),(0,t._)("div",l,[(0,t._)("ol",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.args.data,(({Name:e,TID:r})=>((0,t.wg)(),(0,t.iD)("li",{key:e},[(0,t.wy)((0,t._)("a",{href:`#${e}`},null,8,d),[[p,r]])])))),128))])])],64)):(0,t.kq)("",!0),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.args.data,((e,r)=>((0,t.wg)(),(0,t.j4)(_,{key:r,data:e,"table-opts":i.args.tableOpts,"icon-dir":i.args.iconDir},null,8,["data","table-opts","icon-dir"])))),128))])}var S=i(64557);const s={components:{VData:S.Z},props:{args:{type:Object,default:()=>({}),required:!0}}};var _=i(83744);const p=(0,_.Z)(s,[["render",n],["__scopeId","data-v-46131bcd"]]),D=p},78558:(e,r,i)=>{i.d(r,{Z:()=>M});var t=i(66252),a=i(3577);const o={class:"portrait-container"},l=["src","alt"],d={class:"topic"};function n(e,r,i,n,S,s){const _=(0,t.up)("Head"),p=(0,t.up)("v-content");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t._)("title",null,(0,a.zw)(S.title),1)])),_:1}),(0,t._)("div",o,[i.portrait?((0,t.wg)(),(0,t.iD)("img",{key:0,class:"portrait",src:i.portrait.src,alt:i.portrait.alt},null,8,l)):(0,t.kq)("",!0),(0,t._)("h1",d,(0,a.zw)(S.title),1)]),(0,t.WI)(e.$slots,"default",{},void 0,!0),(0,t.Wm)(p,{args:i.contentArgs},null,8,["args"])])}var S=i(21232),s=i(97786);const _={components:{Head:S.Fb,VContent:s.Z},props:{contentArgs:{type:Object,requested:!0,default:()=>({})},titleLocKey:{type:String,requested:!0,default:null},portrait:{type:Object,requested:!1,default:null,validator:e=>["src","alt"].every((r=>r in e))}},data(){return{title:this.$t(this.titleLocKey)}}};var p=i(83744);const D=(0,p.Z)(_,[["render",n],["__scopeId","data-v-3776eae5"]]),M=D},29413:(e,r,i)=>{i.d(r,{Z:()=>a});var t=i(85888);function a(e,{filterByType:{path:r}}){const i={},a=r?r.split(".").reduce(((e,r)=>e[r]),t.Z):null;return Object.entries(e).filter((([e])=>!a||a.includes(e))).sort((([e],[r])=>a?a.indexOf(e)-a.indexOf(r):0)).forEach((([,e])=>{Object.entries(e).forEach((([e,r])=>{e in i?Array.isArray(i[e])?i[e].push(r):i[e]=[i[e],r]:i[e]=r}))})),i}},85888:(e,r,i)=>{i.d(r,{Z:()=>t});const t={capital_ships:{player:["Transport","Miner","Battleship","CorpFlagship"],cerberus:["CerberusSentinel","CerberusGuardian","CerberusInterceptor","CerberusColossus","CerberusDestroyer","CerberusBomber","CerberusPhoenix","CerberusStorm","CerberusGhosts","CerberusHydra","Hydraling1","Hydraling2","CerberusCarrier"],darkCerberus:["DarkSentinel","DarkGuardian","DarkInterceptor","DarkColossus","DarkDestroyer","DarkBomber","DarkPhoenix"]},planets:{yellowstar:["desert_lv1","lava_lv1","water_lv1","terran_lv1","gas_lv1","terran_lv2","lava_lv2","water_lv2","gas_lv2","desert_lv2","lava_lv3","desert_lv3","water_lv3","terran_lv3","ice_variation1","ice_variation2"],redstar:["destroyed01","destroyed02","destroyed03","destroyed04","destroyed05","destroyed06","destroyed07","destroyed08","destroyed09","destroyed10"],whitestar:["whitestar1","whitestar2","whitestar_l1"]}}},29922:(e,r,i)=>{i.d(r,{Z:()=>t});const t={desert_lv1:{Name:"desert_lv1",TID:"TID_PLANET_DESERT_1",TID_Description:"TID_PLANET_DESERT_DESCR",PlanetSize:100,ModelFolders:["desert","desert02","desert03","desert04"],MaxUpgradeLevel:15,CreditIncomeModifier:70,FuelIncomeModifier:50,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:70,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:10,ShipmentsPerHour:80},desert_lv2:{Name:"desert_lv2",TID:"TID_PLANET_DESERT_2",TID_Description:"TID_PLANET_DESERT_DESCR",PlanetSize:200,ModelFolders:["desert05","desert06","desert07","desert08"],MaxUpgradeLevel:35,CreditIncomeModifier:80,FuelIncomeModifier:0,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:75,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:24,ShipmentsPerHour:200},desert_lv3:{Name:"desert_lv3",TID:"TID_PLANET_DESERT_3",TID_Description:"TID_PLANET_DESERT_DESCR",PlanetSize:280,ModelFolders:["desert09","desert10","desert11","desert12"],MaxUpgradeLevel:50,CreditIncomeModifier:90,FuelIncomeModifier:0,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:85,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:36,ShipmentsPerHour:300},lava_lv1:{Name:"lava_lv1",TID:"TID_PLANET_LAVA_1",TID_Description:"TID_PLANET_LAVA_DESCR",PlanetSize:100,ModelFolders:["fire","fire01","fire02","fire03"],MaxUpgradeLevel:15,CreditIncomeModifier:70,FuelIncomeModifier:50,CreditStorageModifier:100,FuelStorageModifier:0,CreditShipmentModifier:90,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:15,ShipmentsPerHour:120},lava_lv2:{Name:"lava_lv2",TID:"TID_PLANET_LAVA_2",TID_Description:"TID_PLANET_LAVA_DESCR",PlanetSize:180,ModelFolders:["fire04","fire05","fire06","fire07"],MaxUpgradeLevel:35,CreditIncomeModifier:80,FuelIncomeModifier:60,CreditStorageModifier:100,FuelStorageModifier:0,CreditShipmentModifier:95,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:24,ShipmentsPerHour:200},lava_lv3:{Name:"lava_lv3",TID:"TID_PLANET_LAVA_3",TID_Description:"TID_PLANET_LAVA_DESCR",PlanetSize:300,ModelFolders:["fire08","fire09","fire10"],MaxUpgradeLevel:50,CreditIncomeModifier:90,FuelIncomeModifier:70,CreditStorageModifier:100,FuelStorageModifier:0,CreditShipmentModifier:100,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:36,ShipmentsPerHour:300},water_lv1:{Name:"water_lv1",TID:"TID_PLANET_WATER_1",TID_Description:"TID_PLANET_WATER_DESCR",PlanetSize:140,ModelFolders:["water","water02","water03","water04"],MaxUpgradeLevel:15,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:95,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:18,ShipmentsPerHour:140},water_lv2:{Name:"water_lv2",TID:"TID_PLANET_WATER_2",TID_Description:"TID_PLANET_WATER_DESCR",PlanetSize:240,ModelFolders:["water05","water06","water07","water08"],MaxUpgradeLevel:35,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:100,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:24,ShipmentsPerHour:200},water_lv3:{Name:"water_lv3",TID:"TID_PLANET_WATER_3",TID_Description:"TID_PLANET_WATER_DESCR",PlanetSize:320,ModelFolders:["water09","water10","water11","water12"],MaxUpgradeLevel:50,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:105,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:38,ShipmentsPerHour:320},terran_lv1:{Name:"terran_lv1",TID:"TID_PLANET_TERRAN_1",TID_Description:"TID_PLANET_TERRAN_DESCR",PlanetSize:120,ModelFolders:["terran01","terran02","terran03","terran04"],MaxUpgradeLevel:15,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:115,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:18,ShipmentsPerHour:150},terran_lv2:{Name:"terran_lv2",TID:"TID_PLANET_TERRAN_2",TID_Description:"TID_PLANET_TERRAN_DESCR",PlanetSize:210,ModelFolders:["terran05","terran06","terran07","terran08"],MaxUpgradeLevel:35,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:120,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:27,ShipmentsPerHour:220},terran_lv3:{Name:"terran_lv3",TID:"TID_PLANET_TERRAN_3",TID_Description:"TID_PLANET_TERRAN_DESCR",PlanetSize:290,ModelFolders:["terran09","terran10","terran11","terran12"],MaxUpgradeLevel:50,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:125,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:35,ShipmentsPerHour:300},gas_lv1:{Name:"gas_lv1",TID:"TID_PLANET_GAS_1",TID_Description:"TID_PLANET_GAS_DESCR",PlanetSize:200,ModelFolders:["gas01","gas05","gas06","gas07","gas09","gas13"],MaxUpgradeLevel:20,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:120,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:22,ShipmentsPerHour:180},gas_lv2:{Name:"gas_lv2",TID:"TID_PLANET_GAS_2",TID_Description:"TID_PLANET_GAS_DESCR",PlanetSize:300,ModelFolders:["gas02","gas03","gas04","gas08","gas10","gas11","gas12"],MaxUpgradeLevel:50,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:125,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:40,ShipmentsPerHour:320},ice:{Name:"ice",TID:"TID_PLANET_ICE",TID_Description:"TID_PLANET_ICE_DESCR",PlanetSize:185,ModelFolders:["ice01","ice02","ice03","ice04"],MaxUpgradeLevel:50,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:140,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:48,ShipmentsPerHour:400},destroyed01:{Name:"destroyed01",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed02",RedStarDisplayLevel:1,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},destroyed02:{Name:"destroyed02",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed03",RedStarDisplayLevel:2,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},destroyed03:{Name:"destroyed03",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed06",RedStarDisplayLevel:3,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},destroyed04:{Name:"destroyed04",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed07",RedStarDisplayLevel:4,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},destroyed05:{Name:"destroyed05",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed13",RedStarDisplayLevel:5,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},ice_variation1:{Name:"ice_variation1",TID:"TID_PLANET_ICE",TID_Description:"TID_PLANET_ICE_DESCR",PlanetSize:210,ModelFolders:["ice05","ice06","ice07","ice08"],MaxUpgradeLevel:50,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:140,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:40,ShipmentsPerHour:320},ice_variation2:{Name:"ice_variation2",TID:"TID_PLANET_ICE",TID_Description:"TID_PLANET_ICE_DESCR",PlanetSize:275,ModelFolders:["ice09","ice10","ice11","ice12"],MaxUpgradeLevel:50,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:140,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:50,ShipmentsPerHour:420},destroyed06:{Name:"destroyed06",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed14",RedStarDisplayLevel:6,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},whitestar1:{Name:"whitestar1",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_WHITE_STAR_PLANET_DESCR",PlanetSize:100,ModelFolders:["destroyed20","destroyed21","destroyed22","destroyed23"],RedStarDisplayLevel:10,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_PlanetWhiteStar",MaxShipments:12,ShipmentsPerHour:0,TicksPerRelic:720,HydrogenForRelic:150},destroyed07:{Name:"destroyed07",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed15",RedStarDisplayLevel:7,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},whitestar2:{Name:"whitestar2",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_WHITE_STAR_PLANET_DESCR",PlanetSize:100,ModelFolders:["destroyed16","destroyed17","destroyed18","destroyed19"],RedStarDisplayLevel:5,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_PlanetWhiteStar",MaxShipments:12,ShipmentsPerHour:0,TicksPerRelic:2400,HydrogenForRelic:300},destroyed08:{Name:"destroyed08",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed08",RedStarDisplayLevel:8,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},destroyed09:{Name:"destroyed09",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed09",RedStarDisplayLevel:9,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},destroyed10:{Name:"destroyed10",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed10",RedStarDisplayLevel:10,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},whitestar_l1:{Name:"whitestar_l1",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_WHITE_STAR_PLANET_DESCR",PlanetSize:100,ModelFolders:["desert05","desert06","desert07","desert08"],RedStarDisplayLevel:1,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_PlanetWhiteStar",MaxShipments:12,ShipmentsPerHour:0,TicksPerRelic:2400,HydrogenForRelic:500},destroyed11:{Name:"destroyed11",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed24",RedStarDisplayLevel:11,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100}}},96535:(e,r,i)=>{i.d(r,{Z:()=>t});const t={YellowStar:{Name:"YellowStar",HexGridSizeX:3,HexGridSizeY:3,HexGridMaxRadius:3,HexCellEdgeSize:4e3,Lifetime:0,NumPlayersWithAccess:0,IsHome:1,Star:"YellowStar",TID:"TID_YELLOW_STAR",TID_Description:"TID_YELLOW_STAR_DESCR",ConceptImage:"portrait_YellowStar",Models:["Home_Star","Home_Star_1","Home_Star_2","Home_Star_3","Home_Star_4","Home_Star_5","Home_Star_6","Home_Star_7","Home_Star_8"],SecurityRating:0,Icon:"star_yellow"},RedStar:{Name:"RedStar",TID:"TID_RED_STAR",TID_Description:"TID_RED_STAR_INFO",ConceptImage:"portrait_RedStar",Models:["Red_Star","Red_Star_1","Red_Star_2","Red_Star_3","Red_Star_4","Red_Star_5","Red_Star_6","Red_Star_7","Red_Star_8","Red_Star_9","Red_Star_10","Red_Star_11"],SecurityRating:0,Icon:"star_red",SupernovaFX:"RedStarExplode_FX",SupernovaFXSpawnTimeSec:3,FixedSector:[null,null,null,null,null,null,null,null,null,null,"TutorialRedStar","Mine_Risk0_Lv1"],HexGridSizeX:[0,1,1,2,2,2,2,2,3,3,3,3],HexGridSizeY:[1,1,1,2,2,2,2,2,3,3,3,4],HexGridMaxRadius:[1,1,1,2,2,3,3,3,3,3,3,4],HexCellEdgeSize:[1800,2300,2500,2300,2500,2250,2300,2300,2300,2300,2300,2300],Lifetime:900,NumPlayersWithAccess:[1,2,2,4,4,4,4,4,4,4,4,4],MaxBattleshipsPerPlayer:[1,1,2,2,2,3,3,3,3,3,3,3],Star:"RedStar",HydrogenSearchCost:[0,50,100,225,350,500,750,1200,1800,2500,3500,4e3],CRAsteroidAmt:[0,0,4e3,1e4,2e4,5e4,75e3,1e5,15e4,225e3,3e5,4e5],NumMaxPlanets:[null,2,2,3,3,4,4,4,4,5,6,7],LowerPlanetsMinLevel:[null,1,1,1,1,2,2,3,4,4,4,5],MaxInfluenceLoss:[null,5,10,15,15,20,20,25,25,30,30,30],MaxInfluenceGain:[null,30,40,50,60,70,80,100,125,150,200,200],DestroyersToSpawn:[null,null,null,null,null,null,1,2,3,4,5,6],MinBombers:[null,null,null,null,null,null,null,3,5,6,9,10],MaxPlanetBomberCoverage:[null,null,null,null,null,null,null,3,3,4,6,7],MaxGateBomberCoverage:[null,null,null,null,null,null,null,1,2,2,3,4],GhostSpawnSecs:[null,null,null,null,null,null,null,null,null,null,[90,80,70,65,60,60,60,50,50,45,45,45,40,40,35,35,35,30],[90,80,70,65,60,60,60,50,50,45,45,45,40,40,35,35,35,30]],GhostSpawner:[null,null,null,null,null,null,null,null,null,null,0,1],DisableRSSearchDuringTutorial:1,WarnOnSRSPlacementMinNumNeighbors:3,PrivateRSEventClientDisplayMode:2,SafeInterceptorInPublicRS:1,NoCerbBondTeleportPRS:1,PubRSEMPReqEnemies:1,RSPublicLateJoin_TimeAvailable:180,RSPublicLateJoin_ClientCacheExpiry:30,RSPublicLateJoin_MinStarLevel:5,NumLowerPlanets:[null,0,1,2,[2,3],[2,3],[2,3],[2,3],[3,4],[3,4],[4,5],[5,6]],MedRiskMining:[null,[1,2],[1,3],[2,4],[4,5],[5,6],[5,6],[6,7],[8,11],[6,8],[6,8],[7,9]],HighRiskMining:[null,0,1,[1,2],[2,4],[3,4],[3,4],[2,3],[3,4],[5,6],[7,9],[8,10]],Influence:[null,[0,150],[80,500],[550,1500],[1100,3e3],[1900,6e3],[2900,11e3],[3900,18e3],[6900,26e3],[9900,36e3],[12400,8e4],[15e3,14e4]],RegularInfuenceRange:[null,[0,100],[100,400],[400,1200],[1200,2500],[2500,5e3],[5500,1e4],[1e4,16e3],[16e3,24e3],[24e3,34e3],[34e3,6e4],[6e4,12e4]],InfluenceAwardThreshold:[null,[10,30],[20,80],[40,225],[100,600],[200,1500],[400,2400],[600,3200],[800,5200],[1e3,8e3],[1200,13500],[2500,32e3]]},BlueStar:{Name:"BlueStar",TID:"TID_BLUE_STAR",TID_Description:"TID_BLUE_STAR_INFO",ConceptImage:"portrait_BlueStar",Models:"Blue_Star",SecurityRating:2,Icon:"star_blue",SupernovaFX:"BlueStarExplode_FX",SupernovaFXSpawnTimeSec:3,HexGridSizeX:3,HexGridSizeY:3,HexGridMaxRadius:3,HexCellEdgeSize:1900,Lifetime:325,NumPlayersWithAccess:5,MaxBattleshipsPerPlayer:3,Star:"BlueStar",HydrogenSearchCost:750,CollapseAreaSize:12500,CollapseReductionPerCycle:[937,666,500],CycleTicks:100,StageStartSec:[160,260],StarSectorDPS:150,StarSectorNavpoints:3,StarSectorNavpointDistance:[1e3,1300],BlueStar_CRRewardRate:90,BlueStar_CRRewardWinLimit:1,BlueStar_CRRewardWinLimitPeriod:86400,BlueStar_HydroPctPerMatch:10,BlueStar_HydroPctPerPos:[100,60,25,10,0],BlueStar_MaxHydroPerDayPct:25,BlueStar_RankedMatchesPerDay:3,BlueStar_Fragments:[12,8,5,3,0],BlueStar_SPFactor:25,MedRiskMining:[10,14],HighRiskMining:[7,9]},GreenStar:{Name:"GreenStar",TID:"TID_TODO",TID_Description:"TID_TODO",ConceptImage:"portrait_YellowStar",Models:"Green_Star",SecurityRating:0,Icon:"star_yellow"},WhiteStar:{Name:"WhiteStar",TID:"TID_WHITE_STAR",TID_Description:"TID_WHITE_STAR_INFO",ConceptImage:"portrait_WhiteStar",Models:["White_Star","White_Star_02"],SecurityRating:1,Icon:"star_white",TimeSlowdownFactor:600,PreparationTimeHours:12,SupernovaFX:"WhiteStarExplode_FX",SupernovaFXSpawnTimeSec:7,HexGridSizeX:3,HexGridSizeY:3,HexGridMaxRadius:3,HexCellEdgeSize:2500,Lifetime:720,Star:"WhiteStar",PlayerNumberBrackets:[8,12,16],HQPlanetsPerBracket:[1,2,3,5],LQPlanetsPerBracket:[2,4,4,6],ExtraAsteroidSpawnTick:[720,1440,1440],ExtraAsteroidSpawnRingDistance:[2,1,1],ExtraAsteroidSpawnAmt:[800,3e3,3e3],FleetDepartTimeInSeconds_WS:600,MaxWaypointsWS:5,WSMaxBSPerPlayer:1,WSMaxOtherPerPlayer:1,WSLostBSTimeCooldown:64800,WSLostOtherTimeCooldown:64800,WSJumpBSTimeCooldown:7200,WSJumpOtherTimeCooldown:7200,WSBucketSizes:[5,10,15],WSHQAsteroidsPerBucket:[4,6,8],DontAllowUseOfEnemyWSGate:1,WSShipXPCollectEnabled:0,WSShipMinXP:1e3,WSShipXPEventClientDisplayMode:0,WSShipEventTopBrackets:[3,20,200],WSShipEventCRRewards:[8e3,3e3,1e3],WSShipXPEventVersion:2,WSScoreDamageModifier:1,WSScoreMiningModifier:5,WSScoreTransportModifier:800,Thresholds:[[5e3,15e3,4e4],[3e4,6e4,9e4],[105e3,24e4,36e4]],HighRiskMining:[4,6]},OrangeStar:{Name:"OrangeStar",TID:"TID_TODO",TID_Description:"TID_TODO",ConceptImage:"portrait_YellowStar",Models:"Orange_Star",SecurityRating:2,Icon:"star_yellow",HexGridSizeX:1,HexGridSizeY:1,HexGridMaxRadius:1,HexCellEdgeSize:2e3,Lifetime:900,MaxBattleshipsPerPlayer:3,Star:"OrangeStar",HydrogenSearchCost:500,NumMaxPlanets:1,MaxInfluenceLoss:15,MaxInfluenceGain:50,Players:[2],NumLowerPlanets:[3,4],MedRiskMining:[4,5],HighRiskMining:[3,4],RegularInfuenceRange:[2900,4e3],InfluenceAwardThreshold:[500,1700]},RedStarLarge:{Name:"RedStarLarge",TID:"TID_RED_STAR",TID_Description:"TID_RED_STAR_INFO",ConceptImage:"portrait_RedStar",Models:"Red_StarLarge",SecurityRating:0,Icon:"star_red"}}}}]);