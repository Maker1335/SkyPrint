<template>
    <div class="front-info">
        <div class="front-info_img-wrapper">
            <img src="../../../assets/img/goods/pens.svg" alt="фото товара" class="front-info_img" />
        </div>
        <p class="front-info_description">
            Интересный развития. Соображения идейные направлений высшего финансовых нашей и по позволяет
            задача постоянный постоянный позволяет прогрессивного прогрессивного плановых идейные роль
            структура нашей равным рамки рост административных нашей же и в развития. Рост и значение равным
            существенных форм количественный нашей активности и модель интересный играет идейные отношении
            реализации же постоянный.
        </p>
    </div>
</template>

<script>
export default {
    name: 'FrontInfo'
}
</script>

<style lang="scss" scoped>
.front-info {
    grid-area: front;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &_img-wrapper {
        width: 100%;
        height: auto;
        background-image: url('../../../assets/img/background.png');
        background-size: cover;
        border-radius: 8px;
    }

    &_img {
        width: 100%;
        height: 100%;
        z-index: auto;
    }

    &_description {
        font-size: 16px;
    }
}

@media (max-width: 361px) {
    .front-info {
        gap: 10px;
        &_description {
            font-size: 14px;
        }
    }
}
</style>