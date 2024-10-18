<template>
    <div class="quality_of_service">
        <div class="wrapper">
            <h4>Качество сервиса и оборудования</h4>
            <div class="card" v-for="(card, index) in cards" :key="index" :class="card.class">
                <img :src="card.image" :alt="card.alt" class="card_img">
                <p v-if="card.description" class="card_description">{{ card.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import handshake from '../../../assets/img/pages/MainPage/QualityOfService/handshake.svg';
import fiveStars from '../../../assets/img/pages/MainPage/QualityOfService/fiveStars.svg';
import documents from '../../../assets/img/pages/MainPage/QualityOfService/documents.svg';
import location from '../../../assets/img/pages/MainPage/QualityOfService/location.svg';
import coffee from '../../../assets/img/pages/MainPage/QualityOfService/coffee.svg';

export default {
    name: 'QualityOfService',
    data() {
        return {
            cards: [
                { image: 'https://i.ibb.co/1dcPRJq/Component-80.jpg', alt: 'Печатная машинка' },
                { image: handshake, alt: 'Рукопожатие', description: 'Качество на 100%, либо вернем ваши деньги' },
                { image: 'https://i.ibb.co/ZKRYcPs/Rectangle-151.jpg', alt: 'Принтер' },
                { image: fiveStars, alt: 'Гора', description: 'Оформление заказа, не выходя из дома' },
                { image: documents, alt: 'Документы', description: 'Доставка заказов по всей России' },
                { image: location, alt: 'Календарь', description: 'Оперативная печать заказов' },
                { image: coffee, alt: 'Техподдержка', description: 'Более 3000 клиентов по всей России' },
                { image: handshake, alt: 'Рукопожатие', description: 'Гибкие условия сотрудничества' },
                { image: 'https://i.ibb.co/cQBTzwL/Rectangle-152.jpg', alt: 'Типография' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.quality_of_service {
    background: #CEFFFD;
    padding: 35px;
    position: relative;

    .wrapper {
        display: grid;
        grid-template-columns: auto, repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-template-areas:
            "h4 card2 card3 card4 card5"
            "h4 card6 . card7 card8"
            "h4 . card9 card10 card10";
        grid-gap: 15px;
        justify-items: center;
        align-items: start;
    }

    h4 {
        grid-row: span 3;
        grid-area: h4;
        font-size: 30px;
        font-weight: bold;
        color: #27625F;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 229px;
        height: 229px;
        border: 1px solid #27625F;
        border-radius: 5px;
        font-size: 16px;
        color: #27625F;
        padding: 10px;
        box-sizing: border-box;

        &_img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        &:nth-child(2) {
            grid-area: card2;
        }

        &:nth-child(3) {
            grid-area: card3;
        }

        &:nth-child(4) {
            grid-area: card4;
        }

        &:nth-child(5) {
            grid-area: card5;
        }

        &:nth-child(6) {
            grid-area: card6;
        }

        &:nth-child(7) {
            grid-area: card7;
        }

        &:nth-child(8) {
            grid-area: card8;
        }

        &:nth-child(9) {
            grid-area: card9;
        }

        &:nth-child(10) {
            grid-area: card10;
            grid-column: span 2;
        }

        &:nth-child(2),
        &:nth-child(4),
        &:nth-child(10) {
            width: 100%;
            height: 100%;
            border: 0px;
            padding: 0;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                transition: transform 0.3s ease;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }

        &:nth-child(3),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8),
        &:nth-child(9) {
            img {
                width: 70px;
                height: 70px;
            }
        }
    }
}

@media (max-width: 1367px) {
    .quality_of_service {
        padding: 25px;

        .wrapper {
            grid-gap: 10px;
        }

        h4 {
            font-size: 20px;
        }

        .card {
            width: 155px;
            height: 155px;

            &:nth-child(2),
            &:nth-child(4) {
                width: 155px;
                height: 155px;
            }

            &:nth-child(10) {
                width: 320px;
                height: 155px;
            }

            &:nth-child(2),
            &:nth-child(4),
            &:nth-child(10) {
                border: 0px;
                padding: 0;

                img {
                    width: 100%;
                    height: 100%;
                    transition: transform 0.3s ease;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }

            &:nth-child(3),
            &:nth-child(5),
            &:nth-child(6),
            &:nth-child(7),
            &:nth-child(8),
            &:nth-child(9) {
                img {
                    width: 55px;
                    height: 55px;
                }
            }
        }
    }
}
//@media (max-width: 361px) {
    @media (max-width: 700px) {
    .quality_of_service {
        background: #CEFFFD;
        padding: 10px;
        position: relative;
        margin-top: 60px;
    
        .wrapper {
            display: grid;
            grid-template-rows: auto;
            grid-template-areas:
                "h4 h4"
                "card2 card3"
                ". card5"
                "card6 card4 "
                "card7 ."
                "card9 card8"
                "card10 card10";
            grid-gap: 12px;
            justify-items: start;
        }
    
        h4 {
            grid-column: span 2;
            grid-area: h4;
            font-size: 16px;
        }
    
        .card {
            //width: 160px;
            width: 100%;
            height: 160px;
            height: 160px;
            font-size: 14px;
            font-weight: 500;
            padding: 10px;

            &:nth-child(10) {
                //width: 336px;
                width: 100%;
                //height: 162px;
                height: auto;
            }
    
            //для теста
            &:nth-child(2),
            &:nth-child(4){
                grid-row: span 2;
                height: 100%;
                width: 100%;
                align-items: start;
                img{
                    width: 100%;
                    height: 100%;
                }
            }

            &:nth-child(3),
            &:nth-child(5),
            &:nth-child(6),
            &:nth-child(7),
            &:nth-child(8),
            &:nth-child(9) {
                img {
                    width: 47px;
                    height: 47px;
                }
            }
        }
    }
}
</style>