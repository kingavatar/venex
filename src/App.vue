<template>
    <div id="app">
        <!-- <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>-->
        <!-- <router-view /> -->
        <v-app>
            <AppNavigation />
            <v-main>
                <v-container fluid>
                    <router-view />
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>
<script>
import AppNavigation from '@/components/AppNavigation.vue';
export default {
    name: 'App',
    components: { AppNavigation }
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
}
html {
    overflow: hidden !important;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

html::-webkit-scrollbar {
    width: 0;
    height: 0;
}
</style>
