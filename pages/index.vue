<template>
  <v-row no-gutters class="h-100" justify="center" align="center">
    <v-col
      class="d-flex"
      :class="$vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-end'"
      cols="12"
      md="5"
    >
      <Presentation />
    </v-col>
    <v-col
      class="webgl-col d-flex justify-center"
      cols="12"
      md="7"
      style="height: 500px;"
      :class="{'mobile-height': $vuetify.breakpoint.mobile}"
    >
      <Experience />
    </v-col>
  </v-row>
</template>

<script>
import Presentation from '@/components/Presentation.vue';
import Experience from '@/components/Experience.vue';

export default {
    name: "IndexPage",
    components: { Presentation, Experience }
}
</script>

<style scoped>
.mobile-height {
  height: 300px !important;
}
</style>
