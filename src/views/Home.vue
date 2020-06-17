<template>
    <div class="home">
        <v-container fluid>
            <v-row>
                <h1 class="pa-6">Dashboard</h1>
                <v-col cols="12" class="ma-3 pa-6">
                    <v-card shaped height="100%" width="100%">
                        <!-- <v-list shaped>
                            <v-subheader>VEHICLE HISTORY</v-subheader>
                            <v-list-item-group v-model="item" color="primary">
                                <v-list-item
                                    v-for="(item, i) in items"
                                    :key="i"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-col cols="auto" class="mr-auto">
                                            <v-list-item-title
                                                v-text="item.vehicleNo"
                                            ></v-list-item-title>
                                        </v-col>
                                        <v-col cols="auto">
                                            <v-list-item-title
                                                v-text="item.time"
                                            ></v-list-item-title>
                                        </v-col>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>-->
                        <v-card-title>
                            Vehicle History
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        <v-data-table
                            :headers="headers"
                            :items="vehicles"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1"
                        >
                            <template v-slot:item.icon="{ item }">
                                <v-icon>{{ item.icon }}</v-icon>
                            </template>
                            <template v-slot:item.action="{ item }">
                                <v-chip
                                    :color="getColor(item.action)"
                                    :text-color="getTextColor(item.action)"
                                >{{ item.action }}</v-chip>
                            </template>
                        </v-data-table>
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
        item: 0,
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
        ],
        search: '',
        headers: [
            { align: 'start', sortable: false, value: 'icon' },
            {
                text: 'Vehicle Number',
                value: 'number'
            },
            { text: 'Type', value: 'type' },
            { text: 'Action', value: 'action' },
            { text: 'TimeStamp', value: 'time' }
        ],
        vehicles: [
            {
                action: 'Entry',
                number: 'XXXXXX',
                type: 'Visitor Vehicle',
                time: 'TimeStamp',
                icon: 'mdi-clock'
            },
            {
                action: 'Exit',
                number: 'XXXXXX',
                type: 'Resident Vehicle',
                time: 'TimeStamp',
                icon: 'mdi-account'
            },

            {
                action: 'Entry',
                number: 'XXXXXX',
                type: 'Commercial Vehicle',
                time: 'TimeStamp',
                icon: 'mdi-flag'
            }
        ]
    }),
    methods: {
        getColor(action) {
            if (action === 'Entry') return '#F3FEF3';
            else if (action === 'Exit') return '#FEF5F8';
            else return '#FFF9F4';
        },
        getTextColor(action) {
            if (action === 'Entry') return 'green';
            else if (action === 'Exit') return 'red';
            else return 'orange';
        }
    }
};
</script>
