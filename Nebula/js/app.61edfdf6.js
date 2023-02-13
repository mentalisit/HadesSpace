(()=>{var e={1758:(e,t,n)=>{var o={"./de.json":[9445,445],"./en.json":[6506,506],"./es.json":[7891,891],"./fr.json":[9383,383],"./it.json":[955,955],"./jp.json":[2454,454],"./ko.json":[2335,335],"./pt.json":[2707,707],"./ru.json":[7708,708],"./zh-si.json":[275,275]};function a(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return n.e(t[1]).then((()=>n(a)))}a.keys=()=>Object.keys(o),a.id=1758,e.exports=a},5925:(e,t,n)=>{"use strict";n.d(t,{J1:()=>c,ZP:()=>l,g:()=>r});var o=n(6252),a=n(7978),s=n(1578);const i=(0,a.o)({locale:s.Z.state.userSettings.language});d(),c(i.global.locale);const l=i;async function r(e){await c(e),d(),i.global.locale=e}async function c(e){const t=await n(1758)(`./${e}.json`).then((e=>e.default));return i.global.setLocaleMessage(e,t),(0,o.Y3)()}function d(){document.querySelector("html")?.setAttribute("lang",i.global.locale)}},9782:(e,t,n)=>{"use strict";n.d(t,{s:()=>S,U:()=>b});const o=!0,a=[{name:"Index",path:"/",component:()=>Promise.all([n.e(449),n.e(726)]).then(n.bind(n,8123))},{text:{locKey:"TID_SHIP_UPGRADE_DLG_TITLE"},children:[{name:"Trade",text:{locKey:o?"TID_MODULE_BLUEPRINTS_LIST_CATEGORY_TRADE":"TYPE_MOD_TRADE"},path:"/trade",component:()=>Promise.all([n.e(449),n.e(902),n.e(398),n.e(683)]).then(n.bind(n,669)),icon:{name:o?"Mod_Category_Trade":"Mod_TransportAutopilot_Icon",dir:"game/Modules"}},{name:"Mining",text:{locKey:o?"TID_MODULE_BLUEPRINTS_LIST_CATEGORY_MINING":"TYPE_MOD_MINING"},path:"/mining",component:()=>Promise.all([n.e(449),n.e(902),n.e(398),n.e(837)]).then(n.bind(n,3336)),icon:{name:o?"Mod_Category_Mining":"Mod_MiningBoost_Icon",dir:"game/Modules"}},{name:"Weapon",text:{locKey:o?"TID_MODULE_BLUEPRINTS_LIST_CATEGORY_WEAPONS":"TYPE_MOD_WEAPON"},path:"/weapon",component:()=>Promise.all([n.e(449),n.e(902),n.e(398),n.e(749)]).then(n.bind(n,3458)),icon:{name:o?"Mod_Category_Weapon":"Mod_Barrage_Icon",dir:"game/Modules"}},{name:"Shield",text:{locKey:o?"TID_MODULE_BLUEPRINTS_LIST_CATEGORY_SHIELDS":"TYPE_MOD_SHIELD"},path:"/shield",component:()=>Promise.all([n.e(449),n.e(902),n.e(398),n.e(662)]).then(n.bind(n,6566)),icon:{name:o?"Mod_Category_Shield":"Mod_Shields_Icon",dir:"game/Modules"}},{name:"Support",text:{locKey:o?"TID_MODULE_BLUEPRINTS_LIST_CATEGORY_SUPPORT":"TYPE_MOD_SUPPORT"},path:"/support",component:()=>Promise.all([n.e(449),n.e(902),n.e(398),n.e(677)]).then(n.bind(n,3318)),icon:{name:o?"Mod_Category_Support":"Mod_Destiny_Icon",dir:"game/Modules"}},o?{name:"Drone",text:{locKey:"TID_MODULE_BLUEPRINTS_LIST_CATEGORY_DRONE"},path:"/drone",component:()=>Promise.all([n.e(449),n.e(902),n.e(398),n.e(177)]).then(n.bind(n,7982)),icon:{name:"Mod_Category_Drone",dir:"game/Modules"}}:void 0,o?{text:{locKey:"TID_CORP_FLAGSHIP"},path:"/ships#FlagshipModules",icon:{name:"Mod_Category_Support",dir:"game/Modules"}}:void 0]},{text:{locKey:"SECTIONS"},children:[{name:"Planets",text:{locKey:"PLANETS"},path:"/yellowstar#Planets",icon:{name:"planet",dir:"icons"}},{name:"Ships",text:{locKey:"TID_PRODUCTION_DLG_SHIPS"},path:"/ships",component:()=>Promise.all([n.e(449),n.e(902),n.e(398),n.e(431),n.e(406)]).then(n.bind(n,2030)),icon:{name:o?"Transport_DrkNeb_lv5":"Miner_lv6",dir:"game/Ships"}},{name:"Cerberus",text:{locKey:"CERBERUS"},path:"/cerberus",component:()=>Promise.all([n.e(449),n.e(902),n.e(431),n.e(362)]).then(n.bind(n,9441)),icon:{name:o?"Fighter_DrkNeb_Cerberus5_lv1":"Fighter_Cerberus6_lv1",dir:"game/Ships"}},{name:"SpaceBuildings",text:{locKey:"TID_PRODUCTION_DLG_STATIONS"},path:"/spacebuildings",component:()=>Promise.all([n.e(449),n.e(902),n.e(142)]).then(n.bind(n,3796)),icon:{name:o?"station_trade":"trade_station",dir:"game/SpaceBuildings"}},{text:{locKey:"TID_OBJECT_ACTION_ARTIFACTS"},path:"/redstar#Artifacts",icon:{name:"art",dir:"icons",bg:""}},{name:"AllianceLevels",text:{locKey:"TID_CORP_LEVELS_LABEL"},path:"/alliancelevels",component:()=>Promise.all([n.e(449),n.e(902),n.e(626)]).then(n.bind(n,9194)),icon:{name:o?"corpXp":"relic",dir:"icons"}},{name:"PlayerGoals",text:{locKey:"TID_EMPIRE_OBJECTIVES"},path:"/playergoals",component:()=>Promise.all([n.e(449),n.e(902),n.e(636)]).then(n.bind(n,5615)),icon:{name:"influence",dir:"icons"}},{name:"Achievements",text:{locKey:"TID_PLAYER_INFO_DLG_TAB_ACHIEVEMENTS"},path:"/achievements",component:()=>Promise.all([n.e(449),n.e(902),n.e(607)]).then(n.bind(n,470)),icon:{name:"Leaderboards",dir:"icons"}},{name:"Distinctions",text:{locKey:"TID_PLAYER_INFO_SECTION_BADGES"},path:"/distinctions",component:()=>Promise.all([n.e(449),n.e(902),n.e(607)]).then(n.bind(n,4951)),icon:{name:"Distinction_Emperor",dir:"game/Distinctions"}}]},{text:{locKey:"STARS"},children:[{name:"YellowStar",text:{locKey:"TID_YELLOW_STAR"},path:"/yellowstar",component:()=>Promise.all([n.e(449),n.e(902),n.e(790)]).then(n.bind(n,4125)),icon:{name:"star_yellow",dir:"game/Stars"}},{name:"RedStar",text:{locKey:"TID_RED_STAR"},path:"/redstar",component:()=>Promise.all([n.e(449),n.e(902),n.e(65)]).then(n.bind(n,438)),icon:{name:"star_red",dir:"game/Stars"}},{name:"WhiteStar",text:{locKey:"TID_WHITE_STAR"},path:"/whitestar",component:()=>Promise.all([n.e(449),n.e(902),n.e(670)]).then(n.bind(n,2598)),icon:{name:"star_white",dir:"game/Stars"}},{name:"BlueStar",text:{locKey:"TID_BLUE_STAR"},path:"/bluestar",component:()=>Promise.all([n.e(449),n.e(902),n.e(261)]).then(n.bind(n,4750)),icon:{name:"star_blue",dir:"game/Stars"}}]},{text:{locKey:"OTHER"},children:[{name:"PlanetsCalc",text:{locKey:"PLANETS_CALC"},path:"/planetscalc",component:()=>Promise.all([n.e(449),n.e(902),n.e(410),n.e(530)]).then(n.bind(n,5606)),icon:{name:"planets-calc",dir:"icons"}},{name:"ModulesCalc",text:{locKey:"MODULES_CALC"},path:"/modulescalc",component:()=>Promise.all([n.e(449),n.e(902),n.e(398),n.e(410),n.e(752)]).then(n.bind(n,3344)),icon:{name:"modules-calc",dir:"icons"}},o?{name:"GameDiffLog",text:{locKey:"Nerf log"},path:"/GameDiffLog",component:()=>Promise.all([n.e(449),n.e(902),n.e(398),n.e(934)]).then(n.bind(n,6931)),icon:{name:"clock",dir:"icons"}}:void 0,{text:{locKey:"SWITCH_ACCS",params:["by Raerten","up to Android 10"]},path:{externalLink:"https://github.com/Raerten/HSAccs"},icon:{name:"github_logo",dir:"icons"}},{name:"About",text:{locKey:"ABOUT"},path:"/about",component:()=>n.e(74).then(n.bind(n,6334)),icon:{name:"info",dir:"icons"}}]}];var s=n(6252);const i=e=>((0,s.dD)("data-v-77ab1840"),e=e(),(0,s.Cn)(),e),l={class:"container"},r=i((()=>(0,s._)("title",null,"Page not found",-1))),c=i((()=>(0,s._)("h1",{class:"glitch"}," 404 ",-1))),d=i((()=>(0,s._)("p",null," Page not found ",-1)));function u(e,t,n,o,a,i){const u=(0,s.up)("Head"),p=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[r])),_:1}),c,d,(0,s.Wm)(p,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Home ")])),_:1})])}var p=n(1232);const h={components:{Head:p.Fb}};var m=n(3744);const g=(0,m.Z)(h,[["render",u],["__scopeId","data-v-77ab1840"]]),_=g,f={path:"/:pathMatch(.*)*",name:"NotFound",component:_};function S(){return[...a.reduce(e,[]),f];function e(t,{name:n,path:o,component:a,children:s}){return a&&t.push({name:n,path:o,component:a}),s&&t.push(...s.filter(Boolean).reduce(e,[])),t}}function b(){return a.filter((e=>e.children)).map((t=>e(t)));function e({text:t,path:n,icon:o,children:a}){return{text:t,icon:o,children:a?a.filter(Boolean).map(e):void 0,link:{path:n?.externalLink||n,type:n?.externalLink?"external":"router"}}}}},957:(e,t,n)=>{"use strict";var o=n(9963),a=n(2119),s=n(9782);const i=(0,a.p7)({history:(0,a.PO)("/HadesSpace/Nebula/"),routes:(0,s.s)(),scrollBehavior(e,t,n){return n||(e.hash?new Promise((t=>{setTimeout((()=>{t({el:e.hash,behavior:"smooth",top:100})}),500)})):{top:0})}}),l=i;var r=n(5925),c=n(1578),d=n(6252);const u=e=>((0,d.dD)("data-v-5880ec45"),e=e(),(0,d.Cn)(),e),p=u((()=>(0,d._)("title",null,"Hades Space",-1))),h=u((()=>(0,d._)("div",{class:"target-wrap"},[(0,d._)("div",{id:"table-head-target"})],-1)));function m(e,t,n,o,a,s){const i=(0,d.up)("Head"),l=(0,d.up)("vue-progress-bar"),r=(0,d.up)("router-view"),c=(0,d.up)("the-header"),u=(0,d.up)("Sidebar"),m=(0,d.up)("go-top"),g=(0,d.up)("changelog"),_=(0,d.Q2)("touch");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.Wm)(i,null,{default:(0,d.w5)((()=>[p])),_:1}),(0,d.Wm)(l),(0,d.wy)(((0,d.wg)(),(0,d.iD)("div",null,[(0,d._)("div",null,[(0,d.Wm)(c,{"is-min-mode":e.isMinMode,"open-sidebar":()=>e.setShowSidebar(!0)},{default:(0,d.w5)((()=>[h,(0,d.Wm)(r)])),_:1},8,["is-min-mode","open-sidebar"]),e.isMinMode?((0,d.wg)(),(0,d.j4)(u,{key:0,open:e.sidebarIsOpen,"onUpdate:open":t[0]||(t[0]=t=>e.sidebarIsOpen=t),"swipe-handler":e.swipeHandler},null,8,["open","swipe-handler"])):(0,d.kq)("",!0)])])),[[_,e.swipeHandler,"swipe"]]),(0,d.Wm)(m),(0,d.Wm)(g,{"is-open":e.changelogIsOpen,onClose:e.changelogOnClose},null,8,["is-open","onClose"])])}var g=n(2262),_=n(1232);const f=e=>((0,d.dD)("data-v-64d51f0a"),e=e(),(0,d.Cn)(),e),S=f((()=>(0,d._)("div",{class:"icon"},null,-1))),b=[S];function v(e,t,n,a,s,i){return(0,d.wg)(),(0,d.j4)(o.uT,null,{default:(0,d.w5)((()=>[s.show?((0,d.wg)(),(0,d.iD)("div",{key:0,class:"btn",onClick:t[0]||(t[0]=(...e)=>i.scrollToTop&&i.scrollToTop(...e))},b)):(0,d.kq)("",!0)])),_:1})}var w=n(1296),C=n.n(w);const y={data(){return{show:!1}},created(){this.hide=C()((()=>this.show=!1),4e3)},mounted(){document.addEventListener("scroll",this.scroll)},unmounted(){document.removeEventListener("scroll",this.scroll)},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},scroll(){const e=window.scrollY>300;this.show!=e&&(this.show=e,this.hide())}}};var E=n(3744);const T=(0,E.Z)(y,[["render",v],["__scopeId","data-v-64d51f0a"]]),D=T,L=e=>((0,d.dD)("data-v-15822e8a"),e=e(),(0,d.Cn)(),e),O=L((()=>(0,d._)("div",{class:"offset"},null,-1))),I={class:"header"},A={class:"buttons"},M={class:"logo"},k=L((()=>(0,d._)("div",{class:"image"},null,-1)));function N(e,t,n,o,a,s){const i=(0,d.up)("navigation"),l=(0,d.up)("settings"),r=(0,d.up)("router-link");return(0,d.wg)(),(0,d.iD)("div",null,[O,(0,d.WI)(e.$slots,"default",{},void 0,!0),(0,d._)("header",I,[(0,d._)("div",A,[n.isMinMode?((0,d.wg)(),(0,d.iD)("div",{key:0,class:"sidebar",onClick:t[0]||(t[0]=(...e)=>n.openSidebar&&n.openSidebar(...e))})):((0,d.wg)(),(0,d.iD)(d.HY,{key:1},[(0,d.Wm)(i),(0,d.Wm)(l)],64))]),(0,d._)("div",M,[(0,d.Wm)(r,{to:"/"},{default:(0,d.w5)((()=>[k])),_:1})])])])}var P=n(3577);const R=e=>((0,d.dD)("data-v-1ad2e428"),e=e(),(0,d.Cn)(),e),x={class:"container"},K={class:"sections"},U=["onClick"],H=R((()=>(0,d._)("div",{class:"icon"},null,-1))),G={class:"name"},W={class:"name"},Z=["href"],B={class:"name"};function j(e,t,n,a,s,i){const l=(0,d.up)("router-link"),r=(0,d.Q2)("click-outside");return(0,d.wg)(),(0,d.iD)("nav",x,[(0,d.wy)(((0,d.wg)(),(0,d.iD)("ul",K,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(s.sections,((t,n)=>((0,d.wg)(),(0,d.iD)("li",{key:n,class:"section",onClick:()=>i.select(n)},[(0,d._)("div",null,[(0,d._)("div",{class:(0,P.C_)({selected:s.selected==n})},[H,(0,d._)("h2",G,(0,P.zw)(e.$te(t.text.locKey)?e.$t(t.text.locKey):""),1)],2),(0,d.Wm)(o.W3,{name:"list",tag:"ul",class:"list",style:(0,P.j5)({"--total":t.children.length})},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(s.selected===n?t.children:[],((t,n)=>((0,d.wg)(),(0,d.iD)("li",{key:n,style:(0,P.j5)({"--i":n+1})},["router"==t.link.type?((0,d.wg)(),(0,d.j4)(l,{key:0,to:t.link.path},{default:(0,d.w5)((()=>[(0,d._)("h2",W,(0,P.zw)(e.$t(t.text.locKey,t.text.params)),1)])),_:2},1032,["to"])):(0,d.kq)("",!0),"external"==t.link.type?((0,d.wg)(),(0,d.iD)("a",{key:1,href:t.link.path,target:"_blank"},[(0,d._)("h2",B,(0,P.zw)(e.$t(t.text.locKey,t.text.params)),1)],8,Z)):(0,d.kq)("",!0)],4)))),128))])),_:2},1032,["style"])])],8,U)))),128))])),[[r,()=>i.select(null)]])])}const $={name:"Navigation",data(){return{sections:(0,s.U)(),selected:null}},created(){this.$router.afterEach((()=>{this.select(null)}))},methods:{select(e){this.selected!==e?this.selected=e:this.selected=null}}},F=(0,E.Z)($,[["render",j],["__scopeId","data-v-1ad2e428"]]),z=F,Y=e=>((0,d.dD)("data-v-2cc9f52d"),e=e(),(0,d.Cn)(),e),V=Y((()=>(0,d._)("div",{class:"icon"},null,-1))),q=Y((()=>(0,d._)("span",{class:"name"},"Settings",-1))),J=[V,q],Q={class:"select"},X={class:"name"},ee=["value"],te={class:"switch"},ne=Y((()=>(0,d._)("div",null,[(0,d._)("p",{class:"name"}," Disable filters "),(0,d._)("p",{class:"description"},"Disable all characteristic filters used to hide unimportant information")],-1))),oe=["checked"],ae=Y((()=>(0,d._)("label",{for:"disable-filters",class:"label"},null,-1))),se={key:0,class:"switch"},ie=Y((()=>(0,d._)("div",null,[(0,d._)("p",{class:"name"}," [Debug] Show keys "),(0,d._)("p",{class:"description"})],-1))),le=["checked"],re=Y((()=>(0,d._)("label",{for:"show-keys",class:"label"},null,-1)));function ce(e,t,n,a,s,i){const l=(0,d.up)("Modal"),r=(0,d.up)("changelog");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d._)("div",{class:"button",onClick:t[0]||(t[0]=e=>s.isOpenModal=!0)},J),(0,d.Wm)(l,{open:s.isOpenModal,"onUpdate:open":t[6]||(t[6]=e=>s.isOpenModal=e),title:e.$te("TID_SETTINGS_DLG_LANGUAGE")?e.$t("TID_SETTINGS_DLG_TITLE"):""},{body:(0,d.w5)((()=>[(0,d._)("div",Q,[(0,d._)("p",X,(0,P.zw)(e.$t("TID_SETTINGS_DLG_LANGUAGE")),1),(0,d.wy)((0,d._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.languageCode=e),onChange:t[2]||(t[2]=(...e)=>i.changeLanguage&&i.changeLanguage(...e))},[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(s.languages,(e=>((0,d.wg)(),(0,d.iD)("option",{key:e.Code,value:e.Code},(0,P.zw)(e.Name),9,ee)))),128))],544),[[o.bM,s.languageCode]])]),(0,d._)("div",te,[ne,(0,d._)("input",{id:"disable-filters",class:"checkbox",type:"checkbox",checked:e.$store.state.userSettings.disableFilters,onChange:t[3]||(t[3]=(...e)=>i.switchDisableFilters&&i.switchDisableFilters(...e))},null,40,oe),ae]),s.isDebug?((0,d.wg)(),(0,d.iD)("div",se,[ie,(0,d._)("input",{id:"show-keys",class:"checkbox",type:"checkbox",checked:e.$store.state.userSettings.showKeys,onChange:t[4]||(t[4]=(...e)=>i.switchShowKeys&&i.switchShowKeys(...e))},null,40,le),re])):(0,d.kq)("",!0),(0,d._)("div",{class:"button",onClick:t[5]||(t[5]=e=>s.showChangelog=!0)},(0,P.zw)(e.$t("OPEN_CHANGELOG")),1)])),_:1},8,["open","title"]),(0,d.Wm)(r,{"is-open":s.showChangelog,title:"",onClose:t[7]||(t[7]=e=>s.showChangelog=!1)},null,8,["is-open"])])}var de=n(6282);const ue={class:"ver"};function pe(e,t,n,o,a,s){const i=(0,d.up)("vue-markdown"),l=(0,d.up)("Modal");return(0,d.wg)(),(0,d.j4)(l,{open:e.isOpen,size:e.modalSize,title:e.titleKey?e.$t(e.titleKey):null,"onUpdate:open":t[0]||(t[0]=t=>e.$emit("close"))},{body:(0,d.w5)((()=>[(0,d._)("p",ue,(0,P.zw)(e.$t("CURRENT_VERSION"))+": "+(0,P.zw)(e.version),1),(0,d.Wm)(i,{source:e.text,class:"content"},null,8,["source"])])),_:1},8,["open","size","title"])}var he=n(8532);const me=(0,d.aZ)({name:"Changelog",components:{VueMarkdown:he.Z,Modal:de.Z},props:{isOpen:{type:Boolean,required:!0},titleKey:{type:String,default:"UPDATED"}},emits:["close"],setup(){return{text:(0,g.iH)(""),modalSize:de.z.LARGE,version:"3.2.0"}},mounted(){n.e(782).then(n.bind(n,5782)).then((e=>this.text=e.default))}}),ge=(0,E.Z)(me,[["render",pe],["__scopeId","data-v-738ca78d"]]),_e=ge;var fe=n(1303),Se=n(9979);const be={name:"Settings",components:{Changelog:_e,Modal:de.Z},data(){return{isOpenModal:!1,showChangelog:!1,languages:Se.Z,languageCode:this.$store.state.userSettings.language,isDebug:!1}},methods:{changeLanguage(){this.$store.commit(fe.Z.SET_LANGUAGE,this.languageCode)},switchDisableFilters(){this.$store.commit(fe.Z.SWITCH_DISABLE_FILTERS)},switchShowKeys(){this.$store.commit(fe.Z.DEBUG_SWITCH_SHOW_KEYS)}}},ve=(0,E.Z)(be,[["render",ce],["__scopeId","data-v-2cc9f52d"]]),we=ve,Ce={name:"Header",components:{Navigation:z,Settings:we},props:{isMinMode:{type:Boolean,requested:!0,default:null},openSidebar:{type:Function,requested:!0,default:null}}},ye=(0,E.Z)(Ce,[["render",N],["__scopeId","data-v-15822e8a"]]),Ee=ye,Te={key:0,class:"sidebar"};function De(e,t){const n=(0,d.up)("navigation"),a=(0,d.up)("settings"),s=(0,d.up)("modal"),i=(0,d.Q2)("touch");return(0,d.wg)(),(0,d.j4)(s,{open:e.propModel,"onUpdate:open":t[0]||(t[0]=t=>e.propModel=t)},{default:(0,d.w5)((()=>[(0,d.Wm)(o.uT,null,{default:(0,d.w5)((()=>[e.open?(0,d.wy)(((0,d.wg)(),(0,d.iD)("div",Te,[(0,d.Wm)(n),(0,d.Wm)(a)])),[[i,e.swipeHandler,"swipe"]]):(0,d.kq)("",!0)])),_:1})])),_:1},8,["open"])}const Le=(0,d.aZ)({name:"Sidebar",components:{Navigation:z,Settings:we,Modal:de.Z},props:{open:Boolean,swipeHandler:{type:Function,default:void 0}},emits:["update:open"],computed:{propModel:{get(){return this.open},set(e){this.$emit("update:open",e)}}}}),Oe=(0,E.Z)(Le,[["render",De],["__scopeId","data-v-2486165b"]]),Ie=Oe,Ae=60;function Me(e){const t=(0,g.iH)(!1),n=(0,g.iH)(window.innerWidth*Ae/100);return{setShow:a,swipeHandler:s,onResize:o,isOpen:t};function o(){n.value=window.innerWidth*Ae/100,e||a(!1)}function a(e){t.value=e}function s(t,o){window.TouchEvent&&"touchend"===o.type&&("right"===t&&e&&o.changedTouches[0].clientX<=n.value&&a(!0),"left"===t&&a(!1))}}const{VERSION:ke}={VUE_APP_NEBULA_BUILD:"true",NODE_ENV:"production",BASE_URL:"/HadesSpace/Nebula/",VERSION:"3.2.0"};function Ne(){const e=(0,g.iH)(!1);return{isOpen:e,init:t,onClose:o,version:ke};function t(){n()&&l.afterEach((()=>{e.value=!0}))}function n(){const e=e=>e.split(/\./g).slice(0,-1),t=e(ke),n=e(c.Z.state.userSettings.lastVersionChangelog);while(t.length||n.length){const e=Number(t.shift()),o=Number(n.shift());if(e!==o)return e>o||isNaN(o)}return!1}function o(){c.Z.commit(fe.Z.SET_LAST_CHECKED_VERSION_CHANGELOG,ke),e.value=!1}}const Pe=1e3,Re=(0,d.aZ)({name:"App",components:{Head:_.Fb,Changelog:_e,GoTop:D,TheHeader:Ee,Sidebar:Ie},setup(){const e=(0,g.iH)(window.innerWidth<Pe),{setShow:t,swipeHandler:n,onResize:o,isOpen:a}=Me(e),{isOpen:s,init:i,onClose:l}=Ne();return{isMinMode:e,setShowSidebar:t,sidebarIsOpen:a,swipeHandler:n,onResize:o,changelogIsOpen:s,initChangelog:i,changelogOnClose:l}},mounted(){window.addEventListener("resize",this.resize),this.$Progress.finish(),this.initChangelog()},unmounted(){window.removeEventListener("resize",this.resize)},created(){this.progressBar(),this.$router.beforeEach((()=>{this.setShowSidebar(!1)}))},methods:{progressBar(){this.$Progress.start(),this.$router.beforeEach((async(e,t,n)=>{e.path!==t.path&&(this.$Progress.start(),this.$Progress.set(30)),n()})),this.$router.afterEach((async()=>{this.$Progress.finish()}))},resize(){this.isMinMode=window.innerWidth<Pe,this.onResize()}}}),xe=(0,E.Z)(Re,[["render",m],["__scopeId","data-v-5880ec45"]]),Ke=xe;var Ue=n(4366),He=n.n(Ue),Ge=n(7398),We=n(4032);const Ze={VueProgressBar:{color:"#aee3fc",failedColor:"#ff4646",thickness:"3px",transition:{speed:"0.2s",opacity:"0.2s",termination:300},autoRevert:!0,location:"top",inverse:!1},VueGtag:{config:{id:"G-Q3X19N7LEN"}}},Be={beforeMount(e,t){const n=n=>{e.contains(n.target)||e===n.target||t.value(n)};e.__vueClickEventHandler__=n,document.addEventListener("click",n)},unmounted(e){document.removeEventListener("click",e.__vueClickEventHandler__)}};var je=n(5205);(0,je.z)("/HadesSpace/Nebula/service-worker.js",{ready(){console.log("App is being served from cache by a service worker. \nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),window.location.reload()},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,o.ri)(Ke).use((0,_.G6)()).use(He(),Ze.VueProgressBar).use(Ge.ZP,Ze.VueGtag,l).use(We.Z).directive("click-outside",Be).use(r.ZP).use(l).use(c.Z).mount("#app")},1578:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var o=n(3907),a=n(4919),s=n(1303),i=n(9979),l=n(5925);const r="settings",c=Object.values(i.Z).map((e=>e.Code)),d="en",u=f(r),p=window.navigator.language.slice(0,2),h=!1,m={[s.Z.SET_LANGUAGE](e,t){return e.language=t,_(r,e),(0,l.g)(t)},[s.Z.SWITCH_DISABLE_FILTERS](e){return e.disableFilters=!e.disableFilters,_(r,e),e.disableFilters},[s.Z.DEBUG_SWITCH_SHOW_KEYS](e){return e.showKeys=!e.showKeys,_(r,e),e.showKeys},[s.Z.SET_LAST_CHECKED_VERSION_CHANGELOG](e,t){return e.lastVersionChangelog=t,_(r,e),e.lastVersionChangelog}},g={namespaced:!1,strict:h,state:{language:u.language||(p in c?p:d),disableFilters:u.disableFilters,showKeys:u.showKeys,lastVersionChangelog:u.lastVersionChangelog},mutations:m};function _(e,t){localStorage.setItem(e,JSON.stringify(t))}function f(e){let t={language:d,disableFilters:!1,showKeys:!1,lastVersionChangelog:"0.0.0"};if(localStorage.getItem(e))try{t={...t,...JSON.parse(localStorage.getItem(e)||"{}")}}catch(n){console.error(n),localStorage.removeItem(e)}return t}const S=!1,b={modals:[]},v={[a.Z.MODAL_OPEN](e,t){e.modals.push(t)},[a.Z.MODAL_CLOSE](e,t){const n=e.modals.indexOf(t);-1!=n&&e.modals.splice(n,1)}},w={[a.Z.MODAL_OPEN]({state:e,commit:t}){const n=e.modals.length+1;return t(a.Z.MODAL_OPEN,n),n},[a.Z.MODAL_CLOSE]({commit:e},t){e(a.Z.MODAL_CLOSE,t)}},C=(0,o.MT)({strict:S,state:b,mutations:v,actions:w,modules:{userSettings:g}})},1303:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=Object.freeze({SET_LANGUAGE:"SetLanguage",SWITCH_DISABLE_FILTERS:"SwitchDisableFilters",DEBUG_SWITCH_SHOW_KEYS:"DebugSwitchShowKeys",SET_LAST_CHECKED_VERSION_CHANGELOG:"SetLastCheckedVersionChangelog"})},4919:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=Object.freeze({MODAL_OPEN:"ModalOpen",MODAL_CLOSE:"ModalClose"})},6282:(e,t,n)=>{"use strict";n.d(t,{z:()=>u,Z:()=>g});var o=n(6252),a=n(9963),s=n(3577);const i={key:0,class:"content-wrapper fixed"},l={class:"head"},r={class:"body"};function c(e,t,n,c,d,u){return(0,o.wg)(),(0,o.iD)("div",null,[((0,o.wg)(),(0,o.j4)(o.lR,{disabled:!u.modalActive,to:"#modals"},[(0,o.Wm)(a.uT,{name:"background"},{default:(0,o.w5)((()=>[u.modalActive?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"background fixed",onClick:t[0]||(t[0]=(...e)=>u.onClose&&u.onClose(...e))})):(0,o.kq)("",!0)])),_:1})],8,["disabled"])),((0,o.wg)(),(0,o.j4)(o.lR,{disabled:!u.modalActive,to:"#modals"},[(0,o.WI)(e.$slots,"default",{},(()=>[(0,o.Wm)(a.uT,{name:"content-wrapper"},{default:(0,o.w5)((()=>[u.modalActive?((0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",{class:(0,s.C_)(["content",`size-${n.size}`])},[(0,o._)("div",l,[(0,o._)("div",{class:"close-button",onClick:t[1]||(t[1]=(...e)=>u.onClose&&u.onClose(...e))}),(0,o.WI)(e.$slots,"head",{},(()=>[(0,o._)("h2",null,(0,s.zw)(n.title),1)]),!0)]),(0,o._)("div",r,[(0,o.WI)(e.$slots,"body",{},void 0,!0)])],2)])):(0,o.kq)("",!0)])),_:3})]),!0)],8,["disabled"]))])}var d=n(4919);const u={SMALL:"small",MEDIUM:"medium",LARGE:"large"},p={name:"Modal",props:{size:{type:String,default:u.MEDIUM},title:{type:String,default:void 0},open:Boolean},emits:["update:open"],data(){return{modalKey:0}},computed:{modalActive(){return this.open&&this.$store.state.modals.at(-1)==this.modalKey}},watch:{open(){this.open?this.$store.dispatch(d.Z.MODAL_OPEN).then((e=>{this.modalKey=e})):this.$store.dispatch(d.Z.MODAL_CLOSE,this.modalKey)}},unmounted(){this.$store.dispatch(d.Z.MODAL_CLOSE,this.modalKey)},created(){this.$router.beforeResolve((()=>{if(this.modalActive)return this.onClose(),!1}))},methods:{onClose(){this.$emit("update:open",!1)}}};var h=n(3744);const m=(0,h.Z)(p,[["render",c],["__scopeId","data-v-44932565"]]),g=m},9979:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o={English:{Name:"English",Code:"en",UnityLocale:"english",SteamLocale:"english",SteamCode:"en"},Français:{Name:"Français",Code:"fr",UnityLocale:"french",SteamLocale:"french",SteamCode:"fr"},Deutsch:{Name:"Deutsch",Code:"de",UnityLocale:"german",SteamLocale:"german",SteamCode:"de"},Español:{Name:"Español",Code:"es",UnityLocale:"spanish",SteamLocale:"spanish",SteamCode:"es"},Italiano:{Name:"Italiano",Code:"it",UnityLocale:"italian",SteamLocale:"italian",SteamCode:"it"},Pусский:{Name:"Pусский",Code:"ru",UnityLocale:"russian",SteamLocale:"russian",SteamCode:"ru"},Português:{Name:"Português",Code:"pt",UnityLocale:"portuguese",SteamLocale:"portuguese",SteamCode:"pt"},한국어:{Name:"한국어",Code:"ko",UnityLocale:"korean",SteamLocale:"koreana",SteamCode:"ko"},日本語:{Name:"日本語",Code:"jp",UnityLocale:"japanese",SteamLocale:"japanese",SteamCode:"ja"},简体中文:{Name:"简体中文",Code:"zh-si",UnityLocale:"chinese",SteamLocale:"schinese",SteamCode:"zh-CN"}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,(()=>{var e=[];n.O=(t,o,a,s)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,a,s]=e[d],l=!0,r=0;r<o.length;r++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](o[r])))?o.splice(r--,1):(l=!1,s<i&&(i=s));if(l){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,a,s]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+({65:"RedStar",74:"About",142:"SpaceBuildings",177:"Drone",261:"BlueStar",362:"Cerberus",406:"Ships",530:"PlanetsCalc",607:"Achievements",626:"AllianceLevels",636:"PlayerGoals",662:"Shield",670:"WhiteStar",677:"Support",683:"Trade",726:"Index",749:"Weapon",752:"ModulesCalc",790:"YellowStar",837:"Mining",934:"DarkRedStar"}[e]||e)+"."+{65:"dc7cdcb4",74:"ce4125b8",142:"70efb9ab",177:"753d8b89",261:"71d6a9e0",275:"bbb48638",335:"ec018578",362:"f5ef2046",383:"d6394588",398:"54e7be58",406:"af213836",410:"5b390922",431:"af30e478",445:"391696c2",449:"b71973a8",454:"78ff1d71",471:"83a1331a",506:"baa5b2e2",530:"55de23dc",607:"c0ef8efa",626:"9ada735f",636:"ac01f676",662:"9c8bcbc0",670:"36c602d7",677:"3872aef3",683:"3e9204e1",707:"4c2a9a2f",708:"003484dd",726:"ea5cd76c",749:"67158cc5",752:"c4b436aa",782:"806f978a",790:"35755352",837:"ac6a0c93",891:"faf4fed9",902:"4ed8acf4",934:"535ea745",955:"5a84bb5f"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+({65:"RedStar",74:"About",142:"SpaceBuildings",177:"Drone",261:"BlueStar",362:"Cerberus",406:"Ships",530:"PlanetsCalc",607:"Achievements",626:"AllianceLevels",636:"PlayerGoals",662:"Shield",670:"WhiteStar",677:"Support",683:"Trade",726:"Index",749:"Weapon",752:"ModulesCalc",790:"YellowStar",837:"Mining",934:"DarkRedStar"}[e]||e)+"."+{65:"f113a4a7",74:"0ffbb70d",142:"fa01bd27",177:"fa01bd27",261:"fa01bd27",362:"7a8b891e",406:"6ccbe969",449:"abbe0c3c",471:"236bd5b0",530:"51e14cb0",607:"fa01bd27",626:"fa01bd27",636:"fa01bd27",662:"fa01bd27",670:"31d0d777",677:"fa01bd27",683:"fa01bd27",726:"a34217a2",749:"fa01bd27",752:"c93aca71",790:"31fedb75",837:"fa01bd27",902:"2430f16f",934:"06d5166f"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="hades-space:";n.l=(o,a,s,i)=>{if(e[o])e[o].push(a);else{var l,r;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+s){l=u;break}}l||(r=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+s),l.src=o),e[o]=[a];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(h);var a=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),r&&document.head.appendChild(l)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/HadesSpace/Nebula/"})(),(()=>{var e=(e,t,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=s=>{if(a.onerror=a.onload=null,"load"===s.type)n();else{var i=s&&("load"===s.type?"missing":s.type),l=s&&s.target&&s.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=i,r.request=l,a.parentNode.removeChild(a),o(r)}};return a.onerror=a.onload=s,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],s=a.getAttribute("data-href");if(s===e||s===t)return a}},o=o=>new Promise(((a,s)=>{var i=n.miniCssF(o),l=n.p+i;if(t(i,l))return a();e(o,l,a,s)})),a={143:0};n.f.miniCss=(e,t)=>{var n={65:1,74:1,142:1,177:1,261:1,362:1,406:1,449:1,471:1,530:1,607:1,626:1,636:1,662:1,670:1,677:1,683:1,726:1,749:1,752:1,790:1,837:1,902:1,934:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,o)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var s=new Promise(((n,o)=>a=e[t]=[n,o]));o.push(a[2]=s);var i=n.p+n.u(t),l=new Error,r=o=>{if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",l.name="ChunkLoadError",l.type=s,l.request=i,a[1](l)}};n.l(i,r,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,o)=>{var a,s,[i,l,r]=o,c=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(r)var d=r(n)}for(t&&t(o);c<i.length;c++)s=i[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},o=self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[998],(()=>n(957)));o=n.O(o)})();