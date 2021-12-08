<template>
    <NavBar id = "nav"> </NavBar>
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
                            <a href="#findPassword" id="findPassword"> 找回密码</a>
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
    <Footer></Footer>
</template>

<script>
    import NavBar from './NavBar.vue'
    import Footer from './footer.vue'
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
                info: null
            }
        },
        methods: {
            toRegister: function () {
                var strFrom = JSON.stringify(this.registerForm);
                var jsonForm = JSON.parse(strFrom);

                if (this.registerForm.username == "") {
                    alert("用户名为空！");
                } else if (this.registerForm.pwd == "") {
                    alert("密码为空！");
                } else if (this.registerForm.checkPwd == "") {
                    alert("确认密码为空！");
                } else {
                    axios.post("/regiser", jsonForm)
                        .then(response => (this.info = response))
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            },
            toLogin: function () {
                var strFrom = JSON.stringify(this.loginForm);
                var jsonForm = JSON.parse(strFrom);

                if (this.loginForm.username == "" || this.loginForm.pwd == "") {
                    alert("用户名或密码为空！");
                } else {
                    axios.post("/login", jsonForm)
                        .then(response => (this.info = response))
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            }
        }
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
        background-color: WhiteSmoke;
        background-image: url(../assets/background.jpg)
    }

    table {
        border-spacing: 10px;
    }
</style>