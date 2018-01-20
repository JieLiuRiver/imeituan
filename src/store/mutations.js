import * as types from './mutation-types'

const mutations = {
	[types.ADD_CITYLIST] (state, {rows}){
		state.citylist = rows
	},
	[types.ADD_SEARCHLIST] (state, {rows}){
		state.searchlist = rows
	}
}

export default mutations