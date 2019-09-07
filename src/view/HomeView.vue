<template>
<div>
  <navbar>
    <div slot="center">示范园</div>
  </navbar>

  <swiper v-if="swiperSlides.length" :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide.thumbnail" :alt="slide.title">
      <router-link to="/minisite/" class="swiperlink">微官网</router-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

  <ul class="ui-block">
    <li>
      <router-link to="/article/tag/5">
        <i class="icon icon1"></i>
        <span>校园之窗</span>
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <i class="icon icon2 gray"></i>
        <span>班级通知</span>
      </router-link>
    </li>
    <li>
      <router-link to="/attendance/today">
        <i class="icon icon3"></i>
        <span>宝宝考勤</span>
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <i class="icon icon4 gray"></i>
        <span>宝贝饮食</span>
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <i class="icon icon5 gray"></i>
        <span>周计划</span>
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <i class="icon icon6 gray"></i>
        <span>班级作业</span>
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <i class="icon icon7 gray"></i>
        <span>班级活动</span>
      </router-link>
    </li>
    <li>
      <router-link to="/home/video">
        <i class="icon icon8"></i>
        <span>宝贝在线</span>
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <i class="icon icon9 gray"></i>
        <span>消息</span>
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <i class="icon icon10 gray"></i>
        <span>健康</span>
      </router-link>
    </li>
    <li>
      <router-link to="/home/bus">
        <i class="icon icon11"></i>
        <span>校车</span>
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <i class="icon icon12 gray"></i>
        <span>点评</span>
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <i class="icon icon13 gray"></i>
        <span>班级相册</span>
      </router-link>
    </li>
    <li></li>
  </ul>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import navbar from '@/view/ui/NavBar'
export default {
  name: 'Home',
  components: {
    swiper, swiperSlide, navbar
  },
  data () {
    return {
      swiperSlides: [],
      swiperOption: {
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  mounted () {
    var url = '/swiper'
    this.$http.get(url, {})
      .then((response) => {
        this.swiperSlides = response.data
      }).catch((error) => {
        window.console.log(error)
      })
  }
}
</script>

<style lang="less" scoped>
.swiper-slide {
  img {
    display: block;
    max-width: 100%
  }
  .swiperlink {
    font-size: 15px;
    color: #fff;
    background-color: #3fdab8;
    border-top-left-radius: 10px;
    position: absolute;
    z-index: 15;
    right: 0; bottom: 0;
    padding: 6px 14px;
  }
}
.swiper-pagination { display:none; }
.ui-block {
  background-color: #fff;
  list-style: none;
  padding:0;
  overflow: hidden;
  li {
    font-size: 13px;
    width: 33.33%;
    float: left;
    border-bottom: solid 1px #eee;
    &:nth-child(3n-2) {
      border-right: solid 1px #eee;
    }
    &:nth-child(3n-1) {
      border-right: solid 1px #eee;
    }
    a {
      padding: 30px 20px;
      margin: 10px;
      display: block;
      text-align: center;
      span {
        display: block;
      }
    }
  }
}

.icon { background-color:#ddd; width:36px; height:36px; margin-bottom:12px;}
.ui-block .icon { background-color:#ccc; background-image:url('../assets/indexIcon.jpg'); background-size:1300%; width:34px; height:34px;}
.ui-block .icon1 {}
.ui-block .icon2 { background-position-x:1200%;}
.ui-block .icon3 { background-position-x:1100%;}
.ui-block .icon4 { background-position-x:1000%;}
.ui-block .icon5 { background-position-x:900%;}
.ui-block .icon6 { background-position-x:800%;}
.ui-block .icon7 { background-position-x:700%;}
.ui-block .icon8 { background-position-x:600%;}
.ui-block .icon9 { background-position-x:500%;}
.ui-block .icon10 { background-position-x:400%;}
.ui-block .icon11 { background-position-x:300%;}
.ui-block .icon12 { background-position-x:200%;}
.ui-block .icon13 { background-position-x:100%;}

.gray { 
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
</style>
