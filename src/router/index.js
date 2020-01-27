import Vue from 'vue'
import Router from 'vue-router'
import Feed from '../components/Feed'
import Login from '../components/Login'
import Profile from '../components/Profile'

export default new Router({
  routes: [
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
  mode: 'history'
})

Vue.use(Router);
