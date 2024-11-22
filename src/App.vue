<template>
  <div id="app">
    <router-view /> <!-- Loads components based on the current route -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Base Styling */
body, html {
  margin: 0;
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
}

/* Utility Classes */
.cta-button {
  font-size: 1em;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #2563eb; /* Slightly darker shade for hover effect */
}
</style>
