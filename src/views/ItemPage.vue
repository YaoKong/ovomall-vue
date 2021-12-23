<template>

    <el-steps :active="1" align-center id = "steps">
        <el-step title="提交订单" ></el-step>
        <el-step title="等待收货" ></el-step>
        <el-step title="确定收货" ></el-step>
    </el-steps>

    <div>
        <el-radio>{{this.radio}}</el-radio>
        <table width="800" cellspacing="36" id = "addArr" >
                <el-radio-group v-model="radio">
                        <el-radio v-for= "item in this.$store.state.userInfo.revAddress" :label=item.city></el-radio>
                </el-radio-group>
        </table>
        <div>
            <router-link to="/profile">
            <el-button type="danger" id="manageAdd">管理收货地址</el-button>
            </router-link>
        </div>

    </div>

    <el-row >
        <el-col :span="4">
            <h2>确认订单信息</h2>
            <el-divider></el-divider>
        </el-col>
    </el-row>

    <el-table ref="multipleTable" :data="tableData" style="width: 100%" >
        <el-table-column   width="250" >
            <template #default="scope">
                <img :src= scope.row.goodsImg alt="img"/>
            </template>
        </el-table-column>
        <el-table-column property="goodsName" label="商品信息" width="250"/>
        <el-table-column property="price" label="单价" />
        <el-table-column property="amount" label="数量" show-overflow-tooltip />
        <el-table-column property="payment" label="付款金额" show-overflow-tooltip />
    </el-table>

    <el-row id = "operationRow">
        <el-col :span="4" :offset="18" >
            <span>总计:{{total}}元</span>
        </el-col>
        <el-col :span="2"  >
                <el-button @click="submitOrder()" id = "submitOrderButton">确认付款</el-button>
        </el-col>
    </el-row>
</template>

<script>
    import {ref} from "@vue/reactivity";
    import {ElMessage} from "element-plus";
    export default {
        name: "ItemPage",
        data() {
            return {
                itemID: '123456',
                tableData: JSON.parse(this.$route.query.value),
                isList: this.$route.query.isCart,
                radio: null,

            }
        },
        methods:{
            submitOrder() {
                //添加到后端的购物车
                for(var i = 0; i < this.tableData.length; i++){
                    this.axios.post("http://localhost:8005/buyer/cart/add", {
                        productId: this.tableData[i].goodsID,
                        count: this.tableData[i].amount,
                    }).catch(function (error) {
                            console.log(error);
                        });
                }



                //发送收货地址让后端生成订单
                this.axios.post("http://localhost:8005/buyer/order/create", {
                    addressId: this.radio.id
                }).then(response => {
                    if(response.data.status == '0'){
                        ElMessage({
                            message: "提交订单成功",
                            type: 'success',
                        });
                        this.$router.push("/home"); //跳转回主页
                    }
                    else{
                        ElMessage({
                            message: "提交失败，稍后再试",
                            type: 'error',
                        });
                    }
                })
                    .catch(function (error) {
                        console.log(error);
                    });

            },
        },
        computed:{
            total(){
                var payment = 0;
                if(this.tableData.length > 0) {
                    for(var i = 0; i < this.tableData.length; i++){
                        payment += this.tableData[i].payment;
                    }
                }
                return payment;
            },
        },
        setup() {
            const num = ref(1)
            return {
                num,
            }
        },
    }
</script>

<style scoped>

    #manageAdd{
        position: relative;
        bottom: 80px;
        right:200px;
        float: right;
    }
    #steps{
        margin-top: 20px;
    }

    #submitOrderButton{
        background-color: #F56C6C;
        color:white;
    }

    #operationRow{
        margin-top: 20px;
        background-color: white;
        padding: 10px;
    }

    #addArr{
        /*float: left;*/
        border-style:solid;
    }

    img{
        width: 50%;
    }
</style>