<template>
    <div id="searchresult">
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
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        search: '',
        headers: [],
        vehicles: []
    }),
    methods: {
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
        },
        rowClicked(value) {
            this.$router.push({ path: `/details/${value.number}` });
        }
    },
    beforeMount() {
        this.getdataBackend();
    }
};
</script>
