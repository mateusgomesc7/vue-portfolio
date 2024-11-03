<template>
  <div>
    <section id="home" class="full-section">
      <v-container class="px-0">
        <v-row no-gutters class="h-100" justify="center" align="center">
          <v-col cols="12" md="6">
            <Presentation />
          </v-col>
          <v-col class="d-flex justify-center" cols="12" md="6">
            <Profile />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="projects" class="full-section primary-90">
      <v-container class="px-0">
        <Projects />
      </v-container>
    </section>
    <section id="about-me" class="full-section">
      <v-container class="px-0">
        <v-row no-gutters justify="center" align="center">
          <v-col
            class="d-flex"
            :class="
              $vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-end'
            "
            cols="12"
            md="5"
          >
            <About />
          </v-col>
          <v-col
            class="d-flex justify-center"
            cols="12"
            md="7"
            style="height: 500px"
            :class="{ 'mobile-height': $vuetify.breakpoint.mobile }"
          >
            <Experience />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <Skills />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="contact" class="full-section primary-90">
      <v-container class="px-0">
        <Contacts />
      </v-container>
    </section>
  </div>
</template>

<script>
import Presentation from "@/components/home/Presentation.vue";
import Profile from "@/components/home/Profile.vue";
import Experience from "@/components/about-me/Experience.vue";
import About from "@/components/about-me/About.vue";
import Skills from "@/components/about-me/Skills.vue";
import Projects from "@/components/projects/index.vue";
import Contacts from "@/components/contact/index.vue";

export default {
  name: "IndexPage",
  components: {
    Presentation,
    Profile,
    About,
    Experience,
    Skills,
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
  height: 100vh; /* Cada seção ocupa 100% da altura da viewport */
  display: flex; /* Centraliza conteúdo */
  justify-content: center;
  align-items: center;
}
</style>
