<template>
    <v-card
        justify="center"
        class="pa-2 mt-4 mx-auto"
        width="440"
        :height="400"
        outlined
    >
        <slot name="title"></slot>
        <br />
        <slot name="description"></slot>
        <br />
        <slot name="technologies"></slot>
    </v-card>
</template>

<script>
export default {
    name: "CardProject",
}
</script>