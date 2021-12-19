<template>

    <el-steps :active="2" align-center>
        <el-step title="提交订单" ></el-step>
        <el-step title="等待收货" ></el-step>
        <el-step title="确定收货" ></el-step>
    </el-steps>

</template>

<script>
    export default {
        name: "SubmitItem"
    }
</script>

<style scoped>

</style>