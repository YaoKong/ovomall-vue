<template>
    <el-steps :active="1" align-center id = "steps">
        <el-step title="提交订单" ></el-step>
        <el-step title="等待收货" ></el-step>
        <el-step title="确定收货" ></el-step>
    </el-steps>

    <div>
        <el-radio v-model="radio1" label="1">此处为地址</el-radio>
        <table width="800" cellspacing="36" id = "addArr" >
            <tr>
                <td>
                 <ul  class="infinite-list" style="overflow: auto">
                    <li class="infinite-list-item">
                        <el-radio v-model="radio1" label="1">此处为地址</el-radio>
                    </li>
                </ul>
                </td>
            </tr>
        </table>
        <div>
            <el-button type="danger" id="manageAdd">管理收货地址</el-button>
        </div>

    </div>

    <el-row >
        <el-col :span="4">
            <h2>确认订单信息</h2>
            <el-divider></el-divider>
        </el-col>
    </el-row>

    <el-table ref="multipleTable" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column property="info" label="商品信息" width="250">
            <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="price" label="单价" />
        <el-table-column property="number" label="数量" show-overflow-tooltip >

        </el-table-column>
        <el-table-column property="amount" label="付款金额" show-overflow-tooltip />
    </el-table>

    <el-row id = "operationRow">
        <el-col :span="2" :offset="18" >
            <span>实付款: XX 元</span>
        </el-col>
        <el-col :span="2" :offset="2" >
            <router-link to="/Home">
                <el-button @click="submitOrder()" id = "submitOrderButton">确认付款</el-button>
            </router-link>
        </el-col>
    </el-row>
</template>

<script>
    import {ref} from "@vue/reactivity";
    export default {
        name: "ItemPage",
        data() {
            return {
                itemID: '123456',
                tableData: [
                    {
                        goodsID :'1',   //商品ID
                        ItemNum: '1',   //订单号
                        amount: 1,    //商品购买数量
                        userID:100,  //订单所属用户的ID
                        payment: 1000,  //付款金额
                        recAddress :' 翻斗花园',    //收货地址
                        status: '待收货',  //待收货、已完成
                    },

                ],
                multipleSelection: [],
            }
        },
        methods:{
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
                this.multipleSelection = val
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
</style>