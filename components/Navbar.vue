<template>
    <v-app-bar
        app
        hide-on-scroll
    >
        <div class="d-flex align-stretch">
            <v-btn
                text
                large
                class="lowercase-btn align-stretch"
                to="/"
                @click.stop="toggle_page = undefined"
            >
                <template #default>
                    <div v-if="$vuetify.breakpoint.mobile">
                        <v-icon>mdi-home</v-icon>
                    </div>
                    <div v-else>
                        {{ title }}
                        <br>
                        {{ subtitle }}
                    </div>
                </template>
            </v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-btn-toggle 
            v-model="toggle_page"
            group
        >
            <v-btn to="projects">
                <v-icon :left="!$vuetify.breakpoint.mobile">mdi-view-grid-plus</v-icon>
                <div v-if="!$vuetify.breakpoint.mobile">
                    Projects
                </div>
            </v-btn>

            <v-btn to="about-me">
                <v-icon :left="!$vuetify.breakpoint.mobile">mdi-account</v-icon>
                <div v-if="!$vuetify.breakpoint.mobile">
                    About me
                </div>
            </v-btn>

            <v-btn to="contact">
                <v-icon :left="!$vuetify.breakpoint.mobile">mdi-email</v-icon>
                <div v-if="!$vuetify.breakpoint.mobile">
                    Contact
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
.lowercase-btn {
  text-transform: none;
}
</style>
  