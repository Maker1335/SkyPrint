<template>
    <Header />
    <div class="delivery">
        <div class="wrapper">
            <h2>Доставка</h2>
            <DeliveryOptions />
        </div>
        <Slider />
    </div>
</template>

<script>
import Header from '../header.vue';
import Slider from '../Slider.vue';
import DeliveryOptions from '../pages/Delivery/DeliveryOptions.vue';
export default {
    name: 'Delivery',
    components: {
        Header,
        Slider,
        DeliveryOptions
    },
    data() {
        return {};
    },
}
</script>

<style lang="scss" scoped>
.header {
    margin-bottom: 60px;
}

.delivery {
    color: #27625f;

    h2 {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 70px;
    }
}
</style>