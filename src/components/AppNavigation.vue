<template>
    <v-navigation-drawer permanent app width="120px">
        <div class="drawer">
            <v-list flat nav>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            VEnEx
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list flat nav>
                <v-list-item to="/" color="primary" class="px-8">
                    <v-tooltip right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon large v-bind="attrs" v-on="on"
                                >mdi-view-dashboard</v-icon
                            >
                        </template>
                        <span>DashBoard</span>
                    </v-tooltip>
                </v-list-item>
            </v-list>
            <v-list flat nav>
                <v-list-item to="/search" color="primary" class="px-8">
                    <v-tooltip right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon large v-bind="attrs" v-on="on"
                                >mdi-magnify</v-icon
                            >
                        </template>
                        <span>Advanced Search</span>
                    </v-tooltip>
                </v-list-item>
            </v-list>
            <v-list flat nav>
                <v-list-item to="/settings" color="primary" class="px-8">
                    <v-tooltip right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon large v-bind="attrs" v-on="on"
                                >mdi-cog</v-icon
                            >
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

<style scoped>

.drawer {
    display: flex;
    background-color: #FBEEC1;
    /* height: 80vh; */
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
}
a:hover {
    background-color: #f8eaa4;
    border-radius: 20%;
}
.title {
    color: rgb(241, 138, 3);
    font-size: xx-large;
    /* border: 10mm; */
    font-weight: bolder;
    /* fon */
}
</style>
