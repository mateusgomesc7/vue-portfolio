<template>
    <v-card elevation="0">
        <v-row no-gutters>
            <v-col
                v-for="align in aligns"
                :key="align"
                cols="12"
                class="my-4 d-flex"
                :class="`justify-${align}`"
            >
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card
                            class="pa-2 card-about-me"
                            outlined
                            max-width="500"
                            :elevation="hover ? 8 : 0"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque quaerat tenetur voluptates
                            ipsum iste molestiae rem molestias voluptas, nisi illo reiciendis dolores quas autem soluta possimus
                            qui earum minus!
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
        </v-row>
        <v-card-actions class="px-4 mt-10">
            <v-row no-gutters>
                <v-col class="mb-2 d-flex justify-end">
                    <v-btn
                        depressed
                        color="accent"
                        class="black--text"
                        :small="$vuetify.breakpoint.mobile"
                    >
                        <v-icon left class="black--text">
                            mdi-linkedin
                        </v-icon>
                        Linkedin
                    </v-btn>
                </v-col>
                <v-col class="mb-2 d-flex justify-center">
                    <v-btn
                        depressed
                        color="accent"
                        class="black--text"
                        :small="$vuetify.breakpoint.mobile"
                    >
                        <v-icon left class="black--text">
                            mdi-github
                        </v-icon>
                        GitHub
                    </v-btn>
                </v-col>
                <v-col class="mb-2 d-flex justify-start">
                    <v-btn
                        text
                        outlined
                        :small="$vuetify.breakpoint.mobile"
                    >
                    <v-icon left>
                        mdi-download-circle-outline
                    </v-icon>
                        {{ $t('components.aboute_me.card_about_me.btn_resume') }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'CardAboutMe',
        data: () => {
            return {
                aligns: ['start', 'center', 'end'],
            }
        },
    }
</script>

<style scoped>
    .card-about-me {
        transition: all 0.5s ease;
    }
</style>
  