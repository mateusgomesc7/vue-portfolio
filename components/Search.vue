<template>
    <v-autocomplete
        v-model="values"
        ref="autocomplete"
        :items="people"
        outlined
        clearable
        chips
        small-chips
        deletable-chips
        hide-selected
        hide-no-data
        label="Search"
        item-text="name"
        item-value="name"
        multiple
        :menu-props="{ maxHeight: 200 }"
        @keydown.enter="closeAutocomplete"
    >
    </v-autocomplete>
</template>

<script>
export default {
    name: "Search",
    data () {
      return {
        values: ['Python', 'JavaScript'],
        people: [
          { name: 'Python' },
          { name: 'Flask' },
          { name: 'Vue' },
          { name: 'Nuxt' },
          { name: 'JavaScript' },
          { name: 'Visão Computacional' },
          { name: 'Machine Learning' },
          { name: 'React' },
        ]
      }
    },
    methods: {
        closeAutocomplete() {
            this.$refs.autocomplete.blur();
        }
    }
}
</script>
