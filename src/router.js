import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';

import register from './pages/register.vue';
import logIn from './pages/logIn.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'Home',
component: Home
},
{
path: '/register',
name: 'register',
component: register
},
{
    path: '/logIn',
    name: 'logIn',
    component: logIn
    },

]
});
export { router };