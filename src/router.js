import { createRouter, createWebHistory } from 'vue-router';

import home from './pages/home.vue';
import about from './pages/about.vue';

import userRegister from './pages/userRegister.vue';
// import userRegister from './pages/useRegister.vue';

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
path: '/useRegister',
name: 'useRegister',
component: userRegister
},

]
});
export { router };