<template>
  <div>
    <section id="home" class="full-section">
      <v-container class="pa-0">
        <Home />
      </v-container>
    </section>
    <section id="projects" class="full-section primary-90">
      <v-container class="pa-0">
        <Projects />
      </v-container>
    </section>
    <section id="about-me" class="full-section">
      <v-container class="pa-0">
        <AboutMe />
      </v-container>
    </section>
    <section id="contact" class="full-section primary-90">
      <v-container class="pa-0">
        <Contacts />
      </v-container>
    </section>
  </div>
</template>

<script>
import Home from "@/components/home/index.vue";
import AboutMe from "@/components/about-me/index.vue";
import Projects from "@/components/projects/index.vue";
import Contacts from "@/components/contact/index.vue";

export default {
  name: "IndexPage",
  components: {
    Home,
    AboutMe,
    Projects,
    Contacts,
  },
  mounted() {
    this.$nuxt.$emit("active-logo", true);
  },
  beforeDestroy() {
    this.$nuxt.$emit("active-logo", false);
  },
};
</script>

<style scoped>
.container {
  max-width: 940px;
}

.mobile-height {
  height: 300px !important;
}

.full-section {
  display: flex; /* Centraliza conteúdo */
  justify-content: center;
  align-items: center;
}
</style>
