<template>
    <v-card elevation="0">
      <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque quaerat tenetur voluptates
        ipsum iste molestiae rem molestias voluptas, nisi illo reiciendis dolores quas autem soluta possimus
        qui earum minus!
      </v-card-text>
      <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque quaerat tenetur voluptates
        ipsum iste molestiae rem molestias voluptas, nisi illo reiciendis dolores quas autem soluta possimus
        qui earum minus!
      </v-card-text>
      <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque quaerat tenetur voluptates
        ipsum iste molestiae rem molestias voluptas, nisi illo reiciendis dolores quas autem soluta possimus
        qui earum minus!
      </v-card-text>
      <v-card-actions class="px-4 mt-10">
        <v-row no-gutters>
            <v-col class="mb-2">
                <v-btn
                    depressed
                    color="accent"
                    class="black--text"
                    width="130"
                    :small="$vuetify.breakpoint.mobile"
                >
                    <v-icon left class="black--text">
                        mdi-linkedin
                    </v-icon>
                    Linkedin
                </v-btn>
            </v-col>
            <v-col class="mb-2">
                <v-btn
                    depressed
                    color="accent"
                    class="black--text"
                    width="130"
                    :small="$vuetify.breakpoint.mobile"
                >
                    <v-icon left class="black--text">
                        mdi-github
                    </v-icon>
                    GitHub
                </v-btn>
            </v-col>
            <v-col class="mb-2">
                <v-btn
                    text
                    outlined
                    width="130"
                    :small="$vuetify.breakpoint.mobile"
                >
                <v-icon left>
                    mdi-download-circle-outline
                </v-icon>
                    {{ $t('components.presentation.btn_resume') }}
                </v-btn>
            </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'CardAboutMe',
  }
  </script>
  