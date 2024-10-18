<template>
    <div class="front-info">
        <div class="front-info_img-wrapper">
            <img :src="imgSrc" alt="фото товара" class="front-info_img" />
        </div>
        <div class="front-info_description">
            {{ description }}
        </div>
</div>
</template>

<script>
export default {
    name: 'FrontInfo',
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
};
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
        white-space: pre-wrap; 
    }
}

@media (max-width: 700px) {
    .front-info {
        gap: 10px;

        &_description {
            font-size: 14px;
        }
    }
}
</style>