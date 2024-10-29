<template>
  <v-card
    hover
    min-height="250"
    max-width="820"
    class="d-flex align-center px-8 mb-8 rounded-xl"
  >
    <div cols="5" class="custom-card-image">
      <v-img
        class="rounded-xl"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        contain
      ></v-img>
    </div>

    <div
      class="d-flex flex-column align-self-start align-self-stretch py-8 pl-3"
    >
      <v-slide-x-reverse-transition mode="out-in">
        <div :key="positionProject">
          <v-card-subtitle class="pt-0 pb-1">{{ project.age }}</v-card-subtitle>
          <v-card-title class="pt-0">{{ project.title }}</v-card-title>
          <v-card-text>{{ project.description }}</v-card-text>
        </div>
      </v-slide-x-reverse-transition>
      <v-item-group
        class="d-flex justify-center mt-auto"
        v-if="groupProject.length > 1"
      >
        <v-item v-for="(item, i) in groupProject" :key="i">
          <v-chip
            active-class="accent--text"
            :input-value="i === positionProject"
            @click="positionProject = i"
          >
          </v-chip>
        </v-item>
      </v-item-group>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    groupProject: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      positionProject: 0,
    };
  },
  computed: {
    project() {
      return this.groupProject[this.positionProject];
    },
  },
};
</script>

<style scoped>
.custom-card-image {
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.v-chip {
  height: 20px;
  width: 60px;
  margin: 0 5px;
  opacity: 1 !important;
}
.theme--dark.v-chip--active:hover::before,
.theme--dark.v-chip--active::before {
  opacity: 1 !important;
}

.v-card {
  cursor: auto !important;
}
.v-card__text {
  min-height: 104px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
