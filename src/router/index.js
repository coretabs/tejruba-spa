import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }/*
    ,
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/experiences',
      name: 'Experiences',
      component: Experiences
    },
    {
      path: '/experiences/:id',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/experience/create',
      name: 'ExperienceCreate',
      component: ExperienceCreate
    }
    */
  ]
})
