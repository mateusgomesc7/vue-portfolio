<template>
    <v-hover>
        <template v-slot:default="{ hover }">
            <v-card
                justify="center"
                class="mx-auto transition-swing"
                width="440"
                min-height="400"
                outlined
                :elevation="hover ? 6 : 0"
            >
                <v-carousel
                    hide-delimiter-background
                    show-arrows-on-hover
                    :show-arrows="!$vuetify.breakpoint.mobile"
                    height="246"
                >
                    <v-carousel-item
                        v-for="(image, i) in project.images"
                        :key="i"
                    >
                    <div
                        v-show="image.is_illustrative"
                        class="illustrative-image text-caption font-weight-bold primary
                        primary-text--text px-2 py-1 rounded-sm">
                            {{ $t('components.projects.card_project.illustrative_image') }}
                    </div>
                    <v-img
                        :src="requireImage(image.name)"
                        lazy-src="https://picsum.photos/id/11/10/6"
                        height="100%"
                        contain
                    ></v-img>
                    </v-carousel-item>
                </v-carousel>
                <v-card-title class="py-1">
                    {{ $t(project.name) }}
                </v-card-title>
                <v-card-text class="pb-2 pr-6">
                    <v-row no-gutters>
                        <v-col
                            ref="description"
                            cols="11"
                            class="secondary-text--text"
                            :class="expand ? '' : 'text-truncate'"
                            @click="expand = true"
                            v-html="$t(project.description)"
                        ></v-col>
                        <v-col cols="1">
                            <v-btn
                                icon
                                class="ml-2"
                                style="top: -7px;"
                                @click="expand = !expand"
                            >
                                <v-icon>
                                    {{ expand ? 'mdi-chevron-up' : 'mdi-chevron-down'}}
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-text class="pt-0 pb-2">
                    <v-chip
                        v-for="(technologie, index) in project.technologies"
                        :key="index"
                        small
                        class="mr-1 mb-1"
                        @click="searchTechnologies(technologie.id)"
                    >
                        {{ technologie.name }}
                    </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-4">
                    <v-btn
                        dark
                        depressed
                        color="accent"
                        class="black--text"
                    >
                        <v-icon
                            left
                            class="black--text"
                        >
                            mdi-open-in-new
                        </v-icon>
                        {{
                            $vuetify.breakpoint.width > 380 ?
                            $t('components.projects.card_project.btn_open_project') :
                            $t('components.projects.card_project.btn_open')
                        }}
                    </v-btn>
                    <v-btn
                        text
                        outlined
                    >
                        <v-icon
                            left
                        >
                            mdi-github
                        </v-icon>
                        {{ $t('components.projects.card_project.btn_source_code') }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-hover>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: "CardProject",
    props: {
        project: {
            type: Object,
            default: () => {},
        },
    },
    data: () => {
        return {
            expand: false,
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ]
        }
    },
    methods: {
        ...mapMutations('search', ['setFilterTechnologies']),

        searchTechnologies(technologieId) {
            this.setFilterTechnologies([technologieId])
            this.scrollToTop()
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
        requireImage(imagePath) {
            return require(`@/assets/projects/${imagePath}`);
        }
    }
}
</script>

<style scoped>
.illustrative-image {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
}
</style>
