<template>
  <v-card elevation="0">
    <v-card-title class="text-h3 primary-text--text">
      {{ $t('components.home.presentation.title') }}
      <br />
      Mateus Gomes
    </v-card-title>
    <v-card-subtitle class="text-h6 text-subtitle">
      {{ $t('components.home.presentation.subtitle') }}
    </v-card-subtitle>
    <v-card-actions class="px-4">
      <v-btn
        depressed
        color="accent"
        class="black--text"
        :small="$vuetify.breakpoint.mobile"
        :to="localePath('about-me')"
      >
        {{ $t('components.home.presentation.btn_about_me') }}
      </v-btn>
      <v-btn
        text
        outlined
        :small="$vuetify.breakpoint.mobile"
      >
        <v-icon left>
          mdi-download-circle-outline
        </v-icon>
        {{ $t('components.home.presentation.btn_resume') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Presentation',
}
</script>
