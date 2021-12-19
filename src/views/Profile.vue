<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="个人信息" name="first"><person></person></el-tab-pane>
        <el-tab-pane label="我的订单" name="second"> <oForm></oForm></el-tab-pane>
        <el-tab-pane label="修改信息" name="third"> <aChange></aChange></el-tab-pane>
        <el-tab-pane label="售后服务" name="fourth"> <aSale></aSale> </el-tab-pane>
    </el-tabs>


</template>

<script>
    import person from "../components/profile_person.vue"
    import aChange from "../components/profile_change.vue"
    import aSale from "../components/profile_aSale.vue"
    import oForm from "../components/profile_oForm.vue"
    export default {
        name: "Profile",
        data() {
            return {
                activeName: 'first',
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event)
            },
        },
        components:{
            person,
            aChange,
            aSale,
            oForm,
        }
    }
</script>

<style scoped>

</style>