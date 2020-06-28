<template>
    <div class="home">
        <v-container fluid>
            <v-row>
                <h1 class="pa-6">Dashboard</h1>
                <v-card
                    shaped
                    height="86vh"
                    width="100%"
                    outline
                    color=""
                >
                    <v-col cols="12" class="my-3 py-6">
                        <v-card shaped height="100%" width="100%" color="#FBEEC1">
                            <v-card-title class="h3">
                                Vehicle History
                                <v-spacer></v-spacer>
                                <v-text-field class="field"
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
                                        >{{ item.action }}</v-chip
                                    >
                                </template>
                            </v-data-table>
                        </v-card>
                    </v-col>
                </v-card>
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
            },
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
            },
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
<style>
.home {
    display: inline-block;
    padding: 2%;
    width: 100%;
    height: 100%;
}
.pa-6 {
    color:#8b4513;
}
.h3 {
    color: saddlebrown;
    font-weight: bold;
}
</style>