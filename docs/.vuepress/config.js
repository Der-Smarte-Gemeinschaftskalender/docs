import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  description: 'Der Smarte Gemeinschaftskalender',

  theme: defaultTheme({
    logo: 'DSG%20Logo%20Dokumentaion.png',

    navbar: ['/', 'Termin'],
  }),

  bundler: viteBundler(),
})
