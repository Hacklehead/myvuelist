import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import router from './router'
//  import Routes from './routes'
import store from './store'

Vue.config.productionTip = false

// Use packages
Vue.use(VueResource)
Vue.use(VueRouter)

// Register routes
//
// const myrouter = new VueRouter({
//   routes: Routes,
//   mode: 'history'
// })

new Vue({
  router,
  store,
  VueResource,
  render: h => h(App)
}).$mount('#app')
