<template>
<div class="views">
  <navbar>
    <div @click="goBack" slot="left">
      <i class="icon icon21">后退</i>
    </div>

    <div slot="center">
      <span>登陆</span>
    </div>
  </navbar>
  
  <div class="login-page">
    <div class="login-header">
      使用手机登陆
    </div>
    <form class="login-content" v-on:submit.prevent="submit">
      <ul>
        <li>
          <div v-show="isSubmit && !form.phone">手机号码不能为空</div>
          <span>+86</span>
          <input type="number" placeholder="输入您的手机号码" maxlength="11" v-model="form.phone">
          <span class="btn">获取验证码</span>
        </li>
        <li>
          <div v-show="isSubmit && !form.vcode">短信验证码不能为空</div>
          <input type="text" placeholder="输入短信验证码" maxlength="6" v-model="form.vcode">
        </li>
        <li>
          <button>登录</button>
        </li>
      </ul>
    </form>
    <p>测试手机号：123456789 / 987654321</p>
  </div>
</div>
</template>

<script>
import navbar from '@/view/ui/NavBar'
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '@/store/modules/user'

export default {
  name: 'LoginView',
  components: { navbar },
  methods: {
    ...mapActions([USER_SIGNIN]),
    submit () {
      this.isSubmit = true
      if (!this.form.phone || !this.form.vcode) return
      this.$store.dispatch('USER_SIGNIN', this.form).then((ret) => {
        if (ret.errcode) {
          window.console.log(ret.errmsg)
        } else {
          this.$router.replace({ path: '/app/home' })
        }
      })
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  data () {
    return {
      isSubmit: false,
      form: {
        phone: '',
        vcode: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
@main-color: #3fdab8;

.login-page {
  background-color:#fff; padding:15px; margin:6px;

  .login-header { padding-bottom:15px; border-bottom:solid 1px #ddd;}
  .login-content {
    padding:10px 0 0 0;
      
    li {
      position:relative; padding:10px 0;
      border-bottom:solid 1px #ddd;
      
      > div:first-child {
        padding:3px 10px; background-color:#fff;
        position:absolute; top:-15px; left:10%; border:dotted 1px @main-color; border-radius:8px;
      }

      span {
        font-size:15px; position:absolute; top:20px;
      }
      
      input {
        font-size:15px; width:100%; padding:10px 10%; border:none;
      }

      .btn {
        font-size:12px;
        background-color:@main-color; color:#fff;
        padding:8px 12px;
        top:13px; right:0;
        border:none; border-radius:10px;
      }

      button {
        font-size: 14px;
        background-color:@main-color; color:#fff;
        padding:8px 35px;
        border:none; border-radius:10px;
      }

      &:last-child {
        border:none;
      }
    }
  }
}
</style>
