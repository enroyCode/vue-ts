<template>
  <div class="login">
    <div class="login-content">
      <div class="login-content-form">
        <el-form label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button @click="login">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>
<style lang="scss">
  .login {
    width: 100%;
    height: 100%;
    background: url('../../assets/backgroud.jpg') no-repeat 50%;
    &-content {
      background-color: white;
      width: 400px;
      height: 280px;
      border-radius: 10px;
      float: right;
      margin: 200px 200px 0 0;
      &-form {
        margin-top: 80px;
        .el-form {
          .el-form-item {
            .el-input {
              width: 80%;
            }
          }
        }
      }
    }
  }
</style>
