<template>
  <NavBar></NavBar>
  <Footer></Footer>
</template>

<script>
  import NavBar from "./components/NavBar.vue";
  import Footer from "./components/footer.vue"
  export default {
    name: 'App',
    components:{
      NavBar,
      Footer
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  body{
    background-color: whitesmoke;
  }

</style>
