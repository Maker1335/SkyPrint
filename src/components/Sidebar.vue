<template>
    <div class="sidebar">
        <router-link to="/">
            <img src="../assets/img/Sidebar/logo.svg" alt="Логотип компании" class="logo">
        </router-link>
        <ul class="service-list">
            <li v-for="category in categories" :key="category.name" @mouseover="setHoveredCategory(category.name)"
                @mouseleave="clearHoveredCategory">
                <a>
                    <img :src="category.img" :alt="category.name">
                    <p>{{ category.name }}</p>
                </a>
                <ul v-if="hoveredCategory === category.name && filteredProducts.length > 0" class="goods-list">
                    <router-link :to="{ name: 'Product', params: { id: product.id } }"
                        v-for="product in filteredProducts" :key="product.id">
                        <li class="goods-list_item">
                            <img class="goods-list_item_img" :src="product.img" alt="фото товара">
                            <p class="goods-list_item_title">
                                {{ product.name }}
                                <img class="goods-list_item_save" :src="product.save ? saveIconOn : saveIconOff"
                                    @click="toggleSave(product.id, $event)" alt="фото закладки">
                            </p>
                            <p class="goods-list_item_count">{{ product.count }}</p>
                        </li>
                    </router-link>
                </ul>
                <ul v-show="hoveredCategory === category.name && filteredProducts.length >= 0" v-else class="goods-list">
                    <li class="goods-list_item">
                        <img class="goods-list_item_img"
                            src="https://interkomitet.ru/wp-content/uploads/2022/12/Bez-imeni-1-400x320.jpg"
                            alt="фото товара" :style="{ width: '150px', height: '100%' }">
                        <p class="goods-list_item_title"
                            :style="{ color: '#27625F', fontWeight: 'bold', fontSize: '32px' }">
                            Нет товаров
                        </p>
                    </li>
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
import { useImagesStore } from './stores/imagesStore.js';
import Questionnaire from './Questionnaire.vue';

export default {
    name: 'Sidebar',
    components: {
        Questionnaire
    },
    data() {
        let ImagesStore = useImagesStore();
        return {
            hoveredCategory: null,
            isQuestionnaireOpen: false,
            categories: [
                { name: 'Визитки', img: ImagesStore.images.plasticCards },
                { name: 'Полиграфия', img: ImagesStore.images.leaflets },
                { name: 'Широкоформатная печать', img: ImagesStore.images.laserPrinting },
                { name: 'Копировальные услуги', img: ImagesStore.images.lamination },
                { name: 'Сувениры', img: ImagesStore.images.t_shirt },
                { name: 'Тиражирование', img: ImagesStore.images.replication },
                { name: 'Прочее', img: ImagesStore.images.studioPhotoPrinting },
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
        },
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
        },
        toggleSave(productId, event) {
            event.stopPropagation(); // Останавливаем всплытие события
            const productStore = useProductStore();
            productStore.toggleSave(productId);
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

        li {
            margin-bottom: 10px;
            border-radius: 8px;

            a {
                color: #010101;
                text-decoration: none;
                display: flex;
                align-items: center;
                background-color: #F4F4F4;
                border-radius: 5px;
                position: relative;
                transition: background-color 0.5s;
                padding-left: 15px;

                &:hover {
                    background: none;
                }

                p {
                    width: 156px;
                }

                img {
                    height: 80px;
                    width: auto;
                }

                &::after {
                    content: '';
                    position: absolute;
                    right: 27px;
                    border: solid #8E8E8E;
                    border-width: 0 3px 3px 0;
                    display: inline-block;
                    padding: 3px;
                    transform: rotate(-45deg);
                    -webkit-transform: rotate(-45deg);
                    transition: border 0.5s ease;
                }
            }

            &:hover {
                background-image: url("../assets/img/background.png");
                background-size: cover;

                a {
                    &::after {
                        transition: border 0.5s ease;
                        border: solid #27625F;
                        border-width: 0 3px 3px 0;
                    }
                }
            }

        }

        .goods-list {
            position: absolute;
            top: 88px;
            background-color: white;
            gap: 10px;
            padding: 10px;
            max-height: 700px;
            height: 638px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            opacity: 0;
            visibility: hidden;
            width: max-content;
            border-radius: 8px;
            box-sizing: border-box;

            box-shadow: 16px 3px 19px rgba(0, 0, 0, 0.08), 3px 2px 8px rgba(0, 0, 0, 0.2);

            a {
                text-decoration: none;
                height: 94px;
                padding: 0;

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
            //transition: all 1s ease-out;
            //max-width: 1500px;
            opacity: 1;
            visibility: visible;
            overflow: hidden;
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
            background-image: url("../assets/img/background.png");
            opacity: 0;
            background-size: cover;
            transition: opacity 0.5s;
        }

        &:hover::before {
            opacity: 1;
            border-radius: 5px;
        }

        p {
            margin-left: 18px;
            z-index: 1;
        font-weight: bold;
    }

        &::after {
            content: '';
            position: absolute;
            right: 27px;
            border: solid #27625F;
            border-width: 0 3px 3px 0;
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
                        height: 64px;
                    }
                }
            }
            .goods-list {
            top: 70px;
            height: 518px;
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
