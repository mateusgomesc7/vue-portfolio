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
    <v-card-text class="d-flex align-center">
      <div
        class="mr-2 text-button"
        :class="$vuetify.breakpoint.mobile ? 'text-overline' : 'text-button'"
      >
        mateusgomes.dev@gmail.com
      </div>
      <v-btn
        text
        outlined
        small
      >
        <v-icon
          :left="$vuetify.breakpoint.mobile ? false : true"
          :small="$vuetify.breakpoint.mobile ? true : false"
        >
          mdi-content-copy
        </v-icon>
        {{ $vuetify.breakpoint.mobile ? '' : 'copy' }}
      </v-btn>
    </v-card-text>
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

export default {
    name: "ContactPage",
}
</script>