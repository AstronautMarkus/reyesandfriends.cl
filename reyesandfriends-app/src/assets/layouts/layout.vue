<template>
  <div>
    <header>
      <h1>Site Header</h1>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>Site Footer</p>
    </footer>
  </div>
</template>

<script setup>
// ...existing code...
</script>

<style scoped>
header {
  background-color: #f5f5f5;
  padding: 1em;
  text-align: center;
}
footer {
  background-color: #f5f5f5;
  padding: 1em;
  text-align: center;
  margin-top: 2em;
}
</style>
