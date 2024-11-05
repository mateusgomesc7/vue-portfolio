<template>
  <v-card
    width="100%"
    elevation="0"
    class="d-flex flex-column align-center primary-90"
  >
    <v-row no-gutters class="mb-2">
      <v-col class="d-flex justify-center align-end">
        <div class="text-h4 font-weight-bold">Clients</div>
      </v-col>
    </v-row>
    <v-row class="w-100 font-weight-bold mt-0">
      <v-col cols="12" class="d-flex flex-wrap justify-space-around">
        <div
          v-for="(client, i) in clients"
          :key="i"
          class="content-client px-6 py-4"
        >
          <v-img
            :src="requireImage(client.icon)"
            :max-width="client.maxWidth"
          />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Clients",
  data: () => {
    return {
      clients: [
        { icon: "foxconn.svg", maxWidth: "150px" },
        { icon: "assert.png", maxWidth: "70px" },
        { icon: "landis.svg", maxWidth: "140px" },
      ],
    };
  },
  methods: {
    requireImage(icon) {
      return require(`@/assets/images/clients/${icon}`);
    },
  },
};
</script>

<style scoped>
.v-card__title {
  max-height: 30px;
}

.content-client {
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  filter: grayscale(100%);
  transition: transform 0.2s ease;
}
.content-client:hover {
  filter: grayscale(0%);
}
</style>
