<template>
    <div class="full-wrap">
        <v-form>
            <v-container fluid>
                <v-row>
                    <v-col>
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
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            label="Passwrod"
                            hint="At least 8 characters"
                            value=""
                            @click:append="show1 = !show1"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" align="right" class="button-group">
                        <router-link to="/join">
                            <v-btn>
                                회원가입
                            </v-btn>
                        </router-link>
                        <v-btn color="primary">
                            로그인
                        </v-btn>
                    </v-col>
                    
                </v-row>

            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data: () => ({
        id: '',
        password: '',
        show1: false,
        rules: {
          required: value => !!value || 'Required.',
          min: value => value.length >= 8 || 'Min 8 characters',
        //   emailMatch: () => (`The email and password you entered don't match`),
        },
    }),

        
}
</script>

<style>

</style>