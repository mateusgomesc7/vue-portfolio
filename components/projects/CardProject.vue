<template>
    <v-card
        justify="center"
        class="pa-2 mt-4 mx-auto"
        width="440"
        :height="400"
        outlined
    >
        {{ $t(project.name) }}
        <br />
        {{ $t(project.description) }}
        <br />
        <div v-for="(technologie, index) in project.technologies" :key="index">
            {{ technologie.name }}
        </div>
    </v-card>
</template>

<script>
export default {
    name: "CardProject",
    props: {
        project: {
            type: Array,
            default: () => {},
        },
    },
}
</script>