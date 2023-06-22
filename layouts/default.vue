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
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'DefaultLayout',
  components: { Navbar },
  data () {
    return {
      title: 'Mateus Gomes'
    }
  }
}
</script>
