import Vue from "vue"
import Vuex from "vuex"
import * as getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"
import home from "./modules/home"

Vue.use(Vuex)
const debug =  process.env.NODE_ENV !== "production"
export default new Vuex.Store({
	state: {
        citylist:[],
        searchlist: []
	},
    getters,
    actions,
    mutations,
    modules: {
        home
    },
    // 开发环境下，启动严格模式
    // 作用: 一旦检测到非mutation更改state, 即报错。 保证状态更改方法的统一
    strict: debug
})