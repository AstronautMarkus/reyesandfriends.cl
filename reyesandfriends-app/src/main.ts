import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'
import './assets/styles.scss';
import './assets/styles/transitions.css';

const app = createApp(App);
app.use(router);
app.mount("#app");
