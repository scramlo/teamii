/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';
import { createPinia } from 'pinia'

// Plugins
import { registerPlugins } from '@/plugins';
import vuetify from './plugins/vuetify';

// Router
import router from './router';

const pinia = createPinia();
const app = createApp(App);

registerPlugins(app);

app
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app');
