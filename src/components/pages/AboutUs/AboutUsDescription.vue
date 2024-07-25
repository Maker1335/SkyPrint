<template>
    <div class="about-us_description">
        <div class="wrapper">
            <div class="cards">
                <div class="card" v-for="(file, index) in cards" :key="index">
                    <div class="card_title">
                        <p class="card_title_count">{{ file.count }}</p>
                        <p class="card_title_text">{{ file.text }}</p>
                    </div>
                    <div class="card_description">
                        <p>{{ file.description }}</p>
                    </div>
                </div>
                <div class="card">
                    <a href="https://www.youtube.com/watch?v=73mmIqSreAU&t=23s">
                        <img src="../../../../src/assets/img/pages/MainPage/TypographyDescription/video.svg"
                            alt="Видео о компании" class="card_img">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUsDescription',
    data() {
        return {
            cards: [
                { count: '10000+', text: 'Заказов в год', description: 'Типография SkyPrint основанная в 2005 году, является одним из лидеров по потдержке типографичных продукций для компаний и рекламы. За это время, типография успела основатся как помошник для брендов' },
                { count: '50', text: 'Услуг', description: 'Типография SkyPrint основанная в 2005 году, является одним из лидеров по потдержке типографичных продукций для компаний и рекламы. За это время, типография успела основатся как помошник для брендов' },
                { count: '20 лет', text: 'Мы помогаем бизнесам', description: 'Типография SkyPrint основанная в 2005 году, является одним из лидеров по потдержке типографичных продукций для компаний и рекламы. За это время, типография успела основатся как помошник для брендов' }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
.about-us {
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
}
</style>