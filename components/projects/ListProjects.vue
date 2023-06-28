<template>
    <v-row no-gutters justify="center" align="start">
        <v-col cols="12" md="6">
            <v-card
                v-for="(project, index) in firstColumn"
                :key="index"
                justify="center"
                class="pa-2 mt-4 mx-auto"
                width="440"
                :height="400"
                outlined
            >
                {{ project.name }}
            </v-card>
        </v-col>
        <v-col
            cols="12"
            md="6"
            :class="this.$vuetify.breakpoint.mdAndUp ? 'second-col' : ''"
        >
            <v-card
                v-for="(project, index) in secondColumn"
                :key="index"
                justify="center"
                class="pa-2 mt-4 mx-auto"
                width="440"
                :height="400"
                outlined
            >
                {{ project.name }}
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "ListProjects",
    data() {
        return {
            projects: [
                { name: 'Project 1' },
                { name: 'Project 2' },
                { name: 'Project 3' },
                { name: 'Project 4' },
                { name: 'Project 5' },
                { name: 'Project 6' },
                { name: 'Project 7' },
                { name: 'Project 8' },
                { name: 'Project 9' },
                { name: 'Project 10' },
            ]
        }
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