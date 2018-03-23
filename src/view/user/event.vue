<template>
<div>
  <navbar>
    <div @click="goBack" slot="left">
      <!-- <i class="icon"></i> -->
      <span>后退</span>
    </div>
  </navbar>
  
  <div class="account_bg">
    <div class="account_info">
      <div class="user-head">
        <img :src="userHead">
      </div>
      <h1>{{ userName }}</h1>
    </div>
  </div>
  
  <ul v-if="eventData.length">
    <event v-for="(item, index) in eventData" :item="item" :key="index"></event>
  </ul>

</div>
</template>

<script>
import navbar from '@/view/ui/NavBar'
import event from '@/view/ui/Event'
export default {
  name: 'UserEvent',
  components: {
    navbar, event
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  data () {
    return {
      userName: '蒂脉科技演示账号',
      userHead: '/static/images/users/b1.jpg',
      eventData: [
        {
          user: {
            userID: 1,
            userName: '蒂脉科技演示账号',
            userHead: '/static/images/users/b1.jpg'
          },
          event: {
            date: '22小时前',
            content: '测试蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号',
            gallery: [
              '/static/images/event/bg.jpg'
            ],
            video: ''
          },
          zan: '蒂脉科技、张园长、一班王老师 3人觉得很赞',
          comments: '演示账号妈妈：KKK'
        },
        {
          user: {
            userID: 1,
            userName: '蒂脉科技演示账号',
            userHead: '/static/images/users/b1.jpg'
          },
          event: {
            date: '22小时前',
            content: '测试蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号',
            gallery: [
              '/static/images/event/bg.jpg',
              '/static/images/event/bg.jpg'
            ],
            video: ''
          },
          zan: '蒂脉科技、张园长、一班王老师 3人觉得很赞',
          comments: '演示账号妈妈：KKK'
        },
        {
          user: {
            userID: 1,
            userName: '蒂脉科技演示账号',
            userHead: '/static/images/users/b1.jpg'
          },
          event: {
            date: '22小时前',
            content: '测试蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号',
            gallery: '',
            video: ''
          },
          zan: '蒂脉科技、张园长、一班王老师 3人觉得很赞',
          comments: '演示账号妈妈：KKK'
        },
        {
          user: {
            userID: 1,
            userName: '蒂脉科技演示账号',
            userHead: '/static/images/users/b1.jpg'
          },
          event: {
            date: '22小时前',
            content: '测试蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号蒂脉科技演示账号',
            gallery: [
              '/static/images/event/bg.jpg',
              '/static/images/event/bg.jpg',
              '/static/images/event/bg.jpg',
              '/static/images/event/bg.jpg'
            ],
            video: ''
          },
          zan: '蒂脉科技、张园长、一班王老师 3人觉得很赞',
          comments: '演示账号妈妈：KKK'
        }
        //
      ]
    }
  }
}
</script>

<style scoped>
.account_bg { height:32%; padding:120px 10px 15px 10px; background-size:cover; background-position:center bottom;
  display:-webkit-flex; display:flex;
  align-items:flex-end;
}
.account_info { width:100%;
  display:-webkit-flex; display:flex;
  align-items:center;
}
.account_info .user-head { width:62px; height:62px; overflow:hidden; border-radius:50%; border:solid 1px #fff;}
.account_info .user-head img { height:100%; position:relative; left:50%;
  transform: translate(-50%, 0);
}
.account_bg h1 { color:#fff; font-size:16px; margin-left:8px; text-shadow:0 1px 2px rgba(0, 0, 0, 0.65);}

.card { background-color:#fff; margin:12px 0;}
.card:first-child { margin-top:0;}
.card .card-header { padding:12px;
  display:-webkit-flex; display:flex;
  justify-content: space-between;
  align-items:center;
}
.card .card-header .account {
  display:-webkit-flex; display:flex;
  align-items:center;
}
.card .card-header .account .user-head { width:36px; height:36px; overflow:hidden; border-radius:50%;}
.card .card-header .account .user-head img { height:100%; position:relative; left:50%;
  transform: translate(-50%, 0);
}
.card .card-header .account span { margin-left:10px;}
.card .card-header .time { font-size:12px;}

.card .card-body { font-size:15px; padding:12px;}
.card .card-body p { margin:0 0 10px;}
.card .card-body p:last-child { margin-bottom:0;}
.card .card-body img { max-width:100%;}
.card .card-footer { font-size:13px; padding:12px;
  display:-webkit-flex; display:flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.card .card-footer .opt {
  display:-webkit-flex; display:flex;
}
.card .card-footer .comments { display:none;}

.card .card-header + .card-body { padding:0 12px 12px;}
.card .card-body + .card-footer { padding:0 12px 12px;}
/*
ul { background-color:#fff; margin:15px 0;}
ul li a { display:block; padding:25px; margin:10px;}

.ui-block { margin-top:0;
  display:-webkit-flex; display:flex;
  flex-wrap: wrap;
}
.ui-block li { width:33.333%; border-bottom:solid 1px #ddd;}
.ui-block li:nth-child(3n-1) { border-left:solid 1px #ddd; border-right:solid 1px #ddd;}
.ui-block li:nth-last-child(1),
.ui-block li:nth-last-child(2) { border-bottom:none;}
.ui-block li a { text-align:center;
  display:-webkit-flex; display:flex;
  flex-direction:column;
  justify-content:center;
}
*/
.icon { background-color:#ddd; width:24px; height:24px; margin:0 8px; overflow:hidden;}
</style>
