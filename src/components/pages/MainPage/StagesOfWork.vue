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
                        <!-- <router-link class="item_link" v-if="item.show" :to="item.linkTo" >{{ item.link }}</router-link> -->
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
                    content: 'Первым шагом в нашем процессе является отправка вашего макета. Вы можете загрузить файл через наш сайт или отправить его по электронной почте. Мы принимаем  форматы, такие как: SVG, СDR, PDF, JPG и TIFF. Если у вас есть особые требования, не стесняйтесь указать их в комментариях. Наша команда внимательно рассмотрит ваш макет и проверит его на соответствие всем техническим требованиям. Это поможет избежать недоразумений и ускорить дальнейшие этапы работы.',
                    img: sendingTheLayout,
                    show: true
                },
                {
                    id: 2,
                    title: '2/ Расчет стоимости',
                    content: 'После получения вашего макета мы проведем расчёт стоимости заказа. На этом этапе мы учитываем все детали: формат, тираж, тип бумаги и дополнительные услуги, такие как ламинирование или биговка. Мы предоставим вам прозрачную смету, чтобы вы могли видеть, за что именно платите. Если у вас есть ограничения по бюджету или вы хотите внести изменения, наша команда всегда готова предложить альтернативные решения, чтобы удовлетворить ваши потребности.',
                    img: calculatingTheCost,
                },
                {
                    id: 3,
                    title: '3/ Внесение предоплаты',
                    content: 'Для начала производства нам необходимо получить предоплату. Это стандартная практика в типографиях, которая обеспечивает безопасность обеих сторон. Мы предложим вам несколько удобных способов оплаты, включая банковский перевод и электронные платежи. После подтверждения получения предоплаты 50% мы сразу же начнем подготовку к печати вашего заказа. Вам будет отправлено уведомление о том, что ваш заказ принят в работу, и мы готовы двигаться дальше.',
                    img: makingAnAdvancePayment,
                },
                {
                    id: 4,
                    title: '4/ Печать заказа',
                    content: 'На этом этапе начинается самое интересное — печать вашего заказа! Мы используем современное оборудование и высококачественные материалы, чтобы обеспечить отличные результаты. Наша команда тщательно следит за процессом, чтобы гарантировать, что каждый элемент соответствует вашим ожиданиям. Если вы выбрали дополнительные услуги, такие как резка или ламинирование, они будут выполнены на этом этапе. Мы стремимся завершить печать в кратчайшие сроки, чтобы вы могли получить свой заказ вовремя.',
                    img: printingTheOrder,
                },
                {
                    id: 5,
                    title: '5/ Получение заказа',
                    content: 'После завершения всех этапов печати ваш заказ будет готов к получению! Мы уведомим вас о готовности и предложим удобные варианты доставки — вы можете забрать его самостоятельно из нашего офиса или воспользоваться услугами курьерской службы. При получении мы рекомендуем проверить качество заказа на месте, чтобы убедиться, что все соответствует вашим ожиданиям. Если у вас возникнут вопросы или пожелания, наша команда всегда готова помочь и ответить на ваши запросы.',
                    img: receivingTheOrder,
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
            grid-template-rows: calc(78px + 10px) 1fr 43px;
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
                font-size: 16px;
                grid-area: link;
                text-decoration: none;
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
                grid-template-rows: 70px 1fr 50px;
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
                    width: 410px;
                }

                &_img {
                    width: 200px;
                    height: 100%;
                    object-fit: cover;
                }

                &_link {
                    margin-left: 58px;
                    margin-top: 16px;
                    font-size: 16px;
                }
            }

            .show {
                height: 100%;
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
                    width: auto;
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