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
            state.cartList = payload;
        },
    },
    actions:{
        userLogin({commit}, payload){
            commit('loginStatus', payload);
        },
        createUser({commit}, payload){
            commit('userStatus', payload);
        },
        addCart({commit,state}, payload){
            // commit('cartStatus',state.cartList.concat(payload));
            var i;
            for(i = 0; i < state.cartList.length; i++){
                if(state.cartList[i].goodsID == payload.goodsID) {
                    state.cartList[i].amount += payload.amount;
                    state.cartList[i].payment += payload.payment;
                    break;
                }
            }
            if(i >= state.cartList.length) state.cartList.push(payload);
        },
        deleteCart({commit,state}, payload){

            var newlist = [];
            var i;
            var j = -1;
            for(i = 0; i < state.cartList.length; i++){
                if(j == -1 && state.cartList[i] == payload) {
                    j = i;
                    continue;
                }
                newlist.push(state.cartList[i]);
            }
            commit('cartStatus', newlist);
        },
    },
    modules: {

    }
})