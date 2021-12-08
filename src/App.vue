<template>
  <p>APP.vue</p>
  <span>  <router-link to="/home">home  </router-link> <router-link to="/login">登录/注册</router-link></span>

  <router-view></router-view>
</template>

<script>
  export default {
    name: 'App',
    // components:{
    //   HelloWorld
    // }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
