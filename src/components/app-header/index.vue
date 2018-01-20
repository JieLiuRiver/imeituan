<template>
	<div>
		<header v-if="mode==='home'" class="navbar vmc-1px-b-21897d f-flex f-jc-center f-aic">
			<div class="nav-wrap-left" @touchstart="changecity">
				<span class="nav-city">广州 <i class="ion-ios-arrow-down"></i> </span>
			</div>
			<div class="box-search" @click="$router.push({name: 'search'})">
				<span class="search-wrapper f-pr">
					<i class="ion-ios-search-strong"></i>
					<span class="single-line f-pa">输入商家/品类/商圈</span>
				</span>
			</div>
			<div class="nav-wrap-right">
				<span class="text-icon"><i class="ion-android-person"></i>我的</span>
			</div>
		</header>
		<header v-if="mode==='back'" class="navbar vmc-1px-b-21897d f-flex f-jc-center f-aic">
			<div class="left" @touchstart.stop="$router.push({name:'home'})">
				<span class="f-ib">
					<span class="ion-ios-arrow-back"></span>
				</span>
			</div>
			<div class="center">
				{{title}}
			</div>
			<div class="right nav-wrap-right f-flex f-jce f-aic">
				<span class="text-icon" v-for="(icon, i) in iconlist" :key="i" @touchstart.stop="$router.push({name:icon.routename})">
					<span class="icon">{{icon.type}}</span><span class="text">{{icon.name}}</span>
				</span>
			</div>
		</header>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		props: {
			mode: {
				type: String,
				default: 'home'
			},
			title: {
				type: String,
				default: '美团生活'
			},
			iconlist: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			}
		},
		methods: {
			...mapActions([
				'switchHeaderToBackMode'
			]),
			changecity() {
				this.$router.push({
					name: 'switchcity'
				})
			}
		},
		beforeRouteLeave(to, from, next) {
			next()
		}
	}
</script>

<style scoped lang="less">
	@import '../../style/common.less';
	.navbar{
		height: 102px;
		color: #fff;
		background: @theme-bg;
		.nav-wrap-left{
			flex: 0 0 135px;
			.nav-city{
				line-height: 1;
			    display: inline-block;
			    vertical-align: middle;
			    text-align: center;
			    margin-right: 20px;
			    margin-left: 20px;
			    font-size: 32px;
			    margin-top: -4px;
			}
		}
		.box-search{
			flex: 1;
			height: 64px;
			border-radius: 6px;
			background: rgba(0,0,0,.15);
			line-height: 64px;
			.search-wrapper{
				display: block;
			    color: inherit;
			    height: 100%;
			    overflow-x: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    .ion-ios-search-strong{
			    	font-size: 40px;
			    	margin-left: 14px;
			    }
			    .single-line{
			    	font-size: 26px;
				    color: #68dbce;
				    left: 60px;
				    top: 0;
				    box-sizing: border-box;
				    width: 100%;
				    display: block;
			    }
			}
		}
		.nav-wrap-right{
			flex: 0 0 94px;
			.text-icon{
				display: block;
			    margin: auto;
			    width: 40px;
			    height: 40px;
			    margin-bottom: 12px;
			    font-size: 20px;
			    position: relative;
    			top: -14px;
    			i{
    				font-size: 50px;
    			}
			}
		}
		.left{
			text-align: center;
			flex: 0 0 100px;
			.ion-ios-arrow-back{
				font-size: 60px;
			}
		}
		.center{
			text-align: center;
			flex: 1;
			font-size: 36px;
			font-weight: 400;
		}
		.right{
			flex: 0 0 160px;
			padding-right: 20px;
			.text-icon{
				margin: 0;
				margin-left: 40px;
				&:first-child{
					margin-left:0;
				}
			    .icon{
			    	width: 40px;
			    	height: 40px;
			    	font-size: 40px;
			    	display: block;
			    	font-family: base_icon;
			    }
			    .text{
			    	position: relative;
			    	top: 10px;
			    }
			}
		}

	}
</style>