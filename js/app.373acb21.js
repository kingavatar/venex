(function(t){function e(e){for(var r,o,c=e[0],s=e[1],l=e[2],u=0,m=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);v&&v(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var s=a[o];0!==n[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"457d7758"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(t);var l=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var v=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("AppNavigation"),a("v-main",[a("v-container",{staticClass:"pr-0",attrs:{fluid:""}},[a("router-view")],1)],1)],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{permanent:"",app:"",width:"100px"}},[a("div",{staticClass:"drawer"},[a("v-list",{staticClass:"my-6",attrs:{flat:"",nav:""}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" Venex ")])],1)],1)],1),a("v-list",{attrs:{flat:"",nav:""}},[a("v-list-item",{staticClass:"px-6 my-6",attrs:{to:"/",color:"primary"}},[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({attrs:{large:""}},"v-icon",n,!1),r),[t._v("mdi-view-dashboard")])]}}])},[a("span",[t._v("DashBoard")])])],1)],1),a("v-list",{attrs:{flat:"",nav:""}},[a("v-list-item",{staticClass:"px-6 my-6",attrs:{to:"/search",color:"primary"}},[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({attrs:{large:""}},"v-icon",n,!1),r),[t._v("mdi-magnify")])]}}])},[a("span",[t._v("Advanced Search")])])],1)],1),a("v-list",{attrs:{flat:"",nav:""}},[a("v-list-item",{staticClass:"px-6 my-6",attrs:{color:"primary"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g(t._b({attrs:{large:""}},"v-icon",n,!1),Object.assign({},i,r)),[t._v("mdi-account-details-outline")])]}}],null,!0)},[a("span",[t._v("Details Entry")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("User Profile")])]),a("v-card-text",[a("UserForm")],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)],1)],1),a("v-list",{attrs:{flat:"",nav:""}},[a("v-list-item",{staticClass:"px-6 my-6",attrs:{to:"/settings",color:"primary"}},[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({attrs:{large:""}},"v-icon",n,!1),r),[t._v("mdi-cog")])]}}])},[a("span",[t._v("Settings")])])],1)],1)],1)])},c=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Legal first name*",required:""}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Legal middle name",hint:"example of helper text only on focus"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Legal last name*",hint:"example of persistent helper text","persistent-hint":"",required:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Phone Number*",required:""}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Flat Number*",required:""}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{items:["Resident Vehicle","Commercial Vehicle","Visitor Vehicle"],label:"Type of Vehicle*",required:""}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-radio-group",{attrs:{row:""},model:{value:t.action,callback:function(e){t.action=e},expression:"action"}},[a("v-radio",{attrs:{label:"Entry",value:"Entry"}}),a("v-radio",{attrs:{label:"Exit",value:"Exit"}})],1)],1)],1)],1),a("small",[t._v("*indicates required field")])],1)},l=[],u={data:function(){return{action:"Entry"}}},v=u,m=a("2877"),d=Object(m["a"])(v,s,l,!1,null,null,null),p=d.exports,f={name:"AppNavigation",components:{UserForm:p},data:function(){return{dialog:!1}}},h=f,b=(a("89ff"),Object(m["a"])(h,o,c,!1,null,"6ecaa721",null)),y=b.exports,g={name:"App",components:{AppNavigation:y}},_=g,x=(a("034f"),Object(m["a"])(_,n,i,!1,null,null,null)),X=x.exports,w=(a("d3b7"),a("8c4f")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-container",{staticClass:"px-0",attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"pr-0",attrs:{cols:"9"}},[a("v-row",[a("h1",{staticClass:"px-6 pb-6"},[t._v("Dashboard")])]),a("v-card",{staticClass:"mx-n3",attrs:{shaped:"",height:"86vh",width:"100%",outlined:"",color:"#F7F9FB"}},[a("v-col",{staticClass:"my-3 py-12 px-12",attrs:{cols:"12"}},[a("v-card",{attrs:{shaped:"",height:"100%",width:"100%",elevation:"3"}},[a("v-card-title",[t._v(" Vehicle History "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.vehicles,"items-per-page":10,search:t.search},on:{"click:row":t.rowClicked},scopedSlots:t._u([{key:"item.icon",fn:function(e){var r=e.item;return[a("v-icon",[t._v(t._s(r.icon))])]}},{key:"item.action",fn:function(e){var r=e.item;return[a("v-chip",{attrs:{color:t.getColor(r.action),"text-color":t.getTextColor(r.action)}},[t._v(t._s(r.action))])]}}])})],1)],1)],1)],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"3"}},[a("Profile")],1)],1)],1)],1)},C=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile mr-6"},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"space-between"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-bell-outline")])],1)]}}])},[a("span",[t._v("Notification")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-location-exit")])],1)]}}])},[a("span",[t._v("Logout")])])],1),a("v-row",{staticClass:"pt-14",attrs:{justify:"space-around",align:"center"}},[a("h2",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{"font-weight":"normal"}},[t._v("Hello,")]),a("br"),t._v(" His Name ")]),a("v-avatar",{attrs:{size:"90"}},[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})])],1),a("v-divider",{staticClass:"my-10"}),t._l(3,(function(e){return a("v-row",{key:e,attrs:{justify:t.space-t.around}},t._l(2,(function(r){return a("v-col",{key:r},[a("v-card",{staticClass:"pa-2",attrs:{color:"#F7F9FB",outlined:""}},[a("v-list-item-content",[a("div",{staticClass:"overline mb-2"},[t._v(" "+t._s(t.cards[e-1][r-1].title)+" ")]),a("v-card-title",[a("v-row",{attrs:{justify:"center"}},[a("v-icon",{attrs:{color:t.cards[e-1][r-1].color}},[t._v(t._s(t.cards[e-1][r-1].icon))]),a("div",{staticClass:"mt-2 mx-4"},[t._v(" "+t._s(t.cards[e-1][r-1].number)+" ")])],1)],1)],1)],1)],1)})),1)}))],2)],1)},S=[],j={name:"Profile",data:function(){return{cards:[[{title:"Total Activity",number:"189",icon:"mdi-car",color:"purple"},{title:"Entries",number:"174",icon:"mdi-car-arrow-right",color:"green"}],[{title:"Exits",number:"23",icon:"mdi-car-arrow-left",color:"red"},{title:"Residents Parked",number:"56",icon:"mdi-account",color:"orange"}],[{title:"Visitors Parked",number:"24",icon:"mdi-clock",color:"blue"},{title:"Commercial Parked",number:"7",icon:"mdi-flag",color:"pink"}]]}}},F=j,V=Object(m["a"])(F,E,S,!1,null,null,null),T=V.exports,O={name:"Home",components:{Profile:T},data:function(){return{search:"",headers:[{align:"start",sortable:!1,value:"icon"},{text:"Vehicle Number",value:"number"},{text:"Type",value:"type"},{text:"Action",value:"action"},{text:"TimeStamp",value:"time"}],vehicles:[{action:"Entry",number:"XXXXXX",type:"Visitor Vehicle",time:"TimeStamp",icon:"mdi-clock"},{action:"Exit",number:"XXXXXX",type:"Resident Vehicle",time:"TimeStamp",icon:"mdi-account"},{action:"Entry",number:"XXXXXX",type:"Commercial Vehicle",time:"TimeStamp",icon:"mdi-flag"},{action:"Entry",number:"XXXXXX",type:"Visitor Vehicle",time:"TimeStamp",icon:"mdi-clock"},{action:"Exit",number:"XXXXXX",type:"Resident Vehicle",time:"TimeStamp",icon:"mdi-account"},{action:"Entry",number:"XXXXXX",type:"Commercial Vehicle",time:"TimeStamp",icon:"mdi-flag"},{action:"Entry",number:"XXXXXX",type:"Visitor Vehicle",time:"TimeStamp",icon:"mdi-clock"},{action:"Exit",number:"XXXXXX",type:"Resident Vehicle",time:"TimeStamp",icon:"mdi-account"},{action:"Entry",number:"XXXXXX",type:"Commercial Vehicle",time:"TimeStamp",icon:"mdi-flag"}]}},methods:{rowClicked:function(t){this.$router.push({path:"/details/".concat(t.number)})},getColor:function(t){return"Entry"===t?"#F3FEF3":"Exit"===t?"#FEF5F8":"#FFF9F4"},getTextColor:function(t){return"Entry"===t?"green":"Exit"===t?"red":"orange"}}},P=O,A=Object(m["a"])(P,k,C,!1,null,null,null),N=A.exports;r["default"].use(w["a"]);var q=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/search",name:"Search",component:function(){return a.e("about").then(a.bind(null,"2d3b"))}},{path:"/settings",name:"Settings",component:function(){return a.e("about").then(a.bind(null,"26d3"))}},{path:"/details/:vehicleNo",name:"Details",component:function(){return a.e("about").then(a.bind(null,"9f52"))}}],$=new w["a"]({mode:"history",base:"/",routes:q}),L=$,H=a("2f62");r["default"].use(H["a"]);var R=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),D=(a("5363"),a("ce5b")),M=a.n(D),B=(a("bf40"),a("fcf4"));r["default"].use(M.a);var J=new M.a({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#6F32FF",secondary:B["a"].grey.darken1,accent:B["a"].shades.black,error:B["a"].red.accent3},dark:{primary:B["a"].blue.lighten3}}}});r["default"].config.productionTip=!1,new r["default"]({router:L,store:R,vuetify:J,render:function(t){return t(X)}}).$mount("#app")},"85ec":function(t,e,a){},"89ff":function(t,e,a){"use strict";var r=a("eb00"),n=a.n(r);n.a},eb00:function(t,e,a){}});
//# sourceMappingURL=app.373acb21.js.map