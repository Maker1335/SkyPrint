import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MaimPage.vue';
import Catalog from '../views/Catalog.vue';
import Product from '../views/Product.vue';
import Contacts from '../views/Contacts.vue';
import Portfolio from '../views/Portfolio.vue';

const base = '/SkyPrint1/dist';

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: MainPage,
    },
    {
        path: '/Catalog',
        name: 'catalog',
        component: Catalog,
    },
    {
        path: '/Product',
        name: 'product',
        component: Product,
    },
    {
        path: '/Contacts',
        name: 'contacts',
        component: Contacts,
    },
    {
        path: '/Portfolio',
        name: 'portfolio',
        component: Portfolio,
    },
    {
        path: '/:pathMatch(.*)*',  // Обрабатывает все несуществующие пути
        redirect: '/'  // Перенаправляет на главную страницу
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
