<template>
  <v-row no-gutters class="h-100" align="center">
    <v-col cols="12" md="6">
      <CardContact />
    </v-col>
    <v-col
      cols="12"
      md="6"
      style="height: 500px;"
      :class="{'mobile-height': $vuetify.breakpoint.mobile}"
    >
      <ExperienceCoffee />
    </v-col>
  </v-row>
</template>
  
<script>
import CardContact from '@/components/contact/CardContact.vue';
import ExperienceCoffee from '@/components/contact/ExperienceCoffe.vue';

export default {
    name: "ContactPage",
    components: { CardContact, ExperienceCoffee },
}
</script>

<style scoped>
.mobile-height {
  height: 300px !important;
}
</style>