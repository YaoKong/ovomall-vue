<template>
    <div>
        <table border="1" frame="void">
            <tr>
                <div class="profile">
                    <input type="text" class="in" placeholder="请输入查询内容" />
                    <!-- <input type="text" class="on" id="in" placeholder="请输入查询内容" /> -->
                    <button class="btn_search" onclick="showInput()">搜索</button>
                </div>
            </tr>
        </table>
    </div>
    <div class="column">

        <div class="leftcolumn">
            <img :src=this.$store.state.userInfo.imgURL class="round_icon" alt="">
        </div>
        <div class="rightcolumn">
            <table class="table1">
                <tr>
                    <td>姓名：</td>
                    <td>{{this.$store.state.userInfo.username}}</td>
                </tr>
                <tr>
                    <td> ID：</td>
                    <td>{{this.$store.state.userInfo.id}}</td>
                </tr>
                <tr>
                    <td>性别：</td>
                    <td>{{this.$store.state.userInfo.sex}}</td>
                </tr>
                <tr>
                    <td>邮箱：</td>
                    <td>{{this.$store.state.userInfo.email}}</td>
                </tr>
                <tr>
                    <td>手机号：</td>
                    <td>{{this.$store.state.userInfo.tel}}</td>
                </tr>
                <tr>
                    <td>余额：</td>
                    <td>{{this.$store.state.userInfo.balance}} 元 <el-button type="text" @click="dialogVisible = true">充值</el-button>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <div class="afooter">
        <div class="leftfooter">
            <span class="font1">新建地址</span>
            <table width="600" cellspacing="8" frame="box" class="table2">
                    <tr>
                        <td align="left">收货人:<input type="text" class="t1" placeholder="请输入姓名" v-model="newAddress.name"/></td>
                    </tr>
                    <tr >
                        <td align="left" >手机号: <input type="text" class="t2" placeholder="请输入手机号" v-model="newAddress.mobile"/></td>
                    </tr>
                    <tr >
                        <td align="left" >邮  编: <input type="text" class="t3" placeholder="请输入邮政编码" v-model="newAddress.postcode"/></td>
                    </tr>
                    <tr >
                        <td align="left" >地  址: <input type="text" class="t3" placeholder="请输入您的地址" v-model="newAddress.city" /></td>
                    </tr>
                    <tr>
                        <td> <button class="submit" type="submit" @click="addAddress">新建</button><button class="reset" type="reset">重置</button></td>
                    </tr>
            </table>
        </div>

        <div class="rightfooter">
            <table width="300" cellspacing="8" frame="box" class="table3">
                    <tr>
                        <td align="left" >收货人:</td>
                    </tr>
                    <tr >
                        <td align="left" >手机号:</td>
                    </tr>
                    <tr >
                        <td align="left" >邮  编: </td>
                    </tr>
                    <tr >
                        <td align="left"  >地  址:</td>
                    </tr>
                    <tr>
                        <td> <button class="submit1" >修改</button><button class="reset1" >删除</button></td>
                    </tr>
            </table>
        </div>
    </div>

    <el-dialog
            v-model="dialogVisible"
            title="充值"
            width="30%"

    >
        <el-input v-model="chargeVal" placeholder="请输入充值金额(元)" />
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleCharge = false">确认</el-button>
      </span>
        </template>
    </el-dialog>
</template>

<script>
    import {ElMessage, ElMessageBox} from "element-plus";
    import {ref} from "@vue/reactivity";

    export default {
        name: "profile_person",
        data(){
            return{
                chargeVal: null,
                response: null,
                newAddress:{
                    userId: this.$store.state.userInfo.id ,
                    name: "",
                    phone:"",
                    mobile:"",
                    province:"",
                    city:"",
                    district:"",
                    street:"",
                    postcode:"",
                },
                addressList:this.$store.state.userInfo.revAddress,
                recAddress: [],
            }
        },
        methods:{
            handleCharge(){
                this.axios.post("http://localhost:8005/buyer/charge", {
                    id: this.$store.userInfo.id,
                    chargeVal: this.chargeVal,
                })
                    .then(response => (this.response = response))
                    .catch(function (error) {
                        console.log(error);
                    });

                if(this.response.data.data.status == "0"){
                    this.$store.userInfo.balance = this.response.data.data.balance;
                }
                else{
                    ElMessage({
                        message: "充值失败，稍后再试",
                        type: 'error',
                    });
                }

            },
            addAddress(){

                this.axios.post("http://localhost:8005/buyer/address/add", this.newAddress)
                    .then(response => (this.response = response))
                    .catch(function (error) {
                        console.log(error);
                    });

                if(this.response.data.status == "0"){
                    ElMessage({
                        message: "添加成功",
                        type: 'success',
                    });
                }
                else{
                    ElMessage({
                        message: "充值失败，稍后再试",
                        type: 'error',
                    });
                }
            },
        },
        setup() {
            const dialogVisible = ref(false)
            //更新个人信息
            this.axios.post("http://localhost:8005/buyer/address/list", {
                username: this.loginForm.username,
                password: this.loginForm.pwd,
            }).then(response => (this.recAddress = response.data.data.filter(address => address.userId == this.info.id)))
                .catch(function (error) {
                    console.log(error);
                });

            this.axios.get("http://localhost:8005/buyer/get_information",).then(response => {
                if(response.data.status == "0"){
                    this.$store.dispatch("createUser", {
                        username: response.data.username,
                        id: response.data.id,
                        sex: response.data.sex,
                        pwd: response.data.password,
                        email: response.data.email,
                        tel: response.data.phone,
                        imgURL: response.data.imgURL,
                        revAddress: this.revAddress,
                        balance: response.data.balance,
                    });
                }})
                .catch(function (error) {
                    console.log(error);
                });
            return {
                dialogVisible,
            }
        },
    }
