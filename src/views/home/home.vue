<template>
  <div class="home">
    <zc-panel>
      <div slot="panel-header" class="panel-header">
        <span class="title">首页</span>
      </div>

    </zc-panel>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>
<style lang="scss">
  .home {
    width: 100%;
    height: 100%;
    .panel-header {
      .title {
        float: left;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
</style>
