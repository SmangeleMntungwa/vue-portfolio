import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Navbar',
    name: 'Navbar',
    component: () => import(/* webpackChunkName: "navbar" */ '../components/Navbar.vue')
  },
  {
    path: '/Contactform',
    name: 'Contactform',
    component: () => import(/* webpackChunkName: "Contactfrom" */ '../views/Contactform.vue')
  },
  {
    path: '/Footer',
    name: 'Footer',
    component: () => import(/* webpackChunkName: "Footer" */ '../components/Footer.vue')
  },
  {
    path: '/Landing',
    name: 'Landing',
    component: () => import(/* webpackChunkName: "Landing" */ '../views/Landing.vue')
  },
   {
    path: '/Mywork',
    name: 'Mywork',
    component: () => import(/* webpackChunkName: "Mywork" */ '../views/Mywork.vue')
  },
{
    path: '/resume',
    name: 'resume',
    component: () => import(/* webpackChunkName: "Resume" */ '../views/Resume.vue')
  },
  {
    path: '/#testimonials',
    name: 'testimonials',
    component: () => import(/* webpackChunkName: "Testimonials" */ '../views/Testimonials.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
