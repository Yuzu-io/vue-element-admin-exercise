<template>

  <body id="poster">
    <el-form class="login-container"
             label-position="left"
             label-width="0px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input type="text"
                  v-model="loginForm.username"
                  auto-complete="off"
                  placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password"
                  v-model="loginForm.password"
                  auto-complete="off"
                  placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary"
                   class="login_btn"
                   v-on:click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </body>
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
          console.log(res);
          if (res.code === 200) {
            this.$router.push({ path: '/index' })
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
}
</script>

<style scoped>
#poster {
  background: url("../../../assets/img/win.jpg") no-repeat;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  position: fixed;
}
.login-container {
  width: 350px;
  background-color: #fff;
  margin: 90px auto;
  padding: 35px 35px 15px 35px;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  border-radius: 15px;
}
.login_title {
  font-size: 24px;
  font-weight: bold;
  color: #505458;
  text-align: center;
  margin: 0 auto 40px;
}
.login_btn {
  width: 100%;
  background-color: #505458;
  border: none;
}
</style>