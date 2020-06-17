<template>
  <van-skeleton title avatar :row="6" :loading="loading">
    <div id="big">
      <!-- 居中 -->
      <!-- 轮播 和 优惠 -->
      <div id="head">
        <div id="carousel_top">
          <div id="carousel_main">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item v-for="(item ,index ) in lunbo" :key="index">
                <van-image
                  width="100%"
                  height="100%"
                  src=BASE_URL + item.teaPicture

                />
              </van-swipe-item>
              <!-- <van-swipe-item>
                <van-image
                  width="100%"
                  height="100%"
                  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2970205932,2258812687&fm=15&gp=0.jpg"
                />
              </van-swipe-item>
              <van-swipe-item>
                <van-image
                  width="100%"
                  height="100%"
                  src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1440069567,4165131812&fm=15&gp=0.jpg"
                />
              </van-swipe-item>
              <van-swipe-item>
                <van-image
                  width="100%"
                  height="100%"
                  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2402840189,2506409325&fm=26&gp=0.jpg"
                />
              </van-swipe-item> -->
            </van-swipe>
          </div>
        </div>
        <!-- <div id="classify_back"></div> -->
        <div id="center">
          <div id="classify">
            <div class="classify_top">
              <div class="classify_top_left">
                <van-image
                  width="100%"
                  height="100%"
                  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3527121840,3486402296&fm=26&gp=0.jpg"
                />
              </div>
              <div class="classify_top_right">
                <div>
                  <van-image
                    width="100%"
                    height="100%"
                    src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3527121840,3486402296&fm=26&gp=0.jpg"
                  />
                </div>
                <div>
                  <van-image
                    width="100%"
                    height="100%"
                    src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3527121840,3486402296&fm=26&gp=0.jpg"
                  />
                </div>
              </div>
            </div>
            <div class="classify_footer">
              <div>
                <van-image
                  width="100%"
                  height="100%"
                  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3527121840,3486402296&fm=26&gp=0.jpg"
                />
              </div>
              <div>
                <van-image
                  width="100%"
                  height="100%"
                  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3527121840,3486402296&fm=26&gp=0.jpg"
                />
              </div>
              <div>
                <van-image
                  width="100%"
                  height="100%"
                  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3527121840,3486402296&fm=26&gp=0.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 为你推荐 -->

      <div id="recommend">
        <div id="recommend_title">为你推荐</div>
        <div class="recommend_for">
          <div v-for="(item ,index ) in recommend" :key="index">
            <dl>
              <dt>
                <van-image width="100%" height="100%" lazy-load :src="item.picture" fit="fill" />
              </dt>
              <dd>{{item.name}}</dd>
              <dd>
                <span style="color:red; font-size: 8px;">￥{{item.price}}</span>
                <button
                  style="width:17px;height:17px;border: none; border-radius: 17px; background:#67686b; color:rgb(255, 255, 255);; font-weight: 700;"
                >+</button>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <!-- 新鲜事 -->
      <div id="novelty">
        <div class="title">新鲜事</div>
        <div class="box">
          <van-swipe :loop="false" :width="300" :height="100">
            <van-swipe-item>
              <van-image
                width="98%"
                height="100%"
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3527121840,3486402296&fm=26&gp=0.jpg"
              />
            </van-swipe-item>
            <van-swipe-item>
              <van-image
                width="98%"
                height="100%"
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3053118362,2181581770&fm=26&gp=0.jpg"
              />
            </van-swipe-item>
            <van-swipe-item>
              <van-image
                width="98%"
                height="100%"
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1014577103,2740918201&fm=26&gp=0.jpg"
              />
            </van-swipe-item>
            <van-swipe-item>
              <van-image
                width="98%"
                height="100%"
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=129259487,2336482665&fm=26&gp=0.jpg"
              />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <!-- 潮品 -->
      <div id="shop">
        <div class="title">
          <div>潮品</div>
          <div class="more">
            <a>更多>></a>
          </div>
        </div>
        <div class="box">
          <div v-for="(item,index) in shops" :key="index" class="box_for">
            <dl>
              <dt>
                <van-image width="100%" height="100%" lazy-load :src="item.picture" fit="fill" />
              </dt>
              <dd style="color:#000; font-size: 12px;">{{item.name}}</dd>
              <dd class="box_dd">
                <span style="color:red; font-size: 8px;">￥{{item.price}}</span>
                <button
                  style="width:17px;height:17px;border: none; border-radius: 17px; background:#67686b; color:rgb(255, 255, 255);; font-weight: 700;"
                >+</button>
              </dd>
              <dd style="color:#828080; font-size: 8px;">已售卖{{item.sale}}件</dd>
            </dl>
          </div>
        </div>
      </div>

      <!-- 下导航 -->
      <div id="xiadaohang"></div>
      <van-tabbar v-model="active" route="true">
        <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="orders-o" to="/menus/list">菜单</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/shoppingtrolley/list">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/user/list">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </van-skeleton>
