<template>
  <header class="header">
    <div class="header-content">
      <!-- Logo -->
      <div class="logo">Employee Transfer App</div>

      <!-- Centered Navigation Links -->
      <nav class="nav-links">
        <router-link to="/home" >Home</router-link>
        <router-link to="/about" >About</router-link>
        <a href="#dashboard">Dashboard</a>
        <a href="#forum">Forum</a>
      </nav>

      <!-- Right-aligned Notification and Profile Menu -->
      <div class="right-menu">
        <i class="notification-icon fas fa-bell" @click="viewNotifications"></i>
        <div class="profile-menu" @click="toggleDropdown">
          <img src="path/to/profile-image.jpg" alt="Profile" class="profile-image" />
          <span class="username">John Doe</span>
          <div v-if="dropdownVisible" class="dropdown">
            <ul>
              <li><a href="#profile">My Profile</a></li>
              <li><a href="#settings">Settings</a></li>
              <li><a href="#logout" @click="logout">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      dropdownVisible: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    logout() {
      alert('Logged out!');
    },
    viewNotifications() {
      // Handle notification click logic
      alert('Viewing notifications');
    }
  },
};
</script>

<style scoped>
/* Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
}

.header-content {
  display: flex;
  align-items: center;
  width: 100%;
}

/* Logo and Navigation Styles */
.logo {
  font-size: 1.5em;
  font-weight: bold;
  margin-right: auto;
}

.nav-links {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center; /* Center the nav links */
}

.nav-links a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
}

/* Right Menu (Notifications + Profile) */
.right-menu {
  display: flex;
  align-items: center;
}

.notification-icon {
  font-size: 1.2em;
  color: white;
  margin-right: 20px;
  cursor: pointer;
}

.profile-menu {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.profile-image {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 8px;
}

.username {
  font-weight: bold;
}

/* Dropdown Styles */
.dropdown {
  position: absolute;
  right: 0;
  top: 50px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown ul li {
  border-bottom: 1px solid #f0f0f0;
}

.dropdown ul li:last-child {
  border-bottom: none;
}

.dropdown ul li a {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  transition: background 0.3s;
}

.dropdown ul li a:hover {
  background-color: #f5f5f5;
}
</style>
