<template>
    <div class="order-design">
        <div class="wrapper">
            <div class="order-design_info info">
                <div class="info_title">
                    <h2 class="info_title_text">ЗАКАЖИ ДИЗАЙН ИЛИ ПРОВЕРЬ МАКЕТ В SKYPRINT</h2>
                    <p class="info_title_subtitle">Хотите заказать печатную продукцию, но не знаете, в каком дизайне
                        сделать
                        буклеты, листовки и баннеры? Желаете, чтобы календари и упаковки с логотипом компании произвели
                        впечатление на партнеров и клиентов? Мечтаете о визитках с эксклюзивным дизайном? Мы поможем
                        осуществить ваши планы!</p>
                </div>
                <div class="info_buttons">
                    <a class="order-button" @click="toggleMenu">
                        <p>Заказать</p>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=example@example.com&su=Hello&body=Message%20body"
                        target="_blank" class="question-button">
                        Задать вопрос
                    </a>
                    <Questionnaire :isOpen="isQuestionnaireOpen" :toggleMenu="toggleMenu" />
                </div>
            </div>
            <div class="order-design_img">
                <img src="../../../assets/img/pages/DesignServices/notebook.svg" alt="фото товара">
            </div>
        </div>
    </div>
</template>

<script>
import Questionnaire from '../../Questionnaire.vue'
export default {
    name: 'OrderDesign',
    components: {
        Questionnaire
    },
    data() {
        return {
            isQuestionnaireOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isQuestionnaireOpen = !this.isQuestionnaireOpen;
        },
    }
}
</script>

<style lang="scss" scoped>
.order-design {
    margin-bottom: 70px;
    background-image: url("../../../assets/img/background.png");
    border-radius: 5px;

    .wrapper {
        display: flex;
        justify-content: space-between;
        padding: 60px 30px;
        box-sizing: border-box;
        gap: 40px;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &_title {
            display: flex;
            flex-direction: column;
            gap: 30px;

            &_text {
                font-size: 50px;
                font-weight: bold;
                color: #289793;
                width: 750px;
                line-height: 55px;
            }

            &_subtitle {
                font-size: 16px;
                color: #3BAEAA;
                line-height: 24px;
                width: 700px;
            }
        }

        &_buttons {
            display: flex;
            gap: 20px;

            .order-button,
            .question-button {
                width: 427px;
                height: 90px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 20px;
                font-weight: bold;
                padding: 20px;
                box-sizing: border-box;
                background: none;
                border-radius: 8px;
                border: 1px solid #27625F;
                color: #27625F;
                text-decoration: none;

                &::after {
                    content: "";
                    border: 1px solid #27625F;
                    border-width: 0 4px 4px 0;
                    display: inline-block;
                    padding: 4px;
                    -webkit-transform: rotate(-45deg);
                }

                &:hover {
                    border: 0px solid #27625F;
                    background: #FFFFFF;
                    transition: all 0.5s;
                }
            }
            ::v-deep(.questionnaire) {
                left: 50%;
            }
        }
    }

    &_img {
        img {
            width: 400px;
            height: 400px;
        }
    }
}

@media (max-width: 1367px) {
    .order-design {
        .wrapper {
            display: flex;
            justify-content: space-between;
            padding: 60px 30px;
            box-sizing: border-box;
            gap: 30px;
        }

        .info {

            &_title {
                display: flex;
                flex-direction: column;
                gap: 30px;
                margin-bottom: 20px;

                &_text {
                    font-size: 35px;
                }
            }

            &_buttons {
                gap: 15px;

                .order-button,
                .question-button {
                    width: 300px;
                    height: 60px;
                    font-size: 14px;
                }
            }
        }

        &_img {
            img {
                width: auto;
                height: 330px;
            }
        }
    }
}

@media (max-width: 700px) {
    .order-design {
        margin-bottom: 30px;

        .wrapper {
            justify-content: flex-start;
            flex-direction: column;
            padding: 20px 10px;
            gap: 0px;
        }

        .info {

            &_title {
                display: flex;
                flex-direction: column;
                gap: 30px;

                &_text {
                    font-size: 30px;
                }
            }

            &_buttons {
                flex-direction: column;
                gap: 10px;

                .order-button,
                .question-button {
                    width: 100%;
                    height: 60px;
                    font-size: 14px;
                    padding: 20px;
                }
            }
        }

        &_img {
            display: none;
        }
    }
}
</style>