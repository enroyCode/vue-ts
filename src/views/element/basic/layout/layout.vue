<template>
  <div class="element-layout">
    <!--<iframe src="https://element.eleme.io/#/zh-CN/component/#layout"></iframe>-->
    <zc-panel>
      <div slot="panel-header" class="panel-header">
        <span class="title">Layout 布局</span>
      </div>
      <div class="element-layout-content">
        通过基础的 24 分栏，迅速简便地创建布局。
      </div>
    </zc-panel>
  </div>
</template>
<script lang="ts" src="./layout.ts"></script>
<style lang="scss">
  .element-layout {
    width: 100%;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
    .title {
      float: left;
      font-weight: bold;
      font-size: 16px;
    }
    &-content {
      text-align: left;
    }
  }
</style>
