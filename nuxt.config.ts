export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  app: {
    head: {
      title: "Nature-Shop|BedsBd",

      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        {
          name: "description",
          content: "Agrikon HTML Template For Agriculture Farm & Farmers",
        },
      ],

      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/assets/images/favicons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/assets/images/favicons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/assets/images/favicons/favicon-16x16.png",
        },
        { rel: "manifest", href: "/assets/images/favicons/site.webmanifest" },

        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },

        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100..900&display=swap",
        },

        { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/assets/css/fontawesome-all.min.css" },
        { rel: "stylesheet", href: "/assets/css/swiper.min.css" },
        { rel: "stylesheet", href: "/assets/css/animate.min.css" },
        { rel: "stylesheet", href: "/assets/css/odometer.min.css" },
        { rel: "stylesheet", href: "/assets/css/jarallax.css" },
        { rel: "stylesheet", href: "/assets/css/magnific-popup.css" },
        { rel: "stylesheet", href: "/assets/css/bootstrap-select.min.css" },
        { rel: "stylesheet", href: "/assets/css/agrikon-icons.css" },
        { rel: "stylesheet", href: "/assets/css/nouislider.min.css" },
        { rel: "stylesheet", href: "/assets/css/nouislider.pips.css" },
        { rel: "stylesheet", href: "/assets/css/main.css" },
        { rel: "stylesheet", href: "/assets/css/shop.css" },
      ],
      script: [
        { src: "/assets/js/jquery-3.5.1.min.js", defer: true },
        { src: "/assets/js/bootstrap.bundle.min.js", defer: true },
        { src: "/assets/js/swiper.min.js", defer: true },
        { src: "/assets/js/jquery.ajaxchimp.min.js", defer: true },
        { src: "/assets/js/jquery.magnific-popup.min.js", defer: true },
        { src: "/assets/js/jquery.validate.min.js", defer: true },
        { src: "/assets/js/bootstrap-select.min.js", defer: true },
        { src: "/assets/js/wow.js", defer: true },
        { src: "/assets/js/odometer.min.js", defer: true },
        { src: "/assets/js/jquery.appear.min.js", defer: true },
        { src: "/assets/js/jarallax.min.js", defer: true },
        { src: "/assets/js/circle-progress.min.js", defer: true },
        { src: "/assets/js/wNumb.min.js", defer: true },
        { src: "/assets/js/nouislider.min.js", defer: true },
        { src: "/assets/js/theme.js", defer: true },
      ],
    },
  },
});
