<template>
    <div id="details">
        <v-container style="height:90vh;">
            <v-row align="center" class="">
                <v-btn icon large @click="goback"
                    ><v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h1>Account Details</h1>
                <v-spacer></v-spacer>
            </v-row>

            <v-row
                class="fill-height rounded-xl py-2 my-2"
                style="background-color:#F7F9FB"
            >
                <v-col class="d-flex align-start justify-center">
                    <v-card width="60vh" rounded class="rounded-xl">
                        <v-row align="center" class="my-4 py-4">
                            <v-col cols="4" class="ma-2 pa-2">
                                <v-avatar size="100">
                                    <img
                                        src="@/assets/supportmale.png"
                                        alt="Some Guy"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col cols="7" class="ml-n3">
                                <v-row
                                    align="center"
                                    justify="space-around"
                                    class="my-2"
                                >
                                    <h1>{{ name }}</h1>
                                </v-row>
                                <v-row align="center" justify="space-around">
                                    <v-btn color="green" fab dark
                                        ><v-icon>mdi-phone</v-icon></v-btn
                                    >
                                    <v-btn color="orange" fab dark
                                        ><v-icon>mdi-email</v-icon></v-btn
                                    >
                                    <v-btn color="blue" fab dark
                                        ><v-icon
                                            >mdi-android-messages</v-icon
                                        ></v-btn
                                    >
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row align="center" justify="center"
                            ><p style="font-size:20px;">Details</p>
                        </v-row>
                        <v-row align="center" justify="center">
                            <v-icon class="mr-3">mdi-map-marker</v-icon>
                            <p class="pt-5">{{ flatNo }}</p>
                        </v-row>
                        <v-row align="center" justify="center">
                            <v-icon class="mr-3">mdi-email</v-icon>
                            <p class="pt-5">{{ email }}</p>
                        </v-row>
                        <v-row align="center" justify="center">
                            <v-icon class="mr-3">mdi-phone</v-icon>
                            <p class="pt-5">{{ phoneNo }}</p>
                        </v-row>
                        <v-divider class="mx-10 mt-4 pt-4" />
                        <v-row justify="space-around" class="mx-5 px-5">
                            <v-col>
                                <v-card class="pa-2" color="#F7F9FB" outlined>
                                    <v-list-item-content>
                                        <div class="overline mb-2">
                                            Entries
                                        </div>
                                        <v-card-title>
                                            <v-row justify="center">
                                                <v-icon color="green"
                                                    >mdi-car-arrow-right</v-icon
                                                >
                                                <div class="mt-2 mx-4">
                                                    {{ entries }}
                                                </div>
                                            </v-row>
                                        </v-card-title>
                                    </v-list-item-content>
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card class="pa-2" color="#F7F9FB" outlined>
                                    <v-list-item-content>
                                        <div class="overline mb-2">
                                            Exits
                                        </div>
                                        <v-card-title>
                                            <v-row justify="center">
                                                <v-icon color="red"
                                                    >mdi-car-arrow-left</v-icon
                                                >
                                                <div class="mt-2 mx-4">
                                                    {{ exits }}
                                                </div>
                                            </v-row>
                                        </v-card-title>
                                    </v-list-item-content>
                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row justify="center" class="mx-12 px-12 mb-4">
                            <v-col class="mx-5 px-5">
                                <v-card class="pa-2" color="#F7F9FB" outlined>
                                    <v-list-item-content>
                                        <div class="overline mb-2">
                                            Total Activity
                                        </div>
                                        <v-card-title>
                                            <v-row justify="center">
                                                <v-icon :color="totalActColor"
                                                    >mdi-car</v-icon
                                                >
                                                <div class="mt-2 mx-4">
                                                    {{ totalAct }}
                                                </div>
                                            </v-row>
                                        </v-card-title>
                                    </v-list-item-content>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col class="d-flex flex-column align-center">
                    <v-card
                        width="80vh"
                        height="40vh"
                        class="rounded-xl d-flex align-center justify-center"
                        rounded
                        outlined
                    >
                        <v-icon x-large>mdi-car-side</v-icon>
                    </v-card>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-card shaped width="80vh"
                        ><v-data-table
                            :headers="headers"
                            :items="vehicles"
                            :items-per-page="5"
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
                                    :text-color="getTextColor(item.action)"
                                    >{{ item.action }}</v-chip
                                >
                            </template>
                        </v-data-table></v-card
                    >
                    <v-spacer></v-spacer>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
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
                type: 'Resident Vehicle',
                time: 'TimeStamp',
                icon: 'mdi-account'
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
                type: 'Resident Vehicle',
                time: 'TimeStamp',
                icon: 'mdi-account'
            },
            {
                action: 'Entry',
                number: 'XXXXXX',
                type: 'Resident Vehicle',
                time: 'TimeStamp',
                icon: 'mdi-account'
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
                type: 'Resident Vehicle',
                time: 'TimeStamp',
                icon: 'mdi-account'
            },
            {
                action: 'Entry',
                number: 'XXXXXX',
                type: 'Resident Vehicle',
                time: 'TimeStamp',
                icon: 'mdi-account'
            }
        ],
        entries: '11',
        exits: '7',
        type: 'Resident Vehicle',
        name: 'Owner Name',
        flatNo: 'Flat No',
        email: 'XXXXXXXXXX@XXXXX.XXX',
        phoneNo: 'XXXXXXXXXX'
        // totalActColor: 'purple'
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
        },
        closeDrawer() {
            this.$root.$emit('toggleNavDrawer', 'close');
        },
        goback() {
            this.$root.$emit('toggleNavDrawer', 'open');
            this.$router.back();
        }
    },
    beforeMount() {
        this.closeDrawer();
    },
    beforeDestroy() {
        this.$root.$emit('toggleNavDrawer', 'open');
    },
    computed: {
        totalAct: function() {
            return +this.entries + +this.exits;
        },
        totalActColor: function() {
            return this.type == 'Resident Vehicle'
                ? 'orange'
                : this.type == 'Commercial Vehicle'
                ? 'pink'
                : this.type == 'Visitor Vehicle'
                ? 'blue'
                : 'purple';
        }
    }
};
</script>
