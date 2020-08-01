<template>
    <v-container fill-height fluid style="height:100vh">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                label="Login"
                                name="login"
                                prepend-icon="mdi-account"
                                type="text"
                            ></v-text-field>

                            <v-text-field
                                id="password"
                                label="Password"
                                name="password"
                                prepend-icon="mdi-lock"
                                type="password"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({}),
    methods: {
        login: function() {
            this.$store
                .dispatch('login')
                .then(() => this.$router.push('/'))
                .catch(err => console.log(err));
        }
    },
    beforeMount() {
        this.$root.$emit('toggleNavDrawer', 'close');
    },
    beforeDestroy() {
        this.$root.$emit('toggleNavDrawer', 'open');
    }
};
</script>
