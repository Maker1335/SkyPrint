<template>
    <Header />
    <div class="about-us">
        <div class="about-us_title">
            <h2>Одна из лучших типографий Челябинска</h2>
            <p>Типография SkyPrint основанная в 2005 году, является одним из лидеров по потдержке типографичных
                продукций для компаний и рекламы. За это время, типография успела основатся как помошник для брендов и
                людей.Типография SkyPrint основанная в 2005 году, является одним из лидеров по потдержке типографичных
                продукций для компаний и рекламы. За это время, типография успела основатся как помошник для брендов и
                людей.</p>
        </div>
        <div class="about-us_description">
            <div class="cards">
                <div class="card">
                    <div class="card_title">
                        <p class="card_title_count">10000+</p>
                        <p class="card_title_text">Заказов в год</p>
                    </div>
                    <div class="card_description">
                        <p>Типография SkyPrint основанная в 2005 году, является одним из лидеров по потдержке
                            типографичных продукций для компаний и рекламы. За это время, типография успела основатся
                            как помошник для брендов</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card_title">
                        <p class="card_title_count">50</p>
                        <p class="card_title_text">Услуг</p>
                    </div>
                    <div class="card_description">
                        <p>Типография SkyPrint основанная в 2005 году, является одним из лидеров по потдержке
                            типографичных продукций для компаний и рекламы. За это время, типография успела основатся
                            как помошник для брендов</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card_title">
                        <p class="card_title_count">20 лет</p>
                        <p class="card_title_text">Мы помогаем бизнесам</p>
                    </div>
                    <div class="card_description">
                        <p>Типография SkyPrint основанная в 2005 году, является одним из лидеров по потдержке
                            типографичных продукций для компаний и рекламы. За это время, типография успела основатся
                            как помошник для брендов</p>
                    </div>
                </div>
                <div class="card">
                    <a href="https://www.youtube.com/clip/Ugkx45wbboLWcVG3WvrfUo6ii2GtHB6z0g2R">
                        <p class="card_title"></p>
                        <p class="card_description"></p>
                        <img src="../../../src/assets/img/pages/MainPage/TypographyDescription/video.svg"
                            alt="Видео о компании" class="card_img">
                    </a>
                </div>
            </div>
        </div>
        <div class="partners">
            <h3>С нами сотрудничают лучшие</h3>
            <div class="partners_list">
                <img src="../../assets/img/partners/carmel.svg" alt="фото партнера">
                <img src="../../assets/img/partners/аджигардак.svg" alt="фото партнера">
                <img src="../../assets/img/partners/баден.svg" alt="фото партнера">
                <img src="../../assets/img/partners/геомтерия.svg" alt="фото партнера">
                <img src="../../assets/img/partners/крашер.svg" alt="фото партнера">
                <img src="../../assets/img/partners/полет.svg" alt="фото партнера">
                <img src="../../assets/img/partners/сммщики.svg" alt="фото партнера">
                <img src="../../assets/img/partners/стомпрактика.svg" alt="фото партнера">
                <img src="../../assets/img/partners/чилинз.svg" alt="фото партнера">
                <img src="../../assets/img/partners/юургу.svg" alt="фото партнера">
            </div>
        </div>
        <div class="history">
            <h3>История</h3>
            <img src="../../assets/img/pages/AboutUs/history.svg" alt="">
        </div>
        <div class="portfolio">
            <h3>Портфолио</h3>
            <div class="portfolio_list">
                <div class="portfolio_list_item">
                    <img src="../../assets/img/work/work1.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <img src="../../assets/img/work/work2.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <img src="../../assets/img/work/work3.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <img src="../../assets/img/work/work4.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <img src="../../assets/img/work/work5.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <img src="../../assets/img/work/work6.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <img src="../../assets/img/work/work1.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <p class="portfolio_list_item_text">Все работы</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../header.vue";

export default {
    name: 'AboutUs',
    components: {
        Header,
    }
}
</script>

<style lang="scss" scoped>
.header {
    margin-bottom: 40px;
}

.about-us {
    color: #27625F;

    &_title {
        margin-bottom: 60px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 19px;

        h2 {
            font-size: 50px;
            font-weight: bold;
            width: 622px;
        }

        p {
            font-size: 16px;
            width: 952px;
        }
    }

    &_description {
        margin-bottom: 100px;

        .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-row: auto 1fr;
            gap: 15px;

            .card {
                display: flex;
                flex-direction: column;
                gap: 16px;
                background-color: #F5F5F5;
                padding: 30px;
                box-sizing: border-box;

                &_title {
                    &_count {
                        font-size: 88px;
                        font-weight: bold;
                    }

                    &_text {
                        font-size: 20px;
                        font-weight: bold;
                        color: #303030;
                    }

                }

                &_img {
                    height: 100%;
                    width: 100%;
                }

                &:last-child {
                    margin-top: 90px;
                    grid-column: span 3;
                    background: none;
                    padding: 0;
                }

                &_description {
                    font-size: 16px;
                }
            }
        }
    }

    .partners {
        background-color: #F5F5F5;
        padding: 100px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 80px;

        h3 {
            font-size: 38px;
            font-weight: bold;
            margin-bottom: 100px;
        }

        &_list {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 80px;

            img {
                filter: grayscale(1);
                transition: filter 0.5s;

                &:hover {
                    filter: grayscale(0);
                }
            }
        }
    }

    .history {
        margin-bottom: 90px;

        h3 {
            font-size: 38px;
            font-weight: bold;
            margin-bottom: 100px;
        }

        img {
            width: 100%;
        }
    }

    .portfolio {
        h3 {
            font-size: 38px;
            font-weight: bold;
            margin-bottom: 30px;
        }

        &_list {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;

            &_item {
                width: 351px;
                height: 244px;
                background-color: #F5F5F5;
                cursor: pointer;
                display: flex;
                align-items: flex-end;
                

                &_text {
                    font-size: 20px;
                    font-weight: bold;
                    color: #000000;
                    padding: 20px;
                }

                &_img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }


}
</style>