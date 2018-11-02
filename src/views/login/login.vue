<template>
  <div class="login">
    <el-form>
      <el-form-item>
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="pwd"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" src="login.ts"></script>
<style lang="scss">
  .login {

  }
</style>
