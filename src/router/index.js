import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import Switchcity from '@/views/switchcity/index'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '*',
        redirect: {name: 'home'}
      },
      {
        path: '/index',
        name: 'index',
        component: resolve => require(['@/views'], resolve),
        children: [
          {
            path: 'home',
            name: 'home',
            component: Home,
          },
          {
            path: 'switchcity',
            name: 'switchcity',
            component: Switchcity
          },
          {
            path: 'search',
            name: 'search',
            component: resolve => require(['@/views/search/index'], resolve)
          },
          {
            path: 'category',
            name: 'category',
            component: resolve => require(['@/views/category/index'], resolve)
          }
        ]
      }
   ]
})
