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
                        <div class="portfolio_list_item">
                            <p class="portfolio_list_item_text">Все работы</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Work1 from '../assets/img/work/work1.svg'
import Work2 from '../assets/img/work/work2.svg'
import Work3 from '../assets/img/work/work3.svg'
import Work4 from '../assets/img/work/work4.svg'
import Work5 from '../assets/img/work/work5.svg'
import Work6 from '../assets/img/work/work6.svg'

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

            &_text {
                font-size: 20px;
                font-weight: bold;
                color: #000000;
                padding: 20px;
            }

            img {
                width: 100%;
                height: 100%;
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
                img{
                    object-fit: cover;
                }
            }
        }
    }
}
</style>