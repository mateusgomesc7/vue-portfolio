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
      <v-list-item-group
        :value="$i18n.locale"
        @change="changeLocale"
      >
        <v-list-item
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :value="locale.code"
        >
            <v-list-item-title>{{ locale.name }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'ButtonTranslation',

    computed: {
      availableLocales () {
        console.log(this.$i18n.locales)
        console.log(this.$i18n.locale)
        return this.$i18n.locales
      }
    },
    methods: {
      changeLocale (val) {
        this.$i18n.setLocale(val)
      }
    }
  }
</script>
