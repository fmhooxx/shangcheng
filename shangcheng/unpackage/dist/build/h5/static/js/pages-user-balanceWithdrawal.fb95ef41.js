(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-balanceWithdrawal"],{"0d42":function(t,e,n){"use strict";n.r(e);var r=n("0fdb"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"0fdb":function(t,e,n){"use strict";var r=n("ee27");n("4160"),n("a9e3"),n("b680"),n("e25e"),n("498a"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("c964")),a={data:function(){return{copyImg:"",uname:"",bankName:"",cardNum:"",phone:"",cardObj:"",id:"",flag:"",available:"",money:"",password:"",userId:""}},created:function(){this.getQuery(),this.getAssets(),this.userId=uni.getStorageSync("UserId")},methods:{goRecord:function(){uni.navigateTo({url:"/pages/integralPages/assetManagement/record?type=1"})},submit:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.flag){e.next=2;break}return e.abrupt("return",t.$api.msg("请先绑定银行卡"));case 2:if(""!=t.password.trim()&&6==t.password.trim().length){e.next=4;break}return e.abrupt("return",t.$api.msg("请输入正确位数的交易密码"));case 4:if(""!=t.money){e.next=6;break}return e.abrupt("return",t.$api.msg("请输入整百的倍数的金额"));case 6:if(!(t.money>t.available)){e.next=8;break}return e.abrupt("return",t.$api.msg("提现金额大于可用FC余额"));case 8:uni.showModal({title:"温馨提示",content:"申请到账时间,两个工作日左右",success:function(e){e.confirm?t.submits():e.cancel}});case 9:case"end":return e.stop()}}),e)})))()},submits:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={action:"AddCommissions3",requesttype:4,userid:t.userId,commissionmoney:t.money,TradePassword:t.password},e.next=3,t.$api.api.getMoney(n);case 3:r=e.sent,1==r.data.success?(t.$api.msg(r.data.msg,2e3,!0,"none"),setTimeout((function(){uni.navigateBack({delta:1})}),1900)):t.$api.msg(r.data.msg,2e3,!0,"none");case 5:case"end":return e.stop()}}),e)})))()},moneyBlur:function(t){var e=100*parseInt(t.detail.value/100);return 0!==e?this.money=e:(this.money="",this.$api.msg("请输入整百的倍数",2e3,!0,"none"))},withdrawal:function(){var t=100*parseInt(this.available/100);return 0!==t?this.money=t:(this.money="",this.$api.msg("提现金额未满一百, 无法提现",2e3,!0,"none"))},getAssets:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={action:"ReadBalanceAndFishCoid"},e.next=3,t.$api.api.assets(n);case 3:r=e.sent,1==r.data.status&&r.data.data.forEach((function(t){t.FishCoin=Number(t.FishCoin).toFixed(2)})),t.available=r.data.data[0].Points;case 6:case"end":return e.stop()}}),e)})))()},getQuery:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,r,i,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={},n=JSON.stringify(n),r={action:"ReadPaymentInformation",data:n},e.next=5,t.$api.api.query(r);case 5:if(i=e.sent,1==i.data.status){for(a=i.data.data,o=0;o<a.length;o++)10==a[o].Type&&(t.cardObj=a[o]);""==t.cardObj?t.flag=!1:t.flag=!0,t.uname=t.cardObj.Name,t.bankName=t.cardObj.AccountName,t.cardNum=t.cardObj.Account,t.phone=t.cardObj.Tel,t.img=t.cardObj.ImgUrl,t.id=t.cardObj.ID,t.copyImg=t.cardObj.ImgUrl}case 7:case"end":return e.stop()}}),e)})))()}},computed:{}};e.default=a},"1f2c":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.common[data-v-890bd146]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;line-height:%?60?%}.common .common-left[data-v-890bd146]{margin-right:%?10?%}.common .common-right[data-v-890bd146]{width:80%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #b8b8b8;padding:%?20?%}.common .common-right .placeholder-common[data-v-890bd146]{font-size:%?28?%}.common .common-right uni-input[data-v-890bd146]{width:100%}.common .common-right uni-image[data-v-890bd146]{width:%?40?%;height:%?40?%}.reflect[data-v-890bd146]{padding:%?20?% %?30?%}.reflect .reflect-title .reflect-box[data-v-890bd146]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:%?1?% solid #c2c2c2;padding:%?30?% 0}.reflect .reflect-title .reflect-box > uni-image[data-v-890bd146]{width:%?46?%;height:%?46?%;margin-right:%?30?%}.reflect .reflect-title .reflect-one[data-v-890bd146]{margin:%?20?% 0;font-size:%?26?%;color:#bbb}.reflect .reflect-title .reflect-one > uni-text[data-v-890bd146]{font-size:%?28?%;color:#00c09f;margin-left:%?30?%}.reflect .reflect-two > uni-view > uni-text[data-v-890bd146]{margin-left:%?20?%}.footer[data-v-890bd146]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.footer > uni-view[data-v-890bd146]{width:%?648?%;height:%?90?%;line-height:%?90?%;text-align:center;border-radius:%?10?%;background-color:#223041;font-size:%?32?%;color:#fff;font-weight:600}.box[data-v-890bd146]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.box > uni-view[data-v-890bd146]{width:%?648?%;height:%?90?%;line-height:%?90?%;text-align:center;border-radius:%?10?%;background-color:#223041;font-size:%?32?%;color:#fff;font-weight:600}',""]),t.exports=e},"8f78":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"common"},[n("v-uni-view",{staticClass:"common-left"},[t._v("开户姓名")]),n("v-uni-view",{staticClass:"common-right"},[n("v-uni-input",{attrs:{disabled:"true"},model:{value:t.uname,callback:function(e){t.uname=e},expression:"uname"}})],1)],1),n("v-uni-view",{staticClass:"common"},[n("v-uni-view",{staticClass:"common-left"},[t._v("银行名称")]),n("v-uni-view",{staticClass:"common-right"},[n("v-uni-input",{attrs:{disabled:"true"},model:{value:t.bankName,callback:function(e){t.bankName=e},expression:"bankName"}})],1)],1),n("v-uni-view",{staticClass:"common"},[n("v-uni-view",{staticClass:"common-left"},[t._v("银行卡号")]),n("v-uni-view",{staticClass:"common-right"},[n("v-uni-input",{attrs:{disabled:"true",type:"number"},model:{value:t.cardNum,callback:function(e){t.cardNum=e},expression:"cardNum"}})],1)],1),n("v-uni-view",{staticClass:"common"},[n("v-uni-view",{staticClass:"common-left"},[t._v("预留手机")]),n("v-uni-view",{staticClass:"common-right"},[n("v-uni-input",{attrs:{disabled:"true",type:"number"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1),n("v-uni-view",{staticClass:"reflect"},[n("v-uni-view",{staticClass:"reflect-title reflect-two"},[n("v-uni-view",[t._v("提现余额"),n("v-uni-text",[t._v("只能提现整百的倍数")])],1),n("v-uni-view",{staticClass:"reflect-box"},[n("v-uni-image",{attrs:{src:"/static/vip/r2.png"}}),n("v-uni-input",{attrs:{type:"number",placeholder:"请输入提现金额"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.moneyBlur.apply(void 0,arguments)}},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1),n("v-uni-view",{staticClass:"reflect-one"},[t._v("当前余额余额 "+t._s(t.available)+","),n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.withdrawal.apply(void 0,arguments)}}},[t._v("全部提现")])],1)],1),n("v-uni-view",{staticClass:"reflect-title"},[n("v-uni-view",{staticClass:"reflect-box"},[n("v-uni-image",{attrs:{src:"/static/vip/r1.png"}}),n("v-uni-input",{attrs:{type:"number",placeholder:"请输入交易密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),n("v-uni-view",{staticClass:"footer"},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交申请")])],1),n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRecord.apply(void 0,arguments)}}},[t._v("提现记录")])],1)],1)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=w;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={},m={};m[o]=function(){return this};var b=Object.getPrototypeOf,g=b&&b(b(P([])));g&&g!==r&&i.call(g,o)&&(m=g);var y=_.prototype=k.prototype=Object.create(m);j.prototype=y.constructor=_,_.constructor=j,_[s]=j.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(y),t},l.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[c]=function(){return this},l.AsyncIterator=L,l.async=function(t,e,n,r){var i=new L(w(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(y),y[s]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=P,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var i=e&&e.prototype instanceof k?e:k,a=Object.create(i.prototype),o=new I(r||[]);return a._invoke=C(t,n,o),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function j(){}function _(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(n,r,a,o){var c=x(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,o)}))}o(c.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function C(t,e,n){var r=f;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return R()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var c=O(o,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=x(t,e,n);if("normal"===s.type){if(r=n.done?p:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function P(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9b7d":function(t,e,n){var r=n("1f2c");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("8896dfce",r,!0,{sourceMap:!1,shadowMode:!1})},c201:function(t,e,n){"use strict";var r=n("9b7d"),i=n.n(r);i.a},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));n("d3b7"),n("e6cf");function r(t,e,n,r,i,a,o){try{var c=t[a](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function c(t){r(o,i,a,c,s,"next",t)}function s(t){r(o,i,a,c,s,"throw",t)}c(void 0)}))}}},e64d:function(t,e,n){"use strict";n.r(e);var r=n("8f78"),i=n("0d42");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("c201");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"890bd146",null,!1,r["a"],o);e["default"]=s.exports}}]);