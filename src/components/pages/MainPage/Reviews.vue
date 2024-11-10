<template>
    <div class="reviews">
        <div class="wrapper">
            <h3>Отзывы</h3>
            <div class="reviews_cards">
                <div class="card" v-for="(review, index) in reviews" :key="index">
                    <div class="card_info">
                        <img :src="review.image" :alt="review.name" class="card_info_img">
                        <p class="card_info_name">{{ review.name }}</p>
                        <p class="card_info_date">{{ review.date }}</p>
                    </div>
                    <p class="card_text">{{ review.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import user1 from '../../../assets/img/pages/MainPage/Reviews/user1.webp';
import user2 from '../../../assets/img/pages/MainPage/Reviews/user2.webp';
import user3 from '../../../assets/img/pages/MainPage/Reviews/user3.webp';

export default {
    name: 'Reviews',
    data() {
        return {
            reviews: [
                {
                    image: user1,
                    name: 'Мария Иванова',
                    date: '30.03.2024',
                    text: 'Отличная типография! Заказал визитки, качество на высшем уровне, а доставка была быстрой. Персонал вежливый и отзывчивый. Рекомендую всем!'
                },
                {
                    image: user2,
                    name: 'Иван Петров',
                    date: '30.03.2024',
                    text: 'Очень доволена работой SkyPrint! Печать буклетов выполнена быстро и качественно. Цены адекватные, а поддержка клиентов на высоте. Обязательно вернусь снова!'
                },
                {
                    image: user3,
                    name: 'Катя Смирнова',
                    date: '30.05.2024',
                    text: 'Заказывала печать календарей для компании. Результат превзошел ожидания! Яркие цвета и четкость изображения. Профессиональный подход и оперативность. Спасибо, SkyPrint!'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.reviews {
    margin-top: 71px;

    .wrapper {
        display: flex;
        flex-direction: column;
    }

    h3 {
        font-size: 30px;
        font-weight: bold;
        color: #27625F;
        margin-bottom: 40px;
    }

    &_cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-gap: 10px;

        .card {
            display: flex;
            flex-direction: column;
            width: 474px;
            height: 288px;
            border-radius: 5px;
            background-color: #CEFFFD;
            padding: 20px;
            box-sizing: border-box;

            &_info {
                display: grid;
                grid-template-columns: 1fr 7fr;
                grid-template-rows: repeat(2, 1fr);

                &_img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    grid-row: span 2;
                }

                &_name {
                    margin-left: 10px;
                    font-size: 20px;
                    font-weight: bold;
                    color: #27625F;
                }

                &_date {
                    margin-left: 10px;
                    font-size: 16px;
                    color: #33898F;
                }
            }

            &_text {
                margin-top: 20px;
                font-size: 16px;
                color: #27625F;
            }
        }
    }
}

@media (max-width: 1367px) {
    .reviews {
        margin-top: 50px;

        .wrapper {
            display: flex;
            flex-direction: column;
        }

        h3 {
            font-size: 20px;
            margin-bottom: 15px;
        }

        &_cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(1, 1fr);
            grid-gap: 10px;

            .card {
                width: 328px;
                height: 222px;

                &_info {

                    &_img {
                        width: 40px;
                        height: 40px;
                    }

                    &_name {}

                    &_date {}
                }

                &_text {
                    margin-top: 10px;
                }
            }
        }
    }
}

//@media (max-width: 361px) {
    @media (max-width: 700px) {
    .reviews {
        margin-top: 50px;

        h3 {
            font-size: 16px;
            margin-bottom: 15px;
        }

        &_cards {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .card {
                //width: 336px;
                width: 100%;
                height: 180px;
                height: 85px;
                overflow: hidden;
                position: relative;

                &_info {
                    display: grid;
                    grid-template-columns: 1fr 7fr;
                    grid-template-rows: repeat(2, 1fr);

                    &_img {
                        width: 50px;
                        height: 50px;
                    }
                }

                &_text {
                    margin-top: 15px;
                    font-size: 14px;
                }

                &::after{
                    content: '>';
                    position: absolute;
                    width: 10px;
                    height: 20px;
                    color: #27625f;
                    right: 30px;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
                &:hover {
                    height: 180px;
                    &::after{
                        content: "";
                    }
                }
            }
        }
    }
}
</style>