import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './routers'
import store from './store'
import Cookies from 'js-cookie';



const app = createApp(App)


router.beforeEach((to,from, next) =>{

    if(localStorage.getItem("Auth") == "yes"){  //设置获取item，并设置登录状态
        store.state.isAuth = true;

        //防止登录了还跳到登录页面
        if(to.name == 'login'){
            next({path: '/home'});
        }
        next();
    }
    else{
        if(to.meta.requireAuth){    //若目的路由需要登录，则跳到登录页面
            next({path: '/login'});
        }
        else{
            next();
        }
    }
})
app.use(Cookies)
// var uuser = {
//     username: "ss",
//     pwd: 123,
//     email: "asfasf@qq.com",
//     tel: "10086",
//     sex: "男",
//     id: 100,
//     balance: 100,
// };
// Cookies.set('userInfo', JSON.stringify(uuser),{expires :7});
// console.log( "Cookies.get")
// console.log( Cookies.get("userInfo"))

app.use(store)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
