<!-- SignupForm.vue -->
<template>
  <div class="signup-form">
    <h2>Sign Up</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="form.username" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="form.password1" required>
      </div>
      <div class="form-group">
        <label for="password2">Confirm Password:</label>
        <input type="password" v-model="form.password2" required>
      </div>
      <div class="form-group">
        <label for="location">Location:</label>
        <input type="text" v-model="form.location">
      </div>
      <div class="form-group">
        <label for="job_role">Job Role:</label>
        <input type="text" v-model="form.job_role">
      </div>
      <div class="form-group">
        <label for="profile_picture">Profile Picture:</label>
        <input type="file" @change="onFileChange">
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
// Import Axios for making HTTP requests
import axios from 'axios';

export default {
  name: 'SignupPage',

  data() {
    return {
      form: {
        username: '',
        email: '',
        password1: '',
        password2: '',
        location: '',
        job_role: '',
        profile_picture: null,
      },
    };
  },
  methods: {
    onFileChange(e) {
      this.form.profile_picture = e.target.files[0];
    },
    async submitForm() {
      const formData = new FormData();
      Object.keys(this.form).forEach((key) => {
        formData.append(key, this.form[key]);
      });

      try {
        const response = await axios.post("http://localhost:8000/signup/", formData);
        alert(response.data.message);
        this.$router.push('/home'); // Navigate to the home page on success
      } catch (error) {
        const errorMessage = error.response ? error.response.data.errors : 'An error occurred';
        alert("Error: " + JSON.stringify(errorMessage));
      }
    },
  },
};
</script>

<style scoped>
.signup-form {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.signup-form h2 {
  margin-bottom: 20px;
  color: #333;
  font-weight: bold;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"],
.form-group input[type="file"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  border-color: #007bff;
}

button[type="submit"] {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

.signup-form {
  text-align: left;
}
</style>
