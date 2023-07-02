<template>
  <v-app dark>
    <NavigationDrawer />
    <Navbar />

    <v-main>
      <v-container
        :fill-height="!$vuetify.breakpoint.mobile"
        class="pt-4 px-0"
      >
        <Nuxt />
      </v-container>
      <ButtonScrollToTop />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import Footer from '@/components/Footer.vue';
import ButtonScrollToTop from '@/components/ButtonScrollToTop.vue';

export default {
  name: 'DefaultLayout',
  components: { Navbar, NavigationDrawer, Footer, ButtonScrollToTop },
}
</script>

<style scoped>
.container {
  max-width: 940px;
}
.fill-height {
  align-items: start;
}
</style>
