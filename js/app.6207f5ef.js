(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);m&&m(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"14ec26e2"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/venex/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var m=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("AppNavigation"),a("v-main",[a("v-container",{staticClass:"pr-0 pb-0",attrs:{fluid:""}},[a("keep-alive",{attrs:{include:"Home,Search",max:10}},[a("router-view")],1)],1)],1)],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{app:"",width:"100px"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("div",{staticClass:"drawer"},[a("v-list",{staticClass:"my-6",attrs:{flat:"",nav:""}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" Venex ")])],1)],1)],1),a("v-list",{attrs:{flat:"",nav:""}},[a("v-list-item",{staticClass:"px-6 my-6",attrs:{to:"/",color:"primary"}},[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({attrs:{large:""}},"v-icon",n,!1),r),[t._v("mdi-view-dashboard")])]}}])},[a("span",[t._v("DashBoard")])])],1)],1),a("v-list",{attrs:{flat:"",nav:""}},[a("v-list-item",{staticClass:"px-6 my-6",attrs:{to:"/search",color:"primary"}},[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({attrs:{large:""}},"v-icon",n,!1),r),[t._v("mdi-magnify")])]}}])},[a("span",[t._v("Advanced Search")])])],1)],1),a("v-list",{attrs:{flat:"",nav:""}},[a("v-list-item",{staticClass:"px-6 my-6",attrs:{color:"primary"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g(t._b({attrs:{large:""}},"v-icon",n,!1),Object.assign({},i,r)),[t._v("mdi-account-details-outline")])]}}],null,!0)},[a("span",[t._v("Details Entry")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("User Profile")])]),a("v-card-text",[a("UserForm",{ref:"userform"})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDialog}},[t._v("Close")]),a("v-btn",{attrs:{icon:"",color:"warning"},on:{click:t.resetFormValidation}},[a("v-icon",[t._v("mdi-restore-alert")])],1),a("v-btn",{attrs:{icon:"",color:"error"},on:{click:t.resetForm}},[a("v-icon",[t._v("mdi-restore")])],1),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.saveDialog}},[t._v("Save")])],1)],1)],1)],1)],1),a("v-list",{attrs:{flat:"",nav:""}},[a("v-list-item",{staticClass:"px-6 my-6",attrs:{to:"/settings",color:"primary"}},[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({attrs:{large:""}},"v-icon",n,!1),r),[t._v("mdi-cog")])]}}])},[a("span",[t._v("Settings")])])],1)],1)],1)])},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",{attrs:{value:t.tab,grow:""},on:{change:t.onTabChange}},[a("v-tab",[t._v(" Visitor ")]),a("v-tab",[t._v(" Commercial ")]),a("v-tab-item",[a("v-form",{ref:"vistform",model:{value:t.vistvalid,callback:function(e){t.vistvalid=e},expression:"vistvalid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Legal first name*",rules:t.nameRules,required:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Legal middle name",hint:"Middle name Optional"},model:{value:t.middlename,callback:function(e){t.middlename=e},expression:"middlename"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Legal last name*",rules:t.nameRules,hint:"*Required","persistent-hint":"",required:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email",rules:t.emailRules,hint:"Email is Optional"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Phone Number*",rules:t.phoneRules,required:""},model:{value:t.phonenumber,callback:function(e){t.phonenumber=e},expression:"phonenumber"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Flat Number*",hint:"whom they are visiting","persistent-hint":"",rules:t.flatRules,required:""},model:{value:t.flatno,callback:function(e){t.flatno=e},expression:"flatno"}})],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-radio-group",{attrs:{row:""},model:{value:t.action,callback:function(e){t.action=e},expression:"action"}},[a("v-radio",{attrs:{label:"Entry",value:"Entry"}}),a("v-radio",{attrs:{label:"Exit",value:"Exit"}})],1)],1)],1)],1),a("small",[t._v("*indicates required field")])],1)],1),a("v-tab-item",[a("v-form",{ref:"comform",model:{value:t.comvalid,callback:function(e){t.comvalid=e},expression:"comvalid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Legal Name*",rules:t.nameRules,required:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Company Name*",hint:"*Required",rules:t.compnameRules,"persistent-hint":"",required:""},model:{value:t.companyname,callback:function(e){t.companyname=e},expression:"companyname"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email",rules:t.emailRules,hint:"Email is Optional"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Phone Number*",rules:t.phoneRules,required:""},model:{value:t.phonenumber,callback:function(e){t.phonenumber=e},expression:"phonenumber"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Flat Number*",hint:"For Delivery",rules:t.flatRules,"persistent-hint":"",required:""},model:{value:t.flatno,callback:function(e){t.flatno=e},expression:"flatno"}})],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-radio-group",{attrs:{row:""},model:{value:t.action,callback:function(e){t.action=e},expression:"action"}},[a("v-radio",{attrs:{label:"Entry",value:"Entry"}}),a("v-radio",{attrs:{label:"Exit",value:"Exit"}})],1)],1)],1)],1),a("small",[t._v("*indicates required field")])],1)],1)],1)},c=[],u=(a("a9e3"),a("8ba4"),a("96cf"),a("1da1")),m={props:{vistform:String,comform:String},data:function(){return{tab:"",vistvalid:!0,comvalid:!0,action:"Entry",firstname:"",middlename:"",lastname:"",companyname:"",compnameRules:[function(t){return!!t||"Company Name is required"}],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=30||"Name must be less than 30 characters"}],email:"",emailRules:[function(t){return!t||/.+@.+\..+/.test(t)||"E-mail must be valid"}],phonenumber:"",phoneRules:[function(t){return!!t||"Phone Number is required"},function(t){return Number.isInteger(Number(t))||"The value must be an integer number"},function(t){return t>0||"The value must be greater than zero"},function(t){return t>999999999||"The Number must be Ten digit Number"}],flatno:"",flatRules:[function(t){return!!t||"Flat Number is required"}]}},methods:{onTabChange:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.tab=t;case 1:case"end":return a.stop()}}),a)})))()},validate:function(){0==this.tab?this.$refs.vistform.validate():1==this.tab&&this.$refs.comform.validate()},reset:function(){0==this.tab?this.$refs.vistform.reset():1==this.tab&&this.$refs.comform.reset()},resetValidation:function(){0==this.tab?this.$refs.vistform.resetValidation():1==this.tab&&this.$refs.comform.resetValidation()},valid:function(){return 0==this.tab?this.vistvalid:1==this.tab&&this.comvalid}}},v=m,d=a("2877"),f=Object(d["a"])(v,l,c,!1,null,null,null),p=f.exports,b={name:"AppNavigation",components:{UserForm:p},data:function(){return{dialog:!1,drawer:!0,tab:""}},methods:{closeDialog:function(){this.$refs.userform.resetValidation(),this.dialog=!1},saveDialog:function(){this.$refs.userform.validate(),this.$refs.userform.valid()&&(this.dialog=!1)},resetForm:function(){this.$refs.userform.reset()},resetFormValidation:function(){this.$refs.userform.resetValidation()}},mounted:function(){var t=this;this.$root.$on("toggleNavDrawer",(function(e){t.drawer=!t.drawer,"close"==e?t.drawer=!1:"open"==e&&(t.drawer=!0)}))}},h=b,g=(a("eba9"),Object(d["a"])(h,o,s,!1,null,"41ad672e",null)),y=g.exports,x={name:"App",components:{AppNavigation:y}},_=x,w=(a("034f"),Object(d["a"])(_,n,i,!1,null,null,null)),k=w.exports,X=(a("d3b7"),a("8c4f")),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-container",{staticClass:"px-0 pb-0",attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"pr-0",attrs:{cols:"9"}},[a("v-row",[a("h1",{staticClass:"px-6 pb-6"},[t._v("Dashboard")])]),a("v-card",{staticClass:"mx-n3",attrs:{shaped:"",height:"86vh",width:"100%",outlined:"",color:"#F7F9FB"}},[a("v-col",{staticClass:"my-3 py-12 px-12",attrs:{cols:"12"}},[a("v-card",{attrs:{shaped:"",height:"100%",width:"100%",elevation:"3"}},[a("v-card-title",[t._v(" Vehicle History "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.vehicles,"items-per-page":10,search:t.search},on:{"click:row":t.rowClicked},scopedSlots:t._u([{key:"item.icon",fn:function(e){var r=e.item;return[a("v-icon",[t._v(t._s(r.icon))])]}},{key:"item.action",fn:function(e){var r=e.item;return[a("v-chip",{attrs:{color:t.getColor(r.action),"text-color":t.getTextColor(r.action)}},[t._v(t._s(r.action))])]}}])})],1)],1)],1)],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"3"}},[a("Profile")],1)],1)],1)],1)},E=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile mr-6"},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"space-between"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-bell-outline")])],1)]}}])},[a("span",[t._v("Notification")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.drawermethod}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-buffer")])],1)]}}])},[a("span",[t._v("toggle Drawer")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-location-exit")])],1)]}}])},[a("span",[t._v("Logout")])])],1),a("v-row",{staticClass:"pt-14",attrs:{justify:"space-around",align:"center"}},[a("h2",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{"font-weight":"normal"}},[t._v("Hello,")]),a("br"),t._v(" His Name ")]),a("v-avatar",{attrs:{size:"90"}},[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})])],1),a("v-divider",{staticClass:"my-10"}),t._l(3,(function(e){return a("v-row",{key:e,attrs:{justify:"space-around"}},t._l(2,(function(r){return a("v-col",{key:r},[a("v-card",{staticClass:"pa-2",attrs:{color:"#F7F9FB",outlined:""}},[a("v-list-item-content",[a("div",{staticClass:"overline mb-2"},[t._v(" "+t._s(t.cards[e-1][r-1].title)+" ")]),a("v-card-title",[a("v-row",{attrs:{justify:"center"}},[a("v-icon",{attrs:{color:t.cards[e-1][r-1].color}},[t._v(t._s(t.cards[e-1][r-1].icon))]),a("div",{staticClass:"mt-2 mx-4"},[t._v(" "+t._s(t.cards[e-1][r-1].number)+" ")])],1)],1)],1)],1)],1)})),1)}))],2)],1)},F=[],j={name:"Profile",data:function(){return{cards:[[{title:"Total Activity",number:"189",icon:"mdi-car",color:"purple"},{title:"Entries",number:"174",icon:"mdi-car-arrow-right",color:"green"}],[{title:"Exits",number:"23",icon:"mdi-car-arrow-left",color:"red"},{title:"Residents Parked",number:"56",icon:"mdi-account",color:"orange"}],[{title:"Visitors Parked",number:"24",icon:"mdi-clock",color:"blue"},{title:"Commercial Parked",number:"7",icon:"mdi-flag",color:"pink"}]]}},methods:{drawermethod:function(){this.$root.$emit("toggleNavDrawer")}}},T=j,N=Object(d["a"])(T,S,F,!1,null,null,null),V=N.exports,R={name:"Home",components:{Profile:V},data:function(){return{search:"",headers:[{align:"start",sortable:!1,value:"icon"},{text:"Vehicle Number",value:"number"},{text:"Type",value:"type"},{text:"Action",value:"action"},{text:"TimeStamp",value:"time"}],vehicles:[{action:"Entry",number:"XXXXXX",type:"Visitor Vehicle",time:"TimeStamp",icon:"mdi-clock"},{action:"Exit",number:"XXXXXX",type:"Resident Vehicle",time:"TimeStamp",icon:"mdi-account"},{action:"Entry",number:"XXXXXX",type:"Commercial Vehicle",time:"TimeStamp",icon:"mdi-flag"},{action:"Entry",number:"XXXXXX",type:"Visitor Vehicle",time:"TimeStamp",icon:"mdi-clock"},{action:"Exit",number:"XXXXXX",type:"Resident Vehicle",time:"TimeStamp",icon:"mdi-account"},{action:"Entry",number:"XXXXXX",type:"Commercial Vehicle",time:"TimeStamp",icon:"mdi-flag"},{action:"Entry",number:"XXXXXX",type:"Visitor Vehicle",time:"TimeStamp",icon:"mdi-clock"},{action:"Exit",number:"XXXXXX",type:"Resident Vehicle",time:"TimeStamp",icon:"mdi-account"},{action:"Entry",number:"XXXXXX",type:"Commercial Vehicle",time:"TimeStamp",icon:"mdi-flag"}]}},methods:{rowClicked:function(t){this.$router.push({path:"/details/".concat(t.number)})},getColor:function(t){return"Entry"===t?"#F3FEF3":"Exit"===t?"#FEF5F8":"#FFF9F4"},getTextColor:function(t){return"Entry"===t?"green":"Exit"===t?"red":"orange"}}},$=R,O=Object(d["a"])($,C,E,!1,null,null,null),P=O.exports;r["default"].use(X["a"]);var q=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/search",name:"Search",component:function(){return a.e("about").then(a.bind(null,"2d3b"))}},{path:"/settings",name:"Settings",component:function(){return a.e("about").then(a.bind(null,"26d3"))}},{path:"/details/:vehicleNo",name:"Details",component:function(){return a.e("about").then(a.bind(null,"9f52"))}}],D=new X["a"]({mode:"history",base:"/venex/",routes:q}),A=D,L=a("2f62");r["default"].use(L["a"]);var H=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=(a("5363"),a("ce5b")),B=a.n(M),J=(a("bf40"),a("fcf4"));r["default"].use(B.a);var U=new B.a({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#6F32FF",secondary:J["a"].grey.darken1,accent:J["a"].shades.black,error:J["a"].red.accent3},dark:{primary:J["a"].blue.lighten3}}}});r["default"].config.productionTip=!1,new r["default"]({router:A,store:H,vuetify:U,render:function(t){return t(k)}}).$mount("#app")},"85ec":function(t,e,a){},d48b:function(t,e,a){},eba9:function(t,e,a){"use strict";var r=a("d48b"),n=a.n(r);n.a}});
//# sourceMappingURL=app.6207f5ef.js.map