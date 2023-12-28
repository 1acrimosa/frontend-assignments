import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';


import vDashboard from './components/Dashboard.vue';
import vSaved from './components/Saved.vue';
import vCreators from './components/Creators.vue';
import vWallet from './components/Wallet.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: vDashboard },
        { path: '/saved', component: vSaved },
        { path: '/creators', component: vCreators },
        { path: '/wallet', component: vWallet },
    ],
});

createApp(App).use(router).mount('#app');
