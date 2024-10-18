<template>
    <div class="we_have_all">
        <div class="wrapper">
            <div class="item">
                <h2>У нас есть всё!</h2>
            </div>
            <div class="card" v-for="(card, index) in cards" :key="index">
                <p class="card_title">{{card.title}}</p>
                <p class="card_description">{{card.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'WeHaveAll',
    data() {
        return {
            cards: [
                {
                    title: 'Полиграфические услуги',
                    description: 'Полиграфия, широкоформатная печать и наружная реклама, сувенирная печать, дизайнерские услуги - заказывайте всё, что так необходимо, в одном месте.У нас Вы найдете индивидуальный'
                },
                {
                    title: 'Сувенирная продукция',
                    description: 'Используйте проверенные инструменты для привлечения внимания к вашему продукту или бренду. Получите максимальную эффект без стресса и нервов - мы даём'
                },
                {
                    title: 'Широкоформатная печать',
                    description: 'Порадуйте себя и близких подарками - календари, футболки, кружки и другие фотосувениры с фото и надписями. Сделайте интерьер более ярким с помощью особенных'
                },
                {
                    title: 'Интерьерная печать',
                    description: 'Порадуйте себя и близких подарками - календари, футболки, кружки и другие фотосувениры с фото и надписями.'
                },
                {
                    title: 'Дизайнерские услуги',
                    description: 'Используйте проверенные инструменты для привлечения внимания к вашему продукту'
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
.we_have_all {
    margin-top: 71px;
    .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 10px;

        h2 {
            font-size: 30px;
            font-weight: bold;
            color: #27625f;
        }

        .item,
        .card {
            width: 474px;
            height: 360px;
        }

        .card {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            border-radius: 5px;
            position: relative;
            background-color: #cefffd;
            flex-wrap: wrap;
            gap: 20px;
            position: relative;
            overflow: hidden;
            transition: background-color 0.5s ease;
            box-sizing: border-box;

            .card_title {
                font-size: 30px;
                font-weight: bold;
                color: #27625f;
                margin: 0 40px;
                margin-top: 40px;
                z-index: 1;
            }

            .card_description {
                font-size: 16px;
                color: #27625f;
                margin: 0 40px;
                z-index: 1;
            }

            //&::after {
            //    content: '>';
            //    position: absolute;
            //    width: 10px;
            //    height: 20px;
            //    color: #27625f;
            //    bottom: 30px;
            //    right: 30px;
            //}

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url('../../../assets/img/background2.svg');
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
@media (max-width: 1367px) {
    .we_have_all {
        .wrapper {
            h2 {
                font-size: 20px;
            }
    
            .item,
            .card {
                width: 100%;
                height: 327px;
            }
    
            .card {
                gap: 25px;
                .card_title {
                    font-size: 24px;
                    margin: 0 30px;
                    margin-top: 20px;
                }
    
                .card_description {
                    margin: 0 30px;
                }
    
            }
        }
    }
}
@media (max-width: 700px) {
    .we_have_all {
        margin-top: 40px;
        .wrapper {
            display: flex;
            flex-direction: column;
    
            h2 {
                font-size: 16px;
            }
            .item{
                width: 100%;
                height: 100%;
            }
            .card {
                width: 100%;
                height: 60px;
                flex-wrap: nowrap;
                &::after{
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
                &:hover {
                    height: 200px;
                    &::after{
                        bottom: 30px;
                        right: 30px;
                        top: auto;
                        transform: none
                    }
                }
            }
    
            .card {
                gap: 25px;
    
                .card_title {
                    font-size: 20px;
                }
    
                .card_description {
                    font-size: 16px;
                    font-weight: 400;
                }
            }
        }
    }
}
</style>
