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
                    <button class="order-button">Заказать</button>
                    <button class="question-button">Задать вопрос</button>
                </div>
            </div>
            <div class="order-design_img">
                <img src="../../../assets/img/pages/DesignServices/notebook.svg" alt="фото товара">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderDesign'
}
</script>

<style lang="scss" scoped>
.order-design {
    margin-bottom: 70px;
    background-image: url("../../../assets/img/background.png");
    

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
            }

            &_subtitle {
                font-size: 16px;
                color: #3BAEAA;
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

                &::after {
                    content: "";
                    border: solid #27625F;
                    border-width: 0 4px 4px 0;
                    display: inline-block;
                    padding: 4px;
                    -webkit-transform: rotate(-45deg);
                }

                &:hover {
                    background: #FFFFFF;
                    transition: all 0.5s;
                }
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
</style>