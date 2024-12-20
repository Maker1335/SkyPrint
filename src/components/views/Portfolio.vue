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

import Work1 from '../../assets/img/work/work1.webp'
import Work2 from '../../assets/img/work/work2.webp'
import Work3 from '../../assets/img/work/work3.webp'
import Work4 from '../../assets/img/work/work4.webp'
import Work5 from '../../assets/img/work/work5.webp'
import Work6 from '../../assets/img/work/work6.webp'
import Work7 from '../../assets/img/work/work7.webp'
import Work8 from '../../assets/img/work/work8.webp'
import Work9 from '../../assets/img/work/work9.webp'
import Work10 from '../../assets/img/work/work10.webp'
import Work11 from '../../assets/img/work/work11.webp'
import Work12 from '../../assets/img/work/work12.webp'
import Work13 from '../../assets/img/work/work13.webp'
import Work14 from '../../assets/img/work/work14.webp'
import Work15 from '../../assets/img/work/work15.webp'
import Work16 from '../../assets/img/work/work16.webp'

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
                    img: Work7,
                },
                {
                    id: 8,
                    img: Work8,
                },
                {
                    id: 9,
                    img: Work9,
                },
                {
                    id: 10,
                    img: Work10,
                },
                {
                    id: 11,
                    img: Work11,
                },
                {
                    id: 12,
                    img: Work12,
                },
                {
                    id: 13,
                    img: Work13,
                },
                {
                    id: 14,
                    img: Work14,
                },
                {
                    id: 15,
                    img: Work15,
                },
                {
                    id: 16,
                    img: Work16,
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
                border-radius: 8px;
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