if(!self.define){let e,r={};const i=(i,l)=>(i=new URL(i+".js",l).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let s={};const p=e=>i(e,n),u={module:{uri:n},exports:s,require:p};r[n]=Promise.all(l.map((e=>u[e]||p(e)))).then((e=>(a(...e),s)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hades-space"}),self.skipWaiting(),e.precacheAndRoute([{url:"/HadesSpace/404.html",revision:"dec0e5853338d708b6f2602239bfa350"},{url:"/HadesSpace/CartographerRU/images/instruct1.png",revision:"3daeb2770a2eab92dd45e5f27f069a29"},{url:"/HadesSpace/CartographerRU/images/instruct2.png",revision:"d5e4d6d6b7f07d0ff221669cc1eaf5c3"},{url:"/HadesSpace/CartographerRU/images/layers-2x.png",revision:"4f0283c6ce28e888000e978e537a6a56"},{url:"/HadesSpace/CartographerRU/images/layers.png",revision:"a6137456ed160d7606981aa57c559898"},{url:"/HadesSpace/CartographerRU/images/marker-icon-2x.png",revision:"401d815dc206b8dc1b17cd0e37695975"},{url:"/HadesSpace/CartographerRU/images/marker-icon.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/HadesSpace/CartographerRU/images/marker-shadow.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"/HadesSpace/CartographerRU/index.html",revision:"967e7ae310782280782a85e74138ad17"},{url:"/HadesSpace/CartographerRU/leaflet.css",revision:"83499c88888e27f85435b14fc288e632"},{url:"/HadesSpace/CartographerRU/leaflet.js",revision:"762a6b64eba28bd621f2fc8aba9168d6"},{url:"/HadesSpace/CartographerRU/style.css",revision:"450fc463b8b1a349df717056fbb3e078"},{url:"/HadesSpace/css/50.e554c13e.css",revision:null},{url:"/HadesSpace/css/902.ea8d35bd.css",revision:null},{url:"/HadesSpace/css/About.5b375bce.css",revision:null},{url:"/HadesSpace/css/Achievements.b55362ab.css",revision:null},{url:"/HadesSpace/css/AllianceLevels.b55362ab.css",revision:null},{url:"/HadesSpace/css/BlueStar.b55362ab.css",revision:null},{url:"/HadesSpace/css/Cerberus.96b1b27d.css",revision:null},{url:"/HadesSpace/css/DarkRedStar.7fb84886.css",revision:null},{url:"/HadesSpace/css/Drone.b55362ab.css",revision:null},{url:"/HadesSpace/css/Index.1876f113.css",revision:null},{url:"/HadesSpace/css/Mining.b55362ab.css",revision:null},{url:"/HadesSpace/css/ModulesCalc.71f9c4d5.css",revision:null},{url:"/HadesSpace/css/PlanetsCalc.a59e5f1a.css",revision:null},{url:"/HadesSpace/css/PlayerGoals.b55362ab.css",revision:null},{url:"/HadesSpace/css/RedStar.bc259460.css",revision:null},{url:"/HadesSpace/css/Shield.b55362ab.css",revision:null},{url:"/HadesSpace/css/Ships.59604bfe.css",revision:null},{url:"/HadesSpace/css/SpaceBuildings.b55362ab.css",revision:null},{url:"/HadesSpace/css/Support.b55362ab.css",revision:null},{url:"/HadesSpace/css/Trade.b55362ab.css",revision:null},{url:"/HadesSpace/css/Weapon.b55362ab.css",revision:null},{url:"/HadesSpace/css/WhiteStar.cd6f9f37.css",revision:null},{url:"/HadesSpace/css/YellowStar.038e0b3c.css",revision:null},{url:"/HadesSpace/css/app.07c3836c.css",revision:null},{url:"/HadesSpace/favicon/150x150.png",revision:"7ac132d32e3760e93b81d305f4fd25ac"},{url:"/HadesSpace/favicon/16x16.png",revision:"bc0a3a9097013db0736970d421bc0516"},{url:"/HadesSpace/favicon/192x192.png",revision:"2416bdc39ec05133a5ec65109f01514f"},{url:"/HadesSpace/favicon/32x32.png",revision:"8c9e4de86ec33dbcbcb752440161a7d1"},{url:"/HadesSpace/favicon/512x512.png",revision:"1addb7269b39c6dece2e4f716d6a12f2"},{url:"/HadesSpace/favicon/apple-touch.png",revision:"969a2ad199640e64204cf322eb397e16"},{url:"/HadesSpace/favicon/favicon.png",revision:"59ab6640e691932b8197ec8bdad44229"},{url:"/HadesSpace/favicon/safari-pinned-tab.svg",revision:"f0139fcda368ab3f6bf4c4ce34583552"},{url:"/HadesSpace/img/AlphaBadge01.aaf854bd.png",revision:null},{url:"/HadesSpace/img/AlphaBadge01_DN.fa4561ef.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv1.7b4fa546.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv1.dc42619a.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv1_DrkNeb.8fc73070.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv1_DrkNeb.fd46b8de.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv2.26c40c1f.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv2.caff0020.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv2_DrkNeb.1ab52d80.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv2_DrkNeb.5ea63abb.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv3.9cae5dd3.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv3.d3b27458.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv3_DrkNeb.394bdbf0.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv3_DrkNeb.4d5f143b.png",revision:null},{url:"/HadesSpace/img/Battleship_Cerberus.4fed567a.png",revision:null},{url:"/HadesSpace/img/Battleship_Cerberus.a1096a2d.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydra.5c79e83d.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydra.95dc59a2.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydra_DrkNeb.2b9d8032.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydra_DrkNeb.a504065d.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling1.11eb1288.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling1.91795f53.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling1_DrkNeb.8365e151.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling1_DrkNeb.c4098188.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling2.9d873ab0.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling2.cb94f9e1.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling2_DrkNeb.2050d0a0.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling2_DrkNeb.793f6778.png",revision:null},{url:"/HadesSpace/img/Battleship_Cerberus_DrkNeb.2e08c1aa.png",revision:null},{url:"/HadesSpace/img/Battleship_Cerberus_DrkNeb.39eed6f5.png",revision:null},{url:"/HadesSpace/img/Battleship_Cerberus_lv1.d305e782.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv1.44ad7dea.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv1.a2545f81.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv2.65396d3a.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv2.72a0eaf0.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv3.b9cd5aa8.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv3.de6d7fc8.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv4.4e9debf8.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv4.bc459d9e.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv5.1120cc90.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv5.9c342fb8.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv6.99c56bcf.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv6.ce8697c9.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv7.2ee58517.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv7.5d2eba49.png",revision:null},{url:"/HadesSpace/img/Battleship_lv1.a9c983f9.png",revision:null},{url:"/HadesSpace/img/Battleship_lv2.4a741f2b.png",revision:null},{url:"/HadesSpace/img/Battleship_lv2.b92d194c.png",revision:null},{url:"/HadesSpace/img/Battleship_lv3.46077545.png",revision:null},{url:"/HadesSpace/img/Battleship_lv3.b9989f84.png",revision:null},{url:"/HadesSpace/img/Battleship_lv4.04c68df7.png",revision:null},{url:"/HadesSpace/img/Battleship_lv4.46c7d85f.png",revision:null},{url:"/HadesSpace/img/Battleship_lv5.a79b1b79.png",revision:null},{url:"/HadesSpace/img/Battleship_lv5.fb5aa19f.png",revision:null},{url:"/HadesSpace/img/Battleship_lv6.33a1de6f.png",revision:null},{url:"/HadesSpace/img/Battleship_lv6.f5102c02.png",revision:null},{url:"/HadesSpace/img/BlackCitadel.c9cf0466.png",revision:null},{url:"/HadesSpace/img/CerberusStation.793dc304.png",revision:null},{url:"/HadesSpace/img/CerberusStation_DrkNeb.793dc304.png",revision:null},{url:"/HadesSpace/img/CerberusStation_DrkNeb_lv2.d65ed47c.png",revision:null},{url:"/HadesSpace/img/CerberusStation_DrkNeb_lv3.9053d732.png",revision:null},{url:"/HadesSpace/img/CerberusStation_lv2.d65ed47c.png",revision:null},{url:"/HadesSpace/img/CerberusStation_lv3.9053d732.png",revision:null},{url:"/HadesSpace/img/Cerberus_Destroyer_lv1.35ddf7a2.png",revision:null},{url:"/HadesSpace/img/Cerberus_DrkNeb_Carrier.437e7c14.png",revision:null},{url:"/HadesSpace/img/Cerberus_DrkNeb_Carrier.947ad652.png",revision:null},{url:"/HadesSpace/img/Cerberus_DrkNeb_swarm1.a9daa268.png",revision:null},{url:"/HadesSpace/img/Cerberus_Swarm_lv1.3bec4210.png",revision:null},{url:"/HadesSpace/img/Cerberus_swarm1.22483c8b.png",revision:null},{url:"/HadesSpace/img/Cerberus_swarm1.35e8ff64.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv1.0d8c3672.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv1.9dbc5ee6.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv10.061dd2c9.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv10.880ce430.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv10_DrkNeb.80e64dbc.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv10_DrkNeb.ace5012a.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv11_DrkNeb.85f70518.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv11_DrkNeb.d1d7aa7d.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv12_DrkNeb.043135f2.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv12_DrkNeb.53dbf7c9.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv13_DrkNeb.974ed605.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv13_DrkNeb.f70cc605.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv1_DrkNeb.232fd4ec.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv1_DrkNeb.eb15636e.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv2.5d3f32c4.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv2.a598e6be.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv2_DrkNeb.05c790fb.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv2_DrkNeb.89b20588.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv3.1c883634.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv3.23169e4e.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv3_DrkNeb.6c76acfb.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv3_DrkNeb.b48ccdd6.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv4.927b5f06.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv4.de990ede.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv4_DrkNeb.578457f1.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv4_DrkNeb.8ad17991.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv5.86153017.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv5.c3a27925.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv5_DrkNeb.49c1db8b.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv5_DrkNeb.f8a4b4c9.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv6.1f439037.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv6.4e213061.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv6_DrkNeb.2237ea51.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv6_DrkNeb.90519f00.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv7.4f56ced8.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv7.a5daecdc.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv7_DrkNeb.bbe80db4.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv7_DrkNeb.eb11557f.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv8.454638e5.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv8.8b4b7adb.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv8_DrkNeb.336839a4.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv8_DrkNeb.6bd3ed90.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv9.2314cfdb.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv9.cbce880e.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv9_DrkNeb.19f8495f.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv9_DrkNeb.70eacd37.png",revision:null},{url:"/HadesSpace/img/DecoyDrone_DrkNeb_lv1.01cd683d.png",revision:null},{url:"/HadesSpace/img/DecoyDrone_DrkNeb_lv2.4cde38c7.png",revision:null},{url:"/HadesSpace/img/DecoyDrone_DrkNeb_lv3.c2e41610.png",revision:null},{url:"/HadesSpace/img/DecoyDrone_DrkNeb_lv4.f687d9b0.png",revision:null},{url:"/HadesSpace/img/DecoyDrone_DrkNeb_lv5.7d9d8e0e.png",revision:null},{url:"/HadesSpace/img/Distinction_Admiral.50508555.png",revision:null},{url:"/HadesSpace/img/Distinction_Admiral.72cca942.png",revision:null},{url:"/HadesSpace/img/Distinction_Admiral_Legacy.67f10e58.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar1.23df34fb.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar1.575ba4a2.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar10.6ae6c392.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar10.b4dcdc77.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar10_Legacy.d2435c81.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar1_Legacy.ce059ecc.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar50.103aa3e0.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar50.ac652b78.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar50_Legacy.374bb433.png",revision:null},{url:"/HadesSpace/img/Distinction_Emperor.72854902.png",revision:null},{url:"/HadesSpace/img/Distinction_Emperor.8031c8af.png",revision:null},{url:"/HadesSpace/img/Distinction_Emperor_Legacy.91d54d44.png",revision:null},{url:"/HadesSpace/img/Distinction_Governer.ce1b09c7.png",revision:null},{url:"/HadesSpace/img/Distinction_Governer.ce7c2a58.png",revision:null},{url:"/HadesSpace/img/Distinction_Governer_Legacy.e05f7c30.png",revision:null},{url:"/HadesSpace/img/Distinction_WhiteStar1.396fc1f5.png",revision:null},{url:"/HadesSpace/img/Distinction_WhiteStar1.6f38cbc7.png",revision:null},{url:"/HadesSpace/img/Distinction_WhiteStar1_Legacy.2d7fc467.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus.08e3a29a.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus.45dcc956.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus1.7296e87e.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus1.77cf5b46.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus1_lv1.94cd35a6.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus2.511de6cf.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus2.5e6523e8.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus2_lv1.58f35199.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus3.8f263137.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus3.d3d03297.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus3_lv1.6414a30e.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus4.5e8029d7.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus4.f7c2c382.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus4_lv1.dc60a8a3.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus5.9e73ca61.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus5.b5632adb.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus5_lv1.be53baac.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus6.4bea00f3.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus6.f209141e.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus6_lv1.7322224d.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus_DrkNeb.484a4140.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus_DrkNeb.c752dbf5.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus1.92c24f5c.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus1.b9321ad2.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus2.ab993d23.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus2.fb035e2d.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus3.6ca301c5.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus3.70b107da.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus4.84ea804b.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus4.8fb11d33.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus5.2561b428.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus5.5fd91904.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus6.13eff6e6.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus6.c4b7aa3e.png",revision:null},{url:"/HadesSpace/img/Miner.027fbf36.png",revision:null},{url:"/HadesSpace/img/Miner.80d7173a.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv1.d762b900.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv2.b9c03206.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv2.c65839bc.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv3.a4e952df.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv3.e9580d77.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv4.523e41c2.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv4.61621056.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv5.5140b822.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv5.f7f25a13.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv6.36a3b9c5.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv6.91027d8d.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv7.3c8edfbc.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv7.9224857c.png",revision:null},{url:"/HadesSpace/img/Miner_lv3.c18232ee.png",revision:null},{url:"/HadesSpace/img/Miner_lv3.c6430324.png",revision:null},{url:"/HadesSpace/img/Miner_lv4.03d93315.png",revision:null},{url:"/HadesSpace/img/Miner_lv4.47a2c9c0.png",revision:null},{url:"/HadesSpace/img/Miner_lv5.26ec253e.png",revision:null},{url:"/HadesSpace/img/Miner_lv5.63bceea8.png",revision:null},{url:"/HadesSpace/img/Miner_lv6.253c7d95.png",revision:null},{url:"/HadesSpace/img/Miner_lv6.c9e58327.png",revision:null},{url:"/HadesSpace/img/MiningDrone_DrkNeb_lv1.1397be16.png",revision:null},{url:"/HadesSpace/img/MiningDrone_DrkNeb_lv10.170d276a.png",revision:null},{url:"/HadesSpace/img/MiningDrone_DrkNeb_lv2.5b1b720d.png",revision:null},{url:"/HadesSpace/img/MiningDrone_DrkNeb_lv4.43c35729.png",revision:null},{url:"/HadesSpace/img/MiningDrone_DrkNeb_lv7.5284c3be.png",revision:null},{url:"/HadesSpace/img/MiningDrone_lv10.281adf04.png",revision:null},{url:"/HadesSpace/img/MiningDrone_lv10.d30e358f.png",revision:null},{url:"/HadesSpace/img/MiningDrone_lv4-6.0af21dd8.png",revision:null},{url:"/HadesSpace/img/MiningDrone_lv4-6.6eace2b5.png",revision:null},{url:"/HadesSpace/img/RelicDrone_lv1_DrkNeb.5201d785.png",revision:null},{url:"/HadesSpace/img/RelicDrone_lv1_DrkNeb.bf0e1948.png",revision:null},{url:"/HadesSpace/img/RelicDrone_lv2_DrkNeb.ad0679de.png",revision:null},{url:"/HadesSpace/img/RelicDrone_lv2_DrkNeb.beb61f9f.png",revision:null},{url:"/HadesSpace/img/RelicDrone_lv3_DrkNeb.354f5db9.png",revision:null},{url:"/HadesSpace/img/RelicDrone_lv3_DrkNeb.ab519c03.png",revision:null},{url:"/HadesSpace/img/RemoteBomb.1a71e1b9.png",revision:null},{url:"/HadesSpace/img/RemoteBomb_DrkNeb.1a71e1b9.png",revision:null},{url:"/HadesSpace/img/RepairDrone_DrkNeb_lv1.bc9caca8.png",revision:null},{url:"/HadesSpace/img/RepairDrone_DrkNeb_lv2.5778dda9.png",revision:null},{url:"/HadesSpace/img/RepairDrone_DrkNeb_lv3.ec1e2adb.png",revision:null},{url:"/HadesSpace/img/RepairDrone_DrkNeb_lv4.a435b26b.png",revision:null},{url:"/HadesSpace/img/RepairDrone_DrkNeb_lv5.c03aeb20.png",revision:null},{url:"/HadesSpace/img/ResearchMagnify_Icon.8e5097e1.png",revision:null},{url:"/HadesSpace/img/ResearchStation.f3eacc10.png",revision:null},{url:"/HadesSpace/img/ShipmentDrone_lv1_DrkNeb.6fac1a15.png",revision:null},{url:"/HadesSpace/img/ShipmentDrone_lv1_DrkNeb.7489d1b7.png",revision:null},{url:"/HadesSpace/img/SpaceBuilding.76875c04.png",revision:null},{url:"/HadesSpace/img/TimeModulator.d347ba73.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv1.e997a805.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv2.cd1d930b.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv3.c5cf68ff.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv4.abaff154.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv5.acb014f2.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv6.82db7c5e.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv7.f584534b.png",revision:null},{url:"/HadesSpace/img/Transport_lv4.09d514f5.png",revision:null},{url:"/HadesSpace/img/Transport_lv4.1ffabbc4.png",revision:null},{url:"/HadesSpace/img/Transport_lv5.c1d279e9.png",revision:null},{url:"/HadesSpace/img/Transport_lv5.f046ce77.png",revision:null},{url:"/HadesSpace/img/Transport_lv6.8f79e518.png",revision:null},{url:"/HadesSpace/img/Transport_lv6.fd38352c.png",revision:null},{url:"/HadesSpace/img/areaDamageIndicator.50d251ee.svg",revision:null},{url:"/HadesSpace/img/arrow.d13ea956.svg",revision:null},{url:"/HadesSpace/img/art.20563834.png",revision:null},{url:"/HadesSpace/img/art.7cbfcd9c.png",revision:null},{url:"/HadesSpace/img/blueStar_Fragments.3259f068.svg",revision:null},{url:"/HadesSpace/img/calc.ad6c3479.png",revision:null},{url:"/HadesSpace/img/chat_arrow.4084257f.svg",revision:null},{url:"/HadesSpace/img/clock.e3e3bc1e.svg",revision:null},{url:"/HadesSpace/img/close.6b363d37.svg",revision:null},{url:"/HadesSpace/img/credit.45d17641.svg",revision:null},{url:"/HadesSpace/img/directDamageIndicator.419eb42a.svg",revision:null},{url:"/HadesSpace/img/flt_friendly.b2f59a38.svg",revision:null},{url:"/HadesSpace/img/fuel.e6f48255.svg",revision:null},{url:"/HadesSpace/img/github_logo.b7172519.png",revision:null},{url:"/HadesSpace/img/influence.faa5833c.svg",revision:null},{url:"/HadesSpace/img/menu.368c620f.svg",revision:null},{url:"/HadesSpace/img/mining_route.51fc86b0.svg",revision:null},{url:"/HadesSpace/img/news_Update01.4166e256.png",revision:null},{url:"/HadesSpace/img/news_Update02.19daf0d6.png",revision:null},{url:"/HadesSpace/img/outbound.17ce2b54.svg",revision:null},{url:"/HadesSpace/img/planet.0c7f5afd.png",revision:null},{url:"/HadesSpace/img/planet.23c4780f.png",revision:null},{url:"/HadesSpace/img/planets-calc.73393e3a.png",revision:null},{url:"/HadesSpace/img/portrait_AlphaDrone.4d1ef0b4.png",revision:null},{url:"/HadesSpace/img/portrait_AlphaDrone.6eb85669.png",revision:null},{url:"/HadesSpace/img/portrait_AlphaRocket.b6eeb13d.png",revision:null},{url:"/HadesSpace/img/portrait_AlphaRocket.d329eada.png",revision:null},{url:"/HadesSpace/img/portrait_Anomaly.282fea85.png",revision:null},{url:"/HadesSpace/img/portrait_Anomaly.b0b901d3.png",revision:null},{url:"/HadesSpace/img/portrait_Asteroids.1dfd1a61.png",revision:null},{url:"/HadesSpace/img/portrait_Asteroids.faac7845.png",revision:null},{url:"/HadesSpace/img/portrait_Asteroids_cr.d10f3f4a.png",revision:null},{url:"/HadesSpace/img/portrait_Asteroids_cr.e5b2dd80.png",revision:null},{url:"/HadesSpace/img/portrait_Battleship.669e1f40.png",revision:null},{url:"/HadesSpace/img/portrait_Battleship.ad0aaa9a.png",revision:null},{url:"/HadesSpace/img/portrait_BlueStar.741a09ad.png",revision:null},{url:"/HadesSpace/img/portrait_BlueStar.863634dc.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusBomber.494e56d4.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusBomber.c49ba18e.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusCarrier.176e5eed.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusColossus.34ff8038.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusColossus.44aef0af.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusDestroyer.5b3b391c.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusDestroyer.fa5e72f7.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusHydra.177137be.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusHydra.3c165bb0.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusPhoenix.808baedb.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusPhoenix.b317a46d.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusStation.36e3b3b2.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusStation.ea729e88.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusStorm.67347016.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusStorm.72f906f7.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusSwarm.65c53c04.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusSwarm.be212cd2.png",revision:null},{url:"/HadesSpace/img/portrait_CorpFlagship.a1ff8970.png",revision:null},{url:"/HadesSpace/img/portrait_CorpFlagship.a867d836.png",revision:null},{url:"/HadesSpace/img/portrait_DroneAreaShield.358a1ad0.png",revision:null},{url:"/HadesSpace/img/portrait_DroneAreaShield.828abe30.png",revision:null},{url:"/HadesSpace/img/portrait_DyingPlanet.428747e1.png",revision:null},{url:"/HadesSpace/img/portrait_DyingPlanet.45ade265.png",revision:null},{url:"/HadesSpace/img/portrait_EmptySpace.856e2286.png",revision:null},{url:"/HadesSpace/img/portrait_EmptySpace.dfd72b26.png",revision:null},{url:"/HadesSpace/img/portrait_Guardian.3a2713ae.png",revision:null},{url:"/HadesSpace/img/portrait_Guardian.59056577.png",revision:null},{url:"/HadesSpace/img/portrait_Interceptor.ddacf2fc.png",revision:null},{url:"/HadesSpace/img/portrait_Interceptor.ea343281.png",revision:null},{url:"/HadesSpace/img/portrait_JumpGate.68b7809a.png",revision:null},{url:"/HadesSpace/img/portrait_JumpGate.6cf43704.png",revision:null},{url:"/HadesSpace/img/portrait_Miner.903a4c36.png",revision:null},{url:"/HadesSpace/img/portrait_Miner.ad2997e6.png",revision:null},{url:"/HadesSpace/img/portrait_MiningDrone.6cde0288.png",revision:null},{url:"/HadesSpace/img/portrait_MiningDrone.79b1fcac.png",revision:null},{url:"/HadesSpace/img/portrait_Planet.6505daee.png",revision:null},{url:"/HadesSpace/img/portrait_Planet.ff39d859.png",revision:null},{url:"/HadesSpace/img/portrait_PlanetWhiteStar.2eb63641.png",revision:null},{url:"/HadesSpace/img/portrait_PlanetWhiteStar.d6e9627d.png",revision:null},{url:"/HadesSpace/img/portrait_RedStar.5797a8e0.png",revision:null},{url:"/HadesSpace/img/portrait_RedStar.c8115e46.png",revision:null},{url:"/HadesSpace/img/portrait_RemoteBomb.1b6e36e2.png",revision:null},{url:"/HadesSpace/img/portrait_RemoteBomb.6e8d4260.png",revision:null},{url:"/HadesSpace/img/portrait_Sentinel.bb999e3e.png",revision:null},{url:"/HadesSpace/img/portrait_Sentinel.fc58bceb.png",revision:null},{url:"/HadesSpace/img/portrait_ShipmentDrone.7f9eeec5.png",revision:null},{url:"/HadesSpace/img/portrait_ShipmentDrone.90149456.png",revision:null},{url:"/HadesSpace/img/portrait_SpaceBuilding.1e0ef13e.png",revision:null},{url:"/HadesSpace/img/portrait_SpaceBuilding.a263596c.png",revision:null},{url:"/HadesSpace/img/portrait_Transport.9f9f4458.png",revision:null},{url:"/HadesSpace/img/portrait_Transport.ba4c36cf.png",revision:null},{url:"/HadesSpace/img/portrait_TurretLaser.c15277e9.png",revision:null},{url:"/HadesSpace/img/portrait_TurretLaser.eede8f54.png",revision:null},{url:"/HadesSpace/img/portrait_Tutorial.0cc16efe.png",revision:null},{url:"/HadesSpace/img/portrait_Tutorial.fcf711b7.png",revision:null},{url:"/HadesSpace/img/portrait_WarpLane.53408e80.png",revision:null},{url:"/HadesSpace/img/portrait_WarpLane.ecbc5ff2.png",revision:null},{url:"/HadesSpace/img/portrait_WhiteStar.4a3799f0.png",revision:null},{url:"/HadesSpace/img/portrait_WhiteStar.d70a2bb2.png",revision:null},{url:"/HadesSpace/img/portrait_YellowStar.326cc44e.png",revision:null},{url:"/HadesSpace/img/portrait_YellowStar.b00882d9.png",revision:null},{url:"/HadesSpace/img/redStarScanner.6efd8e9b.png",revision:null},{url:"/HadesSpace/img/relic.6752e037.png",revision:null},{url:"/HadesSpace/img/settings.f901efb7.svg",revision:null},{url:"/HadesSpace/img/shipments.5a390ca3.svg",revision:null},{url:"/HadesSpace/img/star_blue.6e921374.png",revision:null},{url:"/HadesSpace/img/star_dark.8a55b2ab.png",revision:null},{url:"/HadesSpace/img/star_red.22580ac0.svg",revision:null},{url:"/HadesSpace/img/star_red.df88105d.png",revision:null},{url:"/HadesSpace/img/star_red_dark.9cf734b2.png",revision:null},{url:"/HadesSpace/img/star_white.8cb9eb30.png",revision:null},{url:"/HadesSpace/img/star_yellow.28f9b515.png",revision:null},{url:"/HadesSpace/img/station_BlueStarScanner.6cbb83ac.png",revision:null},{url:"/HadesSpace/img/station_Diplomacy.42f1be0b.png",revision:null},{url:"/HadesSpace/img/station_RedStarScanner.355c5d1e.png",revision:null},{url:"/HadesSpace/img/station_Research.ceacc0b3.png",revision:null},{url:"/HadesSpace/img/station_ShipmentRelay.9ea08c8f.png",revision:null},{url:"/HadesSpace/img/station_Shipyard.190d1c06.png",revision:null},{url:"/HadesSpace/img/station_ShortRangeScanner.a8c7338d.png",revision:null},{url:"/HadesSpace/img/station_WhiteStarScanner.3ddf45cc.png",revision:null},{url:"/HadesSpace/img/station_trade.dbe63410.png",revision:null},{url:"/HadesSpace/img/timeModulator.127450fb.png",revision:null},{url:"/HadesSpace/img/warpLaneHub.398191f4.png",revision:null},{url:"/HadesSpace/img/сrystal.ee8a2089.svg",revision:null},{url:"/HadesSpace/index.html",revision:"c016c3902a63ff6c7d5fc0bd019efb5c"},{url:"/HadesSpace/js/174.930459e1.js",revision:null},{url:"/HadesSpace/js/275.7898f640.js",revision:null},{url:"/HadesSpace/js/335.49fb9746.js",revision:null},{url:"/HadesSpace/js/383.3cee58ac.js",revision:null},{url:"/HadesSpace/js/445.3c6e76f7.js",revision:null},{url:"/HadesSpace/js/454.d6e08669.js",revision:null},{url:"/HadesSpace/js/50.15fd8f60.js",revision:null},{url:"/HadesSpace/js/506.6b1d5253.js",revision:null},{url:"/HadesSpace/js/535.5fb07491.js",revision:null},{url:"/HadesSpace/js/599.a4ce9103.js",revision:null},{url:"/HadesSpace/js/707.23f903b2.js",revision:null},{url:"/HadesSpace/js/708.622c1ef5.js",revision:null},{url:"/HadesSpace/js/782.8bb7f567.js",revision:null},{url:"/HadesSpace/js/891.8536bef0.js",revision:null},{url:"/HadesSpace/js/902.6669f5f9.js",revision:null},{url:"/HadesSpace/js/946.9a98c4ac.js",revision:null},{url:"/HadesSpace/js/955.df705d12.js",revision:null},{url:"/HadesSpace/js/About.b2b4246b.js",revision:null},{url:"/HadesSpace/js/Achievements.59f34167.js",revision:null},{url:"/HadesSpace/js/AllianceLevels.2bf2d0ff.js",revision:null},{url:"/HadesSpace/js/BlueStar.438cfddc.js",revision:null},{url:"/HadesSpace/js/Cerberus.eaf1d25e.js",revision:null},{url:"/HadesSpace/js/DarkRedStar.0f4d79c5.js",revision:null},{url:"/HadesSpace/js/Drone.5b4032b7.js",revision:null},{url:"/HadesSpace/js/Index.f269da15.js",revision:null},{url:"/HadesSpace/js/Mining.d3ef7f61.js",revision:null},{url:"/HadesSpace/js/ModulesCalc.d548d950.js",revision:null},{url:"/HadesSpace/js/PlanetsCalc.0b8b7ded.js",revision:null},{url:"/HadesSpace/js/PlayerGoals.3835cd37.js",revision:null},{url:"/HadesSpace/js/RedStar.476f332a.js",revision:null},{url:"/HadesSpace/js/Shield.156be93b.js",revision:null},{url:"/HadesSpace/js/Ships.82b4fef3.js",revision:null},{url:"/HadesSpace/js/SpaceBuildings.41cd7bc0.js",revision:null},{url:"/HadesSpace/js/Support.89f35c28.js",revision:null},{url:"/HadesSpace/js/Trade.b2b84d89.js",revision:null},{url:"/HadesSpace/js/Weapon.9348f694.js",revision:null},{url:"/HadesSpace/js/WhiteStar.b5512bc7.js",revision:null},{url:"/HadesSpace/js/YellowStar.3e622dc4.js",revision:null},{url:"/HadesSpace/js/app.bf788716.js",revision:null},{url:"/HadesSpace/js/chunk-vendors.c5577dff.js",revision:null},{url:"/HadesSpace/manifest.json",revision:"334271836314703960297c9e634cf03d"},{url:"/HadesSpace/meta-image.png",revision:"ebb83cdcac2992bb6f891618c45cc2f0"},{url:"/HadesSpace/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
