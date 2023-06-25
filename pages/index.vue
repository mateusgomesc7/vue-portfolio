<template>
  <v-row no-gutters justify="center" align="center">
    <v-col class="d-flex justify-center" cols="12" md="5">
      <Presentation />
    </v-col>
    <Experience />
  </v-row>
</template>

<script>
import Presentation from '@/components/Presentation.vue';
import Experience from '@/components/Experience.vue';

export default {
    name: "IndexPage",
    components: { Presentation, Experience }
}
</script>
