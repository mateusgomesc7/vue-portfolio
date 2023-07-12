<template>
    <svg
        class="mr-10"
        :class="is_active ? 'is-active' : ''"
        width="36"
        height="41"
        viewBox="0 0 36 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="logo">
            <path id="letter_m" d="M0 10.3442V30.7586L4.39286 33.3189V12.896L17.5714 5.16353L19.7679 6.45228L6.58929 14.1719V34.5991L10.9821 37.1595V16.7237L24.1607 9.02976L26.3571 10.3185L13.1786 17.9996V38.4396L17.5714 41V20.5514L35.1429 10.3442L17.5714 0L0 10.3442Z"/>
            <path id="letter_g" d="M35.1085 15.4478V10.3442L17.5371 20.5514V41L35.1085 30.7586V17.9996L26.3228 23.1096V28.2175L30.7157 25.6604V28.2132L21.93 33.3297V23.1096L35.1085 15.4478Z"/>
        </g>
    </svg>
</template>

<script>
export default {
    name: 'Logo',
    data() {
        return {
            is_active: false,
        }
    },
    mounted() {
        this.$nuxt.$on('active-logo', (value) => {
            this.is_active = value;
        });
    },
}
</script>

<style scoped>
svg {
    cursor: pointer;
}

#logo {
    fill: var(--v-primary-text-base) !important;
    opacity: 0.8;
}

#logo, #letter_m, #letter_g {
    transition: all 0.5s ease;
}

#letter_g {
    transform: translate(-12.3%, -6.3%);
}

svg:hover #letter_g {
    transform: translate(-0.4%, -0.4%);
}

.is-active {
    #logo {
        opacity: 1 !important;
    }
    #letter_g {
        transform: translate(-0.4%, -0.4%) !important;
    }
}
</style>