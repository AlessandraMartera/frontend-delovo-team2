import { createRouter, createWebHistory } from 'vue-router';

import home from './pages/home.vue';
import about from './pages/about.vue';

import userRegister from './pages/userRegister.vue';
import restaurantRegister from './pages/restaurantRegister.vue';

import logIn from './pages/logIn.vue';

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
path: '/userRegister',
name: 'userRegister',
component: userRegister
},
{
    path: '/logIn',
    name: 'logIn',
    component: logIn
    },
{
path: '/restaurantRegister/:id',
name: 'restaurantRegister',
component: restaurantRegister
},

]
});
export { router };