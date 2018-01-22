import BaseModel from './base-model'
import $http from './index'
import axios from 'axios'
import data from './data'
export default class HomeModel extends BaseModel{
	constructor(){
		super()
	}

	getSwiperlist(params) {
		return process.env.NODE_ENV === 'production' 
			? 
				new Promise((resolve, reject) => {
				    resolve({data:data.classify})
				 })
			:
				$http('/classify', params)
	}

	getHomelist(params) {
		return process.env.NODE_ENV === 'production' 
			? 
				new Promise((resolve, reject) => {
				    resolve({data:data.homelist})
				 })
			:
				$http('/homelist', params)
		///return process.env.NODE_ENV === 'production' ? new Promise((resolve, reject) => resolve({data:data.homelist})  :  $http('/homelist', params)
	}

	getCitylist(params){
		return process.env.NODE_ENV === 'production' 
			? 
				new Promise((resolve, reject) => {
				    resolve({data:data.citylist})
				 })
			:
				$http('/citylist', params)
		// return process.env.NODE_ENV === 'production' ? new Promise((resolve, reject) => resolve({data:data.citylist})  :  $http('/citylist', params)
	}

	searchByKey(params) {
		return process.env.NODE_ENV === 'production' 
			? 
				new Promise((resolve, reject) => {
				    resolve({data:data.search})
				 })
			:
				$http('/search', params)
		// return process.env.NODE_ENV === 'production' ? new Promise((resolve, reject) => resolve({data:data.search})  :  $http(`/search`, params)
	}
}