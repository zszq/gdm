// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import Vueaxios from 'vue-axios'
import qs from 'qs'
// axios.defaults.baseURL = process.env.API_HOST
Vue.prototype.$qs = qs
Vue.use(Vueaxios, axios)

import { Button, Select, Option } from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Option);

import "./assets/style/cssreset.css"
import "./assets/style/publicCSS.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
