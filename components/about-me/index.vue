<template>
  <div>
    <v-row no-gutters justify="center" align="center" class="my-16">
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
    <v-row no-gutters class="mb-16">
      <v-col>
        <Skills />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Experience from "@/components/about-me/Experience.vue";
import About from "@/components/about-me/About.vue";
import Skills from "@/components/about-me/Skills.vue";

export default {
  name: "Index AboutMe",
  components: { Experience, About, Skills },
};
</script>
