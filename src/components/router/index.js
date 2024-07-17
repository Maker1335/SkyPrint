import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '../views/MaimPage.vue';
import Catalog from '../views/Catalog.vue';
import Product from '../views/Product.vue';
import Contacts from '../views/Contacts.vue';
import Portfolio from '../views/Portfolio.vue';
import Requirements from '../views/Requirements.vue';
import AboutUs from '../views/AboutUs.vue';
import Payment from '../views/Payment.vue';
import Delivery from '../views/Delivery.vue';
import DesignServices from '../views/DesignServices.vue';

const base = '/SkyPrint1/dist';

const routes = [
    {
        path: `/`,
        name: 'mainPage',
        component: MainPage,
    },
    {
        path: `/Catalog`,
        name: 'catalog',
        component: Catalog,
    },
    {
        path: `/Product`,
        name: 'product',
        component: Product,
    },
    {
        path: `/Contacts`,
        name: 'contacts',
        component: Contacts,
    },
    {
        path: `/Portfolio`,
        name: 'portfolio',
        component: Portfolio,
    },
    {
        path: `/Requirements`,
        name: 'requirements',
        component: Requirements,
    },
    {
        path: `/AboutUs`,
        name: 'aboutUs',
        component: AboutUs,
    },
    {
        path: `/Payment`,
        name: 'payment',
        component: Payment,
    },
    {
        path: `/Delivery`,
        name: 'delivery',
        component: Delivery,
    },
    {
        path: `/DesignServices`,
        name: 'designServices',
        component: DesignServices,
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
