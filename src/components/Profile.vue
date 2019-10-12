<template>
  <div>
    <b-img thumbnail fluid src="/assets/no-image-available.png" alt="no-image"></b-img>
    <a>{{user.username}}</a>
  </div>
</template>

<script>
  import axios from 'axios';

    export default {
        name: "Profile",
        data: function() {
          return user;
        },
        methods: {
        },
        mounted() {
          axios.get('/api/users/me').then((r)=>{
            this.user=r;
            console.log(this.user);
          }).catch((e)=>alert(e));
        }
    }
</script>

<style scoped>

</style>
