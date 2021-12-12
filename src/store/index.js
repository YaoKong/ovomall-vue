import {createStore} from 'vuex'

export default createStore({
    state:{
        isAuth: false
    },
    getters:{
        getLoginStatus: (state) =>{
            return state.isAuth;
        }
    },
    mutations:{
        loginStatus(state, payload){
          state.isAuth = payload;
        },
    },
    actions:{
        userLogin({commit}, payload){
            commit('loginStatus', payload);
        }
    },
    modules: {

    }
})