<template>
<div>
  <navbar class="white">
    <div slot="center">演示账号</div>
  </navbar>

  <div class="children">
    <div class="user-head">
      <img :src="baseUrl + userHead">
    </div>
    <span>5岁8个月25日</span>
  </div>

  <ul v-if="items.length">
    <timeline v-for="(item, index) in items" :item="item" :key="index"></timeline>
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
import navbar from '@/view/ui/NavBar'
import timeline from '@/view/ui/Timeline'
export default {
  name: 'Timeline',
  components: {
    InfiniteLoading, navbar, timeline
  },
  methods: {
    infiniteHandler ($state) {
      var url = '/timeline'
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
      userName: '蒂脉科技演示账号',
      userHead: '/static/images/users/b1.jpg'
    }
  }
}
</script>

<style lang="less" scoped>
.children { background-color:#fff; padding:20px 15px; border-bottom:solid 1px #ddd;
  display:-webkit-flex; display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.children .user-head { background-color:#ddd; width:88px; height:88px; overflow:hidden; border-radius:50%; margin-bottom:10px;}
.children .user-head img { height:100%; position:relative; left:50%;
  transform: translate(-50%, 0);
}
.children span { font-size:13px;}
</style>
