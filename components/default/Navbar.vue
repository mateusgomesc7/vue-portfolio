<template>
  <v-app-bar app elevation="0" color="primary">
    <v-container
      class="d-flex justify-space-between align-center pa-0"
      style="max-width: 940px"
    >
      <v-btn
        id="go-home"
        text
        class="pa-0"
        elevation="0"
        @click.stop="goToHome()"
      >
        <Logo />
      </v-btn>
      <v-btn-toggle v-model="toggle_page" group>
        <v-btn value="projects" @click="goTo('#projects')">
          <v-icon :left="!$vuetify.breakpoint.mobile"
            >mdi-view-grid-plus</v-icon
          >
          <div v-if="!$vuetify.breakpoint.mobile">
            {{ $t("components.default.navbar.projects") }}
          </div>
        </v-btn>

        <v-btn value="about-me" @click="goTo('#about-me')">
          <v-icon :left="!$vuetify.breakpoint.mobile">mdi-account</v-icon>
          <div v-if="!$vuetify.breakpoint.mobile">
            {{ $t("components.default.navbar.about_me") }}
          </div>
        </v-btn>

        <v-btn value="contact" @click="goTo('#contact')">
          <v-icon :left="!$vuetify.breakpoint.mobile">mdi-email</v-icon>
          <div v-if="!$vuetify.breakpoint.mobile">
            {{ $t("components.default.navbar.contact") }}
          </div>
        </v-btn>
      </v-btn-toggle>
      <div>
        <div v-if="!$vuetify.breakpoint.mobile" class="d-flex justify-start">
          <ButtonTranslation />
          <SwitchTheme />
        </div>
        <div v-else>
          <v-btn
            text
            @click.stop="
              () => {
                setDrawer(true);
              }
            "
            class="custom-button"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import SwitchTheme from "@/components/utils/SwitchTheme.vue";
import ButtonTranslation from "@/components/utils/ButtonTranslation.vue";
import Logo from "@/components/default/Logo.vue";
import goTo from "vuetify/lib/services/goto";

export default {
  name: "Navbar",
  components: { Logo, ButtonTranslation, SwitchTheme },
  data() {
    return {
      title: "Mateus",
      subtitle: "Gomes",
      toggle_page: undefined,
      duration: 500,
      disbledUpdateActiveSection: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateActiveSection);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateActiveSection);
  },
  computed: {
    ...mapState("navigation_drawer", {
      drawer: (state) => state.drawer,
    }),
    options() {
      return {
        duration: this.duration,
      };
    },
  },
  methods: {
    ...mapMutations("navigation_drawer", ["setDrawer"]),

    goToHome() {
      this.goTo("#home");
      this.toggle_page = undefined;
      this.$nuxt.$emit("active-logo", true);
    },
    goTo(section) {
      this.disbledUpdateActiveSection = true;
      this.$vuetify.goTo(section, this.options);
      history.replaceState(null, null, `${section}`);
      setTimeout(() => {
        this.disbledUpdateActiveSection = false;
      }, this.duration);
    },
    updateActiveSection() {
      if (this.disbledUpdateActiveSection) return;

      const sections = document.querySelectorAll(".full-section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          if (section.id === "home") {
            this.toggle_page = undefined;
            this.$nuxt.$emit("active-logo", true);
          } else {
            this.toggle_page = section.id;
            this.$nuxt.$emit("active-logo", false);
          }
          history.replaceState(null, null, `#${section.id}`);
        }
      });
    },
  },
};
</script>

<style scoped>
#go-home {
  height: 48px;
  min-width: 48px;
}

.custom-select {
  max-width: 66px;
}
.custom-button {
  min-width: 32px;
}

.v-app-bar {
  height: 61px !important;
}
.container {
  border-bottom: 1px solid #ccc;
}
</style>
