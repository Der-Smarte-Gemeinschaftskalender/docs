<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { usePageFrontmatter } from 'vuepress/client'
import SiteFooter from '../components/SiteFooter.vue'

const frontmatter = usePageFrontmatter()
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <SiteFooter />
    </template>
  </ParentLayout>

  <!-- Die Startseite rendert VPHome, das keinen page-bottom-Slot besitzt -->
  <SiteFooter v-if="frontmatter.home" />
</template>
