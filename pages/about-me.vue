<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      class="pb-10 d-flex justify-center"
    >
      <CardAboutMe />
    </v-col>
    <v-col cols="12">
      <Timeline />
    </v-col>
  </v-row>
</template>

<script>
import Timeline from '@/components/about-me/Timeline.vue';
import CardAboutMe from '@/components/about-me/CardAboutMe.vue';

export default {
    name: "AboutMePage",
    components: { CardAboutMe, Timeline }
}
</script>

<style scoped>
.full-height {
  height: 75vh;
}
</style>