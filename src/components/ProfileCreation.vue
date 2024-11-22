<template>
    <div class="profile-creation">
      <h1>Profile Creation & Customization</h1>
      
      <div class="tabs">
        <button 
          v-for="(tab, index) in tabs" 
          :key="index" 
          @click="activeTab = index" 
          :class="{ active: activeTab === index }"
        >
          {{ tab.name }}
        </button>
      </div>
  
      <form @submit.prevent="submitForm">
        <div v-if="activeTab === 0" class="tab-content">
          <h2>Personal Info</h2>
          <label>Full Name</label>
          <input type="text" v-model="profile.fullName" required />
  
          <label>Email Address</label>
          <input type="email" v-model="profile.email" required />
  
          <label>Phone Number</label>
          <input type="tel" v-model="profile.phone" required />
  
          <label>Date of Birth</label>
          <input type="date" v-model="profile.dob" />
  
          <label>Profile Picture</label>
          <input type="file" @change="onFileChange" />
  
          <label>National ID or Employee ID</label>
          <input type="text" v-model="profile.nationalId" />
        </div>
  
        <div v-if="activeTab === 1" class="tab-content">
          <h2>Job Details</h2>
          <label>Current Job Role</label>
          <input type="text" v-model="profile.jobRole" />
  
          <label>Current Job Location</label>
          <input type="text" v-model="profile.jobLocation" />
  
          <label>Years of Experience</label>
          <input type="number" v-model="profile.yearsExperience" />
  
          <label>Job Category</label>
          <input type="text" v-model="profile.jobCategory" />
  
          <label>Employer Name</label>
          <input type="text" v-model="profile.employerName" />
        </div>
  
        <div v-if="activeTab === 2" class="tab-content">
          <h2>Transfer Preferences</h2>
          <label>Preferred Transfer Location</label>
          <input type="text" v-model="profile.transferLocation" />
  
          <label>Preferred Job Role</label>
          <input type="text" v-model="profile.preferredRole" />
  
          <label>Earliest Transfer Date</label>
          <input type="date" v-model="profile.earliestTransferDate" />
  
          <label>Reasons for Transfer</label>
          <select v-model="profile.transferReason">
            <option>Family Relocation</option>
            <option>Career Growth</option>
            <option>Personal Preference</option>
          </select>
  
          <label>Other Transfer Preferences</label>
          <textarea v-model="profile.otherPreferences"></textarea>
        </div>
  
        <div v-if="activeTab === 3" class="tab-content">
          <h2>Visibility & Notification Settings</h2>
          <label>
            <input type="checkbox" v-model="profile.visibility" />
            Profile Visibility (Public/Private)
          </label>
  
          <label>
            <input type="checkbox" v-model="profile.notifications.transferMatches" />
            Transfer Matches
          </label>
  
          <label>
            <input type="checkbox" v-model="profile.notifications.profileViews" />
            Profile Views
          </label>
  
          <label>
            <input type="checkbox" v-model="profile.notifications.messages" />
            Messages from Other Users
          </label>
  
          <label>
            <input type="checkbox" v-model="profile.privacy" />
            Restrict certain personal details from being viewed
          </label>
        </div>
  
        <button type="submit" class="cta-button">Save Profile</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
  name: "ProfilePage",
    data() {
      return {
        activeTab: 0,
        tabs: [
          { name: 'Personal Info' },
          { name: 'Job Details' },
          { name: 'Transfer Preferences' },
          { name: 'Visibility & Notifications' }
        ],
        profile: {
          fullName: '',
          email: '',
          phone: '',
          dob: '',
          nationalId: '',
          jobRole: '',
          jobLocation: '',
          yearsExperience: null,
          jobCategory: '',
          employerName: '',
          transferLocation: '',
          preferredRole: '',
          earliestTransferDate: '',
          transferReason: '',
          otherPreferences: '',
          visibility: false,
          notifications: {
            transferMatches: false,
            profileViews: false,
            messages: false,
          },
          privacy: false,
        }
      };
    },
    methods: {
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.profile.profilePicture = URL.createObjectURL(file);
        }
      },
      submitForm() {
        // Handle form submission logic
        console.log('Profile saved:', this.profile);
        alert('Profile saved successfully!');
      }
    }
  };
  </script>
  
  <style scoped>
  .profile-creation {
    max-width: 800px;
    margin: auto;
  }
  
  .tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .tabs button {
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    background-color: #f0f0f0;
    border-radius: 5px;
  }
  
  .tabs button.active {
    background-color: #4CAF50;
    color: white;
  }
  
  .tab-content {
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    background-color: #ffffff;
  }
  
  label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
  }
  
  input, select, textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .cta-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1em;
    font-weight: bold;
    border: none;
    color: white;
    background-color: #4CAF50;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .cta-button:hover {
    background-color: #45a049;
  }
  </style>
  