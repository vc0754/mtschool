<template>
<div class="tabs-view">
  <router-view />
  <toolbar/>
</div>
</template>

<script>
import toolbar from '@/view/ui/TabsBar'
export default {
  name: 'TabsView',
  components: {
    toolbar
  }
}
</script>

<style lang="less" scoped>
.tabs-view {
  padding-bottom: 50px;
}
</style>
