<template>
  <v-row no-gutters justify="center">
    <v-col cols="12">
      <Search
        :technologies="technologies"
        :loading="loading"
        @search="handleSearch"
      />
    </v-col>
    <v-col cols="12">
      <ListProjects :projects="filteredProjects" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import Search from '@/components/projects/Search.vue';
import ListProjects from '@/components/projects/ListProjects.vue';

export default {
    name: "ProjectsPage",
    components: { Search, ListProjects },
    data() {
        return {
            technologies: [],
            projects: [],
            filteredProjects: [],
            loading: false
        }
    },
    mounted() {
      this.loading = true;
      Promise.all([this.loadProjects(), this.loadTechnologies()])
        .then(([dataProjects, dataTechnologies]) => {
          this.projects = this.mergeProjectsTechnologies(
            dataProjects.projects,
            dataTechnologies.technologies
          )
          this.filteredProjects = this.projects;
          this.technologies = dataTechnologies.technologies;
          this.handleSearch(this.filterTechnologies)
        })
        .catch(error => {
          console.error('Error loading data:', error);
        })
        .finally(() => {
          this.loading = false;
        })
    },
    computed: {
        ...mapState('search', {
          filterTechnologies: (state) => state.filterTechnologies
        })
    },
    watch: {
        filterTechnologies: {
            handler: function (val) {
              this.handleSearch(val)
            },
            deep: true
        }
    },
    methods: {
      mergeProjectsTechnologies(projects, technologies) {
        return projects.map( project => {
          const matchedTechnologies = project.technologies.map(techId => {
            return technologies.find(technologie => technologie.id === techId);
          });

          return {...project, technologies: matchedTechnologies}
        })
      },
      handleSearch(listTechnologiesIds) {
        if (listTechnologiesIds.length === 0) {
          this.filteredProjects = this.projects;
        } else {
          this.filteredProjects = this.projects.filter(project => {
            return listTechnologiesIds.every(techId => {
              return project.technologies.some(technology => technology.id === techId);
            })
          })
        }
      },
      loadProjects() {
        return this.$axios.$get('/data/projects.json', { baseURL: window.location.origin })
      },
      loadTechnologies() {
        return this.$axios.$get('/data/technologies.json', { baseURL: window.location.origin })
      }
    },
}
</script>
