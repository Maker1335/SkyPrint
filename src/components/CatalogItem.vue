<template>
    <div class="catalog_item">
        <img :src="save ? saveIconOn : saveIconOff" alt="закладка" class="catalog_item_save" @click="handleClick" />
        <router-link :to="{ name: 'Product', params: { id } }">
            <img :src="img" alt="фото товара" class="catalog_item_img" />
            <p class="catalog_item_name">{{ name }}</p>
            <p class="catalog_item_count">{{ count }}</p>
        </router-link>
    </div>
</template>

<script>
import save from '../assets/img/header/save.svg';
import saveOff from '../assets/img/header/saveOff.svg';

export default {
    name: 'CatalogItem',
    props: {
        id: Number,
        save: Boolean,
        img: String,
        name: String,
        count: String,
    },
    methods: {
        handleClick(event) {
            event.stopPropagation(); // Останавливаем распространение события
            this.$emit('toggle-save', this.id);
        },
    },
    computed: {
        saveIconOn() {
            return save;
        },
        saveIconOff() {
            return saveOff;
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: #27625F;
}

.catalog_item {
    position: relative;
    background-color: #ECECEC;
    width: 265px;
    height: 250px;

    a {
        display: grid;
        grid-template-columns: auto auto auto 1fr;
        grid-template-rows: 30px 190px 30px;
        grid-template-areas:
            ". . . ."
            "img img img img"
            "name . .  count";

    }

    &_save {
        width: 13px;
        height: 17px;
        position: absolute;
        right: 12px;
        top: 12px;
    }

    &_img {
        grid-area: img;
        width: 241px;
        height: 181px;
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
        position: relative;
        background-color: #ECECEC;
        width: 240px;
        height: 250px;

        a {
            display: grid;
            grid-template-columns: auto auto auto 1fr;
            grid-template-rows: 30px 190px 30px;
            grid-template-areas:
                ". . . ."
                "img img img img"
                "name . .  count";
        }

        &_save {
            height: 15px;
        }

        &_img {
            width: 240px;
        }

        &_name {
            margin-left: 10px;
        }

        &_count {
            margin-right: 10px;
        }
    }
}

@media (max-width: 700px) {
    .catalog_item {
        width: 164px;
        height: 164px;

        a {
            grid-template-columns: auto auto auto auto;
            grid-template-rows: 30px 104px 30px;
            grid-template-areas:
                "name . . ."
                "img img img img"
                "count . .  .";
        }

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
            margin-left: 9px;
            justify-content: start;
        }
    }
}
</style>