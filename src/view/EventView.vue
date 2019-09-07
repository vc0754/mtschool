<template>
<div>
  <navbar>
    <div slot="center">动态</div>
  </navbar>

  <ul v-if="items.length">
    <event v-for="(item, index) in items" :item="item" :key="index"></event>
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
import event from '@/view/ui/Event'
export default {
  name: 'Event',
  components: {
    InfiniteLoading, navbar, event
  },
  methods: {
    infiniteHandler ($state) {
      var url = '/event'
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
        window.console.log(error)
      })
    }
  },
  data () {
    return {
      items: []
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less" scoped>

</style>
