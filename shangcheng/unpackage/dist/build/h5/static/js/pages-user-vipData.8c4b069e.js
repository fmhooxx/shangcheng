(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-vipData"],{"492b":function(e,i,t){"use strict";var a,s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",[t("v-uni-view",{staticClass:"vip-box"},[t("v-uni-view",{staticClass:"list-box"},[t("v-uni-view",[t("v-uni-image",{attrs:{src:"/static/vip/list4.png",mode:""}}),t("v-uni-text",{staticClass:"vip-list-name"},[e._v("发行总量")]),t("v-uni-text",{staticClass:"num"},[e._v(e._s(e._f("numFilter")(e.isSueObj.Issue)))])],1),t("v-uni-view",[t("v-uni-image",{attrs:{src:"/static/vip/list1.png",mode:""}}),t("v-uni-text",{staticClass:"vip-list-name"},[e._v("剩余总数")]),t("v-uni-text",{staticClass:"num"},[e._v(e._s(e._f("numFilter")(e.isSueObj.Surplus)))])],1),t("v-uni-view",[t("v-uni-image",{attrs:{src:"/static/vip/list2.png",mode:""}}),t("v-uni-text",{staticClass:"vip-list-name"},[e._v("流通总数")]),t("v-uni-text",{staticClass:"num"},[e._v(e._s(e._f("numFilter")(e.isSueObj.Circulate)))])],1)],1),t("v-uni-view",[t("v-uni-view",{staticClass:"list-second"},[t("v-uni-view",[t("v-uni-view",{staticClass:"image-box"},[t("v-uni-image",{staticClass:"image",attrs:{src:"/static/vip/jiageprice1.png",mode:""}}),t("v-uni-text",[e._v("今日价")])],1),t("v-uni-view",{staticClass:"price"},[e._v(e._s(e._f("numFilter")(e.price.todayPrice)))])],1),t("v-uni-view",[t("v-uni-view",{staticClass:"image-box"},[t("v-uni-image",{staticClass:"image",attrs:{src:"/static/vip/jiageprice2.png",mode:""}}),t("v-uni-text",[e._v("昨日价")])],1),t("v-uni-view",{staticClass:"price"},[e._v(e._s(e._f("numFilter")(e.price.yesterdayPrice)))])],1),t("v-uni-view",[t("v-uni-view",{staticClass:"one"},[e._v("历史价")]),t("v-uni-image",{staticClass:"image2",attrs:{src:"/static/vip/tubiaozhexiantu.png",mode:""}})],1)],1)],1),t("v-uni-view",[t("v-uni-view",{staticClass:"list-second",staticStyle:{"border-top":"none"}},[t("v-uni-view",[t("v-uni-view",{staticClass:"image-box"},[t("v-uni-image",{staticClass:"image",attrs:{src:"/static/vip/xiangmuguanlifuzhi.png",mode:""}}),t("v-uni-text",[e._v("今日量")])],1),t("v-uni-view",{staticClass:"price"},[e._v(e._s(e._f("numFilter")(e.number.todayNumber)))])],1),t("v-uni-view",[t("v-uni-view",{staticClass:"image-box"},[t("v-uni-image",{staticClass:"image",attrs:{src:"/static/vip/xiangmuguanlifuzhi1.png",mode:""}}),t("v-uni-text",[e._v("昨日量")])],1),t("v-uni-view",{staticClass:"price"},[e._v(e._s(e._f("numFilter")(e.number.yesterdayNumber)))])],1),t("v-uni-view",[t("v-uni-view",{staticClass:"one"},[e._v("历史量")]),t("v-uni-image",{staticClass:"image2",attrs:{src:"/static/vip/list3.png",mode:""}})],1)],1)],1),t("v-uni-view",{staticStyle:{display:"flex","justify-content":"center",padding:"30rpx 0"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.navTo("/pages/integralPages/statisticsList/consumption")}}},[t("v-uni-view",{staticClass:"progress-box"},[t("v-uni-view",{staticStyle:{flex:"1"}},[e._v("消费情况")]),t("v-uni-view",{staticClass:"progress"},[t("v-uni-view",{staticClass:"consumption",style:{width:e.consumptionWidth+"%"}},[e._v("现金"+e._s(e._f("numFilter")(e.trade.xianjinAmount)))]),t("v-uni-text",[e._v(e._s(e._f("numFilter")(e.trade.yueAmount)))])],1)],1)],1),t("v-uni-view",{staticStyle:{display:"flex","justify-content":"center",padding:"30rpx 0"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.navTo("/pages/integralPages/statisticsList/fishCurrency")}}},[t("v-uni-view",{staticClass:"progress-box"},[t("v-uni-view",{staticStyle:{flex:"1"}},[e._v("鱼币交易")]),t("v-uni-view",{staticClass:"progress fish-progress"},[t("v-uni-view",{staticClass:"fish",style:{width:e.fishWidth+"%"}},[e._v("卖出"+e._s(e._f("numFilter")(e.fishTrade.outputBalance)))]),t("v-uni-text",[e._v("买入"+e._s(e._f("numFilter")(e.fishTrade.incomeBalance)))])],1)],1)],1),t("v-uni-view",{staticStyle:{display:"flex","justify-content":"center",padding:"30rpx 0"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.navTo("/pages/integralPages/statisticsList/team")}}},[t("v-uni-view",{staticClass:"progress-box"},[t("v-uni-view",{staticStyle:{flex:"1"}},[e._v("团队人数")]),t("v-uni-view",{staticClass:"progress team-progress"},[t("v-uni-view",{staticClass:"team-people",style:{width:e.teamPeopleWidth+"%"}},[e._v("有效"+e._s(e.teamPeople.Effective))]),t("v-uni-text",[e._v("无效"+e._s(e.teamPeople.Invalid))])],1)],1)],1),t("v-uni-view",{staticStyle:{display:"flex","justify-content":"center",padding:"30rpx 0"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.navTo("/pages/integralPages/statisticsList/teamAchievement")}}},[t("v-uni-view",{staticClass:"progress-box"},[t("v-uni-view",{staticStyle:{flex:"1"}},[e._v("团队业绩")]),t("v-uni-view",{staticClass:"progress achievement-progress"},[t("v-uni-view",{staticClass:"team-achievement",style:{width:e.teamAchievementWidth+"%"}},[e._v("达成"+e._s(e.teamCahievement.Achieved))]),t("v-uni-text",[e._v("剩余"+e._s(e.teamCahievement.NotAchieved))])],1)],1)],1)],1),t("v-uni-view",{staticStyle:{height:"100rpx"}}),t("Footer",{attrs:{num:e.num}})],1)},n=[];t.d(i,"b",(function(){return s})),t.d(i,"c",(function(){return n})),t.d(i,"a",(function(){return a}))},"821c":function(e,i,t){"use strict";t.r(i);var a=t("492b"),s=t("e6fa");for(var n in s)"default"!==n&&function(e){t.d(i,e,(function(){return s[e]}))}(n);t("ef23");var o,r=t("f0c5"),v=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"95204452",null,!1,a["a"],o);i["default"]=v.exports},"90fb":function(e,i,t){var a=t("24fb");i=a(!1),i.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.vip-box .progress-box[data-v-95204452]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;padding:0 %?30?%}.vip-box .progress-box > uni-view[data-v-95204452]{font-size:%?26?%;color:#414141}.vip-box .progress-box .progress[data-v-95204452]{-webkit-box-flex:4;-webkit-flex:4;flex:4;width:100%;height:%?36?%;background-color:#d8d8d8;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?36?%}.vip-box .progress-box .progress > uni-view[data-v-95204452]{font-size:%?22?%;color:#fff;padding-left:%?10?%;border-radius:%?36?%;height:100%;line-height:%?36?%;color:#fff;background-color:#606060;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vip-box .progress-box .progress .consumption[data-v-95204452]{background-color:#606060}.vip-box .progress-box .progress .fish[data-v-95204452]{background-color:#dfa15a}.vip-box .progress-box .progress .team-people[data-v-95204452]{background-color:#85b0e1}.vip-box .progress-box .progress .team-achievement[data-v-95204452]{background-color:#897171}.vip-box .progress-box .progress > uni-text[data-v-95204452]{font-size:%?22?%;color:#434343;margin-left:%?10?%;height:100%;line-height:%?36?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vip-box .progress-box .fish-progress[data-v-95204452]{background-color:#f5dec6}.vip-box .progress-box .team-progress[data-v-95204452]{background-color:#cdddef}.vip-box .progress-box .achievement-progress[data-v-95204452]{background-color:#c6b8b8}.vip-box .list-box[data-v-95204452]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?20?%;padding:%?30?% 0}.vip-box .list-box > uni-view[data-v-95204452]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.vip-box .list-box > uni-view uni-image[data-v-95204452]{width:%?70?%;height:%?70?%}.vip-box .list-box > uni-view uni-text[data-v-95204452]{display:block;text-align:center}.vip-box .list-box > uni-view .vip-list-name[data-v-95204452]{color:#7b7b7b;font-size:%?26?%}.vip-box .list-box > uni-view .num[data-v-95204452]{font-size:%?22?%;color:#000;font-weight:700}.vip-box .list-second[data-v-95204452]{display:-webkit-box;display:-webkit-flex;display:flex;border-top:%?10?% solid #f5f5f5;border-bottom:%?10?% solid #f5f5f5;padding:%?30?% 0}.vip-box .list-second > uni-view[data-v-95204452]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.vip-box .list-second > uni-view .price[data-v-95204452]{font-size:%?26?%;font-weight:700;margin-top:%?18?%}.vip-box .list-second > uni-view .image-box[data-v-95204452]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.vip-box .list-second > uni-view .image-box > uni-text[data-v-95204452]{margin-left:%?20?%;font-size:%?28?%;color:#7b7b7b}.vip-box .list-second > uni-view .image[data-v-95204452]{height:%?40?%;width:%?50?%}.vip-box .list-second > uni-view .image2[data-v-95204452]{width:%?37?%;height:%?32?%;margin-top:16px}.vip-box .list-second > uni-view .one[data-v-95204452]{font-size:%?28?%;color:#7b7b7b}',""]),e.exports=i},a35c:function(e,i,t){var a=t("90fb");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=t("4f06").default;s("32fc7df0",a,!0,{sourceMap:!1,shadowMode:!1})},c27b:function(e,i,t){"use strict";(function(e){var a=t("ee27");t("b680"),t("acd8"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("96cf");var s=a(t("c964")),n=a(t("f905")),o={components:{Footer:n.default},data:function(){return{num:2,isSueObj:{},price:{},number:{},trade:{},fishTrade:{},teamPeople:{},teamCahievement:{},consumptionWidth:"",fishWidth:"",teamPeopleWidth:"",teamAchievementWidth:""}},onLoad:function(){this.getTotal()},methods:{getTotal:function(){var i=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={action:"FishStatistics"},t.next=3,i.$api.api.total(a);case 3:s=t.sent,1==s.data.status&&(e("log",s," at pages/user/vipData.vue:172"),i.isSueObj=s.data.issue,i.price=s.data.price,i.number=s.data.number,i.trade=s.data.trade,i.fishTrade=s.data.fishTrade,i.teamPeople=s.data.teamPeople,i.teamCahievement=s.data.teamCahievement,i.fishWidth=100*(i.fishTrade.outputBalance/i.fishTrade.incomeBalance).toFixed(2),i.teamPeopleWidth=i.teamPeople.Effective/i.teamPeople.Invalid*100,i.teamAchievementWidth=i.teamCahievement.Achieved/i.teamCahievement.NotAchieved*100,i.consumptionWidth=parseFloat(i.trade.xianjinAmount)/parseFloat(i.trade.yueAmount)*100);case 5:case"end":return t.stop()}}),t)})))()},navTo:function(e){uni.navigateTo({url:e})}},filters:{numFilter:function(e){var i="";return i=isNaN(e)||""===e?"--":parseFloat(e).toFixed(2),i}}};i.default=o}).call(this,t("0de9")["log"])},e6fa:function(e,i,t){"use strict";t.r(i);var a=t("c27b"),s=t.n(a);for(var n in a)"default"!==n&&function(e){t.d(i,e,(function(){return a[e]}))}(n);i["default"]=s.a},ef23:function(e,i,t){"use strict";var a=t("a35c"),s=t.n(a);s.a}}]);