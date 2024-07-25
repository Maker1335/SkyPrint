<template>
    <div class="product-page">
        <Header />
        <!-- <div class="path">
            <p><a href="#">Каталог</a> <a href="#">Печать визиток</a> <a href="#">Цифровая печать</a></p>
        </div> -->
        <div class="wrapper">
            <div class="product">
                <p class="product_title">Ручки</p>
                <div class="product_front">
                    <div class="product_front_img-wrapper">
                        <img src="../../assets/img/goods/pens.svg" alt="фото товара" class="product_front_img" />
                    </div>

                    <p class="product_front_description">
                        Интересный развития. Соображения идейные направлений высшего финансовых нашей и по позволяет
                        задача
                        постоянный постоянный позволяет прогрессивного прогрессивного плановых идейные роль структура
                        нашей
                        равным рамки рост административных нашей же и в развития. Рост и значение равным существенных
                        форм
                        количественный нашей активности и модель интересный играет идейные отношении реализации же
                        постоянный.
                    </p>
                </div>
                <div class="product_info">
                    <div class="product_info_estimated-cost">
                        <p class="product_info_estimated-cost_price">10 400 &#8381;</p>
                        <p class="product_info_estimated-cost_title">Ориентировочная стоимость</p>
                    </div>
                    <table class="product_info_table">
                        <tr class="product_info_dimensions">
                            <td>Размеры</td>
                            <td> 50 х 90 мм, 90 х 100 мм, 40 х 80 мм, 200 х 150 мм, 200 х 150 мм, 50 х 150 мм</td>
                        </tr>
                        <tr class="product_info_paper-type">
                            <td>Тип бумаги</td>
                            <td>Мелованная 100-300/м2, Фактурная 100-300/м2, Цветная 100-300/м2</td>
                        </tr>
                        <tr class="product_info_print-type">
                            <td>Тип печати</td>
                            <td>Полноцветная с одной стороны</td>
                        </tr>
                        <tr class="product_info_lamination">
                            <td>Ламинация</td>
                            <td>Матовая, глянцевая</td>
                        </tr>
                        <tr class="product_info_angles">
                            <td>Углы</td>
                            <td>Скругленные, без скругления</td>
                        </tr>
                    </table>
                    <div class="product_info_additional">
                        <div class="product_info_additional_paragraphs">
                            <p @click="togglePrices" class="product_info_additional_prices">Цены</p>
                            <p @click="toggleRequirements" class="product_info_additional_requirements-for-layouts">
                                Требования к
                                макетам</p>
                        </div>
                        <transition name="fade">
                            <div v-if="showPrices" class="product_info_additional_content">
                                <table>
                                    <tr>
                                        <th>Наименование</th>
                                        <th>Цена</th>
                                    </tr>
                                    <tr>
                                        <td>Позиция 1</td>
                                        <td>1000 &#8381;</td>
                                    </tr>
                                    <tr>
                                        <td>Позиция 2</td>
                                        <td>2000 &#8381;</td>
                                    </tr>
                                </table>
                            </div>
                        </transition>
                        <transition name="fade">
                            <div v-if="showRequirements" class="product_info_additional_content">
                                <p @click="toggleSection(1)">1. К печати принимаются макеты в следующих программах</p>
                                <ol v-show="activeSection === 1">
                                    <li>COREL DRAW (до 17 версии) – cdr, eps.</li>
                                    <li>Adobe Photoshop (CC) – psd, tiff, jpg, bmp.</li>
                                    <li>Adobe Acrobat – pdf</li>
                                    <li><button
                                            @click="copyText('COREL DRAW (до 17 версии) – cdr, eps.\nAdobe Photoshop (CC) – psd, tiff, jpg, bmp.\nAdobe Acrobat – pdf')">Копировать</button>
                                    </li>
                                </ol>

                                <p @click="toggleSection(2)">2. Общие требования</p>
                                <ol v-show="activeSection === 2">
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Porro ab mollitia ad veniam libero possimus dolores harum.</li>
                                    <li><button
                                            @click="copyText('Lorem ipsum dolor sit amet consectetur adipisicing elit.\nPorro ab mollitia ad veniam libero possimus dolores harum.')">Копировать</button>
                                    </li>
                                </ol>

                                <p @click="toggleSection(3)">3. Требования к растру и вектору</p>
                                <ol v-show="activeSection === 3">
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Porro ab mollitia ad veniam libero possimus dolores harum.</li>
                                    <li><button
                                            @click="copyText('Lorem ipsum dolor sit amet consectetur adipisicing elit.\nPorro ab mollitia ad veniam libero possimus dolores harum.')">Копировать</button>
                                    </li>
                                </ol>
                            </div>
                        </transition>
                    </div>
                    <div class="product_info_buttons">
                        <button class="product_info_buttons_submit-application">Оставить заявку</button>
                        <button class="product_info_buttons_designer-services">Услуги дизайнера</button>
                    </div>
                </div>
            </div>
            <Slider :titleText="sliderText" />
        </div>
    </div>
</template>

<script>
import Header from '../header.vue';
import { useToast } from 'vue-toastification';

import Slider from '../Slider.vue';

