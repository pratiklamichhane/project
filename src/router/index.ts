import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   
    // {
    //   path: '/experience',
    //   name: 'experience',
    //   component: () => import('../views/Experience.vue')
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('../views/Contact.vue')
    // }
  ]
})

export default router