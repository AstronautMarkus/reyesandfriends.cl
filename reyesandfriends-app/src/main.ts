import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/styles.scss';
import './assets/styles/transitions.css';

createApp(App).use(router).mount('#app')
