<template>
  <v-row
    no-gutters
    class="h-100"
    justify="center"
    align="center"
    :class="$vuetify.breakpoint.smAndDown ? 'small-spacing' : 'large-spacing'"
  >
    <v-col
      cols="12"
      md="8"
      class="d-flex"
      :class="
        $vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-end pr-4'
      "
    >
      <Presentation />
    </v-col>
    <v-col
      cols="12"
      md="4"
      :class="
        $vuetify.breakpoint.smAndDown
          ? 'd-flex align-center justify-center'
          : 'd-flex flex-column justify-start'
      "
    >
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
  margin: 280px 0;
}
.small-spacing {
  margin: 140px 0;
}
</style>
