import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
app.use(router); // Use the router in the app
app.mount('#app');
