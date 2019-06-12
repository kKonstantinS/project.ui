<template>
  <div>
    <div class="container">
      <ul class="nav nav-pills">
        <li><a>Login</a></li>
        <li><a v-on:click="logout">Logout</a></li>
      </ul>
    </div>
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <Login v-if="!isAuthenticated"></Login>
            <Feed v-if="isAuthenticated"></Feed>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Login from './components/Login.vue'
  import Feed from './components/Feed.vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import axios from 'axios'

  export const HTTP = axios.create({
    baseURL: 'http://localhost:9009',
    headers: {
      common: {
        Authorization: localStorage.getItem('token')
      }
    }
  });

  export default {
    name: 'app',
    components: {
      Login, Feed
    },
    methods: {
      logout() {
        localStorage.removeItem('token')
      },
      isAuthenticated() {
        return localStorage.getItem('token') != null;
      }
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
