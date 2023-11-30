<template>
    <v-card
      elevation="0"
    >
      <v-card-text class="pt-0">
        <div
          class="primary-text--text text-h3 pb-4"
          :class="$vuetify.breakpoint.smAndDown ? 'd-flex justify-center' : ''"
        >
          {{ $t('pages.contact.title') }}
        </div>
        <div
          class="text-subtitle-1"
          :class="$vuetify.breakpoint.smAndDown ? 'd-flex justify-center' : ''"
        >
          {{ $t('pages.contact.subtitle') }}
        </div>
      </v-card-text>
      <EmailField />
      <v-card-actions
        class="pt-4 pb-8"
        :class="$vuetify.breakpoint.smAndDown ? 'd-flex justify-center' : ''"
      >
        <v-btn
            depressed
            href="https://www.linkedin.com/in/mateus-gomes-c/"
            target="_blank"
            color="accent"
            class="black--text mx-2"
            :small="$vuetify.breakpoint.mobile"
        >
            <v-icon left class="black--text">
                mdi-linkedin
            </v-icon>
            Linkedin
        </v-btn>
        <v-btn
            depressed
            href="https://github.com/mateusgomesc7"
            target="_blank"
            color="accent"
            class="black--text mx-2"
            :small="$vuetify.breakpoint.mobile"
        >
            <v-icon left class="black--text">
                mdi-github
            </v-icon>
            GitHub
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
    
  <script>
  import EmailField from '@/components/contact/EmailField.vue';
  
  export default {
      name: "CardContact",
      components: { EmailField },
  }
  </script>