<template>
    <div class="search" >
        <img class="lenovo" width=188 height=50 src="../assets/图标/dashboard_lenovo.png" alt = "" >
<!--        <button class="lenovo" onclick="showInput()">搜索</button>-->
        <input type="text" class="in" placeholder="请输入查询内容" />
        <!-- <input type="text" class="on" id="in" placeholder="请输入查询内容" /> -->
        <button class="btn_search" onclick="showInput()">搜索</button>
    </div>

    <div class="table" >
        <table class="table2" border="1" width="200" height="320" >
            <tr>
                <td align="center">系列1</td>

            </tr>
            <tr>
                <td align="center">系列1</td>

            </tr>
            <tr>
                <td align="center">系列1</td>

            </tr>
            <tr>
                <td align="center">系列1</td>

            </tr>
            <tr>
                <td align="center">系列1</td>

            </tr>
        </table>

    </div>
    <div class="right">
        <div id="max">
            <div class="re">
                <ul>
                    <li>

                        <a href="https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.5&type=1" target="_blank">
                            <img width="100" height="100" src="../assets/图标/lenovo1.jpg" alt="">

                        </a>
                    </li>
                    <li><img width="100" height="100" src="../assets/图标/lenovo2.jpg" alt=""></li>
                    <li><img width="100" height="100" src="../assets/图标/lenovo3.jpg" alt=""></li>
                    <li><img width="100" height="100" src="../assets/图标/lenovo4.jpg" alt=""></li>
                    <li><img width="100" height="100" src="../assets/图标/lenovo5.jpg" alt=""></li>
                </ul>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
        </div>
    </div>
    <div class="rec">
        <span class="recommended">推荐商品</span>

        <div class="c" >

            <a href="https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.5&type=1" target="_blank">
                <img class="try" width="410" height="410" src="../assets/图标/lenovo2.jpg" alt="">
            </a>
            <a href="https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.5&type=1" target="_blank">
                <img class="try2" width="200" height="200" src="../assets/图标/lenovo2.jpg" alt="">
            </a>

            <a href="https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.5&type=1" target="_blank">
                <img class="try3" width="200" height="200" src="../assets/图标/lenovo2.jpg" alt="">
            </a>
            <a href="https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.5&type=1" target="_blank">
                <img class="try4" width="200" height="200" src="../assets/图标/lenovo2.jpg" alt="">
            </a>
            <a href="https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.5&type=1" target="_blank">
                <img class="try5" width="200" height="200" src="../assets/图标/lenovo2.jpg" alt="">
            </a>
            <a href="https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.5&type=1" target="_blank">
                <img class="try6" width="200" height="200" src="../assets/图标/lenovo2.jpg" alt="">
            </a>
            <a href="https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.5&type=1" target="_blank">
                <img class="try7" width="200" height="200" src="../assets/图标/lenovo2.jpg" alt="">
            </a>
            <a href="https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.5&type=1" target="_blank">
                <img class="try8" width="200" height="200" src="../assets/图标/lenovo2.jpg" alt="">
            </a>
            <a href="https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.5&type=1" target="_blank">
                <img class="try9" width="200" height="200" src="../assets/图标/lenovo2.jpg" alt="">
            </a>
        </div>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/footer.vue'
    window.onload = function(){
        var box=this.document.getElementsByClassName("re")[0];
        var lik=box.getElementsByTagName("li");
        function fun(i,j){//转换图片函数，就是把透明度改了一下
            lik[i].style.opacity=1;
            lik[j].style.opacity=0;
            lik[i+5].style.backgroundColor="#ffffff";//改一下小图标
            lik[j+5].style.backgroundColor="#00000000"
        }
        fun(0,1);//初始化下
        var i =0;
        function auto(){//轮播循环函数
            if(++i>=5){
                i=0;
                fun(0,4);
            }
            else fun(i,i-1);
        }
        timer=this.setInterval(auto,2000);
        box.onmouseover = function () { //鼠标划上去，停止轮播
            console.log('good');
            clearInterval(timer);
        }
        box.onmouseout = function () { //鼠标划出，继续轮播
            timer = setInterval(auto, 2000); //调用定时器
        }
        var j =0;
        for(;j<5;j++){//点击小图标也可以转换图片
            lik[j+5].ind=j;
            lik[j+5].onclick=function(){
                fun(this.ind,i)
                i=this.ind;
            }
        }
    }

    export default {
        name: "home",
        components:{
            NavBar,
            Footer
        }
    }
</script>

<style>
    .lenovo{
        position: relative;
        top: 50px;
    }
    .in{
        width:850px;
        height:50px;
        border:2px solid red;
        /* padding-left: 10px; */
        /* border-radius: 0px; */
        outline:none;
        font:16px/34px "microsoft yahei";
        position: relative;
        top: 35px;
        left:80px;

    }
    .btn_search{
        position: relative; /*固定在顶部*/
        top: 35px; /*离顶部的距离为*/
        left:150px;
        width:80px;
        height:50px;
        color:red;
    }
    .table{

        float:left;
        width:10%;


    }
    .table2{
        position: relative; /*固定在顶部*/
        top: 70px; /*离顶部的距离为*/

    }
    .right{
        float:left;
        width:90%;
    }

    .re{
        position: relative;
        top:0;
        left:80px;
    }
    .re ul{
        list-style-type:none ;
    }
    .re ul>li{
        width: 600px;
        height: 100px;
        position: absolute;

        transition: 1s;
        opacity: 0;
    }
    .re ul>li img{
        width: 900px;
        height: 320px;
        /* border-radius: 10%; */
        border: 5px solid #cdcdcd;
        position: relative;
        top: 50px;
        left: 0;

    }
    #max ol {
        position: relative;
        display: grid;
        grid-template-columns: repeat(5,75px);
        grid-template-rows: auto;
        grid-gap: 1em;gap: 1em;
        float: left;
        margin-top: 360px;
        list-style: none;
        top:0;left:30px;
    }
    #max ol li {
        width: 25px;
        height: 10px;
        font-size: 15px;
        line-height: 20px;
        float: left;
        text-align: center;
        border-radius: 2em;
        border: 5px solid #999999;
    }
    .rec{
        float:left;
        width:100%;
    }
    .recommended{
        position: relative;
        top: 0;
        left:0;
        font-size:20px;

    }
    .c{

    }
    .try{

        border: 10px solid #999999;
        float:left;

    }
    .try2{

        border: 10px solid #999999;
        float:left;
        border-bottom:5px solid #999999;
    }
    .try3{

        border: 10px solid #999999;
        float:left;
        border-bottom:5px solid #999999;
    }
    .try4{

        border: 10px solid #999999;
        float:left;
        border-bottom:5px solid #999999;
    }
    .try5{

        border: 10px solid #999999;
        float:left;
        border-bottom:5px solid #999999;
    }
    .try6{

        border: 10px solid #999999;
        float:left;
        border-top:5px solid #999999;
    }
    .try7{

        border: 10px solid #999999;
        float:left;
        border-top:5px solid #999999;
    }
    .try8{

        border: 10px solid #999999;
        float:left;
        border-top:5px solid #999999;
    }
    .try9{

        border: 10px solid #999999;
        float:left;
        border-top:5px solid #999999;
    }
</style>