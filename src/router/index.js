import Vue from 'vue'
import Router from 'vue-router'
import ddbd from '@/components/ddbd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ddbd',
      component: ddbd
    }
  ]
})
