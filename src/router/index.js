import Vue from 'vue'
import Router from 'vue-router'
import Feed from '../components/Feed'
import Login from '../components/Login'
import App from '../App'

Vue.use(Router);

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
    }
  ],
  mode: 'history'
})
