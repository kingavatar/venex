import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
        createPersistedState({
            storage: window.sessionStorage
        })
    ],
    state: { status: '' },
    mutations: {
        auth_success(state) {
            state.status = 'success';
        },
        auth_error(state) {
            state.status = 'error';
        },
        logout(state) {
            state.status = '';
        }
    },
    actions: {
        login({ commit }) {
            return commit('auth_success');
        },
        logout({ commit }) {
            return commit('logout');
        }
    },
    modules: {},
    getters: { authStatus: state => state.status }
});
