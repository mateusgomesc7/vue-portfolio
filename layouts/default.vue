<template>
  <v-app dark>
    <NavigationDrawer />
    <Navbar />
    
    <v-main>
      <v-container class="fill-height">
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
