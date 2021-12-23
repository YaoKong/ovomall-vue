<template>
    <Search></Search>
    <div id="container">

        <el-card :body-style="{ padding: '0px' }" class="cardBox"
        v-for="card in tableData">
            <img
                    :src= card.imageHost
                    class="image"
                    @click="enterGoodsPage(row)"
            />
            <div style="padding: 14px">
                <span @click="enterGoodsPage(row)">{{card.name}}</span>
                <div class="bottom">
                    <el-button @click="addCart(card)" class="addGoods" type="primary" :icon="shopping-cart-full">加入购物车</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    import Search from "../components/Search.vue";
    import {ElMessage} from "element-plus";
    export default {
        name: "SearchResult",
        data(){
            return {
                tableData: [
                    {
                        name: 'Tom',    //商品名 对应对应response的name
                        imageHos: './xx.jpg', //商品图片 对应response的imageHost
                        price:"1",  //单价 对应response的price
                        id:"1", //商品id 对应response的id
                        amount:1,   //购买数量
                    },
                ],
            }
        },
        components:{
            Search,
        },
        methods:{
            addCart(row) {
                    this.goodsForm.payment = this.goodsForm.amount * this.goodsForm.price;
                    this.$store.dispatch("addCart", {
                        goodsName: row.name,
                        price: row.price,
                        goodsImg: row.imageHos,
                        goodsID: row.id,
                        userID: this.$store.state.userInfo.id,
                        amount: 1,  //默认加入购物车一个
                        payment: 0,
                    });
                    ElMessage({
                        message: '成功加入购物车!',
                        type: 'success',
                    });
            },
            enterGoodsPage(row){
                this.$router.push({path:"/goodsPage",
                    params: {
                        goodsName: row.name,    //商品名
                        goodsID : row.id,
                        modelNum : row.modelNum,    //型号
                        imgURL : row.imageHos,   //图片地址
                        price: row.price,  //价格(元）
                        description: row.detail,  //商品描述,
                        remarks: [],  //商品评价，保存用户的所有评价
                    }});
            },
        },
        setup(){
            //根据关键字查询商品
            this.axios.post("http://localhost:8005/buyer/product/search_product/categoryId_keyword", {
                keyword: this.$route.query.inputValue,
            }).then(response => (this.tableData = response.data.list))
                .catch(function (error) {
                    console.log(error);
                });
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