import Vue from 'vue';
import Router from 'vue-router';
import Info from './views/Info.vue';
import Phone from './views/Phone.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/info',
        },

        {
            path: '/info',
            name: 'info',
            component: Info,
        },
        {
            path: '/phone/:phone',
            name: 'phone',
            component: Phone,
        },
    ],
});
