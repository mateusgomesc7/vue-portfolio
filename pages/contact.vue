<template>
  <v-card
    class="mx-auto"
    max-width="600"
    outlined
  >
    <v-card-text>
      <div class="text-h3 py-4">
        CONTACT
      </div>
      <div class="text-subtitle-1">
        Se você tiver alguma pergunta, oportunidade de trabalho ou simplesmente quiser bater um papo, sinta-se à vontade:
      </div>
    </v-card-text>
    <EmailField />
    <v-card-actions class="pt-4 pb-8">
      <v-btn
          depressed
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
    name: "ContactPage",
    components: { EmailField },
}
</script>