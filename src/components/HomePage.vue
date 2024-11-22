<template>

<header class="header">
    <div class="header-content">
      <!-- Logo -->
      <div class="logo">Employee Transfer App</div>

      <!-- Centered Navigation Links -->
      <nav class="nav-links">
        <router-link to="/home" >Home</router-link>
        <router-link to="/about" >About</router-link>
        <router-link to="/dashboard" >Dashboard</router-link>
        <router-link to="/forum" >Forum</router-link>
      </nav>

      <!-- Right-aligned Notification and Profile Menu -->
      <div class="right-menu">
        <i class="notification-icon fas fa-bell" @click="toggleNotificationPanel"></i>
        <NotificationPanel :isOpen="isNotificationPanelOpen" />
        <div class="profile-menu" @click="toggleDropdown">
          <img src="path/to/profile-image.jpg" alt="Profile" class="profile-image" />
          <span class="username">John Doe</span>
          <div v-if="dropdownVisible" class="dropdown">
            <ul>
              <li> <router-link to="/profile" >My Profile</router-link></li>
              <li><a href="#settings">Settings</a></li>
              <li><a href="#logout" @click="logout">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>

    <div class="home-page">
      <!-- Hero Banner -->
      <section class="hero-banner">
        <div class="hero-content">
          <h1>Effortlessly Connect and Transfer with Ease</h1>
          <p>Find your next career step or location match without the hassle.</p>
          <button @click="exploreDashboard" class="cta-button">Explore Your Dashboard</button>
        </div>
      </section>
  
      <!-- Core Features -->
      <section class="core-features">
        <h2>Our Key Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <i class="fas fa-user-cog"></i>
            <h3>Seamless Profile Customization</h3>
            <p>Customize preferences and manage transfer settings effortlessly.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-tachometer-alt"></i>
            <h3>Personalized Dashboard</h3>
            <p>Get updates on transfer status and recent matches.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-bell"></i>
            <h3>Notifications</h3>
            <p>Stay on top of transfer and connection opportunities.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-comments"></i>
            <h3>Interactive Forum</h3>
            <p>Engage with other professionals, share tips, and join discussions.</p>
          </div>
        </div>
      </section>
  
      <!-- Testimonials -->
      <section class="testimonials">
        <h2>What Our Users Say</h2>
        <div class="testimonial-carousel">
          <p>"This platform has made my transfer process so much easier!" - Alex J.</p>
          <!-- Add more testimonials here or use a carousel component -->
        </div>
      </section>
  
      <!-- Quick Guide -->
      <section class="quick-guide">
        <h2>How It Works</h2>
        <ul>
          <li>Create a profile with your job details and preferences.</li>
          <li>Match with a transfer opportunity that suits you.</li>
          <li>Get notified and finalize your transfer seamlessly.</li>
        </ul>
      </section>
  
      <!-- Footer CTA -->
      <section class="footer-cta">
        <h2>Ready to Customize Your Profile?</h2>
        <button @click="updateProfile" class="cta-button">Update Your Profile</button>
      </section>
    </div>
  </template>
  
  <script>
import NotificationPanel from '../components/NotificationPanel.vue';

  export default {
    name: "HomePage",

    components: { NotificationPanel },
    data() {
    return {
      dropdownVisible: false,
      isNotificationPanelOpen: false,
    };
  },
    methods: {
      toggleNotificationPanel() {
      this.isNotificationPanelOpen = !this.isNotificationPanelOpen;
    },

      exploreDashboard() {
        // Navigation logic to go to dashboard
      },
      updateProfile() {
        // Navigation logic to go to profile update page
      },
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
    }
  };
  </script>
  
  <style scoped>
  /* Style for Hero Banner */
  .hero-banner {
    background: url('/src/assets/pexels-rezapandidan-632125.jpg') no-repeat center center;
    background-size: cover;
    color: white;
    padding: 60px 20px;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 2.5em;
  }
  
  .cta-button {
    background-color: #3b82f6;
    color: #fff;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .cta-button:hover {
    background-color: #2563eb;
  }
  
  /* Core Features Section */
  .core-features {
    text-align: center;
    padding: 40px 20px;
  }
  
  .features-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .feature-card {
    width: 200px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    text-align: center;
  }
  
  .testimonials, .quick-guide, .footer-cta {
    padding: 40px 20px;
    text-align: center;
  }

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
  