<template>
    <div class="catalog_list">
        <CatalogItem v-for="good in goods"
        :key="good.id"
        :save="good.save"
        :img="good.img"
        :name="good.name"
        :count="good.count" />
    </div>
</template>

<script>
import CatalogItem from '../../CatalogItem.vue';
import saveOff from '../../../assets/img/header/saveOff.svg';

import businessСards from "../../../assets/img/goods/businessСards.svg";
import canvases from "../../../assets/img/goods/canvases.svg";
import lamination from "../../../assets/img/goods/lamination.svg";
import notepads from "../../../assets/img/goods/notepads.svg";
import pens from "../../../assets/img/goods/pens.svg";
import printing from "../../../assets/img/goods/printing.svg";
import RollUp from "../../../assets/img/goods/RollUp.svg";


export default {
    name: 'CatalogList',
    components: {
        CatalogItem
    },
    data() {
        return {
            goods: [
                {
                    id: 1,
                    save: saveOff,
                    img: RollUp,
                    name: 'Roll-up',
                    count: 'От 12 шт',
                },
                {
                    id: 2,
                    save: saveOff,
                    img: canvases,
                    name: 'Холсты',
                    count: 'От 1000 шт',
                },
                {
                    id: 3,
                    save: saveOff,
                    img: printing,
                    name: 'Футболки',
                    count: 'От 50 шт',
                },
                {
                    id: 4,
                    save: saveOff,
                    img: pens,
                    name: 'Ручки',
                    count: 'От 50 шт',
                },
                {
                    id: 5,
                    save: saveOff,
                    img: businessСards,
                    name: 'Визитки',
                    count: 'От 50 шт',
                },
                {
                    id: 6,
                    save: saveOff,
                    img: lamination,
                    name: 'Ламинация',
                    count: '',
                },
                {
                    id: 7,
                    save: saveOff,
                    img: notepads,
                    name: 'Календари',
                    count: 'От 50 шт',
                },
                {
                    id: 8,
                    save: saveOff,
                    img: RollUp,
                    name: 'Roll-up',
                    count: 'От 12 шт',
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.catalog_list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 40px;
}
</style>