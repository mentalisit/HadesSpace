import{d as J,x as q,G as U,g as Y,i,a as B,A as L,J as z,y as o,z as Z,K as P,L as Q,r as H,o as r,b as c,f as e,u as g,t as v,F as W,D as x,N as f,w as C,O as X,P as j,e as $,h as ee,Q as te,R as ae,C as le,S as se,M as ne,s as oe,v as ue,_ as ie}from"./index-LFsmgN1u.js";const w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEe0lEQVR4nN1av2tUQRAeIaDGIkpAwbsE1MJGCzHkQAwGrFN4tWJjo5CAiCaNSLBJDCJ4hRaCCNZn4T+QwiZBsbIW1BMMgr8wIgTifHe75N3e7Lu3v3IXP/iK2/fevPl2Z+ftzt7A08YmJUKJOc48wSwrDqpr68yPzE/Md8xVZiOFEwMJbELYNLOScw+EHlc8r9pWmDWKLDSmwCLC8lBRrCtGERpLIEIR4soRbFWVPYzmaqixGALPMu8WuA/zTY8KRjuvM3BtkXmb+SrEuVCB6Ok8cQg1zC3bSOB5hGXVch22ZylgJEMEYhQWLdeKJoxVRXSEbf7iHRfJc06GCJy2tD9kvnC0BefnmBeYM5Z3zZEHfAXCEam3fcRloZ81RVbUO51t+wqU5kydwsRpwEZZeEeVtkngOHVmQGTIGsVDTXhPWbU5JRwfgVJo1ik+YFMK1eQCzxm/NyhOaJqAzWvU7iPe7RQprgIPMIeNtuDVRg5g+0zm97Dy4VtRA64CjwltSXYBObbhw+uiBlwF7hXaPlM6SLYlH6xwFbhHaPtF6SDZlnywwlXgutB2kNJBsi35YIWrwK9C2yFKB8m25IMVrgI/MFHj2JVpO0npYNreVD4UhqvAP9TKbNkVxlFq7SxiZ9OSsp1FQ/lQGD4fenybzKUa1okxl2rapvRuJ/gIrJO8EI5WR6HW6NkW9E7wEQgR2NCaa9IF5iWKgwWhbYU8OtB3u4RwNAUibJeYNykMSyTXa7ymgK9A9KQUqmPU6n2f+qYuO44J17zDP6RkIe3ZAF3fdNnd20oVQNBeM7SqhjrJfZI/yDOKL5lvme+Z39W1/cwjzFPMqRz7X8izFqMRKhBhc4NaYWmrc05RvggbMHJzFJiZYxR+dUXsOcVDFHFAjMIvEo3veYQNiAZ0GD4NSDDbXviNeRaRB52wdKJJvpJBKr/OPO3wzF/aCjW9gT2csbe7gA19VvGG+YAcQtdFYF4qzwK9jZ7WK49uzpQUMVLSZycLdCxCt/AnqKhAhGO1yz2+53q6E3T46XVo3vvQ0eiIrt/HbgL3UesIy5ZEfjCfUdyyIcTWFBE1l5lDwn3oAHQGTqB+24x1E/iY7CET9STWAnQcRtY2ouh4+Ghd5OcJzPt4B53ZOUKPKOa0dFwHH+GruOKxCbSd1SEL3qK0o2YDOhTnhPdoKwtrwFf43DEnJYGIeykcIO4q8yf1Dg3lwyPqFAmfkcHb8oEpEJP2imBYL516KU4DPiCKpCkE39v+c2MKxDAPUieirAsjwrb+he9tp8FZgfoPASZmqb/EacAn+GYmHr1gaCbBrEBp3i3T9mVLH8C3Zeak0V4lQ6BeKpl4Qv0P+DhptEFLs1arBdpKdP0YmiZs9aFmrVYLHBceTHEsnQqSwKYmCJT+VuVVg+whpFotNJUgcEJ4YIV2HqRi9AQEjgg393PmtEHyecQmcCeFp4bkc1PgqHAhezawQf2NvB3RKC5Km8nYVbJeYSjFf7b7ChC4Rmn/SNBLrEHgPPMO/X8iMXDz/wAiqusPTmWIpwAAAABJRU5ErkJggg==",S=h=>(oe("data-v-66790001"),h=h(),ue(),h),re={class:"header"},ce={class:"content"},ve={key:0,class:"select alt-switch"},de=["value"],me={value:"default"},_e=["value"],pe={key:0,class:"logged fetching"},ge={class:"avatar"},Ae=["src"],Ce=["src"],he=S(()=>e("p",null,null,-1)),Ee={class:"avatar"},Ie=["src","alt"],fe=["src","alt"],we={key:2,class:"not-logged"},Ne={class:"footer"},Se={class:"content"},Re=["href"],De={class:"input"},ye={class:"name"},Te={class:"error-msg"},be=["href"],Oe={class:"select switch-client"},Ge=S(()=>e("option",{value:0},"Default client",-1)),Be=S(()=>e("option",{value:1},"Client from Mentalisit",-1)),Pe=[Ge,Be],Ve=J({__name:"CompendiumPage",setup(h){const V=/[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}/,N=q(),u=U(),{t:E}=Y(),d=i(!1),m=i(""),I=i(""),s=i(!1),n=i(),_=i(),A=i(localStorage.getItem("compendium_client")?parseInt(localStorage.getItem("compendium_client"),10):0),R=B(()=>A.value===0?"https://hs-compendium.com/":"https://compendiumnew.mentalisit.myds.me/links"),M=B(()=>A.value===0?"HS Compendium":"invite");L(async()=>{s.value=!0,await z();const l=o.value.getUser();s.value=!1,l?(n.value=l,_.value=o.value.getGuild()):(d.value=!0,"client"in u.currentRoute.value.query&&(A.value=parseInt(u.currentRoute.value.query.client,10),y(parseInt(u.currentRoute.value.query.client,10))),"lang"in u.currentRoute.value.query&&N.commit(Z.SET_LANGUAGE,u.currentRoute.value.query.lang),"c"in u.currentRoute.value.query&&(m.value=u.currentRoute.value.query.c,await D()))});async function D(){let l;if(!m.value){I.value=E("CANNOT_BE_EMPTY");return}if(!V.test(m.value)){I.value=E("INCORRECT_CODE");return}s.value=!0;try{l=await o.value.checkConnectCode(m.value)}catch(p){I.value=p.toString(),console.error(p),s.value=!1;return}s.value=!1,d.value=!1,await N.dispatch(P.OPEN_CONFIRM,E("CONFIRM_LOGIN",[l.guild.name,l.user.username])).catch(()=>(d.value=!0,!0))||(s.value=!0,await o.value.connect(l),n.value=o.value.getUser(),_.value=o.value.getGuild(),s.value=!1)}function k(l){o.value.switchAlt(l)}function y(l){s.value=!0,Q(l).then(()=>{s.value=!1})}function F(){N.dispatch(P.OPEN_CONFIRM,E("TID_SETTINGS_DLG_SIGN_OUT")).then(()=>{o.value.logout(),n.value=void 0,_.value=void 0}).catch(()=>{})}return(l,t)=>{var T,b,O,G;const p=H("t");return r(),c("div",null,[e("div",re,[e("div",ce,[e("div",null,[(b=(T=n.value)==null?void 0:T.alts)!=null&&b.length?(r(),c("div",ve,[e("select",{value:g(o).selectedAlt,onChange:t[0]||(t[0]=a=>k(a.target.value))},[e("option",me,v((O=n.value)==null?void 0:O.username),1),(r(!0),c(W,null,x((G=n.value)==null?void 0:G.alts,(a,K)=>(r(),c("option",{key:K,value:a},v(a),9,_e))),128))],40,de)])):f("",!0)]),s.value&&!n.value?(r(),c("div",pe,[e("div",ge,[e("img",{src:g(w),alt:"memberImage avatar"},null,8,Ae),e("img",{src:g(w),alt:"memberImage avatar"},null,8,Ce)]),he])):f("",!0),n.value?(r(),c("div",{key:1,class:"logged",onClick:F},[e("div",Ee,[e("img",{src:_.value.url,alt:`${_.value.name} icon`,onError:t[1]||(t[1]=a=>a.target.src=g(w))},null,40,Ie),e("img",{src:n.value.avatarUrl,alt:`${n.value.username} avatar`,onError:t[2]||(t[2]=a=>a.target.src=g(w))},null,40,fe)]),e("div",null,[e("p",null,v(_.value.name),1),e("p",null,v(n.value.username),1)])])):f("",!0),!s.value&&!n.value?(r(),c("div",we,[C(e("span",null,null,512),[[p,"TID_SETTINGS_DLG_NOT_SIGNED_IN"]]),e("button",{class:"button accent",onClick:t[3]||(t[3]=a=>d.value=!0)},v(l.$t("TID_SETTINGS_DLG_SIGN_IN")),1)])):f("",!0)])]),X(l.$slots,"default",{},void 0,!0),e("div",Ne,[e("div",Se,[e("p",null,[j("Powered by "),e("a",{href:R.value,target:"_blank"},"HS Compendium",8,Re)])])]),$(ne,{open:d.value,"onUpdate:open":t[7]||(t[7]=a=>d.value=a),title:l.$t("TID_SETTINGS_DLG_SIGN_IN"),size:g(se).SMALL},{body:ee(()=>[e("div",De,[e("p",ye,[C(e("span",null,null,512),[[p,"ENTER_CODE"]]),e("span",Te,v(I.value),1)]),C(e("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>m.value=a)},null,512),[[te,m.value]])]),e("a",{href:R.value,target:"_blank"},v(M.value),9,be),e("div",Oe,[C(e("select",{"onUpdate:modelValue":t[5]||(t[5]=a=>A.value=a),onChange:t[6]||(t[6]=a=>y(a.target.value))},Pe,544),[[ae,A.value]])]),e("div",{class:le(["code-req-btn-wrap",{disable:s.value}])},[C(e("button",{class:"button accent",onClick:D},null,512),[[p,"TID_LINK_DEVICE_DLG_SUBMIT_CODE_BTN"]])],2)]),_:1},8,["open","title","size"])])}}}),ke=ie(Ve,[["__scopeId","data-v-66790001"]]);export{ke as C,w as m};
