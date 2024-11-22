<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="submitLogin">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="form.username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="form.password" required>
        </div>
        <button type="submit">Log In</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'LoginForm',
    
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        errorMessage: '', 
      };
    },
    methods: {
      async submitLogin() {
        try {
          const response = await axios.post("http://localhost:8000/login/", this.form);
          if (response.data.success) {
            this.$router.push('/profile'); // Redirect to profile on successful login
          } else {
            this.errorMessage = response.data.message || "Login failed.";
          }
        } catch (error) {
          this.errorMessage = error.response?.data.errors || "An error occurred.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .login-form h2 {
    margin-bottom: 20px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  .form-group label {
    font-size: 14px;
    color: #555;
  }
  
  .form-group input[type="text"],
  .form-group input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
  }
  
  button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 15px;
  }
  </style>
  