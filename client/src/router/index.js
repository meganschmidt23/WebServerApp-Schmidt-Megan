import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import { CurrentUser } from '../models/Users'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/weight',
    name: 'Weight',
    component: () => import('../views/Weight.vue'),
    meta: { isSecret: false }
  },
  {
    path: '/water',
    name: 'Water',
    component: () => import('../views/Water.vue'),
    meta: { isSecret: false }
  },
  {
    path: '/foodtracking',
    name: 'Food Tracking',
    component: () => import('../views/FoodTracker.vue'),
    meta: { isSecret: false }
  },
  {
    path: '/goals',
    name: 'Goals',
    component: () => import('../views/Goals.vue'),
    meta: { isSecret: false }
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: () => import('../views/Exercises.vue')
  },
  {
    path:'/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { isSecret: false }
  },
  {
  path:'/discussionboard',
  name: 'Discussion Board',
  component: () => import('../views/DiscussionBoard.vue'),
  meta: { isSecret: false}
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next)=> {
  if( to.meta.isSecret && !CurrentUser) next ('/login');
  else next();
});

export default router
