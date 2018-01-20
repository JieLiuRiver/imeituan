<template>
  <div id="app" class="app-wrapper">
       <router-view></router-view>
  </div>
</template>

<script>
import { setHtmlSize } from '@/libs/utils' 
import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  created() {

  },
  mounted() {
  	// setHtmlSize()
  },
  computed: mapGetters([
    'likelist'
  ]),
  methods: {
  },
  components: {
  	AppHeader,
    AppFooter
  } 
}
</script>

<style scoped lang="less">
 
</style>
