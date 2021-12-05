import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Navigation.vue')
  },
  {
    path: '/nes',
    name: 'Nes',
    component: () => import( '../components/Nes.vue')
  },
  {
    path: '/nothing',
    name: 'Nothing',
    component: () => import( '../views/Nothing.vue')
  },
  {
    path: '/date',
    name: 'Date',
    component: () => import( '../views/date.vue')
  },
  {
    path: '/aboutMe',
    name: 'Aboutme',
    component: () => import( '../views/AboutMe.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
