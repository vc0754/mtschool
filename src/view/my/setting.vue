<template>
<div>
  <navbar>
    <div @click="goBack" slot="left">
      <!-- <i class="icon"></i> -->
      <span>后退</span>
    </div>
    <div slot="center">设置</div>
  </navbar>
  <button @click="logout">确认退出</button>
</div>
</template>

<script>
import navbar from '@/view/ui/NavBar'
import { mapActions } from 'vuex'
import { USER_SIGNOUT } from '@/store/modules/user'
export default {
  name: 'Setting',
  components: {
    navbar
  },
  methods: {
    ...mapActions([USER_SIGNOUT]),
    logout () {
      this.USER_SIGNOUT()
      this.$router.replace({ path: '/login' })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
