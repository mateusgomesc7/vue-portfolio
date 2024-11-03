<template>
  <v-app dark>
    <NavigationDrawer />
    <Navbar />

    <v-main>
      <Nuxt />
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
