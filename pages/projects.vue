<template>
  <v-row no-gutters justify="center">
    <v-col cols="12" sm="8">
      <Search />
    </v-col>
  </v-row>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
    name: "ProjectsPage",
    components: { Search },
}
</script>
