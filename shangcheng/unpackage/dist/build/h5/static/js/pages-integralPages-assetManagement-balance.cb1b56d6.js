(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-integralPages-assetManagement-balance"],{1158:function(t,e,r){"use strict";r.r(e);var n=r("8fb0"),i=r("a295");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("adce");var a,c=r("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"59230d6d",null,!1,n["a"],a);e["default"]=u.exports},"64bd":function(t,e,r){var n=r("6c60");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("7861b48a",n,!0,{sourceMap:!1,shadowMode:!1})},"6c60":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.reflect[data-v-59230d6d]{padding:%?20?% %?30?%}.reflect .reflect-title .reflect-box[data-v-59230d6d]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:%?1?% solid #c2c2c2;padding:%?30?% 0}.reflect .reflect-title .reflect-box > uni-image[data-v-59230d6d]{width:%?46?%;height:%?46?%;margin-right:%?30?%}.reflect .reflect-title .reflect-one[data-v-59230d6d]{margin:%?20?% 0;font-size:%?26?%;color:#bbb}.reflect .reflect-title .reflect-one > uni-text[data-v-59230d6d]{font-size:%?28?%;color:#00c09f;margin-left:%?30?%}.reflect .reflect-two > uni-view > uni-text[data-v-59230d6d]{margin-left:%?20?%}.footer[data-v-59230d6d]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.footer > uni-view[data-v-59230d6d]{width:%?648?%;height:%?90?%;line-height:%?90?%;text-align:center;border-radius:%?10?%;background-color:#223041;font-size:%?32?%;color:#fff;font-weight:600}.box[data-v-59230d6d]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.box > uni-view[data-v-59230d6d]{width:%?648?%;height:%?90?%;line-height:%?90?%;text-align:center;border-radius:%?10?%;background-color:#223041;font-size:%?32?%;color:#fff;font-weight:600}',""]),t.exports=e},"8fb0":function(t,e,r){"use strict";var n,i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-view",{staticClass:"reflect"},[r("v-uni-view",{staticClass:"reflect-title reflect-two"},[r("v-uni-view",[t._v("提现到余额"),r("v-uni-text",[t._v("只能提现整百的倍数")])],1),r("v-uni-view",{staticClass:"reflect-box"},[r("v-uni-image",{attrs:{src:"/static/vip/r2.png"}}),r("v-uni-input",{attrs:{type:"number",placeholder:"请输入提现金额"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.moneyBlur.apply(void 0,arguments)}},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1),r("v-uni-view",{staticClass:"reflect-one"},[t._v("当前FC余额 "+t._s(t.available)+","),r("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.withdrawal.apply(void 0,arguments)}}},[t._v("全部转入")])],1)],1),r("v-uni-view",{staticClass:"reflect-title"},[r("v-uni-view",{staticClass:"reflect-box"},[r("v-uni-image",{attrs:{src:"/static/vip/r1.png"}}),r("v-uni-input",{attrs:{type:"number",placeholder:"请输入交易密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),r("v-uni-view",{staticClass:"footer"},[r("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("确认转出")])],1),r("v-uni-view",{staticClass:"box"},[r("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBalanceList.apply(void 0,arguments)}}},[t._v("转出记录")])],1)],1)},o=[];r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}))},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=b;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(N([])));m&&m!==n&&i.call(m,a)&&(y=m);var w=E.prototype=k.prototype=Object.create(y);L.prototype=w.constructor=E,E.constructor=L,E[u]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[c]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,r,n){var i=new j(b(t,e,r,n));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=N,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return c.type="throw",c.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var i=e&&e.prototype instanceof k?e:k,o=Object.create(i.prototype),a=new $(n||[]);return o._invoke=C(t,r,a),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function L(){}function E(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(r,n,o,a){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(s).then((function(t){u.value=t,o(u)}),(function(t){return e("throw",t,o,a)}))}a(c.arg)}var r;function n(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=n}function C(t,e,r){var n=f;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return T()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=F(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function F(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,F(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a295:function(t,e,r){"use strict";r.r(e);var n=r("b08e"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},adce:function(t,e,r){"use strict";var n=r("64bd"),i=r.n(n);i.a},b08e:function(t,e,r){"use strict";var n=r("ee27");r("4160"),r("a9e3"),r("b680"),r("498a"),r("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var i=n(r("c964")),o={data:function(){return{available:"",money:"",password:"",userId:""}},created:function(){this.getAssets(),this.userId=uni.getStorageSync("UserId")},methods:{goBalanceList:function(){uni.navigateTo({url:"/pages/integralPages/assetManagement/balanceList"})},submit:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.password.trim()&&6==t.password.trim().length){e.next=2;break}return e.abrupt("return",t.$api.msg("请输入正确位数的交易密码"));case 2:if(!(t.money<=0)){e.next=4;break}return e.abrupt("return",t.$api.msg("请输入大于零的金额"));case 4:if(!(t.money>t.available)){e.next=6;break}return e.abrupt("return",t.$api.msg("转账金额大于可用FC余额"));case 6:return r={action:"AddCommissions4",userid:t.userId,requesttype:4,commissionmoney:t.money,TradePassword:t.password},e.next=9,t.$api.api.getMoney(r);case 9:n=e.sent,1==n.data.success?(t.$api.msg(n.data.msg,2e3,!0,"none"),setTimeout((function(){uni.navigateBack({delta:1})}),1900)):t.$api.msg(n.data.msg,2e3,!0,"none");case 11:case"end":return e.stop()}}),e)})))()},moneyBlur:function(t){this.money=t.detail.value},withdrawal:function(){this.money=this.available},getAssets:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={action:"ReadBalanceAndFishCoid"},e.next=3,t.$api.api.assets(r);case 3:n=e.sent,1==n.data.status&&n.data.data.forEach((function(t){t.FishCoin=Number(t.FishCoin).toFixed(2)})),t.available=n.data.data[0].FishCoin;case 6:case"end":return e.stop()}}),e)})))()}},computed:{}};e.default=o},c964:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return i}));r("d3b7"),r("e6cf");function n(t,e,r,n,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function c(t){n(a,i,o,c,u,"next",t)}function u(t){n(a,i,o,c,u,"throw",t)}c(void 0)}))}}}}]);