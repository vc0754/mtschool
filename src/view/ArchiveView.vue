<template>
<div>
  <navbar>
    <div slot="center">亲子天地</div>
  </navbar>

  <swiper v-if="swiperSlides.length" :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="baseUrl + slide.thumbnail" :alt="slide.title">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

  <ul class="ui-block">
    <li>
      <router-link to="/article/tag/1">
        <i class="icon icon1"></i>
        <span>育儿智囊</span>
      </router-link>
    </li>
    <li>
      <router-link to="/article/tag/2">
        <i class="icon icon2"></i>
        <span>故事</span>
      </router-link>
    </li>
    <li>
      <router-link to="/article/tag/3">
        <i class="icon icon3"></i>
        <span>儿歌</span>
      </router-link>
    </li>
    <li>
      <router-link to="/article/tag/4">
        <i class="icon icon4"></i>
        <span>贝瓦儿歌</span>
      </router-link>
    </li>
  </ul>

  <ul class="ui-list">
    <li v-for="(article, index) in items" :key="index">
      <router-link :to="'/article/' + article.id">
        <div class="thumb"><img :src="baseUrl + article.thumbnail" alt=""></div>
        <div class="info">
          <h3>{{ article.title }}</h3>
          <div class="meta">
            <span># {{ article.tag }}</span>
            <span>@ {{ article.view }}</span>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
  
  <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
    <span slot="no-more">-- 我已经是底部 --</span>
    <span slot="no-result">-- 没有更多数据了 --</span>
    <span slot="spinner"><div class="preloader"></div></span>
  </infinite-loading>
</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import navbar from '@/view/ui/NavBar'
export default {
  name: 'Archive',
  components: {
    swiper, swiperSlide, InfiniteLoading, navbar
  },
  methods: {
    infiniteHandler ($state) {
      var url = '/archive'
      this.$http.get(url, {
        params: {
          page: this.items.length / 6 + 1
        }
      }).then(({ data }) => {
        if (data.length) {
          this.items = this.items.concat(data)
          $state.loaded()
          if (this.items.length / 6 === 3) {
            $state.complete()
          }
        } else {
          $state.complete()
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  data () {
    return {
      baseUrl: this.$http.defaults.baseURL,
      items: [],
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
    var url = '/swiperArchive'
    this.$http.get(url, {})
      .then((response) => {
        this.swiperSlides = response.data
      }).catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="less" scoped>
.ui-block {
  background-color: #fff;
  display: -webkit-flex; display: flex;
  li {
    flex-grow: 1;
    a {
      text-align:center; display:block; padding:35px 20px;
      display:-webkit-flex; display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      span {
        font-size:10px;
      }
    }
  }
}

.icon {
  background-image:url('../assets/guidIcon.jpg'); background-size:400%; width:45px; height:34px; margin-bottom:8px;
}
.icon2 { background-position-x:300%;}
.icon3 { background-position-x:200%;}
.icon4 { background-position-x:100%;}

.ui-list {
  margin-top: 15px;
  background-color: #fff;

  li {
    border-bottom: solid 1px #ddd;
    a { padding:18px 12px;
      display:-webkit-flex; display:flex;
      flex-direction:row-reverse;
      flex-wrap:nowrap;
      justify-content:space-between;
    }
    .thumb {
      background-color:#eee; width:28%;
      img {
        max-width:100%; display:block;
      }
    }
    .info { width:72%; padding-right:10px;
      display:-webkit-flex; display:flex;
      flex-direction:column;
      justify-content:space-between;
    }
    h3 { font-size:15px; font-weight:500; padding:0; margin:0;}
    .meta {
      font-size:12px;
      display: -webkit-flex;
      display: flex;
      span { width:38%; opacity:.65;}
    }
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
