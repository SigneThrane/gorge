import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import i18n from './i18n'; // Import the Vue I18n instance
import './registerServiceWorker';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n); // Add the i18n plugin to the app

app.mount('#app');
