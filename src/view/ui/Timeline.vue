<template>
<li class="timeline">
  <div class="day-line"></div>
  <div class="day-container">
    <div class="day-header">
      <time>
        <span class="day">5<em>日</em></span>
        <span>2017年12月</span>
      </time>
      <div class="opt flex">
        <i class="icon icon1">点赞</i>
        <i class="icon icon2">留言</i>
      </div>
    </div>
    <div class="day-content">
      <p>{{ item.event.content }}</p>
      <gallery :gallery="item.event.gallery"></gallery>
    </div>
  </div>
</li>
</template>

<script>
import gallery from '@/components/GalleryComp'
export default {
  name: 'Timeline',
  props: ['item'],
  components: {
    gallery
  },
  data () {
    return {
      baseUrl: this.$http.defaults.baseURL
    }
  }
}
</script>

<style lang="less" scoped>
.timeline {
  background-color:#fff;
  position:relative;
  display:-webkit-flex; display:flex;

}

.day-line { border-right:solid 1px #ddd; margin:0 12px 0 15px;
  transform: translateY(23px);
}
.day-container { padding:6px 15px 6px 0;
  flex-grow:1;
}
.day-container .day-header {
  display:-webkit-flex; display:flex;
  justify-content: space-between;
  align-items: center;
}
.day-container .day-header time { font-size:14px;
  display:-webkit-flex; display:flex;
  align-items: center;
}
.day-container .day-header time::before { width:11px; height:11px; background-color:#3fdab8; display:block; content:""; border-radius:50%; position:absolute; left:10px; top:21px;}
.day-container .day-header .day { color:#3fdab8; font-size:36px; margin-right:8px;
  display:-webkit-flex; display:flex;
  align-items: center;
}
.day-container .day-header .day em { font-size:24px; font-style:normal;}
.day-container .day-content { padding:5px 0;}
.day-container .day-content p { font-size:15px; margin:5px 0;}

.gallery { margin-left:-1%;}
.gallery li { float:left; width:32%; border:solid 1px #ccc; padding-top:31%; margin-left:1%; margin-top:1%; position:relative; display:block;}
.gallery li > div { position:absolute; left:0; top:0; width:100%; height:100%; background-color:#09BE07; overflow:hidden;}
.gallery li img { max-width:100%; height:auto; margin-top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.opt { justify-content:space-between;}
.opt .icon { background-image:url('../../assets/optIcon2.jpg'); background-size:200%; width:24.5px; height:18px; margin-left:30px;}
.opt .icon2 { background-position-x:100%;}
</style>
