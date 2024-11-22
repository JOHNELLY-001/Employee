import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import HeaderPage from '../components/HeaderPage.vue';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import ProfilePage from '../components/ProfileCreation.vue';
import DashboardPage from '../components/DashboardPage.vue';
import ForumPage from '../components/ForumPage.vue';
import SignupForm from '../forms/SignupForm.vue';
import LoginForm from '../forms/LoginForm.vue';

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/header', name: 'HeaderPage', component: HeaderPage },
  { path: '/home', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/profile', name: 'ProfilePage', component: ProfilePage},
  { path: '/dashboard', name: 'DashboardPage', component: DashboardPage},
  { path: '/forum', name: 'ForumPage', component: ForumPage},
  { path: '/signup', name: 'SignupPage', component: SignupForm},
  { path: '/login', name: 'LoginForm', component: LoginForm},
  // Other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
