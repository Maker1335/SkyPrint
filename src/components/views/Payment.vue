<template>
    <Header />
    <div class="payment">
        <h2>Оптала заказа</h2>
        <PaymentOptions />
        <Slider :titleText="sliderText" />
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
        width: 1440px;
        margin: 0 auto;
        margin-bottom: 100px;
    }
}
</style>