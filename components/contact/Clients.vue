<template>
  <v-card
    width="100%"
    height="300px"
    elevation="0"
    class="d-flex flex-column align-center"
  >
    <v-row no-gutters>
      <v-col class="d-flex justify-center align-end">
        <div class="text-h4 font-weight-bold">Clients</div>
      </v-col>
    </v-row>
    <v-row class="w-100 font-weight-bold mt-0 mb-6">
      <v-col cols="12" class="d-flex flex-wrap justify-space-around">
        <div
          v-for="(client, i) in clients"
          :key="i"
          class="content-client px-6"
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
.v-card {
  background-color: #363636 !important;
}
.v-card__title {
  max-height: 30px;
}

.content-client {
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(100%);
  transition: transform 0.2s ease;
}
.content-client:hover {
  filter: grayscale(0%);
}
</style>
