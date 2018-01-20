import BaseModel from './base-model'
import $http from './index'
import axios from 'axios'
export default class HomeModel extends BaseModel{
	constructor(){
		super()
	}

	getSwiperlist(params) {
		return $http('/classify', params)
	}

	getHomelist(params) {
		return $http('/homelist', params)
	}

	getCitylist(params){
		return $http('/citylist', params)
	}

	searchByKey(params) {
		return $http(`/search`, params)
	}
}