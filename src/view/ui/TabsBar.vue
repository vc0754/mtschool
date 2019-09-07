<template>
<div class="toolbar">
  <div class="inner">
    <router-link class="link" to="/app/home">
      <i class="icon icon1"></i>
      <span>幼儿园</span>
    </router-link>
    <router-link class="link" to="/app/event">
      <i class="icon icon2"></i>
      <span>动态</span>
    </router-link>
    <router-link class="link" to="/app/timeline">
      <i class="icon icon3"></i>
      <span>成长</span>
    </router-link>
    <router-link class="link" to="/app/archive">
      <i class="icon icon4"></i>
      <span>亲子天地</span>
    </router-link>
    <router-link class="link" to="/app/my">
      <i class="icon icon5"></i>
      <span>我</span>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabsBar'
}
</script>

<style lang="less" scoped>
@main-color: #3fdab8;
.toolbar {
  font-size: 12px;
  color: #777;
  background-color: #fff;
  height: 50px;
  width: 100%;
  border-top: solid 1px #ddd;
  position: fixed;
  z-index: 500;
  bottom: 0; left: 0; right: 0;
  display: -webkit-flex;
  display: flex;

  .inner {
    width: 100%;
    padding: 0 10px;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .router-link-exact-active {
      color:@main-color;
    }

    .link {
      flex-grow: 1;
      display: -webkit-flex;
      display: flex;
      flex-direction: column;
      align-items: center;

      span { font-size:10px; padding-top:2px;}

      .icon { background-color:#ccc; background-image:url('../../assets/toolbarIcon.jpg'); background-size:500%; width:24px; height:24px;}
      .icon2 { background-position-x:400%;}
      .icon3 { background-position-x:300%;}
      .icon4 { background-position-x:200%;}
      .icon5 { background-position-x:100%;}

      &.router-link-exact-active { color:#3fdab8;}
      &.router-link-exact-active .icon { background-position-y:100%;}
    }
  }
}
.icon { background-color:#ddd; width:26px; height:26px;}
</style>
