<template>
    <div id ="searchBar">
        <el-col>
            <img id= "lenovo" width=188 height=50 src="../assets/图标/dashboard_lenovo.png" alt = "" >
        </el-col>
        <el-col ><input type="text" class="in" placeholder="请输入查询内容"  v-model="inputValue"/></el-col>
        <el-col :span="6"><button class="btn_search" @click="searchFor()">搜索</button></el-col>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return {
                inputValue: "",
            }
        },
        methods:{
            searchFor(){
                this.$router.push({path:"/searchResult",
                    params:{ inputValue: this.inputValue }});
            }
        }
    }
</script>

<style scoped>
    #searchBar{
        width: 100%;
        position: relative;
        top: 10px;
    }

    #lenovo{
        position: relative;
        top: 35px;
    }

    .in{
        width:850px;
        height:50px;
        border:2px solid red;
        outline:none;
        font:16px/34px "microsoft yahei";
        position: relative;
        top: 35px;
        left:80px;

    }
    .btn_search{
        position: relative; /*固定在顶部*/
        top: 35px; /*离顶部的距离为*/
        left:120px;
        width:80px;
        height:50px;
        color:red;
    }
</style>