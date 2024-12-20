<template>
    <div class="portfolio">
        <div class="wrapper">
            <h3>Портфолио</h3>
            <div class="portfolio_list">
                <div class="portfolio_list">
                    <div class="portfolio_list_item" v-for="item in work" :key="item.id">
                        <img :src="item.img" alt="">
                    </div>
                    <router-link to="/portfolio">
                        <div class="portfolio_list_all-works">
                            <p class="portfolio_list_all-works_text">Все работы</p>
                            <p class="portfolio_list_all-works_arrow"></p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Work1 from '../assets/img/work/work1.webp'
import Work2 from '../assets/img/work/work2.webp'
import Work3 from '../assets/img/work/work3.webp'
import Work4 from '../assets/img/work/work4.webp'
import Work5 from '../assets/img/work/work5.webp'
import Work6 from '../assets/img/work/work6.webp'
import Work7 from '../assets/img/work/work7.webp'

export default {
    name: 'Portfolio',
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.portfolio {
    color: #27625F;

    h3 {
        font-size: 38px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    &_list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        a {
            text-decoration: none;
        }

        &_item {
            width: 351px;
            height: 244px;
            background-color: #F5F5F5;
            cursor: pointer;
            display: flex;
            align-items: flex-end;
            border-radius: 8px;

            img {
                width: 100%;
                border-radius: 8px;
                height: 100%;
            }
        }

        &_all-works {
            display: flex;
            align-items: flex-end;
            width: 351px;
            height: 244px;
            background-color: #F5F5F5;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.5s ease;
            color: #27625F;
            position: relative;

            &_text {
                font-size: 20px;
                font-weight: bold;
                color: #000000;
                padding: 20px;
            }

            &_arrow {
                width: 8px;
                height: 16px;
                padding: 3px;
                position: absolute;
                right: 190px;
                bottom: 15px;

                &::after {
                    content: '';
                    position: absolute;
                    border: solid #000000;
                    border-width: 0 3px 3px 0;
                    display: inline-block;
                    padding: 3px;
                    transform: rotate(-45deg);
                    -webkit-transform: rotate(-45deg);
                    transition: border 0.5s ease;
                }
            }
        }
    }
}

@media (max-width: 1367px) {
    .portfolio {
        h3 {
            font-size: 20px;
            margin-bottom: 30px;
        }

        &_list {
            gap: 5px;

            &_item {
                width: 240px;
                height: 169px;
            }
        }
    }
}

@media (max-width: 700px) {
    .portfolio {
        h3 {
            font-size: 16px;
            margin-bottom: 20px;
        }

        &_list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            a {
                text-decoration: none;
                width: 100%;
            }

            &_item {
                width: 100%;
                height: 233px;

                img {
                    object-fit: cover;
                }
            }
        }
    }
}
</style>