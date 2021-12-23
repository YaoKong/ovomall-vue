import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
            meta: {
                index: 1
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
            meta: {
                index: 2
            }
        },
        {
            path: '/shoppingCart',
            name: 'cart',
            component: () => import(/* webpackChunkName: "login" */ './views/ShoppingCart.vue'),
            meta: {
                index: 3,

            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import(/* webpackChunkName: "login" */ './views/Profile.vue'),
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/items',
            name: 'item',
            component: () => import(/* webpackChunkName: "login" */ './views/ItemPage.vue'),
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/searchResult',
            name: 'search',
            component: () => import(/* webpackChunkName: "login" */ './views/SearchResult.vue'),
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/goodsPage',
            name: 'goodsPage',
            component: () => import(/* webpackChunkName: "login" */ './views/GoodsPage.vue'),
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/ServiceCenter',
            name: 'serviceCenter',
            component: () => import(/* webpackChunkName: "login" */ './views/ServiceCenter.vue'),
            meta: {
                requireAuth: false
            }
        },
    ]
})

export default router