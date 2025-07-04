//import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'ca-ES',
  title: 'UF6',
  description: 'Descripció',
  base: '/UF6',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
  head: [
    //['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    //['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    //['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }],
    //['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
  ],
  themeConfig: {
    siteTitle: 'Funcions',
    logo: '/img/logo.png',
    nav: [
      { text: '🏠 Inici', link: '/' },
      { text: '📋 Objectius', link: '/objectius' },
      { text: '📚 Continguts', items: [
        { text: '1. Introducció', link: '/1-introduccio' },
        { text: "2. Declaració d'una funció", link: "/2-declaracio" },
        { text: '3. Cridar una funció', link: '/3-crida' },
        { text: "4. Àmbit de les variables", link: '/4-ambit' },
        { text: "5. Paràmetres: pas per valor i per referència", link: '/5-parametres' },
          { text: "6. Devolució d'un valor", link: "/6-devolucio" },
        { text: '7. Recursivitat', link: '/7-recursivitat' },
        { text: 'Exemples', link: '/8-exemples' },
        { text: 'Exercicis', link: '/9-exercicis' },
      ]},
      { text: '📚 Continguts addicionals', items: [
        { text: 'Convertir lletra a número', link: '/10-add_lletranumero' },
      ]}
    ],
    sidebar: [
      {
        text: '📚 Continguts',
        items: [
          { text: '1. Introducció', link: '/1-introduccio' },
          { text: "2. Declaració d'una funció', link: '/2-declaracio" },
          { text: '3. Cridar una funció', link: '/3-crida' },
          { text: "4. Àmbit de les variables", link: '/4-ambit' },
          { text: "5. Paràmetres: pas per valor i per referència", link: '/5-parametres' },
          { text: "6. Devolució d'un valor", link: "/6-devolucio" },
          { text: '7. Recursivitat', link: '/7-recursivitat' },
          { text: 'Exemples', link: '/8-exemples' },
          { text: 'Exercicis', link: '/9-exercicis' },
        ]
      },
      { text: '📚 Continguts addicionals', items: [
        { text: 'Convertir lletra a número', link: '/10-add_lletranumero' },
        { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
        { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
      ]}
    ],
    socialLinks: [
      { icon: 'github', link: '' }
    ],
    footer: {
      message: "CEEDCV - Centre Específic d'Educació a Distància de la Comunitat Valenciana",
      copyright: 'Copyright © 2024-2025'
    },
    outline: {
      label: 'En aquesta pàgina'
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Següent'
    }
  }
})
