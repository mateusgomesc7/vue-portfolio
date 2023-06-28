<template>
  <v-row no-gutters justify="center">
    <v-col cols="12">
      <Search />
    </v-col>
    <v-col cols="12">
      <ListProjects />
    </v-col>
  </v-row>
</template>

<script>
import Search from '@/components/projects/Search.vue';
import ListProjects from '@/components/projects/ListProjects.vue';

export default {
    name: "ProjectsPage",
    components: { Search, ListProjects },
}
</script>
