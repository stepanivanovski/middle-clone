// import { userSetter } from 'core-js/fn/symbol'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.config.productionTip = false

createApp(App)
  .use(router)
  .use(store)  
  .mount('#app')
