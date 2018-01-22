<template>
	<div>
      	<app-header mode="back" title="分类" :iconlist="iconlist"></app-header>
		<app-banner></app-banner>
	  	<app-footer></app-footer>
	</div>
</template>

<script>
	import AppHeader from '@/components/app-header'
	import AppFooter from '@/components/app-footer'
	import AppBanner from '@/components/app-banner'
	export default {
		data(){
			return {
				iconlist: [{
					name: '我的',
					type: '⍥',
					routename: 'category'
				},{
					name: '搜索',
					type: '⌕',
					routename: 'search'
				}]
			}
		},
		components: {
            AppFooter,
			AppHeader,
			AppBanner
        }
	}
</script>
