<template>
    <div class="catalog_list">
        <CatalogItem 
            v-for="good in goods"
            :key="good.id"
            :save="good.save"
            :img="good.img"
            :name="good.name"
            :link="good.link"
            :count="good.count"
            @toggle-save="toggleSave" />
    </div>
</template>

<script>
import CatalogItem from '../../CatalogItem.vue';
import { useProductStore } from '../../stores/products.js';
import { computed } from 'vue';

export default {
    name: 'CatalogList',
    components: {
        CatalogItem
    },
    setup() {
        const store = useProductStore();
        const goods = computed(() => store.products);

        const toggleSave = (productName) => {
            store.toggleSave(productName);
        };

        return {
            goods,
            toggleSave
        };
    }
};
</script>

<style lang="scss" scoped>
.catalog_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 8px;
    margin-top: 40px;
}
</style>