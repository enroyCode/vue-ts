<template>
  <el-container>
    <el-aside>
      <zc-nav :nav="nav"></zc-nav>
    </el-aside>
    <el-container class="zc-container">
      <el-header>
        <zc-breadcrumb :nav="nav"></zc-breadcrumb>
      </el-header>
      <el-main>
        <router-view class="frame-router"></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>
<script type="text/ecmascript-6">
  import ZcNav from './zc-nav.vue';
  import ZcBreadcrumb from './zc-breadcrumb.vue';
  import nav from '@/nav.js';

  export default {
    components: {
      ZcNav, ZcBreadcrumb
    },
    data() {
      return {
        nav: nav
      }
    }
  }
</script>

<style lang="scss">
  .el-container {
    height: 100%;
    background-color: #eaeff3;
    .el-aside {
      width: 200px;
      height: 100%;
      background-color: #D3DCE6;
    }
    .el-header {
      width: 100%;
      height: 40px;
      padding: 0;
      background-color: white;
    }
    .zc-container {
      /*min-height: 600px;
      overflow: auto;*/
      .el-main {
        margin-top: 20px;
        height: 100%;
      }
    }
    .el-footer {
    }
  }
</style>
