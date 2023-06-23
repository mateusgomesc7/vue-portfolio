<template>
    <v-app-bar
        app
        hide-on-scroll
    >
        <nuxt-link
            class="d-flex align-stretch text-decoration-none"
            :to="localePath('/')"
            @click.stop="toggle_page = undefined"
        >
            <v-icon v-if="$vuetify.breakpoint.mobile" class="pa-3">mdi-home</v-icon>
            <a v-else class="text-subtitle-2 text--primary">
                {{ title }}
                <br>
                {{ subtitle }}
            </a>
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-btn-toggle 
            v-model="toggle_page"
            group
        >
            <v-btn :to="localePath('projects')">
                <v-icon :left="!$vuetify.breakpoint.mobile">mdi-view-grid-plus</v-icon>
                <div v-if="!$vuetify.breakpoint.mobile">
                    {{ $t('components.navbar.projects') }}
                </div>
            </v-btn>

            <v-btn :to="localePath('about-me')">
                <v-icon :left="!$vuetify.breakpoint.mobile">mdi-account</v-icon>
                <div v-if="!$vuetify.breakpoint.mobile">
                    {{ $t('components.navbar.about_me') }}
                </div>
            </v-btn>

            <v-btn :to="localePath('contact')">
                <v-icon :left="!$vuetify.breakpoint.mobile">mdi-email</v-icon>
                <div v-if="!$vuetify.breakpoint.mobile">
                    {{ $t('components.navbar.contact') }}
                </div>
            </v-btn>
        </v-btn-toggle>
        <v-spacer></v-spacer>
        <div>
            <div v-if="!$vuetify.breakpoint.mobile" class="d-flex justify-start">
                <ButtonTranslation />
                <SwitchTheme />
            </div>
            <div v-else>
                <v-btn
                    text 
                    @click.stop="() => { setDrawer(true) }"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </div>
        </div>
    </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SwitchTheme from './utils/SwitchTheme.vue';
import ButtonTranslation from './utils/ButtonTranslation.vue';

export default {
    name: 'Navbar',
    components: {ButtonTranslation, SwitchTheme},
    data () {
        return {
            title: 'Mateus',
            subtitle: 'Gomes',
            toggle_page: undefined,
        }
    },
    computed: {
        ...mapState('navigation_drawer', {
            drawer: (state) => state.drawer
        })
    },
    methods: {
        ...mapMutations('navigation_drawer', ['setDrawer'])
    }
}
</script>

<style scoped>
.custom-select {
  max-width: 66px;
}
</style>
  