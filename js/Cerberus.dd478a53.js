(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cerberus"],{b896:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{attrs:{id:"title"}},[t._v(t._s(t.title))]),s("img",{staticClass:"portrait",attrs:{src:r("6d5b"),alt:"cerberus"}}),s("v-content",{attrs:{args:{data:t.promise,category:"cerberus",iconDir:"Ships",cerberusModules:t.cerberusModules}}}),s("div",{staticClass:"title title-heading",attrs:{id:"CerberusStations"}},[s("h1",[s("a",{attrs:{href:"#CerberusStations"}},[t._v(" "+t._s(t.$t("TID_CERB_STATION_HOME2"))+" ")])])]),s("v-content",{attrs:{args:{data:t.promise2,category:"default"}}})],1)},a=[],n=(r("d919"),r("f011"),r("a097"),r("8ec4"),r("9d26")),i={components:{VContent:n["a"]},data:function(){return{promise:r.e("data-capital_ships").then(r.bind(null,"bae2")),promise2:r.e("data-cerberus_stations").then(r.bind(null,"1aad")),title:this.$t("cerberus"),cerberusModules:{}}},metaInfo:function(){return{title:this.title}},created:function(){var t=this;r.e("data-modules").then(r.bind(null,"d1db")).then((function(e){e["byTypes"].cerberus.forEach((function(r){t.$set(t.cerberusModules,r,e.data[r])}))})).catch(console.error)}},c=i,o=r("6ffd"),u=Object(o["a"])(c,s,a,!1,null,null,null);e["default"]=u.exports}}]);