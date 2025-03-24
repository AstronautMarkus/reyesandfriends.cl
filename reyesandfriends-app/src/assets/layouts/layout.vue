<script setup>
import Navbar from '../../components/Navbar/Navbar.vue';
import Footer from '../../components/Footer/Footer.vue';
</script>

<template>
  <div class="layout">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex-grow: 1;
}
</style>