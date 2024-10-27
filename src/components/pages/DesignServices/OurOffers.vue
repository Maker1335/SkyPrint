<template>
    <div class="our-offers">
        <div class="wrapper">
            <h3>Что мы предлагаем?</h3>
            <div class="our-offers_cards">
                <div class="card" v-for="(offer, index) in offers" :key="index">
                    <p class="card_title">{{ offer.title }}</p>
                    <p class="card_nember">{{ offer.number }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurOffers',
    data() {
        return {
            offers: [
                { title: 'Дизайн упаковок, наклеек и всевозможной сувенирной продукции', number: 1 },
                { title: 'Дизайн визиток для сотрудников и для себя лично', number: 2 },
                { title: 'Дизайн настенных, настольных и карманных календарей с логотипом компании, в фирменном цвете и т.д.', number: 3 },
                { title: 'Дизайн информационных стендов и указательных табличек', number: 4 },
                { title: 'Дизайн листовок и буклетов с анонсом акции, продукта и услуг компании', number: 5 },
                { title: 'Дизайн наружной рекламы: баннеров, плакатов, постеров', number: 6 },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.our-offers {
    margin-bottom: 90px;

    h3 {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    &_cards {
        display: flex;
        flex-wrap: wrap;
        gap: 21px;
        justify-content: space-between;

        .card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 462px;
            height: 275px;
            background: #F5F5F5;
            border-radius: 8px;
            padding: 20px;
            box-sizing: border-box;
            position: relative;

            &_title {
                font-size: 16px;
                font-weight: bold;
                z-index: 1;
            }

            &_nember {
                position: absolute;
                bottom: 30px;
                right: 45px;
                font-size: 66px;
                font-weight: bold;
            }

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url('../../../assets/img/background.png');
                background-size: cover;
                opacity: 0;
                transition: opacity 0.5s ease;
            }

            &:hover {
                background-color: transparent;

                &::before {
                    opacity: 1;
                }
            }
        }
    }
}
@media (max-width: 1367px) {
    .our-offers {
        margin-bottom: 70px;
    
        h3 {
            font-size: 20px;
            margin-bottom: 20px;
        }
    
        &_cards {
            gap: 15px;
            justify-content: flex-start;
    
            .card {
                width: 315px;
            }
        }
    }
}
@media (max-width: 700px) {
    .our-offers {
        margin-bottom: 30px;
    
        h3 {
            font-size: 20px;
        }
    
        &_cards {
            display: flex;
            flex-direction: column;
            gap: 10px;
    
            .card {
                width: 100%;
            }
        }
    }
}
</style>