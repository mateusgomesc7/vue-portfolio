<template>
    <v-btn
        text
        :block="$vuetify.breakpoint.mobile ? true : false"
        @click="changeTheme"
        class="pa-0"
    >
        <v-icon class="rotate-icon">{{ iconTheme }}</v-icon>
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
    watch: {
        '$vuetify.theme.dark': {
            handler: function (val, oldVal) {
                if (val !== oldVal) {
                    this.changeIcon()
                }
            },
            deep: true
        }
    },
    mounted() {
        this.changeIcon()
    },
    methods: {
        changeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
        changeIcon() {
            if (this.$vuetify.theme.dark)
                this.iconTheme = 'mdi-weather-sunny'
            else
                this.iconTheme = 'mdi-moon-waning-crescent'
        }
    }
}
</script>

<style scoped>
.rotate-icon {
    transform: rotate(-30deg);
}
</style>
  