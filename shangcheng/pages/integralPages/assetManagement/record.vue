<template>
  <view class="content">
    <!-- 头部区域 -->
    <view class="common head">
      <view style="flex: 1">序号</view>
      <view style="flex: 1">金额</view>
      <view style="flex: 2">状态</view>
      <view style="flex: 2">申请时间</view>
    </view>
    <view class="head-copy"></view>
    <view class="list"
          v-if="isList">
      <view class="common list-item"
            v-for="(item, index) in list"
            :key="index">
        <view style="flex: 1">{{index + 1}}</view>
        <view style="flex: 1">{{item.Amount | numFilter}}</view>
        <view style="flex: 2"
              :class="item.IsCheck == -1 ? 'fails':''">{{item.IsCheck | IsCheck}}</view>
        <view style="flex: 2; line-height:1.4; font-size: 26rpx;">{{item.RequestTime}}</view>
      </view>
    </view>
    <view v-else
          class="no-list">暂无数据</view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      // 交易数据列表
      list: [],
      // 分页
      page: {
        // 当前页码
        pageIndex: 0,
        // 当前页面展示的数据条数
        pageSize: 20
      },
      // 数据总条数
      total: '',
      // 节流阀
      flag: true,
      // 底部的数据
      footerObj: '',
      // 是否有数据列表
      isList: true,
      // 0 是表示 FC 提现记录 1 是表示余额提现记录
      type: '',
      action: ''
    };
  },
  onLoad (options) {
    this.type = options.type
    if (this.type == 0) {
      // 查询FC提现明细接口
      this.action = 'ReadTiXian'
      // this.getTransactionDetails()
    } else if (this.type == 1) {
      // 查询余额提现明细接口
      this.action = 'ReadYuETiXian'
      // this.getBalance()
    }
    this.getTransactionDetails()
  },
  // 监听页面滚动到底部的事件
  onReachBottom () {
    this.page.pageIndex += 1
    if (this.flag) {
      if (this.type == 0) {
        this.action = 'ReadTiXian'
        // this.getTransactionDetails()
      } else if (this.type == 1) {
        // this.getBalance()
        this.action = 'ReadYuETiXian'
      }
      this.getTransactionDetails()
    } else {
      this.$api.msg('没有更多数据了', 1500, true, 'none');
    }
  },
  methods: {
    // 查询FC提现明细接口
    async getTransactionDetails () {
      let result = {}
      result = {
        Offset: this.page.pageIndex,
        RowNumber: this.page.pageSize,
        UserId: uni.getStorageSync('UserId')
      }
      result = JSON.stringify(result)
      let data = {
        action: this.action,
        data: result
      }
      let res = await this.$api.api.orderList(data)
      if (res.data.status == true) {
        this.total = res.data.sum
        this.flag = true
        this.list.push(...res.data.data);
        if (this.list.length == 0) {
          this.isList = false
        } else {
          this.isList = true
        }
        if (this.total == this.list.length) {
          this.flag = false
        }
      }
    }
  },
  filters: {
    // IsCheck 0 审核中 -1 驳回  成功
    IsCheck (val) {
      let result = ''
      if (val == 0) {
        return result = '审核中'
      }
      if (val == -1) {
        return result = '驳回'
      }
      if (val == 1) {
        return result = '已审核'
      }
      if (val == 2) {
        return result = '已发放'
      }
      if (val == 3) {
        return result = '发放异常'
      }
    }
  }
};
</script>
<style>
page {
  background-color: #f5f5f5;
}
</style>
<style lang="scss">
.head {
  position: fixed;
  width: 100%;
  background-color: #223041;
  > view {
    color: #fff;
  }
}
.head-copy {
  height: 80rpx;
}
.no-list {
  font-size: 40rpx;
  text-align: center;
  font-weight: 600;
  background-color: #fff;
  padding: 30rpx 0;
}
.common {
  height: 80rpx;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  > view {
    text-align: center;
    width: 25%;
  }
}
.list-item {
  margin-bottom: 10rpx;
  background-color: #fff;
  .fails {
    color: #d65050;
  }
}
</style>