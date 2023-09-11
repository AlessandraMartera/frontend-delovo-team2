import { createRouter, createWebHistory } from 'vue-router';

import home from './pages/home.vue';
import about from './pages/about.vue';

import AppSectionTypology from './components/AppSectionTypology.vue';

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
            path: '/typologies',
            name: 'AppSectionTypology',
            component: AppSectionTypology
        },

    ]
});
export { router };