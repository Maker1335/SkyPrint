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
import benStiller from '../../../assets/img/pages/MainPage/Reviews/БэнСтиллер.svg';
import winstonChurchill from '../../../assets/img/pages/MainPage/Reviews/УинстонЧерчилль.svg';
import elonMusk from '../../../assets/img/pages/MainPage/Reviews/ИлонМаск.svg';

export default {
    name: 'Reviews',
    data() {
        return {
            reviews: [
                {
                    image: benStiller,
                    name: 'Бен Стиллер',
                    date: '30.03.2024',
                    text: 'Очень крутая типография. Круче меня'
                },
                {
                    image: winstonChurchill,
                    name: 'Уинстон Черчилль',
                    date: '30.03.2024',
                    text: 'Fjewufhnvehfwehnfu weufwuebucn ncecen ycyeyc cbcweyweioqiojdvmjc jweujujew ehweh cjuecc ncsdcijcji cishf ijcij sn nlsnsle nnenll enncsl js. Rfsmss fksd.'
                },
                {
                    image: elonMusk,
                    name: 'Илон Маск',
                    date: '30.05.2024',
                    text: 'Мне нужен был такой дизайнер, когда создавался дизайн для теслы из двух полигонов'
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