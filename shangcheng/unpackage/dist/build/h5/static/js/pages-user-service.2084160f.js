(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-service"],{"187a":function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.common[data-v-0335b0f6]{margin-top:%?20?%}.common .common-box[data-v-0335b0f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#fff;padding:%?30?%;margin-bottom:%?20?%}.common .common-box .box-right[data-v-0335b0f6]{width:%?20?%;height:%?20?%;border-top:%?1?% solid #8a8a8a;border-right:%?1?% solid #8a8a8a;-webkit-transform:rotate(45deg);transform:rotate(45deg)}',""]),t.exports=n},"4da8":function(t,n,e){var o=e("187a");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("a2847442",o,!0,{sourceMap:!1,shadowMode:!1})},"69b9":function(t,n,e){"use strict";e.r(n);var o=e("d2c4"),a=e("fb4a");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("b69e"),e("7766");var i,r=e("f0c5"),s=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"0335b0f6",null,!1,o["a"],i);n["default"]=s.exports},7766:function(t,n,e){"use strict";var o=e("4da8"),a=e.n(o);a.a},8318:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{contactList:[{cId:1,text:"微信客服",code:"微信客服"},{cId:2,text:"QQ客服",code:"QQ客服"},{cId:3,text:"电话客服",code:"电话客服"}]}},methods:{clickContact:function(t){uni.navigateTo({url:"/pages/product/serviceList/serviceList?id="+t})}}};n.default=o},"841c5":function(t,n,e){var o=e("f979");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("5136c2b2",o,!0,{sourceMap:!1,shadowMode:!1})},b69e:function(t,n,e){"use strict";var o=e("841c5"),a=e.n(o);a.a},d2c4:function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"common"},t._l(t.contactList,(function(n,o){return e("v-uni-view",{key:o,staticClass:"common-box weixin",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickContact(n.cId)}}},[e("v-uni-view",{staticClass:"box-left"},[t._v(t._s(n.text))]),e("v-uni-view",{staticClass:"box-right"})],1)})),1)},c=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}))},f979:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,"uni-page-body[data-v-0335b0f6]{background-color:#f5f5f5}body.?%PAGE?%[data-v-0335b0f6]{background-color:#f5f5f5}",""]),t.exports=n},fb4a:function(t,n,e){"use strict";e.r(n);var o=e("8318"),a=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=a.a}}]);