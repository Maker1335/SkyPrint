<template>
    <div class="typography_description">
        <div class="wrapper">

            <div class="description">
                <h3>Одна из лучших типографий Челябинска</h3>
                <p>Типография SkyPrint основанная в 2005 году, является одним из лидеров по потдержке типографичных
                    продукций для компаний и рекламы. За это время, типография успела основатся как помошник для брендов
                    и
                    людей.</p>
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
                <swiper-slide class="partner">
                    <img src="../../../assets/img/partners/carmel.svg" alt="Партнёр Кармер">
                </swiper-slide>
                <swiper-slide class="partner">
                    <img src="../../../assets/img/partners/аджигардак.svg" alt="Партнёр Аджигардак">
                </swiper-slide>
                <swiper-slide class="partner">
                    <img src="../../../assets/img/partners/баден.svg" alt="Партнёр Баден">
                </swiper-slide>
                <swiper-slide class="partner">
                    <img src="../../../assets/img/partners/геомтерия.svg" alt="Партнёр Геомтерия">
                </swiper-slide>
                <swiper-slide class="partner">
                    <img src="../../../assets/img/partners/крашер.svg" alt="Партнёр Крашер">
                </swiper-slide>
                <swiper-slide class="partner">
                    <img src="../../../assets/img/partners/полет.svg" alt="Партнёр Полет">
                </swiper-slide>
                <swiper-slide class="partner">
                    <img src="../../../assets/img/partners/сммщики.svg" alt="Партнёр СММщики">
                </swiper-slide>
                <swiper-slide class="partner">
                    <img src="../../../assets/img/partners/стомпрактика.svg" alt="Партнёр Стомпрактика">
                </swiper-slide>
                <swiper-slide class="partner">
                    <img src="../../../assets/img/partners/чилинз.svg" alt="Партнёр Чилинз">
                </swiper-slide>
                <swiper-slide class="partner">
                    <img src="../../../assets/img/partners/юургу.svg" alt="Партнёр юургу">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
export default {
    name: 'TypographyDescription',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Autoplay],
        };
    }
}
</script>

<style lang="scss" scoped>
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
            width: 368px;
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
                background-image: url("../../../assets/img/background.png");
                background-size: cover;
                opacity: 0;
                transition: opacity 0.5s ease;
            }

            //&:hover {
            //    background-image: url("../../../assets/img/background.png");
            //
            //    &::before {
            //        opacity: 1;
            //    }
            //}
        }

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("../../../assets/img/background.png");
            background-size: cover;
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        &:hover {
            background-image: url("../../../assets/img/background.png");

            &::before {
                opacity: 1;
            }

            .card_button {
                background-image: url("../../../assets/img/background.png");

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
</style>