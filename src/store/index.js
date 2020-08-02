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
    state: { status: '', isadmin: false },
    mutations: {
        auth_success(state) {
            state.status = 'success';
        },
        authisadmin(state) {
            state.isadmin = true;
        },
        auth_error(state) {
            state.status = 'error';
        },
        logout(state) {
            state.status = '';
            state.isadmin = false;
        }
    },
    actions: {
        login({ commit }, user) {
            if (user.email == 'admin') commit('authisadmin');
            return commit('auth_success');
        },
        logout({ commit }) {
            return commit('logout');
        }
    },
    modules: {},
    getters: {
        authStatus: state => state.status,
        isadmin: state => state.isadmin
    }
});
