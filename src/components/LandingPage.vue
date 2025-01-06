<template>
    <div>
      <!-- Top Bar -->
      <header class="top-bar">
        <div class="container">
          <div class="logo">Employee Transfer Portal</div>
          <nav class="navbar">
            <ul>
              <li><router-link to="/signup" class="btn-signup">Sign Up</router-link></li>
              <li><router-link to="/login" class="btn-login">Log in</router-link></li>
            </ul>
          </nav>
        </div>
      </header>
  
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Simplify Your Job Transfer Process</h1>
          <p>Connect with employees who want to transfer their job location. Effortless. Fast. Secure.</p>
          
        </div>
      </section>
  
      <!-- How It Works Section -->
      <section id="how-it-works" class="features">
        <div class="container">
          <h2>How It Works</h2>
          <div class="steps">
            <div class="step">
              <h3>Step 1</h3>
              <p>Sign up and create a profile.</p>
            </div>
            <div class="step">
              <h3>Step 2</h3>
              <p>List your current job location and desired transfer location.</p>
            </div>
            <div class="step">
              <h3>Step 3</h3>
              <p>Get matched with others seeking to swap positions.</p>
            </div>
            <div class="step">
              <h3>Step 4</h3>
              <p>Complete your transfer request online.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section id="testimonials" class="testimonials">
        <div class="container">
          <h2>What Our Users Say</h2>
          <div class="testimonial">
            <p>"This app made my job transfer process so much easier!"</p>
            <h4>- John Doe, Teacher</h4>
          </div>
          <div class="testimonial">
            <p>"I found a perfect match and transferred within a month!"</p>
            <h4>- Jane Smith, Engineer</h4>
          </div>
        </div>
      </section>
  
      <!-- FAQ Section -->
      <section id="faq" class="faq">
        <div class="container">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li><strong>How do I create an account?</strong><p>Click the Sign-Up button and follow the instructions.</p></li>
            <li><strong>Who can use this platform?</strong><p>Any employee looking to transfer job locations can use the platform.</p></li>
          </ul>
        </div>
      </section>
  
      <!-- Footer Section -->
      <footer class="footer">
        <div class="container">
          <div class="footer-links">
            <a href="#faq">FAQ</a> | <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
          </div>
          <div class="footer-contact">
  <p>Contact Us: info@employeetransferapp.com</p>
  <div class="social-media-icons">
    <a href="https://facebook.com" target="_blank" aria-label="Facebook">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com" target="_blank" aria-label="Twitter">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
      <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="https://instagram.com" target="_blank" aria-label="Instagram">
      <i class="fab fa-instagram"></i>
    </a>
  </div>
</div>

        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
  };
  </script>
  
  <style scoped>
  /* Basic CSS for the page */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  /* Top bar */
  .top-bar {
    background-color: #005f73;
    color: white;
    padding: 15px 0;
  }
  
  .container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .navbar ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .navbar ul li a {
    color: white;
    text-decoration: none;
  }
  
  .navbar ul li a:hover {
    text-decoration: underline;
  }
  
  .btn-signup {
    background-color: #007bff;
    padding: 8px 16px;
    color: white;
    border-radius: 5px;
  }
  
  .btn-login {
    padding: 8px 16px;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
  }
  
  /* Hero Section */
  .hero {
    background: url('/src/assets/pexels-photo-853168.webp') no-repeat center center/cover;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 49px;
    margin-bottom: 50px;
  }
  
  .hero-content p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  
  .hero-buttons a {
    margin: 0 10px;
    padding: 10px 20px;
    text-decoration: none;
    color: white;
    border-radius: 5px;
  }
  
  .btn-primary {
    background-color: #007bff;
  }
  
  .btn-secondary {
    background-color: #005f73;
  }
  
  /* Features Section */
  .features {
    padding: 60px 0;
    background-color: #f0f0f0;
  }
  
  .features h2 {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .steps {
    display: flex;
    justify-content: space-around;
  }
  
  .step h3 {
    text-align: center;
    margin-bottom: 10px;
  }
  
  /* Testimonials Section */
  .testimonials {
    background-color: #e0f7fa;
    padding: 60px 0;
    text-align: center;
  }
  
  /* FAQ Section */
  .faq {
    padding: 60px 0;
    background-color: #f8f9fa;
  }
  
  .faq ul {
    list-style: none;
  }
  
  .faq li {
    margin-bottom: 15px;
  }
  
  /* Footer Section */
  .footer {
    background-color: #005f73;
    color: white;
    text-align: center;
    padding: 20px 0;
  }

  /* Social Media Icons in the Footer */
.social-media-icons {
  margin-top: 10px;
}

.social-media-icons a {
  color: white;
  margin: 0 10px;
  font-size: 24px;
  text-decoration: none;
}

.social-media-icons a:hover {
  color: #007bff; /* Change color on hover */
}
  
  .footer-links a {
    color: white;
    text-decoration: none;
  }
  
  .footer-contact {
    margin-top: 10px;
  }
  </style>
  