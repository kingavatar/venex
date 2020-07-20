import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Search.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Settings.vue')
    },
    {
        path: '/details/:vehicleNo',
        name: 'Details',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Details.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
