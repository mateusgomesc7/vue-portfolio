<template>
  <v-row no-gutters justify="center" align="center">
    <v-col class="d-flex justify-center" cols="12" md="5">
      <Presentation />
    </v-col>
    <v-col class="d-flex justify-center" cols="12" md="7">
      <Cubo />
    </v-col>
  </v-row>
</template>

<script>
import Presentation from '@/components/Presentation.vue';
import Cubo from '@/components/Cubo.vue';

export default {
    name: "IndexPage",
    components: { Presentation, Cubo }
}
</script>
