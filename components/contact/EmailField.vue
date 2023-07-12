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
          tooltipMessage: "Copiar e-mail",
          isShowTooltip: false,
        }
    },
    methods: {
      copyEmail() {
        if (window.location.protocol === 'https:') {
          navigator.clipboard.writeText(this.email)
            .then(() => {
                this.tooltipMessage = "Copiado!";
            })
            .catch((error) => {
              console.error('Erro ao copiar texto para a área de transferência:', error);
            });
        } else {
            this.tooltipMessage = "Não é possível copiar o e-mail em uma conexão não segura.";

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
