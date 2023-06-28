<template>
    <v-autocomplete
        v-model="values"
        ref="autocomplete"
        :items="technologies"
        :loading="loading"
        :menu-props="{ maxHeight: 200 }"
        outlined
        clearable
        chips
        small-chips
        deletable-chips
        hide-selected
        hide-no-data
        hide-details
        item-text="name"
        item-value="id"
        multiple
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
    props: {
      technologies: {
        type: Array,
        default: () => [],
      },
      loading: {
        type: Boolean,
        default: false,
      }
    },
    data () {
      return {
        values: [],
        isSearchSelected: false,
      }
    },
    watch: {
        values: {
            handler: function (val) {
                this.$emit('search', val)
            },
            deep: true
        }
    },
    methods: {
        closeAutocomplete() {
            this.$refs.autocomplete.blur();
        }
    }
}
</script>
