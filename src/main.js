import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import router from './router/router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { createPinia } from "pinia";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';  

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(VueSweetalert2)
    .use(createPinia())
.mount('#app')
