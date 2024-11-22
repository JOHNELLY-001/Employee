<template>
    <div class="forum-feed">
      <div class="forum-actions">
        <button @click="createPost">Create New Post</button>
        <select v-model="sortBy" @change="sortPosts">
          <option value="recent">Recent</option>
          <option value="popular">Popular</option>
          <option value="category">Category</option>
        </select>
      </div>
  
      <div v-for="post in sortedPosts" :key="post.id" class="post-card">
        <h4>{{ post.user.name }}</h4>
        <p>{{ formatDate(post.timestamp) }}</p>
        <p>{{ post.contentPreview }}</p>
        <div class="post-actions">
          <button @click="likePost(post.id)">Like</button>
          <button @click="commentPost(post.id)">Comment</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [], // Post data from the backend
        sortBy: 'recent', // Default sorting criterion
      };
    },
    computed: {
      sortedPosts() {
        return this.posts; // Just return the posts array, sorting handled in method
      },
    },
    methods: {
      createPost() {
        // Open create post modal
      },
      likePost() {
        // Logic to like the post
      },
      commentPost() {
        // Open comment section for the post
      },
      sortPosts() {
        // Sort posts based on the selected criterion
        if (this.sortBy === 'recent') {
          this.posts.sort((a, b) => b.timestamp - a.timestamp);
        } else if (this.sortBy === 'popular') {
          this.posts.sort((a, b) => b.likes - a.likes);
        } else if (this.sortBy === 'category') {
          // Placeholder logic for category sorting
        }
      },
      formatDate(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString(); // Convert timestamp to a readable date format
      },
    },
  };
  </script>
  
  <style scoped>
  /* Basic styling for the forum feed */
  .forum-feed {
    margin: 20px;
  }
  .forum-actions {
    display: flex;
    justify-content: space-between;
  }
  .post-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
  }
  .post-actions button {
    margin-right: 5px;
  }
  </style>
  