<template>
    <div class="full-wrap">

        <div class="input-box">
            <v-text-field
                label="Login"
                :rules="rules"
                hide-details="auto"
                ></v-text-field>
        </div>
        <div class="input-box">
            <v-text-field
                label="Login"
                :rules="rules"
                hide-details="auto"
                ></v-text-field>
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