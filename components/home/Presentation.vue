<template>
  <v-card elevation="0" max-width="417">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card-title
          class="primary-text--text font-weight-bold"
          :class="$vuetify.breakpoint.mobile ? 'text-h4 pl-8' : 'text-h2 pl-0'"
        >
          {{ $t("components.home.presentation.title") }}
          <br />
          Mateus Gomes
        </v-card-title>
      </v-col>
      <v-col cols="12" class="d-flex flex-row-reverse">
        <v-card-subtitle
          class="text-subtitle-1 pl-0 text-right"
          v-html="
            $t('components.home.presentation.subtitle', {
              years: new Date().getFullYear() - 2020,
            })
          "
          :class="$vuetify.breakpoint.mobile ? 'pr-8 mb-6' : 'pr-0'"
        >
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Presentation",
};
</script>

<style scoped>
.v-card__subtitle {
  max-width: 270px;
}
</style>
