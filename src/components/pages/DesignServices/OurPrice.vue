<template>
    <div class="our-price">
        <div class="wrapper">
            <h3>Наш прайс</h3>
            <div class="our-price_table">
                <img src="../../../assets/img/pages/DesignServices/ourPrice.svg" alt="">
                <button class="our-price_table_button">Смотреть прайс</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurPrice'
}
</script>

<style lang="scss" scoped>
.our-price {
    margin-bottom: 90px;

    .wrapper {
        display: flex;
        justify-content: space-between;
    }

    h3 {
        font-size: 30px;
        font-weight: bold;
    }

    &_table {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        gap: 20px;

        &_button {
            width: 347px;
            height: 58px;
            font-size: 20px;
            font-weight: bold;
            border: 1px solid #27625F;
            background: none;
            border-radius: 8px;
            cursor: pointer;

            &:hover {
                background: #27625F;
                color: #FFFFFF;
                transition: all 0.5s;
            }
        }
    }
}
</style>