// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'HOLO APP',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'Sitio creado para demo' },
            //{ name: 'robots', content: 'Sitio creado para demo' },
            //<meta name="googlebot" content="..., ...">
            //<meta name="google-site-verification" content="...">
            //<meta name="keywords" content="palabra clave 1, palabra clave 2, palabra clave 3"/>
            //<meta name="author" content="Nombre del autor" />
            //<meta name="copyright" content="Propietario del copyright" />
            { name: 'google-site-verification', content: '' },

          ],
        }
      },
    
    css:['vuetify/styles/main.css','@mdi/font/css/materialdesignicons.min.css'],
    build:{
        transpile: ['vuetify'],
        //'@vuepic/vue-datepicker'
    },
})
