<template>
<div class="page">
  <navbar>
    <div @click="goBack" slot="left">
      <!-- <i class="icon"></i> -->
      <span>后退</span>
    </div>
  </navbar>
  
  <div class="page-content">
    <h1>{{ article.title }}</h1>
    <div class="meta">
      <span># {{ article.tag }}</span>
      <span>@ {{ article.view }}</span>
    </div>
    <div class="the-content">{{ article.content }}</div>
  </div>
</div>
</template>

<script>
import navbar from '@/view/ui/NavBar'
export default {
  name: 'ArticleView',
  components: {
    navbar
  },
  data () {
    return {
      // Articles
      articles: [
        { id: 1, title: '如何让孩子不仅吃得饱，更吃得好?给家长的7条冬季膳食建议', tag: '健康成长', view: 3852, thumbnail: '/static/images/articles/thumb1.jpg' },
        { id: 2, title: '教娃功课教到崩溃?九张图告诉你辅导孩子的正确打开方式', tag: '习惯养成', view: 3412, thumbnail: '/static/images/articles/thumb2.jpg' },
        { id: 3, title: '这款产品火爆了！就在第四届中国幼教资源博览会上!', tag: '益智教育', view: 2633, thumbnail: '/static/images/articles/thumb3.jpg' },
        { id: 4, title: '如何让孩子不仅吃得饱，更吃得好?给家长的7条冬季膳食建议', tag: '健康成长', view: 3852, thumbnail: '/static/images/articles/thumb1.jpg' },
        { id: 5, title: '教娃功课教到崩溃?九张图告诉你辅导孩子的正确打开方式', tag: '习惯养成', view: 3412, thumbnail: '/static/images/articles/thumb2.jpg' },
        { id: 6, title: '这款产品火爆了！就在第四届中国幼教资源博览会上!', tag: '益智教育', view: 2633, thumbnail: '/static/images/articles/thumb3.jpg' }
      ]
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  computed: {
    article () {
      return this.articles[this.$route.params.id - 1]
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  background-color:#fff;
  height:100%;
  
  .page-content {
    padding: 15px;
  }
  h1 {
    font-size:21px;
  }
  .meta {
    margin-bottom:15px;
  }
}
</style>
