<template>
    <form class="col-sm-6 offset-sm-3" style="align-self: center">
        <div class="form-group">
            <label>Username:</label>
            <b-input type="text" v-model="username"/>
        </div>
        <div class="form-group">
            <label>Password:</label>
          <b-input type="password" v-model="password"/>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary" v-on:click="signIn">Sign in</button>
            <button type="button" class="btn btn-link">Register</button>
        </div>
    </form>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Login",
        data: function () {
          return {
            username: null,
            password: null
          };
        },
        methods: {
            signIn: function() {
                axios.post('/auth/signin', {
                    username: this.username, password: this.password
                }).then( response => {
                    sessionStorage.setItem('token', response.data.accessToken);
                })
                    .catch(reason => alert(reason));
            }
        }
    }
</script>

<style scoped>


</style>
