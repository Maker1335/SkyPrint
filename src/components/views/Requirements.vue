<template>
    <Header />
    <div class="requirements">
        <h2>Как избежать ошибки вашего файла при печати?</h2>
        <div class="requirements_files-for-printing">
            <h3>К печати принимаються следующие файлы</h3>
            <div class="cards">
                <div class="card">
                    <img src="../../assets/img/pages/Requirements/balloon.svg" alt="фото" class="card_img">
                    <div class="card_description description">
                        <p class="description_app-name">CorelDRAW</p>
                        <p class="description_file-type">cdr, eps</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../assets/img/pages/Requirements/acrobat.svg" alt="фото" class="card_img">
                    <div class="card_description description">
                        <p class="description_app-name">Acrobat</p>
                        <p class="description_file-type">pdf</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../assets/img/pages/Requirements//Ps.svg" alt="фото" class="card_img">
                    <div class="card_description description">
                        <p class="description_app-name">Photoshop</p>
                        <p class="description_file-type">psd, tiff, jpg, bmp</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../assets/img/pages/Requirements/AI.svg" alt="фото" class="card_img">
                    <div class="card_description description">
                        <p class="description_app-name">Illustrator</p>
                        <p class="description_file-type">ai, pdf</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="layout-requirements">
            <div class="cards">
                <div class="card">
                    <p class="card_title">Общие требования</p>
                    <p class="card_file-type"></p>
                    <ol>
                        <li>Масштаб изображения 1:1.</li>
                        <li>Вылеты за обрезной формат (припуски) – 2,5 мм с каждой стороны.</li>
                        <li>Влеты (расстояние до значимых элементов: текст, логотип и т.д.) – 4 мм с каждой стороны.
                        </li>
                        <li>При печати на фактурной (дизайнерской) бумаге, краска может ложиться неравномерно! Поэтому
                            стоит избегать полной заливки.</li>
                        <li>Черный цвет должен быть составнойС:75 M:75 Y:75 K:75.</li>
                    </ol>
                    <button
                        @click="copyText('Масштаб изображения 1:1.\nВылеты за обрезной формат (припуски) – 2,5 мм с каждой стороны.\nВлеты (расстояние до значимых элементов: текст, логотип и т.д.) – 4 мм с каждой стороны.\nПри печати на фактурной (дизайнерской) бумаге, краска может ложиться неравномерно! Поэтому стоит избегать полной заливки.\nЧерный цвет должен быть составнойС:75 M:75 Y:75 K:75.')">Копировать</button>
                </div>
                <div class="card">
                    <p class="card_title">Требования к вектору</p>
                    <p class="card_file-type">eps, cdr</p>
                    <ol>
                        <li>Все изображения представлены в цветовой модели CMYK с разрешением  не менее 300 dpi.</li>
                        <li>Эффекты (прозрачности, тени, градиент) должны быть растрированы 300 dpi.</li>
                        <li>Текст должен быть переведен в кривые.</li>
                    </ol>
                    <button
                        @click="copyText('Все изображения представлены в цветовой модели CMYK с разрешением  не менее 300 dpi.\nЭффекты (прозрачности, тени, градиент) должны быть растрированы 300 dpi.\nТекст должен быть переведен в кривые.')">Копировать</button>
                </div>
                <div class="card">
                    <p class="card_title">Требования к растру</p>
                    <p class="card_file-type">psd, tiff, jpg</p>
                    <ol>
                        <li>Файл должен быть с разрешением  не менее 300 dpi.</li>
                        <li>Файл должен быть представлен в цветовоймодели CMYK.</li>
                        <li>Файл не должен содержать слоев,альфа-каналов.</li>
                    </ol>
                    <button
                        @click="copyText('Файл должен быть с разрешением не менее 300 dpi. \nФайл должен быть представлен в цветовоймодели CMYK.\nФайл не должен содержать слоев, альфа - каналов.')">Копировать</button>
                </div>
            </div>
            <button class="layout-requirements_download">Скачать требования к макетам</button>
        </div>
        <div class="feedback">
            <h4>Нет макета? Наши дизайнеры помогут!</h4>
            <div class="feedback_form">
                <div class="form">
                    <input type="text" placeholder="Имя" class="form_input">
                    <input type="phone" placeholder="Телефон" class="form_input">
                    <input type="email" placeholder="Почта" class="form_input">
                    <label class="form_checkbox"><input type="checkbox"> Нажимая кнопку "Отправить", я соглашаюсь с
                        условиями <a href="#">пользовательского соглашения</a> </label>
                    <button class="form_button">Отправить</button>
                </div>
                <div class="contact-manager" :class="{ selected: selectedContact === 'manager' }"
                    @click="selectContact('manager')">
                    <p>
                        Связаться с менеджером
                        <img v-if="selectedContact === 'manager'"
                            src="../../assets/img/pages/MainPage/Feedback/checkmark.svg" alt="галочка" />
                    </p>
                </div>
                <div class="contact-designer" :class="{ selected: selectedContact === 'designer' }"
                    @click="selectContact('designer')">
                    <p>
                        Связаться с дизайнером
                        <img v-if="selectedContact === 'designer'"
                            src="../../assets/img/pages/MainPage/Feedback/checkmark.svg" alt="галочка" />
                    </p>
                </div>
            </div>
        </div>
        <div class="describe-your-order">
            <h3>Опишите свой заказ</h3>
            <div class="cards">
                <div class="card">
                    <p class="card_title">Формат продукции с указанием размеров (визитка, брошюра, листовка и т.д.)</p>
                    <img src="../../assets/img/pages/Requirements/1.svg" alt="фото" class="card_img">
                </div>
                <div class="card">
                    <p class="card_title">Краткое описание того, чем вы занимаетесь, какая целевая аудитория, а также
                        ссылки на сайт или социальные сети.</p>
                    <img src="../../assets/img/pages/Requirements/2.svg" alt="фото" class="card_img">
                </div>
                <div class="card">
                    <p class="card_title">Цвета и шрифты, которые нужно использовать.Если у вас есть фирменный шрифт, то
                        просим описать его и приложить образцы.</p>
                    <img src="../../assets/img/pages/Requirements/3.svg" alt="фото" class="card_img">
                </div>
                <div class="card">
                    <p class="card_title">Срок выполнения. Будет замечательно, если вы приложите примеры/образцыили даже
                        зарисовки от руки, как вы видите макет. Если у вас есть брендбук,будем благодарны, если вы его
                        нам пришлете.</p>
                    <img src="../../assets/img/pages/Requirements/4.svg" alt="фото" class="card_img">
                </div>
                <div class="card">
                    <p class="card_title">Чем больше информации вы укажете в ТЗ, тем быстрее и качественнее будет
                        разработан макет.</p>
                    <img src="../../assets/img/pages/Requirements/book.jpg" alt="фото" class="card_img">
                </div>
            </div>
        </div>
        <div class="slider">
            <h3>Вам понравиться</h3>
            <div class="slider-container">
                <swiper :slides-per-view="5" :space-between="9" :autoplay="{ delay: 5000, disableOnInteraction: false }"
                    :loop="true" :modules="modules" class="mySwiper">
                    <swiper-slide class="product">
                        <img :src="rollUpImage" alt="фото товара" />
                        <p>Roll-up</p>
                    </swiper-slide>
                    <swiper-slide class="product">
                        <img :src="notepadsImage" alt="фото товара" />
                        <p>Блокноты</p>
                    </swiper-slide>
                    <swiper-slide class="product">
                        <img :src="canvasesImage" alt="фото товара" />
                        <p>Холсты</p>
                    </swiper-slide>
                    <swiper-slide class="product">
                        <img :src="businessCardsImage" alt="фото товара" />
                        <p>Визитки</p>
                    </swiper-slide>
                    <swiper-slide class="product">
                        <img :src="laminationImage" alt="фото товара" />
                        <p>Ламинирование</p>
                    </swiper-slide>
                    <swiper-slide class="product">
                        <img :src="pensImage" alt="фото товара" />
                        <p>Ручки</p>
                    </swiper-slide>
                </swiper>
                <div class="all-categories">
                    <p class="all-categories_text">Все категории </p>
                    <p class="all-categories_arrow">&gt;</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../header.vue';
