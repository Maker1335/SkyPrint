<template>
    <div class="catalog_item">
        <img :src="save" alt="закладка" class="catalog_item_save" />
        <img :src="img" alt="фото товара" class="catalog_item_img" />
        <p class="catalog_item_name">{{ name }}</p>
        <p class="catalog_item_count">{{ count }}</p>
    </div>
</template>

<script>
export default {
    name: 'CatalogItem',
    props: {
        save: String,
        img: String,
        name: String,
        count: String,
    },
}
</script>

<style lang="scss" scoped>
.catalog_item {
    display: grid;
    grid-template-columns: auto auto auto 120px;
    grid-template-rows: 30px 190px 30px;
    grid-template-areas:
        ". . . save"
        "img img img img"
        "name . .  count";
    position: relative;
    background-color: #ECECEC;
    width: 265px;
    height: 250px;

    &_save {
        grid-area: save;
        width: 13px;
        height: 17px;
        position: absolute;
        right: 12px;
        top: 11px;
    }

    &_img {
        grid-area: img;
        width: 265px;
        height: 190px;
        display: flex;
        justify-content: center;
    }

    &_name {
        grid-area: name;
        color: #27625F;
        font-size: 16px;
        font-weight: bold;
        margin-left: 9px;
        margin-bottom: 12px;
    }

    &_count {
        grid-area: count;
        color: #489B93;
        font-size: 16px;
        font-weight: bold;
        margin-right: 14px;
        margin-bottom: 12px;
        display: flex;
        justify-content: end;
    }
}
</style>