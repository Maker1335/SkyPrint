import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './components/router/index.js';

const options = {
    
};

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(Toast, options);
app.mount('#app');