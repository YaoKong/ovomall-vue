<template>
    <el-container direction="vertical">
        <div id="gContainer" >
            <el-col>
                <img class="try2" width="400" height="400" :src= this.$route.query.imgURL alt="">
            </el-col>
            <el-col :offset="4">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="商品名">
                        {{this.$route.query.goodsName}}
                    </el-form-item>
                    <el-form-item label="单价">
                        {{this.$route.query.price}}
                    </el-form-item>
                    <el-form-item label="型号">
                        <el-radio-group v-model="radio" fill="#F56C6C">
                            <el-radio-button :label=this.$route.query.modelNum></el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="购买数量">
                        <el-input-number v-model=goodsForm.amount :min="1" :max="999" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="buyGoods" color="#F56C6C" style="color: white" >立即购买</el-button>
                        <el-button @click="addCart">加入购物车</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </div>
        <div id="goodsTab">
            <el-tabs type="border-card">
                <el-tab-pane label="商品介绍">
                    {{this.$route.query.description}}
                </el-tab-pane>
                <el-tab-pane label="评价">
                    <el-input
                            v-model="remarkText"
                            :autosize="{ minRows: 2, maxRows: 10 }"
                            type="textarea"
                            placeholder="请输入评价"
                    >
                    </el-input>
                    <el-button v-model="remarkText" @click="remarkGoods">发表评价</el-button>
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-container>

</template>

<script>
    import {ref} from "@vue/reactivity";
    import {ElMessage} from "element-plus";
    export default {
        name: "GoodsPage",
        data() {
            return {
                goodsForm: {
                    goodsName: this.$route.query.goodsName,
                    price: this.$route.query.price,
                    goodsImg: this.$route.query.imgURL,
                    goodsID: this.$route.query.goodsID,
                    userID: this.$store.state.userInfo.id,
                    amount: 1,
                    payment: 0,
                },
                remarkText:"",
                radio:null,
            }
        },
        methods: {
            buyGoods() {
                if(this.radio != null){
                    this.goodsForm.payment = this.goodsForm.amount * this.goodsForm.price;
                    this.$router.push({
                        name:'item',
                        query: {
                            value:JSON.stringify([this.goodsForm]),
                        }});
                }
                else{
                    this.goodsForm.payment = this.goodsForm.amount * this.goodsForm.price;
                    this.$store.dispatch("addCart", this.goodsForm);
                    ElMessage({
                        message: '请先选择型号!',
                        type: 'error',
                    });
                }
            },
            addCart() {
                if(this.radio != null){
                    ElMessage({
                        message: '成功加入购物车!',
                        type: 'success',
                    });
                }
                else{
                    this.goodsForm.payment = this.goodsForm.amount * this.goodsForm.price;
                    this.$store.dispatch("addCart", this.goodsForm);
                    ElMessage({
                        message: '请先选择型号!',
                        type: 'error',
                    });
                }

            },
            remarkGoods() {

                ElMessage({
                    // message: '提交成功，审核后显示!',
                    message: this.$route.query,
                    type: 'success',
                });
            },
        },
        setup() {

        },
    }
</script>

<style scoped>

    #gContainer{
        position: relative;
        top:20px;
        width:100%;
    }
    #goodsTab{
        width:100%;
        position: relative;
        top:40px;
    }

</style>