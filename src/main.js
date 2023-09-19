import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// Import vuex
import { createStore } from 'vuex'


// import router
import { router } from "./router.js"

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      beUrl: "http://127.0.0.1:8000/storage/",
      items: [],
      cart_visible: false,
      total: 0,
      emptyCart: false,
      ristoranteDiverso: false,
      prodottoDiverso: false
    }
  }
})


createApp(App).use(router).use(store).mount('#app')

