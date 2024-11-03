<template>
  <v-card
    hover
    min-height="250"
    class="d-flex align-center px-8 mb-8 rounded-xl"
  >
    <div cols="5" class="custom-card-image">
      <v-slide-y-transition mode="out-in">
        <v-img
          :key="project.image"
          height="170px"
          width="302px"
          class="rounded-xl elevation-4"
          :class="{ pointer: groupProject.length > 1 }"
          :src="requireImage(project.image)"
          @load="onLoad"
          @click.stop="
            positionProject = (positionProject + 1) % groupProject.length
          "
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
      </v-slide-y-transition>
      <transition name="fade-box" appear>
        <div
          v-if="groupProject.length > 1 && imageLoad"
          :key="project.image"
          class="box box-1 secondary rounded-xl elevation-4"
        ></div>
      </transition>
      <transition name="fade-box" appear>
        <div
          v-if="groupProject.length > 2 && imageLoad"
          :key="project.image"
          class="box box-2 secondary rounded-xl elevation-4"
        ></div>
      </transition>
    </div>

    <div
      class="d-flex flex-column align-self-start align-self-stretch py-8 pl-3"
    >
      <v-slide-x-reverse-transition mode="out-in">
        <div :key="positionProject">
          <v-card-title class="pt-0 d-flex justify-space-between">
            <div class="text-h5">{{ project.title }}</div>
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
          </v-card-title>
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
      positionProject: 0,
      imageLoad: false,
    };
  },
  computed: {
    project() {
      return this.groupProject[this.positionProject];
    },
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
.custom-card-image {
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

.fade-box-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-box-enter {
  opacity: 0;
  transform: translateY(10px);
}

.pointer {
  cursor: pointer;
}

.v-image {
  z-index: 3;
}
.box {
  height: 170px;
  width: 302px;
  position: absolute;
}
.box-1 {
  bottom: 35px;
  left: 32px;
  z-index: 2;
}
.box-2 {
  bottom: 28px;
  left: 32px;
  z-index: 1;
}
</style>
