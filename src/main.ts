import { createApp } from 'vue'
import App from './App.vue'
import index from './router/index';

createApp(App).use(index).mount('#app')
