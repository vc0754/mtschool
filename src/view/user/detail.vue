<template>
<div class="page">
  <navbar>
    <div @click="goBack" slot="left">
      <!-- <i class="icon"></i> -->
      <span>后退</span>
    </div>
  </navbar>

  <div class="account">
    <div class="user-head">
      <img :src="userHead">
    </div>
    <h1>{{ userName }}</h1>
  </div>
  
  <ul>
    <li class="link">
      <span>角色</span>
      <span class="item-after">家长</span>        
    </li>
  </ul>

  <ul>
    <li class="link">
      <span>班级</span>
      <span class="item-after">苹果一班</span>        
    </li>
  </ul>

  <ul>
    <li>
      <router-link :to="'/user/event/' + userID">
        <span>查看他的动态</span>
      </router-link>
    </li>
  </ul>

</div>
</template>

<script>
import navbar from '@/view/ui/NavBar'
export default {
  name: 'UserView',
  components: {
    navbar
  },
  data () {
    return {
      baseUrl: this.$http.defaults.baseURL,
      users: [
        {
          userID: 1,
          userName: '蒂脉科技演示账号',
          userHead: '/static/images/users/1.jpg'
        },
        {
          userID: 2,
          userName: '王园长',
          userHead: '/static/images/users/2.jpg'
        },
        {
          userID: 3,
          userName: '陈老师',
          userHead: '/static/images/users/3.jpg'
        }
      ]
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  computed: {
    userID () {
      return this.users[ this.$route.params.id - 1 ].userID
    },
    userName () {
      return this.users[ this.$route.params.id - 1 ].userName
    },
    userHead () {
      return this.users[ this.$route.params.id - 1 ].userHead
    }
  }
}
</script>

<style lang="less" scoped>
.account { background-color:#3fdab8; height:30%; padding:20px 15px;
  display:-webkit-flex; display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  .user-head { width:86px; height:86px; overflow:hidden; border-radius:50%; border: solid 1px #fff;}
  .user-head img { height:100%; position:relative; left:50%;
    transform: translate(-50%, 0);
  }
  h1 { font-size:18px; color:#fff;}
}

ul { background-color:#fff; margin:15px 0;}
.account + ul { margin-top:0;}
ul li { border-bottom:solid 1px #ddd;
  align-items:center;
}
ul li:last-child { border-bottom:none;}
ul li a { display:block; padding:10px 35px 10px 20px;
  display:-webkit-flex; display:flex;
  flex-direction:row;
  align-items:center;
  
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%2060%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'm60%2061.5-38.25%2038.25-9.75-9.75%2029.25-28.5-29.25-28.5%209.75-9.75z'%20fill%3D'%23c7c7cc'%2F%3E%3C%2Fsvg%3E");
  background-size: 10px 20px;
  background-repeat: no-repeat;
  background-position: 95% center;
  background-position: -webkit-calc(100% - 15px) center;
  background-position: calc(100% - 15px) center;
}
ul li.link { display:block; padding:10px 15px 10px 20px;
  display:-webkit-flex; display:flex;
  flex-direction:row;
  justify-content:space-between;
}
ul li .icon { margin-right:15px;}

.item-after { align-self: flex-end;}

.icon { background-color:#ddd; width:24px; height:24px; margin:0 8px; overflow:hidden;}
</style>
