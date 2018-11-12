<template>
  <div class="zc-bread-crumb">
    <el-breadcrumb separator-class="el-icon-arrow-right" v-if="false">
      <el-breadcrumb-item v-for="crumb in crumbs" :key="crumb.title">{{crumb.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    components: {},
    props: {
      nav: null
    },
    data() {
      return {}
    },
    methods: {
      lookupCrumbs(path, crumbs) {
        //todo 第一层 查询 如果是'/'表示首页，停止查询
        //todo else 如果当前item有children，遍历children，如果path相同，则依次把item的title和path，如果没有继续遍历children。

        if (path === '/' || !path) {
          crumbs.push({title: '首页'});
          return;
        }
        if (this.nav && this.nav.length > 0) {
          let res;
          this.nav.forEach(item => {
            let crumb = '/' + item.path;
            if (path === item.path) {
              res = crumb;
            } else if (item.children && item.children.length > 0) {
              if (this.findCrumb(path, crumb, item.children)) {
                res = crumb;
              }
            }
          });
          if (res) {
            crumbs = res.split('/');
          }
        }
      },
      findCrumb(path, crumb, children) {
        if (children && children.length > 0) {
          children.forEach(child => {
            crumb = crumb + '/' + child.title;
            if (child.path === path) {
              return true;
            } else {
              this.findCrumb(path, crumb, child.children);
            }
          });
        }
      }
    },
    computed: {
      crumbs: {
        get() {
          let path = this.$router.path;
          let crumbs = [];
          this.lookupCrumbs(path, crumbs);
          return crumbs;
//          this.nav.forEach(item=>{
//            if(){
//
//            }
//          });
        }
      }
    }
  }
</script>

<style lang="scss">
  .zc-bread-crumb {

  }
</style>
