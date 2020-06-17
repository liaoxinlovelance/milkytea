<template>
  <div id="big">
    <div>
      <van-nav-bar title="商品详情" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="share" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <div id="picture">
      <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div id="title">
      <ul>
        <li>陨石拿铁</li>
        <li style="font-size: 11px;">Brown Sugar BoBo Latte</li>
      </ul>
      <ul>
        <li>
          <van-stepper v-model="value" theme="round" button-size="22" disable-input />
        </li>
      </ul>
    </div>
    <div id="select">
      <van-field name="radio1" label="温度">
        <template #input>
          <van-radio-group v-model="radio1" direction="horizontal">
            <van-radio name="1">冰</van-radio>
            <van-radio name="2">温热</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="radio2" label="加料">
        <template #input>
          <van-radio-group v-model="radio2" direction="horizontal">
            <van-radio name="1">补丁</van-radio>
            <van-radio name="2">波霸</van-radio>
            <van-radio name="3">珍珠</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="radio3" label="糖度">
        <template #input>
          <van-radio-group v-model="radio3" direction="horizontal">
            <van-radio name="1">全糖</van-radio>
            <van-radio name="2">半糖</van-radio>
          </van-radio-group>
        </template>
      </van-field>
    </div>
    <div id="content">
      <div>商品详情</div>
      <div>
        <ul>
          <li>经典意式奶油，浓缩咖啡与香醇牛奶融合，口感圆润</li>
          <li>经典意式奶油，浓缩咖啡与香醇牛奶融合，口感圆润</li>
          <li>经典意式奶油，浓缩咖啡与香醇牛奶融合，口感圆润</li>
        </ul>
      </div>
    </div>

    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio1: "1",
      radio2: "1",
      radio3: "1",
      value: "1"
    };
  }
};
</script>

<style scoped>
#big {
  background: rgb(235, 236, 236);
}
#picture {
  width: 100vw;
  height: 40vh;
}
#title {
  width: 96vw;
  height: 10vh;
  margin: 6px auto;
  background: rgb(252, 250, 250);
  border-radius: 7px 7px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  line-height: 3vh;
}
#title ul {
  margin: 0% 4%;
  position: relative;
  top: 3vh;
}
#select {
  width: 96vw;
  height: 26vh;
  margin: 6px auto;
  background: rgb(252, 250, 250);
  border-radius: 7px 7px;
  overflow: hidden;
}
.van-cell{
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding:3% 3%;
    overflow: hidden;
    color: #323233;
    font-size: 13px;
    line-height: 4vh;
    background-color: #fff;
}
#content{
  width: 96vw;
  height: 26vh;
  margin: 6px auto;
  background: rgb(252, 250, 250);
  border-radius: 7px 7px;
  overflow: hidden;
}
#content div{
    margin: 6px auto;
}
#content div ul li{
    font-size: 13px;
}
</style>