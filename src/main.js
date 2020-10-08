import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.config.productionTip = false

export const globalStore = new Vue({
  data: {
    globalvar: 'global hello world'
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
