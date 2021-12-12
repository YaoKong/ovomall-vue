<template>
    <el-row >
        <el-col :span="2"><h2>购物车</h2><el-divider></el-divider></el-col>

    </el-row>
    <el-table ref="multipleTable" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" label="全选" width="250" />
            <el-table-column property="info" label="商品信息" width="250">
                <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column property="price" label="单价" />
            <el-table-column property="number" label="数量" show-overflow-tooltip ><el-input-number v-model="num" :min="1" @change="handleChange" /></el-table-column>
            <el-table-column property="amount" label="付款金额" show-overflow-tooltip />
            <el-table-column label="操作" show-overflow-tooltip ><el-button type="text">删除</el-button></el-table-column>

    </el-table>

    <el-row id = "operationRow">
        <el-col :span="2" ><el-button @click="toggleSelection()">取消全选</el-button></el-col>
        <el-col :span="2" :offset="20" ><el-button @click="submitOrder()" id = "submitOrderButton">提交订单</el-button></el-col>
    </el-row>

    </template>

<script>
    import {ref} from "@vue/reactivity";

    export default {
        name: "ShoppingCart",
        data() {
            return {
                tableData: [
                    {
                        info: '基本信息',
                        price:"100",
                        number: '1.0',
                        amount: '1',
                    },

                ],
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
                this.multipleSelection = val
            },
            submitOrder(){

            }
        },
        setup() {
            const num = ref(1)
            const handleChange = (value) => {
                console.log(value)
            }
            return {
                num,
                handleChange,
            }
        },
    }
</script>



<style>
    #submitOrderButton{
        background-color: #F56C6C;
        color:white;
    }

    #operationRow{
        margin-top: 20px;
        background-color: white;
        padding: 10px;
    }
</style>