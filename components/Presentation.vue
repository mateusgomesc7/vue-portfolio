<template>
  <v-card class="py-4" elevation="0">
    <v-card-title class="text-md-h3 text-h4">
      {{ $t('components.presentation.title') }}
      <br />
      Mateus Gomes
    </v-card-title>
    <v-card-subtitle class="text-md-h6 text-subtitle">
      {{ $t('components.presentation.subtitle') }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        text
        outlined
        :to="localePath('about-me')"
      >
        {{ $t('components.presentation.btn_about_me') }}
      </v-btn>
      <v-btn
        color="success"
        depressed
      >
        <v-icon left>
          mdi-download-circle-outline
        </v-icon>
        {{ $t('components.presentation.btn_resume') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Presentation',
}
</script>
