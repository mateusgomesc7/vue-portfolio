<template>
    <svg
        class="mr-10"
        :class="is_active ? 'is-active' : ''"
        width="39"
        height="46"
        viewBox="0 0 39 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="logo">
            <path id="letter_m" d="M0 11.4795V34.1345L4.875 36.9759V14.3114L19.5 5.73026L21.9375 7.16045L7.3125 15.7273V38.3966L12.1875 41.2379V18.5592L26.8125 10.0208L29.25 11.451L14.625 19.9751V42.6586L19.5 45.5V22.807L39 11.4795L19.5 0L0 11.4795Z"/>
            <path id="letter_g" d="M38.9619 17.1433V11.4796L19.4619 22.807V45.5L38.9619 34.1345V19.9752L29.2119 25.646V31.3145L34.0869 28.4767V31.3098L24.3369 36.9878V25.646L38.9619 17.1433Z"/>
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