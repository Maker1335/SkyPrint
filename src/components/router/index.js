import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router';
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

const routes = [
    {
        path: `/`,
        name: 'mainPage',
        component: MainPage,
    },
    {
        path: `/katalog-produktsii`,
        name: 'catalog',
        component: Catalog,
    },
    {
        path: '/product/:name',
        name: 'Product',
        component: Product,
        props: true
    },
    {
        path: `/kontakty`,
        name: 'contacts',
        component: Contacts,
    },
    {
        path: `/portfolio`,
        name: 'portfolio',
        component: Portfolio,
    },
    {
        path: `/trebovaniya-k-maketam`,
        name: 'requirements',
        component: Requirements,
    },
    {
        path: `/o-kompanii`,
        name: 'aboutUs',
        component: AboutUs,
    },
    {
        path: `/oplata`,
        name: 'payment',
        component: Payment,
    },
    {
        path: `/dostavka`,
        name: 'delivery',
        component: Delivery,
    },
    {
        path: `/katalog-produktsii/dizayn/dizayn`,
        name: 'designServices',
        component: DesignServices,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;
