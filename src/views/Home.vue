<template>
    <Search></Search>
    <el-row class="table">
        <el-col :span="2">
<!--            <el-menu-->
<!--                    default-active="2"-->
<!--                    class="el-menu-vertical-demo"-->
<!--                    @open="handleOpen"-->
<!--                    @close="handleClose"-->
<!--            >-->
<!--                <el-menu-item index="1" :offset="1">-->
<!--                    <el-icon><setting /></el-icon>-->
<!--                    <span>系列1</span>-->
<!--                </el-menu-item>-->
<!--                <el-menu-item index="2">-->
<!--                    <el-icon><icon-menu /></el-icon>-->
<!--                    <span>系列1</span>-->
<!--                </el-menu-item>-->
<!--                <el-menu-item index="3">-->
<!--                    <el-icon><document /></el-icon>-->
<!--                    <span>系列1</span>-->
<!--                </el-menu-item>-->
<!--                <el-menu-item index="4">-->
<!--                    <el-icon><setting /></el-icon>-->
<!--                    <span>系列1</span>-->
<!--                </el-menu-item>-->
<!--            </el-menu>-->
        </el-col>
        <el-col :span="15" :offset="1" id="carousel">
        <el-carousel indicator-position="outside" >

            <el-carousel-item v-for="item in (goodsTable.slice(0,4))" :key="item" id="max">
                <router-link :to="{name:'goodsPage', query: item}">
                    <img :src=item.imgURL alt="" class="carouselImg">
                </router-link>
            </el-carousel-item>

        </el-carousel>
        </el-col>
    </el-row>


    <div class="rec">
        <span class="recommended">推荐商品</span>

        <div class="c" >
            <a href="https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.5&type=1" target="_blank"
               v-for="(item, index) in goodsTable">
                <img  v-if="index === 0" class="try" width="410" height="410" :src=item.imgURL alt="">
                <img v-else class="try2" width="200" height="200" :src= item.imgURL alt="">
            </a>
        </div>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/footer.vue'
    import Search from "../components/Search.vue";
    export default {
        name: "home",
        data(){
          return {
              goodsTable:[
                  {
                  goodsName: "拯救者 R7000 15.6英寸游戏笔记本 幻影黑",    //商品名
                  goodsID :"1",
                  modelNum : "拯救者 R7000",    //型号
                  imgURL :"https://p1.lefile.cn/product/adminweb/2021/10/18/gLnPEamlCPvOn2qwrWbCmPQuH-6143.w520.jpg",   //图片地址
                  price: 5999,  //价格(元）
                  description: "AMD Ryzen 5 5600H/Windows 11 家庭中文版/15.6英寸/16G/512G SSD/ GeForce RTX 3050 4G独显/幻影黑",  //商品描述,
                      remarks: [],  //商品评价，保存用户的所有评价
              },
                  {
                      goodsName: "2021款 小新 Pro 16 锐龙版16.0英寸全面屏轻薄笔记本 深空灰",    //商品名
                      goodsID :"2",
                      modelNum : "小新 Pro 16",    //型号
                      imgURL :"https://p2.lefile.cn/product/adminweb/2021/10/19/RJ7FH6WZnns16KGGuAmDD76a6-9533.w520.jpg",   //图片地址
                      price: 6999,  //价格(元）
                      description: "AMD Ryzen 7 5800H/Windows 11 家庭中文版/16.0英寸/16GB/512G SSD/Geforce RTX 3050 4G独显/深空灰",  //商品描述
                      remarks: [],  //商品评价，保存用户的所有评价

                  }
                  ,
                  {
                  goodsName: "小新 Air 14 2021酷睿版 14.0英寸全面屏轻薄笔记本电脑 亮银",    //商品名
                  modelNum : "小新 Air 14",    //型
                  goodsID :"3",
                  imgURL :"https://p1.lefile.cn/product/adminweb/2021/10/19/5UklkCThYN1EkMbOrCr8fc427-2522.w520.jpg",   //图片地址
                  price: 4399,  //价格(元）
                  description: "第11代英特尔酷睿i5-1155G7/Windows 11 家庭中文版/14.0英寸/16G/512G SSD/集成显卡/亮银",  //商品描述
                      remarks: [],  //商品评价，保存用户的所有评价

                  },
                  {
                  goodsName: "YOGA 13s 2021款 锐龙版 13.3英寸全面屏超轻薄笔记本电脑 深灰色",    //商品名
                  modelNum : "YOGA 13s",    //型号
                      goodsID :"4",
                  imgURL :"https://p2.lefile.cn/product/adminweb/2021/09/27/ShS0xAzPKP5fF4cRl0yIxH9G6-5945.w520.jpg",   //图片地址
                  price: 4799,  //价格(元）
                  description: "AMD Ryzen5 5600U/Windows 11 家庭中文版/13.3英寸/16GB/512G SSD/集成显卡/深灰色",  //商品描述
                      remarks: [],  //商品评价，保存用户的所有评价

                  },
                  {
                      goodsName: "小新 Air14Plus 2021 14.0英寸全面屏轻薄笔记本电脑 深空灰",    //商品名
                      goodsID :"5",
                      modelNum : "小新 Air14Plu",    //型号
                      imgURL :"https://p4.lefile.cn/product/adminweb/2021/10/19/c9MkoXAMct2gpMVUK7uJf0NYm-7346.w520.jpg",   //图片地址
                      price: 4999,  //价格(元）
                      description: "AMD Ryzen 5 5600U/Windows 11 家庭中文版/14.0英寸/16G/512G SSD/GeForce MX450 2G独显/深空灰",  //商品描述
                      remarks: [],  //商品评价，保存用户的所有评价

                  },
                  {
                      goodsName: "联想小新 Pro14 英特尔Evo平台 超能轻薄本酷睿i5笔记本电脑 亮银",    //商品名
                      goodsID :"6",
                      modelNum : "小新 Pro14",    //型号
                      imgURL :"https://p3.lefile.cn/product/adminweb/2021/09/27/jBZB1ATwUJdOR6EWVwDIMALpv-0362.w520.jpg",   //图片地址
                      price: 5299,  //价格(元）
                      description: "第11代英特尔酷睿标压i5-11320H/Windows 11 家庭中文版/14.0英寸/16GB/512G SSD/2.8K 90Hz 低蓝光护眼/集成显卡/亮银",  //商品描述
                      remarks: [],  //商品评价，保存用户的所有评价

                  },
                  {
                      goodsName: "拯救者 Y7000P 2021款 英特尔酷睿i5 15.6英寸游戏笔记本 幻影黑",    //商品名
                      goodsID :"7",
                      modelNum : "拯救者 Y7000P",    //型号
                      imgURL :"https://p4.lefile.cn/product/adminweb/2021/06/15/Is7YIcvO4GUIaMqdnVZX6WFq1-6472.w520.jpg",   //图片地址
                      price: 7899,  //价格(元）
                      description: "第11代英特尔®酷睿™i5-11400H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce RTX™ 3050Ti 4G独显/幻影黑【win10/win11随机发货】",  //商品描述
                      remarks: [],  //商品评价，保存用户的所有评价

                  },
                  {
                      goodsName: "YOGA 14c 2021款 锐龙版 14英寸全面屏超轻薄笔记本电脑 深空灰",    //商品名
                      goodsID :"8",
                      modelNum : "YOGA 14c",    //型号
                      imgURL :"https://p3.lefile.cn/product/adminweb/2021/05/28/9rjw1LPB26eUA2c1iWTCOvqUU-6807.w520.jpg",   //图片地址
                      price: 5999,  //价格(元）
                      description: "AMD Ryzen 7 5800U/Windows 11 家庭中文版/14.0英寸/16G/512G SSD/集成显卡/深空灰",  //商品描述
                      remarks: [],  //商品评价，保存用户的所有评价

                  },
                  {
                      goodsName: "ideapad 14s 英特尔酷睿i3 14.0英寸笔记本 银色",    //商品名
                      goodsID :"9",
                      modelNum : "ideapad 14s ",    //型号
                      imgURL :"https://p1.lefile.cn/product/adminweb/2021/10/26/lpFfAyORAcNZJgtMyFVkBavXq-6954.w520.jpg",   //图片地址
                      price: 3199,  //价格(元）
                      description: "第十代英特尔酷睿i3-1005G1/Windows 11 家庭中文版/14.0英寸/8G/512G SSD/集成显卡/银色",  //商品描述
                      remarks: [],  //商品评价，保存用户的所有评价

                  },]
          }
        },
        components:{
            NavBar,
            Footer,
            Search,
        }
    }
</script>

<style>
    .table{
        top: 70px;
        left: 50px;
        float:left;
        width:100%;
    }
    .table2{
        position: relative; /*固定在顶部*/
        top: 80px; /*离顶部的距离为*/

    }
    .right{
        position: relative;
        top: 50px;
        float:left;
        width:50%;
    }

    #carousel{
        top:50px;
        height: 50%;
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
        margin-top: 80px;
        margin-bottom: 20px;
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

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }

    .carouselImg{
        width: 100%;
        height: 100%;
    }
</style>