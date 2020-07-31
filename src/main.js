import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import VueSocketIO from 'vue-socket.io';
// eslint-disable-next-line no-unused-vars

Vue.config.productionTip = false;
Vue.use(
    new VueSocketIO({
        debug: true,
        connection: 'http://127.0.0.1:5000'

        // options: { path: '/sending/' }
    })
);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
