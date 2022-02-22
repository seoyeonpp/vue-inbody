<template>
    <div class="full-wrap">
        <v-form>
            <v-container fluid>
                <v-row>
                    <v-btn
                        icon
                        light
                        @click="backMove()"
                        class="btnBack"
                    >
                        <v-icon color="grey darken-2">
                            mdi-arrow-left
                        </v-icon>
                    </v-btn>
                    <v-col align="center" class="mb-6">
                        <h2>인바디 데이터를 입력해주세요.</h2>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            :rules="[rules.required]"
                            label="체중"
                            value=""
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            :rules="[rules.required]"
                            label="신장"
                            value=""
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            :rules="[rules.required]"
                            label="체지방률"
                            value=""
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            :rules="[rules.required]"
                            label="근육량"
                            value=""
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            label="내장지방"
                            value=""
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" align="center" class="mt-6">
                        <router-link to="/dashboard">
                            <v-btn color="primary">
                                입력완료
                            </v-btn>
                        </router-link>
                    </v-col>

                </v-row>

            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "MoreInfo",
    data: () => ({
        val01: '',
        val02: '',
        val03: '',
        val04: '',
        val05: '',
        rules: {
          required: value => !!value || 'Required.',
          min: value => value.length >= 8 || 'Min 8 characters',
        },
    }),
    computed: {
    },
    methods: {
        backMove() {
            this.$router.go(-1);
        },
    },

}
</script>

<style>

</style>