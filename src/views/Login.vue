<template>
    <div class="container">
        <div id="login">
            <h2>登录</h2>
            <hr>

                <table id="loginTable">

                    <tr>
                        <td>
                            <span class="description">用户名 </span>
                        </td>
                        <td>
                            <span class="inText"><input name="user" type="text" v-model="loginForm.username"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="description">密码 </span>
                        </td>
                        <td>
                            <span class="inText"><input name="password" type="password" v-model="loginForm.pwd"/></span>
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td>
                            <input class="submitButton" type="submit" v-on:click="toLogin" value="登录"/>
<!--                            <a href="#findPassword" id="findPassword"> 找回密码</a>-->
                        </td>
                    </tr>
                </table>
        </div>

        <div id="register">
            <h2>注册</h2>
            <hr>
                <table id="regTable">
                    <tr>
                        <td>
                            <span class="description">用户名 </span>
                        </td>
                        <td>
                            <span class="inText"><input name="user" type="text" v-model="registerForm.username"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="description">邮箱</span>

                        </td>
                        <td>
                            <span class="inText"><input name="email" type="email" v-model="registerForm.email"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="description">手机号</span>

                        </td>
                        <td>
                            <span class="inText"><input name="phoneNumber" type="tel" v-model="registerForm.tel"/></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="description">密码 </span>
                        </td>
                        <td>
                            <span class="inText"><input name="password" type="password" v-model="registerForm.pwd"/></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="description">确认密码 </span>
                        </td>
                        <td>
                            <span class="inText"><input name="checkpassword" type="password" v-model="registerForm.checkPwd"/></span>
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td>
                            <input class="submitButton" type="submit" v-on:click="toRegister" value="注册"/>
                        </td>
                    </tr>
                </table>
        </div>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/footer.vue'
    import Cookie from "js-cookie";
    import Cookies from "js-cookie";
    export default {
        name: "LoginAndRegister",
        components: {
            NavBar,
            Footer
        },
        data() {
            return {
                loginForm: {username: "", pwd: ""},
                registerForm: {username: "", pwd: "", checkPwd: "", email: "", tel: ""},
                info: null,
                user: null,
                recAddress: [],
            }
        },
        methods: {
            toRegister: function () {
                // var strFrom = JSON.stringify(this.registerForm);
                // var jsonForm = JSON.parse(strFrom);

                if (this.registerForm.username == "") {
                    alert("用户名为空！");
                } else if (this.registerForm.pwd == "") {
                    alert("密码为空！");
                } else if (this.registerForm.checkPwd == "") {
                    alert("确认密码为空！");
                } else {
                    axios.post("http://localhost:8088/buyer/register", {
                        username: this.loginForm.username,
                        password: this.loginForm.pwd,
                    })
                        .then(response => (this.info = response))
                        .catch(function (error) {
                            console.log(error);
                        });
                    if(this.info == "200"){
                        alert("注册成功，即将刷新");
                        location.reload();
                    }
                    else{
                        alert("注册失败，稍后再试");
                    }
                }
            },
            toLogin: function () {
                // var strFrom = JSON.stringify(this.loginForm);
                // var jsonForm = JSON.parse(strFrom);

                if (this.loginForm.username == "" || this.loginForm.pwd == "") {
                    alert("用户名或密码为空！");
                } else {
                    axios.post("http://localhost:8005/buyer/login", {
                        username: this.loginForm.username,
                        password: this.loginForm.pwd,
                    }).then(response => (this.info = response.data.data))
                        .catch(function (error) {
                            console.log(error);
                        });

                    //处理响应
                    if(this.info.status == "1"){ //
                        this.$store.dispatch("userLogin", true);    //设置登录标志位true
                        localStorage.setItem("Auth","yes"); //设置item名为Auth，值为yes
                        // var uuser = {
                        //     username: this.loginForm.username,
                        //     pwd: this.loginForm.pwd,
                        //     email: "asfasf@qq.com",
                        //     tel: "10086",
                        //     sex: "男",
                        //     id: 100,
                        //     imgURL: "../assets/图标/lenovo1.jpg",
                        //     revAddress: ["翻斗花园","朝阳路123号"],
                        //     balance: 100,
                        // };

                        axios.post("http://localhost:8005/buyer/address/query", {
                            username: this.loginForm.username,
                            password: this.loginForm.pwd,
                        }).then(response => (this.recAddress = response.data.data))
                            .catch(function (error) {
                                console.log(error);
                            });

                        this.$store.dispatch("createUser", {
                            username: this.info.username,
                            id: this.info.id,
                            sex: this.info.sex,
                            pwd: this.info.password,
                            email: this.info.email,
                            tel: this.info.phone,
                            imgURL: this.info.imgURL,
                            revAddress: this.revAddress,
                            balance: this.info.balance,
                        });
                        //提示登录成功，正在跳转
                        alert("登录成功，即将跳转");
                        this.$router.push("/home");
                    }
                    else{   //登录失败
                        alert("登录失败，请稍后再试");
                    }
                }
            }
        },
    }
</script>

<style scoped>
    .container {
        float: right;
    }

    #login {
        margin: 5px;
        background-color: White;
        width: 400px;
        text-align: center;
        border-radius: 10px;
    }

    #register {
        margin: 5px;
        background-color: White;
        width: 400px;
        border-radius: 10px;
        text-align: center;
    }


    .description {
        width: 50%;
        margin: 10px;
    }

    .inText {
        width: 50%;
        margin: auto;
    }

    .submitButton {
        background-color: #ff0000;
        border-radius: 5px;
        color: White;
    }

    #loginTable {
        width: 100%;
    }

    #regTable {
        width: 100%;
    }

    body {
        background-image: url(../assets/background.jpg)
    }

    table {
        border-spacing: 10px;
    }
</style>