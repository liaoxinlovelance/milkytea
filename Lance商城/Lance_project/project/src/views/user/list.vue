<template>
  <div>
    <div id="head">
      <div id="backdrop">
        <div class="xiaoxin">
          <van-icon color="white" name="chat-o" style="margin: 0vw 2vh;" />
        </div>
        <div class="touxiang">
          <van-image round width="3rem" height="3rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <span style="color:white;">{{name}}</span>
        </div>
      </div>
      <div id="card">
         <div id="table">
            <ul class="blue">
              <li>0元</li>
              <li>0张</li>
              <li>3张</li>
              <li>0张</li>
            </ul>
            <ul>
              <li>账户余额</li>
              <li>钱包</li>
              <li>优惠券</li>
              <li>礼品卡</li>
            </ul>
         </div>
      </div>
    </div>
    <div id="main">
      <van-cell is-link title="我的订单" @click="show = true"  icon="label-o"/>
      <van-cell is-link title="发票管理" @click="show = true"  icon="balance-list-o"/>
      <van-cell is-link title="兑换优惠" @click="show = true"  icon="balance-pay"/>
      <van-cell is-link title="企业账户" @click="show = true"  icon="friends-o"/>
      <van-cell is-link title="我的客服" @click="show = true"  icon="phone-o"/>
    </div>
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
  data() {
    return {
      name: "lance"
    };
  }
};
</script>

<style scoped>
* {
  margin: 0 0;
  padding: 0 0;
}
#head {
  width: 100vw;
  height: 28vh;
  /* background: rgb(204, 199, 199); */
  overflow: hidden;
}
#backdrop {
  width: 100vw;
  height: 20vh;
  background: rgba(115, 78, 150, 0.904);
  border-radius: 0vw 0vh 9vw 5vh;
}

#backdrop .xiaoxin {
  width: 100vw;
  height: 6vh;

  text-align: right;
  line-height: 7vh;
}
#backdrop .touxiang {
  width: 100vw;
  height: 15vh;
  /* background: rgba(211, 49, 49, 0.904); */
  padding: 0vh 3vw;
}
#card {
  width: 96vw;
  height: 10vh;
  margin: 0 auto;
  background: rgba(158, 218, 47, 0.904);
  border-radius: 7px 7px;
  position: relative;
  top: -3vh;
}
#table{
  width: 96vw;
  height: 10vh;
  margin: 0 auto;
  background: rgba(255, 253, 254, 0.904);
  overflow: hidden;
  border-radius: 7px 7px;
}
#table ul{
  width: 100%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  justify-content:space-between;
  
}
#table ul li{
  float: left;
  margin: 0vh 4vw;
  font-size: 14px;
}
#table .blue li{
margin: 1vh 8vw;
color: blue;
}
#main{
  width: 96vw;
  height: 30vh;
  margin: 0 auto;
  overflow: hidden;
}
</style>