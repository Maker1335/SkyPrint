<template>
    <div :class="['header', { 'menu-open': isMenuOpen }]">
        <div class="wrapper">
            <div class="linkList">
                <ul class="linkList_left">
                    <li><router-link to="/">Главная</router-link></li>
                    <li><router-link to="/catalog">Каталог</router-link></li>
                    <li><router-link to="/aboutUs">О нас</router-link></li>
                    <li><router-link to="/payment">Оплата</router-link></li>
                    <li><router-link to="/requirements">Требования к макету</router-link></li>
                    <li><router-link to="/delivery">Доставка</router-link></li>
                    <li><router-link to="/DesignServices">Услуги дизайнера</router-link></li>
                    <li><router-link to="/contacts">Контакты</router-link></li>
                </ul>
                <ul class="linkList_right">
                    <li class="save">
                        <a href="#">
                            <p><img class="save_img" src="../../src/assets/img/header/save.svg" alt="save">
                                {{ savedProducts.length }}</p>
                        </a>
                        <ul class="save_list">
                            <li v-if="savedProducts.length >= 1" v-for="product in savedProducts" :key="product.id"
                                class="save_item">
                                <img class="save_item_img" :src="product.img" alt="">
                                <p class="save_item_title">{{ product.name }} <img :src="product.save" alt=""></p>
                                <p class="save_item_count">{{ product.count }}</p>
                            </li>
                            <li v-if="savedProducts.length == 0" class="save_item">
                                <p
                                    style="color: #27625F;  width: auto; position: absolute; top: 50%; left: 50%;transform: translate(-50%, -50%); font-weight: bold; font-size: 24px;">
                                    Нет товаров</p>
                            </li>
                        </ul>
                    </li>
                    <li class="email"><a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=example@example.com&su=Hello&body=Message%20body"><img
                                src="../../src/assets/img/header/email.svg" alt="email"></a> </li>
                    <li class="phone"><a href="#"><img src="../../src/assets/img/header/phone.svg" alt="phone"></a>
                        <ul class="phone_list">
                            <li><button @click="copyText('7(351)248-72-87')"> <img
                                        src="../../src/assets/img/header/phone1.svg" alt="phone"> </button></li>
                            <li><a href="https://t.me/skyprint174_bot"><img
                                        src="../../src/assets/img/header/telegram.svg" alt="telegram"></a></li>
                            <li><a href="https://vk.com/skyprint74"><img src="../../src/assets/img/header/vk.svg"
                                        alt="vk"></a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <BurgerMenu @toggle-menu="handleMenuToggle" />
        </div>
    </div>
</template>

<script>
import { useToast } from "vue-toastification";
import { computed } from 'vue';
import { useProductStore } from './stores/products.js';
import BurgerMenu from './BurgerMenu.vue';
export default {
    name: 'Header',
    components: {
        BurgerMenu
    },
    data() {
        return {
            isMenuOpen: false
        }
    },
    setup() {
        const store = useProductStore();
        const savedProducts = computed(() => store.products.filter(product => product.save));
        if (savedProducts.value.length > 0) {
            savedProducts.value = "нет товаров"
        }
        return {
            savedProducts
        }
    },
    methods: {
        copyText(text) {
            navigator.clipboard.writeText(text).then(() => {
                this.showToast('Текст скопирован!');
            }).catch(() => {
                this.showToast('Ошибка копирования');
            });
        },
        showToast(message) {
            const toast = useToast();
            toast.success(message, {
                position: "top-right",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: false,
                pauseOnHover: false,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false
            });
        },
        handleMenuToggle(isOpen) {
            this.isMenuOpen = isOpen;
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    background: #EFEFEF;
    border-radius: 0 0 0 10px;

    .wrapper {
        height: 85px;
    }

    .linkList {
        height: 100%;
        display: flex;
        justify-content: space-between;

        &_left {
            width: 75%;
        }

        &_right {
            width: 15%;
        }
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

        li {
            font-size: 16px;
            color: #27625F;

            a {
                text-decoration: none;
                color: #27625F
            }
        }

        .save {
            padding: 10px 20px;
            border: 1px solid #27625F;
            border-radius: 5px;
            transition: background-color 0.5s;
            position: relative;

            &_img {
                width: 12px;
                height: 16px;
            }

            p {
                display: flex;
                align-items: center;
                gap: 5px;
            }

            &:hover {
                border: 1px solid white;
                background-color: white;
            }

            &:hover .save_list {
                opacity: 1;
                pointer-events: auto;
                z-index: 2;
            box-shadow: 16px 3px 19px rgba(0, 0, 0, 0.08), 3px 2px 8px rgba(0, 0, 0, 0.2);

            }

            &_list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                position: absolute;
                top: 40px;
                right: 0;
                background-color: white;
                list-style-type: none;
                padding: 20px;
                border-radius: 5px;
                height: auto;
                opacity: 0;
                transition: opacity 0.5s;
                pointer-events: none;
            }

            &_item {
                display: grid;
                background-color: #F4F4F4;
                grid-template-columns: 87px 1fr;
                grid-template-areas: "img title"
                    "img count";
                width: 272px;
                height: 103px;

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
                    justify-content: space-between;
                }

                &_count {
                    grid-area: count;
                    font-size: 16px;
                    color: #489B93;
                    font-weight: 600;
                }
            }

        }

        .phone {
            position: relative;

            .phone_list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                position: absolute;
                top: 0;
                right: -5px;
                background-color: black;
                padding: 0;
                margin: 0;
                list-style-type: none;
                border-radius: 30px;
                width: 24px;
                background: #fff;
                opacity: 0;
                height: 0;
                overflow: hidden;
                transition: opacity 1s ease, height 0.5s ease;

                li {
                    img {
                        width: 20px;
                        height: 20px;
                    }
                }

                button {
                    background: none;
                    border: none;
                    cursor: pointer;
                }
            }

            &:hover .phone_list {
                opacity: 1;
                height: 120px;
                padding: 5px;

            }
        }

        .search-container {
            position: relative;
            width: 100%;
            max-width: 478px;

            .search-icon {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                color: #aaa;
                width: 15px;
                height: 15px;
            }

            .search-input {
                width: 100%;
                padding: 10px 10px 10px 35px;
                border: 1px solid #27625F;
                border-radius: 10px;
                font-size: 16px;
                background: none;
                box-sizing: border-box;
            }

            .search-input::placeholder {
                color: #aaa;
            }
        }

    }

}

@media (max-width: 1367px) {
    .header {
        .wrapper {
            height: 65px;
        }

        ul {
            li {
                font-size: 14px;
            }

            .search-container {
                max-width: 227px;
            }

            //.email,
            //.phone {
            //    display: none;
            //}
        }
    }
}

//@media (max-width: 361px) {
@media (max-width: 700px) {
    .header {
        width: 100%;
        .linkList {
            height: 0px;
        }

        &.menu-open {
            background-color: #EFEFEF;
        }

        ul {
            display: none;
        }

        :deep .burger-menu-container {
            visibility: visible;
        }
    }
}
</style>
