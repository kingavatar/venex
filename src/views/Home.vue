<template>
    <div class="home">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="ma-3 pa-6">
                    <h1 class="pb-8">This is Home Page</h1>

                    <v-card shaped height="100%" width="100%">
                        <v-list shaped>
                            <v-subheader>VEHICLE HISTORY</v-subheader>
                            <v-list-item-group v-model="item" color="primary">
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-col cols="auto" class="mr-auto">
                                            <v-list-item-title v-text="item.vehicleNo"></v-list-item-title>
                                        </v-col>
                                        <v-col cols="auto">
                                            <v-list-item-title v-text="item.time"></v-list-item-title>
                                        </v-col>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    components: {},
    data: () => ({
        item: 1,
        items: [
            {
                vehicleNo: 'Visitor Vehicle',
                time: 'TimeStamp',
                icon: 'mdi-clock'
            },
            {
                vehicleNo: 'Resident Vehicle',
                time: 'TimeStamp',
                icon: 'mdi-account'
            },
            {
                vehicleNo: 'Commercial Vehicle',
                time: 'TimeStamp',
                icon: 'mdi-flag'
            }
        ]
    })
};
</script>
