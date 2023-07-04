<template>
    <v-row no-gutters class="h-100" align="center">
      <v-col cols="12">
        <v-row justify="center" align="center">
          <v-col
            class="d-flex"
            :class="$vuetify.breakpoint.mdAndDown ? 'justify-center' : 'justify-end'"
            cols="12"
            md="5"
          >
            About me
          </v-col>
          <v-col
            class="webgl-col d-flex justify-center"
            cols="12"
            md="7"
            style="height: 500px;"
            :class="{'mobile-height': $vuetify.breakpoint.mobile}"
          >
            3d model
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col>
            Timelines
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </template>
  
  <script>
  import Presentation from '@/components/Presentation.vue';
  
  export default {
      name: "AboutMePage",
      components: { Presentation }
  }
  </script>