<template>
    <div class="pulse" @click="toggleAnimation">
        <img src="../assets/img/Telephone/159832.png" alt="" class="telephone" />
        <div class="extra-items">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=zakaz@skyprint74.ru&su=Заказ с сайта SKYPRINT&body=Здравствуйте,%20я%20..."
                target="_blank">
                <img src="../assets/img/Telephone/email.svg" alt="" class="item">
            </a>
            <a href="https://vk.com/skyprint74"><img src="../assets/img/Telephone/vk.svg" alt="" class="item"></a>
            <a href="https://wa.me/79518177192"><img src="../assets/img/Telephone/WhatsApp.svg" alt="" class="item"></a>
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
            isOpen: false,
            animationPaused: false,
        };
    },
    methods: {
        toggleAnimation() {
            this.isOpen = !this.isOpen;
            this.animationPaused = !this.animationPaused;
        },
    },
};
</script>

<style lang="scss" scoped>
.pulse {
    background: #4fbaea;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    position: fixed;
    bottom: 5%;
    left: calc(100% - 120px);
    z-index: 1000;
    cursor: pointer;

    .telephone {
        position: absolute;
        filter: invert(1);
        left: 19px;
        top: 18px;
        width: 35px;
        animation: sequence 3s ease-in-out infinite;
        animation-play-state: normal;
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

    .pulse img {
        animation-play-state: var(--animationState);
    }

    .extra-items {
        position: absolute;
        bottom: 110%;
        left: 17%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        pointer-events: none; 
        .item {
            width: 50px;
            height: auto;

            img {
                width: 100px;
                height: 100px;
            }
        }
    }

    &:hover .extra-items {
        opacity: 1;
        pointer-events: auto; 
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