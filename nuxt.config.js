import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "Mateus Gomes",
    title: "Mateus Gomes",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Mateus Gomes - Software Engineer",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
  },

  server: {
    host: "0.0.0.0", // valor padrão: localhost,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/styles.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n", "@nuxtjs/axios"],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      options: {
        customProperties: true,
      },
      dark: true,
      themes: {
        light: {
          primary: "#D2D9D7",
          "primary-90": "#E2E8E7",
          secondary: "#90A0A6",
          accent: "#49b884",
          highlight: "#000000",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          "primary-text": "#0D0D0D",
          "secondary-text": "#262626",
        },
        dark: {
          primary: "#262626",
          "primary-90": "#363636",
          secondary: "#5C7362",
          accent: "#49b884",
          highlight: "#92FFAF",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          "primary-text": "#D2D9D7",
          "secondary-text": "#90A0A6",
        },
      },
    },
    breakpoint: {
      mobileBreakpoint: 800,
    },
  },

  i18n: {
    strategy: "no_prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "pt",
        name: "Português",
        file: "pt-BR.js",
      },
      {
        code: "en",
        name: "English",
        file: "en-US.js",
      },
    ],
    lazy: true,
    langDir: "locales/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["three", "GLTFLoader"],

    extend(config, ctx) {
      if (config.module) {
        config.module.rules.push({
          test: /\.(glsl)$/i,
          use: ["raw-loader", "glslify-loader"],
        });
      }
    },
  },
};
