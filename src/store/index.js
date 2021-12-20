import {createStore} from 'vuex'

export default createStore({
    state:{
        isAuth: false,
        userInfo:{
            username: "",
            id: 0,
            sex: "保密",
            pwd: "",
            email: "",
            tel: "",
            imgURL: "",
            revAddress: ["翻斗花园"],
            balance: 0,
        },
        cartList: [],
    },
    getters:{
        getLoginStatus: (state) =>{
            return state.isAuth;
        },
        getUserInfo(state){
            return state.userInfo;
        },
        getCartList(state){
            return state.userInfo;
        }
    },
    mutations:{
        loginStatus(state, payload){
          state.isAuth = payload;
        },
        userStatus(state, payload){
            state.userInfo = payload;
        },
        cartStatus(state, payload){
            state.cartList.push(payload);
        },
    },
    actions:{
        userLogin({commit}, payload){
            commit('loginStatus', payload);
        },
        createUser({commit}, payload){
            commit('userStatus', payload);
        },
        addCart({commit}, payload){
            commit('cartStatus', payload);
        },
    },
    modules: {

    }
})