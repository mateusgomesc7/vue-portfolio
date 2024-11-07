<template>
  <div
    :class="
      $vuetify.breakpoint.smAndDown
        ? 'd-flex align-center justify-center'
        : 'd-flex flex-column justify-start'
    "
  >
    <v-btn
      id="linkedin-profile"
      class="ma-2"
      fab
      elevation="1"
      color="primary"
      href="https://www.linkedin.com/in/mateus-gomes-c/"
      target="_blank"
      :small="$vuetify.breakpoint.smAndDown"
    >
      <v-icon> mdi-linkedin </v-icon>
    </v-btn>
    <v-btn
      id="github-profile"
      class="ma-2"
      fab
      elevation="1"
      color="primary"
      href="https://github.com/mateusgomesc7"
      target="_blank"
      :small="$vuetify.breakpoint.smAndDown"
    >
      <v-icon> mdi-github </v-icon>
    </v-btn>
    <v-btn
      id="go-profile"
      class="ma-2"
      fab
      elevation="1"
      color="primary"
      :small="$vuetify.breakpoint.smAndDown"
      @click="$vuetify.goTo('#projects')"
    >
      <v-icon> mdi-arrow-down </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>
