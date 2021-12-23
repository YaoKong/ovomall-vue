<template>
    <input type="text" class="in2" placeholder="在此输入订单名称" />
    <!-- <input type="text" class="on" id="in" placeholder="请输入查询内容" /> -->
    <button class="btn_search2" onclick="showInput()">搜索</button>

    <div class="column">
        <span >商品</span>
        <span class="uprice">单价</span>
        <span class="quantity">数量</span>
        <span class="pay">实付款</span>
        <span class="state">状态</span>
        <span class="opera">操作</span>
    </div>

    <div class="root">
        <fieldset :v-for="order in orderEntityVoList">
<!--            <img src="../assets/图标/icon.jpg" height="100px" width="100px" class="sp">-->
<!--            <span class="uprice2">{{order.price}}</span>-->
<!--            <span class="quantity2">{{order.quantity}}</span>-->
<!--            <span class="pay2">{{order.price * order.quantity}}</span>-->
<!--            <span class="state2">待评价</span>-->
<!--            <button class="evaluate">评价</button>-->
        </fieldset>
    </div>
</template>

<script>

    export default {
        name: "profile_oForm",
        data(){
            return{
                orderEntityVoList: [],
            }
        },
        setup() {
            // this.axios.post("http://localhost:8005/buyer/address/order", {
            // }).then(response => (this.orderEntityVoList = response.data.data.list))
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        },
    }
</script>

<style scoped>
    .profile a{

        font-size:50px;

    }
    .in2{
        width:450px;
        height:25px;
        border:2px solid red;
        /* padding-left: 10px; */
        /* border-radius: 0px; */
        outline:none;
        font:16px/34px "microsoft yahei";


    }
    .btn_search2{

        width:55px;
        height:25px;
        color:red;
    }
    .column{
        height: 45px;
        width:100%;
        background:rgb(225, 225, 225);
        font-size:35px;
    }
    .uprice{
        position:relative;
        left:350px;
    }
    .quantity{
        position:relative;
        left:470px;
    }
    .pay{
        position:relative;
        left:590px;
    }
    .state{
        position:relative;
        left:710px;
    }
    .opera{
        position:relative;
        left:830px;
    }
    .root{
        float:right;
        width:100%;
        overflow:hidden;
        overflow-y:scroll;
        white-space:nowrap;
        height:540px;
        width:100%;

    }
    .sp{
        border: 5px solid #999999;
    }
    .uprice2{
        font-size:25px;
        position:relative;
        left:300px;

    }
    .quantity2{
        font-size:25px;
        position:relative;
        left:440px;
    }
    .pay2{
        font-size:25px;
        position:relative;
        left:590px;
    }
    .state2{
        font-size:25px;
        position:relative;
        left:750px;
    }
    .evaluate{
        width:80px;
        height:25px;
        position:relative;
        left:880px;
        background-color:#00bfff;
        border-radius:15px/15%;

    }
</style>