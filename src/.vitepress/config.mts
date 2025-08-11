import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default ({
  base: '/UF6/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  head: [
  ['link', { rel: 'icon', href: '/img/logo.png' }],
  ],
  locales: {
    root: {
      label: 'Español',
      lang: 'es-ES',
      link: '/',
      title: 'UF6 - Funciones',
      description: 'Unidad 6 donde se abordan los conceptos de funciones.',
      themeConfig: {
        siteTitle: 'Funciones',
        outline: { label: 'En esta página' },
          docFooter: { prev: 'Anterior', next: 'Siguiente' },
          nav: [
            { text: '🏠 Inicio', link: '/' },
            { text: '📚 Contenidos', items: [
              { text: '1. Introducción', link: '/1-introduccio' },
              { text: "2. Declaración de una función", link: '/2-declaracio' },
              { text: '3. Llamar a una función', link: '/3-crida' },
              { text: "4. Ámbito de las variables", link: '/4-ambit' },
              { text: "5. Parámetros: paso por valor y por referencia", link: '/5-parametres' },
              { text: "6. Devolución de un valor", link: "/6-devolucio" },
              { text: '7. Recursividad', link: '/7-recursivitat' },
              { text: '💡Ejemplos', link: '/8-exemples' },
              { text: '✏️Ejercicios', link: '/9-exercicis' },
            ]}
          ]
      }
    },
    ca: {
      label: 'Valencià',
      lang: 'ca-ES',
      link: '/ca/',
      title: 'U6 - Funcions',
      description: 'Unitat 6 on s\'aborden els conceptes bàsics de les funcions.',
      themeConfig: {
        siteTitle: 'Funcions',
        outline: { label: 'En aquesta pàgina' },
          docFooter: { prev: 'Anterior', next: 'Següent' },
          nav: [
            { text: '🏠 Inici', link: '/ca/index' },
            { text: '📚 Continguts', items: [
              { text: '1. Introducció', link: '/1-introduccio' },
              { text: "2. Declaració d'una funció", link: '/2-declaracio' },
              { text: '3. Cridar una funció', link: '/3-crida' },
              { text: "4. Àmbit de les variables", link: '/4-ambit' },
              { text: "5. Paràmetres: pas per valor i per referència", link: '/5-parametres' },
              { text: "6. Devolució d'un valor", link: "/6-devolucio" },
              { text: '7. Recursivitat', link: '/7-recursivitat' },
              { text: '💡Exemples', link: '/8-exemples' },
              { text: '✏️Exercicis', link: '/9-exercicis' },
            ]}
          ]
      }
    }
  },
  // Tema por idioma
  themeConfig: {
    logo: '/img/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GGEdu' }
    ],
    sidebar: {
      '/': [
        {
          text: '📚 Contenidos',
          items: [
            { text: '1. Introducción', link: '/1-introduccio' },
            { text: "2. Declaración de una función", link: '/2-declaracio' },
            { text: '3. Llamar a una función', link: '/3-crida' },
            { text: "4. Ámbito de las variables", link: '/4-ambit' },
            { text: "5. Parámetros: paso por valor y por referencia", link: '/5-parametres' },
            { text: "6. Devolución de un valor", link: "/6-devolucio" },
            { text: '7. Recursividad', link: '/7-recursivitat' },
            { text: '💡Ejemplos', link: '/8-exemples' },
            { text: '✏️Ejercicios', link: '/9-exercicis' },
          ]
        },
        { text: '📚 Contenidos adicionales', items: [
          { text: 'Convertir letra a número', link: '/10-add_lletranumero' },
          { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
          { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
        ]}
      ],
      '/ca/': [
        {
          text: '📚 Continguts',
          items: [
            { text: '1. Introducció', link: '/1-introduccio' },
            { text: "2. Declaració d'una funció", link: '/2-declaracio' },
            { text: '3. Cridar una funció', link: '/3-crida' },
            { text: "4. Àmbit de les variables", link: '/4-ambit' },
            { text: "5. Paràmetres: pas per valor i per referència", link: '/5-parametres' },
            { text: "6. Devolució d'un valor", link: "/6-devolucio" },
            { text: '7. Recursivitat', link: '/7-recursivitat' },
            { text: '💡Exemples', link: '/8-exemples' },
            { text: '✏️Exercicis', link: '/9-exercicis' },
          ]
        },
        { text: '📚 Continguts addicionals', items: [
          { text: 'Convertir lletra a número', link: '/10-add_lletranumero' },
          { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
          { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
        ]}
      ]
    },
    footer: {
      message: '<img src="/img/logo-autor.png" alt="Autor Principal" style="height:60px; margin: 0 auto; display:block;" />',
      copyright: 'Copyright © 2025'
    }
  }
})
