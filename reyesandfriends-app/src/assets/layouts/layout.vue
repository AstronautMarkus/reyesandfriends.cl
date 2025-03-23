<template>
  <div class="layout">
    <Navbar />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from "../../components/Navbar/Navbar.vue";
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

</style>
