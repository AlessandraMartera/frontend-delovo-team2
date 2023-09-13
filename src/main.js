import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// import router
import { router } from "./router.js"

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
createApp(App).use(router).mount('#app')

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
