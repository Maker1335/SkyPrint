<template>
    <Header />
    <div class="product">
        <div class="wrapper">
            <p class="product_title">Ручки</p>
            <FrontInfo />
            <Details />
        </div>
    </div>
    <Slider :titleText="sliderText" />
</template>


<script>
import Header from '../header.vue';
import FrontInfo from '../pages/Product/FrontInfo.vue';
import Details from '../pages/Product/Details.vue';

import Slider from '../Slider.vue';

export default {
    name: 'Product',
    components: {
        Header,
        FrontInfo,
        Details,
        Slider
    },
    data() {
        return {
            showPrices: false,
            showRequirements: false,
            activeSection: null,
            sliderText: "Другие категории",
        };
    },
}
</script>

<style lang="scss" scoped>
.product {
    color: #27625f;
    margin-bottom: 60px;
    position: relative;

    .wrapper {
        display: grid;
        grid-template-columns: 477px 17px 1fr;
        grid-template-areas:
            "title title title"
            "front . details";
        margin-top: 49px;
    }

    &_title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 26px;
        grid-area: title;
    }
}

@media (max-width: 1367px) {
    .product {
        .wrapper {
            grid-template-columns: 366px 17px 1fr;
            margin-top: 30px;
        }

        &_title {
            font-size: 30px;
            margin-bottom: 10px;
        }
    }
}

@media (max-width: 361px) {
    .product {
        margin-bottom: 30px;

        .wrapper {
            display: flex;
            flex-direction: column;
            margin-top: 30px;
        }

        &_title {
            margin-bottom: 30px;
        }
    }
}
</style>