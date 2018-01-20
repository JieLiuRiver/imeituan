<template>
	<div>
		<app-header mode="home"></app-header>
		<section class="home-wrapper">
			<app-banner></app-banner>
			<transition name="vmc-fade">
				<swiper :options="swiperOption" ref="swiper" class="" v-if="swiperlist.length">
		            <swiper-slide class="" v-for="(o, i) in swiperlist" :key="o.i">
		                <ul class="icon-list f-flex f-jc-start j-aic f-wrap">
		                	<li class="icon-item" v-for="(m, n) in o" :key="n">
		                		<a href="javascript:;" @click="switchPage(m.href)" class="f-ib f-hf f-wf icon-link">
		                			<span v-if="m.name !== '家装'" class="iconfont icon" :class="m.icon">
		                			{{
		                				  m.name === '机票/火车票' 
		                				? '火'
		                				: m.name === '生活服务' 
		                				? '活'
		                				: m.name === '母婴亲子'
		                				? '子'
		                				: m.name === '学习培训'
		                				? '学'
		                				: m.name === '结婚'
		                				? '婚' : null
		                			}}
		                			</span>
		                			<img v-if="m.name === '家装'" class="icon-circle f-b" style="margin: 0 auto;" src="//p1.meituan.net/jungle/c6dea00274ef4f2e64d65646dce9c7061099.png">
		                			<span class="desc">{{m.name}}</span>
		                		</a>
		                	</li>
		                </ul>
		            </swiper-slide>
		            <div class="swiper-pagination" slot="pagination" ref="pagination"></div>
		        </swiper>
			</transition>

			<transition name="vmc-fade">
	        	<app-list-one :list="adlist" v-if="adlist.length" type="one"></app-list-one>
	    	</transition>
			<transition name="vmc-fade-scale">
		        <section class="guess-like vmc-1px-b-DDD8CE vmc-1px-t-DDD8CE" v-if="likelist.length">
		        	<div class="inner">
		        		<span class="vmc-1px-b-DDD8CE title">猜你喜欢</span>
		        		<app-list-one :list="likelist" type="second" :lazy="true"></app-list-one>
		        		<span class="more f-ib f-flex f-jcb f-aic"><span class="f-b">查看全部团购</span><span class="f-b ion-ios-arrow-forward"></span></span>
		        	</div>
		        </section>
	    	</transition>
		</section>
       	<app-footer v-if="likelist.length"></app-footer>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import Toucheffect from '@/directives/toucheffect'
	import AppBanner from '@/components/app-banner'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import AppListOne from '@/components/app-list-one'
	import { mapGetters, mapActions } from 'vuex'
	import AppHeader from '@/components/app-header'
	import AppFooter from '@/components/app-footer'
	export default {
		data() {
			return {
				swiperOption: {
                    autoplay: {
                        delay: 10000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
			}
		},
		directives: {
			Toucheffect
		},
		created() {
			this.getSwiperlist()
			this.getHomelist()
		},
		computed: {
			...mapGetters({
				swiperlist: 'swiperlist',
				likelist: 'likelist',
				adlist: 'adlist'
			}),
			swiper() {
				return this.$refs.swiper
			}
		},
		mounted() {
		},
		methods: {
			...mapActions([
				'getSwiperlist',
				'getHomelist'
			]),
			switchPage(href) {
				if (href === 'category') {
					this.$router.push({name: href})
				} else {
					window.location.replace(href)
				}
			}
		},
		watch: {
		},
		components: {
			AppHeader,
			AppFooter,
			AppListOne,
			AppBanner,
			swiper,
			swiperSlide
		}
	}
</script>

<style lang="less">
	@import '../../style/common.less';
	.swiper-container{
		background: #fff;
		padding: 10px 0;
	}
	.swiper-pagination{
		bottom: 10px;
		width: 100%;
		.swiper-pagination-bullet{
			width: 16px;
			height: 16px;
			margin-right: 20px;
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.swiper-slide{
		.icon-list{
			.icon-item{
				flex: 0 0 20%;
				.icon-link{
					height: 162px;
					padding: 20px 0;
					.icon{
						margin: 0 auto;
						width: 80px;
						height: 80px;
						display: block;
						border-radius: 40px;
						background: #fd9d21;
						color: #fff;
						text-align: center;
						line-height: 80px;
						font-size: 54px;
						&.icon-circle{
							font-family: cate_icon !important;
						}
					}
					.desc{
						display: block;
						text-align: center;
						color: #666;
						padding-top: 10px;
						font-size: 25px;
						width: 100%;
					}
				}
				&:nth-of-type(2) .icon {
					background: #ff6767;
				}
				&:nth-of-type(3) .icon {
					background: #8a90fa;
				}
				&:nth-of-type(4) .icon, &:nth-of-type(6) .icon, &:nth-of-type(13) {
					background: #fed030;
				}
				&:nth-of-type(7) .icon {
					background: #4dc6ee;
				}
				&:nth-of-type(8) .icon, &:nth-of-type(15) .icon {
					background: #ff80c2;
				}
				&:nth-of-type(10) .icon {
					background: #599eec;
				}
					
			}
		}
		&:nth-of-type(2){
			.icon-item{
				&:nth-of-type(1) .icon,
				&:nth-of-type(10) .icon {
					background: #00d3be;
				}
				&:nth-of-type(2) .icon {
					background: #A8DD99;
				}
				&:nth-of-type(3) .icon{
					background: #fed030;
				}
			 	&:nth-of-type(5) .icon,
			 	&:nth-of-type(7) .icon {
					background: #ff80c2;
				}
				&:nth-of-type(6) .icon,
				&:nth-of-type(8) .icon {
					background: #84d23d;
				}
			}
		}		
	}
	.guess-like{
		margin-top: 20px;
		background-color: #fff;
		.inner{
			padding-left: 20px;
			.title{
				font-size: 34px;
				padding: 26px 0 20px 0;
				display: block;
			}
			.more{
				color: @theme-bg;
				padding: 26px 0;
				font-size: 26px;
				padding-right: 20px;
				.ion-ios-arrow-forward{
					font-size: 40px;
				}
			}
		}
	}
</style>