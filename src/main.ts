import 'virtual:uno.css';
import '@unocss/reset/tailwind-compat.css';
import { createApp } from 'vue';
import './assets/styles.css';
import ApplicationRoot from './application-root.vue';
import router from './router';

const application = createApp(ApplicationRoot);
application.use(router);
application.mount('#app');
