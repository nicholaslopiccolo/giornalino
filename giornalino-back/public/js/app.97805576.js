(function(t){function n(n){for(var e,o,l=n[0],s=n[1],c=n[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e]);d&&d(n);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,n=0;n<i.length;n++){for(var a=i[n],e=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(e=!1)}e&&(i.splice(n--,1),t=o(o.s=a[0]))}return t}var e={},r={app:0},i=[];function o(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,n,a){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(a,e,function(n){return t[n]}.bind(null,e));return a},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var d=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},"56d7":function(t,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-app",[a("v-app-bar",{attrs:{dark:"",app:""}},[a("v-toolbar-title",[a("v-icon",[t._v(t._s(t.appIcon))]),t._v(" "+t._s(t.appName)+" ")],1),a("v-spacer"),a("v-btn",{attrs:{href:"#form",text:"",rounded:""}},[a("v-icon",[t._v("mdi-plus")])],1),a("v-btn",{attrs:{href:"#links",text:"",rounded:""}},[a("v-icon",[t._v("mdi-format-list-bulleted")])],1)],1),a("v-main",[a("Form",{attrs:{id:"form"},on:{addLink:t.addLink}}),a("v-card",[a("v-card-text",t._l(t.links,(function(t,n){return a("Link",{key:n,attrs:{id:"links",link:t}})})),1)],1)],1)],1)},i=[],o=(a("d81d"),function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",{attrs:{id:t.id}},[a("v-card",[a("v-card-text",[a("v-form",{attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(n){t.valid=n},expression:"valid"}},[a("v-text-field",{attrs:{label:"Link",type:"url","prepend-icon":"mdi-link"},model:{value:t.url,callback:function(n){t.url=n},expression:"url"}}),a("v-textarea",{attrs:{label:"Descrizione","prepend-icon":"mdi-card-text-outline"},model:{value:t.description,callback:function(n){t.description=n},expression:"description"}}),a("section",[a("b-field",{attrs:{label:"Add tags","custom-class":"is-small"}},[a("b-taginput",{staticClass:"is-red",attrs:{icon:"label",ellipsis:"",maxtags:"4",placeholder:"Add a tag",type:"is-dark","aria-close-label":"Delete this tag"},model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}})],1)],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{dark:"",block:""},on:{click:function(n){return t.addLink()}}},[t._v("Create")])],1)],1)],1)}),l=[],s=(a("ac1f"),a("841c"),a("a4d3"),a("e01a"),a("bc3a")),c=a.n(s),d={name:"Form",propos:["id"],data:function(){return{valid:!0,search:"",url:"",description:"",tags:[]}},methods:{updateTags:function(){console.log("update"),this.tags.length<4&&this.tags.push(this.search),this.search=""},addLink:function(){var t=this,n={url:this.url,description:this.description,tags:this.tags};c.a.post("/links",n).then((function(){t.$emit("addLink",n)}))}}},u=d,p=a("2877"),f=a("6544"),v=a.n(f),h=a("8336"),b=a("b0af"),m=a("99d9"),k=a("a523"),g=a("4bd4"),_=a("8654"),x=a("a844"),y=Object(p["a"])(u,o,l,!1,null,null,null),V=y.exports;v()(y,{VBtn:h["a"],VCard:b["a"],VCardActions:m["a"],VCardText:m["b"],VContainer:k["a"],VForm:g["a"],VTextField:_["a"],VTextarea:x["a"]});var C=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",[a("v-card",{attrs:{id:"id"}},[a("v-card-title",[a("h1",{staticClass:"display-1"},[a("a",{staticClass:"link",attrs:{href:t.link.url,target:"_blank"}},[t._v(t._s(t.link.url))])])]),a("v-divider"),a("v-card-text",[t._v(" "+t._s(t.link.description)+" ")]),a("v-card-actions",t._l(t.link.tags,(function(n){return a("v-chip",{key:n,staticClass:"ma-2 secondary"},[t._v(" "+t._s(n)+" ")])})),1)],1)],1)},w=[],L={name:"Link",props:["link","id"],data:function(){return{}}},O=L,j=(a("d021"),a("cc20")),T=a("ce7e"),A=Object(p["a"])(O,C,w,!1,null,null,null),P=A.exports;v()(A,{VCard:b["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VChip:j["a"],VContainer:k["a"],VDivider:T["a"]});var S={name:"App",components:{Form:V,Link:P},mounted:function(){var t=this;this.$on("addLink"),c()("/links").then((function(n){var a=n.data;a.map((function(n){t.links.push(n)}))})).catch((function(t){console.error(t)}))},data:function(){return{appIcon:"mdi-newspaper-variant-outline",appName:"Giornalino",links:[{url:"https://www.someurl.it/idk/what/to/say",description:"Long Long long long description long long Long Long....",tags:["Cat1","Cat2","Cat3","Cat4"]}]}},methods:{addLink:function(t){console.log("event Received"),console.log(t),this.links.push(t)}}},$=S,F=a("7496"),M=a("40dc"),B=a("132d"),D=a("f6c4"),E=a("2fa4"),I=a("2a7f"),z=Object(p["a"])($,r,i,!1,null,null,null),J=z.exports;v()(z,{VApp:F["a"],VAppBar:M["a"],VBtn:h["a"],VCard:b["a"],VCardText:m["b"],VIcon:B["a"],VMain:D["a"],VSpacer:E["a"],VToolbarTitle:I["a"]});var N=a("f309");e["a"].use(N["a"]);var G=new N["a"]({}),R=a("289d");a("7e7d");e["a"].use(R["a"]),e["a"].use(R["a"]),e["a"].config.productionTip=!0,e["a"].config.devtools=!0,new e["a"]({vuetify:G,render:function(t){return t(J)}}).$mount("#app")},"643c":function(t,n,a){},"7e7d":function(t,n,a){},d021:function(t,n,a){"use strict";a("643c")}});
//# sourceMappingURL=app.97805576.js.map