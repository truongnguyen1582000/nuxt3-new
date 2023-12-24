import pkg from "./package.json";

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    public: {
      APP_VERSION: pkg.version,
      APP_NAME: pkg.name,
      APP_MODE: process.env?.NODE_ENV,
    },
  },
  modules: [
    "nuxt-primevue",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@formkit/nuxt",
    "@vueuse/nuxt",
    '@nuxt/image',
  ],
  image: {
    dir: 'assets/images'
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    legacy: true,
    defaultLocale: "en",
    strategy: "no_prefix",
    locales: [
      { code: "en", file: "en.json", name: "English" },
      { code: "de", file: "de.json", name: "German" },
    ],
    vueI18n: "./vue-i18n.options.ts",
  },
  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: false,
      ripple: true,
    },
    cssLayerOrder: "tailwind-base,primevue, tailwind-utilities",
    components: {
      include: "*",
      exclude: ["Galleria", "Carousel"],
    },
    directives: {
      include: ["Ripple", "Tooltip"],
    },
  },
  css: [
    "~/assets/scss/main.scss",
    "~/assets/css/theme.css",
    "~/assets/css/tailwind.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["nuxt", "primevue", "formkit-primevue"],
  },
});
