<template>
    <v-navigation-drawer
        :value="drawer"
        app
        bottom
        temporary
        right
        @input="(val) => { setDrawer(val) }"
    >
    <v-list>
        <v-list-item class="d-flex justify-center pa-0">
            <ButtonTranslation />
        </v-list-item>

        <v-list-item class="d-flex justify-center pa-0">
            <SwitchTheme />
        </v-list-item>
    </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ButtonTranslation from '@/components/utils/ButtonTranslation.vue';
import SwitchTheme from '@/components/utils/SwitchTheme.vue';

export default {
    name: 'NavigationDrawer',
    components: {ButtonTranslation, SwitchTheme},
    computed: {
        ...mapState('navigation_drawer', {
            drawer: (state) => state.drawer
        })
    },
    methods: {
        ...mapMutations('navigation_drawer', ['setDrawer']),
    }
}
</script>