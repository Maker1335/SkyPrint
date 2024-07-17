<template>
    <Header />
    <div class="payment">
        <h2>Оптала заказа</h2>
        <div class="paymen_options">
            <h3>Оплатить заказ можно несколькими способами</h3>
            <div class="cards">
                <div class="card">
                    <p class="card_title">Наличными в нашем офисе при получении заказа</p>
                    <div class="card_description">
                        <p class="card_description_text"></p>
                        <img src="../../assets/img/pages/Payment/money.svg" alt="фото варианта"
                            class="card_description_img">
                    </div>
                </div>
                <div class="card">
                    <p class="card_title">Переводом на карту «Сбербанка»</p>
                    <div class="card_description">
                        <p class="card_description_text">Номер карты вам подскажет наш менеджер</p>
                        <img src="../../assets/img/pages/Payment/card.svg" alt="фото варианта"
                            class="card_description_img">
                    </div>
                </div>
                <div class="card">
                    <p class="card_title">По безналичному расчету</p>
                    <div class="card_description">
                        <p class="card_description_text">Для этого необходимо отправить нам свои реквизиты</p>
                        <img src="../../assets/img/pages/Payment/email.svg" alt="фото варианта"
                            class="card_description_img">
                    </div>
                </div>
                <div class="card">
                    <p class="card_title">На месте при доставке курьером</p>
                    <div class="card_description">
                        <p class="card_description_text"></p>
                        <img src="../../assets/img/pages/Payment/car.svg" alt="фото варианта"
                            class="card_description_img">
                    </div>
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

import rollUpImage from '../../assets/img/goods/RollUp.svg';
import notepadsImage from '../../assets/img/goods/notepads.svg';
import canvasesImage from '../../assets/img/goods/canvases.svg';
import businessCardsImage from '../../assets/img/goods/businessСards.svg';
import laminationImage from '../../assets/img/goods/lamination.svg';
import pensImage from '../../assets/img/goods/pens.svg';

export default {
    name: 'Payment',
    components: {
        Header,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Autoplay],
            rollUpImage,
            notepadsImage,
            canvasesImage,
            businessCardsImage,
            laminationImage,
            pensImage
        };
    },
}
</script>

<style lang="scss" scoped>
$goodsBG: "../../assets/img/background.png";

.header {
    margin-bottom: 50px;
}

.payment {
    color: #27625F;

    h2 {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 100px;
    }

    .paymen_options {
        display: flex;
        margin-bottom: 100px;

        h3 {
            font-size: 30px;
            font-weight: bold;
        }

        .cards {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: flex-end;

            .card {
                display: flex;
                flex-direction: column;
                width: 462px;
                height: 275px;
                border-radius: 5px;
                background-color: #F5F5F5;
                position: relative;
                padding: 35px;
                box-sizing: border-box;
                justify-content: space-between;

                .card_title {
                    font-size: 20px;
                    z-index: 1;
                }

                .card_description {
                    display: flex;
                    z-index: 1;
                    justify-content: space-between;
                    gap: 60px;

                    .card_description_text {
                        font-size: 16px;
                        color: #8E8E8E;
                        z-index: 1;
                    }

                    .card_description_img {
                        z-index: 1;
                        width: 81px;
                        height: 81px;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
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
        }
    }

    .slider {
        h3 {
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