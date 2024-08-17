<template>
    <div class="card">
        <p class="card_title">{{ title }}</p>
        <div class="card_description">
            <p class="card_description_text">{{ description }}</p>
            <img :src="imgSrc" :alt="alt" class="card_description_img">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentCard',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ''
        },
        imgSrc: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    width: 462px;
    height: 275px;
    border-radius: 5px;
    background-color: #F5F5F5;
    position: relative;
    padding: 35px;
    box-sizing: border-box;
    justify-content: space-between;
    &_title {
        font-size: 20px;
        z-index: 1;
        font-weight: bold;
    }
    &_description {
        display: flex;
        z-index: 1;
        justify-content: space-between;
        gap: 60px;
        &_text {
            font-size: 16px;
            color: #8E8E8E;
            z-index: 1;
        }
        &_img {
            z-index: 1;
            width: 81px;
            height: 81px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("../../../assets/img/background.png");
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
@media (max-width: 1367px) {
    .card {
        width: 330px;
        height: 208px;
        padding: 20px;
        &_title {
            font-size: 20px;
            z-index: 1;
        }
        &_description {
            display: flex;
            z-index: 1;
            justify-content: space-between;
            gap: 60px;
            &_text {
                font-size: 16px;
                color: #8E8E8E;
                z-index: 1;
            }
            &_img {
                z-index: 1;
                width: 81px;
                height: 81px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("../../../assets/img/background.png");
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
@media (max-width: 700px) {
    .card {
        width: 100%;
        height: 200px;
        padding: 20px;
        &_title {
            font-size: 16px;
        }
        &_description {
            gap: 60px;
            &_text {
                font-size: 16px;
            }
            &_img {
                width: 67px;
                height: 67px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>