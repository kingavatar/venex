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
        >
            <v-col>
                <v-row align="center" class="ma-3 pa-3">
                    <v-spacer></v-spacer>
                    <p>Vehicle Number</p>
                    <v-text-field
                        label="Solo"
                        placeholder="Vehicle Number"
                        solo
                        prepend-inner-icon="mdi-car-side"
                        class="mx-3 px-6 rounded-tl-xl rounded-br-xl"
                    ></v-text-field>
                    <v-btn outlined color="primary" class="mb-6">search</v-btn>
                    <v-spacer></v-spacer>
                </v-row>
                <v-divider class="mx-3" />
                <v-row align="start" class="mx-3 mt-3 pa-3 pt-6">
                    <h2>Advanced Options</h2>
                </v-row>
                <v-row align="center" class="mx-3 px-3 mt-6 pt-3">
                    <p>For these Owners</p>
                    <v-spacer></v-spacer>

                    <v-text-field
                        label="Solo"
                        placeholder="Name"
                        prepend-inner-icon="mdi-account"
                        solo
                        class="mx-6 px-3  rounded-tl-xl rounded-br-xl"
                    ></v-text-field>
                    <v-spacer></v-spacer>

                    <v-text-field
                        label="Solo"
                        placeholder="Address"
                        prepend-inner-icon="mdi-map-marker"
                        solo
                        class="mx-6 px-3 rounded-tl-xl rounded-br-xl"
                    ></v-text-field>
                    <v-spacer></v-spacer>
                </v-row>
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
                <v-row align="center" justify="center" class="mt-6 pt-3">
                    <v-radio-group v-model="radios" row>
                        <v-radio label="Resident" value="resident"></v-radio>
                        <v-radio
                            label="Commercial"
                            value="commercial"
                        ></v-radio>
                        <v-radio label="Visitor" value="visitor"></v-radio>
                        <v-radio label="Any" value="any"></v-radio>
                    </v-radio-group>
                </v-row>
            </v-col>
        </v-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
    }
};
</script>
