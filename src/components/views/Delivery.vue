<template>
    <Header />
    <div class="delivery">
        <h2>Доставка</h2>
        <div class="delivery_options">
            <h3>Доставим заказ куда угодно</h3>
            <div class="cards">
                <div class="card">
                    <p class="card_title">Доставка по Челябинску</p>
                    <ul>
                        <li>Стоимость доставки по городу 250₽</li>
                        <li>В отдаленные районы стоимость рассчитывается индивидуально</li>
                        <li>Доставка осуществляется в течение дня</li>
                        <li>Информацию о своем заказе уточнять у менеджера</li>
                        <li>При заказе на сумму более 5000 рублей, доставим заказ бесплатно Относительно к Челябинску
                        </li>
                    </ul>
                </div>
                <div class="card">
                    <p class="card_title">Доставка по России</p>
                    <ul>
                        <li>Вам нужно лишь выбрать удобную для себя транспортную компанию. Как только заказ придет в ваш
                            город, сотрудники транспортной компании с вами свяжутся.</li>
                        <li>Стоимость доставки зависит от тарифов транспортной компании. </li>
                        <li>Как правило, цена зависит от веса посылки и расстояния от Челябинска до вашего города.</li>
                    </ul>
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
    name: 'Delivery',
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
    margin-bottom: 60px;
}
.delivery {
    color: #27625f;
    h2{
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 70px;

    }

    &_options {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        gap: 20px;
        margin-bottom: 90px;
        h3 {
            font-size: 30px;
            font-weight: bold;
            width: 250px;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(2, 460px);
            gap: 20px;
            .card {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 35px 25px;
                box-sizing: border-box;
                background-color: #CEFFFD;
                &:last-child{
                    background-color: #F5F5F5;
                }
                p {
                    font-size: 26px;
                    font-weight: bold;
                    margin-bottom: 30px;
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    gap:10px;
                    li {
                        position: relative;
                        padding-left: 25px;
                        margin-bottom: 10px;

                        &::before {
                            content: '✔';
                            position: absolute;
                            left: 0;
                            width: 10px;
                            height: 5px;
                        }
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