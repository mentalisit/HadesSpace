import{_ as T,g,r as b,o as I,b as E,e as l,h as R,u as o,f as e,w as n}from"./index-V-FN6McC.js";import{P as f,V as u}from"./Page-a0SKTsIL.js";import{g as M}from"./getFilterByType-aSftiFBn.js";import{o as S}from"./Data-8V6M1HC-.js";import{s}from"./capital_ships-1i7iIE5j.js";import"./byTypes-1BYQ2hUk.js";import"./globals-v5oA-NaJ.js";import"./sec2str-TkVeYKdX.js";const P={HomeSystem1:{Name:"HomeSystem1",TID:"TID_CERB_STATION_HOME1",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:15e3,MaxShield:15e3,DPS:100,AttackRange:1e3,Model:"CerberusStation_DrkNeb",WeaponFx:"Gun_Projectile01_Weak",ShieldRegenPerMinute:10,ShieldRegenTimeAfterDamage:3600,MaxShips:3,AwardXP:1e3},HomeSystem2:{Name:"HomeSystem2",TID:"TID_CERB_STATION_HOME2",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:5e4,MaxShield:5e4,DPS:140,AttackRange:1600,Model:"CerberusStation_DrkNeb_lv2",WeaponFx:"Gun_Projectile01",ShieldRegenPerMinute:14,ShieldRegenTimeAfterDamage:3600,MaxShips:5,AwardXP:3e3},HomeSystem3:{Name:"HomeSystem3",TID:"TID_CERB_STATION_HOME3",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:9e4,MaxShield:9e4,DPS:200,AttackRange:2400,Model:"CerberusStation_DrkNeb_lv3",WeaponFx:"Gun_Projectile01_Strong",ShieldRegenPerMinute:20,ShieldRegenTimeAfterDamage:3600,MaxShips:7,AwardXP:5e3}},w="/HadesSpace/assets/portrait_CerberusDestroyer-YuXaUhej.jpg",A="/HadesSpace/assets/portrait_CerberusStation-nWdP8rK5.jpg",H="/HadesSpace/assets/portrait_Interceptor-cBybeX7h.jpg",O={class:"categories"},k={href:"#DarkCerberus"},B={href:"#CerberusStations"},N={class:"portrait-container"},x=["src"],y={id:"DarkCerberus",class:"topic"},G={href:"#DarkCerberus",class:"link-topic"},v={class:"portrait-container"},U=["src"],j={id:"CerberusStations",class:"topic"},F={href:"#CerberusStations",class:"link-topic"},W={__name:"Cerberus",setup(L){s.CerberusGhosts.GhostSpawnSecs&&(s.CerberusGhosts.GhostSpawnSecs=s.CerberusGhosts.GhostSpawnSecs[0]),s.CerberusColossus.modules[1].SalvageHullPercent&&s.CerberusColossus.modules[1].SalvageHullPercent.pop();const{t:d}=g(),h=["BSScore","BCCost","FuelUseIncrease","TID_Artifact","UnlockBlueprints","UnlockPrice","UnlockTime","WhiteStarScore"],m=p("capital_ships.cerberus"),C=p("capital_ships.darkCerberus"),D=S(P,{map:([r,a])=>(a.ShipToSpawn&&(a.ShipToSpawn=_(a.ShipToSpawn)),[r,a])});function p(r){return S(s,{...M(r),map:([a,t])=>{if(t.modules&&(t.modules=t.modules.map(i=>S(i,{filter:([c])=>!h.includes(c)}))),t.OnDestroySpawn){const i=t.OnDestroySpawn,c=String(t.OnDestroySpawnCount);t.OnDestroySpawn=`${c}x ${_(i)}`,delete t.OnDestroySpawnCount}return[a,t]}})}function _(r){return r in s?d(s[r].TID):r}return(r,a)=>{const t=b("t");return I(),E("div",null,[l(f,{"title-loc-key":"CERBERUS","content-args":{data:o(m),iconDir:"game/Ships"},portrait:{src:o(w),alt:"cerberus"}},{default:R(()=>[e("div",O,[e("ol",null,[e("li",null,[n(e("a",k,null,512),[[t,"DARK_CERBERUS"]])]),e("li",null,[n(e("a",B,null,512),[[t,"TID_CERB_STATION_HOME2"]])])])])]),_:1},8,["content-args","portrait"]),e("div",null,[e("div",N,[e("img",{class:"portrait",src:o(H),alt:"dark cerberus"},null,8,x),e("h1",y,[n(e("a",G,null,512),[[t,"DARK_CERBERUS"]])])]),l(u,{args:{data:o(C),iconDir:"game/Ships"}},null,8,["args"])]),e("div",null,[e("div",v,[e("img",{class:"portrait",src:o(A),alt:"cerberus station"},null,8,U),e("h1",j,[n(e("a",F,null,512),[[t,"TID_CERB_STATION_HOME2"]])])]),l(u,{args:{data:o(D),iconDir:"game/SpaceBuildings"}},null,8,["args"])])])}}},Q=T(W,[["__scopeId","data-v-b0486517"]]);export{Q as default};