<template>
  <div id="big">
   <div id="from">
    
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="text-align: right;"><a :href="'#'" style="color:blue; font-size: 9px;">没有账号注册一下?</a></div>
      <div style="margin: 16px;"> 
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>

<style>
#big{
    width: 100vw;
    height: 100vh;
    background: rgb(236, 240, 240);
    overflow: hidden;
   
}
#from{
    width: 80vw;
    height: 40vh;
    margin: 0 auto;
    position: relative;
    top: 30vh;
}
</style>

