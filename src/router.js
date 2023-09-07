import { createRouter, createWebHistory } from 'vue-router';

import home from './pages/home.vue';
import about from './pages/about.vue';

import userRegister from './pages/user-register.vue';
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
path: '/user-register',
name: 'user-register',
component: userRegister
},
{
path: '/logIn',
name: 'logIn',
component: logIn
},

]
});
export { router };