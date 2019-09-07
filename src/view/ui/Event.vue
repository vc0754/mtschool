<template>
<li class="card">

  <div class="card-header">
    <div class="account">
      <div class="user-head">
        <router-link :to="'/user/' + item.user.userID">
        <img :src="item.user.userHead">
        </router-link>
      </div>
      <span>{{ item.user.userName }}</span>
      </div>
    <div class="time">{{ item.event.date }}</div>
  </div>

  <div class="card-body">
    <p>{{ item.event.content }}</p>
    <gallery :gallery="item.event.gallery"></gallery>
  </div>

  <div class="card-footer">
    <div class="opt flex">
      <div class="left">
        <i class="icon icon1">修改</i>
      </div>
      <div class="right flex">
        <i class="icon icon2">点赞</i>
        <i class="icon icon3">留言</i>
        <i class="icon icon4">分享</i>
      </div>
    </div>
    <div class="opt-content">
      <div class="zan">{{ item.zan }}</div>
      <div class="comments">{{ item.comments }}</div>
    </div>
  </div>
</li>
</template>

<script>
import gallery from '@/components/GalleryComp'
export default {
  name: 'Event',
  props: ['item'],
  components: {
    gallery
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
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
  flex-direction:column;
}

.card .card-footer .comments { display:none;}

.card .card-header + .card-body { padding:0 12px 12px;}
.card .card-body + .card-footer { padding:0 12px 12px;}

.opt { width:100%; padding:10px 0; justify-content:space-between;}
.opt .right .icon { margin-left:25px;}
.opt-content { padding-top:5px;}

.opt .icon { background-image:url('../../assets/optIcon.jpg'); background-size:400%; width:24px; height:22px;}
.opt .icon2 { background-position-x:300%;}
.opt .icon3 { background-position-x:200%;}
.opt .icon4 { background-position-x:100%;}

.zan { color:#1e9a7f;}
</style>
