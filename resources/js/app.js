/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');



import VueRouter from 'vue-router';
import routes from './routes'

Vue.use(VueRouter)

import Vuetify from 'vuetify';

   Vue.use(Vuetify); 

import Home from './components/Home.vue';

const app = new Vue({
    el: '#app',
    components: {Home},
    router: new VueRouter(routes),
    vuetify:new Vuetify(),
});
