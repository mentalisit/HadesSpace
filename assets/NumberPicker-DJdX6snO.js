import{d as p,i as c,A as v,o as d,b as f,f as n,_ as m}from"./index-Cm-cnVE-.js";const _={class:"container"},k={class:"input-wrap"},x=["value"],b=p({__name:"NumberPicker",props:{value:{},min:{},max:{}},emits:["update:value"],setup(l,{emit:u}){const t=l,r=u,a=c();v(()=>{a.value.focus(),a.value.select()});function o(e){e<t.min&&(e=t.min),e>t.max&&(e=t.max),r("update:value",e)}return(e,s)=>(d(),f("div",_,[n("div",{class:"minus",onClick:s[0]||(s[0]=i=>o(t.value-1))}),n("div",k,[n("input",{ref_key:"inputRef",ref:a,type:"text",value:e.value,onChange:s[1]||(s[1]=i=>o(parseInt(i.target.value)))},null,40,x)]),n("div",{class:"plus",onClick:s[2]||(s[2]=i=>o(t.value+1))})]))}}),N=m(b,[["__scopeId","data-v-e9b11ac6"]]);export{N};
