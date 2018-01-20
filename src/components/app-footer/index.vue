<template>
	<footer class="footer-wrapper">
		<div class="bar f-flex f-aic f-jcb">
			<div>
				<router-link to="/" class="btn btn-weak login-btn">登录</router-link>
				<router-link to="/" class="btn btn-weak register-btn">注册</router-link>
			</div>
			<div class="f-pr">
				<span class="f-pa label">城市:</span>
				<router-link to="/" class="btn btn-weak">广州</router-link>
			</div>
		</div>
		<ul class="nav-list f-flex f-aic f-jcc">
			<li class="nav-item" v-for="(o, i) in navlist" :key="i"
				:class="{'vmc-1px-r-666': i !== navlist.length - 1}">
				<a href="javascript:;" class="f-ib f-wf f-hf nav-link">
					{{o.text}}
				</a>
			</li>
		</ul>
		<div class="footer-copyright">
            <div class="hr vmc-1px-t-999"></div>
            <span class="footer-copyright-text">©2018 美团网 <a href="http://www.miibeian.gov.cn/" target="_blank" rel="nofollow">京ICP证070791号</a></span>
        </div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				navlist: [
					{
						text: '首页',
						link: '／'
					},
					{
						text: '我的',
						link: '／'
					},
					{
						text: '美团下载',
						link: '／'
					},
					{
						text: '电脑版',
						link: '／'
					},
					{
						text: '帮助',
						link: '／'
					}
				]
			}
		}
	}
</script>

<style scoped lang="less">
	@import '../../style/common.less';
	.footer-wrapper{
		margin-top: 30px;
		padding: 0 20px 40px 20px;
		.bar{
			.label{
    			right: 140px;
    			top: 19px;
    			width: 70px;
    			font-size: 26px;
			}
			.login-btn{
				margin-right: 16px;
			}
		}
		.nav-list{
			margin-top: 30px;
			.nav-item{
				height: 24px;
				position: relative;
				flex: 1;
				.nav-link{
					position: absolute;
					left:0;
					top:0;
					font-size: 24px;
					text-align: center;
				}
			}
		}
		.footer-copyright{
			margin-top: 30px;
			color: #999;
			font-size: 22px;
		    text-align: center;
		    position: relative;
		    .hr{
				display: block;
			    content: "";
			    width: 100%;
			    position: absolute;
			    top: 50%;
		    }
		    .footer-copyright-text{
		    	position: relative;
			    padding: 0 30px;
			    background-color: #f0efed;
			    a{
					color: #999;
			    }
		    }
		}
	}
</style>