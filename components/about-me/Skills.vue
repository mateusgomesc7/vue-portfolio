<template>
  <v-card class="d-flex flex-column align-center" width="100%" elevation="0">
    <v-row no-gutters class="mb-8">
      <v-col>
        <v-card-title class="text-h4 font-weight-bold">Skills</v-card-title>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6" class="d-flex flex-wrap justify-center">
        <Skill
          v-for="(skill, i) in frontSkills"
          :key="i"
          :name="skill.name"
          :icon="skill.icon"
          :max-width="skill.maxWidth"
        />
      </v-col>
      <v-col cols="6" class="d-flex flex-wrap justify-center">
        <Skill
          v-for="(skill, i) in backSkills"
          :key="i"
          :name="skill.name"
          :icon="skill.icon"
          :max-width="skill.maxWidth"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Skill from "./Skill.vue";

export default {
  name: "Skills",
  components: { Skill },
  data: () => {
    return {
      frontSkills: [
        { name: "JavaScript", icon: "javascript.svg" },
        { name: "TypeScript", icon: "typescript.svg" },
        { name: "Vue.js", icon: "vuejs.svg" },
        { name: "Nuxt.js", icon: "nuxt.svg", maxWidth: "45px" },
        { name: "Jest", icon: "jest.svg" },
        { name: "Vitest", icon: "vitest.svg", maxWidth: "45px" },
        { name: "Vuetify", icon: "vuetify.svg" },
        { name: "Three.js", icon: "threejs.svg" },

        // { name: "Git", icon: "git.svg" },
        // { name: "HTML5", icon: "html5.svg" },
        // { name: "CSS3", icon: "css3.svg" },
        // { name: "SASS", icon: "sass.svg" },
        // { name: "Bootstrap", icon: "bootstrap.svg" },
        // { name: "Nginx", icon: "nginx.svg" },
      ],
      backSkills: [
        { name: "Python", icon: "python.svg", maxWidth: "45px" },
        { name: "Flask", icon: "flask.svg" },
        { name: "PostgreSQL", icon: "postgresql.svg" },
        { name: "Docker", icon: "docker.svg", maxWidth: "45px" },
        { name: "Pytest", icon: "pytest.svg", maxWidth: "36px" },
        { name: "Pandas", icon: "pandas.svg", maxWidth: "30px" },
        { name: "TensorFlow", icon: "tensorflow.svg", maxWidth: "30px" },
        // { name: "FastAPI", icon: "fastapi.svg" },
        // { name: "GitHub", icon: "github.svg" },
        // { name: "GitLab", icon: "gitlab.svg" },
        // { name: "SQL", icon: "sql.svg" },
        // { name: "MySQL", icon: "mysql.svg" },
      ],
    };
  },
};
</script>
