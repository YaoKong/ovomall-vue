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
            <img src="../assets/图标/icon.jpg" class="round_icon" alt="">
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
                    <td>{{this.$store.state.userInfo.balance}} <button>充值</button></td>
                </tr>
            </table>
        </div>
    </div>

    <div class="afooter">
        <div class="leftfooter">
            <span class="font1">新建地址</span>
            <table width="600" cellspacing="8" frame="box" class="table2">
                    <tr>
                        <td align="left">收货人:<input type="text" class="t1" placeholder="请输入姓名" /></td>
                    </tr>
                    <tr >
                        <td align="left" >手机号: <input type="text" class="t2" placeholder="请输入手机号" /></td>
                    </tr>
                    <tr >
                        <td align="left" >邮  编: <input type="text" class="t3" placeholder="请输入邮政编码" /></td>
                    </tr>
                    <tr >
                        <td align="left" >地  址: <input type="text" class="t3" placeholder="请输入您的地址" /></td>
                    </tr>
                    <tr>
                        <td> <button class="submit" type="submit">新建</button><button class="reset" type="reset">重置</button></td>
                    </tr>
            </table>
        </div>

        <div class="rightfooter">
            <table width="300" cellspacing="8" frame="box" class="table3">
                    <tr>
                        <td align="left">收货人:</td>
                    </tr>
                    <tr >
                        <td align="left" >手机号:</td>
                    </tr>
                    <tr >
                        <td align="left" >邮  编: </td>
                    </tr>
                    <tr >
                        <td align="left" >地  址:</td>
                    </tr>
                    <tr>
                        <td> <button class="submit1" >修改</button><button class="reset1" >删除</button></td>
                    </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "profile_person"
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