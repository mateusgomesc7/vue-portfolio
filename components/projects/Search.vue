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
        hide-details
        item-text="name"
        item-value="name"
        multiple
        :menu-props="{ maxHeight: 200 }"
        @keydown.enter="closeAutocomplete"
        @blur="isSearchSelected = false"
        @focus="isSearchSelected = true"
    >
    <template #label>
      <v-icon
       :color="isSearchSelected ? 'primary' : ''"
      >
        mdi-magnify
      </v-icon>
      {{ $t('components.projects.search.search') }}
    </template>
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
          { name: 'Machine Learning' },
          { name: 'React' },
        ],
        isSearchSelected: false,
      }
    },
    methods: {
        closeAutocomplete() {
            this.$refs.autocomplete.blur();
        }
    }
}
</script>
