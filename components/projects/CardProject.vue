<template>
    <v-card
        justify="center"
        class="mx-auto"
        width="440"
        min-height="400"
        outlined
        elevation="2"
    >
        <v-img
            :src="project.image"
            height="190"
            class="mx-auto"
        ></v-img>
        <v-card-title class="py-2">
            {{ $t(project.name) }}
        </v-card-title>
        <v-card-text class="pb-2 pr-6">
            <v-row no-gutters>
                <v-col
                    ref="description"
                    cols="11"
                    :class="expand ? '' : 'text-truncate'"
                    @click="expand = true"
                >
                    {{ $t(project.description) }}
                </v-col>
                <v-col cols="1">
                    <v-btn
                        icon
                        color="deep-purple accent-4"
                        class="ml-2"
                        style="top: -5px;"
                        @click="expand = !expand"
                    >
                        <v-icon>
                            {{ expand ? 'mdi-chevron-up' : 'mdi-chevron-down'}}
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-text class="pt-0">
            <v-chip
                v-for="(technologie, index) in project.technologies"
                :key="index"
                small
                class="mr-1 mb-1"
            >
                {{ technologie.name }}
            </v-chip>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn
                text
                color="deep-purple accent-4"
            >
                Live
            </v-btn>
            <v-btn
                text
                color="deep-purple accent-4"
            >
                Source Code
            </v-btn>
        </v-card-actions>
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
    data: () => {
        return {
            expand: false,
        }
    }
}
</script>