<template>
    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: status + '%' }"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressBar',
    props: {
      status: { type: Number, required: true }, // Expected to be a percentage (0-100)
    },
  };
  </script>
  
  <style scoped>
  .progress-bar-container {
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    height: 20px;
  }
  
  .progress-bar {
    height: 100%;
    background-color: #4CAF50;
    width: 0;
    transition: width 0.3s ease-in-out;
  }
  </style>
  