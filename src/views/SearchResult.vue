<template>
    <Search></Search>
    <div id="container">

        <el-card :body-style="{ padding: '0px' }" class="cardBox"
        v-for="card in tableData">
            <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
            />
            <div style="padding: 14px">
                <span>商品名</span>
                <div class="bottom">
                    <el-button class="addGoods" type="primary" :icon="shopping-cart-full">加入购物车</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    import Search from "../components/Search.vue";
    export default {
        name: "SearchResult",
        data(){
            return {
                tableData: [
                    {
                        date: '2016-05-03',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                    },
                    {
                        date: '2016-05-02',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                    },
                    {
                        date: '2016-05-04',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                    },
                    {
                        date: '2016-05-01',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                    },
                ],
            }
        },
        components:{
            Search,
        },
    }
</script>

<style scoped>
    #container{
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        position: relative;
        top:80px;
        /*border: solid #F56C6C;*/
        margin-left: 120px;
    }


    .cardBox {
        width: 200px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
        float: left;
        margin-right: 80px;
        padding: 15px 5px 5px;
    }


    .bodyBox p {
        margin-left: 5px;
    }

    .addGoods{
        background-color: #F56C6C;
    }

    .image {
        width: 100%;
        display: block;
    }
</style>