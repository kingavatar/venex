(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"26d3":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Settings"},[a("h1",[e._v("This is Settings Page")])])}],o={components:{}},i=o,s=a("2877"),l=Object(s["a"])(i,r,n,!1,null,null,null);t["default"]=l.exports},"2d3b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("v-row",[a("h1",{staticClass:"px-6 py-6"},[e._v("Advanced Search")])]),e.result?a("SearchResult",{attrs:{headers:this.headers,vehicles:this.vehicles},on:{goBack:e.handleResult}}):a("v-card",{staticClass:"mx-n3",attrs:{shaped:"",height:"88vh",width:"100%",outlined:"",color:"#F7F9FB"}},[a("v-col",[a("v-row",{staticClass:"ma-3 pa-3",attrs:{align:"center"}},[a("v-spacer"),a("p",[e._v("Vehicle Number")]),a("v-text-field",{staticClass:"mx-3 px-6 rounded-tl-xl rounded-br-xl",attrs:{label:"Solo",placeholder:"Vehicle Number",solo:"","prepend-inner-icon":"mdi-car-side"}}),a("v-btn",{staticClass:"mb-6",attrs:{outlined:"",color:"primary"},on:{click:e.sendDataBackend}},[e._v("search")]),a("v-spacer")],1),a("v-divider",{staticClass:"mx-3"}),a("v-row",{staticClass:"mx-3 mt-3 pa-3 pt-6",attrs:{align:"start"}},[a("h2",[e._v("Advanced Options")])]),a("v-row",{staticClass:"mx-3 px-3 mt-6 pt-3",attrs:{align:"center"}},[a("p",[e._v("For these Owners")]),a("v-spacer"),a("v-text-field",{staticClass:"mx-6 px-3  rounded-tl-xl rounded-br-xl",attrs:{label:"Solo",placeholder:"Name","prepend-inner-icon":"mdi-account",solo:""}}),a("v-spacer"),a("v-text-field",{staticClass:"mx-6 px-3 rounded-tl-xl rounded-br-xl",attrs:{label:"Solo",placeholder:"Address","prepend-inner-icon":"mdi-map-marker",solo:""}}),a("v-spacer")],1),a("v-row",{staticClass:"mx-3 px-3 mt-6 pt-3",attrs:{align:"center"}},[a("p",[e._v("Between this time")]),a("v-spacer"),a("v-menu",{ref:"timemenu1",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.timebefore,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.timebefore=t},"update:return-value":function(t){e.timebefore=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"mx-3 px-6 rounded-tl-xl rounded-br-xl",attrs:{solo:"",readonly:"",placeholder:"TimeStamp Before","prepend-inner-icon":"mdi-clock-outline"},model:{value:e.timebefore,callback:function(t){e.timebefore=t},expression:"timebefore"}},"v-text-field",n,!1),r))]}}],null,!1,1941806517),model:{value:e.timemenubefore,callback:function(t){e.timemenubefore=t},expression:"timemenubefore"}},[e.timemenubefore?a("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.timemenu1.save(e.timebefore)}},model:{value:e.timebefore,callback:function(t){e.timebefore=t},expression:"timebefore"}}):e._e()],1),a("v-spacer"),a("v-menu",{ref:"timemenu2",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.timeafter,transition:"scale-transition","offset-y":"","max-width":"290px"},on:{"update:returnValue":function(t){e.timeafter=t},"update:return-value":function(t){e.timeafter=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"mx-3 px-6 rounded-tl-xl rounded-br-xl",attrs:{solo:"",readonly:"",placeholder:"TimeStamp After","prepend-inner-icon":"mdi-clock-outline"},model:{value:e.timeafter,callback:function(t){e.timeafter=t},expression:"timeafter"}},"v-text-field",n,!1),r))]}}],null,!1,3419340117),model:{value:e.timemenuafter,callback:function(t){e.timemenuafter=t},expression:"timemenuafter"}},[e.timemenuafter?a("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.timemenu2.save(e.timeafter)}},model:{value:e.timeafter,callback:function(t){e.timeafter=t},expression:"timeafter"}}):e._e()],1),a("v-spacer")],1),a("v-row",{staticClass:"mx-3 px-3 mt-6 pt-3",attrs:{align:"center"}},[a("p",[e._v("Between these dates")]),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"pr-16 rounded-tl-xl rounded-br-xl",attrs:{solo:"",readonly:"",placeholder:"Date Before","prepend-inner-icon":"mdi-calendar"},model:{value:e.datebefore,callback:function(t){e.datebefore=t},expression:"datebefore"}},"v-text-field",n,!1),r))]}}],null,!1,1054542345),model:{value:e.datemenubefore,callback:function(t){e.datemenubefore=t},expression:"datemenubefore"}},[a("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.datemenubefore=!1}},model:{value:e.datebefore,callback:function(t){e.datebefore=t},expression:"datebefore"}})],1),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"pr-6 rounded-tl-xl rounded-br-xl",attrs:{solo:"",readonly:"",placeholder:"Date After","prepend-inner-icon":"mdi-calendar"},model:{value:e.dateafter,callback:function(t){e.dateafter=t},expression:"dateafter"}},"v-text-field",n,!1),r))]}}],null,!1,1915777176),model:{value:e.datemenuafter,callback:function(t){e.datemenuafter=t},expression:"datemenuafter"}},[a("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.datemenuafter=!1}},model:{value:e.dateafter,callback:function(t){e.dateafter=t},expression:"dateafter"}})],1),a("v-spacer")],1),a("v-row",{staticClass:"mt-6 pt-3",attrs:{align:"center",justify:"center"}},[a("v-radio-group",{attrs:{row:""},model:{value:e.radios,callback:function(t){e.radios=t},expression:"radios"}},[a("v-radio",{attrs:{label:"Resident",value:"resident"}}),a("v-radio",{attrs:{label:"Commercial",value:"commercial"}}),a("v-radio",{attrs:{label:"Visitor",value:"visitor"}}),a("v-radio",{attrs:{label:"Any",value:"any"}})],1)],1)],1)],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"searchresult"}},[a("v-col",{staticClass:"px-9",attrs:{cols:"12"}},[a("v-row",{staticClass:"mb-3 pb-3"},[a("v-btn",{attrs:{icon:"",large:""},on:{click:e.goback}},[a("v-icon",[e._v("mdi-arrow-left")])],1)],1),a("v-card",{attrs:{shaped:"",height:"100%",width:"100%",elevation:"3"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.vehicles,"items-per-page":10,search:e.search},on:{"click:row":e.rowClicked},scopedSlots:e._u([{key:"item.icon",fn:function(t){var r=t.item;return[a("v-icon",[e._v(e._s(r.icon))])]}},{key:"item.action",fn:function(t){var r=t.item;return[a("v-chip",{attrs:{color:e.getColor(r.action),"text-color":e.getTextColor(r.action)}},[e._v(e._s(r.action))])]}}])})],1)],1)],1)},i=[],s={props:{headers:Array,vehicles:Array},data:function(){return{search:"",headers:[],vehicles:[]}},methods:{rowClicked:function(e){this.$router.push({path:"/details/".concat(e.number)})},getColor:function(e){return"Entry"===e?"#F3FEF3":"Exit"===e?"#FEF5F8":"#FFF9F4"},getTextColor:function(e){return"Entry"===e?"green":"Exit"===e?"red":"orange"},goback:function(){this.$emit("goBack")}}},l=s,c=a("2877"),u=Object(c["a"])(l,o,i,!1,null,null,null),d=u.exports,f=a("bc3a"),m=a.n(f),p={components:{SearchResult:d},data:function(){return{headers:[],vehicles:[],result:!1,radios:"any",timebefore:null,timeafter:null,timemenubefore:!1,timemenuafter:!1,datebefore:null,dateafter:null,datetoday:(new Date).toISOString().substr(0,10),datemenubefore:!1,datemenuafter:!1}},methods:{sendDataBackend:function(){var e=this,t="http://localhost:5000/api/search",a=new FormData;a.append("radios",this.radios),a.append("timebefore",this.timebefore),a.append("timeafter",this.timeafter),a.append("timemenubefore",this.timemenubefore),a.append("timemenuafter",this.timemenuafter),a.append("datebefore",this.datebefore),a.append("dateafter",this.dateafter),a.append("datetoday",this.datetoday),a.append("datemenubefore",this.datemenubefore),a.append("datemenuafter",this.datemenuafter),m.a.post(t,a).then((function(){})).catch((function(e){console.log(e)})),this.result=!0,m.a.get(t).then((function(t){e.headers=t.data.headers,e.vehicles=t.data.vehicles})).catch((function(e){console.log(e)}))},handleResult:function(){this.result=!1}}},v=p,h=Object(c["a"])(v,r,n,!1,null,null,null);t["default"]=h.exports},"9f52":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"details"}},[a("v-col",[a("v-row",{attrs:{align:"center"}},[a("v-btn",{attrs:{icon:"",large:""},on:{click:e.goback}},[a("v-icon",[e._v("mdi-arrow-left")])],1),a("v-spacer"),a("h1",[e._v("Account Page")]),a("v-spacer")],1)],1)],1)},n=[],o={methods:{closeDrawer:function(){this.$root.$emit("toggleNavDrawer","close")},goback:function(){this.$root.$emit("toggleNavDrawer","open"),this.$router.back()}},beforeMount:function(){this.closeDrawer()},beforeDestroy:function(){this.$root.$emit("toggleNavDrawer","open")}},i=o,s=a("2877"),l=Object(s["a"])(i,r,n,!1,null,null,null);t["default"]=l.exports},f820:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("This is an about page")])])}],o=a("2877"),i={},s=Object(o["a"])(i,r,n,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=about.4615b984.js.map