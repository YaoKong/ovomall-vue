<template>
    <div>
        <NavBar id = "nav"> </NavBar>
    <p>home.vue</p>
    </div>

    <Footer></Footer>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/footer.vue'
    export default {
        name: "home",
        components:{
            NavBar,
            Footer
        }
    }
</script>

<style scoped>

</style>