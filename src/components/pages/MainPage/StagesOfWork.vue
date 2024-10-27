<template>
    <div class="stages_of_work">
        <div class="wrapper">
            <h4>Этапы работы</h4>
            <div class="work_list">
                <ul>
                    <li class="item" :class="{ show: item.show }" v-for="item in items" :key="item.id"
                        @mouseenter="showContent(item)">
                        <p class="item_title">{{ item.title }}</p>
                        <p class="item_content" v-if="item.show">{{ item.content }}</p>
                        <img class="item_img" v-if="item.show" :src="item.img" alt="">
                        <a class="item_link" v-if="item.show">{{ item.link }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import sendingTheLayout from '../../../assets/img/pages/MainPage/StagesOfWork/sendingTheLayout.webp'
import calculatingTheCost from '../../../assets/img/pages/MainPage/StagesOfWork/calculatingTheCost.webp'
import printingTheOrder from '../../../assets/img/pages/MainPage/StagesOfWork/printingTheOrder.webp'
import receivingTheOrder from '../../../assets/img/pages/MainPage/StagesOfWork/receivingTheOrder.webp'
import makingAnAdvancePayment from '../../../assets/img/pages/MainPage/StagesOfWork/makingAnAdvancePayment.webp'

export default {
    name: 'StagesOfWork',
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: '1/ Отправка макета',
                    content: 'Таким повседневная задания отношении направлений и что занимаемых активизации. По новая направлений выполнять образом участниками идейные нашей постоянный и интересный условий дальнейших играет важную выполнят. ',
                    img: sendingTheLayout,
                    link: 'Подробнее',
                    show: true
                },
                {
                    id: 2,
                    title: '2/ Расчет стоимости',
                    content: 'Таким повседневная задания отношении направлений и что занимаемых активизации. По новая направлений выполнять образом участниками идейные нашей постоянный и интересный условий дальнейших играет важную выполнят.',
                    img: calculatingTheCost,
                    link: 'Подробнее',
                },
                {
                    id: 3,
                    title: '3/ Внесение предоплаты',
                    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque non rem a iure, amet aut voluptatem magni molestiae, corporis vel laboriosam perferendis ipsam possimus qui, voluptatum nam! Quidem, debitis sit!',
                    img: makingAnAdvancePayment,
                    link: 'Подробнее',
                },
                {
                    id: 4,
                    title: '4/ Печать заказа',
                    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque non rem a iure, amet aut voluptatem magni molestiae, corporis vel laboriosam perferendis ipsam possimus qui, voluptatum nam! Quidem, debitis sit!',
                    img: printingTheOrder,
                    link: 'Подробнее',
                },
                {
                    id: 5,
                    title: '5/ Получение заказа',
                    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque non rem a iure, amet aut voluptatem magni molestiae, corporis vel laboriosam perferendis ipsam possimus qui, voluptatum nam! Quidem, debitis sit!',
                    img: receivingTheOrder,
                    link: 'Подробнее',
                },
            ],
            lastOpenedItem: 1,
        };
    },
    methods: {
        showContent(item) {
            this.items.forEach((i) => {
                if (i.id !== item.id) {
                    i.show = false;
                }
            });
            item.show = true;
            this.lastOpenedItem = item.id;
        },
    },
};
</script>

<style lang="scss" scoped>
.stages_of_work {
    margin-top: 90px;
    color: #27625F;

    .wrapper {
        display: grid;
        grid-template-columns: auto 970px;
    }

    h4 {
        font-size: 30px;
        font-style: bold;
    }

    .work_list {
        .item {
            display: grid;
            grid-template-columns: 1fr 353px;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-areas:
                "title img"
                "content img"
                "link img";
            margin-bottom: 10px;
            background-color: #F5F5F5;
            border-radius: 5px;
            height: 78px;
            position: relative;

            &_title {
                margin-top: 25px;
                margin-left: 20px;
                font-size: 24px;
                font-weight: bold;
                grid-area: title;
            }

            &_content {
                width: 460px;
                margin-left: 58px;
                font-size: 16px;
                grid-area: content;
            }

            &_img {
                width: 353px;
                height: 353px;
                grid-area: img;
            }

            &_link {
                color: #27625F;
                margin-left: 58px;
                margin-top: 67px;
                font-size: 16px;
                grid-area: link;
            }

            &::after {
                content: "";
                display: block;
                width: 25px;
                height: 25px;
                background-image: url("../../../../src/assets/img/pages/MainPage/StagesOfWork/link.svg");
                top: 50%;
                right: 37px;
                position: absolute;
                transform: translate(-50%, -50%);
            }
        }

        .show {
            height: 100%;
            background-color: #CEFFFD;
            transition: all 1s ease;
                animation: fadeIn 0.5s ease forwards;

            .item_title {
                margin-top: 35px;
            }

            &::after {
                content: none;
            }
        }
    }
}

@media (max-width: 1367px) {
    .stages_of_work {
        margin-top: 30px;

        .wrapper {
            grid-template-columns: auto 664px;
        }

        h4 {
            font-size: 20px;
        }

        .work_list {
            .item {
                display: grid;
                grid-template-columns: 1fr 200px;
                grid-template-rows: auto auto auto;
                grid-template-areas:
                    "title img"
                    "content img"
                    "link img";
                margin-bottom: 10px;
                height: 50px;
                position: relative;

                &_title {
                    margin-top: 10px;
                    margin-left: 20px;
                    font-size: 20px;
                }

                &_content {
                    margin-left: 48px;
                }

                &_img {
                    width: 200px;
                    height: 240px;
                    object-fit: cover;
                }

                &_link {
                    margin-left: 58px;
                    margin-top: 16px;
                    font-size: 16px;
                }
            }

            .show {
                height: 240px;
            }
        }
    }
}

//@media (max-width: 360px) {
@media (max-width: 700px) {
    .stages_of_work {
        margin-top: 50px;

        .wrapper {
            display: flex;
            flex-direction: column
        }

        h4 {
            font-size: 16px;
            margin-bottom: 30px;
        }

        .work_list {
            .item {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(4, auto);
                grid-template-areas:
                    "title"
                    "content"
                    "link"
                    "img";
                margin-bottom: 10px;
                height: 50px;
                gap: 10px;

                &_title {
                    margin-left: 20px;
                    font-size: 16px;
                    grid-area: title;
                }

                &_content {
                    margin-left: 32px;
                    font-size: 14px;
                    grid-area: content;
                }

                &_img {
                    //width: 336px;
                    width: 100%;
                    height: 187px;
                    grid-area: img;
                    object-fit: cover;
                }

                &_link {
                    margin-left: 32px;
                    font-size: 14px;
                    font-weight: 700;
                    grid-area: link;
                }
            }

            .show {
                height: 100%;

            }
        }
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>