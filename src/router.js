import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Overview from './views/Overview.vue'
import Multisig from './views/Multisig.vue'
import RandD from './views/RandD.vue'
import PageNotFound from './views/404.vue'
import Operations from './views/Ops.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/about' },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    },
    {
      path: '/multisig',
      name: 'multisig',
      component: Multisig
    },
    {
      path: '/randd',
      name: 'randd',
      component: RandD
    },
    {
      path: '/operations',
      name: 'operations',
      component: Operations
    },
    { path: '*',
      component: PageNotFound }

  ]
})
