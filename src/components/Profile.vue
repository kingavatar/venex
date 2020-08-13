<template>
    <div class="profile mr-6">
        <v-col cols="12">
            <v-row align="center" justify="space-between">
                <v-badge bordered color="error" :content="noofCars" overlap>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                icon
                                v-bind="attrs"
                                v-on="on"
                                @click="newCarAlertTrigger"
                            >
                                <v-icon>mdi-bell-outline</v-icon>
                            </v-btn>
                        </template>
                        <span>Notification</span>
                    </v-tooltip>
                </v-badge>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            icon
                            @click="drawermethod"
                            v-bind="attrs"
                            v-on="on"
                            ><v-icon>mdi-buffer</v-icon></v-btn
                        ></template
                    >
                    <span>toggle Drawer</span>
                </v-tooltip>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon @click="logout" v-bind="attrs" v-on="on">
                            <v-icon>mdi-location-exit</v-icon>
                        </v-btn>
                    </template>
                    <span>Logout</span>
                </v-tooltip>
            </v-row>
            <v-row justify="space-around" align="center" class="pt-14">
                <h2 style="text-align: left;">
                    <span style="font-weight: normal;">Hello,</span>
                    <br />
                    His Name
                </h2>
                <v-avatar size="90">
                    <img
                        src="https://avatars1.githubusercontent.com/u/31726036?s=460&u=0718acf01040da3a43822841035fd3f8ea13766c&v=4"
                        alt="KA"
                    />
                </v-avatar>
            </v-row>
            <v-divider class="my-10" />
            <v-row v-for="j in 3" :key="j" justify="space-around">
                <v-col v-for="k in 2" :key="k">
                    <v-card class="pa-2" color="#F7F9FB" outlined>
                        <v-list-item-content>
                            <div class="overline mb-2">
                                {{ cards[j - 1][k - 1].title }}
                            </div>
                            <v-card-title>
                                <v-row justify="center">
                                    <v-icon
                                        :color="cards[j - 1][k - 1].color"
                                        >{{ cards[j - 1][k - 1].icon }}</v-icon
                                    >
                                    <div class="mt-2 mx-4">
                                        {{ cards[j - 1][k - 1].number }}
                                    </div>
                                </v-row>
                            </v-card-title>
                        </v-list-item-content>
                    </v-card>
                </v-col>
            </v-row>
            <v-row align="center" justify="space-around" class="mt-2 pt-2">
                <v-btn
                    color="warning"
                    @click="noofCars++ && newCarAlertTrigger()"
                    >No dialog Trigger</v-btn
                >
                <v-btn color="success" @click="newCarDialogTrigger"
                    >dialog Trigger</v-btn
                >
            </v-row>
            <v-row align="center" justify="center" class="mt-2 pt-2">
                <v-alert
                    :value="newcarAlert"
                    border="left"
                    dismissible
                    icon="mdi-car-side"
                    type="error"
                    transition="scale-transition"
                    elevation="9"
                >
                    New {{ noofCars }} Cars Detected</v-alert
                >
            </v-row>
        </v-col>
    </div>
</template>
<script>
export default {
    name: 'Profile',
    data: () => ({
        newcarAlert: false,
        noofCars: 6,
        cards: [
            [
                {
                    title: 'Total Activity',
                    number: '189',
                    icon: 'mdi-car',
                    color: 'purple'
                },
                {
                    title: 'Entries',
                    number: '174',
                    icon: 'mdi-car-arrow-right',
                    color: 'green'
                }
            ],
            [
                {
                    title: 'Exits',
                    number: '23',
                    icon: 'mdi-car-arrow-left',
                    color: 'red'
                },
                {
                    title: 'Residents Parked',
                    number: '56',
                    icon: 'mdi-account',
                    color: 'orange'
                }
            ],
            [
                {
                    title: 'Visitors Parked',
                    number: '24',
                    icon: 'mdi-clock',
                    color: 'blue'
                },
                {
                    title: 'Commercial Parked',
                    number: '7',
                    icon: 'mdi-flag',
                    color: 'pink'
                }
            ]
        ]
    }),
    methods: {
        drawermethod() {
            this.$root.$emit('toggleNavDrawer');
        },
        logout: function() {
            this.$store.dispatch('logout').then(() => {
                this.$router.push('/login');
            });
        },
        removeCarAlert() {
            setTimeout(() => {
                this.newcarAlert = false;
            }, 3000);
        },
        newCarAlertTrigger() {
            this.newcarAlert = true;
            this.removeCarAlert();
        },
        newCarDialogTrigger() {
            this.noofCars++;
            this.newCarAlertTrigger();
            this.$root.$emit('newCarDetect', true);
        }
    },
    mounted() {
        this.newCarAlertTrigger();
    }
};
</script>