</template>

 
<script>
import Vue from "vue";
import { Lazyload } from "vant";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Lazyload);
export default {
  data() {
    return {
      loading: true,
      lunbo:[],
      recommend: [
        {
          name: "陨石拿铁",
          price: "16.8",
          picture:
            "http://img4.imgtn.bdimg.com/it/u=3048918120,2723662442&fm=26&gp=0.jpg",
          id: "1"
        },
        {
          name: "拿铁",
          price: "13.75",
          picture:
            "http://img5.imgtn.bdimg.com/it/u=2033928687,973729946&fm=11&gp=0.jpg",
          id: "2"
        },
        {
          name: "冲绳黑糖拿铁",
          price: "16.8",
          picture:
            "http://img3.imgtn.bdimg.com/it/u=1221464985,3111183190&fm=26&gp=0.jpg",
          id: "3"
        },
        {
          name: "珍珠奶茶",
          price: "12.00",
          picture:
            "http://img0.imgtn.bdimg.com/it/u=3459509518,3389023500&fm=26&gp=0.jpg",
          id: "4"
        }
      ],
      active: 0,
      shops: [
        {
          name: "陨石拿铁",
          price: "16.8",
          sale: "1431",
          picture:
            "http://img4.imgtn.bdimg.com/it/u=3048918120,2723662442&fm=26&gp=0.jpg",
          id: "1"
        },
        {
          name: "陨石拿铁",
          price: "16.8",
          sale: "1431",
          picture:
            "http://img4.imgtn.bdimg.com/it/u=3048918120,2723662442&fm=26&gp=0.jpg",
          id: "1"
        },
        {
          name: "陨石拿铁",
          price: "16.8",
          sale: "1431",
          picture:
            "http://img4.imgtn.bdimg.com/it/u=3048918120,2723662442&fm=26&gp=0.jpg",
          id: "1"
        },
        {
          name: "陨石拿铁",
          price: "16.8",
          sale: "1431",
          picture:
            "http://img4.imgtn.bdimg.com/it/u=3048918120,2723662442&fm=26&gp=0.jpg",
          id: "1"
        },
        {
          name: "陨石拿铁",
          price: "16.8",
          sale: "1431",
          picture:
            "http://img4.imgtn.bdimg.com/it/u=3048918120,2723662442&fm=26&gp=0.jpg",
          id: "1"
        },
        {
          name: "陨石拿铁",
          price: "16.8",
          sale: "1431",
          picture:
            "http://img4.imgtn.bdimg.com/it/u=3048918120,2723662442&fm=26&gp=0.jpg",
          id: "1"
        }
      ]
    };
  },
  mounted() {
    this.loading = false;
  },
   created(){
     //
   }
};
</script>

