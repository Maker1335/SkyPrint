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
@media (max-width: 1367px) {
    .our-price {
        margin-bottom: 70px;
    
        h3 {
            font-size: 20px;
        }
    
        &_table {
            img{
                width: 660px;
                height: 100%;
            }
    
            &_button {
                width: 300px;
                height: 58px;
            }
        }
    }
}
@media (max-width: 361px) {
    .our-price {
        margin-bottom: 30px;
    
        .wrapper {
            display: flex;
            flex-direction: column;
        }
    
        h3 {
            font-size: 20px;
        }
    
        &_table {
            gap: 20px;
            img{
                width: 100%;
            }
    
            &_button {
                width: 150px;
                height: 24px;
                font-size: 10px;
            }
        }
    }
}
</style>