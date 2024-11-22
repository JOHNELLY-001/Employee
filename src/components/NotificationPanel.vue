<template>
    <div class="notification-panel" v-if="isOpen">
      <div class="panel-header">
        <h3>Notifications</h3>
        <button @click="markAllAsRead">Mark All as Read</button>
        <button @click="clearNotifications">Clear All</button>
      </div>
      <ul class="notification-list">
        <li 
          v-for="notification in notifications" 
          :key="notification.id" 
          :class="{ unread: !notification.read }"
          @click="openNotification(notification)"
        >
          <span class="notification-content">{{ notification.message }}</span>
          <span class="notification-actions">
            <button @click.stop="markAsRead(notification)">Mark as Read</button>
            <button @click.stop="removeNotification(notification.id)">Delete</button>
          </span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: Boolean,
    },
    data() {
      return {
        notifications: [
          { id: 1, message: "Your transfer request has been approved.", read: false },
          { id: 2, message: "New message from Admin", read: true },
        ],
      };
    },
    methods: {
      markAllAsRead() {
        this.notifications.forEach((notification) => (notification.read = true));
      },
      clearNotifications() {
        this.notifications = [];
      },
      markAsRead(notification) {
        notification.read = true;
      },
      removeNotification(id) {
        this.notifications = this.notifications.filter((notif) => notif.id !== id);
      },
      openNotification(notification) {
        // Navigate to related content or handle further actions
        alert(`Navigating to: ${notification.message}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .notification-panel {
    position: absolute;
    top: 50px;
    right: 10px;
    width: 300px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }
  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notification-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .notification-list li {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  .notification-list li.unread {
    font-weight: bold;
  }
  .notification-actions button {
    margin-left: 5px;
  }
  </style>
  