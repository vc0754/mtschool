<template>
<div>
  <div class="account">
    <div class="user-head" v-bind:style="{backgroundImage:'url(' + baseUrl + user.thumbnail + ')'}"></div>
    <h1>{{ user.name }}</h1>
  </div>

  <ul>
    <li>
      <router-link to="/my/flower">
        <i class="icon icon9"></i>
        <span>{{ user.flowers }}</span>
      </router-link>
    </li>
    <li>
      <router-link to="/my/level">
        <i class="icon icon10"></i>
        <span>LV {{ user.level }}</span>
      </router-link>
    </li>
  </ul>

  <ul>
    <li>
      <router-link to="/my/payment">
        <i class="icon icon1"></i>
        <span>支付平台</span>
      </router-link>
    </li>
    <li>
      <router-link to="/my/shuttle">
        <i class="icon icon2"></i>
        <span>代接送</span>
      </router-link>
    </li>
    <li>
      <router-link to="/my/scane">
        <i class="icon icon3"></i>
        <span>扫一扫打卡</span>
      </router-link>
    </li>
  </ul>

  <ul>
    <li>
      <router-link to="/my/family">
        <i class="icon icon4"></i>
        <span>邀请家人</span>
      </router-link>
    </li>
    <li>
      <router-link to="/my/cards">
        <i class="icon icon5"></i>
        <span>绑定考勤卡</span>
      </router-link>
    </li>
    <li>
      <router-link to="/my/level">
        <i class="icon icon6"></i>
        <span>我的等级</span>
      </router-link>
    </li>
    <li>
      <router-link to="/mall">
        <i class="icon icon7"></i>
        <span>积分商城</span>
      </router-link>
    </li>
  </ul>

  <ul>
    <li>
      <router-link to="/my/setting">
        <i class="icon icon8"></i>
        <span>设置</span>
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'My',
  computed: mapState({ user: state => state.user }),
  data () {
    return {
      baseUrl: this.$http.defaults.baseURL
    }
  }
}
</script>

<style lang="less" scoped>
.account {
  background-color: #3fdab8;
  padding: 23px 15px 24px;

  .user-head {
    background-color: #fff;
    float: left;
    width: 64px; height: 64px; border-radius: 50%;
    overflow: hidden;

    background-origin:content;
    background-position:50% 50%;
    background-size:cover;
    background-repeat:no-repeat;
  }
  h1 {
    color: #fff;
    font-size: 18px;
    padding-left: 80px;
    margin: 0;
    line-height: 64px;
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}

ul {
  background-color: #fff;
  margin: 15px 0;
  li {
    border-bottom: solid 1px #ddd;
    a {
      padding: 10px 35px 10px 20px;
      display: block;

      display:-webkit-flex; display:flex;
      flex-direction:row;
      align-items:center;

      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%2060%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'm60%2061.5-38.25%2038.25-9.75-9.75%2029.25-28.5-29.25-28.5%209.75-9.75z'%20fill%3D'%23c7c7cc'%2F%3E%3C%2Fsvg%3E");
      background-size: 10px 20px;
      background-repeat: no-repeat;
      background-position: 95% center;
      background-position: -webkit-calc(100% - 15px) center;
      background-position: calc(100% - 15px) center;

      .icon {
        margin-right: 15px;
      }
    }
    &:last-child {
      border-bottom: none;
    }
  }
}

.account + ul {
  margin: 0;
  overflow: hidden;

  li {
    float: left;
    width: 50%;
    text-align: center;
    border-bottom: none;

    a {
      color: #40b69d;
      font-size: 13px;
      padding: 15px 15px 10px;
      
      display:-webkit-flex; display:flex;
      flex-direction:column;
      justify-content:center;

      background-image: none;

      .icon {
        margin-right: 0px;
        margin-bottom: 8px;
        display: block;
      }
    }
  }
}

.icon { background-image:url('../assets/myIcon.jpg'); background-size:1000%; width:26px; height:26px;}
.icon2 { background-position-x:900%;}
.icon3 { background-position-x:800%;}
.icon4 { background-position-x:700%;}
.icon5 { background-position-x:600%;}
.icon6 { background-position-x:500%;}
.icon7 { background-position-x:400%;}
.icon8 { background-position-x:300%;}
.icon9 { background-position-x:200%;}
.icon10 { background-position-x:100%;}
</style>
