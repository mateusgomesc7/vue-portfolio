<template>
  <v-card hover min-height="250" width="300" class="mb-8 rounded-xl">
    <v-carousel
      cycle
      interval="7000"
      :hide-delimiters="groupProject.length <= 1"
      :show-arrows="groupProject.length > 1 && !$vuetify.breakpoint.smAndDown"
      :hide-delimiter-background="!$vuetify.theme.dark"
    >
      <v-carousel-item v-for="(project, i) in groupProject" :key="i">
        <v-img
          :key="project.image"
          height="170px"
          class="rounded-xl"
          :src="requireImage(project.image)"
          @load="onLoad"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>

        <v-card-title class="d-flex justify-space-between">
          <div class="text-h5">{{ project.title }}</div>
        </v-card-title>
        <v-card-text>{{ project.description }}</v-card-text>
        <div class="d-flex align-center justify-center">
          <Skill
            v-for="(skill, i) in project.skills"
            :key="i"
            :name="skill.name"
            :icon="skill.icon"
            :max-width="skill.maxWidth ?? '18px'"
            size="35px"
          />
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import Skill from "@/components/about-me/Skill.vue";

export default {
  components: { Skill },
  props: {
    groupProject: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      imageLoad: false,
    };
  },
  methods: {
    onLoad() {
      this.imageLoad = true;
    },
    requireImage(imagePath) {
      return require(`@/assets/projects/${imagePath}`);
    },
  },
};
</script>

<style scoped>
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

/* .v-window {
  background-color: aquamarine;
} */

:deep(.v-window__next),
:deep(.v-window__prev) {
  top: calc(100% - 43px) !important;
  z-index: 2;
}

/* .v-window__prev,
.v-window__next {

} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-box-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-box-enter {
  opacity: 0;
  transform: translateY(10px);
}
</style>
