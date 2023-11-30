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
                    href="https://www.linkedin.com/in/mateus-gomes-c/"
                    target="_blank"
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
                    href="https://github.com/mateusgomesc7"
                    target="_blank"
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
                    :href="resumeLink"
                    target="_blank"
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
        computed: {
            texts_about_me() {
                return [
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
                        description: this.$t('components.aboute_me.card_about_me.fourth_paragraph'),
                        key: 4
                    }
                ]
            },
            resumeLink() {
                const currentLanguage = this.$i18n.locale;

                if (currentLanguage === 'pt') {
                    return 'https://drive.google.com/file/d/1OIWoH9lxGRvXnbEU3P1zs9jrg7x91kK_/view?usp=sharing';
                } else {
                    return 'https://drive.google.com/file/d/1E81q0vISLxOtN-pCNsrS5yQM0tXw7lz3/view?usp=sharing';
                }
            }
        }
    }
</script>

<style scoped>
    .card-about-me {
        transition: all 0.5s ease;
    }
</style>
  