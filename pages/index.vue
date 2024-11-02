<template>
  <div>
    <section id="home" class="full-section">
      <v-row no-gutters class="h-100" justify="center" align="center">
        <v-col cols="12" md="6">
          <Presentation />
        </v-col>
        <v-col class="d-flex justify-center" cols="12" md="6">
          <Profile />
        </v-col>
      </v-row>
    </section>
    <section id="projects" class="full-section primary-90">
      <Projects />
    </section>
    <section id="about-me" class="full-section">
      <div>
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
      </div>
    </section>
    <section id="contact" class="full-section">
      <div class="w-100">
        <v-row no-gutters class="w-100">
          <v-col cols="12">
            <Clients />
          </v-col>
        </v-row>
        <v-row no-gutters class="w-100">
          <v-col cols="12">
            <Contacts />
          </v-col>
        </v-row>
      </div>
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
import Clients from "@/components/contact/Clients.vue";

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
    Clients,
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
.mobile-height {
  height: 300px !important;
}

.full-section {
  height: 100vh; /* Cada seção ocupa 100% da altura da viewport */
  display: flex; /* Centraliza conteúdo */
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc; /* Opcional: borda entre seções */
}
</style>
