<template>
    <Header />
    <div class="product">
        <div class="wrapper">
            <template v-if="product">
            <p class="product_title">{{ product.name }}</p>
            <FrontInfo :imgSrc="product.image" :description="product.description" />
            <Details :productDetails="product.details" />
        </template>
        <template v-else>
            <p class="product_not-found">Товар не найден</p>
        </template>
        </div>
    </div>
    <Slider :titleText="sliderText" />
</template>

<script>
import { useProductStore } from '../stores/products'

import { computed } from 'vue';
import { useRoute } from 'vue-router';

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
            sliderText: 'Другие категории'
        }
    },
    setup() {
        const route = useRoute();
        const store = useProductStore();
        const productId = Number(route.params.id);
        const product = computed(() => store.products.find(p => p.id === productId));

        return {
            product
        };
    }
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
    &_not-found {
        font-size: 18px;
        color: red;
        text-align: center;
        margin-top: 20px;
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