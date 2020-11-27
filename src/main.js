import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import axios from "axios";
import { routes } from './router/router';

// Importing CSS
require('@/assets/css/style.css')

// Adding Axios and Defining Axios Global Config
const key = 'gOnX-o8sO1Esh6EBpDsX72o2AJKBDjWZhqMGCDsAC70';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${key}`;
axios.defaults.headers.get['Accepts'] = 'application/json';


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

Vue.use(VueRouter);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
