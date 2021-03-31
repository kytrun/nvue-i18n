import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import i18n from './lang/index'
const app = new Vue({
  i18n,
  ...App
})
app.$mount()
