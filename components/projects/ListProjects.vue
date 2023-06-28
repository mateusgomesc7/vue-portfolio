<template>
    <v-row no-gutters justify="center" align="start">
        <v-col cols="12" md="6">
            <CardProject
                v-for="(project, index) in firstColumn"
                :key="index"
                :project="project" 
            />
        </v-col>
        <v-col
            cols="12"
            md="6"
            :class="this.$vuetify.breakpoint.mdAndUp ? 'second-col' : ''"
        >
            <CardProject
                v-for="(project, index) in secondColumn"
                :key="index"
                :project="project"
            />
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
    },
    computed: {
        firstColumn() {
            if (this.$vuetify.breakpoint.smAndDown) {
                return this.projects
            }
            return this.projects.filter((project, index) => index % 2 === 0)
        },
        secondColumn() {
            if (this.$vuetify.breakpoint.smAndDown)
                return []
            return this.projects.filter((project, index) => index % 2 !== 0)
        }
    }
}
</script>

<style scoped>
.second-col {
    margin-top: 70px !important;
}
</style>