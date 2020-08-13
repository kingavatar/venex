import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import store from '../store/index';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Login.vue')
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
            import(/* webpackChunkName: "about" */ '../views/Search.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Settings.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/details/:vehicleNo',
        name: 'Details',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Details.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '*',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/404.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.authStatus == 'success') {
//             next();
//             return;
//         }
//         next('/login');
//     } else {
//         next();
//     }
// });
