<template>
    <button class="btn_search" onclick="showInput()">搜索</button>

    <div class="column">
        <div class="leftcolumn">
            <el-upload
                    class="avatar-uploader"
                    action="/uploadImg"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
            >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><plus />点击上传头像</el-icon>
            </el-upload>
        </div>
        <div class="rightcolumn">
            <fieldset class="fset">
                <span class="chara1">修改密码</span>
                <form name="form" method="post" action="#">
                    <p>原始密码：<input type="password" name="oldpassword" class="oldpassword"></p>
                    <p class="p1">新密码：<input type="password" name="newpassword" class="newpassword"></p>
                    <p>确认密码：<input type="password" name="repassword" class="repassword"></p>
                    <p> <input type="submit" name="submit" value="更改密码" class="changepassword"></p>
                </form>
            </fieldset>
        </div>
    </div>

    <fieldset class="fset2">
        <span class="chara2">修改信息</span>
        <span><input type="submit" name="submit" value="保存信息" class="save"></span>
        <form name="form" method="post" action="#">
            <p>用户名：<input type="text" name="name" class="name"></p>
            <p class="p1">性别：<input type="password" name="newpassword" class="newpassword"></p>
            <p class="p1">邮箱：<input type="text" name="mail" class="mail"></p>
            <p>手机号：<input type="text" name="pnumber" class="pnumber"></p>
        </form>
    </fieldset>
</template>

<script>
    import { Plus } from '@element-plus/icons-vue';
    export default {
        name: "profile_change",
        data(){
            return{
                imageUrl: this.$store.state.userInfo.imgURL,
            }
        },
        components:{
            Plus,
        },
        methods:{
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw)
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg'
                const isLt2M = file.size / 1024 / 1024 < 2

                if (!isJPG) {
                    this.$message.error('Avatar picture must be JPG format!')
                }
                if (!isLt2M) {
                    this.$message.error('Avatar picture size can not exceed 2MB!')
                }
                return isJPG && isLt2M
            },
        },
    }
</script>

<style scoped>
    .profile a{

        font-size:50px;

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
        height:300px;
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
    .fset{
        position:relative;
        left:170px;
        top:15px;
        height:200px;
        width:600px;
        background:rgb(235, 235, 235);
    }
    .chara1{
        position:relative;
        left:250px;
        font-size:25px;
    }
    .p1{
        position:relative;
        left:16px;
    }
    .oldpassword{
        width:350px;
    }
    .newpassword{
        width:350px;
    }
    .repassword{
        width:350px;
    }
    .changepassword{
        position:relative;
        left:220px;
        border-radius:15px/15%;
        width:100px;
        height:30px;
        background:red;
    }
    .root{
        float:left;
        width:100%;
        height:300px;

    }
    .fset2{
        position:relative;

        height:270px;
        width:1489px;
        background:rgb(235, 235, 235);
    }
    .name{
        width:350px;
    }
    .mail{
        width:350px;
    }
    .pnumber{
        width:350px;
    }

    .chara2{
        position:relative;
        left:170px;
        font-size:25px;
    }
    .save{
        position:relative;
        left:650px;
        top:100px;
        height:50px;
        width:200px;
        border-radius:15px/15%;
        background:red;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409eff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        text-align: center;
    }
    .avatar-uploader-icon svg {
        margin-top: 74px; /* (178px - 28px) / 2 - 1px */
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>