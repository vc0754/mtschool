<template>
<div class="page">
  <navbar>
    <div @click="goBack" slot="left">
      <!-- <i class="icon"></i> -->
      <span>后退</span>
    </div>
    <div slot="center">{{ titles }}</div>
  </navbar>
  
  <ul class="ui-list">
    <li v-for="(article, index) in items" :key="index">
      <router-link :to="'/article/' + article.id">
        <div class="thumb"><img :src="article.thumbnail" alt=""></div>
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
import navbar from '@/view/ui/NavBar'
export default {
  name: 'ArticleGroupView',
  components: {
    InfiniteLoading, navbar
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    infiniteHandler ($state) {
      var url = '/articleCate' + this.$route.params.id
      this.$http.get(url, {
        params: {
          page: this.items.length / 6 + 1
        }
      }).then(({ data }) => {
        if (data.length) {
          this.items = this.items.concat(data)
          $state.loaded()
          if (this.items.length / 6 === 5) {
            $state.complete()
          }
        } else {
          $state.complete()
        }
      }).catch((error) => {
        window.console.log(error)
      })
    }
  },
  data () {
    return {
      title: '',
      items: []
    }
  },
  computed: {
    titles () {
      return this.$route.params.id === '5' ? '校园之窗' : this.title
    }
  },
  mounted () {
    // console.log(this.$route.params)
  }
}
</script>

<style lang="less" scoped>
.ui-list { background-color:#fff;}
.ui-list li { border-bottom:solid 1px #ddd;}
.ui-list li:last-child { border-bottom:none;}
.ui-list li a { padding:18px 12px;
  display:-webkit-flex; display:flex;
  flex-direction:row-reverse;
  flex-wrap:nowrap;
  justify-content:space-between;
}
.ui-list li .thumb { background-color:#eee; width:28%;}
.ui-list li .thumb img { max-width:100%; display:block;}
.ui-list li .info { width:72%; padding-right:10px;
  display:-webkit-flex; display:flex;
  flex-direction:column;
  justify-content:space-between;
}
.ui-list li h3 { font-size:15px; font-weight:500; padding:0; margin:0;}
.ui-list li .meta { font-size:12px;
  display:-webkit-flex; display:flex;
}
.ui-list li .meta span { width:38%; opacity:.65;}
</style>
