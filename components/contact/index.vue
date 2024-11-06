<template>
  <div :class="$vuetify.breakpoint.mobile ? 'small-margin' : 'large-margin'">
    <v-row no-gutters class="w-100">
      <v-col cols="12">
        <Clients />
      </v-col>
    </v-row>
    <v-row
      no-gutters
      class="w-100 px-16 accent rounded-xl rounded-b-0 elevation-4"
      :class="
        $vuetify.breakpoint.mobile
          ? 'small-margin small-padding'
          : 'large-margin large-padding'
      "
    >
      <v-col
        cols="12"
        class="d-flex flex-column align-center justify-center highlight-text--text"
      >
        <v-row :class="$vuetify.breakpoint.mobile ? 'mb-4' : 'mb-8'">
          <v-col class="d-flex align-center justify-center">
            <div
              class="font-weight-bold"
              :class="$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h3'"
            >
              {{ $t("components.contact.title") }}
            </div>
          </v-col>
        </v-row>
        <v-row class="w-100 font-weight-bold">
          <v-col
            cols="12"
            sm="6"
            class="d-flex flex-column justify-center align-center"
          >
            <v-icon class="mb-2 highlight-text--text"> mdi-email </v-icon>
            <EmailField />
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="d-flex flex-column justify-center align-center"
          >
            <v-icon class="mb-2 highlight-text--text"> mdi-map-marker </v-icon>
            <div>{{ $t("components.contact.location") }}</div>
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
.large-margin {
  margin-top: 130px;
}
.small-margin {
  margin-top: 60px;
}
.large-padding {
  padding: 100px 0;
}
.small-padding {
  padding: 60px 0;
}
</style>
