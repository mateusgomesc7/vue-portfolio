<template>
    <v-app-bar
        app
        elevation="0"
        color="primary"
    >
    <v-container
        class="d-flex justify-space-between align-center pa-0"
        style="max-width: 940px;"
    >
        <nuxt-link
            class="d-flex align-center"
            :to="localePath('/')"
        >
            <Logo />
        </nuxt-link>
        <v-btn-toggle 
            v-model="toggle_page"
            group
        >
            <v-btn :to="localePath('projects')">
                <v-icon :left="!$vuetify.breakpoint.mobile">mdi-view-grid-plus</v-icon>
                <div v-if="!$vuetify.breakpoint.mobile">
                    {{ $t('components.default.navbar.projects') }}
                </div>
            </v-btn>

            <v-btn :to="localePath('about-me')">
                <v-icon :left="!$vuetify.breakpoint.mobile">mdi-account</v-icon>
                <div v-if="!$vuetify.breakpoint.mobile">
                    {{ $t('components.default.navbar.about_me') }}
                </div>
            </v-btn>

            <v-btn :to="localePath('contact')">
                <v-icon :left="!$vuetify.breakpoint.mobile">mdi-email</v-icon>
                <div v-if="!$vuetify.breakpoint.mobile">
                    {{ $t('components.default.navbar.contact') }}
                </div>
            </v-btn>
        </v-btn-toggle>
        <div>
            <div v-if="!$vuetify.breakpoint.mobile" class="d-flex justify-start">
                <ButtonTranslation />
                <SwitchTheme />
            </div>
            <div v-else>
                <v-btn
                    text 
                    @click.stop="() => { setDrawer(true) }"
                    class="custom-button"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </div>
        </div>
    </v-container>
    </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SwitchTheme from '@/components/utils/SwitchTheme.vue';
import ButtonTranslation from '@/components/utils/ButtonTranslation.vue';
import Logo from '@/components/default/Logo.vue';

export default {
    name: 'Navbar',
    components: {Logo, ButtonTranslation, SwitchTheme},
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
.custom-button {
  min-width: 32px;
}
</style>
  