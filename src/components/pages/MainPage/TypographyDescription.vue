<template>
    <div class="typography_description">
        <div class="wrapper">
            <div class="description">
                <h3>Одна из лучших типографий Челябинска</h3>
                <p>Типография SkyPrint основанная в 2005 году, является одним из лидеров по потдержке типографичных
                    продукций для компаний и рекламы. За это время, типография успела основатся как помошник для брендов
                    и людей.</p>
            </div>
            <div class="card">
                <p class="card_title">50</p>
                <p class="card_description">Услуг</p>
            </div>
            <div class="card">
                <p class="card_title">20 лет</p>
                <p class="card_description">Мы помогаем бизнесам</p>
            </div>
            <div class="card">
                <p class="card_title">10000+</p>
                <p class="card_description">Заказов в год</p>
            </div>
            <div class="card">
                <a href="https://www.youtube.com/watch?v=73mmIqSreAU&t=23s">
                    <p class="card_title"></p>
                    <p class="card_description"></p>
                    <img src="../../../../src/assets/img/pages/MainPage/TypographyDescription/video.svg"
                        alt="сслыка на видео">
                    <button class="card_button">
                        <p>Смотреть видео</p>
                    </button>
                </a>
            </div>
            <swiper :slides-per-view="5" :space-between="9" :autoplay="{ delay: 5000, disableOnInteraction: false }"
                :loop="true" :modules="modules" class="partners">
                <swiper-slide v-for="(partner, index) in partners" :key="index" class="partner">
                    <img :src="partner.image" :alt="partner.alt">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

import carmel from '../../../assets/img/partners/carmel.svg';
import аджигардак from '../../../assets/img/partners/аджигардак.svg';
import баден from '../../../assets/img/partners/баден.svg';
import геомтерия from '../../../assets/img/partners/геомтерия.svg';
import крашер from '../../../assets/img/partners/крашер.svg';
import полет from '../../../assets/img/partners/полет.svg';
import сммщики from '../../../assets/img/partners/сммщики.svg';
import стомпрактика from '../../../assets/img/partners/стомпрактика.svg';
import чилинз from '../../../assets/img/partners/чилинз.svg';
import юургу from '../../../assets/img/partners/юургу.svg';

export default {
    name: 'TypographyDescription',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Autoplay],
            partners: [
                { image: carmel, alt: 'Партнёр Кармер' },
                { image: аджигардак, alt: 'Партнёр Аджигардак' },
                { image: баден, alt: 'Партнёр Баден' },
                { image: геомтерия, alt: 'Партнёр Геомтерия' },
                { image: крашер, alt: 'Партнёр Крашер' },
                { image: полет, alt: 'Партнёр Полет' },
                { image: сммщики, alt: 'Партнёр СММщики' },
                { image: стомпрактика, alt: 'Партнёр Стомпрактика' },
                { image: чилинз, alt: 'Партнёр Чилинз' },
                { image: юургу, alt: 'Партнёр юургу' },
            ],
        };
    }
}
</script>

<style lang="scss" scoped>
$backgroundImage: "../../../assets/img/background.png";

.typography_description {
    margin-top: 80px;

    .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 10px;
    }

    .description {
        grid-row: span 3;

        h3 {
            font-size: 30px;
            font-weight: bold;
            color: #27625F;
            width: 400px;
        }

        p {
            font-size: 16px;
            width: 458px;
            margin-top: 19px;
        }
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 474px;
        height: 226px;
        border-radius: 5px;
        background-color: #F5F5F5;
        position: relative;
        overflow: hidden;
        transition: background-image 0.5s;

        &_title {
            font-size: 68px;
            font-weight: bold;
            color: #27625F;
            z-index: 1;
            margin-left: 31px;
        }

        &_description {
            font-size: 20px;
            color: #3BAEAA;
            z-index: 1;
            margin-left: 31px;
        }

        a {
            z-index: 1;
        }

        &_button {
            position: absolute;
            border: none;
            background: #FFFFFF;
            font-size: 16px;
            color: #27625F;
            cursor: pointer;
            height: 31px;
            width: 176px;
            bottom: 31px;
            left: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            z-index: 1;
            border-radius: 8px;

            p {
                z-index: 1;
            }

            &::after {
                content: '';
                display: inline-block;
                border-left: 10px solid #27625F;
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                margin-left: 10px;
                z-index: 1;
            }

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url($backgroundImage);
                background-size: cover;
                opacity: 0;
                transition: opacity 0.5s ease;
            }
        }

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url($backgroundImage);
            background-size: cover;
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        &:hover {
            background-image: url($backgroundImage);

            &::before {
                opacity: 1;
            }

            .card_button {
                background-image: url($backgroundImage);

                &::before {
                    opacity: 1;
                }
            }
        }
    }

    .partners {
        width: 900px;
        grid-column: span 2;
        display: flex;
        justify-content: space-between;
        margin-top: 49px;

        img {
            filter: grayscale(1);
            height: 53px;
            transition: filter 0.5s;

            &:hover {
                filter: grayscale(0);
            }
        }
    }
}

@media (max-width: 1367px) {
    .typography_description {
        .wrapper {
            grid-gap: 5px;
        }

        .description {
            width: 300px;
            margin-right: 20px;

            h3 {
                font-size: 20px;
                width: 100%;
            }

            p {
                width: 100%;
                margin-top: 7px;
            }
        }

        .card {
            width: 334px;
            height: 159px;

            &_title {
                font-size: 46px;
                margin-left: 21px;
            }

            &_description {
                font-size: 16px;
                margin-left: 21px;
            }

            &_button {
                height: 34px;
                width: 181px;
                bottom: 14px;
                left: 14px;
            }
        }

        .partners {
            width: 630px;
            margin-top: 34px;

            img {
                height: 40px;
            }
        }
    }
}

@media (max-width: 700px) {
    .typography_description {
        margin-top: 60px;

        .wrapper {
            display: flex;
            flex-direction: column;
            grid-gap: 10px;
        }

        .description {
            h3 {
                font-size: 16px;
                font-weight: bold;
                width: 300px;
            }

            p {
                font-size: 14px;
                width: 331px;
                font-weight: 500;
                margin-top: 5px;
            }
        }

        .card {
            width: 100%;
            height: 160px;

            &_title {
                font-size: 46px;
                margin-left: 21px;
            }

            &_description {
                font-size: 16px;
                margin-left: 21px;
            }

            &_button {
                font-size: 16px;
                height: 31px;
                width: 180px;
            }
        }

        .partners {
            width: 100%;
            img {
                height: 25px;
            }
        }
    }
}
</style>