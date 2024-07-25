<template>
    <div class="portfolio">
        <div class="wrapper">
            <h3>Портфолио</h3>
            <div class="portfolio_list">
                <div class="portfolio_list_item">
                    <img src="../assets/img/work/work1.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <img src="../assets/img/work/work2.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <img src="../assets/img/work/work3.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <img src="../assets/img/work/work4.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <img src="../assets/img/work/work5.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <img src="../assets/img/work/work6.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <img src="../assets/img/work/work1.svg" alt="Пример работы" class="portfolio_list_item_img">
                </div>
                <div class="portfolio_list_item">
                    <p class="portfolio_list_item_text">Все работы</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Portfolio',
    components: {
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

            &_img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>