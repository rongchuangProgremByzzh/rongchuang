(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-3d_show-index"],{"0b4d":function(e,t,i){"use strict";i.r(t);var n=i("15ce"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=r.a},"15ce":function(e,t,i){"use strict";(function(e){var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("6b54"),i("a481"),i("28a5");var r=n(i("5176"));i("96cf");var a=n(i("3b8d")),o=n(i("e814"));i("c5f6");var l=n(i("f793")),c={components:{ynTriangleBadge:l.default},name:"ynGallery",props:{bkstart:{type:[String],default:"#000000"},bkend:{type:[String],default:"#000000"},galleryheight:{type:[Number,String],default:165},images:{type:Array},imgviewwidth:{type:[Number],default:(0,o.default)(85)},imgviewheight:{type:[Number],default:(0,o.default)(105.75)},showbadge:{type:[Boolean],default:!1},showdec:{type:[Boolean],default:!1},badegtype:{type:[String],default:"trian"},badegwidth:{type:[String],default:"25"},badegheight:{type:[String],default:"25"}},data:function(){return{bkstartcolor:this.bkstart,bkendcolor:this.bkend,badegcolor:"red",TTT:null,istouchmove:!1,isEndTouch:!0,screencenterpos:0,activeviewindex:0,offset:0,scrollLeft:0,newleft:0,oldleft:{scrollleft:10},sviewlst:{leftview:{},rightview:{},imgsview:[]},toview:"viewitem0"}},created:function(){this.images.length>0&&(this.screencenterpos=(0,o.default)(uni.upx2px(750)/2),this.upDataScrollviewLayout(this.activeviewindex))},mounted:function(){},watch:{images:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this,e.log("watch监控到images属性变化"),this.screencenterpos=(0,o.default)(uni.upx2px(750)/2),e.log("屏幕中点pos位置:"+this.screencenterpos+"px"),this.upDataScrollviewLayout(this.activeviewindex);case 5:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}()},computed:{bkstyle:function(){return"none"}},methods:{SetBkRightAnimate:function(e){var t=this,i=10,n=this.gradientColor(e,this.bkendcolor,i),r=10,a=setInterval(function(){t.bkstartcolor=n[r-1],r--,r<5&&clearInterval(a)},50)},endscroll:function(e){},scroll:function(e){this.newleft=e.mp.detail.scrollLeft,this.oldleft.scrollleft=this.newleft;var t=e.mp.detail.scrollLeft+this.screencenterpos;for(var i in this.sviewlst.imgsview){var n=this.sviewlst.imgsview[i];if(n.l<=t&&n.r>=t){var r=n.l+(0,o.default)(n.w/2),a=t-r;this.offset=a,this.upDataScrollviewLayout(i);break}}},clickimg:function(e,t){this.activeviewindex=e,this.scrollLeft=this.sviewlst.imgsview[e].l-(0,o.default)(this.screencenterpos)+(0,o.default)(this.sviewlst.imgsview[e].w/2),this.$emit("clickimg",t)},touchStartHandle:function(e){this.istouchmove=!1,this.isEndTouch=!1},touchMoveHandle:function(e){this.istouchmove=!0},touchEndHandle:function(e){this.isEndTouch=!0},animationstartHandle:function(){},animationendHandle:function(){var e=this.sviewlst.imgsview[this.activeviewindex].dominant;this.SetBkRightAnimate(e)},upDataScrollviewLayout:function(t){e.log("检测到 initScrollviewLayout");this.upbkcolor=!1;if(!(this.images.length<=0)){var i=this.offset,n={dec:"left view"};n.w=this.screencenterpos,n.h=this.imgviewheight,n.l=0,n.r=n.l+n.w;var a=[],l=0;while(l<=this.images.length-1){var c={index:l,url:"",dec:"",badeg:"",badegcolor:this.badegcolor,dominant:this.bkstartcolor,w:0,h:0,l:0,r:0},s=(0,r.default)(c,this.images[l]);s.w=this.imgviewwidth,s.h=this.imgviewheight,s.l=0==l?n.r+0:a[l-1].r+0,s.r=s.l+s.w,a.push(s),l++}var f={dec:"right view"};f.w=this.screencenterpos,f.h=this.imgviewheight,a.length<=0?f.l=n.r+0:f.l=a[a.length-1].r+0,f.r=f.l+f.w;var d=1,u=1,h=1;if(a.length>0){var g=t,p=(0,o.default)(g)-1,v=(0,o.default)(g)+1,w=1.18*this.imgviewwidth/2,b=Math.abs(i)/w;if(0==i&&(h=1.18,d=1,u=1),i>0&&(h=1+.18*(1-b/2),u=1.18-h+1,d=1),i<0&&(h=1+.18*(1-b/2),d=1.18-h+1,u=1),!(g>=0&&g<=a.length-1))return void e.log("焦点图越界");a[g].w=this.imgviewwidth*h,a[g].h=this.imgviewheight*h,i<0&&p>=0&&(a[p].w=this.imgviewwidth*d,a[p].h=this.imgviewheight*d),i>0&&v<=a.length-1&&(a[v].w=this.imgviewwidth*u,a[v].h=this.imgviewheight*u)}if(a.length>0){n.w=n.w-a[0].w/2,n.r=n.l+n.w;for(var m=0;m<=a.length-1;m++)a[m].l=0==m?n.r+0:a[m-1].r+0,a[m].r=a[m].l+a[m].w;f.w=f.w-a[a.length-1].w/2+0,f.l=a[a.length-1].r+0,f.r=f.l+f.w}var y={leftview:n,rightview:f,imgsview:a};this.activeviewindex=t,this.sviewlst=y,this.$nextTick(function(){var e=this;if(1==this.istouchmove){clearTimeout(e.TTT);var t=e.activeviewindex;setTimeout(function(){e.activeviewindex==t&&e.$emit("clickimg",e.sviewlst.imgsview[e.activeviewindex])},300)}})}},gradientColor:function(e,t,i){for(var n=this.colorToRgb(e),r=n[0],a=n[1],l=n[2],c=this.colorToRgb(t),s=c[0],f=c[1],d=c[2],u=(s-r)/i,h=(f-a)/i,g=(d-l)/i,p=[],v=0;v<i;v++){var w=this.colorToHex("rgb("+(0,o.default)(u*v+r)+","+(0,o.default)(h*v+a)+","+(0,o.default)(g*v+l)+")");p.push(w)}return p},colorToRgb:function(e){var t={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},i=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;e=e.toLowerCase();if("#"!=e.slice(0,1))for(var n in t)if(n==e)e="#"+t[n];if(e&&i.test(e)){if(4===e.length){for(var r="#",a=1;a<4;a+=1)r+=e.slice(a,a+1).concat(e.slice(a,a+1));e=r}var l=[];for(a=1;a<7;a+=2)l.push((0,o.default)("0x"+e.slice(a,a+2)));return l}return e},colorToHex:function(e){var t=e,i=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(/^(rgb|RGB)/.test(t)){for(var n=t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),r="#",a=0;a<n.length;a++){var o=Number(n[a]).toString(16);o=o<10?"0"+o:o,"0"===o&&(o+=o),r+=o}return 7!==r.length&&(r=t),r}if(!i.test(t))return t;var l=t.replace(/#/,"").split("");if(6===l.length)return t;if(3===l.length){var c="#";for(a=0;a<l.length;a+=1)c+=l[a]+l[a];return c}}}};t.default=c}).call(this,i("5a52")["default"])},"1cdd":function(e,t,i){e.exports=i.p+"static/img/3@2x.8efc420e.png"},"243a":function(e,t,i){var n=i("f137");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("72bbfba3",n,!0,{sourceMap:!1,shadowMode:!1})},"2af9":function(e,t,i){"use strict";i.r(t);var n=i("c51d"),r=i("9fad");for(var a in r)"default"!==a&&function(e){i.d(t,e,function(){return r[e]})}(a);i("dfc0");var o=i("f0c5"),l=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"003c1d21",null);t["default"]=l.exports},"35d5":function(e,t,i){var n=i("fba0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("51620f48",n,!0,{sourceMap:!1,shadowMode:!1})},"369b":function(e,t,i){"use strict";var n=i("35d5"),r=i.n(n);r.a},"36e0":function(e,t,i){e.exports=i.p+"static/img/bg@2x.26789a0d.png"},"3b8d":function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return o});var n=i("795b"),r=i.n(n);function a(e,t,i,n,a,o,l){try{var c=e[o](l),s=c.value}catch(f){return void i(f)}c.done?t(s):r.a.resolve(s).then(n,a)}function o(e){return function(){var t=this,i=arguments;return new r.a(function(n,r){var o=e.apply(t,i);function l(e){a(o,n,r,l,c,"next",e)}function c(e){a(o,n,r,l,c,"throw",e)}l(void 0)})}}},"3d4a":function(e,t,i){"use strict";(function(e){var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("6b54");var r=n(i("9ce7")),a={components:{ynGallery:r.default},data:function(){return{sh:0,Msg:"0",videoList:[],testimgs:[{url:"http://p1.meituan.net/movie/d94e5c3054778f6f48bff3a813b0b7cd5300998.jpg@170w_235h_1e_1c"},{url:"http://p0.meituan.net/movie/616cd50a33550a9225ac781e52d14ae54967551.jpg@170w_235h_1e_1c"},{url:"http://p0.meituan.net/movie/fc4dd6cd0c6f7db566a128cc05c475355664427.jpg@170w_235h_1e_1c"},{url:"http://p0.meituan.net/movie/0aef20518b12365b524917332424e3c9293610.jpg@170w_235h_1e_1c"},{url:"http://p0.meituan.net/movie/034069fc367db8a7d9644717b416cc2c332883.jpg@170w_235h_1e_1c"},{url:"http://p0.meituan.net/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg@170w_235h_1e_1c"}],galleryheight:0,imgviewheight:0,imgviewwidth:0}},onLoad:function(){this.galleryheight=uni.upx2px(580),this.imgviewheight=uni.upx2px(400),this.imgviewwidth=uni.upx2px(500),this.setimgs()},methods:{onclickimg:function(e){void 0!=e.index&&(this.Msg="".concat(e.index))},setimgs:function(){var e=[];for(var t in this.testimgs){var i={dec:"",badeg:"",badegcolor:"#000000",url:"",dominant:""};i.url=this.testimgs[t].url,i.dominant=this.retcolor(),i.dec=t,i.badeg=t,i.badegcolor=t%2==0?"red":"LimeGreen",e.push(i)}this.testimgs=e},retcolor:function(){var e="#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6);return e}},mounted:function(){var t=this;this.$http.videoList().then(function(i){e.log(i),t.testimgs=i.data})}};t.default=a}).call(this,i("5a52")["default"])},"61c9":function(e,t,i){var n=i("b041");t=e.exports=i("2350")(!1),t.push([e.i,".content[data-v-003c1d21]{height:100%;background:url("+n(i("36e0"))+") no-repeat;background-size:100% 100%}.height1[data-v-003c1d21]{height:%?756?%}.height2[data-v-003c1d21]{height:%?250?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:url("+n(i("1cdd"))+") no-repeat;background-size:100% 100%;border-radius:%?12?%}.txt[data-v-003c1d21]{padding:0 %?20?%;font-size:%?22?%;line-height:%?38?%;color:#fff}",""])},8775:function(e,t,i){"use strict";var n=i("243a"),r=i.n(n);r.a},"96cf":function(e,t){!function(t){"use strict";var i,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",s="object"===typeof e,f=t.regeneratorRuntime;if(f)s&&(e.exports=f);else{f=t.regeneratorRuntime=s?e.exports:{},f.wrap=y;var d="suspendedStart",u="suspendedYield",h="executing",g="completed",p={},v={};v[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(G([])));b&&b!==n&&r.call(b,o)&&(v=b);var m=L.prototype=k.prototype=Object.create(v);_.prototype=m.constructor=L,L.constructor=_,L[c]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},f.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,L):(e.__proto__=L,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(m),e},f.awrap=function(e){return{__await:e}},E(j.prototype),j.prototype[l]=function(){return this},f.AsyncIterator=j,f.async=function(e,t,i,n){var r=new j(y(e,t,i,n));return f.isGeneratorFunction(t)?r:r.next().then(function(e){return e.done?e.value:r.next()})},E(m),m[c]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(e){var t=[];for(var i in e)t.push(i);return t.reverse(),function i(){while(t.length){var n=t.pop();if(n in e)return i.value=n,i.done=!1,i}return i.done=!0,i}},f.values=G,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach($),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=i)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return l.type="throw",l.arg=e,t.next=n,r&&(t.method="next",t.arg=i),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),$(i),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var n=i.completion;if("throw"===n.type){var r=n.arg;$(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:G(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=i),p}}}function y(e,t,i,n){var r=t&&t.prototype instanceof k?t:k,a=Object.create(r.prototype),o=new C(n||[]);return a._invoke=S(e,i,o),a}function x(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(n){return{type:"throw",arg:n}}}function k(){}function _(){}function L(){}function E(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function j(e){function t(i,n,a,o){var l=x(e[i],e,n);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"===typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,a,o)},function(e){t("throw",e,a,o)}):Promise.resolve(s).then(function(e){c.value=e,a(c)},function(e){return t("throw",e,a,o)})}o(l.arg)}var i;function n(e,n){function r(){return new Promise(function(i,r){t(e,n,i,r)})}return i=i?i.then(r,r):r()}this._invoke=n}function S(e,t,i){var n=d;return function(r,a){if(n===h)throw new Error("Generator is already running");if(n===g){if("throw"===r)throw a;return M()}i.method=r,i.arg=a;while(1){var o=i.delegate;if(o){var l=T(o,i);if(l){if(l===p)continue;return l}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===d)throw n=g,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=h;var c=x(e,t,i);if("normal"===c.type){if(n=i.done?g:u,c.arg===p)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(n=g,i.method="throw",i.arg=c.arg)}}}function T(e,t){var n=e.iterator[t.method];if(n===i){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=i,T(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=x(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=i),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function G(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){while(++n<e.length)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=i,t.done=!0,t};return a.next=a}}return{next:M}}function M(){return{value:i,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"96f2":function(e,t,i){"use strict";i.r(t);var n=i("c2f2"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=r.a},"9ce7":function(e,t,i){"use strict";i.r(t);var n=i("aca3"),r=i("0b4d");for(var a in r)"default"!==a&&function(e){i.d(t,e,function(){return r[e]})}(a);i("369b");var o=i("f0c5"),l=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"2dcff715",null);t["default"]=l.exports},"9fad":function(e,t,i){"use strict";i.r(t);var n=i("3d4a"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=r.a},a0ca:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"trianglePanel",style:{"max-width":e.width+"px","min-width":e.width+"px","max-height":e.height+"px","min-height":e.height+"px"}},[i("v-uni-view",{staticClass:"triangle-topright",style:{"border-top":e.height+"px solid "+e.bgcolor,"border-left":e.width+"px solid transparent"}}),i("v-uni-view",{staticClass:"textbox",style:{width:.5*e.width+"px",height:.5*e.height+"px","font-size":e.fontsize+"px","margin-left":-.5*e.width+"px"}},[e._v(e._s(e.text))])],1)},r=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return r})},aca3:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"ynGalleryPanel"},[i("v-uni-view",{staticClass:"gallerypanel",staticStyle:{filter:"brightness(1)","border-radius":"1upx"},style:{background:e.bkstyle,height:e.galleryheight+"px",width:"100%"}},[i("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-x":"true","scroll-with-animation":"true","scroll-into-view":e.toview,"scroll-left":e.scrollLeft},on:{scroll:function(t){arguments[0]=t=e.$handleEvent(t),e.scroll.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"scroll-view-panle",on:{touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.touchEndHandle.apply(void 0,arguments)},touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.touchStartHandle.apply(void 0,arguments)},touchmove:function(t){arguments[0]=t=e.$handleEvent(t),e.touchMoveHandle.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"leftview",style:{"min-width":e.sviewlst.leftview.w+"px",height:e.galleryheight+"px"}}),e._l(e.sviewlst.imgsview,function(t,n){return i("v-uni-view",{key:n,ref:"imgviewpanel"+n,refInFor:!0,class:[e.activeviewindex==n?"trans-fadeout":""],staticStyle:{border:"#BB6622 0px solid",display:"flex","flex-direction":"column","align-content":"center","justify-content":"flex-end"},style:{width:t.w+"px",height:e.galleryheight+"px"},attrs:{id:"imgviewpanel"+n},on:{animationstart:function(t){arguments[0]=t=e.$handleEvent(t),e.animationstartHandle.apply(void 0,arguments)},animationend:function(t){arguments[0]=t=e.$handleEvent(t),e.animationendHandle.apply(void 0,arguments)}}},[e.showbadge&&"round"==e.badegtype?i("v-uni-view",{staticClass:"roundbadge",style:{background:[n%2==0?"red":"green"]}},[i("v-uni-text",[e._v(e._s(t.badeg))])],1):e._e(),i("v-uni-view",{staticStyle:{display:"flex","align-content":"flex-end","justify-content":"center",border:"red 0px solid"},style:{width:t.w+"px",height:t.h+"px"}},[i("v-uni-video",{ref:"image"+n,refInFor:!0,staticStyle:{"align-self":"center","border-radius":"12px"},style:{width:t.w-10+"px",height:t.h-10+"px"},attrs:{src:t.videoUrl,controls:!0}})],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-bottom":"4px",border:"#008000 0px solid","min-height":"10px"}})],1)}),i("v-uni-view",{staticClass:"rightview",style:{"min-width":e.sviewlst.rightview.w+"px",height:e.galleryheight+"px"}})],2)],1)],1)],1)},r=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return r})},b041:function(e,t){e.exports=function(e){return"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},c2f2:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"ynTriangleBadge",props:{bgcolor:{type:String,default:"blue"},width:{type:String,default:"50"},height:{type:String,default:"50"},text:{type:String,default:"N"},fontsize:{type:String,default:"12"}},data:function(){return{}},methods:{},created:function(){},computed:{}};t.default=n},c51d:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content",attrs:{id:"3dheight"}},[i("whitebox",{attrs:{setheight:240}}),i("ynGallery",{attrs:{galleryheight:e.galleryheight,bkstart:"#000000",bkend:"#000000",imgviewwidth:e.imgviewwidth,imgviewheight:e.imgviewheight,showbadge:!0,badegtype:"trian",badegwidth:"25",badegheight:"25",showdec:!0,images:e.testimgs},on:{clickimg:function(t){arguments[0]=t=e.$handleEvent(t),e.onclickimg.apply(void 0,arguments)}}}),i("whitebox",{attrs:{setheight:80}}),i("div",{staticClass:"width90center height2"},[i("v-uni-view",{staticClass:"txt"},[e._v("昆明融创文旅城集合昆明融创乐园（海世界、雪世界、电影世界，在建中）、融创滇池后海（在建中）、主题湿地公园、星级酒店群（在建中）、品质住区（在建中）、“教育+生态”（规划中）、“医疗+生态”（规划中）等七大创新业态，为世界，开启欢乐之门。")])],1)],1)},r=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return r})},dfc0:function(e,t,i){"use strict";var n=i("edb5"),r=i.n(n);r.a},edb5:function(e,t,i){var n=i("61c9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("267b65b6",n,!0,{sourceMap:!1,shadowMode:!1})},f137:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".trianglePanel[data-v-a4d8b4fe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-self:flex-end;align-self:flex-end;color:#fff\r\n   /* border: red 1px solid; */}.textbox[data-v-a4d8b4fe]{-webkit-align-self:flex-start;align-self:flex-start;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:1;margin:1px;\r\n\t/* 字符空格不忽略 */white-space:pre;word-break:break-all}\r\n\r\n/* 右上三角\t上 左有宽度  下 右 无宽度 */.triangle-topright[data-v-a4d8b4fe]{\r\n/*   top:0;\r\n   left:0; */z-index:0;width:0;height:0}",""])},f793:function(e,t,i){"use strict";i.r(t);var n=i("a0ca"),r=i("96f2");for(var a in r)"default"!==a&&function(e){i.d(t,e,function(){return r[e]})}(a);i("8775");var o=i("f0c5"),l=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"a4d8b4fe",null);t["default"]=l.exports},fba0:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.canvas-box[data-v-2dcff715]{margin-left:%?500?%;width:0;height:0;overflow:hidden}.gallerypanel .scroll-view .scroll-view-panle[data-v-2dcff715]{display:-webkit-box;display:-webkit-flex;display:flex;height:100%;width:100%;white-space:nowrap}.roundbadge[data-v-2dcff715]{z-index:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-self:flex-end;align-self:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:12px;color:#fff;border-radius:8px;min-width:12px;min-height:12px;max-height:12px;padding:3px 5px;margin-bottom:-17px;margin-right:3px}*[data-v-2dcff715]{-webkit-overflow-scrolling:touch}@-webkit-keyframes living-data-v-2dcff715{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.05);transform:scale(1.05);opacity:1\n    /*圆形放大的同时，透明度逐渐减小为0*/}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes living-data-v-2dcff715{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.05);transform:scale(1.05);opacity:1\n    /*圆形放大的同时，透明度逐渐减小为0*/}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.trans-fadeout[data-v-2dcff715]{-webkit-animation:living-data-v-2dcff715 1s ease-in-out 1;animation:living-data-v-2dcff715 1s ease-in-out 1}',""])}}]);