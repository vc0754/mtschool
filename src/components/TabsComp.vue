<template>
<div class="vc-tabs-container">
  <ul class="tab-nav">
    <li v-for="(item, i) in items" :key="i" :class="i == index ? 'active' : ''" @click="changeTab(item)">{{ item.name }}</li>
  </ul>
  <div class="tab-content">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabsComp',
  props: {
    items: Array,
    index: Number
  },
  methods: {
    changeTab (i) {
      this.$emit('changeTab', i)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
