<template>
  <v-row no-gutters justify="center" align="center">
    <v-col class="d-flex justify-center" cols="12" md="5">
        <Presentation />
    </v-col>
    <v-col cols="12" md="7">
      <v-card class="py-4 d-flex justify-center" elevation="0">
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Presentation from '@/components/Presentation.vue';

export default {
    name: "IndexPage",
    components: { Presentation }
}
</script>
