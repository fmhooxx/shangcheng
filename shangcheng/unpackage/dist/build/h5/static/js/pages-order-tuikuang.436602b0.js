(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-tuikuang"],{"0108":function(t,e,n){"use strict";var i={uniLoadMore:n("0b69").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t._l(t.evaluateList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"order-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump(e.OrderId)}}},t._l(e.LineItemsList,(function(e,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"i-top b-b"},[n("v-uni-text",{staticClass:"time"},[t._v("订单编号："+t._s(e.OrderID))])],1),n("v-uni-view",{staticClass:"goods-box w"},[n("v-uni-view",{staticClass:"goods-box"},[n("v-uni-view",{staticClass:"goods-item"},[n("v-uni-image",{staticClass:"goods-img",attrs:{src:e.ThumbnailsUrl,mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(e.ItemDescription))])],1)],1),9==e.OrderItemsStatus?n("v-uni-view",{staticClass:"price-box"},[n("v-uni-button",{staticClass:"action-btn recom"},[t._v("退货中")])],1):t._e(),10==e.OrderItemsStatus?n("v-uni-view",{staticClass:"price-box"},[n("v-uni-button",{staticClass:"action-btn recom"},[t._v("已退货成功")])],1):t._e()],1)],1)})),1)})),n("uni-load-more",{attrs:{status:t.loadingType}})],2)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"06a3":function(t,e,n){"use strict";var i=n("ee27");n("99af"),n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),r=(i(n("0b69")),{data:function(){return{evaluateList:[],loadingType:"more",start:0,total:null,status:""}},onLoad:function(t){var e=t.state;this.status=e;var n=t.title;uni.setNavigationBarTitle({title:n}),this.getEvaluate(e)},onReachBottom:function(){this.getEvaluate(this.status)},methods:{jump:function(t){uni.navigateTo({url:"/pages/order/orderDetail?orderId="+t})},getEvaluate:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i,a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(e.total<=e.start&&0!=e.start)){n.next=2;break}return n.abrupt("return");case 2:return i={OrderStatus:t,PageIndex:0==Math.ceil(e.start/10)?"1":Math.ceil(e.start/10)+1,action:"GetOrderListByPage",PageSize:10,OrderItemsStatus:"",OrderItemID:"6,7,8,9,10"},n.next=5,e.$api.api.orderList(i);case 5:a=n.sent,1==a.data.status&&(console.log(a),r=a.data.Data,r.forEach((function(t,n){t.LineItemsList.forEach((function(t,n){t.ThumbnailsUrl=e.$config.domain.api+t.ThumbnailsUrl}))})),e.total=a.data.RowsCount,e.start+=r.length,e.loadingType=e.total>e.start?"more":"nomore",e.evaluateList=e.evaluateList.concat(r),console.log(e.evaluateList));case 7:case"end":return n.stop()}}),n)})))()}}});e.default=r},"0b69":function(t,e,n){"use strict";n.r(e);var i=n("9aad"),a=n("c193");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("a2b9");var o,d=n("f0c5"),s=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"8daed33e",null,!1,i["a"],o);e["default"]=s.exports},"17b1":function(t,e,n){"use strict";n.r(e);var i=n("06a3"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},3095:function(t,e,n){"use strict";n.r(e);var i=n("0108"),a=n("17b1");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("d94a"),n("d58d");var o,d=n("f0c5"),s=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"0272f335",null,!1,i["a"],o);e["default"]=s.exports},"5f2a":function(t,e,n){var i=n("62ce");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("72847ca0",i,!0,{sourceMap:!1,shadowMode:!1})},"62ce":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-load-more[data-v-8daed33e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-8daed33e]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-8daed33e]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-8daed33e]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-8daed33e]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-8daed33e 1.56s ease infinite;animation:load-data-v-8daed33e 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-8daed33e]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-8daed33e]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-8daed33e]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-8daed33e]:nth-child(4){top:11px;left:0}.load1[data-v-8daed33e],\n.load2[data-v-8daed33e],\n.load3[data-v-8daed33e]{height:24px;width:24px}.load2[data-v-8daed33e]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-8daed33e]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-8daed33e]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-8daed33e]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-8daed33e]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-8daed33e]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-8daed33e]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-8daed33e]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-8daed33e]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-8daed33e]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-8daed33e]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-8daed33e]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-8daed33e]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-8daed33e]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-8daed33e{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},"6c11":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=i},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,a=i.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",d=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag",l="object"===typeof t,c=e.regeneratorRuntime;if(c)l&&(t.exports=c);else{c=e.regeneratorRuntime=l?t.exports:{},c.wrap=y;var u="suspendedStart",f="suspendedYield",v="executing",h="completed",p={},m={};m[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(S([])));b&&b!==i&&a.call(b,o)&&(m=b);var g=L.prototype=k.prototype=Object.create(m);_.prototype=g.constructor=L,L.constructor=_,L[s]=_.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(g),t},c.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[d]=function(){return this},c.AsyncIterator=j,c.async=function(t,e,n,i){var a=new j(y(t,e,n,i));return c.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(g),g[s]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},c.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,a){return d.type="throw",d.arg=t,e.next=i,a&&(e.method="next",e.arg=n),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],d=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var a=i.arg;T(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:S(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),p}}}function y(t,e,n,i){var a=e&&e.prototype instanceof k?e:k,r=Object.create(a.prototype),o=new P(i||[]);return r._invoke=O(t,n,o),r}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function k(){}function _(){}function L(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(n,i,r,o){var d=x(t[n],t,i);if("throw"!==d.type){var s=d.arg,l=s.value;return l&&"object"===typeof l&&a.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,r,o)}),(function(t){e("throw",t,r,o)})):Promise.resolve(l).then((function(t){s.value=t,r(s)}),(function(t){return e("throw",t,r,o)}))}o(d.arg)}var n;function i(t,i){function a(){return new Promise((function(n,a){e(t,i,n,a)}))}return n=n?n.then(a,a):a()}this._invoke=i}function O(t,e,n){var i=u;return function(a,r){if(i===v)throw new Error("Generator is already running");if(i===h){if("throw"===a)throw r;return M()}n.method=a,n.arg=r;while(1){var o=n.delegate;if(o){var d=C(o,n);if(d){if(d===p)continue;return d}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===u)throw i=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var s=x(t,e,n);if("normal"===s.type){if(i=n.done?h:f,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=h,n.method="throw",n.arg=s.arg)}}}function C(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=x(i,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function e(){while(++i<t.length)if(a.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return r.next=r}}return{next:M}}function M(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"976d":function(t,e,n){var i=n("db67");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7f23f834",i,!0,{sourceMap:!1,shadowMode:!1})},"9aad":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-load-more"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[n("v-uni-view",{staticClass:"load1"},[n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}})],1),n("v-uni-view",{staticClass:"load2"},[n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}})],1),n("v-uni-view",{staticClass:"load3"},[n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}})],1)],1),n("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},a2b9:function(t,e,n){"use strict";var i=n("5f2a"),a=n.n(i);a.a},c193:function(t,e,n){"use strict";n.r(e);var i=n("6c11"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));n("d3b7"),n("e6cf");function i(t,e,n,i,a,r,o){try{var d=t[r](o),s=d.value}catch(l){return void n(l)}d.done?e(s):Promise.resolve(s).then(i,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function d(t){i(o,a,r,d,s,"next",t)}function s(t){i(o,a,r,d,s,"throw",t)}d(void 0)}))}}},d58d:function(t,e,n){"use strict";var i=n("df58"),a=n.n(i);a.a},d94a:function(t,e,n){"use strict";var i=n("976d"),a=n.n(i);a.a},db67:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-0272f335]{background-color:#f5f5f5}body.?%PAGE?%[data-v-0272f335]{background-color:#f5f5f5}",""]),t.exports=e},df58:function(t,e,n){var i=n("eb58");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("252457a2",i,!0,{sourceMap:!1,shadowMode:!1})},eb58:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.order-item[data-v-0272f335]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-top:%?16?%\n  /* 多条商品 */}.order-item .i-top[data-v-0272f335]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;padding-left:%?30?%;font-size:%?28?%;color:#303133;position:relative;background-color:#fff}.order-item .i-top .time[data-v-0272f335]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.order-item .i-top .state[data-v-0272f335]{color:#fa436a}.order-item .i-top .del-btn[data-v-0272f335]{padding:%?10?% 0 %?10?% %?36?%;font-size:%?32?%;color:#909399;position:relative}.order-item .i-top .del-btn[data-v-0272f335]:after{content:"";width:0;height:%?30?%;border-left:1px solid #dcdfe6;position:absolute;left:%?20?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.order-item .goods-box[data-v-0272f335]{padding:%?20?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?20?%}.order-item .goods-box .goods-item[data-v-0272f335]{width:%?120?%;height:%?120?%;margin-right:%?20?%}.order-item .goods-box .goods-item .goods-img[data-v-0272f335]{width:100%;height:100%}.order-item .goods-box .right[data-v-0272f335]{width:80%}.order-item .goods-box .right .title[data-v-0272f335]{width:%?350?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.order-item .price-box[data-v-0272f335]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;font-size:%?26?%;color:#909399;-webkit-align-self:flex-end;align-self:flex-end}.order-item .price-box .num[data-v-0272f335]{margin:0 %?8?%;color:#303133}.order-item .price-box .price[data-v-0272f335]{font-size:%?32?%;color:#303133}.order-item .price-box .price[data-v-0272f335]:before{content:"￥";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}.order-item .action-box[data-v-0272f335]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%;position:relative;padding-right:%?30?%}.order-item .action-btn[data-v-0272f335]{width:%?160?%;height:%?60?%;margin:0;padding:0;text-align:center;line-height:%?60?%;font-size:%?26?%;color:#303133;background:#fff;border-radius:100px}.order-item .action-btn[data-v-0272f335]:after{border-radius:100px}.order-item .action-btn.recom[data-v-0272f335]{color:#fa436a}',""]),t.exports=e}}]);