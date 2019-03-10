import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    count:1,
    list:[1,2,3,4,10,14,20,61]
}
///改变stata值
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state,n){
        state.count-=n;
    }
}
//过滤state值
const getters = {
    filteredlist:state=>{
        return state.list.filter(item=>item<10)
    },
    listconut:function(state,getters){
        return getters.filteredlist.length;
    }
}
//异步操作
const actions={
    reduce(context,n){
        context.commit('reduce',n)
    }
}


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})