<template>
  <v-menu
    open-on-hover
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          text
          :block="$vuetify.breakpoint.mobile ? true : false"
          v-bind="attrs"
          v-on="on"
          class="pa-0"
      >
          <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>

    <v-list max-height="300">
        <v-list-item
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            link
        >
            <v-list-item-title>{{ locale.name }}</v-list-item-title>
        </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'ButtonTranslation',
    data: () => ({
      items: [
        { title: 'English' },
        { title: 'Português' },
      ],
    }),
    computed: {
      availableLocales () {
        return this.$i18n.locales
      }
    }
  }
</script>
