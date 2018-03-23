<template>
<div>
  <navbar>
    <div @click="goBack" slot="left">
      <!-- <i class="icon"></i> -->
      <span>后退</span>
    </div>
    <div slot="center">宝宝考勤</div>
  </navbar>
</div>
</template>

<script>
import navbar from '@/view/ui/NavBar'
export default {
  name: 'Attendance',
  components: {
    navbar
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  data () {
    return {
      items: []
    }
  }
}
</script>

<style lang="less" scoped>

</style>
