<template>
  <div class="d-flex flex-column align-center ma-2">
    <div
      class="content-icon rounded-pill primary-90"
      :class="name ? 'mb-2' : ''"
      :style="{ width: size, height: size }"
    >
      <v-img :src="requireImage(icon)" :max-width="maxWidth"></v-img>
    </div>
    <div :class="$vuetify.breakpoint.mobile ? 'text-caption' : 'text-body-2'">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    name: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    maxWidth: {
      type: String,
      default: "40px",
    },
    size: {
      type: String,
      default: "70px",
    },
  },
  methods: {
    requireImage(icon) {
      return require(`@/assets/images/skills/${icon}`);
    },
  },
};
</script>

<style scoped>
.content-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
