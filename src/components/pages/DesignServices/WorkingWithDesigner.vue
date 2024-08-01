<template>
    <div class="working-with-designer">
        <div class="wrapper">
            <h3>Работа с дизайнером в офисе</h3>
            <div class="working-with-designer_cards">
                <div class="card" v-for="(session, index) in sessions" :key="index">
                    <div class="card_time">
                        <p class="card_time_number">{{ session.time }}</p>
                        <img :src="session.imgSrc" alt="">
                    </div>
                    <div class="card_arrow">
                        <img src="../../../assets/img/pages/DesignServices/arrow.svg" alt="">
                    </div>
                    <div class="card_price">
                        <p>{{ session.price }} &#8381;</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tenMinutes from '../../../assets/img/pages/DesignServices/10-minutes.svg';
import twentyMinutes from '../../../assets/img/pages/DesignServices/20-minutes.svg';
import thirtyMinutes from '../../../assets/img/pages/DesignServices/30-minutes.svg';
import oneHour from '../../../assets/img/pages/DesignServices/1-hour.svg';
export default {
    name: 'WorkingWithDesigner',
    data() {
        return {
            sessions: [
                { time: '10 мин', imgSrc: tenMinutes, price: 150 },
                { time: '20 мин', imgSrc: twentyMinutes, price: 300 },
                { time: '30 мин', imgSrc: thirtyMinutes, price: 500 },
                { time: '1 час', imgSrc: oneHour, price: 800 },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.working-with-designer {
    margin-bottom: 90px;

    .wrapper {
        display: grid;
        grid-template-columns: auto 1fr;
    }

    h3 {
        font-size: 30px;
        font-weight: bold;
        width: 400px;
    }

    &_cards {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: flex-end;

        .card {
            display: flex;
            justify-content: space-between;
            background: #F4F4F4;
            border-radius: 8px;
            box-sizing: border-box;
            gap: 25px;
            align-items: center;
            padding: 30px;
            box-sizing: border-box;
            width: 474px;

            &_time {
                display: flex;
                gap: 10px;

                &_number {
                    font-size: 30px;
                    font-weight: bold;
                }
            }

            &_arrow {
                width: 105px;
            }

            &_price {
                font-size: 30px;
                font-weight: bold;
            }
        }
    }
}

@media (max-width: 1367px) {
    .working-with-designer {
        margin-bottom: 70px;

        .wrapper {
            display: grid;
            grid-template-columns: 400px 1fr;
        }

        h3 {
            font-size: 20px;
            width: 250px;
        }

        &_cards {
            gap: 10px;

            .card {
                gap: 25px;
                padding: 40px;
                width: 100%;

                &_time {
                    display: flex;
                    gap: 10px;
                }

                &_arrow {
                    width: 230px;

                    img {
                        width: 230px;
                    }
                }
            }
        }
    }
}

@media (max-width: 361px) {
    .working-with-designer {
        margin-bottom: 30px;
    
        .wrapper {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
    
        h3 {
            font-size: 20px;
            width: 100%;
        }
    
        &_cards {
            gap: 10px;
    
            .card {
                gap: 10px;
                padding: 20px;
                width: 100%;
    
                &_time {
                    display: flex;
                    gap: 10px;
    
                    &_number {
                        font-size: 20px;
                    }
                }
    
                &_arrow {
                    width: auto;
                    img {
                        width: auto;
                    }
                }
    
                &_price {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>