<template>
    <div class="reviews">
        <div class="wrapper">
            <h3>Отзывы</h3>
            <div class="reviews_cards">
                <div class="card">
                    <div class="card_info">
                        <img src="../../../assets/img/pages/MainPage/Reviews/БэнСтиллер.svg" alt=""
                            class="card_info_img">
                        <p class="card_info_name">Бен Стиллер</p>
                        <p class="card_info_date">30.03.2024</p>
                    </div>
                    <p class="card_text">Очень крутая типография. Круче меня</p>
                </div>
                <div class="card">
                    <div class="card_info">
                        <img src="../../../assets/img/pages/MainPage/Reviews/УинстонЧерчилль.svg" alt=""
                            class="card_info_img">
                        <p class="card_info_name">Уинстон Черчилль</p>
                        <p class="card_info_date">30.03.2024</p>
                    </div>
                    <p class="card_text">Fjewufhnvehfwehnfu weufwuebucn ncecen ycyeyc cbcweyweioqiojdvmjc jweujujew
                        ehweh
                        cjuecc
                        ncsdcijcji
                        cishf ijcij sn nlsnsle nnenll enncsl js. Rfsmss fksd.</p>
                </div>
                <div class="card">
                    <div class="card_info">
                        <img src="../../../assets/img/pages/MainPage/Reviews/ИлонМаск.svg" alt="" class="card_info_img">
                        <p class="card_info_name">Илон Маск</p>
                        <p class="card_info_date">30.05.2024</p>
                    </div>
                    <p class="card_text">Мне нужен был такой дизайнер, когда создавался дизайн для теслы из двух
                        полигонов
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Reviews',
}
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

            &_info {
                display: grid;
                grid-template-columns: 1fr 7fr;
                grid-template-rows: repeat(2, 1fr);
                padding: 20px;

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
                margin-top: 10px;
                margin-left: 20px;
                font-size: 16px;
                color: #27625F;
            }
        }
    }
}
</style>