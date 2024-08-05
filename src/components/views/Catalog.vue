<template>
    <div class="catalog">
        <Header />
        <div class="wrapper">
            <div class="content">
                <h2>Найдите, что вам нужно</h2>
                <CatalogList />
            </div>
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
        CatalogList,
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
@media (max-width: 1367px) {
    .catalog {
        .content {
            h2 {
                font-size: 35px;
            }
        }
    }
}
@media (max-width: 361px) {
    catalog {
        .content {
            h2 {
                font-size: 30px;
            }
        }
    }
}
</style>