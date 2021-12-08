<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-col :span="2" >
                <el-menu-item index="1">
                <img src="../assets/home.png" alt="sada" height="20" weight="25">联想商城
                </el-menu-item>
            </el-col>
            <el-col :span="2" :offset="16">
                <el-menu-item index="2">
                    <img src="../assets/personalCenter.png" alt="sada" height="25" weight="25">个人中心
                </el-menu-item>
            </el-col>
            <el-col :span="2" >
            <el-menu-item index="4" id = "helper">客服中心</el-menu-item>
            </el-col>
            <el-col :span="2" >
                <el-menu-item  index="3" >
                    <img src="../assets/shoppingcart.png" alt="sada" height="20" weight="25">购物车(0)
                </el-menu-item >
            </el-col>

    </el-menu>
    <div class="line"></div>

</template>

<script>
    export default {
        name: "NavBar",
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
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;

    }

    .el-col {
        border-radius: 4px;
    }
    .el-menu-demo {
        background-color: LightGray;
    }
    #center {
        float: right;
    }
    #cart {
        float: right;
    }
</style>