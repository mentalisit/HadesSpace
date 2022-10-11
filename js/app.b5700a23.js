(()=>{var e={41758:(e,t,n)=>{var o={"./de.json":[19806,806],"./en.json":[40561,561],"./es.json":[69988,988],"./fr.json":[68560,560],"./it.json":[67948,948],"./jp.json":[44964,964],"./ko.json":[22256,256],"./pt.json":[41668,668],"./ru.json":[51278,278],"./zh-si.json":[69400,400]};function a(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return n.e(t[1]).then((()=>n.t(a,19)))}a.keys=()=>Object.keys(o),a.id=41758,e.exports=a},15925:(e,t,n)=>{"use strict";n.d(t,{J1:()=>c,ZP:()=>r,g:()=>l});var o=n(66252),a=n(79150),s=n(51578);const i=(0,a.o)({locale:s.Z.state.userSettings.language});d(),c(i.global.locale);const r=i;async function l(e){await c(e),d(),i.global.locale=e}async function c(e){const t=await n(41758)(`./${e}.json`).then((e=>e.default));return i.global.setLocaleMessage(e,t),(0,o.Y3)()}function d(){document.querySelector("html")?.setAttribute("lang",i.global.locale)}},59782:(e,t,n)=>{"use strict";n.d(t,{s:()=>b,U:()=>v});const o=!!{NODE_ENV:"production",BASE_URL:"/HadesSpace/"}.VUE_APP_NEBULA_BUILD,a=[{name:"Index",path:"/",component:()=>Promise.all([n.e(449),n.e(726)]).then(n.bind(n,68123))},{text:{locKey:"TID_SHIP_UPGRADE_DLG_TITLE"},children:[{name:"Trade",text:{locKey:"TYPE_MOD_TRADE"},path:"/trade",component:()=>Promise.all([n.e(449),n.e(46),n.e(100),n.e(683)]).then(n.bind(n,82512)),icon:{name:o?"Mod_ArtifactBoost_Icon":"Mod_TransportAutopilot_Icon",dir:"game/Modules"}},{name:"Mining",text:{locKey:"TYPE_MOD_MINING"},path:"/mining",component:()=>Promise.all([n.e(449),n.e(46),n.e(100),n.e(837)]).then(n.bind(n,84744)),icon:{name:o?"Mod_Enrich_Icon":"Mod_MiningBoost_Icon",dir:"game/Modules"}},{name:"Weapon",text:{locKey:"TYPE_MOD_WEAPON"},path:"/weapon",component:()=>Promise.all([n.e(449),n.e(46),n.e(100),n.e(749)]).then(n.bind(n,42817)),icon:{name:o?"Mod_ChainRay_Icon":"Mod_Barrage_Icon",dir:"game/Modules"}},{name:"Shield",text:{locKey:"TYPE_MOD_SHIELD"},path:"/shield",component:()=>Promise.all([n.e(449),n.e(46),n.e(100),n.e(662)]).then(n.bind(n,76566)),icon:{name:"Mod_PassiveShield_Icon",dir:"game/Modules"}},{name:"Support",text:{locKey:"TYPE_MOD_SUPPORT"},path:"/support",component:()=>Promise.all([n.e(449),n.e(46),n.e(100),n.e(677)]).then(n.bind(n,12698)),icon:{name:o?"Mod_DeltaDrone_Icon":"Mod_Destiny_Icon",dir:"game/Modules"}}]},{text:{locKey:"SECTIONS"},children:[{name:"Planets",text:{locKey:"PLANETS"},path:"/yellowstar#Planets",icon:{name:"planet",dir:"icons"}},{name:"Ships",text:{locKey:"TID_PRODUCTION_DLG_SHIPS"},path:"/ships",component:()=>Promise.all([n.e(449),n.e(46),n.e(100),n.e(85),n.e(406)]).then(n.bind(n,22030)),icon:{name:o?"Transport_DrkNeb_lv5":"Miner_lv6",dir:"game/Ships"}},{name:"Cerberus",text:{locKey:"CERBERUS"},path:"/cerberus",component:()=>Promise.all([n.e(449),n.e(46),n.e(85),n.e(362)]).then(n.bind(n,29087)),icon:{name:o?"Fighter_DrkNeb_Cerberus5_lv1":"Fighter_Cerberus6_lv1",dir:"game/Ships"}},{name:"SpaceBuildings",text:{locKey:"TID_PRODUCTION_DLG_STATIONS"},path:"/spacebuildings",component:()=>Promise.all([n.e(449),n.e(46),n.e(142)]).then(n.bind(n,85491)),icon:{name:o?"station_trade":"trade_station",dir:"game/SpaceBuildings"}},{text:{locKey:"TID_OBJECT_ACTION_ARTIFACTS"},path:"/redstar#Artifacts",icon:{name:"art",dir:"icons",bg:""}},{name:"AllianceLevels",text:{locKey:"TID_CORP_LEVELS_LABEL"},path:"/alliancelevels",component:()=>Promise.all([n.e(449),n.e(46),n.e(626)]).then(n.bind(n,90483)),icon:{name:o?"corpXp":"relic",dir:"icons"}},{name:"PlayerGoals",text:{locKey:"TID_EMPIRE_OBJECTIVES"},path:"/playergoals",component:()=>Promise.all([n.e(449),n.e(46),n.e(636)]).then(n.bind(n,89859)),icon:{name:"influence",dir:"icons"}},{name:"Achievements",text:{locKey:"TID_PLAYER_INFO_DLG_TAB_ACHIEVEMENTS"},path:"/achievements",component:()=>Promise.all([n.e(449),n.e(46),n.e(607)]).then(n.bind(n,97389)),icon:{name:"Leaderboards",dir:"icons"}},{name:"Distinctions",text:{locKey:"TID_PLAYER_INFO_SECTION_BADGES"},path:"/distinctions",component:()=>Promise.all([n.e(449),n.e(46),n.e(607)]).then(n.bind(n,38200)),icon:{name:"Distinction_Emperor",dir:"game/Distinctions"}}]},{text:{locKey:"STARS"},children:[{name:"YellowStar",text:{locKey:"TID_YELLOW_STAR"},path:"/yellowstar",component:()=>Promise.all([n.e(449),n.e(46),n.e(888),n.e(790)]).then(n.bind(n,83961)),icon:{name:"star_yellow",dir:"game/Stars"}},{name:"RedStar",text:{locKey:"TID_RED_STAR"},path:"/redstar",component:()=>Promise.all([n.e(449),n.e(46),n.e(65)]).then(n.bind(n,99330)),icon:{name:"star_red",dir:"game/Stars"}},{name:"WhiteStar",text:{locKey:"TID_WHITE_STAR"},path:"/whitestar",component:()=>Promise.all([n.e(449),n.e(46),n.e(888),n.e(670)]).then(n.bind(n,22598)),icon:{name:"star_white",dir:"game/Stars"}},{name:"BlueStar",text:{locKey:"TID_BLUE_STAR"},path:"/bluestar",component:()=>Promise.all([n.e(449),n.e(46),n.e(261)]).then(n.bind(n,12228)),icon:{name:"star_blue",dir:"game/Stars"}}]},{text:{locKey:"OTHER"},children:[{name:"PlanetsCalc",text:{locKey:"PLANETS_CALC"},path:"/planetscalc",component:()=>Promise.all([n.e(449),n.e(46),n.e(410),n.e(530)]).then(n.bind(n,21664)),icon:{name:"planets-calc",dir:"icons"}},{name:"ModulesCalc",text:{locKey:"MODULES_CALC"},path:"/modulescalc",component:()=>Promise.all([n.e(449),n.e(46),n.e(100),n.e(410),n.e(752)]).then(n.bind(n,93344)),icon:{name:"modules-calc",dir:"icons"}},o?{name:"GameDiffLog",text:{locKey:"Nerf log"},path:"/GameDiffLog",component:()=>Promise.all([n.e(449),n.e(46),n.e(934)]).then(n.bind(n,84620)),icon:{name:"clock",dir:"icons"}}:void 0,{text:{locKey:"SWITCH_ACCS",params:["by Raerten","up to Android 10"]},path:{externalLink:"https://github.com/Raerten/HSAccs"},icon:{name:"github_logo",dir:"icons"}},{name:"About",text:{locKey:"ABOUT"},path:"/about",component:()=>n.e(74).then(n.bind(n,26334)),icon:{name:"info",dir:"icons"}}]}];var s=n(66252);const i=e=>((0,s.dD)("data-v-77ab1840"),e=e(),(0,s.Cn)(),e),r={class:"container"},l=i((()=>(0,s._)("title",null,"Page not found",-1))),c=i((()=>(0,s._)("h1",{class:"glitch"}," 404 ",-1))),d=i((()=>(0,s._)("p",null," Page not found ",-1)));function u(e,t,n,o,a,i){const u=(0,s.up)("Head"),h=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[l])),_:1}),c,d,(0,s.Wm)(h,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Home ")])),_:1})])}var h=n(21232);const p={components:{Head:h.Fb}};var m=n(83744);const g=(0,m.Z)(p,[["render",u],["__scopeId","data-v-77ab1840"]]),_=g,f={path:"/:pathMatch(.*)*",name:"NotFound",component:_};function b(){return[...a.reduce(e,[]),f];function e(t,{name:n,path:o,component:a,children:s}){return a&&t.push({name:n,path:o,component:a}),s&&t.push(...s.filter(Boolean).reduce(e,[])),t}}function v(){return a.filter((e=>e.children)).map((t=>e(t)));function e({text:t,path:n,icon:o,children:a}){return{text:t,icon:o,children:a?a.filter(Boolean).map(e):void 0,link:{path:n?.externalLink||n,type:n?.externalLink?"external":"router"}}}}},80289:(e,t,n)=>{"use strict";var o=n(49963),a=n(66252);const s=e=>((0,a.dD)("data-v-52b5c508"),e=e(),(0,a.Cn)(),e),i=s((()=>(0,a._)("title",null,"Hades Space",-1))),r=s((()=>(0,a._)("div",{class:"target-wrap"},[(0,a._)("div",{id:"table-head-target"})],-1)));function l(e,t,n,o,s,l){const c=(0,a.up)("Head"),d=(0,a.up)("vue-progress-bar"),u=(0,a.up)("router-view"),h=(0,a.up)("the-header"),p=(0,a.up)("Sidebar"),m=(0,a.up)("go-top"),g=(0,a.Q2)("touch");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[i])),_:1}),(0,a.Wm)(d),(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",null,[(0,a.Wm)(h,{"is-min-mode":e.isMinMode,"open-sidebar":()=>e.setShowSidebar(!0)},{default:(0,a.w5)((()=>[r,(0,a.Wm)(u)])),_:1},8,["is-min-mode","open-sidebar"]),e.isMinMode?((0,a.wg)(),(0,a.j4)(p,{key:0,open:e.sidebarIsOpen,"onUpdate:open":t[0]||(t[0]=t=>e.sidebarIsOpen=t),"swipe-handler":e.swipeHandler},null,8,["open","swipe-handler"])):(0,a.kq)("",!0)])])),[[g,e.swipeHandler,"swipe"]]),(0,a.Wm)(m)])}var c=n(2262),d=n(21232);const u=e=>((0,a.dD)("data-v-64d51f0a"),e=e(),(0,a.Cn)(),e),h=u((()=>(0,a._)("div",{class:"icon"},null,-1))),p=[h];function m(e,t,n,s,i,r){return(0,a.wg)(),(0,a.j4)(o.uT,null,{default:(0,a.w5)((()=>[i.show?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"btn",onClick:t[0]||(t[0]=(...e)=>r.scrollToTop&&r.scrollToTop(...e))},p)):(0,a.kq)("",!0)])),_:1})}var g=n(91296),_=n.n(g);const f={data(){return{show:!1}},created(){this.hide=_()((()=>this.show=!1),4e3)},mounted(){document.addEventListener("scroll",this.scroll)},unmounted(){document.removeEventListener("scroll",this.scroll)},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},scroll(){const e=window.scrollY>300;this.show!=e&&(this.show=e,this.hide())}}};var b=n(83744);const v=(0,b.Z)(f,[["render",m],["__scopeId","data-v-64d51f0a"]]),S=v,w=e=>((0,a.dD)("data-v-3c6699c6"),e=e(),(0,a.Cn)(),e),y=w((()=>(0,a._)("div",{class:"offset"},null,-1))),E={key:0,class:"header"},C={class:"buttons"},D={class:"logo"},L=w((()=>(0,a._)("div",{class:"image"},null,-1)));function T(e,t,n,s,i,r){const l=(0,a.up)("navigation"),c=(0,a.up)("settings"),d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[y,(0,a.WI)(e.$slots,"default",{},void 0,!0),(0,a.Wm)(o.uT,null,{default:(0,a.w5)((()=>[i.active?((0,a.wg)(),(0,a.iD)("header",E,[(0,a._)("div",C,[n.isMinMode?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"sidebar",onClick:t[0]||(t[0]=(...e)=>n.openSidebar&&n.openSidebar(...e))})):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Wm)(l),(0,a.Wm)(c)],64))]),(0,a._)("div",D,[(0,a.Wm)(d,{to:"/"},{default:(0,a.w5)((()=>[L])),_:1})])])):(0,a.kq)("",!0)])),_:1})])}var k=n(3577);const O=e=>((0,a.dD)("data-v-1ad2e428"),e=e(),(0,a.Cn)(),e),I={class:"container"},A={class:"sections"},P=["onClick"],M=O((()=>(0,a._)("div",{class:"icon"},null,-1))),N={class:"name"},x={class:"name"},K=["href"],H={class:"name"};function j(e,t,n,s,i,r){const l=(0,a.up)("router-link"),c=(0,a.Q2)("click-outside");return(0,a.wg)(),(0,a.iD)("nav",I,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("ul",A,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.sections,((t,n)=>((0,a.wg)(),(0,a.iD)("li",{key:n,class:"section",onClick:()=>r.select(n)},[(0,a._)("div",null,[(0,a._)("div",{class:(0,k.C_)({selected:i.selected==n})},[M,(0,a._)("h2",N,(0,k.zw)(e.$te(t.text.locKey)?e.$t(t.text.locKey):""),1)],2),(0,a.Wm)(o.W3,{name:"list",tag:"ul",class:"list",style:(0,k.j5)({"--total":t.children.length})},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.selected===n?t.children:[],((t,n)=>((0,a.wg)(),(0,a.iD)("li",{key:n,style:(0,k.j5)({"--i":n+1})},["router"==t.link.type?((0,a.wg)(),(0,a.j4)(l,{key:0,to:t.link.path},{default:(0,a.w5)((()=>[(0,a._)("h2",x,(0,k.zw)(e.$t(t.text.locKey,t.text.params)),1)])),_:2},1032,["to"])):(0,a.kq)("",!0),"external"==t.link.type?((0,a.wg)(),(0,a.iD)("a",{key:1,href:t.link.path,target:"_blank"},[(0,a._)("h2",H,(0,k.zw)(e.$t(t.text.locKey,t.text.params)),1)],8,K)):(0,a.kq)("",!0)],4)))),128))])),_:2},1032,["style"])])],8,P)))),128))])),[[c,()=>r.select(null)]])])}var W=n(59782);const U={name:"Navigation",data(){return{sections:(0,W.U)(),selected:null}},created(){this.$router.afterEach((()=>{this.select(null)}))},methods:{select(e){this.selected!==e?this.selected=e:this.selected=null}}},B=(0,b.Z)(U,[["render",j],["__scopeId","data-v-1ad2e428"]]),R=B,Z=e=>((0,a.dD)("data-v-80706932"),e=e(),(0,a.Cn)(),e),$=Z((()=>(0,a._)("div",{class:"icon"},null,-1))),G=Z((()=>(0,a._)("span",{class:"name"},"Settings",-1))),F=[$,G],z={class:"select"},Y={class:"name"},q=["value"],V={class:"switch"},J=Z((()=>(0,a._)("div",null,[(0,a._)("p",{class:"name"}," Disable filters "),(0,a._)("p",{class:"description"},"Disable all characteristic filters used to hide unimportant information")],-1))),Q=["checked"],X=Z((()=>(0,a._)("label",{for:"disable-filters",class:"label"},null,-1))),ee={key:0,class:"switch"},te=Z((()=>(0,a._)("div",null,[(0,a._)("p",{class:"name"}," [Debug] Show keys "),(0,a._)("p",{class:"description"})],-1))),ne=["checked"],oe=Z((()=>(0,a._)("label",{for:"show-keys",class:"label"},null,-1)));function ae(e,t,n,s,i,r){const l=(0,a.up)("Modal");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",{class:"button",onClick:t[0]||(t[0]=e=>i.isOpenModal=!0)},F),(0,a.Wm)(l,{open:i.isOpenModal,"onUpdate:open":t[5]||(t[5]=e=>i.isOpenModal=e),title:e.$te("TID_SETTINGS_DLG_LANGUAGE")?e.$t("TID_SETTINGS_DLG_TITLE"):""},{body:(0,a.w5)((()=>[(0,a._)("div",z,[(0,a._)("p",Y,(0,k.zw)(e.$t("TID_SETTINGS_DLG_LANGUAGE")),1),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.languageCode=e),onChange:t[2]||(t[2]=(...e)=>r.changeLanguage&&r.changeLanguage(...e))},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.languages,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.Code,value:e.Code},(0,k.zw)(e.Name),9,q)))),128))],544),[[o.bM,i.languageCode]])]),(0,a._)("div",V,[J,(0,a._)("input",{id:"disable-filters",class:"checkbox",type:"checkbox",checked:e.$store.state.userSettings.disableFilters,onChange:t[3]||(t[3]=(...e)=>r.switchDisableFilters&&r.switchDisableFilters(...e))},null,40,Q),X]),i.isDebug?((0,a.wg)(),(0,a.iD)("div",ee,[te,(0,a._)("input",{id:"show-keys",class:"checkbox",type:"checkbox",checked:e.$store.state.userSettings.showKeys,onChange:t[4]||(t[4]=(...e)=>r.switchShowKeys&&r.switchShowKeys(...e))},null,40,ne),oe])):(0,a.kq)("",!0)])),_:1},8,["open","title"])])}var se=n(34272),ie=n(31303),re=n(1986);const le={name:"Settings",components:{Modal:se.Z},data(){return{isOpenModal:!1,languages:re.Z,languageCode:this.$store.state.userSettings.language,isDebug:!1}},methods:{changeLanguage(){this.$store.commit(ie.Z.SET_LANGUAGE,this.languageCode)},switchDisableFilters(){this.$store.commit(ie.Z.SWITCH_DISABLE_FILTERS)},switchShowKeys(){this.$store.commit(ie.Z.DEBUG_SWITCH_SHOW_KEYS)}}},ce=(0,b.Z)(le,[["render",ae],["__scopeId","data-v-80706932"]]),de=ce,ue={name:"Header",components:{Navigation:R,Settings:de},props:{isMinMode:{type:Boolean,requested:!0,default:null},openSidebar:{type:Function,requested:!0,default:null}},data(){return{active:!0}},created(){this.disable=_()((()=>this.active=!this.active),250)},mounted(){this.lastScrollY=window.scrollY,this.$tableHeadTarget=document.querySelector("#table-head-target"),this.$modals=document.querySelector("#modals"),window.addEventListener("scroll",this.scroll)},unmounted(){window.removeEventListener("scroll",this.scroll)},methods:{scroll(){const e=window.scrollY;0==this.$tableHeadTarget.children.length&&0==this.$modals.children.length?(this.active=e<=this.lastScrollY,this.lastScrollY=e):this.active=!0}}},he=(0,b.Z)(ue,[["render",T],["__scopeId","data-v-3c6699c6"]]),pe=he,me={key:0,class:"sidebar"};function ge(e,t){const n=(0,a.up)("navigation"),s=(0,a.up)("settings"),i=(0,a.up)("modal"),r=(0,a.Q2)("touch");return(0,a.wg)(),(0,a.j4)(i,{open:e.propModel,"onUpdate:open":t[0]||(t[0]=t=>e.propModel=t)},{default:(0,a.w5)((()=>[(0,a.Wm)(o.uT,null,{default:(0,a.w5)((()=>[e.open?(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",me,[(0,a.Wm)(n),(0,a.Wm)(s)])),[[r,e.swipeHandler,"swipe"]]):(0,a.kq)("",!0)])),_:1})])),_:1},8,["open"])}const _e=(0,a.aZ)({name:"Sidebar",components:{Navigation:R,Settings:de,Modal:se.Z},props:{open:Boolean,swipeHandler:{type:Function,default:void 0}},emits:["update:open"],computed:{propModel:{get(){return this.open},set(e){this.$emit("update:open",e)}}}}),fe=(0,b.Z)(_e,[["render",ge],["__scopeId","data-v-2486165b"]]),be=fe,ve=60;function Se(e){const t=(0,c.iH)(!1),n=(0,c.iH)(window.innerWidth*ve/100);return{setShow:a,swipeHandler:s,onResize:o,isOpen:t};function o(){n.value=window.innerWidth*ve/100,e||a(!1)}function a(e){t.value=e}function s(t,o){window.TouchEvent&&"touchend"===o.type&&("right"===t&&e&&o.changedTouches[0].clientX<=n.value&&a(!0),"left"===t&&a(!1))}}const we=1e3,ye=(0,a.aZ)({name:"App",components:{Head:d.Fb,GoTop:S,TheHeader:pe,Sidebar:be},setup(){const e=(0,c.iH)(window.innerWidth<we),{setShow:t,swipeHandler:n,onResize:o,isOpen:a}=Se(e);return{isMinMode:e,setShowSidebar:t,sidebarIsOpen:a,swipeHandler:n,onResize:o}},mounted(){this.$Progress.finish(),window.addEventListener("resize",this.resize)},unmounted(){window.removeEventListener("resize",this.resize)},created(){this.progressBar(),this.$router.beforeEach((()=>{this.setShowSidebar(!1)}))},methods:{progressBar(){this.$Progress.start(),this.$router.beforeEach((async(e,t,n)=>{e.path!==t.path&&(this.$Progress.start(),this.$Progress.set(30)),n()})),this.$router.afterEach((async()=>{this.$Progress.finish()}))},resize(){this.isMinMode=window.innerWidth<we,this.onResize()}}}),Ee=(0,b.Z)(ye,[["render",l],["__scopeId","data-v-52b5c508"]]),Ce=Ee;var De=n(42119);const Le=(0,De.p7)({history:(0,De.PO)("/HadesSpace/"),routes:(0,W.s)(),scrollBehavior(e,t,n){return n||(e.hash?new Promise((t=>{setTimeout((()=>{t({el:e.hash,behavior:"smooth",top:100})}),500)})):{top:0})}}),Te=Le;var ke=n(15925),Oe=n(51578),Ie=n(74366),Ae=n.n(Ie),Pe=n(67398),Me=n(84032);const Ne={VueProgressBar:{color:"#aee3fc",failedColor:"#ff4646",thickness:"3px",transition:{speed:"0.2s",opacity:"0.2s",termination:300},autoRevert:!0,location:"top",inverse:!1},VueGtag:{config:{id:"G-Q3X19N7LEN"}}},xe={beforeMount(e,t){const n=n=>{e.contains(n.target)||e===n.target||t.value(n)};e.__vueClickEventHandler__=n,document.addEventListener("click",n)},unmounted(e){document.removeEventListener("click",e.__vueClickEventHandler__)}};var Ke=n(95205);(0,Ke.z)("/HadesSpace/service-worker.js",{ready(){console.log("App is being served from cache by a service worker. \nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),window.location.reload()},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,o.ri)(Ce).use((0,d.G6)()).use(Ae(),Ne.VueProgressBar).use(Pe.ZP,Ne.VueGtag,Te).use(Me.Z).directive("click-outside",xe).use(ke.ZP).use(Te).use(Oe.Z).mount("#app")},51578:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var o=n(88637),a=n(34919),s=n(31303),i=n(1986),r=n(15925);const l="settings",c=Object.values(i.Z).map((e=>e.Code)),d="en",u=f(l),h=window.navigator.language.slice(0,2),p=!1,m={[s.Z.SET_LANGUAGE](e,t){return e.language=t,_(l,e),(0,r.g)(t)},[s.Z.SWITCH_DISABLE_FILTERS](e){return e.disableFilters=!e.disableFilters,_(l,e),e.disableFilters},[s.Z.DEBUG_SWITCH_SHOW_KEYS](e){return e.showKeys=!e.showKeys,_(l,e),e.showKeys}},g={namespaced:!1,strict:p,state:{language:u.language||(h in c?h:d),disableFilters:u.disableFilters||!1,showKeys:u.showKeys||!1},mutations:m};function _(e,t){localStorage.setItem(e,JSON.stringify(t))}function f(e){let t={language:d,disableFilters:!1,showKeys:!1};if(localStorage.getItem(e))try{t=JSON.parse(localStorage.getItem(e)||"{}")}catch(n){console.error(n),localStorage.removeItem(e)}return t}const b=!1,v={modals:[]},S={[a.Z.MODAL_OPEN](e,t){e.modals.push(t)},[a.Z.MODAL_CLOSE](e,t){const n=e.modals.indexOf(t);-1!=n&&e.modals.splice(n,1)}},w={[a.Z.MODAL_OPEN]({state:e,commit:t}){const n=e.modals.length+1;return t(a.Z.MODAL_OPEN,n),n},[a.Z.MODAL_CLOSE]({commit:e},t){e(a.Z.MODAL_CLOSE,t)}},y=(0,o.MT)({strict:b,state:v,mutations:S,actions:w,modules:{userSettings:g}})},31303:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=Object.freeze({SET_LANGUAGE:"SetLanguage",SWITCH_DISABLE_FILTERS:"SwitchDisableFilters",DEBUG_SWITCH_SHOW_KEYS:"DebugSwitchShowKeys"})},34919:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=Object.freeze({MODAL_OPEN:"ModalOpen",MODAL_CLOSE:"ModalClose"})},34272:(e,t,n)=>{"use strict";n.d(t,{z:()=>u,Z:()=>g});var o=n(66252),a=n(49963),s=n(3577);const i={key:0,class:"content-wrapper fixed"},r={class:"head"},l={class:"body"};function c(e,t,n,c,d,u){return(0,o.wg)(),(0,o.iD)("div",null,[((0,o.wg)(),(0,o.j4)(o.lR,{disabled:!u.modalActive,to:"#modals"},[(0,o.Wm)(a.uT,{name:"background"},{default:(0,o.w5)((()=>[u.modalActive?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"background fixed",onClick:t[0]||(t[0]=(...e)=>u.onClose&&u.onClose(...e))})):(0,o.kq)("",!0)])),_:1})],8,["disabled"])),((0,o.wg)(),(0,o.j4)(o.lR,{disabled:!u.modalActive,to:"#modals"},[(0,o.WI)(e.$slots,"default",{},(()=>[(0,o.Wm)(a.uT,{name:"content-wrapper"},{default:(0,o.w5)((()=>[u.modalActive?((0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",{class:(0,s.C_)(["content",`size-${n.size}`])},[(0,o._)("div",r,[(0,o._)("div",{class:"close-button",onClick:t[1]||(t[1]=(...e)=>u.onClose&&u.onClose(...e))}),(0,o.WI)(e.$slots,"head",{},(()=>[(0,o._)("h2",null,(0,s.zw)(n.title),1)]),!0)]),(0,o._)("div",l,[(0,o.WI)(e.$slots,"body",{},void 0,!0)])],2)])):(0,o.kq)("",!0)])),_:3})]),!0)],8,["disabled"]))])}var d=n(34919);const u={SMALL:"small",MEDIUM:"medium",LARGE:"large"},h={name:"Modal",props:{size:{type:String,default:u.MEDIUM},title:{type:String,default:void 0},open:Boolean},emits:["update:open"],data(){return{modalKey:0}},computed:{modalActive(){return this.open&&this.$store.state.modals.at(-1)==this.modalKey}},watch:{open(){this.open?this.$store.dispatch(d.Z.MODAL_OPEN).then((e=>{this.modalKey=e})):this.$store.dispatch(d.Z.MODAL_CLOSE,this.modalKey)}},unmounted(){this.$store.dispatch(d.Z.MODAL_CLOSE,this.modalKey)},created(){this.$router.beforeResolve((()=>{if(this.modalActive)return this.onClose(),!1}))},methods:{onClose(){this.$emit("update:open",!1)}}};var p=n(83744);const m=(0,p.Z)(h,[["render",c],["__scopeId","data-v-d60082be"]]),g=m},1986:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o={English:{Name:"English",Code:"en",UnityLocale:"english",SteamLocale:"english",SteamCode:"en"},Français:{Name:"Français",Code:"fr",UnityLocale:"french",SteamLocale:"french",SteamCode:"fr"},Deutsch:{Name:"Deutsch",Code:"de",UnityLocale:"german",SteamLocale:"german",SteamCode:"de"},Español:{Name:"Español",Code:"es",UnityLocale:"spanish",SteamLocale:"spanish",SteamCode:"es"},Italiano:{Name:"Italiano",Code:"it",UnityLocale:"italian",SteamLocale:"italian",SteamCode:"it"},Pусский:{Name:"Pусский",Code:"ru",UnityLocale:"russian",SteamLocale:"russian",SteamCode:"ru"},Português:{Name:"Português",Code:"pt",UnityLocale:"portuguese",SteamLocale:"portuguese",SteamCode:"pt"},한국어:{Name:"한국어",Code:"ko",UnityLocale:"korean",SteamLocale:"koreana",SteamCode:"ko"},日本語:{Name:"日本語",Code:"jp",UnityLocale:"japanese",SteamLocale:"japanese",SteamCode:"ja"},简体中文:{Name:"简体中文",Code:"zh-si",UnityLocale:"chinese",SteamLocale:"schinese",SteamCode:"zh-CN"}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,(()=>{var e=[];n.O=(t,o,a,s)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,a,s]=e[d],r=!0,l=0;l<o.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(r=!1,s<i&&(i=s));if(r){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,a,s]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var s=Object.create(null);n.r(s);var i={};e=e||[null,t({}),t([]),t(t)];for(var r=2&a&&o;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((e=>i[e]=()=>o[e]));return i["default"]=()=>o,n.d(s,i),s}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+({65:"RedStar",74:"About",142:"SpaceBuildings",261:"BlueStar",362:"Cerberus",406:"Ships",530:"PlanetsCalc",607:"Achievements",626:"AllianceLevels",636:"PlayerGoals",662:"Shield",670:"WhiteStar",677:"Support",683:"Trade",726:"Index",749:"Weapon",752:"ModulesCalc",790:"YellowStar",837:"Mining",934:"DarkRedStar"}[e]||e)+"."+{46:"699107db",65:"4d243a74",74:"16410b47",85:"633a87c8",100:"76305b02",142:"6bdc2257",211:"a8f0be60",256:"977fee15",261:"06c99358",278:"660d439c",362:"019cfc26",400:"7653ba1c",406:"679d26a4",410:"665282b5",449:"0e6f8620",530:"6c682f65",560:"f4dd2c81",561:"f94e1642",607:"0e367e85",626:"f3d1e394",636:"65bfcd92",662:"ee6774a0",668:"43124ce1",670:"7995ee0c",677:"8764b96e",683:"b4089a24",726:"f8379cfa",749:"7e7fe64e",752:"8ae75f9c",790:"47563465",806:"b6c69d4a",837:"57138b39",888:"2f279962",934:"9dc764a2",948:"3042c5f0",964:"382d7bfe",988:"6b98995e"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+({65:"RedStar",74:"About",142:"SpaceBuildings",261:"BlueStar",362:"Cerberus",406:"Ships",530:"PlanetsCalc",607:"Achievements",626:"AllianceLevels",636:"PlayerGoals",662:"Shield",670:"WhiteStar",677:"Support",683:"Trade",726:"Index",749:"Weapon",752:"ModulesCalc",790:"YellowStar",837:"Mining",934:"DarkRedStar"}[e]||e)+"."+{46:"b57997ce",65:"f113a4a7",74:"0ffbb70d",142:"fa01bd27",211:"db11cd37",261:"fa01bd27",362:"7a8b891e",406:"6ccbe969",449:"2b422f08",530:"c0c2c0aa",607:"fa01bd27",626:"fa01bd27",636:"fa01bd27",662:"fa01bd27",670:"31d0d777",677:"fa01bd27",683:"fa01bd27",726:"a34217a2",749:"fa01bd27",752:"4141571c",790:"31fedb75",837:"fa01bd27",934:"4210e533"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="hades-space:";n.l=(o,a,s,i)=>{if(e[o])e[o].push(a);else{var r,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+s){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+s),r.src=o),e[o]=[a];var h=(t,n)=>{r.onerror=r.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),l&&document.head.appendChild(r)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/HadesSpace/"})(),(()=>{var e=(e,t,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=s=>{if(a.onerror=a.onload=null,"load"===s.type)n();else{var i=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=r,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=s,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],s=a.getAttribute("data-href");if(s===e||s===t)return a}},o=o=>new Promise(((a,s)=>{var i=n.miniCssF(o),r=n.p+i;if(t(i,r))return a();e(o,r,a,s)})),a={143:0};n.f.miniCss=(e,t)=>{var n={46:1,65:1,74:1,142:1,211:1,261:1,362:1,406:1,449:1,530:1,607:1,626:1,636:1,662:1,670:1,677:1,683:1,726:1,749:1,752:1,790:1,837:1,934:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,o)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var s=new Promise(((n,o)=>a=e[t]=[n,o]));o.push(a[2]=s);var i=n.p+n.u(t),r=new Error,l=o=>{if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",r.name="ChunkLoadError",r.type=s,r.request=i,a[1](r)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,o)=>{var a,s,[i,r,l]=o,c=0;if(i.some((t=>0!==e[t]))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var d=l(n)}for(t&&t(o);c<i.length;c++)s=i[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},o=self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[998],(()=>n(80289)));o=n.O(o)})();