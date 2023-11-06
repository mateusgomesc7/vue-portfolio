<template>
  <v-row no-gutters>
    <v-col cols="12 pb-2" :class="$vuetify.breakpoint.smAndDown ? 'd-flex justify-center' : ''">
      <h1 class="text-h3">
        {{ $t('pages.about_me.title') }}
      </h1>
    </v-col>
    <v-col
      cols="12"
      class="pb-10 d-flex justify-center"
    >
      <CardAboutMe />
    </v-col>
    <v-col cols="12" class="pb-4">
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