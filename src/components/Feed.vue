<template>
  <div>
    <ul>
        <li v-for="user of users">
            <a>{{user}}</a>
        </li>
    </ul>
  <button v-on:click="refresh">Refresh</button>
  </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import router from 'vue-router'
    import global from '../Global.js'

    Vue.use(global);

    export default {
      name: "Feed",
      data: function () {
        return {
          users: []
        }
      },
      created: function () {
        this.refresh();
      },
      methods: {
        refresh: function () {
          axios.get('/api/users/all').then(
            response => (this.users = response)
          ).catch(e => console.log(e))
        }
      },
    }
</script>

<style scoped>

</style>
