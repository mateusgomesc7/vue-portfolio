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
        <v-row :class="$vuetify.breakpoint.mobile ? 'mb-4' : 'mb-8'">
          <v-col class="d-flex align-center justify-center">
            <div
              class="font-weight-bold"
              :class="$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h3'"
            >
              Contacts
            </div>
          </v-col>
        </v-row>
        <v-row class="w-100 font-weight-bold">
          <v-col
            cols="12"
            sm="6"
            class="d-flex flex-column justify-center align-center"
          >
            <v-icon class="mb-2"> mdi-email </v-icon>
            <EmailField />
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="d-flex flex-column justify-center align-center"
          >
            <v-icon class="mb-2"> mdi-map-marker </v-icon>
            <div>Paraíba, Brazil</div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Clients from "@/components/contact/Clients.vue";
import EmailField from "@/components/contact/EmailField.vue";

export default {
  name: "Contacts",
  components: { Clients, EmailField },
};
</script>

<style scoped>
.spacing {
  padding: 140px 0 !important;
}
</style>
