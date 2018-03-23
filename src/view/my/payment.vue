<template>
  <navbar>
    <div @click="goBack" slot="left">
      <!-- <i class="icon"></i> -->
      <span>后退</span>
    </div>
    <div slot="center">支付平台</div>
  </navbar>
</template>

<script>
import navbar from '@/view/ui/NavBar'
export default {
  name: 'Payment',
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
