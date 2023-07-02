<template>
    <v-footer
      app
      absolute
    >
      <v-container
        class="d-flex justify-space-between align-center text-subtitle-2 pa-0"
        style="max-width: 1280px;"
      >
        <span v-if="!$vuetify.breakpoint.xs">
          {{ $t('components.footer.developed') }}
          <nuxt-link :to="localePath('about-me')">
            <a
              class="text-decoration-underline text--primary"
            >
              Mateus Gomes
            </a>
          </nuxt-link>
        </span>
        <span>
          &copy; {{ new Date().getFullYear() }}. 
          <a
            href="https://github.com/mateusgomesc7/vue-portfolio"
            target="_blank"
            class="text-decoration-underline text--primary"
          >
            Vue Portfolio
          </a>
        </span>
        <div>
          <v-btn
            href="https://www.linkedin.com/in/mateus-gomes-c/"
            target="_blank"
            class="mr-2"
            icon
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            href="https://github.com/mateusgomesc7"
            target="_blank"
            icon
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
