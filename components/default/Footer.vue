<template>
    <v-footer
      app
      absolute
      color="primary"
    >
      <v-container
        class="d-flex justify-space-between align-center text-subtitle-2 pa-0 primary-text--text"
        style="max-width: 940px;"
      >
        <span v-if="!$vuetify.breakpoint.xs">
          {{ $t('components.default.footer.developed') }}
          <nuxt-link :to="localePath('about-me')">
            <a
              class="text-decoration-underline primary-text--text"
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
            class="text-decoration-underline primary-text--text"
          >
            Vue Portfolio
          </a>
        </span>
        <div>
          <v-btn
            href="https://www.linkedin.com/in/mateus-gomes-c/"
            target="_blank"
            class="mx-2"
            icon
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            href="https://github.com/mateusgomesc7"
            target="_blank"
            class="mx-2"
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
