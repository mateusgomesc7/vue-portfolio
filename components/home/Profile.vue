<template>
  <div
    class="position-relative"
    :class="
      $vuetify.breakpoint.smAndDown
        ? $vuetify.breakpoint.mobile
          ? 'small-size'
          : 'medium-size'
        : 'large-size'
    "
  >
    <v-img
      :src="require(`@/assets/images/profile_background.svg`)"
      alt="Desenvolvedor Web"
      :height="$vuetify.breakpoint.smAndDown ? 438 : undefined"
      :contain="$vuetify.breakpoint.smAndDown"
    />
    <v-btn
      id="linkedin-profile"
      class="mx-2"
      fab
      elevation="1"
      color="primary"
      :small="$vuetify.breakpoint.smAndDown"
    >
      <v-icon> mdi-linkedin </v-icon>
    </v-btn>
    <v-btn
      id="github-profile"
      class="mx-2"
      fab
      elevation="1"
      color="primary"
      :small="$vuetify.breakpoint.smAndDown"
    >
      <v-icon> mdi-github </v-icon>
    </v-btn>
    <v-btn
      id="go-profile"
      class="mx-2"
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

<style scoped>
.position-relative {
  position: relative;
}

.large-size {
  max-width: 470px;
}

.medium-size {
  max-width: 413px;
}

.small-size {
  max-width: 310px;
}

.v-btn {
  position: absolute;
}

#linkedin-profile {
  bottom: 162px;
  left: -4px;
}
#linkedin-profile.v-size--small {
  bottom: 138px;
  left: 14px;
}
.small-size #linkedin-profile.v-size--small {
  bottom: 143px;
  left: -8px;
}

#github-profile {
  bottom: 90px;
  left: -4px;
}
#github-profile.v-size--small {
  bottom: 82px;
  left: 14px;
}
.small-size #github-profile.v-size--small {
  bottom: 91px;
  left: -8px;
}

#go-profile {
  bottom: 16px;
  left: -4px;
}
#go-profile.v-size--small {
  bottom: 26px;
  left: 14px;
}
.small-size #go-profile.v-size--small {
  bottom: 41px;
  left: -8px;
}
</style>
