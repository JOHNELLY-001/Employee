<template>
    <div class="group-card" v-for="group in groups" :key="group.id">
      <h3>{{ group.name }}</h3>
      <p>{{ group.description }}</p>
      <p>Members: {{ group.membersCount }}</p>
      <button @click="joinGroup(group.id)">Join Group</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['groups'],
    methods: {
      joinGroup() {
        // Logic to join a group
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styling for group cards */
  .group-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 5px 0;
    text-align: left;
  }
  </style>
  