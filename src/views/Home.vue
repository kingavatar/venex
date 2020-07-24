<template>
    <div class="home">
        <v-container fluid class="px-0 pb-0">
            <v-row>
                <v-col cols="9" class="pr-0">
                    <v-row>
                        <h1 class="px-6 pb-6">Dashboard</h1>
                    </v-row>
                    <v-card
                        shaped
                        height="86vh"
                        width="100%"
                        outlined
                        color="#F7F9FB"
                        class="mx-n3"
                    >
                        <v-col cols="12" class="my-3 py-12 px-12">
                            <v-card
                                shaped
                                height="100%"
                                width="100%"
                                elevation="3"
                            >
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
                                    @click:row="rowClicked"
                                >
                                    <template v-slot:item.icon="{ item }">
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </template>
                                    <template v-slot:item.action="{ item }">
                                        <v-chip
                                            :color="getColor(item.action)"
                                            :text-color="
                                                getTextColor(item.action)
                                            "
                                            >{{ item.action }}</v-chip
                                        >
                                    </template>
                                </v-data-table>
                            </v-card>
                        </v-col>
                    </v-card>
                </v-col>
                <v-col cols="3" class="pl-0">
                    <Profile />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue';

export default {
    name: 'Home',
    components: { Profile },
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
        rowClicked(value) {
            this.$router.push({ path: `/details/${value.number}` });
        },
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
