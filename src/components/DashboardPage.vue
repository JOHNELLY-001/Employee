<template>
    <div class="dashboard">
      <!-- Overview Card Grid -->
      <section class="overview-grid">
        <DashboardCard
          v-for="card in overviewCards"
          :key="card.id"
          :title="card.title"
          :content="card.content"
          :icon="card.icon"
        />
      </section>
  
      <!-- Transfer Progress Bar -->
      <section class="transfer-progress">
        <h3>Transfer Status</h3>
        <progress-bar :status="transferStatus" />
      </section>
  
      <!-- News & Employment Stats -->
      <section class="news-stats">
        <div class="news">
          <h3>Latest News</h3>
          <ul>
            <li v-for="article in news" :key="article.id">{{ article.title }}</li>
          </ul>
        </div>
  
        <div class="employment-stats">
          <h3>Employment Opportunities</h3>
          <ul>
            <li v-for="opportunity in employmentStats" :key="opportunity.id">
              {{ opportunity.title }} - {{ opportunity.details }}
            </li>
          </ul>
        </div>
      </section>
  
      <!-- Career Development Tips -->
      <section class="career-development">
        <h3>Career Development</h3>
        <ul>
          <li v-for="tip in careerTips" :key="tip.id">{{ tip }}</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  // Import necessary components
  import DashboardCard from '../components/DashboardCard.vue';
  import ProgressBar from '../components/ProgressBar.vue';
  
  export default {
    name: 'DashboardPage',
    components: {
      DashboardCard,
      ProgressBar,
    },
    data() {
      return {
        // Static data for overview cards; can be updated dynamically
        overviewCards: [
          { id: 1, title: 'Transfer Status', content: 'In Process', icon: 'status-icon' },
          { id: 2, title: 'Potential Matches', content: '3 New Matches', icon: 'match-icon' },
          { id: 3, title: 'Recent Activity', content: 'Profile Viewed 10 times', icon: 'activity-icon' },
        ],
        transferStatus: 50, // Dynamic transfer progress
        news: [], // Array to store news articles from backend
        employmentStats: [], // Array to store job openings or market data
        careerTips: [], // Array to store career development tips
      };
    },
    created() {
      this.fetchNews();
      this.fetchEmploymentStats();
      this.fetchCareerTips();
    },
    methods: {
      // Simulate API call to fetch latest news
      async fetchNews() {
        try {
          // Simulated backend call
          const response = await fetch('/api/news');
          this.news = await response.json();
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      },
      // Simulate API call to fetch employment statistics
      async fetchEmploymentStats() {
        try {
          // Simulated backend call
          const response = await fetch('/api/employment-stats');
          this.employmentStats = await response.json();
        } catch (error) {
          console.error('Error fetching employment stats:', error);
        }
      },
      // Simulate API call to fetch career development tips
      async fetchCareerTips() {
        try {
          // Simulated backend call
          const response = await fetch('/api/career-tips');
          this.careerTips = await response.json();
        } catch (error) {
          console.error('Error fetching career tips:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
  
  /* Overview Card Grid styling */
  .overview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  /* Transfer Progress section styling */
  .transfer-progress {
    text-align: center;
  }
  
  /* News & Employment Stats section styling */
  .news-stats {
    display: flex;
    justify-content: space-between;
  }
  
  .news, .employment-stats, .career-development {
    flex: 1;
    margin: 0 1rem;
  }
  </style>
  