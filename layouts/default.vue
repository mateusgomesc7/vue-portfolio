<template>
  <v-app dark>
    <NavigationDrawer />
    <Navbar />

    <v-main>
      <v-container
        :fill-height="!$vuetify.breakpoint.mobile"
        class="pt-4"
      >
        <Nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: { Navbar, NavigationDrawer, Footer },
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
