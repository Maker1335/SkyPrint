<template>
    <div class="payment-options">
        <div class="wrapper">
            <h3>Оплатить заказ можно несколькими способами</h3>
            <div class="cards">
                <PaymentCard v-for="(card, index) in cards" :key="index" :title="card.title" :imgSrc="card.imgSrc"
                    :alt="card.alt" :description="card.description" />
            </div>
        </div>
    </div>
</template>

<script>
import PaymentCard from './PaymentCard.vue';

import money from '../../../assets/img/pages/Payment/money.svg';
import card from '../../../assets/img/pages/Payment/card.svg';
import email from '../../../assets/img/pages/Payment/email.svg';
import car from '../../../assets/img/pages/Payment/car.svg';

export default {
    name: 'PaymentOptions',
    components: {
        PaymentCard
    },
    data() {
        return {
            cards: [
                {
                    title: "Наличными в нашем офисе при получении заказа",
                    imgSrc: money,
                    alt: "фото варианта"
                },
                {
                    title: "Переводом на карту «Сбербанка»",
                    description: "Номер карты вам подскажет наш менеджер",
                    imgSrc: card,
                    alt: "фото варианта"
                },
                {
                    title: "По безналичному расчету",
                    description: "Для этого необходимо отправить нам свои реквизиты",
                    imgSrc: email,
                    alt: "фото варианта"
                },
                {
                    title: "На месте при доставке курьером",
                    imgSrc: car,
                    alt: "фото варианта"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.payment-options {
    margin-bottom: 100px;

    .wrapper {
        display: flex;
    }

    h3 {
        font-size: 30px;
        font-weight: bold;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: flex-end;
    }
}
</style>