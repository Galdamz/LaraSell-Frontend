import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './styles/index.css';
import 'nprogress/nprogress.css';
import store from './store/index';

createApp(App).use(router).use(store).mount('#app')
