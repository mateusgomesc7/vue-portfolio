<template>
  <v-app dark>
    <Navbar />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    <NavigationDrawer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NavigationDrawer from '@/components/NavigationDrawer.vue';

export default {
  name: 'DefaultLayout',
  components: { Navbar, NavigationDrawer },
  data () {
    return {
      title: 'Mateus Gomes'
    }
  }
}
</script>
