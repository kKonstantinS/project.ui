<template>
    <form class="col-sm-6 offset-sm-3">
        <div class="form-group">
            <label>Username:</label>
            <input type="text" v-model="username"/>
        </div>
        <div class="form-group">
            <label for>Password:</label>
            <input type="password" v-model="password"/>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary" v-on:click="signin()">Sign in</button>
            <button type="button" class="btn btn-link">Register</button>
        </div>
    </form>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Login",
        data() {
            return {
                username: String,
                password: String,
            }
        },
        methods: {
            signin() {
                axios.post('http://localhost:9009/auth/signin', {
                    username: this.username, password: this.password
                }).then( response => {
                    localStorage.setItem('token', response.data.tokenType + " " + response.data.accessToken);
                })
                    .catch(reason => alert(reason))
            }
        }
    }
</script>

<style scoped>


</style>