import { useToast } from 'vue-toastification';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import rollUpImage from '../../assets/img/goods/RollUp.svg';
import notepadsImage from '../../assets/img/goods/notepads.svg';
import canvasesImage from '../../assets/img/goods/canvases.svg';
import businessCardsImage from '../../assets/img/goods/businessСards.svg';
import laminationImage from '../../assets/img/goods/lamination.svg';
import pensImage from '../../assets/img/goods/pens.svg';

export default {
    name: 'Requirements',
    components: {
        Header,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            selectedContact: 'manager', // Начальное состояние
            modules: [Autoplay],
            rollUpImage,
            notepadsImage,
            canvasesImage,
            businessCardsImage,
            laminationImage,
            pensImage
        };
    },
    methods: {
        selectContact(contact) {
            this.selectedContact = contact;
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
    },
}
</script>

<style lang="scss" scoped>
$goodsBG: "../../assets/img/background.png";

.requirements {
    color: #27625F;

    h2 {
        font-size: 50px;
        font-weight: bold;
        width: 800px;
        margin-bottom: 90px;
    }

    &_files-for-printing {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 100px;

        h3 {
            font-size: 30px;
            font-weight: bold;
            width: 373px;
        }

        .cards {
            display: flex;
            flex-wrap: wrap;
            gap: 22px;

            .card {
                display: flex;
                flex-direction: column;
                width: 180px;
                height: 180px;
                border-radius: 8px;
                justify-content: space-between;
                padding: 20px;
                background-color: #F5F5F5;

                &_img {
                    width: 35px;
                    height: 35px;
                }

                .description {
                    &_app-name {
                        font-size: 16px;
                        font-weight: bold;
                    }

                    &_description {
                        font-size: 16px;
                        font-weight: bold;
                        color: #7D7D7D;
                    }
                }
            }

        }
    }

    .layout-requirements {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-bottom: 90px;

        .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 22px;

            .card {
                display: flex;
                flex-direction: column;
                width: auto;
                height: 100%;
                border-radius: 8px;
                background-color: #F5F5F5;
                position: relative;
                padding: 24px;
                box-sizing: border-box;
                gap: 8px;
                padding-bottom: 110px;

                &_title {
                    font-size: 30px;
                    font-weight: bold;
                }

                &_file-type {
                    font-size: 20px;
                    font-weight: bold;
                    color: #A1A1A1;
                }

                ol {
                    display: flex;
                    flex-direction: column;
                    list-style-type: decimal;
                    margin-left: 20px;
                    gap: 18px;

                    li {
                        list-style: decimal;
                        font-size: 18px;
                        font-weight: bold;
                        color: #27625F;
                    }
                }

                button {
                    position: absolute;
                    bottom: 24px;
                    right: 40px;
                    cursor: pointer;
                    color: #27625F;
                    font-size: 16px;
                    background: none;
                    border: none;
                    border-bottom: 1px solid #27625F;
                }

                &:first-child {
                    background-color: #CEFFFD;
                }
            }
        }

        &_download {
            font-size: 20px;
            font-weight: bold;
            height: 80px;
            border: none;
            background-color: #F5F5F5;
            border-radius: 8px;
            cursor: pointer;

        }
    }

    .feedback {
        display: flex;
        flex-direction: column;
        background: #CEFFFD;
        padding: 30px;
        margin-bottom: 100px;

        h4 {
            font-size: 50px;
            font-weight: bold;
            color: #27625F;
            width: 600px;
            margin-bottom: 47px;
        }

        &_form {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(1, 1fr);
            grid-gap: 10px;

            .form {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                grid-template-rows: repeat(5, 1fr);
                grid-gap: 10px;

                &_input {
                    width: 474px;
                    height: 65px;
                    border-radius: 5px;
                    font-size: 16px;
                    color: #80AAA8;
                    padding-left: 10px;
                    background: #FFFFFF;
                    border: 0px;
                }

                &_checkbox {
                    font-size: 16px;
                    color: #27625F;
                    width: 402px;
                }

                &_button {
                    width: 474px;
                    height: 62px;
                    border-radius: 5px;
                    background: none;
                    font-size: 20px;
                    color: #27625F;
                    transition: all 0.5s;

                    &:hover {
                        background-image: url("../../assets/img/background.png");
                        background-size: cover;
                        color: #FFFFFF;
                    }
                }
            }

            .contact-manager,
            .contact-designer {
                width: 474px;
                height: 356px;
                border-radius: 5px;
                background-color: none;
                transition: background-color 0.5s;

                p {
                    padding: 20px;
                    font-size: 20px;
                    color: #27625F;
                    font-weight: bold;
                }

            }

            .selected {
                background-color: #FFFFFF;
            }
        }
    }

    .describe-your-order {
        display: grid;
        grid-template-columns: auto 1fr;
        margin-bottom: 50px;

        h3 {
            font-size: 30px;
            font-weight: bold;
            width: 100%;
        }

        .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 24px;

            .card {
                display: flex;
                flex-direction: column;
                gap: 8px;
                width: 462px;
                height: 272px;
                background-color: #F5F5F5;
                position: relative;
                padding: 28px;
                box-sizing: border-box;

                &_title {
                    font-size: 16px;
                    font-weight: bold;
                    z-index: 1;
                }

                &_img {
                    position: absolute;
                    bottom: 30px;
                    right: 45px;
                    width: 40px;
                    height: 67px;

                    &:last-child {
                        width: 56px;
                        height: 49px;
                    }
                }

                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url("../../assets/img/background.png");
                    background-size: cover;
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }

                &:hover {
                    &::before {
                        opacity: 1;
                    }
                }
            }
        }
    }

    .slider {
        h3{
            font-size: 30px;
            font-weight: bold;
        }
        .slider-container {
            width: 100%;
            display: grid;
            grid-template-columns: auto 232px;
            justify-content: center;
            margin-top: 9px;
            gap: 9px;
    
            .swiper {
                width: 100%;
            }
    
            .swiper-slide {
                text-align: start;
                font-size: 18px;
                background-color: #F4F4F4;
                width: 232px;
                height: 256px;
                position: relative;
                overflow: hidden;
                transition: background-color 0.5s ease;
                border-radius: 8px;
    
                p {
                    font-size: 17px;
                    font-weight: bold;
                    color: #27625f;
                    padding: 10px 20px;
                    z-index: 1;
                }
    
                img {
                    width: 233px;
                    height: 183px;
                    z-index: 1;
                }
    
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url($goodsBG);
                    background-size: cover;
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }
    
                &:hover {
                    background-color: transparent;
    
                    &::before {
                        opacity: 1;
                    }
                }
            }
    
            .product {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
    
            .all-categories {
                width: 100%;
                font-size: 17px;
                font-weight: bold;
                color: #27625f;
                background: #fff;
                display: flex;
                align-items: flex-end;
                justify-content: space-around;
                border: 1px solid #000000;
                border-radius: 8px;
                box-sizing: border-box;
                &_text {
                    width: 85px;
                }
    
                &_arrow {
                    width: 8px;
                    height: 16px;
                    padding: 3px;
                }
    
                p {
                    margin-bottom: 25px;
                }
            }
        }
    }
}
</style>