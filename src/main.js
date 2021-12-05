import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'core-js';
import "animate.css"
import Contextmenu from "vue-contextmenujs"
import jQuery  from "jquery"
window.$ = jQuery;
Vue.use(Contextmenu);
Vue.use(jQuery)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
