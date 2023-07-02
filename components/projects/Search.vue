<template>
    <v-autocomplete
        :value="filterTechnologies"
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
        @change="setFilterTechnologies"
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
      {{ $t('components.projects.search.search_by_technologie') }}
    </template>
    </v-autocomplete>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

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
    computed: {
        ...mapState('search', {
          filterTechnologies: (state) => state.filterTechnologies
        })
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
        ...mapMutations('search', ['setFilterTechnologies']),

        closeAutocomplete() {
            this.$refs.autocomplete.blur();
        }
    }
}
</script>
