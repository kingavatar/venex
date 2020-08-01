<template>
    <v-navigation-drawer v-model="drawer" app width="100px">
        <div class="drawer">
            <v-list flat nav class="my-6">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            Venex
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list flat nav>
                <v-list-item to="/" color="primary" class="px-6 my-6">
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
                <v-list-item to="/search" color="primary" class="px-6 my-6">
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
                <v-list-item color="primary" class="px-6 my-6">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on: dialog, attrs }">
                            <v-tooltip right>
                                <template v-slot:activator="{ on: tooltip }">
                                    <v-icon
                                        large
                                        v-bind="attrs"
                                        v-on="{ ...tooltip, ...dialog }"
                                        >mdi-account-details-outline</v-icon
                                    >
                                </template>
                                <span>Details Entry</span>
                            </v-tooltip>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">User Profile</span>
                            </v-card-title>
                            <v-card-text>
                                <UserForm ref="userform"
                            /></v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="closeDialog"
                                    >Close</v-btn
                                >
                                <v-btn
                                    icon
                                    color="warning"
                                    @click="resetFormValidation"
                                    ><v-icon>mdi-restore-alert</v-icon></v-btn
                                >
                                <v-btn icon color="error" @click="resetForm"
                                    ><v-icon>mdi-restore</v-icon></v-btn
                                >
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="saveDialog"
                                    >Save</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-list-item>
            </v-list>
            <v-list flat nav>
                <v-list-item to="/about" color="primary" class="px-6 my-6">
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
        <v-dialog v-model="triggerDialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">User Profile</span>
                </v-card-title>
                <v-card-text> <AutoForm ref="autoform"/></v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="closeTriggerDialog"
                        >Close</v-btn
                    >
                    <v-btn
                        icon
                        color="warning"
                        @click="resetTriggerFormValidation"
                        ><v-icon>mdi-restore-alert</v-icon></v-btn
                    >
                    <v-btn icon color="error" @click="resetTriggerForm"
                        ><v-icon>mdi-restore</v-icon></v-btn
                    >
                    <v-btn color="blue darken-1" text @click="saveTriggerDialog"
                        >Save</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-navigation-drawer>
</template>

<script>
import UserForm from '@/components/UserForm.vue';
import AutoForm from '@/components/AutoForm.vue';
export default {
    name: 'AppNavigation',
    components: { UserForm, AutoForm },
    // props: { drawer: Boolean },
    data: () => ({
        dialog: false,
        triggerDialog: false,
        drawer: true,
        tab: ''
    }),
    methods: {
        closeDialog() {
            this.$refs.userform.resetValidation();
            this.dialog = false;
        },
        saveDialog() {
            this.$refs.userform.validate();
            if (this.$refs.userform.valid()) this.dialog = false;
        },
        resetForm() {
            this.$refs.userform.reset();
        },
        resetFormValidation() {
            this.$refs.userform.resetValidation();
        },
        closeTriggerDialog() {
            this.$refs.autoform.resetValidation();
            this.triggerDialog = false;
        },
        saveTriggerDialog() {
            this.$refs.autoform.validate();
            if (this.$refs.autoform.valid()) this.triggerDialog = false;
        },
        resetTriggerForm() {
            this.$refs.autoform.reset();
        },
        resetTriggerFormValidation() {
            this.$refs.autoform.resetValidation();
        }
    },
    mounted: function() {
        this.$root.$on('toggleNavDrawer', value => {
            this.drawer = !this.drawer;
            if (value == 'close') this.drawer = false;
            else if (value == 'open') this.drawer = true;
        });
        this.$root.$on('newCarDetect', value => {
            if (value) {
                this.triggerDialog = true;
            }
        });
    }
};
</script>

<style scoped>
.drawer {
    display: flex;
    height: 80vh;
    flex-direction: column;
    align-content: center;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    /* justify-content: space-around; */
}
.drawer::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
}
</style>
