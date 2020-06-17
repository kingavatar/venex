<template>
    <v-navigation-drawer permanent app width="120px">
        <div class="drawer">
            <v-list flat nav>
                <v-list-item to="/" color="primary" class="px-8">
                    <v-tooltip right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon large v-bind="attrs" v-on="on">mdi-view-dashboard</v-icon>
                        </template>
                        <span>DashBoard</span>
                    </v-tooltip>
                </v-list-item>
            </v-list>
            <v-list flat nav>
                <v-list-item to="/search" color="primary" class="px-8">
                    <v-tooltip right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon large v-bind="attrs" v-on="on">mdi-magnify</v-icon>
                        </template>
                        <span>Advanced Search</span>
                    </v-tooltip>
                </v-list-item>
            </v-list>
            <v-list flat nav>
                <v-list-item to="/settings" color="primary" class="px-8">
                    <v-tooltip right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon large v-bind="attrs" v-on="on">mdi-cog</v-icon>
                        </template>
                        <span>Settings</span>
                    </v-tooltip>
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
