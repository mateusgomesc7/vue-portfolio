<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      :class="$vuetify.breakpoint.smAndDown ? 'pb-10' : 'py-10'"
    >
      <v-row no-gutters justify="center" align="center">
        <v-col
          class="d-flex"
          :class="$vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-end'"
          cols="12"
          md="6"
        >
          <CardAboutMe />
        </v-col>
        <v-col
          class="d-flex justify-center"
          cols="12"
          md="6"
          :class="{'mobile-height': $vuetify.breakpoint.mobile}"
        >
          <ExperienceCoffee />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <Timeline />
    </v-col>
  </v-row>
</template>

<script>
import Timeline from '@/components/about-me/Timeline.vue';
import CardAboutMe from '@/components/about-me/CardAboutMe.vue';
import ExperienceCoffee from '@/components/about-me/ExperienceCoffe.vue';

export default {
    name: "AboutMePage",
    components: { CardAboutMe, ExperienceCoffee, Timeline }
}
</script>

<style scoped>
.full-height {
  height: 75vh;
}
</style>