if(!self.define){let e,l={};const a=(a,r)=>(a=new URL(a+".js",r).href,l[a]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=l,document.head.appendChild(e)}else e=a,importScripts(a),l()})).then((()=>{let e=l[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,i)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let n={};const u=e=>a(e,s),p={module:{uri:s},exports:n,require:u};l[s]=Promise.all(r.map((e=>p[e]||u(e)))).then((e=>(i(...e),n)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hades-space"}),self.skipWaiting(),e.precacheAndRoute([{url:"/HadesSpace/Nebula/css/921.1db64d05.css",revision:null},{url:"/HadesSpace/Nebula/css/About.0ffbb70d.css",revision:null},{url:"/HadesSpace/Nebula/css/Achievements.87ef1000.css",revision:null},{url:"/HadesSpace/Nebula/css/AllianceLevels.87ef1000.css",revision:null},{url:"/HadesSpace/Nebula/css/BlueStar.87ef1000.css",revision:null},{url:"/HadesSpace/Nebula/css/Cerberus.1b098ac8.css",revision:null},{url:"/HadesSpace/Nebula/css/DarkRedStar.87ef1000.css",revision:null},{url:"/HadesSpace/Nebula/css/Index.cad61b87.css",revision:null},{url:"/HadesSpace/Nebula/css/Mining.87ef1000.css",revision:null},{url:"/HadesSpace/Nebula/css/ModulesCalc.2b55b48e.css",revision:null},{url:"/HadesSpace/Nebula/css/PlanetsCalc.74771890.css",revision:null},{url:"/HadesSpace/Nebula/css/PlayerGoals.87ef1000.css",revision:null},{url:"/HadesSpace/Nebula/css/RedStar.d6aeb406.css",revision:null},{url:"/HadesSpace/Nebula/css/Shield.87ef1000.css",revision:null},{url:"/HadesSpace/Nebula/css/Ships.a2eb33e9.css",revision:null},{url:"/HadesSpace/Nebula/css/SpaceBuildings.87ef1000.css",revision:null},{url:"/HadesSpace/Nebula/css/Support.87ef1000.css",revision:null},{url:"/HadesSpace/Nebula/css/Trade.87ef1000.css",revision:null},{url:"/HadesSpace/Nebula/css/Weapon.87ef1000.css",revision:null},{url:"/HadesSpace/Nebula/css/WhiteStar.14551571.css",revision:null},{url:"/HadesSpace/Nebula/css/YellowStar.4e5c292d.css",revision:null},{url:"/HadesSpace/Nebula/css/app.40784b76.css",revision:null},{url:"/HadesSpace/Nebula/favicon/150x150.png",revision:"7ac132d32e3760e93b81d305f4fd25ac"},{url:"/HadesSpace/Nebula/favicon/16x16.png",revision:"bc0a3a9097013db0736970d421bc0516"},{url:"/HadesSpace/Nebula/favicon/192x192.png",revision:"e30ee3ba3b06cfe0d1bf84239b48b31c"},{url:"/HadesSpace/Nebula/favicon/32x32.png",revision:"8c9e4de86ec33dbcbcb752440161a7d1"},{url:"/HadesSpace/Nebula/favicon/512x512.png",revision:"164a0bc1bc5dcf6e8a9c902ff6e808d8"},{url:"/HadesSpace/Nebula/favicon/apple-touch.png",revision:"0380d3c1ed8a06d72833d6a7ab2f72fa"},{url:"/HadesSpace/Nebula/favicon/favicon.png",revision:"59ab6640e691932b8197ec8bdad44229"},{url:"/HadesSpace/Nebula/favicon/safari-pinned-tab.svg",revision:"f0139fcda368ab3f6bf4c4ce34583552"},{url:"/HadesSpace/Nebula/img/AlphaBadge01.aaf854bd.png",revision:null},{url:"/HadesSpace/Nebula/img/AlphaDrone_lv1_DrkNeb.8fc73070.png",revision:null},{url:"/HadesSpace/Nebula/img/AlphaDrone_lv2_DrkNeb.1ab52d80.png",revision:null},{url:"/HadesSpace/Nebula/img/AlphaDrone_lv3_DrkNeb.4d5f143b.png",revision:null},{url:"/HadesSpace/Nebula/img/Battleship_CerberusHydra_DrkNeb.2b9d8032.png",revision:null},{url:"/HadesSpace/Nebula/img/Battleship_CerberusHydraling1_DrkNeb.8365e151.png",revision:null},{url:"/HadesSpace/Nebula/img/Battleship_CerberusHydraling2_DrkNeb.2050d0a0.png",revision:null},{url:"/HadesSpace/Nebula/img/Battleship_Cerberus_DrkNeb.2e08c1aa.png",revision:null},{url:"/HadesSpace/Nebula/img/Battleship_DrkNeb_lv1.44ad7dea.png",revision:null},{url:"/HadesSpace/Nebula/img/Battleship_DrkNeb_lv2.72a0eaf0.png",revision:null},{url:"/HadesSpace/Nebula/img/Battleship_DrkNeb_lv3.de6d7fc8.png",revision:null},{url:"/HadesSpace/Nebula/img/Battleship_DrkNeb_lv4.bc459d9e.png",revision:null},{url:"/HadesSpace/Nebula/img/Battleship_DrkNeb_lv5.e731547c.png",revision:null},{url:"/HadesSpace/Nebula/img/Battleship_DrkNeb_lv6.99c56bcf.png",revision:null},{url:"/HadesSpace/Nebula/img/BlackCitadel.c9cf0466.png",revision:null},{url:"/HadesSpace/Nebula/img/CerberusStation_DrkNeb.793dc304.png",revision:null},{url:"/HadesSpace/Nebula/img/CerberusStation_DrkNeb_lv2.d65ed47c.png",revision:null},{url:"/HadesSpace/Nebula/img/CerberusStation_DrkNeb_lv3.9053d732.png",revision:null},{url:"/HadesSpace/Nebula/img/Cerberus_DrkNeb_Carrier.437e7c14.png",revision:null},{url:"/HadesSpace/Nebula/img/Cerberus_DrkNeb_swarm1.a9daa268.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv10_DrkNeb.ace5012a.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv11_DrkNeb.d1d7aa7d.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv12_DrkNeb.53dbf7c9.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv13_DrkNeb.f70cc605.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv1_DrkNeb.eb15636e.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv2_DrkNeb.89b20588.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv3_DrkNeb.6c76acfb.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv4_DrkNeb.578457f1.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv5_DrkNeb.f8a4b4c9.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv6_DrkNeb.2237ea51.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv7_DrkNeb.eb11557f.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv8_DrkNeb.336839a4.png",revision:null},{url:"/HadesSpace/Nebula/img/Corp_Flagship_lv9_DrkNeb.19f8495f.png",revision:null},{url:"/HadesSpace/Nebula/img/Distinction_Admiral.72cca942.png",revision:null},{url:"/HadesSpace/Nebula/img/Distinction_BlueStar1.575ba4a2.png",revision:null},{url:"/HadesSpace/Nebula/img/Distinction_BlueStar10.b4dcdc77.png",revision:null},{url:"/HadesSpace/Nebula/img/Distinction_BlueStar50.103aa3e0.png",revision:null},{url:"/HadesSpace/Nebula/img/Distinction_Emperor.72854902.png",revision:null},{url:"/HadesSpace/Nebula/img/Distinction_Governer.ce1b09c7.png",revision:null},{url:"/HadesSpace/Nebula/img/Distinction_WhiteStar1.396fc1f5.png",revision:null},{url:"/HadesSpace/Nebula/img/Fighter_Cerberus_DrkNeb.2dbb69b3.png",revision:null},{url:"/HadesSpace/Nebula/img/Fighter_DrkNeb_Cerberus1.92c24f5c.png",revision:null},{url:"/HadesSpace/Nebula/img/Fighter_DrkNeb_Cerberus1_lv1.9bb5c76a.png",revision:null},{url:"/HadesSpace/Nebula/img/Fighter_DrkNeb_Cerberus2.ab993d23.png",revision:null},{url:"/HadesSpace/Nebula/img/Fighter_DrkNeb_Cerberus3.6ca301c5.png",revision:null},{url:"/HadesSpace/Nebula/img/Fighter_DrkNeb_Cerberus4.84ea804b.png",revision:null},{url:"/HadesSpace/Nebula/img/Fighter_DrkNeb_Cerberus5.2561b428.png",revision:null},{url:"/HadesSpace/Nebula/img/Fighter_DrkNeb_Cerberus6.13eff6e6.png",revision:null},{url:"/HadesSpace/Nebula/img/Miner_DrkNeb_lv1.d762b900.png",revision:null},{url:"/HadesSpace/Nebula/img/Miner_DrkNeb_lv2.b9c03206.png",revision:null},{url:"/HadesSpace/Nebula/img/Miner_DrkNeb_lv3.a4e952df.png",revision:null},{url:"/HadesSpace/Nebula/img/Miner_DrkNeb_lv4.523e41c2.png",revision:null},{url:"/HadesSpace/Nebula/img/Miner_DrkNeb_lv5.5140b822.png",revision:null},{url:"/HadesSpace/Nebula/img/Miner_DrkNeb_lv6.36a3b9c5.png",revision:null},{url:"/HadesSpace/Nebula/img/MiningDrone_DrkNeb_lv1.13e8c628.png",revision:null},{url:"/HadesSpace/Nebula/img/MiningDrone_DrkNeb_lv10.170d276a.png",revision:null},{url:"/HadesSpace/Nebula/img/MiningDrone_DrkNeb_lv2.5b1b720d.png",revision:null},{url:"/HadesSpace/Nebula/img/MiningDrone_DrkNeb_lv4.43c35729.png",revision:null},{url:"/HadesSpace/Nebula/img/MiningDrone_DrkNeb_lv7.5284c3be.png",revision:null},{url:"/HadesSpace/Nebula/img/RelicDrone_lv1_DrkNeb.bf0e1948.png",revision:null},{url:"/HadesSpace/Nebula/img/RelicDrone_lv2_DrkNeb.ad0679de.png",revision:null},{url:"/HadesSpace/Nebula/img/RelicDrone_lv3_DrkNeb.ab519c03.png",revision:null},{url:"/HadesSpace/Nebula/img/RemoteBomb_DrkNeb.1a71e1b9.png",revision:null},{url:"/HadesSpace/Nebula/img/ShipmentDrone_lv1_DrkNeb.6fac1a15.png",revision:null},{url:"/HadesSpace/Nebula/img/Transport_DrkNeb_lv1.d03fe6ea.png",revision:null},{url:"/HadesSpace/Nebula/img/Transport_DrkNeb_lv2.bc0ed84d.png",revision:null},{url:"/HadesSpace/Nebula/img/Transport_DrkNeb_lv3.b9db7b6f.png",revision:null},{url:"/HadesSpace/Nebula/img/Transport_DrkNeb_lv4.3ed4b63b.png",revision:null},{url:"/HadesSpace/Nebula/img/Transport_DrkNeb_lv5.f76d22c6.png",revision:null},{url:"/HadesSpace/Nebula/img/Transport_DrkNeb_lv6.9f23012b.png",revision:null},{url:"/HadesSpace/Nebula/img/arrow.f223a946.svg",revision:null},{url:"/HadesSpace/Nebula/img/art.7cbfcd9c.png",revision:null},{url:"/HadesSpace/Nebula/img/close.6b363d37.svg",revision:null},{url:"/HadesSpace/Nebula/img/github_logo.b7172519.png",revision:null},{url:"/HadesSpace/Nebula/img/logo.d4b2677b.png",revision:null},{url:"/HadesSpace/Nebula/img/menu.368c620f.svg",revision:null},{url:"/HadesSpace/Nebula/img/news_Update01.4166e256.png",revision:null},{url:"/HadesSpace/Nebula/img/news_Update02.19daf0d6.png",revision:null},{url:"/HadesSpace/Nebula/img/planet.23c4780f.png",revision:null},{url:"/HadesSpace/Nebula/img/planets-calc.73393e3a.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_AlphaDrone.6eb85669.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_AlphaRocket.b6eeb13d.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_Anomaly.282fea85.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_Asteroids.1dfd1a61.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_Asteroids_cr.d10f3f4a.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_Battleship.ad0aaa9a.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_BlueStar.741a09ad.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_CerberusBomber.c49ba18e.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_CerberusCarrier.176e5eed.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_CerberusColossus.34ff8038.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_CerberusDestroyer.fa5e72f7.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_CerberusHydra.177137be.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_CerberusPhoenix.808baedb.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_CerberusStation.36e3b3b2.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_CerberusStorm.72f906f7.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_CerberusSwarm.65c53c04.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_CorpFlagship.a867d836.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_DroneAreaShield.358a1ad0.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_DyingPlanet.45ade265.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_EmptySpace.dfd72b26.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_Guardian.3a2713ae.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_Interceptor.ea343281.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_JumpGate.68b7809a.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_Miner.ad2997e6.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_MiningDrone.79b1fcac.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_Planet.6505daee.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_PlanetWhiteStar.d6e9627d.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_RedStar.5797a8e0.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_RemoteBomb.6e8d4260.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_Sentinel.fc58bceb.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_ShipmentDrone.90149456.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_SpaceBuilding.a263596c.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_Transport.9f9f4458.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_TurretLaser.eede8f54.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_Tutorial.0cc16efe.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_WarpLane.ecbc5ff2.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_WhiteStar.d70a2bb2.png",revision:null},{url:"/HadesSpace/Nebula/img/portrait_YellowStar.b00882d9.png",revision:null},{url:"/HadesSpace/Nebula/img/relic.6752e037.png",revision:null},{url:"/HadesSpace/Nebula/img/settings.067b9160.svg",revision:null},{url:"/HadesSpace/Nebula/img/star_blue.6e921374.png",revision:null},{url:"/HadesSpace/Nebula/img/star_red.df88105d.png",revision:null},{url:"/HadesSpace/Nebula/img/star_red_dark.8a55b2ab.png",revision:null},{url:"/HadesSpace/Nebula/img/star_white.8cb9eb30.png",revision:null},{url:"/HadesSpace/Nebula/img/star_yellow.28f9b515.png",revision:null},{url:"/HadesSpace/Nebula/img/station_BlueStarScanner.6cbb83ac.png",revision:null},{url:"/HadesSpace/Nebula/img/station_Diplomacy.42f1be0b.png",revision:null},{url:"/HadesSpace/Nebula/img/station_RedStarScanner.355c5d1e.png",revision:null},{url:"/HadesSpace/Nebula/img/station_Research.ceacc0b3.png",revision:null},{url:"/HadesSpace/Nebula/img/station_ShipmentRelay.9ea08c8f.png",revision:null},{url:"/HadesSpace/Nebula/img/station_Shipyard.190d1c06.png",revision:null},{url:"/HadesSpace/Nebula/img/station_ShortRangeScanner.48f8f059.png",revision:null},{url:"/HadesSpace/Nebula/img/station_WhiteStarScanner.3ddf45cc.png",revision:null},{url:"/HadesSpace/Nebula/img/station_trade.dbe63410.png",revision:null},{url:"/HadesSpace/Nebula/img/timeModulator.127450fb.png",revision:null},{url:"/HadesSpace/Nebula/img/warpLaneHub.398191f4.png",revision:null},{url:"/HadesSpace/Nebula/index.html",revision:"200ae2d16337d3b7095f09874fff6dd0"},{url:"/HadesSpace/Nebula/js/256.6044d116.js",revision:null},{url:"/HadesSpace/Nebula/js/278.1309c3ef.js",revision:null},{url:"/HadesSpace/Nebula/js/379.12c333cf.js",revision:null},{url:"/HadesSpace/Nebula/js/400.80f579f8.js",revision:null},{url:"/HadesSpace/Nebula/js/431.e5e89a95.js",revision:null},{url:"/HadesSpace/Nebula/js/450.e68c284a.js",revision:null},{url:"/HadesSpace/Nebula/js/560.ee861e41.js",revision:null},{url:"/HadesSpace/Nebula/js/561.241e1014.js",revision:null},{url:"/HadesSpace/Nebula/js/668.b437aca6.js",revision:null},{url:"/HadesSpace/Nebula/js/740.416afd0d.js",revision:null},{url:"/HadesSpace/Nebula/js/762.1aa1440e.js",revision:null},{url:"/HadesSpace/Nebula/js/806.45a2f923.js",revision:null},{url:"/HadesSpace/Nebula/js/921.d60f793a.js",revision:null},{url:"/HadesSpace/Nebula/js/948.264f1296.js",revision:null},{url:"/HadesSpace/Nebula/js/964.d937a226.js",revision:null},{url:"/HadesSpace/Nebula/js/988.25a9ba79.js",revision:null},{url:"/HadesSpace/Nebula/js/About.cf27855a.js",revision:null},{url:"/HadesSpace/Nebula/js/Achievements.39782f24.js",revision:null},{url:"/HadesSpace/Nebula/js/AllianceLevels.0317e60c.js",revision:null},{url:"/HadesSpace/Nebula/js/BlueStar.01fb0dcf.js",revision:null},{url:"/HadesSpace/Nebula/js/Cerberus.51eac958.js",revision:null},{url:"/HadesSpace/Nebula/js/DarkRedStar.3cc497a7.js",revision:null},{url:"/HadesSpace/Nebula/js/Index.e90147bc.js",revision:null},{url:"/HadesSpace/Nebula/js/Mining.07583a05.js",revision:null},{url:"/HadesSpace/Nebula/js/ModulesCalc.3ba3c775.js",revision:null},{url:"/HadesSpace/Nebula/js/PlanetsCalc.90d64d20.js",revision:null},{url:"/HadesSpace/Nebula/js/PlayerGoals.b07882d6.js",revision:null},{url:"/HadesSpace/Nebula/js/RedStar.8cb7f41d.js",revision:null},{url:"/HadesSpace/Nebula/js/Shield.83b6111c.js",revision:null},{url:"/HadesSpace/Nebula/js/Ships.0d19ccf5.js",revision:null},{url:"/HadesSpace/Nebula/js/SpaceBuildings.f1156c17.js",revision:null},{url:"/HadesSpace/Nebula/js/Support.d93fbfd4.js",revision:null},{url:"/HadesSpace/Nebula/js/Trade.0019aed2.js",revision:null},{url:"/HadesSpace/Nebula/js/Weapon.644874b2.js",revision:null},{url:"/HadesSpace/Nebula/js/WhiteStar.a925da36.js",revision:null},{url:"/HadesSpace/Nebula/js/YellowStar.00b82910.js",revision:null},{url:"/HadesSpace/Nebula/js/app.f7c961e7.js",revision:null},{url:"/HadesSpace/Nebula/js/chunk-vendors.d0c8fd5c.js",revision:null},{url:"/HadesSpace/Nebula/manifest.json",revision:"334271836314703960297c9e634cf03d"},{url:"/HadesSpace/Nebula/meta-image.png",revision:"022e8932595c01b098dc42631cb5e1a7"},{url:"/HadesSpace/Nebula/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
