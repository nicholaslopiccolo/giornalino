import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Buefy from 'buefy'
import './assets/scss/app.scss'

Vue.use(Buefy)

Vue.use(Buefy)

Vue.config.productionTip = true
Vue.config.devtools = true

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
