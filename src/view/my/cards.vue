<template>
  <navbar>
    <div @click="goBack" slot="left">
      <!-- <i class="icon"></i> -->
      <span>后退</span>
    </div>
    <div slot="center">绑定考勤卡</div>
  </navbar>
</template>

<script>
import navbar from '@/view/ui/NavBar'
export default {
  name: 'Cards',
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
