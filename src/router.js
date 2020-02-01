import Vue from 'vue' 
import Router from 'vue-router'
import MessagesShow from '@/views/MessagesShow.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MessageShow',
      component: MessagesShow,
    }
  ]
})

export default router