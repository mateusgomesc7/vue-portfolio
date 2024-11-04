<template>
  <div>
    <v-row no-gutters class="w-100 my-16">
      <v-col cols="12">
        <Clients />
      </v-col>
    </v-row>
    <v-row
      no-gutters
      class="w-100 pa-16 accent rounded-xl rounded-b-0 elevation-4"
    >
      <v-col cols="12" class="d-flex flex-column align-center justify-center">
        <v-row class="mb-8">
          <v-col class="d-flex align-center justify-center">
            <div class="text-h3 font-weight-bold">Contacts</div>
          </v-col>
        </v-row>
        <v-row class="w-100 font-weight-bold">
          <v-col cols="4" class="d-flex justify-center">
            Email: mateusgomes.dev@gmail.com
          </v-col>
          <v-col cols="4" class="d-flex justify-center"> Alguma coisa </v-col>
          <v-col cols="4" class="d-flex justify-center"> Outra coisa </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Clients from "@/components/contact/Clients.vue";

export default {
  name: "Contacts",
  components: { Clients },
};
</script>

<style scoped>
.spacing {
  padding: 140px 0 !important;
}
</style>
