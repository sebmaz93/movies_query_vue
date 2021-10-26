import { createApp } from 'vue';

import { worker } from './mocks/browser';

// components
import App from './App.vue';

// styles
import './index.css';

worker.start();

createApp(App).mount('#app');
