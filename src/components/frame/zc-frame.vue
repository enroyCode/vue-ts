<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
  <!--<div class="layout">-->
  <!--<header>header</header>-->
  <!--<slot name="nav">nav</slot>-->
  <!--<router-view class="frame-router"></router-view>-->
  <!--<footer>footer</footer>-->
  <!--</div>-->

</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  }
</script>

<style lang="scss">
</style>
