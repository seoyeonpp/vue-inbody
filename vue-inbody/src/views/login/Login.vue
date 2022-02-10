<template>
    <div class="full-wrap">
        <v-form>
            <v-container fluid>
                <v-row>
                    <v-col align="center" class="mb-6">
                        <h2>Login</h2>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            v-model="id"
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
                    <v-col cols="12" align="right" class="button-group">
                        <router-link to="/join">
                            <v-btn>
                                회원가입
                            </v-btn>
                        </router-link>
                        <v-btn color="primary" @click="isLogin({id,password})">
                            로그인
                        </v-btn>
                    </v-col>
                    
                </v-row>

            </v-container>
        </v-form>
    </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'

export default {
    name: "Login",
    data: () => ({
        id: '',
        password: '',
        passwordShow: false,
        rules: {
          required: value => !!value || 'Required.',
          min: value => value.length >= 8 || 'Min 8 characters',
        //   emailMatch: () => (`The email and password you entered don't match`),
        },
    }),
    methods: {
        loginInfo(){
            console.log(this.$store.state.userState)
        },
        ...mapActions(['isLogin'])
    },
        
}
</script>

<style>

</style>