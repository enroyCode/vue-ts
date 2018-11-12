<template>
  <div class="home">
    <zc-panel>
      <div slot="panel-header" class="panel-header">
        <span class="title">Vue</span>
      </div>
      <div class="content">
        <el-row>
          <el-col :span="24"><span>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。</span></el-col>
          <el-col :span="24"><span>与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。</span></el-col>
          <el-col :span="24"><span>另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</span></el-col>
        </el-row>
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
    .content {
      span {
        float: left;
        margin-bottom: 10px;
        font-size: 16px;
      }
    }
  }
</style>
