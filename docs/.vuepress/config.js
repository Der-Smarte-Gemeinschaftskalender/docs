import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'de-DE',
  description: 'Der Smarte Gemeinschaftskalender',

  theme: defaultTheme({
    logo: 'DSG%20Logo%20Dokumentaion.png',

    navbar: ['/'],
  }),

  bundler: viteBundler(),
})
