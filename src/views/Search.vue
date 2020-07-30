<template>
    <div class="search">
        <v-row>
            <h1 class="px-6 py-6">Advanced Search</h1>
        </v-row>
        <v-card
            shaped
            height="88vh"
            width="100%"
            outlined
            color="#F7F9FB"
            class="mx-n3"
            v-if="!result"
        >
            <v-col>
                <v-row align="center" class="ma-3 pa-3">
                    <v-spacer></v-spacer>
                    <p>Vehicle Number</p>
                    <v-text-field
                        v-model="vehicleNo"
                        label="Solo"
                        placeholder="Vehicle Number"
                        solo
                        prepend-inner-icon="mdi-car-side"
                        class="mx-3 px-6 rounded-tl-xl rounded-br-xl"
                    ></v-text-field>
                    <v-btn
                        outlined
                        color="primary"
                        class="mb-6"
                        @click="sendDataBackend"
                        >search</v-btn
                    >
                    <v-spacer></v-spacer>
                </v-row>
                <v-divider class="mx-3" />
                <v-row align="start" class="mx-3 mt-3 pa-3 pt-6">
                    <h2>Advanced Options</h2>
                </v-row>
                <v-form ref="searchform" v-model="searchvalid">
                    <v-row align="center" class="mx-3 px-3 mt-6 pt-3">
                        <p>For these Owners</p>
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="name"
                            label="Solo"
                            placeholder="Name"
                            :rules="nameRules"
                            prepend-inner-icon="mdi-account"
                            solo
                            class="mx-6 px-3  rounded-tl-xl rounded-br-xl"
                        ></v-text-field>
                        <v-spacer></v-spacer>

                        <v-text-field
                            v-model="address"
                            label="Solo"
                            placeholder="Address"
                            :rules="addrRules"
                            @focus="resetvalidate"
                            prepend-inner-icon="mdi-map-marker"
                            solo
                            class="mx-6 px-3 rounded-tl-xl rounded-br-xl"
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="companyname"
                            label="Solo"
                            placeholder="Compnay Name"
                            prepend-inner-icon="mdi-account"
                            solo
                            v-if="radios == 'commercial'"
                            class="mx-6 px-3  rounded-tl-xl rounded-br-xl"
                        ></v-text-field>
                    </v-row>
                </v-form>
                <v-row align="center" class="mx-3 px-3 mt-6 pt-3">
                    <p>Between this time</p>
                    <v-spacer></v-spacer>

                    <v-menu
                        ref="timemenu1"
                        v-model="timemenubefore"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="timebefore"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                        <!-- max-width="290px" -->
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="timebefore"
                                solo
                                readonly
                                placeholder="TimeStamp Before"
                                prepend-inner-icon="mdi-clock-outline"
                                class="mx-3 px-6 rounded-tl-xl rounded-br-xl"
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-time-picker
                            v-if="timemenubefore"
                            v-model="timebefore"
                            full-width
                            @click:minute="$refs.timemenu1.save(timebefore)"
                        ></v-time-picker>
                    </v-menu>
                    <v-spacer></v-spacer>

                    <v-menu
                        ref="timemenu2"
                        v-model="timemenuafter"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="timeafter"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="timeafter"
                                solo
                                readonly
                                placeholder="TimeStamp After"
                                prepend-inner-icon="mdi-clock-outline"
                                class="mx-3 px-6 rounded-tl-xl rounded-br-xl"
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-time-picker
                            v-if="timemenuafter"
                            v-model="timeafter"
                            full-width
                            @click:minute="$refs.timemenu2.save(timeafter)"
                        ></v-time-picker>
                    </v-menu>
                    <v-spacer></v-spacer>
                </v-row>

                <v-row align="center" class="mx-3 px-3 mt-6 pt-3">
                    <p>Between these dates</p>
                    <v-spacer></v-spacer>
                    <v-menu
                        v-model="datemenubefore"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="datebefore"
                                solo
                                readonly
                                placeholder="Date Before"
                                prepend-inner-icon="mdi-calendar"
                                class="pr-16 rounded-tl-xl rounded-br-xl"
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="datebefore"
                            no-title
                            @input="datemenubefore = false"
                        ></v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-menu
                        v-model="datemenuafter"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="dateafter"
                                solo
                                readonly
                                placeholder="Date After"
                                prepend-inner-icon="mdi-calendar"
                                class="pr-6 rounded-tl-xl rounded-br-xl"
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="dateafter"
                            no-title
                            @input="datemenuafter = false"
                        ></v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>
                </v-row>
                <v-row align="center" justify="space-around" class="mt-6 pt-3">
                    <v-radio-group v-model="radios" row>
                        <v-radio label="Resident" value="resident"></v-radio>
                        <v-radio
                            label="Commercial"
                            value="commercial"
                        ></v-radio>
                        <v-radio label="Visitor" value="visitor"></v-radio>
                        <v-radio label="Any" value="any"></v-radio>
                    </v-radio-group>
                    <v-radio-group v-model="action" row>
                        <v-radio label="Entry" value="entry"></v-radio>
                        <v-radio label="Exit" value="exit"></v-radio>
                        <v-radio label="Any" value="any"></v-radio>
                    </v-radio-group>
                </v-row>
            </v-col>
        </v-card>
        <SearchResult
            v-else
            v-on:goBack="handleResult"
            v-bind:headers="this.headers"
            v-bind:vehicles="this.vehicles"
        />
    </div>
