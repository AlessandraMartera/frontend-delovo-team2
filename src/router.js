import { createRouter, createWebHistory } from 'vue-router';

import home from './pages/home.vue';
import about from './pages/about.vue';

import userRegister from './pages/userRegister.vue';
import restaurantRegister from './pages/restaurantRegister.vue';

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
    path: '/restaurantRegister',
    name: 'restaurantRegister',
    component: restaurantRegister
    },

]
});
export { router };