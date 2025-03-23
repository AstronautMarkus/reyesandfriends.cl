<script setup lang="ts">
import { useRoute } from 'vue-router'
import Layout from './assets/layouts/layout.vue'

const route = useRoute()
</script>

<template>
  <Layout>
    <transition :name="route.meta.transition || 'fade'">
      <router-view />
    </transition>
  </Layout>
</template>
