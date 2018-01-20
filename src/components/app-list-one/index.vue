<template>
	<section>
		<div class="list-wrapper vmc-1px-b-DDD8CE vmc-1px-t-DDD8CE" v-if="type==='one'">
			<div class="inner" >
				<ul class="f-flex f-jcc f-aic">
					<li class="item" v-for="(o, i) in list" :key="i" v-toucheffect="{stopPropagation: true }">
						<div class="info f-flex f-drc f-ais f-jcc">
							<strong>{{o.title}}</strong>
							<small>{{o.desc}}</small>
						</div>
						<div class="imgbox"> 
							<img width="100%" v-if="!lazyflag" height="100%" :src="o.src" alt="">
							<img width="100%" v-else height="100%" v-lazy="o.src" alt="">
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="list-wrapper vmc-1px-b-DDD8CE" v-if="type==='second'">
			<ul>
				<li class="item-second f-flex vmc-1px-b-DDD8CE f-jcs faic" v-for="(o, i) in list" :key="i">
					<div class="dealcard-img">
						<img :src="o.src" v-if="!lazyflag" width="100%" height="100%" alt="">
						<img v-lazy="o.src" v-else width="100%" height="100%" alt="">
					</div>
					<div class="dealcard-block-right f-flex f-drc f-jcb f-ais"  v-toucheffect="{stopPropagation: true }">
						<span class="f-b title">{{o.title}}</span>
						<span class="desc">{{o.desc}}</span>
						<span class="price f-pr">
							<span>{{o.price}}元</span>
							<span>门市价:{{o.mprice}}</span>
							<span class="f-pa">已售:{{o.saleamount}}</span>
						</span>
					</div>
				</li>
			</ul>
			
		</div>
	</section>
</template>

<script>
	import Toucheffect from '@/directives/toucheffect'
	export default {
		props: {
			lazy: {
				type: Boolean,
				default: false
			},
			list: {
				type: Array,
				default: []
			},
			type: {
				type: String,
				default: 'two'
			}
		},
		directives: {
			Toucheffect
		},
		data() {
			return {
				lazyflag: false
			}
		},
		created() {
			this.lazyflag = this.lazy
		},
	}
</script>

<style scoped lang="less">
	.list-wrapper{
		margin-top: 20px;
		background-color: #fff;
		.inner{
			padding: 12px;
			.item{
				flex: 1;
				.imgbox{
					width: 124px;
					height: 124px;
					display: block;
					margin: 0 auto;
				}
				.info{
					width: 170px;
					margin: 0 auto;
					strong{ 
						margin-bottom: 36px;
						margin-top: 12px;
						color: #55a40f;
						font-size: 30px;
					}
					small{
						color: #666;
						font-size: 24px;
					}
				}
				&:nth-of-type(2){
					strong{
						color: #ff3f0d;
					}
				}
				&:nth-of-type(3){
					strong{
						color: #f742a0;
					}
				}
			}
		}
		.item-second{
			padding: 28px 0 20px 0;
			.dealcard-img{
				flex: 0 0 180px;
				img{
					background-color: #f0efed;
					background-size: 100%;
					border:0;
				}
			}
			.dealcard-block-right{
				padding-left: 20px;
				padding-right: 20px;
				flex: 1;
				.title{
					overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
					font-size: 30px;
					padding: 10px 0 12px 0;
				}
				.desc{
					font-size: 24px;
					color: #666;
					margin-bottom: 16px;
					position: relative;
    				top: -10px;
				}
				.price{
					width: 100%;
					span:nth-of-type(1){
						color: #06c1ae;
						font-size: 30px;
					}
					span:nth-of-type(2){
						color: #666;
						font-size: 24px;
					}
					span:nth-of-type(3){
						right: 0;
						bottom: 0;
						color: #666;
						font-size: 24px;
					}

				}
			}
		}
	}
</style>

