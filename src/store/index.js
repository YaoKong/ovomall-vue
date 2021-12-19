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
            balance: 0,
        },
    },
    getters:{
        getLoginStatus: (state) =>{
            return state.isAuth;
        },
        getUserInfo(state){
            return state.userInfo;
        }
    },
    mutations:{
        loginStatus(state, payload){
          state.isAuth = payload;
        },
        userStatus(state, payload){
            state.userInfo = payload;
        }
    },
    actions:{
        userLogin({commit}, payload){
            commit('loginStatus', payload);
        },
        createUser({commit}, payload){
            commit('userStatus', payload);
        },
    },
    modules: {

    }
})