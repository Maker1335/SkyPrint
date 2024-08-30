<template>
    <div class="sidebar">
        <router-link to="/">
            <img src="../assets/img/Sidebar/logo.svg" alt="Логотип компании" class="logo">
        </router-link>
        <ul class="service-list">
            <li v-for="category in categories" :key="category.name" @mouseover="setHoveredCategory(category.name)"
                @mouseleave="clearHoveredCategory">
                <a href="#">
                    <img :src="category.img" :alt="category.name">
                    <p>{{ category.name }}</p>
                </a>
                <ul v-if="hoveredCategory === category.name" class="goods-list">
                    <router-link :to="{ name: 'Product', params: { id: product.id } }"
                        v-for="product in filteredProducts" :key="product.id">
                        <li class="goods-list_item">
                            <img class="goods-list_item_img" :src="product.img" alt="фото товара">
                            <p class="goods-list_item_title">
                                {{ product.name }}
                                <img class="goods-list_item_save" :src="product.save ? saveIconOn : saveIconOff"
                                    alt="фото закладки">
                            </p>
                            <p class="goods-list_item_count">{{ product.count }}</p>
                        </li>
                    </router-link>
                </ul>
            </li>
        </ul>
        <a class="contact-link" @click="toggleMenu">
            <p>Связаться с менеджером</p>
        </a>
        <Questionnaire :isOpen="isQuestionnaireOpen" :toggleMenu="toggleMenu" />
        <router-link to="/designServices" class="designer-link">
            <p>Услуги дизайнера</p>
        </router-link>
    </div>
</template>

<script>
import { useProductStore } from './stores/products.js';
import saveIconOn from '../assets/img/header/save.svg';
import saveIconOff from '../assets/img/header/saveOff.svg';

import businessСards from '../assets/img/goods/img/businessСards.svg';
import printing from '../assets/img/goods/img/printing.svg';
import notepads from '../assets/img/goods/img/notepads.svg';
import lamination from '../assets/img/goods/img/lamination.svg';
import pens from '../assets/img/goods/img/pens.svg';
import canvases from '../assets/img/goods/img/canvases.svg';

import Questionnaire from './Questionnaire.vue';

export default {
    name: 'Sidebar',
    components: {
        Questionnaire
    },
    data() {
        return {
            hoveredCategory: null,
            isQuestionnaireOpen: false,
            categories: [
                { name: 'Визитки', img: businessСards },
                { name: 'Полиграфия', img: printing },
                { name: 'Широкоформатная печать', img: notepads },
                { name: 'Копировальные услуги', img: lamination },
                { name: 'Сувениры', img: pens },
                { name: 'Тиражирование', img: canvases },
                { name: 'Прочее', img: notepads },
            ]
        }
    },
    computed: {
        products() {
            const productStore = useProductStore();
            return productStore.products;
        },
        filteredProducts() {
            return this.products.filter(product => product.category === this.hoveredCategory);
        },
        saveIconOn() {
            return saveIconOn;
        },
        saveIconOff() {
            return saveIconOff;
        }
    },
    methods: {
        setHoveredCategory(category) {
            this.hoveredCategory = category;
        },
        clearHoveredCategory() {
            this.hoveredCategory = null;
        },
        toggleMenu() {
            this.isQuestionnaireOpen = !this.isQuestionnaireOpen;
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    position: sticky;
    top: 38px;
    width: 331px;
    height: 850px;
    background-color: #FFFFFF;
    color: white;
    display: flex;
    flex-direction: column;
    margin-top: 38px;
    margin-right: 36px;
    margin-left: 34px;
    z-index: 1;

    .logo {
        width: 178px;
        height: 74px;
        margin-bottom: 20px;
    }

    .service-list {
        list-style-type: none;
        width: 100%;
        position: relative;

        li {
            margin-bottom: 10px;

            a {
                color: #010101;
                text-decoration: none;
                display: flex;
                align-items: center;
                background-color: #F4F4F4;
                border-radius: 5px;
                position: relative;
                transition: background-color 0.5s;

                &:hover {
                    background: none;
                }

                p {
                    width: 156px;
                }

                img {
                    height: 75px;
                    width: 112px;
                }

                &::after {
                    content: '';
                    position: absolute;
                    right: 10px;
                    border: solid #8E8E8E;
                    border-width: 0 2px 2px 0;
                    display: inline-block;
                    padding: 3px;
                    transform: rotate(-45deg);
                    -webkit-transform: rotate(-45deg);
                }
            }

            &:hover {
                background-image: url("../assets/img/background.png");
                background-size: cover;
            }

        }

        .goods-list {
            position: absolute;
            top: 0;
            max-width: 0px;
            background-color: white;
            transition: left 0.5s ease;
            display: grid;
            grid-template-columns: repeat(2, auto);
            gap: 8px;
            padding: 10px;
            visibility: hidden;
            opacity: 0;
            min-height: 580px;

            a {
                text-decoration: none;
                height: 103px;

                &::after {
                    content: none;
                }
            }

            &_item {
                display: grid;
                background-color: #F4F4F4;
                grid-template-areas: "img title"
                    "img count";
                width: 272px;
                margin: 0px;
                align-items: center;
                height: 100%;

                &_img {
                    grid-area: img;
                    width: 87px;
                    height: 87px;
                    grid-row: span 2;
                }

                &_title {
                    grid-area: title;
                    font-size: 16px;
                    color: black;
                    width: 166px;
                    display: flex;
                    justify-content: space-between;
                }

                &_count {
                    grid-area: count;
                    font-size: 16px;
                    color: #27625F;
                    font-weight: 600;
                }

                &_save {
                    width: 13px;
                    height: 16px;
                }
            }
        }

        &:hover .goods-list {
            left: 100%;
            transition: all 0.5s ease;
            max-width: 1000px;
            opacity: 1;
            visibility: visible;
        }

    }

    .contact-link,
    .designer-link {
        display: flex;
        color: #27625F;
        text-decoration: none;
        background-color: #F4F4F4;
        border-radius: 5px;
        text-align: center;
        width: 331px;
        height: 75px;
        margin-top: 10px;
        position: relative;
        font-weight: bold;
        align-items: center;
        transition: background-image 0.5s;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('../../src/assets/img/background.png');
            opacity: 0;
            background-size: cover;
            transition: opacity 0.5s;
        }

        &:hover::before {
            opacity: 1;
        }

        p {
            margin-left: 18px;
            z-index: 1;
        }

        &::after {
            content: '';
            position: absolute;
            right: 10px;
            border: solid #8E8E8E;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 3px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
        }
    }
}

@media (max-width: 1367px) {
    .sidebar {
        width: 294px;
        height: 800px;
        margin-right: 17px;
        margin-left: 16px;

        .logo {
            width: 117px;
            height: 49px;
        }

        .service-list {
            li {
                a {
                    height: 64px;

                    img {
                        width: 81px;
                        height: 64px;
                    }
                }
            }
        }

        .contact-link,
        .designer-link {
            width: 294px;
            height: 64px;
        }
    }
}
</style>
