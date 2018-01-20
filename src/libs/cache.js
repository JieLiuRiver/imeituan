import storage from 'good-storage'


const CITY_KEY = '__citylist__'

export default {
	setCitylist(list) {
		return storage.set(CITY_KEY, list) 
	},
	getCitylist() {
		return storage.get(CITY_KEY) 
	}
}