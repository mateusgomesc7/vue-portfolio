<template>
    <v-app-bar
    fixed
    app
    >
        <div class="d-flex align-stretch">
            <v-btn
                text
                large
                class="lowercase-btn align-stretch"
                @click="toggle_page = undefined"
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
            <v-btn>
                <v-icon :left="!$vuetify.breakpoint.mobile">mdi-view-grid-plus</v-icon>
                <div v-if="!$vuetify.breakpoint.mobile">
                    Projects
                </div>
            </v-btn>

            <v-btn>
                <v-icon :left="!$vuetify.breakpoint.mobile">mdi-account</v-icon>
                <div v-if="!$vuetify.breakpoint.mobile">
                    About me
                </div>
            </v-btn>

            <v-btn>
                <v-icon :left="!$vuetify.breakpoint.mobile">mdi-email</v-icon>
                <div v-if="!$vuetify.breakpoint.mobile">
                    Contact
                </div>
            </v-btn>
        </v-btn-toggle>
        <v-spacer></v-spacer>
        <v-select
          v-model="select"
          :items="items"
          item-text="abbr"
          item-value="abbr"
          hide-details
          return-object
          :menu-props="{ bottom: true, offsetY: true }"
          class="mr-6 custom-select"
        ></v-select>
        <SwitchTheme />
    </v-app-bar>
</template>

<script>
import SwitchTheme from './navbar/SwitchTheme.vue';

export default {
    name: 'Navbar',
    components: {SwitchTheme},
    data () {
        return {
            title: 'Mateus',
            subtitle: 'Gomes',
            select: { state: 'English', abbr: 'en' },
            items: [
            { state: 'English', abbr: 'en' },
            { state: 'Português', abbr: 'pt-br' },
            ],
            toggle_page: undefined
        }
    },
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
  