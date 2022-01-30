<template>
    <div class="full-wrap">
        <v-form>
            <v-container fluid>
                <v-row>
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
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            label="Passwrod"
                            hint="At least 8 characters"
                            value=""
                            @click:append="show1 = !show1"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            v-model="rePassword"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min, passwordConfirmationRule]"
                            :type="show1 ? 'text' : 'password'"
                            label="Re Passwrod"
                            hint="At least 8 characters"
                            value=""
                            @click:append="show1 = !show1"
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
                    <v-col cols="12" align="center">
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
        show1: false,
        id: '',
        password: '',
        rePassword: '',
        nick: '',
        sextype: '',
        date: '',
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
    methods: {
        nextMove() {
            this.$router.push('/moreInfo');
        }
    },
        
}
</script>

<style>

</style>