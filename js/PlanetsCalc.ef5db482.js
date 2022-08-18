"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[530],{66801:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(85888);function o(e){const t=e.split(".").reduce(((e,t)=>e[t]),i.Z);return{filter:([e])=>t.includes(e),sort:([e],[r])=>t.indexOf(e)-t.indexOf(r)}}},21664:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var i=r(66252),o=r(3577),a=r(64357);const n=e=>((0,i.dD)("data-v-368a5e73"),e=e(),(0,i.Cn)(),e),d={class:"wrap"},l={class:"container"},S=n((()=>(0,i._)("th",null,null,-1))),_=["onChange"],s=["selected","disabled"],D=["onClick"],p=n((()=>(0,i._)("img",{src:a,class:"open-info"},null,-1))),I=[p],T={class:"modal-module"},m={class:"chars"},M={class:"output"};function c(e,t,r,a,n,p){const c=(0,i.up)("calculator"),u=(0,i.up)("v-data"),C=(0,i.up)("modal"),E=(0,i.Q2)("t");return(0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",l,[(0,i.Wm)(c,{input:e.input,"onUpdate:input":t[0]||(t[0]=t=>e.input=t),"stack-chars":e.stackChars,"calc-total":e.calcTotal,"local-storage-key":"planetsCalc","title-key":"PLANETS_CALC",onSetup:e.setupCalculator},null,8,["input","stack-chars","calc-total","onSetup"]),(0,i.Wm)(u,{data:{TID:"INPUT_VALUES",Name:"Input",TID2:e.planetValues.map((e=>e.TID))},"table-opts":{lvlColKey:"№",mergeCells:!1}},{"table-head":(0,i.w5)((()=>[(0,i.wy)((0,i._)("th",null,null,512),[[E,"CURRENT_LVL"]]),(0,i.wy)((0,i._)("th",null,null,512),[[E,"PLAN_LVL"]]),S])),"table-body":(0,i.w5)((({row:t})=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Object.keys(e.input),(r=>((0,i.wg)(),(0,i.iD)("td",{key:r},[(0,i._)("select",{class:"select",onChange:i=>e.calc.onChangeLvl(r,e.planetValues[t].Name,i.target.value)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.planetValues[t].MaxUpgradeLevel+1,((a,n)=>((0,i.wg)(),(0,i.iD)("option",{key:r+a,selected:e.calc.isSelected(r,e.planetValues[t].Name,n),disabled:e.calc.isDisabled(r,e.planetValues[t].Name,n)},(0,o.zw)(n),9,s)))),128))],40,_)])))),128)),(0,i._)("td",null,[(0,i._)("div",{onClick:()=>e.openModuleInfo(e.planetValues[t])},I,8,D)])])),_:1},8,["data"])]),(0,i.Wm)(C,(0,i.dG)({open:e.openModal,"onUpdate:open":t[1]||(t[1]=t=>e.openModal=t)},e.modalOpts),{body:(0,i.w5)((()=>[(0,i._)("div",T,[(0,i._)("ul",m,[(0,i._)("li",M,[(0,i._)("b",null,(0,o.zw)(e.$t("TID_PLANET_LEVEL_DESCR")),1),(0,i._)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Object.keys(e.input),(t=>((0,i.wg)(),(0,i.iD)("span",{key:t,class:(0,o.C_)(e.outputClasses(t,null))},(0,o.zw)(e.input[t]?.[e.modalOpts.data.key]),3)))),128))])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Object.keys(e.calc.output.plan[e.modalOpts.data.key]||{}).filter((t=>!e.hideKeys.includes(t))),(t=>((0,i.wg)(),(0,i.iD)("li",{key:t,class:"calc.output"},[(0,i._)("b",null,(0,o.zw)(e.format.key(t)),1),(0,i._)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Object.keys(e.input),(r=>((0,i.wg)(),(0,i.iD)("span",{key:r,class:(0,o.C_)(e.outputClasses(r,t))},(0,o.zw)(e.format.value(t,Math.trunc(e.calc.output[r]?.[e.modalOpts.data.key]?.[t])||void 0)),3)))),128))])])))),128))])])])),_:1},16,["open"])])}var u=r(4964),C=r(29922),E=r(51131),R=r(51266),N=r(42669),g=r(50139),P=r(39114),f=r(97798),L=r(92022),h=r(66801);const A={CreditStorage:"CreditStorageModifier",FuelStorage:"FuelStorageModifier",CreditsPerHour:"CreditIncomeModifier",FuelPerHour:"FuelIncomeModifier",ShipmentsCRValuePerDay:"CreditShipmentModifier"},y={TotalShipmentCRPerDay:"ShipmentsCRValuePerDay",Cost:"Cost",ConstructionTime:"TimeToUpgrade"},v=["XPAward","Cost","TimeToUpgrade"],F=["CrystalsWeight","Name","ShipmentsHydroValuePerDay"],O=Object.keys(u.Z).filter((e=>![...v,...F].includes(e))),B=(0,i.aZ)({components:{Calculator:R.Z,VData:N.Z,Modal:g.Z},data(){return{input:{actually:{},plan:{}},calc:{},hideKeys:F,stackChars:v,planets:{},openModal:!1,modalOpts:{size:g.z.SMALL,title:"name",data:{planet:{},get key(){return this.planet.Name}}},format:{key:e=>(0,P.Z)(e,this.$route.name),value:(e,t)=>(0,f.Z)(e,t,null)}}},computed:{planetValues(){return Object.values(this.planets)}},methods:{setupCalculator(e){this.calc=e,this.planets=e.provideGetterElements(U)},openModuleInfo(e){this.modalOpts.title=this.$t(e.TID)+(/_\d$/.test(e.Name)?e.Name.replace(/.+?_(\d)$/," $1"):""),this.modalOpts.data.planet=e,this.openModal=!0},outputClasses(e,t){return this.calc.outputClasses(e,this.modalOpts.data.key,t)},calcTotal(e,t){for(const r of O)t.total.intermediate[r]={actually:0,plan:0,sum:0};return function(e){for(const r of O)t.total.intermediate[r].actually+=t.actually[e]?.[r]||0,t.total.intermediate[r].plan+=t.plan[e]?.[r]||0,t.total.intermediate[r].sum=t.total.intermediate[r].actually+t.total.intermediate[r].plan}}}});function U(...[e,t,r]){let i=0;const o=(0,L.Z)(C.Z,{...(0,h.Z)("planets.yellowstar"),map:([t,i])=>(r[t]=(0,L.Z)(u.Z,{filter:([,e])=>Array.isArray(e),map:([e,t])=>[e,t.map((t=>t*(e in A?i[A[e]]/100:1)))]}),e[t]=i.TID,[t,i])}),a=(0,L.Z)(E.Z.TradingStation,{map:([e,t])=>(Array.isArray(t)&&t.length>i&&(i=t.length),[e in y?y[e]:e,t])});a.MaxUpgradeLevel=i;for(let n=0;a.MaxOnOwnSolarSystem>n;n++){const e={...a,Name:`${a.Name}_${n}`};o[e.Name]=e,r[e.Name]=t(e,i)}return o}var x=r(83744);const H=(0,x.Z)(B,[["render",c],["__scopeId","data-v-368a5e73"]]),w=H},85888:(e,t,r)=>{r.d(t,{Z:()=>i});const i={capital_ships:{player:["Transport","Miner","Battleship","CorpFlagship"],cerberus:["CerberusSentinel","CerberusGuardian","CerberusInterceptor","CerberusColossus","CerberusDestroyer","CerberusBomber","CerberusPhoenix","CerberusStorm","CerberusGhosts","CerberusHydra","Hydraling1","Hydraling2","CerberusCarrier"],darkCerberus:["DarkSentinel","DarkGuardian","DarkInterceptor","DarkColossus","DarkDestroyer","DarkBomber","DarkPhoenix"]},planets:{yellowstar:["desert_lv1","lava_lv1","water_lv1","terran_lv1","gas_lv1","terran_lv2","lava_lv2","water_lv2","gas_lv2","desert_lv2","lava_lv3","desert_lv3","water_lv3","terran_lv3","ice_variation1","ice_variation2"],redstar:["destroyed01","destroyed02","destroyed03","destroyed04","destroyed05","destroyed06","destroyed07","destroyed08","destroyed09","destroyed10"],whitestar:["whitestar1","whitestar2","whitestar_l1"]}}},4964:(e,t,r)=>{r.d(t,{Z:()=>i});const i={Cost:[0,50,200,400,800,2e3,4e3,8e3,1e4,2e4,3e4,4e4,5e4,75e3,1e5,125e3,15e4,175e3,2e5,25e4,3e5,4e5,5e5,6e5,8e5,1e6,125e4,15e5,175e4,2e6,225e4,25e5,275e4,3e6,35e5,4e6,45e5,5e6,55e5,6e6,65e5,7e6,75e5,8e6,85e5,9e6,95e5,1e7,105e5,11e6],CreditStorage:[1e3,1400,1800,3e3,4e3,5e3,6e3,7500,1e4,13e3,16e3,2e4,24e3,28e3,35e3,45e3,65e3,9e4,13e4,17e4,21e4,25e4,29e4,33e4,37e4,41e4,45e4,49e4,53e4,57e4,61e4,65e4,69e4,73e4,77e4,81e4,85e4,89e4,93e4,97e4,101e4,105e4,109e4,113e4,117e4,121e4,125e4,129e4,133e4,137e4],FuelStorage:[200,260,340,450,570,750,960,1250,1600,2100,2750,3600,5e3,7e3,9e3,11e3,13e3,15e3,17e3,19e3,2e4,21e3,22e3,23e3,24e3,25e3,26e3,27e3,28e3,29e3,3e4,31e3,32e3,33e3,34e3,35e3,36e3,37e3,38e3,39e3,4e4,41e3,42e3,43e3,44e3,45e3,46e3,47e3,48e3,49e3],XPAward:[0,10,20,30,40,50,60,70,80,90,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1e3,1050,1100,1150,1200,1250,1300,1350,1400,1450,1500,1550,1550,1550,1550,1550,1550,1550,1550,1550,1550,1550],CreditsPerHour:[1,2,4,6,8,10,12,15,18,21,25,28,31,35,38,42,46,50,55,60,60,65,65,70,70,75,75,80,80,85,85,90,90,95,95,100,100,105,105,110,110,115,115,120,120,125,125,130,130,135],FuelPerHour:[16,16,16,16,16,18,18,20,20,22,22,24,24,26,26,28,28,30,30,32,32,34,34,36,36,38,38,40,40,40,40,40,40,40,40,40,40,40,40,40,42,42,42,42,44,44,44,44,44,46],ShipmentsCRValuePerDay:[3e3,3240,3499,3778,4080,4406,4758,5138,5549,5992,6471,6988,7547,8150,8802,9506,1e4,10700,11449,12250,13107,14024,15005,16055,17178,18380,19666,21042,22514,24089,25775,27579,29509,31574,33784,36148,38678,41385,44281,47380,48500,49600,50700,51800,52900,54e3,55100,56200,57300,58400],ShipmentsHydroValuePerDay:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],TimeToUpgrade:[3,3,30,60,120,300,1200,3600,14400,28800,57600,86400,129600,216e3,259200,302400,345600,388800,432e3,475200,518400,561600,604800,648e3,691200,734400,777600,820800,864e3,907200,950400,993600,1036800,108e4,1123200,1166400,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600,1209600],CrystalsWeight:[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40],Name:"planet_levels"}},29922:(e,t,r)=>{r.d(t,{Z:()=>i});const i={desert_lv1:{Name:"desert_lv1",TID:"TID_PLANET_DESERT_1",TID_Description:"TID_PLANET_DESERT_DESCR",PlanetSize:100,ModelFolders:["desert","desert02","desert03","desert04"],MaxUpgradeLevel:15,CreditIncomeModifier:70,FuelIncomeModifier:50,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:70,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:10,ShipmentsPerHour:80},desert_lv2:{Name:"desert_lv2",TID:"TID_PLANET_DESERT_2",TID_Description:"TID_PLANET_DESERT_DESCR",PlanetSize:200,ModelFolders:["desert05","desert06","desert07","desert08"],MaxUpgradeLevel:35,CreditIncomeModifier:80,FuelIncomeModifier:0,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:75,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:24,ShipmentsPerHour:200},desert_lv3:{Name:"desert_lv3",TID:"TID_PLANET_DESERT_3",TID_Description:"TID_PLANET_DESERT_DESCR",PlanetSize:280,ModelFolders:["desert09","desert10","desert11","desert12"],MaxUpgradeLevel:50,CreditIncomeModifier:90,FuelIncomeModifier:0,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:85,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:36,ShipmentsPerHour:300},lava_lv1:{Name:"lava_lv1",TID:"TID_PLANET_LAVA_1",TID_Description:"TID_PLANET_LAVA_DESCR",PlanetSize:100,ModelFolders:["fire","fire01","fire02","fire03"],MaxUpgradeLevel:15,CreditIncomeModifier:70,FuelIncomeModifier:50,CreditStorageModifier:100,FuelStorageModifier:0,CreditShipmentModifier:90,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:15,ShipmentsPerHour:120},lava_lv2:{Name:"lava_lv2",TID:"TID_PLANET_LAVA_2",TID_Description:"TID_PLANET_LAVA_DESCR",PlanetSize:180,ModelFolders:["fire04","fire05","fire06","fire07"],MaxUpgradeLevel:35,CreditIncomeModifier:80,FuelIncomeModifier:60,CreditStorageModifier:100,FuelStorageModifier:0,CreditShipmentModifier:95,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:24,ShipmentsPerHour:200},lava_lv3:{Name:"lava_lv3",TID:"TID_PLANET_LAVA_3",TID_Description:"TID_PLANET_LAVA_DESCR",PlanetSize:300,ModelFolders:["fire08","fire09","fire10"],MaxUpgradeLevel:50,CreditIncomeModifier:90,FuelIncomeModifier:70,CreditStorageModifier:100,FuelStorageModifier:0,CreditShipmentModifier:100,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:36,ShipmentsPerHour:300},water_lv1:{Name:"water_lv1",TID:"TID_PLANET_WATER_1",TID_Description:"TID_PLANET_WATER_DESCR",PlanetSize:140,ModelFolders:["water","water02","water03","water04"],MaxUpgradeLevel:15,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:95,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:18,ShipmentsPerHour:140},water_lv2:{Name:"water_lv2",TID:"TID_PLANET_WATER_2",TID_Description:"TID_PLANET_WATER_DESCR",PlanetSize:240,ModelFolders:["water05","water06","water07","water08"],MaxUpgradeLevel:35,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:100,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:24,ShipmentsPerHour:200},water_lv3:{Name:"water_lv3",TID:"TID_PLANET_WATER_3",TID_Description:"TID_PLANET_WATER_DESCR",PlanetSize:320,ModelFolders:["water09","water10","water11","water12"],MaxUpgradeLevel:50,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:105,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:38,ShipmentsPerHour:320},terran_lv1:{Name:"terran_lv1",TID:"TID_PLANET_TERRAN_1",TID_Description:"TID_PLANET_TERRAN_DESCR",PlanetSize:120,ModelFolders:["terran01","terran02","terran03","terran04"],MaxUpgradeLevel:15,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:115,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:18,ShipmentsPerHour:150},terran_lv2:{Name:"terran_lv2",TID:"TID_PLANET_TERRAN_2",TID_Description:"TID_PLANET_TERRAN_DESCR",PlanetSize:210,ModelFolders:["terran05","terran06","terran07","terran08"],MaxUpgradeLevel:35,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:120,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:27,ShipmentsPerHour:220},terran_lv3:{Name:"terran_lv3",TID:"TID_PLANET_TERRAN_3",TID_Description:"TID_PLANET_TERRAN_DESCR",PlanetSize:290,ModelFolders:["terran09","terran10","terran11","terran12"],MaxUpgradeLevel:50,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:125,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:35,ShipmentsPerHour:300},gas_lv1:{Name:"gas_lv1",TID:"TID_PLANET_GAS_1",TID_Description:"TID_PLANET_GAS_DESCR",PlanetSize:200,ModelFolders:["gas01","gas05","gas06","gas07","gas09","gas13"],MaxUpgradeLevel:20,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:120,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:22,ShipmentsPerHour:180},gas_lv2:{Name:"gas_lv2",TID:"TID_PLANET_GAS_2",TID_Description:"TID_PLANET_GAS_DESCR",PlanetSize:300,ModelFolders:["gas02","gas03","gas04","gas08","gas10","gas11","gas12"],MaxUpgradeLevel:50,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:125,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:40,ShipmentsPerHour:320},ice:{Name:"ice",TID:"TID_PLANET_ICE",TID_Description:"TID_PLANET_ICE_DESCR",PlanetSize:185,ModelFolders:["ice01","ice02","ice03","ice04"],MaxUpgradeLevel:50,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:140,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:48,ShipmentsPerHour:400},destroyed01:{Name:"destroyed01",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed02",RedStarDisplayLevel:1,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},destroyed02:{Name:"destroyed02",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed03",RedStarDisplayLevel:2,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},destroyed03:{Name:"destroyed03",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed06",RedStarDisplayLevel:3,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},destroyed04:{Name:"destroyed04",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed07",RedStarDisplayLevel:4,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},destroyed05:{Name:"destroyed05",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed13",RedStarDisplayLevel:5,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},ice_variation1:{Name:"ice_variation1",TID:"TID_PLANET_ICE",TID_Description:"TID_PLANET_ICE_DESCR",PlanetSize:210,ModelFolders:["ice05","ice06","ice07","ice08"],MaxUpgradeLevel:50,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:140,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:40,ShipmentsPerHour:320},ice_variation2:{Name:"ice_variation2",TID:"TID_PLANET_ICE",TID_Description:"TID_PLANET_ICE_DESCR",PlanetSize:275,ModelFolders:["ice09","ice10","ice11","ice12"],MaxUpgradeLevel:50,CreditIncomeModifier:100,FuelIncomeModifier:100,CreditStorageModifier:100,FuelStorageModifier:100,CreditShipmentModifier:140,FuelShipmentModifier:0,ConceptImage:"portrait_Planet",MaxShipments:50,ShipmentsPerHour:420},destroyed06:{Name:"destroyed06",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed14",RedStarDisplayLevel:6,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},whitestar1:{Name:"whitestar1",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_WHITE_STAR_PLANET_DESCR",PlanetSize:100,ModelFolders:["destroyed20","destroyed21","destroyed22","destroyed23"],RedStarDisplayLevel:10,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_PlanetWhiteStar",MaxShipments:12,ShipmentsPerHour:0,TicksPerRelic:720,HydrogenForRelic:150},destroyed07:{Name:"destroyed07",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed15",RedStarDisplayLevel:7,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},whitestar2:{Name:"whitestar2",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_WHITE_STAR_PLANET_DESCR",PlanetSize:100,ModelFolders:["destroyed16","destroyed17","destroyed18","destroyed19"],RedStarDisplayLevel:5,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_PlanetWhiteStar",MaxShipments:12,ShipmentsPerHour:0,TicksPerRelic:2400,HydrogenForRelic:300},destroyed08:{Name:"destroyed08",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed08",RedStarDisplayLevel:8,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},destroyed09:{Name:"destroyed09",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed09",RedStarDisplayLevel:9,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},destroyed10:{Name:"destroyed10",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed10",RedStarDisplayLevel:10,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100},whitestar_l1:{Name:"whitestar_l1",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_WHITE_STAR_PLANET_DESCR",PlanetSize:100,ModelFolders:["desert05","desert06","desert07","desert08"],RedStarDisplayLevel:1,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_PlanetWhiteStar",MaxShipments:12,ShipmentsPerHour:0,TicksPerRelic:2400,HydrogenForRelic:500},destroyed11:{Name:"destroyed11",TID:"TID_PLANET_DESTROYED",TID_Description:"TID_PLANET_DESTROYED_DESCR",PlanetSize:150,ModelFolders:"destroyed24",RedStarDisplayLevel:11,MaxUpgradeLevel:0,CreditIncomeModifier:0,FuelIncomeModifier:0,CreditStorageModifier:0,FuelStorageModifier:0,CreditShipmentModifier:0,FuelShipmentModifier:0,ConceptImage:"portrait_DyingPlanet",MaxShipments:12,ShipmentsPerHour:100}}},51131:(e,t,r)=>{r.d(t,{Z:()=>i});const i={Shipyard:{Name:"Shipyard",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_SHIPYARD",TID_Description:"TID_BUILDING_SHIPYARD_DESCR",TID_INFO_SCREEN:"TID_BUILDING_SHIPYARD_DESCR",TID_UPGRADE:"TID_BLD_SHIPYARD_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_SHIPYARD",ConceptImage:"portrait_SpaceBuilding",Model:"shipyard",RequiredPlanetLevel:1,Cost:[800,1e3,5e3,2e4,8e4,2e5,5e5,1e6,2e6,5e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,ShipyardCapacity:[4,5,7,8,10,12,13,14,15,16],BuildNotifMode:0,ShowInStarLinks:1,ConstructionTime:[5,60,1800,3600,28800,86400,172800,259200,345600,432e3]},ShortRangeScanner:{Name:"ShortRangeScanner",CanBeBuilt:1,CanCancelBuild:1,CancelBuildRefundPct:90,SeparateBuildingPerLevel:1,AllowAdditionalBuildingsAtMaxLevel:1,MoveHydrogenCostPerSector:500,AllowMoveInSameSectorOnly:1,TID:"TID_BUILDING_SHORT_RANGE_SCANNER",TID_Description:"TID_BUILDING_SHORT_RANGE_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_SHORT_RANGE_SCANNER_INFO",ConceptImage:"portrait_SpaceBuilding",Model:"radar",RequiredPlanetLevel:3,Cost:[500,1e4,2e4,4e4,8e4,15e4,3e5,6e5,1e6,2e6,3e6,4e6],SectorUnlockCost:[2500,1e4,2e4,4e4,8e4,15e4,3e5,6e5,1e6,2e6,3e6,4e6],SectorUnlockTime:[3600,28800,57600,86400,129600,172800,259200,345600,432e3,518400,604800,604800],RequiresEmptySector:0,MaxPerSector:1,CanScanSectors:1,BuildNotifMode:2,ConstructionTime:[60,14400,43200,86400,86400,86400,86400,86400,86400,86400,86400,86400]},RedStarScanner:{Name:"RedStarScanner",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_REDSTAR_SCANNER",TID_Description:"TID_BUILDING_REDSTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_REDSTAR_SCANNER_INFO",TID_UPGRADE:"TID_BLD_REDSTAR_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_MISSION_BUILDING",ConceptImage:"portrait_JumpGate",Model:"redStarScanner",RequiredPlanetLevel:4,Cost:[1e3,2e3,2e4,6e4,12e4,25e4,1e6,2e6,4e6,8e6,12e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:0,StargateModel:"JumpGate",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[3,1800,14400,86400,172800,259200,345600,432e3,518400,604800,864e3]},ResearchStation:{Name:"ResearchStation",CanBeBuilt:1,MoveHydrogenCostPerSector:200,TID:"TID_BUILDING_RESEARCH",TID_Description:"TID_BUILDING_RESEARCH_DESCR",TID_INFO_SCREEN:"TID_BUILDING_RESEARCH_INFO",TID_UPGRADE:"TID_BLD_RESEARCH_STATION_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_RESEARCH_STATION",ConceptImage:"portrait_SpaceBuilding",Model:"ResearchStation",RequiredPlanetLevel:5,Cost:1e3,ResearchSlots:4,RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:5},DiplomacyCenter:{Name:"DiplomacyCenter",CanBeBuilt:1,SeparateBuildingPerLevel:1,MoveHydrogenCostPerSector:2e3,TID:"TID_BUILDING_DIPLOMACY_CENTER",TID_Description:"TID_BUILDING_DIPLOMACY_CENTER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_DIPLOMACY_CENTER_INFO",ConceptImage:"portrait_SpaceBuilding",Model:"embassy",RequiredPlanetLevel:7,Cost:[25e3,5e5,4e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:3,MaxPerSector:1,StargateModel:"JumpGate",BuildNotifMode:3,ShowInStarLinks:1,ConstructionTime:[28800,432e3,864e3]},TradingStation:{Name:"TradingStation",CanBeBuilt:1,CanBeRenamed:1,MoveHydrogenCostPerSector:3e3,TID:"TID_BUILDING_TRADINGSTATION",TID_Description:"TID_BUILDING_TRADINGSTATION_DESCR",TID_INFO_SCREEN:"TID_BUILDING_TRADINGSTATION_DESCR",ConceptImage:"portrait_SpaceBuilding",Model:"trade_station",RequiredPlanetLevel:13,Cost:[6e4,12e4,25e4,5e5,1e6,2e6,3e6,4e6,6e6,8e6],TotalShipmentCRPerDay:[5e3,7e3,9800,13720,19208,26891,37647,52705,73787,103301],RequiresEmptySector:1,MaxOnOwnSolarSystem:3,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[86400,172800,345600,432e3,518400,604800,691200,777600,864e3,950400]},WarpLaneHub:{Name:"WarpLaneHub",CanBeBuilt:1,SeparateBuildingPerLevel:1,AllowAdditionalBuildingsAtMaxLevel:1,BuyInPairs:1,MoveHydrogenCostPerSector:2e3,TID:"TID_BUILDING_WARPLANE_HUB",TID_Description:"TID_BUILDING_WARPLANE_HUB_DESCR",TID_INFO_SCREEN:"TID_BUILDING_WARPLANE_HUB_INFO",ConceptImage:"portrait_WarpLane",PrefabModel:"warpLaneHub",PrefabModel_BuildMenu:"warpLaneHub_BuildIcon",RequiredPlanetLevel:12,Cost:[5e4,5e4,1e5,1e5,2e5,2e5,4e5,4e5,8e5,8e5,15e5,15e5,3e6,3e6,5e6,5e6,6e6,6e6,7e6,7e6,8e6,8e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:24,MaxPerSector:8,IsWarpLane:1,OverrideMinAsteroidDistSquared:1e6,BuildNotifMode:1,ConstructionTime:[43200,43200,86400,86400,172800,172800,259200,259200,345600,345600,432e3,432e3,518400,518400,604800,604800,691200,691200,777600,777600,864e3,864e3]},Stargate:{Name:"Stargate",CanBeBuilt:0,TID:"TID_BUILDING_STARGATE",TID_Description:"TID_BUILDING_STARGATE_DESCR",TID_INFO_SCREEN:"TID_BUILDING_STARGATE_DESCR",ConceptImage:"portrait_JumpGate",IsStargate:1,RequiresEmptySector:0,OverrideMinAsteroidDistSquared:1e6,StargateModel:"JumpGate"},OrangeStarScanner:{Name:"OrangeStarScanner",CanBeBuilt:0,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_ORANGESTAR_SCANNER",TID_Description:"TID_BUILDING_ORANGESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_ORANGESTAR_SCANNER_INFO",ConceptImage:"portrait_JumpGate",Model:"redStarScanner",RequiredPlanetLevel:5,Cost:4e4,RequiresEmptySector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:1,StargateModel:"JumpGate",ConstructionTime:86400},WhiteStarScanner:{Name:"WhiteStarScanner",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BLD_WHITESTAR_SCANNER",TID_Description:"TID_BLD_WHITESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BLD_WHITESTAR_SCANNER_DESCR",TID_UPGRADE:"TID_BLD_REDSTAR_UPGRADE",ConceptImage:"portrait_JumpGate",Model:"whiteStarScanner",RequiredPlanetLevel:10,Cost:25e3,RequiresEmptySector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,StargateModel:"JumpGateWhiteStar",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:1},TimeModulator:{Name:"TimeModulator",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,AllowMoveInSameSectorOnly:1,TID:"TID_BLD_TIME_MODULATOR",TID_Description:"TID_BLD_TIME_MODULATOR_DESCR",TID_INFO_SCREEN:"TID_BLD_TIME_MODULATOR_INFO",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"timeModulator",PrefabModel_BuildMenu:"timeModulator_BuildIcon",RequiredPlanetLevel:6,Cost:[1e3,4e3,1e4,3e4,1e5,2e5,4e5,6e5,8e5,1e6,2e6,3e6,4e6,5e6,6e6,7e6],TimeSpeedupFactor:[15e3,17500,2e4,22500,25e3,27500,3e4,32500,35e3,37500,4e4,42500,45e3,5e4,55e3,6e4],TimeSpeedupMaxSeconds:600,TimeSpeedupRegenPerDay:1200,RequiresStarSector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[600,3600,28800,172800,345600,432e3,518400,604800,691200,777600,864e3,864e3,864e3,864e3,864e3,864e3],Model:"TimeModulator"},BlueStarScanner:{Name:"BlueStarScanner",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_BLUESTAR_SCANNER",TID_Description:"TID_BUILDING_BLUESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_BLUESTAR_SCANNER_INFO",TID_UPGRADE:"TID_BUILDING_BLUESTAR_SCANNER_INFO",ConceptImage:"portrait_Anomaly",Model:"blueStarScanner",RequiredPlanetLevel:9,Cost:2e4,RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:1,StargateModel:"JumpGate",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:3},ShipmentRelay:{Name:"ShipmentRelay",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BLD_RELAY",TID_Description:"TID_BLD_RELAY_DESCR",TID_INFO_SCREEN:"TID_BLD_RELAY_INFO",ConceptImage:"portrait_SpaceBuilding",Model:"shipmentRelay",RequiredPlanetLevel:10,Cost:[1e4,25e3,5e4,1e5,2e5,4e5,6e5,1e6,4e6,8e6],MaxOnOwnSolarSystem:1,MaxPerSector:1,TeleportShipmentsPerHr:[4,5,7,9,12,16,22,30,42,60],TeleportShipmentsDurationHr:[4,5,6,8,10,12,16,17,20,24],TeleportShipmentActivationFragments:[5,4,4,4,4,4,4,3,3,3],FragmentCapacity:[5,10,15,20,25,30,35,40,45,50],TeleportShipmentMaxSectors:[1,2,3,4,5,6,8,11,14,18],TSHydroCost:[50,100,250,500,750,1e3,2e3,3e3,4e3,5e3],BuildNotifMode:0,ShowInStarLinks:1,ConstructionTime:[14400,86400,172800,259200,345600,432e3,518400,604800,691200,777600]},DSS:{Name:"DSS",CanBeBuilt:0}}}}]);