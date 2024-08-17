<template>
    <Header />
    <div class="portfolio">
        <div class="wrapper">
            <h2>Портфолио</h2>
            <div class="portfolio_list">
                <div class="portfolio_list_item" v-for="item in work" :key="item.id">
                    <img :src="item.img" alt="">
                </div>
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
            work: [
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
                    id: 7,
                    img: Work6,
                },
                {
                    id: 8,
                    img: Work5,
                },
                {
                    id: 9,
                    img: Work4,
                },
                {
                    id: 10,
                    img: Work3,
                },
                {
                    id: 11,
                    img: Work2,
                },
                {
                    id: 12,
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
    margin-top: 50px;

    h2 {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 50px;
    }

    &_list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        &_item {
            cursor: pointer;

            img {
                width: 351px;
                height: 244px;
            }
        }
    }
}

@media (max-width: 1367px) {
    .portfolio {
        margin-top: 50px;

        h2 {
            font-size: 35px;
            margin-bottom: 30px;
        }

        &_list {
            gap: 5px;

            &_item {
                img {
                    width: 240px;
                    height: 169px;
                }
            }
        }
    }
}

@media (max-width: 700px) {
    .portfolio {
        margin-top: 30px;

        h2 {
            font-size: 25px;
            margin-bottom: 25px;
        }

        &_list {
            gap: 10px;

            &_item {
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>