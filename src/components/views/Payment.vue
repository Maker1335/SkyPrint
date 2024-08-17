<template>
    <Header />
    <div class="payment">
        <div class="wrapper">
            <h2>Оптала заказа</h2>
            <PaymentOptions />
            <Slider :titleText="sliderText" />
        </div>
    </div>
</template>

<script>
import Header from '../header.vue';
import PaymentOptions from '../pages/Payment/PaymentOptions.vue';
import Slider from '../Slider.vue';

export default {
    name: 'Payment',
    components: {
        Header,
        Slider,
        PaymentOptions
    },
    data() {
        return {
            sliderText: "Вам понравиться"
        };
    },
}
</script>

<style lang="scss" scoped>
.header {
    margin-bottom: 50px;
}

.payment {
    color: #27625F;

    h2 {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 100px;
    }
}

@media (max-width: 1367px) {
    .payment {
        h2 {
            font-size: 35px;
            margin-bottom: 80px;
        }
    }
}
@media (max-width: 700px) {
    .payment {
        h2 {
            font-size: 25px;
            margin-bottom: 30px;
        }
    }
}
</style>