export default {
    name: 'Product',
    components: {
        Header,
        Slider
    },
    data() {
        return {
            showPrices: false,
            showRequirements: false,
            activeSection: null,
            sliderText: "Другие категории",
        };
    },
    methods: {
        togglePrices() {
            this.showPrices = !this.showPrices;
            if (this.showPrices) this.showRequirements = false; // Закрываем требования, если открыты цены
        },
        toggleRequirements() {
            this.showRequirements = !this.showRequirements;
            if (this.showRequirements) this.showPrices = false; // Закрываем цены, если открыты требования
        },
        toggleSection(section) {
            this.activeSection = this.activeSection === section ? null : section;
        },
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
    }
}
</script>

<style lang="scss" scoped>
$goodsBG: "../../assets/img/background.png";

.product-page {
    color: #27625f;

    .path {
        margin-top: 24px;

        a {
            text-decoration: none;
            color: #27625f;
        }
    }

    .product {
        display: grid;
        grid-template-columns: 477px 17px 1fr;
        grid-template-areas: "title title title" "front . info";
        margin-top: 49px;

        &_title {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 26px;
        }

        &_front {
            grid-area: front;
            position: relative;

            &_img-wrapper {
                position: relative;
                width: 477px;
                height: 477px;
                background-image: url('../../assets/img/background.png');
                background-size: cover;
                border-radius: 8px;
            }

            &_img {
                width: 100%;
                height: 100%;
                position: relative;
                z-index: auto;
            }


            &_description {
                font-size: 16px;
                margin-top: 20px;
            }
        }

        &_info {
            grid-area: info;

            &_estimated-cost {
                display: flex;
                flex-direction: column;
                font-weight: bold;

                &_title {
                    font-size: 24px;
                }

                &_price {
                    font-size: 75px;
                }
            }

            &_table {
                width: 100%;
                border-collapse: collapse;
                font-size: 16px;
                margin-top: 20px;

                tr {
                    border-bottom: 1px solid #a0b6b5;
                    display: flex;

                    td {
                        width: 50%;
                        font-size: 16px;
                        padding: 20px 30px;

                        &:last-child {
                            font-weight: bold;
                        }
                    }
                }
            }

            &_additional {
                display: flex;
                flex-direction: column;
                font-weight: bold;
                font-size: 16px;
                margin-top: 20px;
                margin-left: 37px;

                &_paragraphs {
                    display: flex;
                    gap: 32px;
                }

                &_prices,
                &_requirements-for-layouts {
                    cursor: pointer;
                }

                &_content {
                    margin-top: 20px;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;


                    p {
                        margin-left: 20px;
                        position: relative;
                        cursor: pointer;
                        font-size: 20px;
                        font-weight: bold;

                        &::after {
                            content: "";
                            border: 2px solid #27625F;
                            border-width: 0 3px 3px 0;
                            display: inline-block;
                            padding: 3px;
                            -webkit-transform: rotate(45deg);
                            position: absolute;
                            top: 5px;
                            margin-left: 16px;
                        }
                    }

                    ol {
                        display: flex;
                        flex-direction: column;
                        margin-top: 17px;
                        margin-bottom: 17px;

                        li {
                            list-style: decimal;
                            margin-left: 60px;

                            &:last-child {
                                list-style: none;
                            }

                            button {
                                cursor: pointer;
                                margin-top: 10px;
                                color: #27625F;
                                font-size: 16px;
                                background: none;
                                border: none;
                                border-bottom: 1px solid #27625F;
                            }
                        }
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        font-size: 16px;

                        tr {
                            border-bottom: 1px solid #a0b6b5;
                            display: flex;

                            td {
                                width: 50%;
                                font-size: 16px;
                                padding: 20px 30px;

                                &:last-child {
                                    font-weight: bold;
                                }
                            }

                            th {
                                width: 50%;
                                font-size: 16px;
                                padding: 20px 30px;
                            }
                        }
                    }
                }

            }

            &_buttons {
                display: flex;
                margin-top: 40px;
                gap: 33px;

                button {
                    cursor: pointer;
                    width: 50%;
                    height: 122px;
                    font-size: 21px;
                    font-weight: bold;
                    color: #27625F;
                    border-radius: 8px;
                    position: relative;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    border: none;

                    &::after {
                        content: "";
                        border: solid #27625F;
                        border-width: 0 4px 4px 0;
                        display: inline-block;
                        padding: 4px;
                        -webkit-transform: rotate(-45deg);

                    }
                }

                &_submit-application {
                    background-color: #CEFFFD;

                    &:hover {
                        background-color: #EAEAEA;
                        transition: background-color 0.5s;
                    }
                }

                &_designer-services {
                    background-color: #EAEAEA;

                    &:hover {
                        background-color: #CEFFFD;
                        transition: background-color 0.5s;
                    }
                }
            }
        }


        .fade-enter-active,
        .fade-leave-active {
            max-height: 1000px;
            opacity: 1;
            transition: max-height 0.5s ease, opacity 0.5s ease-out;
        }

        .fade-enter,
        .fade-leave-to {
            max-height: 0;
            opacity: 0;
        }
    }
}

.slider {
    margin-top: 100px;
}
</style>