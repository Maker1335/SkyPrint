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
                { count: '10000+', text: 'Заказов в год', description: 'Наша типография обрабатывает более 10,000 заказов ежегодно, что свидетельствует о высоком уровне доверия клиентов. Мы гарантируем быструю и качественную реализацию проектов, независимо от их объема.' },
                { count: '50', text: 'Услуг', description: 'Предлагаем широкий спектр услуг — более 50 различных решений для вашего бизнеса. От печати визиток до больших рекламных материалов, мы удовлетворяем любые потребности и обеспечиваем индивидуальный подход к каждому заказу.' },
                { count: '20 лет', text: 'Мы помогаем бизнесам', description: 'С 20-летним опытом работы мы знаем, как поддерживать и развивать ваш бизнес. Наша команда экспертов предлагает профессиональные советы и решения, чтобы ваши идеи стали реальностью и приносили успех.' }
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
                gap: 20px;
                background-color: #F5F5F5;
                padding: 30px;
                box-sizing: border-box;
                border-radius: 5px;

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

                    a {
                        display: block;
                        position: relative;

                        &::before {
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            background-image: url("../../../assets/img/pages/AboutUs/play.webp");
                            background-size: cover;
                            background-repeat: no-repeat;
                            width: 101px;
                            height: 114px;
                        }
                    }
                }

                &_description {
                    font-size: 16px;
                    font-weight: 600;
                }
            }
        }
    }
}

@media (max-width: 1367px) {
    .about-us {
        &_description {
            margin-bottom: 20px;

            .cards {
                gap: 15px;

                .card {
                    gap: 20px;
                    padding: 20px;

                    &_title {
                        &_count {
                            font-size: 48px;
                        }

                        &_text {
                            font-size: 16px;
                        }
                    }

                    &_img {
                        height: 100%;
                        width: 100%;
                    }

                    &:last-child {
                        margin-top: 20px;
                    }

                    &_description {
                        font-size: 16px;
                    }
                }
            }
        }
    }
}

@media (max-width: 700px) {
    .about-us {
        &_description {
            margin-bottom: 30px;

            .cards {
                display: flex;
                flex-direction: column;
                gap: 10px;

                .card {
                    padding: 20px 40px;

                    &_title {
                        &_count {
                            font-size: 48px;
                        }

                        &_text {
                            font-size: 16px;
                        }
                    }

                    &_img {
                        height: 100%;
                        width: 100%;
                    }

                    &:last-child {
                        margin-top: 0px;
                        padding: 0;
                    }

                    &_description {
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>