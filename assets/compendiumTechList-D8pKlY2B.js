import{o as i}from"./Data-DzE1T1cR.js";import{i as a,aK as r,y as e,A as v,B as u,E as d}from"./index-rqa4D9cV.js";function h(){const o=a(null),c=a({}),s=r((t,n)=>e.setTechLevel(t,n),500);return v(()=>{e.getUser()&&(o.value=e.getTechLevels())}),u(o,t=>{t&&(c.value=i(t,{map:([n,l])=>[d(n),l.level]}))},{deep:!0}),e.on("sync",t=>o.value=t),e.on("connected",()=>o.value=e.getTechLevels()),e.on("disconnected",()=>{o.value=void 0,c.value=void 0}),{data:o,levelMap:c,setTechLevel:s}}export{h as c};