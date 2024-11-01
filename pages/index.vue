<template>
  <div>
    <section id="home" class="full-section">
      <v-row no-gutters class="h-100" justify="center" align="center">
        <v-col
          class="d-flex"
          :class="
            $vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-end'
          "
          cols="12"
          md="6"
        >
          <Presentation />
        </v-col>
        <v-col class="d-flex justify-center" cols="12" md="6">
          <v-img
            :src="require(`@/assets/images/profile_background.svg`)"
            alt="Desenvolvedor Web"
          />
        </v-col>
      </v-row>
    </section>
    <section id="projects" class="full-section">
      <Projects />
    </section>
    <section id="about-me" class="full-section">
      <v-row no-gutters class="h-100" justify="center" align="center">
        <v-col
          class="d-flex"
          :class="
            $vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-end'
          "
          cols="12"
          md="5"
        >
          <Presentation />
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
    </section>
    <section id="contact" class="full-section">Contato</section>
  </div>
</template>

<script>
import Presentation from "@/components/home/Presentation.vue";
import Experience from "@/components/about-me/Experience.vue";
import Projects from "@/components/projects/index.vue";

export default {
  name: "IndexPage",
  components: { Presentation, Experience, Projects },
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
