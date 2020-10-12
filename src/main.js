import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from "./router";
import VModal from 'vue-js-modal'
import { store } from './store'

Vue.use(VModal)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
