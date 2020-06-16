<template>
    <v-navigation-drawer permanent app width="120px">
        <div class="drawer">
            <v-list flat nav>
                <v-list-item to="/" color="primary" class="px-8">
                    <v-icon large>mdi-view-dashboard</v-icon>
                </v-list-item>
            </v-list>
            <v-list flat nav>
                <v-list-item to="/search" color="primary" class="px-8">
                    <v-icon large>mdi-magnify</v-icon>
                </v-list-item>
            </v-list>
            <v-list flat nav>
                <v-list-item to="/settings" color="primary" class="px-8">
                    <v-icon large>mdi-cog</v-icon>
                </v-list-item>
            </v-list>
        </div>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'AppNavigation'
};
</script>

<style>
.drawer {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
}
</style>