</template>
<script>
import SearchResult from '@/components/SearchResult.vue';
import axios from 'axios';
export default {
    components: { SearchResult },
    data() {
        return {
            addrRules: [
                v =>
                    (!v && !this.name) ||
                    !!v ||
                    'Address is Required when Name is Given'
            ],
            nameRules: [
                v =>
                    (!v && !this.address) ||
                    (!!v && !!this.address) ||
                    'Address is Required when Name is Given'
            ],
            searchvalid: false,
            headers: [],
            vehicles: [],
            vehicleNo: '',
            name: '',
            address: '',
            action: 'any',
            result: false,
            radios: 'any',
            timebefore: null,
            timeafter: null,
            timemenubefore: false,
            timemenuafter: false,
            datebefore: null,
            dateafter: null,
            datetoday: new Date().toISOString().substr(0, 10),
            datemenubefore: false,
            datemenuafter: false
        };
    },
    methods: {
        sendDataBackend() {
            this.$refs.searchform.validate();
            if (!!this.address.length || (!this.name && !this.address)) {
                const path = `http://localhost:5000/api/search`;
                const formData = new FormData();
                formData.append('vehicleNo', this.vehicleNo);
                formData.append('name', this.name);
                formData.append('address', this.address);
                formData.append('action', this.action);
                formData.append('radios', this.radios);
                formData.append('timebefore', this.timebefore);
                formData.append('timeafter', this.timeafter);
                formData.append('timemenubefore', this.timemenubefore);
                formData.append('timemenuafter', this.timemenuafter);
                formData.append('datebefore', this.datebefore);
                formData.append('dateafter', this.dateafter);
                formData.append('datetoday', this.datetoday);
                formData.append('datemenubefore', this.datemenubefore);
                formData.append('datemenuafter', this.datemenuafter);
                axios
                    .post(path, formData)
                    .then(() => {})
                    .catch(error => {
                        console.log(error);
                    });

                this.getdataBackend();
                this.result = true;
            }
        },
        handleResult() {
            this.result = false;
        },
        resetvalidate() {
            this.$refs.searchform.resetValidation();
        },
        getdataBackend() {
            const path = `http://localhost:5000/api/search`;
            axios
                .get(path)
                .then(response => {
                    this.headers = response.data.headers;
                    this.vehicles = response.data.vehicles;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
