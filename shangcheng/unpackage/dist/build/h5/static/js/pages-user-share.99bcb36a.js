(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-share"],{6423:function(t,n,e){var a=e("d740");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("cf3d95a0",a,!0,{sourceMap:!1,shadowMode:!1})},6598:function(t,n,e){"use strict";e.r(n);var a=e("9cc7"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"7ad5":function(t,n,e){"use strict";var a=e("6423"),i=e.n(a);i.a},"99e6":function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticStyle:{color:"#545454"}},[t._v("好友通过您分享出去的内容, 并下载APP 成功注册之后.Ta将成为您的粉丝")]),e("v-uni-view",{staticClass:"box-img"},[e("v-uni-image",{attrs:{src:t.imageUrl}})],1),e("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.copy.apply(void 0,arguments)}}},[t._v("点击保存图片")])],1)},o=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}))},"9cc7":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{imageUrl:"../../static/share.png"}},methods:{copy:function(t){uni.downloadFile({url:this.imageUrl,success:function(t){uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(t){console.log(t)}})}})}}};n.default=a},bda4:function(t,n,e){"use strict";e.r(n);var a=e("99e6"),i=e("6598");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("7ad5");var u,c=e("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"51e35df4",null,!1,a["a"],u);n["default"]=r.exports},d740:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.box[data-v-51e35df4]{padding:%?30?%}.box .box-img[data-v-51e35df4]{margin:%?30?% auto;width:%?400?%;height:%?600?%}.box .box-img > uni-image[data-v-51e35df4]{width:100%;height:100%}.box uni-button[data-v-51e35df4]{color:#fff;background-color:#323f6c}.box uni-button[data-v-51e35df4]:after{width:0;height:0}',""]),t.exports=n}}]);