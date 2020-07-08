import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi' // default - only for display purposes
    },
    theme: {
        themes: {
            light: {
                primary: '#6F32FF',
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3
            },
            dark: {
                primary: colors.blue.lighten3
            }
        }
    }
});
