import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '../views/MaimPage.vue';
import Catalog from '../views/Catalog.vue';
import Product from '../views/Product.vue';
import Contacts from '../views/Contacts.vue';
import Portfolio from '../views/Portfolio.vue';

const base = '/SkyPrint1/dist';

const routes = [
    {
        path: `${base}/`,
        name: 'mainPage',
        component: MainPage,
    },
    {
        path: `${base}/Catalog`,
        name: 'catalog',
        component: Catalog,
    },
    {
        path: `${base}/Product`,
        name: 'product',
        component: Product,
    },
    {
        path: `${base}/Contacts`,
        name: 'contacts',
        component: Contacts,
    },
    {
        path: `${base}/Portfolio`,
        name: 'portfolio',
        component: Portfolio,
    },
    {
        path: '/:pathMatch(.*)*',  
        redirect: `${base}/`  
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
