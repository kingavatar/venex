<template>
    <div id="searchresult">
        <v-col cols="12" class="px-9">
            <v-row class="mb-3 pb-3">
                <v-btn icon large @click="goback"
                    ><v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-row>
            <v-card shaped height="100%" width="100%" elevation="3">
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
                            :text-color="getTextColor(item.action)"
                            >{{ item.action }}</v-chip
                        >
                    </template>
                </v-data-table>
            </v-card>
        </v-col>
    </div>
</template>

<script>
export default {
    props: { headers: Array, vehicles: Array },
    data: () => ({
        search: ''
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

        goback() {
            this.$emit('goBack');
        }
    }
};
</script>
