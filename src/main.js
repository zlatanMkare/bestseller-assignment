import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

Vue.config.productionTip = false
require('../src/scss/main.scss')

// routes
import Home from './Home.vue'
import Product from './Product.vue'
import Category from './Category.vue'

const routes = [
     { path: '/', component: Home },
     { path: '/product/:label', name: 'product', component: Product },
     { path: '/category/:id', name: 'category', component: Category }
];

const router = new VueRouter ({
     routes,
     mode: 'history'
});

new Vue({
     router,
     render: h => h(App),
}).$mount('#app')
