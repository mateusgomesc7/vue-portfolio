<template>
  <v-row no-gutters justify="center">
    <v-col cols="12">
      <Search :technologies="technologies" @search="handleSearch" />
    </v-col>
    <v-col cols="12">
      <ListProjects :projects="filteredProjects"/>
    </v-col>
  </v-row>
</template>

<script>
import technologies from '~/static/data/technologies.json'
import projects from '~/static/data/projects.json'
import Search from '@/components/projects/Search.vue';
import ListProjects from '@/components/projects/ListProjects.vue';

export default {
    name: "ProjectsPage",
    components: { Search, ListProjects },
    data() {
        return {
            technologies: technologies.technologies,
            projects: projects.projects,
            filteredProjects: projects.projects,
        }
    },
    methods: {
      handleSearch(value) {
        if (value.length === 0) {
          this.filteredProjects = this.projects;
        } else {
          this.filteredProjects = this.projects.filter(project => {
            return project.technologies.some(technologyId => {
              return value.includes(technologyId)
            })
          })
        }
      },
    },
}
</script>
