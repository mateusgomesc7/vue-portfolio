<template>
    <v-row no-gutters justify="center" align="start">
        <v-col
            v-for="project in projects"
            :key="project.name"
            cols="12"
            md="6"
            class="mt-6"
        >
            <CardProject :project="project" />
        </v-col>
    </v-row>
</template>

<script>
import CardProject from '@/components/projects/CardProject.vue';

export default {
    name: "ListProjects",
    components: {CardProject},
    props: {
        projects: {
            type: Array,
            default: () => [],
        },
    }
}
</script>
