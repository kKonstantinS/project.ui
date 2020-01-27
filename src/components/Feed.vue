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

    import axios from 'axios'

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
          );
        }
      },
    }
</script>

<style scoped>

</style>
