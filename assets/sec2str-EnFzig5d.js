import{az as h}from"./index-Dr0R0x0q.js";const{t:s}=h.global;function T(n){const t=[],I=Math.trunc(n/86400),o=Math.trunc(n%86400/3600),u=Math.trunc(n%3600/60),r=Math.trunc(n%60);return I!=0&&t.push(`${I}${s("TID_DAY_ABBREVIATION")}`),o!=0&&t.push(`${o}${s("TID_HOUR_ABBREVIATION")}`),u!=0&&t.push(`${u}${s("TID_MINUTE_ABBREVIATION")}`),r!=0&&t.push(`${r}${s("TID_SECOND_ABBREVIATION")}`),!t.length&&n&&t.push(`${n}${s("TID_SECOND_ABBREVIATION")}`),t.join(" ")}export{T as s};
