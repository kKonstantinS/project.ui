
import axios from 'axios'

export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue) {
    // Add or modify global methods or properties.
    Vue.prototype.$userDetails = null;
    Vue.logout = () => {
      axios.get('/auth/clear-session');
      this.$userDetails = null;
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
            return response;
          },
          error => {
            if (parseInt(error.response && error.response.status) === 401) {
              this.router.push('/login');
            }
          }
        );
      }
    });
  }
}
