<template>
    <v-card-text class="d-flex align-center">
      <div
        class="mr-2"
        :class="$vuetify.breakpoint.mobile ? 'text-body-2' : 'text-body-1'"
      >
        {{ email }}
      </div>
        <v-tooltip
            v-model="isShowTooltip"
            top
            :open-on-click="false"
            :open-on-focus="false"
            :open-on-hover="false"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    text
                    outlined
                    small
                    v-bind="attrs"
                    v-on="on"
                    @click="copyEmail"
                >
                    <v-icon small>
                    mdi-content-copy
                    </v-icon>
                </v-btn>
            </template>
            <span>{{ tooltipMessage }}</span>
        </v-tooltip>
    </v-card-text>
</template>

<script>
export default {
    name: "EmailField",
    data() {
        return {
          email: "mateusgomes.dev@gmail.com",
          tooltipMessage: this.$t('components.contact.email_field.tooltip.copy'),
          isShowTooltip: false,
        }
    },
    methods: {
      copyEmail() {
        if (window.location.protocol === 'https:') {
          navigator.clipboard.writeText(this.email)
            .then(() => {
                this.tooltipMessage = this.$t('components.contact.email_field.tooltip.copied');

                this.isShowTooltip = true;
                setTimeout(() => {
                    this.isShowTooltip = false;
                }, 3000);
            })
            .catch((error) => {
              console.error('Error copying text to clipboard:', error);
            });
        } else {
            this.tooltipMessage = this.$t('components.contact.email_field.tooltip.can_not_copy');

            this.isShowTooltip = true;
            setTimeout(() => {
                this.isShowTooltip = false;
            }, 3000);
        }
      },
      showTooltip() {
        this.isShowTooltip = true;
      }
    }
}
</script>
