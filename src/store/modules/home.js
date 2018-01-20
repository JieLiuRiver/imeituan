import * as types from '../mutation-types'
import HomeModel from '@/api/home-model'
const homeInstance = new HomeModel()

const state = {
	a: 1,
	b: 2,
	flag: true,

	swiperlist: [],
	likelist: [],
	adlist: []
}

const getters = {
	swiperlist: state => state.swiperlist,
	likelist: state => state.likelist,
	adlist: state => state.adlist
}

const actions = {
	check({commit, state}, list) {
		console.log('check', '异步')
		commit(types.CHECK)
	},

	async getSwiperlist({commit, state}, params) {
		const res =  await homeInstance.getSwiperlist(params)
		const rows = res.data.rows
		commit(types.ADD_SWIPERLIST, {rows})
	},

	async getHomelist({commit, state}, params) {
		const res =  await homeInstance.getHomelist(params)
		const ad = res.data.homelist.ad
		const like = res.data.homelist.like
		commit(types.ADD_LIKELIST, {like})
		commit(types.ADD_ADLIST, {ad})
	}
}

const mutations = {
	[types.CHECK](state, {v}){
		state.a - state.b > 0 ? state.flag = true : state.flag = false
	},
	[types.ADD_SWIPERLIST](state, {rows}) {
		const _rows = []
		_rows.push(rows.filter((item, i) => i < 10))
		_rows.push(rows.filter((item, i) => i >= 10 && i <= 20))
		state.swiperlist = _rows || []
	},
	[types.ADD_LIKELIST](state, {like}) {
		state.likelist = like || []
	},
	[types.ADD_ADLIST](state, {ad}) {
		state.adlist = ad || []
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}