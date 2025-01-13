<template>
    <div class="pulse" @click="toggleAnimation">
        <img src="../assets/img/Telephone/159832.png" alt="" class="telephone" />
        <div class="extra-items">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=example@example.com&su=Hello&body=Message%20body"
                target="_blank">
                <img src="../assets/img/Telephone/email.svg" alt="" class="item">
            </a>
            <a href="https://vk.com/skyprint74"><img src="../assets/img/Telephone/vk.svg" alt="" class="item"></a>
            <img src="../assets/img/Telephone/WhatsApp.svg" alt="" class="item">
            <a href="https://t.me/skyprint74">
                <img src="../assets/img/Telephone/tg.svg" alt="" class="item">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Telephone',
    data() {
        return {
            isOpen: false, // Состояние, показывающее, нужно ли отображать дополнительные элементы
            animationPaused: false, // Состояние для паузы анимации
        };
    },
    methods: {
        toggleAnimation() {
            this.isOpen = !this.isOpen; // Переключаем видимость дополнительных элементов
            this.animationPaused = !this.animationPaused; // Останавливаем или запускаем анимацию
        },
    },
};
</script>

<style lang="scss" scoped>
.pulse {
    background: #4fbaea;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: sticky;
    bottom: 10%;
    left: 90%;
    z-index: 1;
    cursor: pointer;

    .telephone {
        position: absolute;
        filter: invert(1);
        left: 22px;
        top: 18px;
        width: 58px;
        animation: sequence 3s ease-in-out infinite;
        animation-play-state: normal;
        transition: 0.3s;
    }

    .telephone2 {
        position: absolute;
        filter: invert(1);
        left: 22px;
        top: 18px;
        width: 58px;
        transition: 0.3s;
    }

    &::before,
    &::after {
        content: " ";
        display: block;
        position: absolute;
        border: 50%;
        border: 1px solid #4fbaea;
        left: -20px;
        right: -20px;
        top: -20px;
        bottom: -20px;
        border-radius: 50%;
        animation: animate 3s ease-in-out infinite;
    }

    /* Остановка анимации при клике */
    .pulse img {
        animation-play-state: var(--animationState);
    }

    /* Появление дополнительных элементов */
    .extra-items {
        position: absolute;
        bottom: 110%;
        left: 22%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        opacity: 0;
        transition: opacity 1s, transform 1s;

        .item {
            width: 60px;
            height: auto;

            img {
                width: 100px;
                height: 100px;
            }
        }
    }

    &:hover .extra-items {
        opacity: 1;
    }


}

@keyframes sequence {
    0% {
        transform: rotate(0deg);
    }

    5% {
        transform: rotate(15deg);
    }

    10% {
        transform: rotate(0deg);
    }

    15% {
        transform: rotate(-15deg);
    }

    20% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

@keyframes animate {
    0% {
        transform: scale(0.5);
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        transform: scale(1.2);
        opacity: 0;
    }
}
</style>