(function(a){function t(t){for(var r,c,o=t[0],l=t[1],i=t[2],u=0,v=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&v.push(n[c][0]),n[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(a[r]=l[r]);d&&d(t);while(v.length)v.shift()();return s.push.apply(s,i||[]),e()}function e(){for(var a,t=0;t<s.length;t++){for(var e=s[t],r=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),a=c(c.s=e[0]))}return a}var r={},n={app:0},s=[];function c(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=a,c.c=r,c.d=function(a,t,e){c.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},c.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},c.t=function(a,t){if(1&t&&(a=c(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)c.d(e,r,function(t){return a[t]}.bind(null,r));return e},c.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return c.d(t,"a",t),t},c.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},c.p="/vue-credit-card/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var d=l;s.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"017d":function(a,t,e){"use strict";var r=e("5144"),n=e.n(r);n.a},5144:function(a,t,e){},"56d7":function(a,t,e){"use strict";e.r(t);var r=e("2b0e"),n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-app",[e("Header"),e("v-content",[e("Home")],1)],1)},s=[],c=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-app-bar",{attrs:{app:""}},[e("v-toolbar-title",{staticClass:"headline text-uppercase"},[e("span",{staticClass:"font-weight-light"},[a._v("Credit Card")])]),e("v-spacer")],1)},o=[],l=e("2877"),i=e("6544"),d=e.n(i),u=e("40dc"),v=e("2fa4"),p=e("2a7f"),f={},m=Object(l["a"])(f,c,o,!1,null,null,null),x=m.exports;d()(m,{VAppBar:u["a"],VSpacer:v["a"],VToolbarTitle:p["a"]});var b=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-container",[e("v-card",{staticClass:"mx-auto credit-card",staticStyle:{"background-color":"#191970",color:"#fff"},attrs:{width:"450",height:a.cardData.position?"":"210"}},[a.cardData.position?e("div",[e("v-layout",{staticClass:"card-row",attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs6:""}}),e("v-flex",{staticClass:"text-lg-right",attrs:{xs6:""}},[e("h4",[a._v(a._s(a.cardData.type||""))])])],1),e("v-layout",{staticClass:"card-row",attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-lg-center",attrs:{xs12:""}},[e("h2",[a._v(a._s(a.cardData.number||"XXXX-XXXX-XXXX-XXXX"))])])],1),e("v-layout",{staticClass:"card-row",attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-lg-center",attrs:{xs8:""}},[e("h2",[a._v(a._s(a.cardData.name||"SEU NOME AQUI"))])]),e("v-flex",{staticClass:"text-lg-center",attrs:{xs4:""}},[e("h2",[a._v(a._s(a.cardData.validate||"XX/XX"))])])],1)],1):e("div",[e("v-layout",{staticStyle:{border:"15px solid black"},attrs:{row:"",wrap:""}}),e("v-layout",{staticClass:"card-row",attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-lg-right",attrs:{xs12:""}},[e("h2",[a._v(a._s(a.cardData.cvv||""))])])],1)],1)]),e("v-card",{staticClass:"mx-auto",staticStyle:{padding:"1%"},attrs:{"max-width":"600"}},[e("v-layout",[e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:a.mask.credit_card,expression:"mask.credit_card"}],attrs:{label:"Número do cartão",outlined:"",placeholder:"XXXX-XXXX-XXXX-XXXXX","append-icon":"mdi-credit-card"},on:{focus:function(t){a.cardData.position=!0},keyup:function(t){return a.buscarBandeira()}},model:{value:a.cardData.number,callback:function(t){a.$set(a.cardData,"number",t)},expression:"cardData.number"}}),e("v-text-field",{attrs:{label:"Titular do cartão",outlined:"","append-icon":"mdi-account"},on:{focus:function(t){a.cardData.position=!0}},model:{value:a.cardData.name,callback:function(t){a.$set(a.cardData,"name",t)},expression:"cardData.name"}}),e("v-layout",[e("v-flex",{attrs:{xs5:""}},[e("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:a.mask.date,expression:"mask.date"}],attrs:{label:"Validade",outlined:"",placeholder:"XX/XX","append-icon":"mdi-calendar"},on:{focus:function(t){a.cardData.position=!0}},model:{value:a.cardData.validate,callback:function(t){a.$set(a.cardData,"validate",t)},expression:"cardData.validate"}})],1),e("v-flex",{attrs:{xs2:""}}),e("v-flex",{attrs:{xs5:""}},[e("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:a.mask.cvv,expression:"mask.cvv"}],attrs:{label:"CVV",outlined:"",placeholder:"XXXX","append-icon":"mdi-numeric"},on:{focus:function(t){a.cardData.position=!1}},model:{value:a.cardData.cvv,callback:function(t){a.$set(a.cardData,"cvv",t)},expression:"cardData.cvv"}})],1)],1),e("v-layout",[e("v-flex",{attrs:{xs4:""}}),e("v-flex",{attrs:{xs4:""}},[e("v-btn",{attrs:{color:"primary",block:""}},[a._v("\n            Pagar\n          ")])],1),e("v-flex",{attrs:{xs4:""}})],1)],1)],1)],1)],1)},X=[],h=e("3a60"),y=e("d07d"),w=e.n(y),D={directives:{mask:h["mask"]},data:()=>({mask:{credit_card:"####-####-####-#######",date:"##/##",cvv:"####"},cardData:{type:"",number:"",name:"",validate:"",cvv:"",position:!0}}),methods:{buscarBandeira(){const a=w.a.number(this.cardData.number);a.card||(this.cardData.type=""),a.card&&(this.cardData.type=a.card.niceType)}}},_=D,k=(e("017d"),e("8336")),g=e("b0af"),C=e("a523"),O=e("0e8f"),V=e("a722"),j=e("8654"),S=Object(l["a"])(_,b,X,!1,null,"14405d24",null),P=S.exports;d()(S,{VBtn:k["a"],VCard:g["a"],VContainer:C["a"],VFlex:O["a"],VLayout:V["a"],VTextField:j["a"]});var T={name:"App",components:{Header:x,Home:P}},$=T,E=e("7496"),M=e("a75b"),N=Object(l["a"])($,n,s,!1,null,null,null),A=N.exports;d()(N,{VApp:E["a"],VContent:M["a"]});var B=e("f309");r["a"].use(B["a"]);var H=new B["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:H,render:a=>a(A)}).$mount("#app")}});
//# sourceMappingURL=app.7cb37fba.js.map