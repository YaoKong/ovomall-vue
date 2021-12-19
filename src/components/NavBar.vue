<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-col :span="2" >
                <router-link to="/home">
                <el-menu-item index="1">
                <img src="../assets/home.png" alt="sada" height="20" weight="25">联想商城
                </el-menu-item>
                </router-link>
            </el-col>

            <el-col :span="2" :offset="16">
                <template v-if="this.$store.state.isAuth">
                    <router-link to="/profile">
                        <el-sub-menu index="2">
                            <template #title>个人中心</template>
                            <el-menu-item index="2">
                                <img src="../assets/personalCenter.png" alt="sada" height="25" weight="25">
                                {{this.$store.state.userInfo.username}}
                            </el-menu-item>
                            <el-menu-item index="3" @click="logout">
                                退出登录
                            </el-menu-item>
                        </el-sub-menu>

                    </router-link>
                </template>
                <template v-else>
                    <router-link to="/login">
                        <el-menu-item index="2">
                            <img src="../assets/personalCenter.png" alt="sada" height="25" weight="25">登录/注册
                        </el-menu-item>
                    </router-link>
                </template>


            </el-col>
            <el-col :span="2" >
            <el-menu-item index="4" id = "helper">客服中心</el-menu-item>
            </el-col>
            <el-col :span="2" >
                <router-link to="/shoppingCart">
                <el-menu-item  index="3" >
                    <img src="../assets/shoppingcart.png" alt="sada" height="20" weight="25">购物车(0)
                </el-menu-item >
                </router-link>
            </el-col>
    </el-menu>
    <div class="line"><router-view></router-view></div>
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
            logout(){   //将flag从本地移除
                this.$store.dispatch("userLogin", false);
                localStorage.removeItem("Auth");
                alert("登出成功，即将跳转")
                this.$router.push("/home");
            },
        },
    }
</script>

<style scoped>
    .el-menu-demo {
        background-color: LightGray;
    }
    .line{
        margin-bottom: 20px;
    }

</style>