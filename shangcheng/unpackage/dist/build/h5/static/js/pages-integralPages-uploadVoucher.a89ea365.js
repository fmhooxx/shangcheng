(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-integralPages-uploadVoucher"],{"16da":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"updata",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updata.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"updata-box"},[t.img?i("v-uni-view",{staticClass:"img1"},[i("v-uni-image",{attrs:{src:t.img}})],1):i("v-uni-view",{staticClass:"updata-content"},[i("v-uni-image",{attrs:{src:n("5838")}}),i("v-uni-view",[t._v("上传转账的凭证照片")])],1)],1)],1),i("v-uni-view",{staticClass:"common"},[i("v-uni-view",{staticClass:"common-left"},[t._v("金额")]),i("v-uni-view",{staticClass:"common-right"},[i("v-uni-input",{attrs:{type:"number",placeholder:"请输入充值金额","placeholder-class":"placeholder-common"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1)],1),i("v-uni-view",{staticClass:"common"},[i("v-uni-view",{staticClass:"common-left"},[t._v("备注")]),i("v-uni-view",{staticClass:"common-right"},[i("v-uni-input",{attrs:{placeholder:"请输入备注","placeholder-class":"placeholder-common"},model:{value:t.bz,callback:function(e){t.bz=e},expression:"bz"}})],1)],1),i("v-uni-view",{staticClass:"payWay"},t._l(t.payWay,(function(e,n){return i("v-uni-text",{key:n,class:e.checked?"chose":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choose(n)}}},[t._v(t._s(e.name))])})),1),i("v-uni-view",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("确认上传")])],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"4a14":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.img1[data-v-650da966]{width:%?558?%;height:%?294?%}.img1 uni-image[data-v-650da966]{height:100%;width:100%}.payWay[data-v-650da966]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:start;justify-content:start;padding-left:%?30?%;margin-top:%?50?%}.payWay uni-text[data-v-650da966]{display:block;height:%?60?%;width:%?135?%;border-radius:%?10?%;line-height:%?60?%;text-align:center;border:%?1?% solid #eee;margin-right:%?20?%}.chose[data-v-650da966]{background-color:#223041;color:#fff}.common[data-v-650da966]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;line-height:%?60?%}.common .common-left[data-v-650da966]{margin-right:%?10?%}.common .common-right[data-v-650da966]{width:80%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border:%?1?% solid #b8b8b8;border-radius:%?8?%;padding:%?20?%}.common .common-right .placeholder-common[data-v-650da966]{font-size:%?28?%}.common .common-right uni-input[data-v-650da966]{width:100%;font-size:%?26?%}.common .common-right uni-image[data-v-650da966]{width:%?40?%;height:%?40?%}.updata[data-v-650da966]{position:relative;margin:%?100?% auto %?40?%;width:%?558?%;height:%?294?%;border:%?1?% dashed #6c7aa7}.updata .img[data-v-650da966]{width:100%;height:100%}.updata .updata-box[data-v-650da966]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.updata .updata-box .updata-content[data-v-650da966]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly}.updata .updata-box .updata-content > uni-image[data-v-650da966]{margin-bottom:%?20?%;width:%?140?%;height:%?100?%}.submit[data-v-650da966]{height:%?69?%;width:%?191?%;background-color:#223041;border-radius:%?8?%;text-align:center;line-height:%?69?%;color:#fff;font-size:%?28?%;margin:%?100?% auto 0}',""]),t.exports=e},5838:function(t,e,n){t.exports=n.p+"static/img/camera.7ea96268.png"},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,a=i.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={},g={};g[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(F([])));y&&y!==i&&a.call(y,o)&&(g=y);var w=E.prototype=k.prototype=Object.create(g);L.prototype=w.constructor=E,E.constructor=L,E[s]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},_(P.prototype),P.prototype[c]=function(){return this},l.AsyncIterator=P,l.async=function(t,e,n,i){var a=new P(b(t,e,n,i));return l.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),w[s]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},l.values=F,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(W),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,a){return c.type="throw",c.arg=t,e.next=i,a&&(e.method="next",e.arg=n),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),W(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var a=i.arg;W(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:F(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,i){var a=e&&e.prototype instanceof k?e:k,r=Object.create(a.prototype),o=new C(i||[]);return r._invoke=j(t,n,o),r}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function k(){}function L(){}function E(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function P(t){function e(n,i,r,o){var c=x(t[n],t,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,r,o)}),(function(t){e("throw",t,r,o)})):Promise.resolve(u).then((function(t){s.value=t,r(s)}),(function(t){return e("throw",t,r,o)}))}o(c.arg)}var n;function i(t,i){function a(){return new Promise((function(n,a){e(t,i,n,a)}))}return n=n?n.then(a,a):a()}this._invoke=i}function j(t,e,n){var i=h;return function(a,r){if(i===d)throw new Error("Generator is already running");if(i===p){if("throw"===a)throw r;return I()}n.method=a,n.arg=r;while(1){var o=n.delegate;if(o){var c=O(o,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var s=x(t,e,n);if("normal"===s.type){if(i=n.done?p:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=p,n.method="throw",n.arg=s.arg)}}}function O(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=x(i,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function W(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function F(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function e(){while(++i<t.length)if(a.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return r.next=r}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},ad07:function(t,e,n){"use strict";n.r(e);var i=n("ead2"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},b605:function(t,e,n){var i=n("4a14");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("443b2247",i,!0,{sourceMap:!1,shadowMode:!1})},c678:function(t,e,n){"use strict";var i=n("b605"),a=n.n(i);a.a},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));n("d3b7"),n("e6cf");function i(t,e,n,i,a,r,o){try{var c=t[r](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(i,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function c(t){i(o,a,r,c,s,"next",t)}function s(t){i(o,a,r,c,s,"throw",t)}c(void 0)}))}}},ead2:function(t,e,n){"use strict";(function(t){var i=n("ee27");n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),r={data:function(){return{img:"",price:"",bz:"",payWay:[{id:11,name:"支付宝",checked:!0,type:11},{id:12,name:"微信",checked:!1,type:12},{id:10,name:"银联支付",checked:!1,type:10}],payLists:[],payId:[],flag:""}},onLoad:function(){this.getPayWay()},methods:{getPayWay:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i,a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i={data:""},a=JSON.stringify(i),r={action:"ReadPaymentInformation",data:a},n.next=5,e.$api.api.query(r);case 5:o=n.sent,1==o.data.status&&(e.payLists=o.data.data,t("log",e.payLists," at pages/integralPages/uploadVoucher.vue:99"),e.choose(0));case 7:case"end":return n.stop()}}),n)})))()},choose:function(e){var n=this;this.payId=[],t("log",this.payLists," at pages/integralPages/uploadVoucher.vue:105"),this.payLists.forEach((function(t,e){t.Type&&n.payId.push(t.Type)}));var i={};this.payId.forEach((function(t,e){i[t]=t}));var a=this.payWay[e].type;if(void 0!=i[a])for(var r in this.payWay){i=this.payWay[r];i.checked=e==r}else uni.showModal({title:"提示",content:"请去绑定",success:function(t){t.confirm?uni.navigateTo({url:"/pages/binding/binding"}):t.cancel}})},updata:function(){var e=this;uni.chooseImage({count:1,success:function(n){e.img=n.tempFiles[0].path,t("log",e.img," at pages/integralPages/uploadVoucher.vue:146"),uni.uploadFile({url:e.$config.domain.api+"API/Files.ashx",filePath:n.tempFiles[0].path,name:"file",formData:{action:"VoucherUpload",dlogo:!0},success:function(n){t("log",n," at pages/integralPages/uploadVoucher.vue:156"),"uploadFile:ok"==n.errMsg&&(e.$api.msg("上传成功"),e.img=e.$config.domain.api+n.data,e.flag=!0)}})}})},submit:function(){var t=this,e="";for(var n in this.payWay){var i=this.payWay[n];i.checked&&(e=i.id,this.choose(n))}if(this.img){if(!this.flag)return this.$api.msg("请等图片上传完成");if(this.price){var a={Balance:this.price,PayWay:e,Remark:this.bz,Proof:this.img},r=JSON.stringify(a),o={action:"SubmitRecharge",data:r};this.$api.api.SubmitRecharge(o).then((function(e){1==e.data.status?(t.$api.msg("提交成功"),setTimeout((function(){uni.navigateBack({delta:2})}),800)):t.$api.msg(e.data.message)}))}else this.$api.msg("金额不能为空")}else this.$api.msg("请上传支付凭证图片")}}};e.default=r}).call(this,n("0de9")["log"])},f70b:function(t,e,n){"use strict";n.r(e);var i=n("16da"),a=n("ad07");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("c678");var o,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"650da966",null,!1,i["a"],o);e["default"]=s.exports}}]);