</script>

<style scoped>
    .profile{
        position: relative;
        top: 0;

    }

    .in{
        width:250px;
        height:30px;
        border:2px solid red;
        /* padding-left: 10px; */
        /* border-radius: 0px; */
        outline:none;
        font:16px/34px "microsoft yahei";
        position: relative;
        top: 50px;
        left:1000px;

    }
    .btn_search{
        position: relative; /*固定在顶部*/
        top: 50px; /*离顶部的距离为*/
        left:1030px;
        width:50px;
        height:30px;
        color:red;
    }
    .column{
        float:left;
        width:100%;

        background:rgb(225, 225, 225);
    }
    .leftcolumn{
        float:left;
        width:25%;

    }
    .rightcolumn{
        float:left;
        width:75%;

    }
    .round_icon{
        margin:10px auto;
        border-radius:50%;
        height:200px;
        width:200px;
        position: relative;
        left:50px;
        top:10px;
    }
    .leftfooter{
        float:left;
        width:50%;
    }

    .table1{
        position: relative;
        top:10px;
        left:70px;
        font-size:20px;
        line-height:35px;
    }
    .font1{
        font-size:20px;
        position: relative;
        left:10px;
    }
    .table2{
        top:0px;
    }
    .t1{
        width:330px;
        height:30px;
        border:1px solid ;
        /* padding-left: 10px; */
        /* border-radius: 0px; */
        outline:none;
        font:16px/34px "microsoft yahei";
        position: relative;
        top: 5px;
        left:80px;
    }
    .t2{
        width:330px;
        height:30px;
        border:1px solid ;
        /* padding-left: 10px; */
        /* border-radius: 0px; */
        outline:none;
        font:16px/34px "microsoft yahei";
        position: relative;
        top: 5px;
        left:75px;
    }
    .t3{
        width:330px;
        height:30px;
        border:1px solid ;
        /* padding-left: 10px; */
        /* border-radius: 0px; */
        outline:none;
        font:16px/34px "microsoft yahei";
        position: relative;
        top: 5px;
        left:85px;
    }
    .t4{
        width:330px;
        height:30px;
        border:1px solid ;
        /* padding-left: 10px; */
        /* border-radius: 0px; */

        outline:none;
        font:16px/34px "microsoft yahei";
        position: relative;
        top: 5px;
        left:85px;
    }
    .submit{
        text-decoration:none;
        background:red;
        color:#f2f2f2;

        padding: 7px 55px 7px 55px;
        font-size:16px;
        font-family: 微软雅黑,宋体,Arial,Helvetica,Verdana,sans-serif;
        font-weight:bold;
        border-radius:15px/15%;

        -webkit-transition:all linear 0.30s;
        -moz-transition:all linear 0.30s;
        transition:all linear 0.30s;
        position: relative;
        left:130px;
    }
    .reset{
        text-decoration:none;
        background:gray;
        color:#f2f2f2;

        padding: 7px 55px 7px 55px;
        font-size:16px;
        font-family: 微软雅黑,宋体,Arial,Helvetica,Verdana,sans-serif;
        font-weight:bold;
        border-radius:15px/15%;

        -webkit-transition:all linear 0.30s;
        -moz-transition:all linear 0.30s;
        transition:all linear 0.30s;
        position: relative;
        left:170px;
    }
    .rightfooter{
        float:right;
        width:50%;
        overflow:hidden;
        overflow-x:scroll;
        white-space:nowrap;
        height:250px;
        width:50%;

    }
    .table3{
        position: relative;
        top:50px;
    }
    .submit1{
        text-decoration:none;
        background:red;
        color:#f2f2f2;

        padding: 2px 16px 2px 16px;
        font-size:5px;
        font-family: 微软雅黑,宋体,Arial,Helvetica,Verdana,sans-serif;
        font-weight:bold;
        border-radius:15px/15%;

        -webkit-transition:all linear 0.30s;
        -moz-transition:all linear 0.30s;
        transition:all linear 0.30s;
        position: relative;
        left:80px;
    }
    .reset1{
        text-decoration:none;
        background:gray;
        color:#f2f2f2;

        padding: 2px 16px 2px 16px;
        font-size:5px;
        font-family: 微软雅黑,宋体,Arial,Helvetica,Verdana,sans-serif;
        font-weight:bold;
        border-radius:15px/15%;

        -webkit-transition:all linear 0.30s;
        -moz-transition:all linear 0.30s;
        transition:all linear 0.30s;
        position: relative;
        left:120px;
    }
</style>