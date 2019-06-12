<template>
    <ul>
        <li v-for="user in users">
            <a>{{user}}</a>
        </li>
    </ul>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Feed",
        date: {
          users: Array
        },
        created: function() {
            axios.get('/api/users/all').then(
            response => (this.users = response)
            ).catch( e => alert(e) )
        },
        methods: {

        },

    }
</script>

<style scoped>

</style>