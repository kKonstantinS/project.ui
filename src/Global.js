
import axios from 'axios'
import router from 'vue-router'

export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue) {
    // Add or modify global methods or properties.
    Vue.logout = () => {
      if (localStorage.getItem('token') != null) {
        localStorage.removeItem('token');
        console.log('token has been removed')
      }
    };
    // Add a component or directive to your plugin, so it will be installed globally to your project.
    //Vue.component('component', Component);
    // Add `Vue.mixin()` to inject options to all components.
    //Vue.mixin({
      // Add component lifecycle hooks or properties.
      //created() {
        //console.log('Hello from created hook!')
      //}
    //})
    // Add Vue instance methods by attaching them to Vue.prototype.
    //Vue.property.$myProperty = 'This is a Vue instance property.';
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.mixin({
      // Anything added to a mixin will be injected into all components.
      // In this case, the mounted() method runs when the component is added to the DOM.
      mounted() {
        console.log('Mounted!');
      },
      created() {
        axios.interceptors.response.use(
          response => {
            console.log("[GLOBAL] response from server " + response);
            return response;
          },
          error => {
            if (error.status == 401) {
              console.log('[GLOBAL] Unauthorized');
              this.$router.push('login');
            }
          }
        );
      }
    });
  }
}
