<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark"
              style="border-bottom-right-radius: 50px; border-bottom-left-radius: 50px">
      <b-navbar-brand href="/feed" style="padding-left: 1%">SocNetwork</b-navbar-brand>


      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-col sm="15" style="padding-right: 4%">
            <b-form-input id="input-small"  placeholder="Search"></b-form-input>
          </b-col>

          <b-nav-item-dropdown right>
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item>Profile</b-dropdown-item>
            <b-dropdown-item>Settings</b-dropdown-item>
            <b-dropdown-item v-on:click="logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>

  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    name: 'app',
    methods: {
      logout() {
        localStorage.removeItem('token');

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
