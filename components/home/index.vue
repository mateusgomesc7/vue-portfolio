<template>
  <v-row
    no-gutters
    class="h-100"
    justify="center"
    align="center"
    :class="$vuetify.breakpoint.smAndDown ? 'small-spacing' : 'large-spacing'"
  >
    <v-col cols="12" md="6">
      <Presentation />
    </v-col>
    <v-col class="d-flex justify-center" cols="12" md="6">
      <Profile />
    </v-col>
  </v-row>
</template>

<script>
import Presentation from "@/components/home/Presentation.vue";
import Profile from "@/components/home/Profile.vue";

export default {
  name: "Index Home",
  components: {
    Presentation,
    Profile,
  },
};
</script>

<style scoped>
.large-spacing {
  margin: 140px 0;
}
.small-spacing {
  margin: 60px 0;
}
</style>