<style scoped>
* {
  margin: 0 0;
  padding: 0 0;
}
#big {
  background: rgb(231, 231, 231);
}
/* 下导航 */
#xiadaohang {
  width: 100vw;
  height: 10vh;
}
#head {
  width: 100vw;
  height: 55vh;
  /* background: aquamarine; */
  overflow: hidden;
}
#carousel_top {
  width: 100vw;
  height: 50%;
  background: rgb(92, 67, 112);
  border-radius: 0 0 19px 19px;
}
#carousel_main {
  margin: 0 auto;
  width: 94vw;
  height: 80%;
  /* background: rgb(236, 128, 187); */
  border-radius: 19px;
  position: relative;
  top: 7%;
  overflow: hidden;
}
#center {
  margin: 0 auto;
  width: 94vw;
  height: 55%;
  background: rgb(255, 255, 255);
  border-radius: 7px 7px;
  position: relative;
  top: -5%;
  overflow: hidden;
}
#classify {
  margin: 0 auto;
  width: 94%;
  height: 94%;
  /* background: rgb(128, 233, 236); */
  /* border-radius: 19px; */
  position: relative;
  top: 3%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 22vh;
  text-align: center;
  background-color: #39a9ed;
  /* border-radius: 19px; */
}
#classify .classify_top {
  margin: 0 auto;
  width: 100%;
  height: 50%;
  /* background-color: #86ec7d; */
  display: flex;
  justify-content: space-between;
}
#classify .classify_top .classify_top_left {
  width: 66%;
  height: 95%;
  /* background-color: #e2f348; */
}
#classify .classify_top .classify_top_right {
  width: 32%;
  height: 95%;
  /*  background-color: #e2f348; */
}
#classify .classify_top .classify_top_right div {
  width: 100%;
  height: 46%;
  margin: 0 0 5% 0;
  /* background-color: #f8493d; */
}
#classify .classify_footer {
  margin: 0 auto;
  width: 100%;
  height: 50%;
  /* background-color: #e87dec; */
  display: flex;
  justify-content: space-between;
}
#classify .classify_footer div {
  width: 32%;
  height: 98%;
  background-color: #f05871;
}
/* 推荐 */
#recommend {
  margin: 5px auto;
  width: 94vw;
  height: 22vh;
  background-color: #fefeff;
  border-radius: 10px;
  overflow: hidden;
}
#recommend_title {
  margin: 0 auto;
  width: 88vw;
}
.recommend_for {
  margin: 0 auto;
  width: 88vw;
  height: 17vh;
  /*  background-color: #aa1a7f; */
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.recommend_for div {
  width: 24%;
  height: 100%;
  background-color: #fffbfb;
  overflow: hidden;
}
.recommend_for div dl {
  width: 100%;
  height: 100%;
}
.recommend_for div dl dt {
  width: 100%;
  height: 65%;
}
.recommend_for div dl dd {
  font-size: 10px;
  display: flex;
  justify-content: space-between;
}

/* 新鲜事 */
#novelty {
  margin: 0 auto;
  width: 94vw;
  height: 20vh;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
}

/* 潮品 */
#shop {
  margin: 5px auto;
  width: 100vw;
  height: 103vh;
  /* background: aquamarine; */
  overflow: hidden;
}
#shop .title {
  display: flex;
  justify-content: space-between;
}
#shop .title div {
  margin: 1vh 5vw;
  /*  font-size: 9px; */
}
#shop .title .more {
  font-size: 9px;
}
#shop .box {
  margin: 0 auto;
  width: 96vw;
  height: 97vh;
  /* background: rgb(252, 141, 38); */
  overflow: hidden;
}
#shop .box .box_for {
  float: left;
  margin: 1vh 1vw 1vh 2vw;
  width: 44vw;
  height: 30vh;
  background: rgb(253, 255, 253);
}
#shop .box .box_for dl {
  width: 44vw;
  height: 30vh;
  margin: 0 auto;
  overflow: hidden;
}
#shop .box .box_for dl dt {
  width: 44vw;
  height: 20vh;
  margin: 0 auto;
  overflow: hidden;
}
#shop .box .box_for dl .box_dd {
  display: flex;
  justify-content: space-between;
}
</style>
