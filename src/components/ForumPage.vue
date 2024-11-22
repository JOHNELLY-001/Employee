<template>
    <div class="forum-page">
      <ForumFeed />
      <div class="discussion-groups">
        <DiscussionGroupCard :groups="groups" />
      </div>
    </div>
  </template>
  
  <script>
  import ForumFeed from './ForumFeed.vue';
  import DiscussionGroupCard from './DiscussionGroup.vue';
  
  export default {
  name: "ForumPage",
    components: {
      ForumFeed,
      DiscussionGroupCard,
    },
    data() {
      return {
        groups: [
          { id: 1, name: 'Marketing Jobs', description: 'Discussions on marketing roles', membersCount: 150 },
          { id: 2, name: 'IT Sector', description: 'Tech jobs and opportunities', membersCount: 300 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Basic grid layout for forum page */
  .forum-page {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
  }
  .discussion-groups {
    display: flex;
    flex-direction: column;
  }
  </style>
  