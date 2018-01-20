import * as types from './mutation-types'
import HomeModel from '@/api/home-model'
import cache from '@/libs/cache'
const homeInstance = new HomeModel()

const handleCitylists = rows => {
	let result = []
	rows.forEach(item => {
		item.citys.forEach(c => {
			result.push(c)
		})
	})
	return result.sort((a, b) => {
		return a.citysName.charCodeAt(0) - b.citysName.charCodeAt(0)
	})
}
export default {
	async getCitylist({commit}, params) {
		let rows = []
		const _cacheValue = cache.getCitylist()
		if (!!_cacheValue) {
			rows = _cacheValue
		} else {
			const resp = await homeInstance.getCitylist()
			rows = resp.data.rows
			cache.setCitylist(rows)
		}
		rows = handleCitylists(rows)
		commit(types.ADD_CITYLIST, { rows })
	},
	async searchAction({commit}, ps) {
		const resp = await homeInstance.searchByKey(ps)
		let rows = resp.data.data.rows
		commit(types.ADD_SEARCHLIST, { rows })
	}
}