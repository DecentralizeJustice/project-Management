import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import General from './views/General.vue'
import Multisig from './views/Multisig.vue'
import Frequent from './views/Frequent.vue'
import RandD from './views/RandD.vue'
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
      path: '/general',
      name: 'general',
      component: General
    },
    {
      path: '/multisig',
      name: 'multisig',
      component: Multisig
    },
    {
      path: '/frequent',
      name: 'frequent',
      component: Frequent
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
    }

  ]
})
