<template>
    <v-fab-transition>
        <v-btn
            v-show="showButton"
            fab
            fixed
            bottom
            right
            color="accent"
            @click="scrollToTop"
        >
            <v-icon class="primary--text">mdi-chevron-up</v-icon>
        </v-btn>
    </v-fab-transition>
</template>

<script>
export default {
    name: 'ButtonScrollToTop',
    data: () => ({
        showButton: false,
    }),
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
            this.showButton = scrollPosition > 100
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
    },
}
</script>

<style scoped>
.v-btn {
    bottom: 50px;
}
</style>