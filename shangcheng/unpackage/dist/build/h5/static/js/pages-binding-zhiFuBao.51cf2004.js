(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-binding-zhiFuBao"],{"23da":function(t,e,n){"use strict";n.r(e);var i=n("8f15"),r=n("cba4");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("60f4");var o,u=n("f0c5"),c=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"190d150c",null,!1,i["a"],o);e["default"]=c.exports},4850:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.common[data-v-190d150c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;line-height:%?60?%}.common .common-left[data-v-190d150c]{width:24%}.common .common-right[data-v-190d150c]{width:80%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border:%?1?% solid #b8b8b8;border-radius:%?8?%;padding:%?20?%}.common .common-right .placeholder-common[data-v-190d150c]{font-size:%?28?%}.common .common-right uni-input[data-v-190d150c]{width:100%}.common .common-right uni-image[data-v-190d150c]{width:%?40?%;height:%?40?%}.updata[data-v-190d150c]{position:relative;margin:%?20?% auto;width:%?600?%;height:%?600?%;padding:%?4?%;border:%?1?% dashed #6c7aa7}.updata .img[data-v-190d150c]{width:100%;height:100%}.updata .updata-box[data-v-190d150c]{width:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.updata .updata-box .updata-content[data-v-190d150c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly}.updata .updata-box .updata-content > uni-view[data-v-190d150c]{width:100%;text-align:center}.updata .updata-box .updata-content > uni-image[data-v-190d150c]{margin-bottom:%?20?%;width:%?100?%;height:%?100?%}.choice[data-v-190d150c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.choice[data-v-190d150c] .uni-radio-input{width:%?32?%;height:%?32?%}.footer[data-v-190d150c]{margin:%?40?% auto;width:%?190?%;height:%?70?%;line-height:%?70?%;text-align:center;color:#fff;font-size:%?28?%;background-color:#223041;border-radius:%?16?%}',""]),t.exports=e},5838:function(t,e,n){t.exports=n.p+"static/img/camera.7ea96268.png"},"60f4":function(t,e,n){"use strict";var i=n("6a30"),r=n.n(i);r.a},"6a30":function(t,e,n){var i=n("4850");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("724ae4a4",i,!0,{sourceMap:!1,shadowMode:!1})},"8f15":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"common"},[i("v-uni-view",{staticClass:"common-left"},[t._v("收款姓名")]),i("v-uni-view",{staticClass:"common-right"},[i("v-uni-input",{attrs:{placeholder:"请输入您的真实姓名","placeholder-class":"placeholder-common"},model:{value:t.uname,callback:function(e){t.uname=e},expression:"uname"}}),t.isUname?i("v-uni-image",{attrs:{src:"/static/delete.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removeUname.apply(void 0,arguments)}}}):t._e()],1)],1),i("v-uni-view",{staticClass:"common"},[i("v-uni-view",{staticClass:"common-left"},[t._v("支付宝账号")]),i("v-uni-view",{staticClass:"common-right"},[i("v-uni-input",{attrs:{placeholder:"请输入您的支付宝账号","placeholder-class":"placeholder-common"},model:{value:t.zhiFuBaoNum,callback:function(e){t.zhiFuBaoNum=e},expression:"zhiFuBaoNum"}}),t.isWeiXinNum?i("v-uni-image",{attrs:{src:"/static/delete.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removeZhiFuBaoNum.apply(void 0,arguments)}}}):t._e()],1)],1),i("v-uni-view",{staticClass:"updata",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updata.apply(void 0,arguments)}}},[""==t.copyImg?i("v-uni-view",{staticClass:"updata-box"},[i("v-uni-view",{staticClass:"updata-content"},[i("v-uni-image",{attrs:{src:n("5838")}}),i("v-uni-view",[t._v("上传支付宝收款二维码")])],1)],1):i("v-uni-image",{staticClass:"img",attrs:{src:t.copyImg}})],1),i("v-uni-view",{staticClass:"choice"},[i("v-uni-label",{staticClass:"radio"},[i("v-uni-radio",{attrs:{value:"1",checked:"true"}}),t._v("雄登康支付协议")],1)],1),t.isFlag?i("v-uni-view",{staticClass:"footer",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.determine.apply(void 0,arguments)}}},[t._v("确定")]):i("v-uni-view",{staticClass:"footer",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.modifyCopy.apply(void 0,arguments)}}},[t._v("修改")])],1)},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=b;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={},v={};v[o]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g($([])));y&&y!==i&&r.call(y,o)&&(v=y);var w=N.prototype=k.prototype=Object.create(v);F.prototype=w.constructor=N,N.constructor=F,N[c]=F.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===F||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,N):(t.__proto__=N,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},L(j.prototype),j.prototype[u]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,n,i){var r=new j(b(t,e,n,i));return l.isGeneratorFunction(e)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},L(w),w[c]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},l.values=$,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return u.type="throw",u.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],u=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:$(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),m}}}function b(t,e,n,i){var r=e&&e.prototype instanceof k?e:k,a=Object.create(r.prototype),o=new z(i||[]);return a._invoke=E(t,n,o),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function k(){}function F(){}function N(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(n,i,a,o){var u=x(t[n],t,i);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(s).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,o)}))}o(u.arg)}var n;function i(t,i){function r(){return new Promise((function(n,r){e(t,i,n,r)}))}return n=n?n.then(r,r):r()}this._invoke=i}function E(t,e,n){var i=f;return function(r,a){if(i===d)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw a;return C()}n.method=r,n.arg=a;while(1){var o=n.delegate;if(o){var u=_(o,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var c=x(t,e,n);if("normal"===c.type){if(i=n.done?p:h,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=p,n.method="throw",n.arg=c.arg)}}}function _(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=x(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,m;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function $(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b831:function(t,e,n){"use strict";(function(t){var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("c964")),a={data:function(){return{copyImg:"",uname:"",zhiFuBaoNum:"",img:"",type:"",zhiFuBaoObj:"",id:"",flag:""}},onLoad:function(t){this.type=t.type,1==this.type?this.getQuery():(this.uname="",this.zhiFuBaoNum="",this.img="")},methods:{modifyCopy:function(){var e=this;uni.showModal({content:"确定修改",success:function(n){n.confirm?e.modify():n.cancel&&t("log","用户点击取消"," at pages/binding/zhiFuBao.vue:94")}})},modify:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.flag){e.next=2;break}return e.abrupt("return",t.$api.msg("请等图片上传完成"));case 2:if(""!=t.uname){e.next=4;break}return e.abrupt("return",t.$api.msg("请输入姓名"));case 4:if(""!=t.zhiFuBaoNum){e.next=6;break}return e.abrupt("return",t.$api.msg("请输入支付宝账号"));case 6:if(""!=t.img){e.next=8;break}return e.abrupt("return",t.$api.msg("请上传支付宝收款二维码"));case 8:return n={Type:11,Account:t.zhiFuBaoNum,AccountName:"支付宝",Name:t.uname,ImgUrl:t.img,ID:t.id},n=JSON.stringify(n),i={action:"UpdatePaymentInformation",data:n},e.next=13,t.$api.api.modifyQuery(i);case 13:r=e.sent,1==r.data.status&&(t.$api.msg("修改成功"),setTimeout((function(){uni.navigateTo({url:"/pages/binding/binding"})}),1500));case 15:case"end":return e.stop()}}),e)})))()},getQuery:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n,i,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={},n=JSON.stringify(n),i={action:"ReadPaymentInformation",data:n},e.next=5,t.$api.api.query(i);case 5:if(r=e.sent,1==r.data.status){for(a=r.data.data,o=0;o<a.length;o++)11==a[o].Type&&(t.zhiFuBaoObj=a[o]);t.uname=t.zhiFuBaoObj.Name,t.zhiFuBaoNum=t.zhiFuBaoObj.Account,t.img=t.zhiFuBaoObj.ImgUrl,t.id=t.zhiFuBaoObj.ID,t.copyImg=t.zhiFuBaoObj.ImgUrl}case 7:case"end":return e.stop()}}),e)})))()},updata:function(){var t=this;uni.chooseImage({count:1,success:function(e){t.copyImg=e.tempFiles[0].path,uni.uploadFile({url:t.$config.domain.api+"API/Files.ashx",filePath:e.tempFiles[0].path,name:"file",formData:{action:"VoucherUpload",dlogo:!0},success:function(e){"uploadFile:ok"==e.errMsg?(t.img=t.$config.domain.api+e.data,t.flag=!0,t.$api.msg("上传完成",1500,!0,"none")):t.$api.msg("上传失败 请重新上传")}})}})},determine:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.flag){e.next=2;break}return e.abrupt("return",t.$api.msg("请等图片上传完成"));case 2:if(""!=t.uname){e.next=4;break}return e.abrupt("return",t.$api.msg("请输入姓名"));case 4:if(""!=t.zhiFuBaoNum){e.next=6;break}return e.abrupt("return",t.$api.msg("请输入支付宝账号"));case 6:if(""!=t.img){e.next=8;break}return e.abrupt("return",t.$api.msg("请上传支付宝收款二维码"));case 8:return n={},n={Type:11,Account:t.zhiFuBaoNum,AccountName:"支付宝",Name:t.uname,ImgUrl:t.img},n=JSON.stringify(n),i={action:"CreatePaymentInformation",data:n},e.next=14,t.$api.api.addTo(i);case 14:r=e.sent,1==r.data.status&&(t.$api.msg("添加成功"),a=uni.getStorageSync("info"),a?1==a?(uni.removeStorage("info"),setTimeout((function(){uni.navigateTo({url:"/pages/integralPages/OTCBusiness/index"})}),900)):(uni.removeStorage("info"),setTimeout((function(){uni.reLaunch({url:"/pages/FishCurrency/transaction/transaction"})}),900)):setTimeout((function(){uni.navigateTo({url:"/pages/binding/binding"})}),900));case 16:case"end":return e.stop()}}),e)})))()},removeUname:function(){this.uname=""},removeZhiFuBaoNum:function(){this.zhiFuBaoNum=""}},computed:{isUname:function(){return""!=this.uname},isWeiXinNum:function(){return""!=this.zhiFuBaoNum},isFlag:function(){return 1!=this.type}}};e.default=a}).call(this,n("0de9")["log"])},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));n("d3b7"),n("e6cf");function i(t,e,n,i,r,a,o){try{var u=t[a](o),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function u(t){i(o,r,a,u,c,"next",t)}function c(t){i(o,r,a,u,c,"throw",t)}u(void 0)}))}}},cba4:function(t,e,n){"use strict";n.r(e);var i=n("b831"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a}}]);