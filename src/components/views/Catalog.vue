<template>
    <div class="catalog">
        <Header />
        <div class="content">
            <h2>Найдите, что вам нужно</h2>
            <CatalogList />
        </div>
    </div>
</template>

<script>
import Header from "../header.vue";
import CatalogList from '../../components/pages/Catalog/CatalogList.vue';

export default {
    name: 'Catalog',
    components: {
        Header,
        CatalogList
    },

}
</script>

<style lang="scss" scoped>
.catalog {
    color: #27625F;
    .content {
        h2 {
            font-size: 50px;
            font-weight: bold;
            margin-top: 43px;
        }
    }
}
</style>