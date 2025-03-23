<template>
  <div class="layout">
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '../../components/Navbar/Navbar.vue';
</script>