<template>
  <v-card elevation="0" max-width="417">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card-title class="text-h2 pl-0 primary-text--text font-weight-bold">
          About me
        </v-card-title>
      </v-col>
      <v-col cols="12">
        <v-card-subtitle class="text-subtitle-1 accent--text pl-0">
          Alguma coisa sobre mim
        </v-card-subtitle>
        <v-card-text class="pl-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          libero dicta repudiandae autem odio qui, dolor iure a vero est. Ipsa
          vitae itaque architecto ullam molestias corporis sit, reprehenderit
          vero.
        </v-card-text>
        <v-card-subtitle class="text-subtitle-1 accent--text pl-0">
          Alguma coisa sobre mim
        </v-card-subtitle>
        <v-card-text class="pl-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          libero dicta repudiandae autem odio qui, dolor iure a vero est. Ipsa
          vitae itaque architecto ullam molestias corporis sit, reprehenderit
          vero.
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
