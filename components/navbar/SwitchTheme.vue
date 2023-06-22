<template>
    <v-btn
        icon
        @click="changeTheme"
    >
        <v-icon>{{ iconTheme }}</v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'SwitchTheme',
    data () {
        return {
            iconTheme: 'mdi-moon-waning-crescent'
        }
    },
    methods: {
        changeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            if (this.$vuetify.theme.dark)
                this.iconTheme = 'mdi-weather-sunny'
            else
                this.iconTheme = 'mdi-moon-waning-crescent'
        }
    }
}
</script>
  