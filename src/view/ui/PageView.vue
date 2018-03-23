<template>
<div class="page-view">
  <transition :name="transitionName" mode="out-in">
    <router-view class="page" />
  </transition>
</div>
</template>

<script>
export default {
  name: 'PageView',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
    }
  }
}
</script>

<style lang="less" scoped>
.pages {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);

    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
    overflow-y: auto;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}
</style>
