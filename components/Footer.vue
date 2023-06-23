<template>
    <v-footer
      app
      absolute
      class="d-flex justify-space-between text-subtitle-2"
    >
        <span v-if="!$vuetify.breakpoint.xs">
          Developed by 
          <a
            href="/about-me"
            class="text-decoration-underline text--primary"
          >
            Mateus Gomes
          </a>
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
            small
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            href="https://github.com/mateusgomesc7"
            target="_blank"
            icon
            small
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </div>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
