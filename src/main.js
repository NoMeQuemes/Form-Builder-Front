import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min.js'
import axios from "axios";
import VueAxios from "vue-axios";
import BootstrapIconsPlugin from 'bootstrap-icons-vue';


import BootstrapVue from 'bootstrap-vue'
createApp(App).use(VueAxios, axios).use(store).use(router).use(BootstrapIconsPlugin).mount('#app');
//Vue.use(BToast);