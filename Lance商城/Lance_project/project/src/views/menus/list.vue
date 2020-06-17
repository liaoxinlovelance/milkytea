<template>
  <div>
    <van-tree-select height="170vw" :items="items" :main-active-index.sync="active">
      <template #content>
        <!-- <van-image v-if="active === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <van-image v-if="active === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />-->
        <div v-if="active === 0">
          <van-card
            price="1.00"
            desc="默认：大/无奶油/热"
            title="陨石拿铁"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #tags>
              <van-tag plain type="danger">标签</van-tag>
              <van-tag plain type="danger">标签</van-tag>
            </template>
            <template #footer>
              <van-button size="mini" icon="plus" round></van-button>
            </template>
          </van-card>
        </div>
        <div v-if="active === 1">
          <van-card
            price="2.00"
            desc="默认：大/无奶油/热"
            title="陨石拿铁"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #tags>
              <van-tag plain type="danger">标签</van-tag>
              <van-tag plain type="danger">标签</van-tag>
            </template>
            <template #footer>
              <van-button size="mini" icon="plus" round></van-button>
            </template>
          </van-card>
        </div>
      </template>
    </van-tree-select>
    <van-tabbar v-model="active" route="true">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/menus/list">菜单</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shoppingtrolley/list">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user/list">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [
        { text: "人气Top" },
        { text: "经典拿铁" },
        { text: "大师咖啡" },
        { text: "瑞纳冰" },
        { text: "水果很好喝" },
        { text: "小鹿茶精选" },
        { text: "小食很好吃" },
        { text: "NFC果汁" },
        { text: "瑞幸坚果" },
        { text: "甄选酸奶" },
        { text: "经典饮品" },
        { text: "周边潮品" }
      ]
    };
  }
};
</script >

<style scoped>
</style>