<template>
  <div id="big">
    <div id="from">
      <van-cell-group>
        <van-field v-model="username" required label="用户名" placeholder="请输入用户名" />
        <!-- 输入密码 -->
        <van-field v-model="password1" required type="password" label="密码" placeholder="请输入密码" />
        <!-- 输入密码 -->
        <van-field v-model="password2" required type="password" label="密码" placeholder="请再次输入密码" />
        <van-field v-model="phone" required label="手机号" placeholder="请输入手机号" error-message />
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <template #button>
            <van-button size="small" type="primary" @click="authorized">发送验证码</van-button>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">注册</van-button>
        </div>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      phone: "",
      sms: "",
      password1: "",
      password2: ""
    };
  },
  methods: {
    
  }
};
</script>

<style>
#big {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
}
#from {
  width: 95vw;
  height: 52vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  top: 25vh;
}
</style>