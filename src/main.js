import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import router from './router/router'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { createPinia } from "pinia";

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(createPinia())
.mount('#app')
