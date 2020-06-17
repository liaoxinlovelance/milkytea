<template>
  <div>
    <div><van-empty description="您的购物车为空，快去添加吧~" /></div>
    <div>
      <van-tabbar v-model="active" route="true">
        <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="orders-o" to="/menus/list">菜单</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/shoppingtrolley/list">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/user/list">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
};
</script>

<style scoped>
</style>