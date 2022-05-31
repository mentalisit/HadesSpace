"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[499],{7786:(e,a,r)=>{r.d(a,{Z:()=>c});var t=r(6252),l=r(3577);const i={class:"container"},n={class:"list"},S=["href"];function o(e,a,r,o,s,d){const _=(0,t.up)("v-data"),u=(0,t.Q2)("t");return(0,t.wg)(),(0,t.iD)("div",i,[Object.keys(r.args.data).length>1?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t._)("h2",null,(0,l.zw)(e.$t("CONTENT")),1),(0,t._)("div",n,[(0,t._)("ol",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.args.data,(({Name:e,TID:a})=>((0,t.wg)(),(0,t.iD)("li",{key:e},[(0,t.wy)((0,t._)("a",{href:`#${e}`},null,8,S),[[u,a]])])))),128))])])],64)):(0,t.kq)("",!0),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.args.data,((e,a)=>((0,t.wg)(),(0,t.j4)(_,{key:a,data:e,"table-opts":r.args.tableOpts,"icon-dir":r.args.iconDir},null,8,["data","table-opts","icon-dir"])))),128))])}var s=r(4557);const d={components:{VData:s.Z},props:{args:{type:Object,default:()=>({}),required:!0}}};var _=r(3744);const u=(0,_.Z)(d,[["render",o],["__scopeId","data-v-46131bcd"]]),c=u},8558:(e,a,r)=>{r.d(a,{Z:()=>p});var t=r(6252),l=r(3577);const i={class:"portrait-container"},n=["src","alt"],S={class:"topic"};function o(e,a,r,o,s,d){const _=(0,t.up)("Head"),u=(0,t.up)("v-content");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t._)("title",null,(0,l.zw)(s.title),1)])),_:1}),(0,t._)("div",i,[r.portrait?((0,t.wg)(),(0,t.iD)("img",{key:0,class:"portrait",src:r.portrait.src,alt:r.portrait.alt},null,8,n)):(0,t.kq)("",!0),(0,t._)("h1",S,(0,l.zw)(s.title),1)]),(0,t.WI)(e.$slots,"default",{},void 0,!0),(0,t.Wm)(u,{args:r.contentArgs},null,8,["args"])])}var s=r(1232),d=r(7786);const _={components:{Head:s.Fb,VContent:d.Z},props:{contentArgs:{type:Object,requested:!0,default:()=>({})},titleLocKey:{type:String,requested:!0,default:null},portrait:{type:Object,requested:!1,default:null,validator:e=>["src","alt"].every((a=>a in e))}},data(){return{title:this.$t(this.titleLocKey)}}};var u=r(3744);const c=(0,u.Z)(_,[["render",o],["__scopeId","data-v-3776eae5"]]),p=c},9413:(e,a,r)=>{r.d(a,{Z:()=>l});var t=r(5888);function l(e,{filterByType:{path:a}}){const r={},l=a?a.split(".").reduce(((e,a)=>e[a]),t.Z):null;return Object.entries(e).filter((([e])=>!l||l.includes(e))).sort((([e],[a])=>l?l.indexOf(e)-l.indexOf(a):0)).forEach((([,e])=>{Object.entries(e).forEach((([e,a])=>{e in r?Array.isArray(r[e])?r[e].push(a):r[e]=[r[e],a]:r[e]=a}))})),r}},6577:(e,a,r)=>{r.d(a,{Z:()=>t});const t={YellowStar:{Name:"YellowStar",HexGridSizeX:3,HexGridSizeY:3,HexGridMaxRadius:3,HexCellEdgeSize:4e3,SpeedModifierPct:300,Lifetime:0,NumPlayersWithAccess:0,IsHome:1,Star:"YellowStar",TID:"TID_YELLOW_STAR",TID_Description:"TID_YELLOW_STAR_DESCR",ConceptImage:"portrait_YellowStar",AppearanceModels:["Home_Star","Home_Star_1","Home_Star_2","Home_Star_3","Home_Star_4","Home_Star_5","Home_Star_6","Home_Star_7","Home_Star_8","Home_Star_9","Home_Star_10","Home_Star_11","Home_Star_12","Home_Star_13","Home_Star_14"],YSCommonVariations:9,SecurityRating:0,Icon:"star_yellow"},RedStar:{Name:"RedStar",TID:"TID_RED_STAR",TID_Description:"TID_RED_STAR_INFO",ConceptImage:"portrait_RedStar",AppearanceModels:[null,"Red_Star","Red_Star_1","Red_Star_2","Red_Star_3","Red_Star_4","Red_Star_5","Red_Star_6","Red_Star_7","Red_Star_8","Red_Star_9","Red_Star_10","Red_Star_11"],SecurityRating:0,Icon:"star_red",SupernovaFX:"RedStarExplode_FX",SupernovaFXSpawnTimeSec:3,FixedSector:[null,null,null,null,null,null,null,null,null,null,null,"TutorialRedStar","Mine_Risk0_Lv1"],HexGridSizeX:[0,1,1,2,2,2,2,2,2,2,2,2,2],HexGridSizeY:[1,1,1,2,2,2,2,2,2,2,3,3,3],HexGridMaxRadius:[1,1,1,2,2,3,3,3,3,3,3,3,3],HexCellEdgeSize:[1500,1650,2500,2e3,2500,2250,2300,2400,2600,2900,2300,2400,2600],SpeedModifierPct:200,Lifetime:900,NumPlayersWithAccess:[1,2,2,4,4,4,4,4,4,4,4,4,4],MaxBattleshipsPerPlayer:[1,1,2,2,2,3,3,3,3,3,3,3,3],Star:"RedStar",HydrogenSearchCost:[0,50,100,250,500,750,1e3,1200,1800,2500,3500,4e3,4500],CroidAmt:[0,0,4e3,1e4,2e4,5e4,75e3,1e5,15e4,225e3,3e5,4e5,5e5],DisableRSSearchDuringTutorial:1,WarnOnSRSPlacementMinNumNeighbors:3,PrivateRSEventClientDisplayMode:2,SafeInterceptorInPublicRS:1,NoCerbBondTeleportPRS:1,RSPublicLateJoin_MaxTimeAvailable:300,RSPublicLateJoin_MaxTimeOffTotal:180,RSPublicLateJoin_ClientCacheExpiry:30,RSPublicLateJoin_MinStarLevel:5,MinDarkRSLevel:5,DRSArtifactBonus:50,NumMaxPlanets:[null,2,2,3,3,4,4,4,4,4,5,5,5],LowerPlanetsMinLevel:[null,1,1,1,1,2,2,3,4,5,6,6,7],MaxInfluenceLoss:[null,5,10,15,15,20,20,25,25,30,30,30,30],MaxInfluenceGain:[null,30,40,50,60,70,80,100,125,150,200,200,200],DestroyersToSpawn:[null,null,null,null,null,null,4,4,4,4,5,5,5],MinBombers:[null,null,null,null,null,null,null,3,5,6,9,11,11],MaxPlanetBomberCoverage:[null,null,null,null,null,null,null,3,3,4,5,6,6],MaxGateBomberCoverage:[null,null,null,null,null,null,null,1,2,2,3,4,5],GhostSpawnSecs:[90,80,70,65,60,60,60,50,50,45,45,45,40,40,35,35,35,30,[90,80,70,65,60,60,60,50,50,45,45,45,40,40,35,35,35,30],[90,80,70,65,60,60,60,50,50,45,45,45,40,40,35,35,35,30]],GhostSpawner:[null,null,null,null,null,null,null,null,null,null,0,1,2],NumLowerPlanets:[null,0,1,2,[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[4,5],[4,5],[4,5]],MedRiskMining:[null,[1,2],[1,3],[2,4],[4,5],[5,6],[5,6],[6,7],[6,7],7,[9,12],[9,12],[9,12]],HighRiskMining:[null,0,1,[1,2],[2,4],[3,4],[3,4],[2,3],[2,3],4,[6,8],[6,8],[6,8]],Influence:[null,[0,150],[80,500],[550,1500],[1100,3e3],[1900,6e3],[2900,11e3],[3900,18e3],[6900,26e3],[9900,36e3],[12400,8e4],[15e3,14e4],[17500,18e4]],RegularInfuenceRange:[null,[0,100],[100,400],[400,1200],[1200,2500],[2500,5e3],[5500,1e4],[1e4,16e3],[16e3,24e3],[24e3,34e3],[34e3,6e4],[6e4,12e4],[12e4,16e4]],InfluenceAwardThreshold:[null,[10,30],[20,80],[40,225],[100,600],[200,1500],[400,2400],[600,3200],[800,5200],[1e3,8e3],[1200,13500],[2500,32e3],[5e3,55e3]]},BlueStar:{Name:"BlueStar",TID:"TID_BLUE_STAR",TID_Description:"TID_BLUE_STAR_INFO",ConceptImage:"portrait_BlueStar",AppearanceModels:"Blue_Star",SecurityRating:2,Icon:"star_blue",SupernovaFX:"BlueStarExplode_FX",SupernovaFXSpawnTimeSec:3,HexGridSizeX:3,HexGridSizeY:3,HexGridMaxRadius:3,HexCellEdgeSize:1900,SpeedModifierPct:200,Lifetime:220,NumPlayersWithAccess:5,MaxBattleshipsPerPlayer:3,Star:"BlueStar",HydrogenSearchCost:750,CollapsePeriod:20,InitialCollapseAreaSize:14200,CycleEndTimes:[80,180,220],CycleEndCollapseAreaSize:[7e3,1600,0],StarSectorDPS:150,StarSectorNavpoints:3,StarSectorNavpointDistance:[1e3,1300],BlueStar_CRRewardWinLimit:1,BlueStar_CRRewardWinLimitPeriod:86400,BlueStar_HydroPctPerMatch:10,BlueStar_HydroPctPerPos:[100,60,25,10,0],BlueStar_MaxHydroPerDayPct:25,BlueStar_CreditPctPerPos:[100,60,30,0,0],BlueStar_RankedMatchesPerDay:3,BlueStar_Fragments:[12,8,5,3,0],BlueStar_SPFactor:25,MedRiskMining:[10,14],HighRiskMining:[7,9]},GreenStar:{Name:"GreenStar",TID:"TID_TODO",TID_Description:"TID_TODO",ConceptImage:"portrait_YellowStar",AppearanceModels:"Green_Star",SecurityRating:0,Icon:"star_yellow"},WhiteStar:{Name:"WhiteStar",TID:"TID_WHITE_STAR",TID_Description:"TID_WHITE_STAR_INFO",ConceptImage:"portrait_WhiteStar",AppearanceModels:["White_Star","White_Star_02"],SecurityRating:1,Icon:"star_white",TimeSlowdownFactor:600,PreparationTimeHours:12,SupernovaFX:"WhiteStarExplode_FX",SupernovaFXSpawnTimeSec:7,HexGridSizeX:3,HexGridSizeY:3,HexGridMaxRadius:3,HexCellEdgeSize:2500,SpeedModifierPct:200,Lifetime:720,Star:"WhiteStar",PlayerNumberBrackets:8,HQPlanetsPerBracket:[2,3],LQPlanetsPerBracket:[2,4],ExtraAsteroidSpawnTick:[2880,5760,5760],ExtraAsteroidSpawnRingDistance:[2,1,1],ExtraAsteroidSpawnAmt:[800,3e3,3e3],FleetDepartTimeInSeconds_WS:60,MaxWaypointsWS:5,WSMaxBSPerPlayer:1,WSMaxOtherPerPlayer:1,WSLostShipTimeCooldown:64800,WSDisbandCooldown:86400,WSJumpBSTimeCooldown:7200,WSJumpOtherTimeCooldown:7200,WSBucketSizes:[6,12],WSHQAsteroidsPerBucket:[4,6,8],DontAllowUseOfEnemyWSGate:1,BarrageMaxAdditionalEnemies_WS:4,WSShipXPCollectEnabled:0,WSShipMinXP:1e3,WSShipXPEventClientDisplayMode:0,WSShipEventTopBrackets:[3,20,200],WSShipEventCRRewards:[8e3,3e3,1e3],WSShipXPEventVersion:2,WSScoreDamageModifier:1,WSScoreMiningModifier:5,WSScoreTransportModifier:800,Thresholds:[[5e3,15e3,4e4],[3e4,6e4,9e4],[105e3,24e4,36e4]],HighRiskMining:[4,6]},OrangeStar:{Name:"OrangeStar",TID:"TID_TODO",TID_Description:"TID_TODO",ConceptImage:"portrait_YellowStar",AppearanceModels:"Orange_Star",SecurityRating:2,Icon:"star_yellow",HexGridSizeX:1,HexGridSizeY:1,HexGridMaxRadius:1,HexCellEdgeSize:2e3,Lifetime:900,MaxBattleshipsPerPlayer:3,Star:"OrangeStar",HydrogenSearchCost:500,NumMaxPlanets:1,MaxInfluenceLoss:15,MaxInfluenceGain:50,Players:[2],NumLowerPlanets:[3,4],MedRiskMining:[4,5],HighRiskMining:[3,4],RegularInfuenceRange:[2900,4e3],InfluenceAwardThreshold:[500,1700]},RedStarLarge:{Name:"RedStarLarge",TID:"TID_RED_STAR",TID_Description:"TID_RED_STAR_INFO",ConceptImage:"portrait_RedStar",AppearanceModels:"Red_StarLarge",SecurityRating:0,Icon:"star_red"},QuantumStar:{Name:"QuantumStar",TID:"TID_QUANTUM_STAR",TID_Description:"TID_QUANTUM_STAR_INFO",ConceptImage:"portrait_EmptySpace",AppearanceModels:"Quantum_Star_1",Icon:"star_dark",HexGridSizeX:[3,2,2],HexGridSizeY:[0,0,2],HexGridMaxRadius:[0,-2,2],HexCellEdgeSize:[5e3,5e3,4e3],Lifetime:0,NumPlayersWithAccess:0,Star:"QuantumStar",CerbWaveSec:[300,900,1800],DarknessSec:[82800,255600,601200],NumBuildingDestroyers:[[2,3],[2,3],[2,3]],BuildingDestroyersTimes:[[60,120],[60,120],[60,120]]},DarkRedStar:{Name:"DarkRedStar",TID:"TID_RED_STAR",TID_Description:"TID_RED_STAR_INFO",ConceptImage:"portrait_RedStar",AppearanceModels:["Red_Star","Red_Star_1","Red_Star_2","DRed_Star_3","DRed_Star_4","DRed_Star_5","DRed_Star_6","DRed_Star_7","DRed_Star_8","DRed_Star_9","DRed_Star_10","DRed_Star_11"],SecurityRating:0,Icon:"star_red_dark",SupernovaFX:"RedStarExplode_FX",SupernovaFXSpawnTimeSec:3,FixedSector:["TutorialRedStar","Mine_Risk0_Lv1"],HexGridSizeX:0,HexGridSizeY:1,HexGridMaxRadius:1,HexCellEdgeSize:1500,SpeedModifierPct:200,Lifetime:900,NumPlayersWithAccess:1,MaxBattleshipsPerPlayer:1,Star:"DarkRedStar",HydrogenSearchCost:0,CroidAmt:0}}}}]);