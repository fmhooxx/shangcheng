(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-binding-bankCard"],{"0c3c":function(t,e,n){"use strict";var r=n("36c0"),a=n.n(r);a.a},2929:function(t,e,n){"use strict";n.r(e);var r=n("49b3"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"36c0":function(t,e,n){var r=n("4350");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("164832d8",r,!0,{sourceMap:!1,shadowMode:!1})},4350:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.tips[data-v-11a86e3f]{padding:0 %?20?%;color:red}.common[data-v-11a86e3f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%;line-height:%?60?%}.common .common-left[data-v-11a86e3f]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.common .common-bank > uni-input[data-v-11a86e3f]{font-size:%?24?%}.common .common-right[data-v-11a86e3f]{-webkit-box-flex:4;-webkit-flex:4;flex:4;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border:%?1?% solid #b8b8b8;border-radius:%?8?%;padding:%?20?%}.common .common-right .placeholder-common[data-v-11a86e3f]{font-size:%?28?%}.common .common-right uni-input[data-v-11a86e3f]{width:100%}.common .common-right uni-image[data-v-11a86e3f]{width:%?40?%;height:%?40?%}.updata[data-v-11a86e3f]{position:relative;margin:%?20?% auto;width:%?560?%;height:%?300?%;padding:%?4?%;border:%?1?% dashed #6c7aa7}.updata .img[data-v-11a86e3f]{width:100%;height:100%}.updata .updata-box[data-v-11a86e3f]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.updata .updata-box .updata-content[data-v-11a86e3f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly}.updata .updata-box .updata-content > uni-image[data-v-11a86e3f]{margin-bottom:%?20?%;width:%?100?%;height:%?100?%}.choice[data-v-11a86e3f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.choice[data-v-11a86e3f] .uni-radio-input{width:%?32?%;height:%?32?%}.footer[data-v-11a86e3f]{margin:%?40?% auto;width:%?190?%;height:%?70?%;line-height:%?70?%;text-align:center;color:#fff;font-size:%?28?%;background-color:#223041;border-radius:%?16?%}',""]),t.exports=e},"49b3":function(t,e,n){"use strict";(function(t){var r=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=r(n("c964")),i={data:function(){return{copyImg:"",uname:"",bankName:"",cardNum:"",phone:"",img:"",type:"",cardObj:"",id:"",flag:""}},onLoad:function(t){this.type=t.type,1==this.type?this.getQuery():(this.uname="",this.bankName="",this.cardNum="",this.phone="",this.img="")},methods:{modifyCopy:function(){var e=this;uni.showModal({content:"确定修改?",success:function(n){n.confirm?e.modify():n.cancel&&t("log","用户点击取消"," at pages/binding/bankCard.vue:128")}})},modify:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.flag){e.next=2;break}return e.abrupt("return",t.$api.msg("请等图片上传完成"));case 2:if(""!=t.uname){e.next=4;break}return e.abrupt("return",t.$api.msg("请输入开户姓名"));case 4:if(""!=t.bankName){e.next=6;break}return e.abrupt("return",t.$api.msg("请输入银行名称"));case 6:if(!(t.cardNum.length<16||t.cardNum.length>19)){e.next=8;break}return e.abrupt("return",t.$api.msg("请输入16位到19位的银行卡号"));case 8:if(n=/^[1][1,2,3,4,5,7,8,9][0-9]{9}$/,n.test(t.phone)){e.next=11;break}return e.abrupt("return",t.$api.msg("请输入正确的手机号"));case 11:if(""!=t.img){e.next=13;break}return e.abrupt("return",t.$api.msg("上传银行卡正面照片"));case 13:return r={},r={Type:10,Account:t.cardNum,AccountName:t.bankName,Name:t.uname,ImgUrl:t.img,Tel:t.phone,ID:t.id},r=JSON.stringify(r),a={action:"UpdatePaymentInformation",data:r},e.next=19,t.$api.api.modifyQuery(a);case 19:i=e.sent,1==i.data.status&&(t.$api.msg("修改成功"),setTimeout((function(){uni.navigateTo({url:"/pages/binding/binding"})}),1500));case 21:case"end":return e.stop()}}),e)})))()},getQuery:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var r,a,i,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={},r=JSON.stringify(r),a={action:"ReadPaymentInformation",data:r},n.next=5,e.$api.api.query(a);case 5:if(i=n.sent,t("log",i," at pages/binding/bankCard.vue:194"),1==i.data.status){for(o=i.data.data,c=0;c<o.length;c++)10==o[c].Type&&(e.cardObj=o[c]);e.uname=e.cardObj.Name,e.bankName=e.cardObj.AccountName,e.cardNum=e.cardObj.Account,e.phone=e.cardObj.Tel,e.img=e.cardObj.ImgUrl,e.id=e.cardObj.ID,e.copyImg=e.cardObj.ImgUrl}case 8:case"end":return n.stop()}}),n)})))()},updata:function(){var t=this;uni.chooseImage({count:1,success:function(e){t.copyImg=e.tempFiles[0].path,uni.uploadFile({url:t.$config.domain.api+"API/Files.ashx",filePath:e.tempFiles[0].path,name:"file",formData:{action:"VoucherUpload",dlogo:!0},success:function(e){"uploadFile:ok"==e.errMsg&&(t.img=t.$config.domain.api+e.data,t.$api.msg("上传完成",1500,!0,"none"),t.flag=!0)}})}})},determine:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,r,a,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.flag){e.next=2;break}return e.abrupt("return",t.$api.msg("请等图片上传完成"));case 2:if(""!=t.uname){e.next=4;break}return e.abrupt("return",t.$api.msg("请输入开户姓名"));case 4:if(""!=t.bankName){e.next=6;break}return e.abrupt("return",t.$api.msg("请输入银行名称"));case 6:if(!(t.cardNum.length<16||t.cardNum.length>19)){e.next=8;break}return e.abrupt("return",t.$api.msg("请输入16位到19位的银行卡号"));case 8:if(n=/^[1][1,2,3,4,5,7,8,9][0-9]{9}$/,n.test(t.phone)){e.next=11;break}return e.abrupt("return",t.$api.msg("请输入正确的手机号"));case 11:if(""!=t.img){e.next=13;break}return e.abrupt("return",t.$api.msg("上传银行卡正面照片"));case 13:return r={},r={Type:10,Account:t.cardNum,AccountName:t.bankName,Name:t.uname,ImgUrl:t.img,Tel:t.phone},r=JSON.stringify(r),a={action:"CreatePaymentInformation",data:r},e.next=19,t.$api.api.addTo(a);case 19:i=e.sent,1==i.data.status&&(t.$api.msg("添加成功"),o=uni.getStorageSync("info"),o?1==o?(uni.removeStorage("info"),setTimeout((function(){uni.navigateTo({url:"/pages/integralPages/OTCBusiness/index"})}),900)):(uni.removeStorage("info"),setTimeout((function(){uni.reLaunch({url:"/pages/FishCurrency/transaction/transaction"})}),900)):setTimeout((function(){uni.navigateTo({url:"/pages/binding/binding"})}),1500));case 21:case"end":return e.stop()}}),e)})))()},removeUname:function(){this.uname=""},removeBankName:function(){this.bankName=""},removeCardNum:function(){this.cardNum=""},removePhone:function(){this.phone=""}},computed:{isUname:function(){return""!=this.uname},isBankName:function(){return""!=this.bankName},isCardNum:function(){return""!=this.cardNum},isPhone:function(){return""!=this.phone},isFlag:function(){return 1!=this.type}}};e.default=i}).call(this,n("0de9")["log"])},5838:function(t,e,n){t.exports=n.p+"static/img/camera.7ea96268.png"},"58fd":function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-view",{staticClass:"common"},[r("v-uni-view",{staticClass:"common-left"},[t._v("开户姓名")]),r("v-uni-view",{staticClass:"common-right"},[r("v-uni-input",{attrs:{placeholder:"请输入您的真实姓名","placeholder-class":"placeholder-common"},model:{value:t.uname,callback:function(e){t.uname=e},expression:"uname"}}),t.isUname?r("v-uni-image",{attrs:{src:"/static/delete.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removeUname.apply(void 0,arguments)}}}):t._e()],1)],1),r("v-uni-view",{staticClass:"tips"},[r("div",[t._v("提示: 为了不会影响到您的提现 银行名称请您按照下面的格式填写")]),r("span",[t._v("浙江诸暨农村商业银行股份有限公司街亭支行")])]),r("v-uni-view",{staticClass:"common"},[r("v-uni-view",{staticClass:"common-left"},[t._v("银行名称")]),r("v-uni-view",{staticClass:"common-right common-bank"},[r("v-uni-input",{attrs:{placeholder:"请输入您的银行名称","placeholder-class":"placeholder-common"},model:{value:t.bankName,callback:function(e){t.bankName=e},expression:"bankName"}}),t.isBankName?r("v-uni-image",{attrs:{src:"/static/delete.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removeBankName.apply(void 0,arguments)}}}):t._e()],1)],1),r("v-uni-view",{staticClass:"common"},[r("v-uni-view",{staticClass:"common-left"},[t._v("银行卡号")]),r("v-uni-view",{staticClass:"common-right"},[r("v-uni-input",{attrs:{type:"number",placeholder:"请输入您的银行卡号","placeholder-class":"placeholder-common"},model:{value:t.cardNum,callback:function(e){t.cardNum=e},expression:"cardNum"}}),t.isCardNum?r("v-uni-image",{attrs:{src:"/static/delete.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removeCardNum.apply(void 0,arguments)}}}):t._e()],1)],1),r("v-uni-view",{staticClass:"common"},[r("v-uni-view",{staticClass:"common-left"},[t._v("预留手机")]),r("v-uni-view",{staticClass:"common-right"},[r("v-uni-input",{attrs:{type:"number",placeholder:"请输入您的预留手机号","placeholder-class":"placeholder-common"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t.isPhone?r("v-uni-image",{attrs:{src:"/static/delete.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removePhone.apply(void 0,arguments)}}}):t._e()],1)],1),r("v-uni-view",{staticClass:"updata",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updata.apply(void 0,arguments)}}},[""==t.copyImg?r("v-uni-view",{staticClass:"updata-box"},[r("v-uni-view",{staticClass:"updata-content"},[r("v-uni-image",{attrs:{src:n("5838")}}),r("v-uni-view",[t._v("上传银行卡正面照片")])],1)],1):r("v-uni-image",{staticClass:"img",attrs:{src:t.copyImg}})],1),r("v-uni-view",{staticClass:"choice"},[r("v-uni-label",{staticClass:"radio"},[r("v-uni-radio",{attrs:{value:"1",checked:"true"}}),t._v("雄登康支付协议")],1)],1),t.isFlag?r("v-uni-view",{staticClass:"footer",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.determine.apply(void 0,arguments)}}},[t._v("确定")]):r("v-uni-view",{staticClass:"footer",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.modifyCopy.apply(void 0,arguments)}}},[t._v("修改")])],1)},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},"63db":function(t,e,n){"use strict";n.r(e);var r=n("58fd"),a=n("2929");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("0c3c");var o,c=n("f0c5"),u=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"11a86e3f",null,!1,r["a"],o);e["default"]=u.exports},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=w;var f="suspendedStart",m="suspendedYield",p="executing",d="completed",h={},v={};v[o]=function(){return this};var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==r&&a.call(b,o)&&(v=b);var y=C.prototype=x.prototype=Object.create(v);N.prototype=y.constructor=C,C.constructor=N,C[u]=N.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===N||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(y),t},l.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[c]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,n,r){var a=new j(w(t,e,n,r));return l.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(y),y[u]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return c.type="throw",c.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),h}}}function w(t,e,n,r){var a=e&&e.prototype instanceof x?e:x,i=Object.create(a.prototype),o=new T(r||[]);return i._invoke=E(t,n,o),i}function k(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function N(){}function C(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(n,r,i,o){var c=k(t[n],t,r);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&a.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,o)}),(function(t){e("throw",t,i,o)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,o)}))}o(c.arg)}var n;function r(t,r){function a(){return new Promise((function(n,a){e(t,r,n,a)}))}return n=n?n.then(a,a):a()}this._invoke=r}function E(t,e,n){var r=f;return function(a,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw i;return I()}n.method=a,n.arg=i;while(1){var o=n.delegate;if(o){var c=L(o,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=k(t,e,n);if("normal"===u.type){if(r=n.done?d:m,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=k(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function P(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));n("d3b7"),n("e6cf");function r(t,e,n,r,a,i,o){try{var c=t[i](o),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function c(t){r(o,a,i,c,u,"next",t)}function u(t){r(o,a,i,c,u,"throw",t)}c(void 0)}))}}}}]);