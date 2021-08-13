<template>
  <div>
    用户名：<input type="text"
           v-model="loginForm.username"
           placeholder="请输入用户名">
    <br>
    密码：<input type="text"
           v-model="loginForm.password"
           placeholder="请输入密码">
    <br>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { getLogin } from '../../../api/login';

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
     
      getLogin(this.loginForm)
        .then(res => {
          // console.log(res);
          if (res.code === 200) {
            this.$router.push({ path: '/index' })
          }
        })
        .catch(err=>{
          console.log(err);
        })
    }
  },
}
</script>

<style scoped>
</style>