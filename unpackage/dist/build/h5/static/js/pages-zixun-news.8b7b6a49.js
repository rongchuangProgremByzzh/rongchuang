(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-zixun-news"],{1089:function(t,n,a){"use strict";a.r(n);var e=a("32c3"),i=a("d726");for(var o in i)"default"!==o&&function(t){a.d(n,t,function(){return i[t]})}(o);a("12c7");var c=a("f0c5"),r=Object(c["a"])(i["default"],e["a"],e["b"],!1,null,"1a362b64",null);n["default"]=r.exports},"12c7":function(t,n,a){"use strict";var e=a("cf91"),i=a.n(e);i.a},"32c3":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"title"},[t._v(t._s(t.newsList.title))]),a("div",{staticClass:"time"},[t._v(t._s(t._f("formatTime")(t.newsList.ctime)))]),a("v-uni-rich-text",{attrs:{nodes:t.content}})],1)])},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})},"36e0":function(t,n,a){t.exports=a.p+"static/img/bg@2x.26789a0d.png"},aac3:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={components:{},data:function(){return{newsList:{},content:""}},methods:{},onLoad:function(n){t.log(n.id)},mounted:function(){var n=this;this.$http.getMostNews().then(function(a){a.data&&(n.newsList=a.data.actvity,t.log(a.data),n.content=a.data.actvity.content)})}};n.default=a}).call(this,a("5a52")["default"])},b041:function(t,n){t.exports=function(t){return"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},cf91:function(t,n,a){var e=a("e923");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("786353da",e,!0,{sourceMap:!1,shadowMode:!1})},d726:function(t,n,a){"use strict";a.r(n);var e=a("aac3"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);n["default"]=i.a},e923:function(t,n,a){var e=a("b041");n=t.exports=a("2350")(!1),n.push([t.i,".content[data-v-1a362b64]{height:100%;overflow-y:auto;background:url("+e(a("36e0"))+") no-repeat;background-size:100% 100%}.content-wrap[data-v-1a362b64]{width:96%;margin:0 auto;text-align:center;color:#333;font-size:%?26?%;line-height:%?45?%}.title[data-v-1a362b64]{margin-top:%?40?%;font-size:%?40?%;color:#000;padding:%?10?% 0;text-align:center}uni-image[data-v-1a362b64]{border-radius:%?12?%}img[data-v-1a362b64]{border-radius:%?12?%}.time[data-v-1a362b64]{padding:%?10?% 0;font-size:%?30?%;color:#333}",""])}}]);