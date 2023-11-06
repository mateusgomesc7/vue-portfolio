<template>
    <v-card elevation="0">
        <div class="d-flex justify-center align-content-space-around flex-wrap">
            <div
                v-for="text in texts_about_me"
                :key="text.key"
                class="ma-4"
            >
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card
                            class="pa-2 card-about-me"
                            outlined
                            min-width="300"
                            max-width="435"
                            :elevation="hover ? 8 : 0"
                            v-html="text.description"
                        ></v-card>
                    </template>
                </v-hover>
            </div>
        </div>
        <v-card-actions class="px-0 mt-4 d-flex justify-center">
            <v-card
                class="px-0 d-flex justify-space-between"
                elevation="0"
                width="100%"
                max-width="500"
            >
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
            </v-card>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'CardAboutMe',
        data() {
            return {
                texts_about_me: [
                    {
                        description: this.$t('components.aboute_me.card_about_me.first_paragraph'),
                        key: 1
                    },
                    {
                        description: this.$t('components.aboute_me.card_about_me.second_paragraph'),
                        key: 2
                    },
                    {
                        description: this.$t('components.aboute_me.card_about_me.third_paragraph'),
                        key: 3
                    },
                    {
                        description: this.$t('components.aboute_me.card_about_me.third_paragraph'),
                        key: 4
                    }
                ],
            }
        },
    }
</script>

<style scoped>
    .card-about-me {
        transition: all 0.5s ease;
    }
</style>
  