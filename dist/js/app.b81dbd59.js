(function(t){function a(a){for(var n,s,i=a[0],c=a[1],l=a[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(d.length)d.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(n=!1)}n&&(o.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},r={app:0},o=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/alexa-notify-ui/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("a026"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1)]),e("v-content",[e("SayWhat")],1)],1)},o=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",{staticClass:"text-center"},[e("v-col",{staticClass:"mb-12"},[e("v-card",{staticClass:"elevation-12"},[e("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[e("v-toolbar-title",[t._v("Say What")])],1),e("v-card-text",[e("v-form",[e("v-text-field",{attrs:{label:"Message",name:"msg",id:"msg",type:"text"},model:{value:t.msg,callback:function(a){t.msg=a},expression:"msg"}})],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{id:"send_btn",color:"primary"},on:{click:t.send_msg}},[t._v("Send")])],1)],1),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" API STATUS: "+t._s(t.api_status)+" ")])],1)],1)],1)},i=[],c=e("bc3a"),l=e.n(c),u={name:"SayWhata",data:function(){return{api_status:null,msg:""}},mounted:function(){var t=this;l.a.get("https://lvojx2rrq8.execute-api.eu-west-1.amazonaws.com/status").then((function(a){return t.api_status=a.data}))},methods:{send_msg:function(){l.a.post("https://lvojx2rrq8.execute-api.eu-west-1.amazonaws.com/notify",{msg:this.msg})}}},p=u,d=e("2877"),f=e("6544"),v=e.n(f),m=e("8336"),g=e("b0af"),h=e("99d9"),b=e("62ad"),y=e("a523"),w=e("4bd4"),x=e("0fd9"),_=e("2fa4"),V=e("8654"),j=e("71d9"),C=e("2a7f"),O=Object(d["a"])(p,s,i,!1,null,null,null),S=O.exports;v()(O,{VBtn:m["a"],VCard:g["a"],VCardActions:h["a"],VCardText:h["b"],VCol:b["a"],VContainer:y["a"],VForm:w["a"],VRow:x["a"],VSpacer:_["a"],VTextField:V["a"],VToolbar:j["a"],VToolbarTitle:C["a"]});var k={name:"App",components:{SayWhat:S},data:function(){return{}}},T=k,P=e("7496"),A=e("40dc"),M=e("a75b"),W=e("adda"),$=Object(d["a"])(T,r,o,!1,null,null,null),q=$.exports;v()($,{VApp:P["a"],VAppBar:A["a"],VContent:M["a"],VImg:W["a"]});var z=e("f309");n["a"].use(z["a"]);var B=new z["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:B,render:function(t){return t(q)}}).$mount("#app")}});
//# sourceMappingURL=app.b81dbd59.js.map