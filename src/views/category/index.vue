<template>
	<div>
      	<app-header mode="back" title="分类" :iconlist="iconlist"></app-header>
      	<app-footer></app-footer>
	</div>
</template>

<script>
	import AppHeader from '@/components/app-header'
    import AppFooter from '@/components/app-footer'
	export default {
		data(){
			return {
				iconlist: [{
					name: '主页',
					type: '⟰',
					routename: 'home'
				}]
			}
		},
		components: {
            AppFooter,
            AppHeader
        }
	}
</script>
