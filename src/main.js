// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '../static/vendor/font-awesome/svg-with-js/js/fa-solid.min.js'
import '../static/vendor/font-awesome/svg-with-js/js/fa-brands.min.js'
import '../static/vendor/font-awesome/svg-with-js/js/fontawesome.min.js'

// import KsVueScrollmagic from 'ks-vue-scrollmagic'

// Vue.use(KsVueScrollmagic)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
