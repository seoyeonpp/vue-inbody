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
                        <h2>Join</h2>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            :rules="[rules.required, rules.min]"
                            label="ID"
                            value=""
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            v-model="password"
                            :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="passwordShow ? 'text' : 'password'"
                            label="Passwrod"
                            hint="At least 8 characters"
                            value=""
                            @click:append="passwordShow = !passwordShow"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            v-model="rePassword"
                            :append-icon="passwordShow02 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min, passwordConfirmationRule]"
                            :type="passwordShow02 ? 'text' : 'password'"
                            label="Re Passwrod"
                            hint="At least 8 characters"
                            value=""
                            @click:append="passwordShow02 = !passwordShow02"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            :rules="[rules.required]"
                            label="닉네임"
                            value=""
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-radio-group v-model="sextype" row>
                            <v-radio
                                label="남성"
                                value="man"
                            ></v-radio>
                            <v-radio
                                label="여성"
                                value="woman"
                            ></v-radio>
                        </v-radio-group>
                    </v-col>
                    <v-col cols="12">
                       <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                label="Birthday date"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="date"
                                :active-picker.sync="activePicker"
                                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                min="1950-01-01"
                                @change="save"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="12" align="center" class="mt-6">
                        <v-btn color="primary" @click="nextMove">
                            다음
                        </v-btn>
                    </v-col>
                    
                </v-row>

            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "Join",
    data: () => ({
        id: '',
        password: '',
        rePassword: '',
        passwordShow: false,
        passwordShow02: false,
        nick: '',
        sextype: '',
        activePicker: null,
        date: null,
        menu: false,
        rules: {
          required: value => !!value || 'Required.',
          min: value => value.length >= 8 || 'Min 8 characters',
        },
    }),
    computed: {
        passwordConfirmationRule() {
            return () => (this.password === this.rePassword) || 'Password must match'
        }
    },
    watch: {
        menu (val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'))
        },
    },
    methods: {
        save (date) {
            this.$refs.menu.save(date)
        },
        nextMove() {
            this.$router.push('/moreInfo');
        },
        backMove() {
            this.$router.go(-1);
        },
    },
        
}
</script>

<style>

</style>