<template>
    <Header />
    <div class="portfolio">
        <h2>Портфолио</h2>
        <div class="portfolio_list">
            <div class="portfolio_list_item" v-for="item in work" :key="item.id">
                <img :src="item.img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../header.vue';

import Work1 from '../../assets/img/work/work1.svg'
import Work2 from '../../assets/img/work/work2.svg'
import Work3 from '../../assets/img/work/work3.svg'
import Work4 from '../../assets/img/work/work4.svg'
import Work5 from '../../assets/img/work/work5.svg'
import Work6 from '../../assets/img/work/work6.svg'

export default {
    name: 'Portfolio',
    components: {
        Header
    },

    data() {
        return {
            work:[
                {
                    id: 1,
                    img: Work1,
                },
                {
                    id: 2,
                    img: Work2,
                },
                {
                    id: 3,
                    img: Work3,
                },
                {
                    id: 4,
                    img: Work4,
                },
                {
                    id: 5,
                    img: Work5,
                },
                {
                    id: 6,
                    img: Work6,
                },
                {
                    id: 6,
                    img: Work6,
                },
                {
                    id: 5,
                    img: Work5,
                },
                {
                    id: 4,
                    img: Work4,
                },
                {
                    id: 3,
                    img: Work3,
                },
                {
                    id: 2,
                    img: Work2,
                },
                {
                    id: 1,
                    img: Work1,
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.portfolio {
    color: #27625F;

    h2 {
        font-size: 50px;
        font-weight: bold;
    }

    &_list {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        &_item {
            img {
                width: 351px;
                height: 244px;
            }
        }
    }

}
</style>