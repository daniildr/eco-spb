import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from "./router";
import VModal from 'vue-js-modal';
import { store } from './store';
import VueSmoothScroll from 'vue2-smooth-scroll'


Vue.use(VModal)
Vue.use(Vuex)
Vue.use(VueSmoothScroll)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
