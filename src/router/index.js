import Vue from 'vue'
import Router from 'vue-router'
import board from '@/components/board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'board',
      component: board
    }
  ]
})
