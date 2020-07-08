<template>
    <v-form
        ><v-container>
            <v-row>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        label="Legal first name*"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        label="Legal middle name"
                        hint="example of helper text only on focus"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        label="Legal last name*"
                        hint="example of persistent helper text"
                        persistent-hint
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field label="Email"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Phone Number*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Flat Number*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-select
                        :items="[
                            'Resident Vehicle',
                            'Commercial Vehicle',
                            'Visitor Vehicle'
                        ]"
                        label="Type of Vehicle*"
                        required
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-radio-group v-model="action" row>
                        <v-radio label="Entry" value="Entry"></v-radio>
                        <v-radio label="Exit" value="Exit"></v-radio>
                    </v-radio-group>
                </v-col>
            </v-row>
        </v-container>
        <small>*indicates required field</small></v-form
    >
</template>

<script>
export default {
    data: () => ({
        action: 'Entry'
    })
};
</script>
