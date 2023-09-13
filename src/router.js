import { createRouter, createWebHistory } from 'vue-router';

import home from './pages/home.vue';
import about from './pages/about.vue';

import order from './pages/order.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/about/:id',
            name: 'about',
            component: about
        },
        {
            path: '/order',
            name: 'order',
            component: order
        },
        
    ]
});
export { router };