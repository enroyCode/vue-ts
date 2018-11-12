<template>
  <div class="zc-panel">
    <slot name="panel-header"></slot>
    <div class="panel-content">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

  export default {}

</script>

<style lang="scss">
  .zc-panel {
    background: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    min-width: 1024px;
    min-height: 600px;
    .panel-header {
      height: 30px;
      padding: 16px 20px;
      border-bottom: 1px solid rgba(223, 226, 229, 1);
      line-height: 28px;
      font-size: 14px;
    }
    .panel-content {
      height: 100%;
      margin: 20px 20px 0px 20px;
    }
  }
</style>
