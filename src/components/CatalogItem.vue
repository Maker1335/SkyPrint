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
@media (max-width: 1367px) {
    .catalog_item {
        display: grid;
        grid-template-columns: auto auto auto 105px;
        grid-template-rows: 30px 190px 30px;
        grid-template-areas:
            ". . . save"
            "img img img img"
            "name . .  count";
        position: relative;
        background-color: #ECECEC;
        width: 240px;
        height: 250px;

        &_save {
            height: 15px;
            right: 20px;
            top: 20px;
        }

        &_img {
            width: 240px;
        }

        &_name {
            margin-left: 9px;
        }

        &_count {
            margin-right: 10px;
        }
    }
}
@media (max-width: 361px) {
    .catalog_item {
        grid-template-columns: auto auto auto auto;
        grid-template-rows: 30px 104px 30px;
        grid-template-areas:
            "name . . save"
            "img img img img"
            "count . .  .";
        width: 164px;
        height: 164px;
    
        &_save {
            position: absolute;
            right: 12px;
            top: 11px;
        }
    
        &_img {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
        }
    
        &_name {
            font-size: 14px;
            margin-left: 9px;
            margin-top: 10px;
            margin-bottom: 0;
        }
    
        &_count {
            font-size: 14px;
            margin-right: 14px;
            margin-bottom: 12px;
        }
    }
}
</style>