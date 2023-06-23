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
      >
          <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>

    <v-list max-height="300">
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
            link
        >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
  }
</script>
