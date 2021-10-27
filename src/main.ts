import { createApp } from 'vue';

import { worker } from './mocks/browser';

// components
import App from './App.vue';

// styles
import './index.css';

worker.start({
  onUnhandledRequest: 'bypass',
});

createApp(App).mount('#app');
