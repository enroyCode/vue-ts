<template>
  <div class="nav">
    <el-menu :router=true :default-active="$route.path" class="el-menu-vertical-demo">
      <el-submenu v-for="item in nav" :index="item.path" :key="item.title" v-if="item.display">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <el-menu-item v-for="children in item.children" :index="children.path" :key="children.title" v-if="children.display">
          {{children.title}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    props: {nav: null}
  }
</script>

<style lang="scss">
  .nav {
    height: 100%;
    .el-menu {
      background-color: #D3DCE6;
    }
  }
</style>
