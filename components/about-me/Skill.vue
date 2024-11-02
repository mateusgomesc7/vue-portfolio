<template>
  <div class="d-flex flex-column align-center ma-2">
    <div class="content-icon rounded-pill primary-90 mb-2">
      <v-img :src="requireImage(icon)" :max-width="maxWidth"></v-img>
    </div>
    <div class="text-body-2">{{ name }}</div>
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
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
