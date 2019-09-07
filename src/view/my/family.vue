<template>
  <navbar>
    <div @click="goBack" slot="left">
      <!-- <i class="icon"></i> -->
      <span>后退</span>
    </div>
    <div slot="center">邀请家人</div>
  </navbar>
</template>
<script>
import navbar from '@/view/ui/NavBar'
export default {
  name: 'Family',
  components: {
    navbar
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
