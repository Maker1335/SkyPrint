<template>
    <Header />
    <div class="design-services">
        <OrderDesign />
        <OurOffers/>
        <OurPrice/>
        <WorkingWithDesigner/>
        <Portfolio/>
    </div>
</template>

<script>
import Header from '../header.vue'
import Portfolio from '../Portfolio.vue';
import OrderDesign from '../pages/DesignServices/OrderDesign.vue';
import OurOffers from '../pages/DesignServices/OurOffers.vue';
import OurPrice from '../pages/DesignServices/OurPrice.vue';
import WorkingWithDesigner from '../pages/DesignServices/WorkingWithDesigner.vue';

export default {
    name: 'DesignServices',
    components: {
        Header,
        Portfolio,
        OrderDesign,
        OurOffers,
        OurPrice,
        WorkingWithDesigner
    }
}
</script>

<style lang="scss" scoped>
.header {
    margin-bottom: 40px;
}

.design-services {
    color: #27625F;

}


</style>