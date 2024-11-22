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
          <img src="/src/assets/pexels-rezapandidan-632125.jpg" alt="Profile" class="profile-image" />
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

    <div class="about-page">
      <!-- Platform Introduction -->
      <section class="platform-intro">
        <h1>About Employee Transfer Platform</h1>
        <p>Our mission is to streamline employee transfers by connecting professionals who are looking for location flexibility and new opportunities.</p>
      </section>
  
      <!-- Core Values -->
      <section class="core-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>Transparency</li>
          <li>User Empowerment</li>
          <li>Community Engagement</li>
          <li>Professional Growth</li>
        </ul>
      </section>
  
      <!-- How the App Solves Problems -->
      <section class="problem-solution">
        <h2>How We Help You</h2>
        <p>We simplify the transfer process by removing traditional HR barriers and connecting professionals with matching goals.</p>
      </section>
  
      <!-- Meet the Team -->
      <section class="meet-team">
        <h2>Meet the Team</h2>
        <div class="team-member">
          <img src="src\assets\pexels-photo-853168.webp" alt="Team Member" />
          <p>John Doe - CEO</p>
        </div>
        <!-- Add more team members here -->
      </section>
  
      <!-- Contact Information -->
      <section class="contact-info">
        <h2>Contact Us</h2>
        <p>Email: info@employeetransferapp.com</p>
        <p>Phone: +123 456 7890</p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
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
  /* Style for About Page */
  .about-page h1, .about-page h2 {
    color: #3b82f6;
  }
  
  .platform-intro, .core-values, .problem-solution, .meet-team, .contact-info {
    padding: 40px 20px;
    text-align: center;
  }
  
  .team-member {
    display: inline-block;
    margin: 20px;
    text-align: center;
  }
  
  .team-member img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  
  .contact-info {
    background-color: #f1f5f9;
    padding: 20px;
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
  