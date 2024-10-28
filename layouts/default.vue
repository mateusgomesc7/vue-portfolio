<template>
  <v-app dark>
    <NavigationDrawer />
    <Navbar />

    <v-main>
      <v-container :fill-height="!$vuetify.breakpoint.mobile" class="px-0">
        <Nuxt />
      </v-container>
      <ButtonScrollToTop />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/default/Navbar.vue";
import NavigationDrawer from "@/components/default/NavigationDrawer.vue";
import Footer from "@/components/default/Footer.vue";
import ButtonScrollToTop from "@/components/default/ButtonScrollToTop.vue";

export default {
  name: "DefaultLayout",
  components: { Navbar, NavigationDrawer, Footer, ButtonScrollToTop },
};
</script>

<style scoped>
.container {
  max-width: 940px;
}
.fill-height {
  align-items: start;
}
</style>
