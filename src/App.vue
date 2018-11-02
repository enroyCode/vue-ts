<template>
  <div id="app">
    <zc-frame>

    </zc-frame>
  </div>
</template>

<script>
  import ZcFrame from '@/components/frame/zc-frame.vue'

  export default {
    name: 'App',
    components: {
      ZcFrame
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
