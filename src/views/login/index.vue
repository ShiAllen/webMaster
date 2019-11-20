<template>
  <el-container class="login-container">
    
    <el-card class="animated flipInY">
      <div slot="header" class="el-card-header">
        <lang-select class="lang-select"></lang-select>
        <div style="clear: both;"></div>
        <img id="logoimg" src="../../../static/image/NCUT_LOGO.png" alt="勤益科大">
        <h2 class="login-title">{{$t('login.title')}}</h2>
      </div>
      <el-form :rules="rules" :model="loginForm" ref="loginForm" label-width="60px">
        <el-form-item :label="$t('login.account')" prop="username" style="position:relative">
          <el-input type="text" v-model="loginForm.username" @keyup.enter.native="goToPwdInput"></el-input>
          <span class="svg-container svg-container_user">
            <svg-icon icon-class="user" />
          </span>
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="pwd">
          <el-input type="password" v-model="loginForm.pwd" @keyup.enter.native="onLogin" ref="pwd"></el-input>
          <span class="svg-container svg-container_password">
            <svg-icon icon-class="password" />
          </span>
        </el-form-item>
        <el-form-item :label="$t('login.remember')" label-width="80px">
          <el-switch v-model="remember"></el-switch>
        </el-form-item>
        <el-button type="primary" @click="onLogin('loginForm')" :loading="loading">{{$t('login.login')}}</el-button>
      </el-form>
    </el-card>
    
    <div id="particles"></div>
  </el-container>
</template>
<script>
  // import { isValidUsername } from '@/utils/validate'
  import LangSelect from '@/components/lang-select'
  import { saveToLocal, loadFromLocal } from '@/common/local-storage'
  import { mapActions } from 'vuex'
  /* eslint-disable*/
  //import particles from 'particles.js'
  export default {
    components: {
      LangSelect
    },
    data() {
      // username 验证
      const validateUsername = (rule, value, callback) => {
      //  if (!isValidUsername(value)) {
        if (value.length < 4) {
          callback(new Error('請輸入單簽E化平台帳號'))
        } else {
          callback()
        }
      }
      // pwd 验证
      const validatePwd = (rule, value, callback) => {
        if (value.length < 4) {
          callback(new Error('請輸入單簽E化平台密碼'))
        } else {
          callback()
        }
      }
      return {
        // 粒子开关       // toggleParticles: false,
        loginForm: {
          username: 'admin',
          pwd: '123456'
        },
        remember: false,
        loading: false,
        rules: {
          username: [
            { required: true, message: '請輸入帳號', trigger: 'blur' },
            { required: true, trigger: 'blur', validator: validateUsername },
            { required: true, trigger: 'change', validator: validateUsername }
          ],
          pwd: [
            { required: true, message: '請輸入密碼', trigger: 'blur' },
            { required: true, trigger: 'blur', validator: validatePwd },
            { required: true, trigger: 'change', validator: validatePwd }
          ]
        }
      }
    },
    created() {
      // 初始化时读取localStorage用户信息
      if (loadFromLocal('remember', false)) {
        this.loginForm.username = loadFromLocal('username', '')
        this.loginForm.pwd = loadFromLocal('password', '')
      } else {
        this.loginForm.username = ''
        this.loginForm.pwd = ''
      }
    },
    methods: {
      // 調用 Action login
      ...mapActions([
        'login'
      ]),

      // 用户名输入框回车后切换到密码输入框
      goToPwdInput() {
        this.$refs.pwd.$el.getElementsByTagName('input')[0].focus()
      },
      // 登录操作
      onLogin() {
        this.$refs.pwd.$el.getElementsByTagName('input')[0].blur()
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.login(this.loginForm).then(() => {
              // 保存账号
              if (this.remember) {
                saveToLocal('username', this.loginForm.username)
                saveToLocal('password', this.loginForm.pwd)
                saveToLocal('remember', true)
              } else {
                saveToLocal('username', '')
                saveToLocal('password', '')
                saveToLocal('remember', false)
              }
              this.$router.push({ path: '/' })
            }).catch(() => {
              this.loading = false
            })
          } else {
            return false
          }
        })
      },

    },
    watch: {
      
    },
    mounted() {
    //  this.accountTip()
    }
  }
</script>
<style scoped lang="stylus">
#logoimg{ width: 50%;    height: 50%;}
  .login-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: mix(#494166, #424b50) url('../../../static/image/photo.jpg') center no-repeat;
    background-size: cover;
    overflow: hidden;
    .show-account {
      position: absolute;
      left: 15px;
      bottom: 20px;
      color: red;
    }
    .el-card {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -300px 0 0 -200px;
      width: 400px;
      height: 450px;
      
      
       background:rgba(240,255,250,0.8);

      .el-card-header {
        text-align: center
        .lang-select {
          float right
        }
      }
      .login-title {
        margin: 0;
        text-align: center;
      }
      .el-input /deep/ .el-input__inner {
        text-indent: 12px;
      }
      .svg-container {
        position: absolute;
        top: 0;
        left: 5px;
        color: #889aa4;
        &_user {
          font-size: 20px;
        }
        &_password {
          left: 7px;
          font-size: 16px;
        }
      }
      .el-button--primary {
        width: 100%;
      }
    }
  }
  #particles {
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
</style>
