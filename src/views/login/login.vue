<template>
  <div class="login">
    <el-form>
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>
<style lang="scss">
  .login {
    width: 100%;
    height: 100%
  }
</style>
