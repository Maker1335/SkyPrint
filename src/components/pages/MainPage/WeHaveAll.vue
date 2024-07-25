<template>
    <div class="we_have_all">
        <div class="wrapper">
            <div class="item">
                <h2>У нас есть всё!</h2>
            </div>
            <div class="card">
                <p class="card_title">Полиграфические услуги</p>
                <p class="card_description">Полиграфия, широкоформатная печать и наружная реклама, сувенирная печать,
                    дизайнерские услуги -
                    заказывайте всё, что так необходимо, в одном месте. У нас Вы найдете индивидуальный</p>
            </div>
            <div class="card">
                <p class="card_title">Сувенирная продукция</p>
                <p class="card_description"> Используйте проверенные инструменты для привлечения внимания к вашему
                    продукту
                    или бренду. Получите
                    максимальную эффект без стресса и нервов - мы даём</p>
            </div>
            <div class="card">
                <p class="card_title">Широкоформатная печать</p>
                <p class="card_description">Порадуйте себя и близких подарками - календари, футболки, кружки и другие
                    фотосувениры с фото и
                    надписями. Сделайте интерьер более ярким с помощью особенных </p>
            </div>
            <div class="card">
                <p class="card_title">Интерьерная печать</p>
                <p class="card_description">Порадуйте себя и близких подарками - календари, футболки, кружки и другие
                    фотосувениры с фото и
                    надписями.</p>
            </div>
            <div class="card">
                <p class="card_title">Дизайнерские услуги</p>
                <p class="card_description">Используйте проверенные инструменты для привлечения внимания к вашему
                    продукту
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'WeHaveAll',
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

            .card_title {
                font-size: 30px;
                font-weight: bold;
                color: #27625f;
                width: 312px;
                margin-top: 40px;
                margin-left: 40px;
                z-index: 1;
            }

            .card_description {
                font-size: 16px;
                color: #27625f;
                width: 377px;
                margin-left: 40px;
                z-index: 1;
            }

            &::after {
                content: '>';
                position: absolute;
                width: 10px;
                height: 20px;
                color: #27625f;
                bottom: 30px;
                right: 30px;
            }

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
</style>
