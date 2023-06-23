<template>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="logo py-4 d-flex justify-center">
            <h1>{{ $t('pages.projects.title') }}</h1>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  import Presentation from '@/components/Presentation.vue';
  
  export default {
      name: "ProjectsPage",
      components: { Presentation }
  }
  </script>