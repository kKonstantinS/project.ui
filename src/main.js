// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/*export const HTTP = axios.create({
  baseURL: 'http://localhost:9009',
  headers: {
    common: {
      Authorization: localStorage.getItem('token')
    }
  }
});*/
axios.defaults.baseURL = 'http://localhost:9009';
axios.defaults.headers['Authorization'] = localStorage.getItem('token');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
