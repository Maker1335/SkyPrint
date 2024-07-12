<template>
    <div class="quality_of_service">
        <h4>Качество сервиса и оборудования</h4>
        <div class="card">
            <img src="../../../assets/img/pages/MainPage/QualityOfService/typewriter.svg" alt="Печатная машинка" class="card_img">
        </div>
        <div class="card">
            <img src="../../../assets/img/pages/MainPage/QualityOfService/handshake.svg" alt="Рукопожатие" class="card_img">
            <p class="card_description">Качество на 100%, либо вернем ваши деньги</p>
        </div>
        <div class="card">
            <img src="../../../assets/img/pages/MainPage/QualityOfService/printer.svg" alt="Принтер" class="card_img">
        </div>
        <div class="card">
            <img src="../../../assets/img/pages/MainPage/QualityOfService/mountain.svg" alt="Гора" class="card_img">
            <p class="card_description">Оформление заказа, не выходя из дома</p>
        </div>
        <div class="card">
            <img src="../../../assets/img/pages/MainPage/QualityOfService/documents.svg" alt="Документы" class="card_img">
            <p class="card_description">Доставка заказов по всей России</p>
        </div>
        <div class="card">
            <img src="../../../assets/img/pages/MainPage/QualityOfService/calendar.svg" alt="Календарь" class="card_img">
            <p class="card_description">Оперативная печать заказов</p>
        </div>
        <div class="card">
            <img src="../../../assets/img/pages/MainPage/QualityOfService/technicalSupport.svg" alt="Техподдержка" class="card_img">
            <p class="card_description">Более 3000 клиентов по всей России</p>
        </div>
        <div class="card">
            <img src="../../../assets/img/pages/MainPage/QualityOfService/handshake.svg" alt="Рукопожатие" class="card_img">
            <p class="card_description">Качество на 100%, либо вернем ваши деньги</p>
        </div>
        <div class="card">
            <img src="../../../assets/img/pages/MainPage/QualityOfService/printShop.svg" alt="Типография" class="card_img">
        </div>
    </div>
</template>

<script>
export default {
    name: 'QualityOfService',
}
</script>

<style lang="scss" scoped>
.quality_of_service {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
        "h4 card2 card3 card4 card5"
        "h4 card6 . card7 card8"
        "h4 . card9 card10 card10";
    grid-gap: 15px;
    justify-items: center;
    align-items: start;
    background: #CEFFFD;
    padding: 35px;
    h4 {
        grid-row: span 3;
        grid-area: h4;
        font-size: 30px;
        font-weight: bold;
        color: #27625F;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 229px;
        height: 229px;
        border: 1px solid #27625F;
        border-radius: 5px;
        font-size: 16px;
        color:#27625F;
        padding: 10px;

        &_img {
            width: 100%;
            height: 100%;
        }

        &:nth-child(2){
            grid-area: card2;
        }
        &:nth-child(3){
            grid-area: card3;
        }
        &:nth-child(4){
            grid-area: card4;
        }
        &:nth-child(5){
            grid-area: card5;
        }
        &:nth-child(6){
            grid-area: card6;
        }
        &:nth-child(7){
            grid-area: card7;
        }
        &:nth-child(8){
            grid-area: card8;
        }
        &:nth-child(9){
            grid-area: card9;
        }
        &:nth-child(10){
            grid-area: card10;
            grid-column: span 2;
            width: 474px;
            height: 229px;
        }
        &:nth-child(2), 
        &:nth-child(4),
        &:nth-child(10){
            border: 0px;
            img{
                width: 100%;
                height: 100%;
                transition: transform 0.3s ease;
                &:hover {
                    transform: scale(1.1);
                }
            }
            
        }
        &:nth-child(3),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8),
        &:nth-child(9){
            img{
                width: 70px;
                height: 70px;
            }
            
        }
    }
}
</style>