<template>
  <v-card elevation="0" max-width="417">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card-title
          class="pl-0 pt-0 primary-text--text font-weight-bold"
          :class="$vuetify.breakpoint.mobile ? 'text-h4' : 'text-h3'"
        >
          {{ $t("components.aboute_me.about.title") }}
        </v-card-title>
      </v-col>
      <v-col cols="12">
        <v-card-subtitle class="text-subtitle-1 accent--text pl-0">
          {{ $t("components.aboute_me.about.subtitle_1") }}
        </v-card-subtitle>
        <v-card-text class="pl-0">
          {{ $t("components.aboute_me.about.text_1") }}
        </v-card-text>
        <v-card-subtitle class="text-subtitle-1 accent--text pl-0">
          {{ $t("components.aboute_me.about.subtitle_2") }}
        </v-card-subtitle>
        <v-card-text class="pl-0">
          {{ $t("components.aboute_me.about.text_2") }}
        </v-card-text>
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
