<template>
    <div class="full-wrap">
        <div class="inner-box">
            <div class="input-box">
                <v-text-field
                    label="Login"
                    :rules="rules"
                    hide-details="auto"
                    ></v-text-field>
            </div>
            <div class="input-box">
                <v-text-field
                    label="Password"
                    :rules="rules"
                    hide-details="auto"
                    ></v-text-field>
            </div>
            <div class="button-box">
                <router-link to="/">회원가입</router-link>
                <router-link to="/">로그인</router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data: () => ({
        rules: [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ],
    }),

        
}
</script>

<style>

</style>