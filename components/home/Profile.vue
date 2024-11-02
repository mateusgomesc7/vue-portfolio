<template>
  <div class="w-100 position-relative">
    <v-img
      :src="require(`@/assets/images/profile_background.svg`)"
      alt="Desenvolvedor Web"
    />
    <v-btn id="linkedin-profile" class="mx-2" fab elevation="1" color="primary">
      <v-icon> mdi-linkedin </v-icon>
    </v-btn>
    <v-btn id="github-profile" class="mx-2" fab elevation="1" color="primary">
      <v-icon> mdi-github </v-icon>
    </v-btn>
    <v-btn
      id="go-profile"
      class="mx-2"
      fab
      elevation="1"
      color="primary"
      @click="$vuetify.goTo('#projects')"
    >
      <v-icon> mdi-arrow-down </v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.position-relative {
  position: relative;
}

.v-btn {
  position: absolute;
}

#linkedin-profile {
  bottom: 162px;
  left: -4px;
}

#github-profile {
  bottom: 90px;
  left: -4px;
}

#go-profile {
  bottom: 16px;
  left: -4px;
}
</style>
