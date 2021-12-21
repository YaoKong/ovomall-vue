<template>
    <el-row >
        <el-col :span="2"><h2>购物车</h2><el-divider></el-divider></el-col>
    </el-row>
    <el-table ref="multipleTable" :data=tableData style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" label="全选"  />
        <el-table-column   width="250" >
            <template #default="scope">
                <img :src= scope.row.goodsImg alt="img"/>
            </template>
        </el-table-column>
            <el-table-column property="goodsName" label="商品信息" width="250">
            </el-table-column>
            <el-table-column property="price" label="单价" />
            <el-table-column property="amount" label="数量" show-overflow-tooltip >
                <template #default="scope">
                    <el-input-number v-model=scope.row.amount :min='1' @change="handleChange(scope.row)" />
                </template>
            </el-table-column>
            <el-table-column property="payment" label="付款金额" show-overflow-tooltip />
            <el-table-column label="操作" show-overflow-tooltip >
                <template #default="scope">
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">
                    删除</el-button>
                </template>
            </el-table-column>
    </el-table>

    <el-row id = "operationRow">
        <el-col :span="2" ><el-button @click="toggleSelection()">取消全选</el-button></el-col>
        <el-col :span="2" :offset="18">总计:{{total}}元</el-col>
            <el-col :span="2"  >
                <el-button @click="submitOrder()" id = "submitOrderButton">结算</el-button>
            </el-col>
    </el-row>
</template>

<script>
    import {ref} from "@vue/reactivity";
    import {ElMessage} from "element-plus";

    export default {
        name: "ShoppingCart",
        data() {
            return {
                tableData: this.$store.state.cartList,
                multipleSelection: [],
            }
        },
        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach((row) => {
                        this.$refs.multipleTable.toggleRowSelection(row)
                    })
                } else {
                    this.$refs.multipleTable.clearSelection()
                }
            },
            handleSelectionChange(val) {
                console.log(val)
                this.multipleSelection = val
            },
            submitOrder(){
                if(this.$store.state.isAuth){
                    this.$router.push({
                        path:"/items",
                        query: {
                            value : this.multipleSelection,
                            isCart: true
                        }
                    });
                }
                else{
                    ElMessage({
                        message: '请先登录!',
                        type: 'error',
                    });
                }
            },
            handleDelete(index, row){
                this.$store.dispatch("deleteCart", row);
                this.tableData = this.$store.state.cartList;
                ElMessage({
                    message: '删除成功!',
                    type: 'success',
                });
            },
            handleChange(value){
                value.payment = value.price * value.amount;
                this.$store.state.cartList = this.tableData;
            },
        },
        computed:{
            total(){
                var payment = 0;
                if(this.multipleSelection.length > 0) {
                    for(var i = 0; i < this.multipleSelection.length; i++){
                        payment += this.multipleSelection[i].payment;
                    }
                }
                return payment;
            },
        },
        setup() {

        },
    }
</script>



<style scoped>
    #submitOrderButton{
        background-color: #F56C6C;
        color:white;
    }

    #operationRow{
        margin-top: 20px;
        background-color: white;
        padding: 10px;
    }
    img{
        width: 80%;
    }

</style>