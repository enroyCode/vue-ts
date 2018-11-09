<template>
  <el-container>
    <el-aside width="200px">
      <zc-nav :nav="nav"></zc-nav>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view class="frame-router"></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script type="text/ecmascript-6">
  import ZcNav from './zc-nav.vue';
  import nav from '@/nav.js';

  export default {
    components: {
      ZcNav
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
    .el-aside {
      height: 100%;
      background-color: #D3DCE6;
    }
  }
</style>
