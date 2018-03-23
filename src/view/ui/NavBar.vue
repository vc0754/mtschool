<template>
<div class="navbar">
  <div class="inner">
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="center">
      <slot name="center">
        <span>{{ title }}</span>
      </slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>

    <slot name="subnavbar"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['title'],
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background: #3fdab8;
  font-size:15px; color:#fff;
  height:44px; width:100%;
  position: fixed; top:0; left:0; z-index:500; position:relative;
  display: -webkit-flex;
  display: flex;

  .inner { width:100%; padding:0 10px;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;

    > * {
      display: -webkit-flex;
      display: flex;
      align-items: center;
    }
  }

  .logo {
    height:25px;
  }

  .left {
    margin-right:10px;
    flex-shrink: 0;

    span {
      margin-left:6px;
    }
  }

  .right {
    margin-left:10px;
    flex-shrink: 0;

    span {
      margin-right:6px;
    }
  }

  .center {
    font-size:17px;
    overflow:hidden;
    flex-grow: 10;
    justify-content: center;

    span {
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
  }
  
  &.white {
    color:#444; background-color:#fff;
  }

  &::after {
    content: ''; display: block;
    position: absolute; left:0; right:auto; top:auto; bottom:0;
    height: 1px; width:100%;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 15;
    -webkit-transform-origin: 50% 0;
            transform-origin: 50% 0;
  }

  .icon { width:22px; height:22px;}

  &.navbar-hidden {
    -webkit-transition-duration:400ms;
            transition-duration:400ms;
    -webkit-transform:translate3d(0, -100%, 0);
            transform:translate3d(0, -100%, 0);
  }
}
</style>