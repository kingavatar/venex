<template>
    <div id="details">
        <v-col>
            <v-row align="center">
                <v-btn icon large @click="goback"
                    ><v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h1>Account Page</h1>
                <v-spacer></v-spacer>
            </v-row>
        </v-col>
    </div>
</template>

<script>
export default {
    methods: {
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
    }
};
</script>
