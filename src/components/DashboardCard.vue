<template>
    <div class="dashboard-card">
      <i :class="icon"></i>
      <h4>{{ title }}</h4>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardCard',
    props: {
      title: { type: String, required: true },
      content: { type: String, required: true },
      icon: { type: String, required: false }, // Optional icon class
    },
  };
  </script>
  
  <style scoped>
  .dashboard-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .dashboard-card i {
    font-size: 2rem;
    color: #4CAF50;
    margin-bottom: 0.5rem;
  }
  
  .dashboard-card h4 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }
  
  .dashboard-card p {
    margin: 0;
    color: #555;
  }
  </style>
  