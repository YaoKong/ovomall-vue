<template>
  <NavBar></NavBar>
  <Footer></Footer>
</template>

<script>
  import NavBar from "./components/NavBar.vue";
  import Footer from "./components/footer.vue"
  import Cookies from "js-cookie";
  export default {
    name: 'App',
    components:{
      NavBar,
      Footer
    },
    created () {  //在页面加载时读取cookie里的状态信息
      if (Cookies.get("store") ) {
        // console.log(Cookie.get("store"))
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(Cookies.get("store"))))
      } //在页面刷新时将vuex里的信息保存
      window.addEventListener("beforeunload",()=>{
        Cookies.set("store",JSON.stringify(this.$store.state), {expires: 7})
      })
    },
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
