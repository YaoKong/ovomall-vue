<template>
    <el-row>
        <el-col :span="2"><h2>购物车</h2><el-divider></el-divider></el-col>

    </el-row>
        <el-table ref="multipleTable" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" label="全选" width="55" />
            <el-table-column property="info" label="商品信息" width="120">
                <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column property="price" label="单价" width="120" />
            <el-table-column property="number" label="数量" show-overflow-tooltip />
            <el-table-column property="amount" label="付款金额" show-overflow-tooltip />
            <el-table-column property="operation" label="操作" show-overflow-tooltip />

        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">取消全选</el-button>
        </div>
    </template>

<script>
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
                        operation: '删除',
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
        },
    }
</script>

<style>

</style>