import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './routers'
import store from './store'

const app = createApp(App)


router.beforeEach((to,from, next) =>{

    if(localStorage.getItem("Auth") == "yes"){  //设置获取item，并设置登录状态
        console.log(localStorage.getItem("Auth"));
        // console.log(store.state.isAuth);
        // store.dispatch("userLogin", true);
        store.state.isAuth = true;
        // console.log(store.state.isAuth);
        next();

        //防止登录了还跳到登录页面
        if(to.name == "login"){
            next({path: '/home'});
        }
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

app.use(store)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
