<template>
    <v-timeline
        :dense="$vuetify.breakpoint.mobile"
    >
        <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :color="year.color"
            small
        >
            <template v-slot:opposite>
                <span
                    :class="`headline font-weight-bold ${year.color}--text`"
                    v-text="year.year"
                ></span>
            </template>
            <div class="py-4">
                <h2
                  v-if="$vuetify.breakpoint.mobile"
                  :class="`headline font-weight-light mb-4 ${year.color}--text`"
                >
                    {{ year.year }}
                </h2>
                <div v-html="year.text"></div>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
  export default {
    name: 'Timeline',
    data()  { 
      return {
        years: [
          {
            color: 'cyan',
            year: '2016 - 2021',
            text: this.$t('components.aboute_me.timeline.years.text_2016_2021'),
          },
          {
            color: 'green',
            year: '2022',
            text: this.$t('components.aboute_me.timeline.years.text_2022'),
          },
          {
            color: 'pink',
            year: '2023',
            text: this.$t('components.aboute_me.timeline.years.text_2023'),
          },
        ],
      }
    },
  }
</script>