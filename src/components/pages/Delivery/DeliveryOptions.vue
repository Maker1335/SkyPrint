<template>
    <div class="delivery_options">
        <h3>Доставим заказ куда угодно</h3>
        <div class="cards">
            <DeliveryCard v-for="(card, index) in cards" :key="index" :title="card.title" :items="card.items" />
        </div>
    </div>
</template>

<script>
import DeliveryCard from './DeliveryCard.vue';

export default {
    name: 'DeliveryOptions',
    components: {
        DeliveryCard
    },
    data() {
        return {
            cards: [
                {
                    title: "Доставка по Челябинску",
                    items: [
                        "Стоимость доставки по городу 250₽",
                        "В отдаленные районы стоимость рассчитывается индивидуально",
                        "Доставка осуществляется в течение дня",
                        "Информацию о своем заказе уточнять у менеджера",
                        "При заказе на сумму более 5000 рублей, доставим заказ бесплатно Относительно к Челябинску"
                    ],
                },
                {
                    title: "Доставка по России",
                    items: [
                        "Вам нужно лишь выбрать удобную для себя транспортную компанию. Как только заказ придет в ваш город, сотрудники транспортной компании с вами свяжутся.",
                        "Стоимость доставки зависит от тарифов транспортной компании.",
                        "Как правило, цена зависит от веса посылки и расстояния от Челябинска до вашего города."
                    ],
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.delivery_options {
    margin-bottom: 90px;
    display: flex;
    justify-content: space-between;

    h3 {
        font-size: 30px;
        font-weight: bold;
        width: 250px;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(2, 460px);
        gap: 20px;
    }
}

@media (max-width: 1367px) {
    .delivery_options {
        h3 {
            font-size: 20px;
        }
        .cards {
            display: grid;
            grid-template-columns: repeat(2, 323px);
            gap: 10px;
        }
    }
}
@media (max-width: 361px) {
    .delivery_options {
        margin-bottom: 50px;
        flex-direction: column;
        gap: 20px;
    
        h3 {
            font-size: 16px;
            width: 150px;
        }
    
        .cards {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
}
</style>