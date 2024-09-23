<template>
    <div class="layout-requirements">
        <div class="wrapper">
            <div class="cards">
                <RequirementsCard v-for="(card, index) in cards" :key="index" :title="card.title"
                    :fileType="card.fileType" :requirements="card.requirements" :buttonText="card.buttonText"
                    :copyText="card.copyText" />
            </div>
            <button class="layout-requirements_download"><a :href="rere" download>Скачать требования к макетам</a></button>
        </div>
    </div>
</template> 

<script>
import RequirementsCard from './RequirementsCard.vue';
import { useToast } from 'vue-toastification';
import rere from "../../../assets/Требования к макетам.pdf"

export default {
    name: 'LayoutRequirements',
    components: {
        RequirementsCard,
    },
    data() {
        return {
            rere,
            cards: [
                {
                    title: "Общие требования",
                    fileType: "",
                    requirements: [
                        "Масштаб изображения 1:1.",
                        "Вылеты за обрезной формат (припуски) – 2,5 мм с каждой стороны.",
                        "Влеты (расстояние до значимых элементов: текст, логотип и т.д.) – 4 мм с каждой стороны.",
                        "При печати на фактурной (дизайнерской) бумаге, краска может ложиться неравномерно! Поэтому стоит избегать полной заливки.",
                        "Черный цвет должен быть составнойС:75 M:75 Y:75 K:75."
                    ],
                    buttonText: "Копировать",
                    copyText: () => {
                        this.copyText('Масштаб изображения 1:1.\nВылеты за обрезной формат (припуски) – 2,5 мм с каждой стороны.\nВлеты (расстояние до значимых элементов: текст, логотип и т.д.) – 4 мм с каждой стороны.\nПри печати на фактурной (дизайнерской) бумаге, краска может ложиться неравномерно! Поэтому стоит избегать полной заливки.\nЧерный цвет должен быть составнойС:75 M:75 Y:75 K:75.')
                    }
                },
                {
                    title: "Требования к вектору",
                    fileType: "eps, cdr",
                    requirements: [
                        "Все изображения представлены в цветовой модели CMYK с разрешением  не менее 300 dpi.",
                        "Эффекты (прозрачности, тени, градиент) должны быть растрированы 300 dpi.",
                        "Текст должен быть переведен в кривые."
                    ],
                    buttonText: "Копировать",
                    copyText: () => {
                        this.copyText('Все изображения представлены в цветовой модели CMYK с разрешением  не менее 300 dpi.\nЭффекты (прозрачности, тени, градиент) должны быть растрированы 300 dpi.\nТекст должен быть переведен в кривые.')
                    }
                },
                {
                    title: "Требования к растру",
                    fileType: "psd, tiff, jpg",
                    requirements: [
                        "Файл должен быть с разрешением  не менее 300 dpi.",
                        "Файл должен быть представлен в цветовоймодели CMYK.",
                        "Файл не должен содержать слоев,альфа-каналов."
                    ],
                    buttonText: "Копировать",
                    copyText: () => {
                        this.copyText('Файл должен быть с разрешением не менее 300 dpi. \nФайл должен быть представлен в цветовоймодели CMYK.\nФайл не должен содержать слоев, альфа - каналов.')
                    }
                }
            ]
        };
    },
    methods: {
        copyText(text) {
            navigator.clipboard.writeText(text).then(() => {
                this.showToast('Текст скопирован!');
            }).catch(() => {
                this.showToast('Ошибка копирования');
            });
        },
        showToast(message) {
            const toast = useToast();
            toast.success(message, {
                position: "top-right",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: false,
                pauseOnHover: false,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false
            });
        },
    }
};
</script>

<style lang="scss" scoped>
.layout-requirements {
    margin-bottom: 90px;

    .wrapper {
        display: grid;
        grid-template-rows: 1fr, auto;
        gap: 24px;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 22px;
    }

    &_download {
        color: #27625F;
        font-size: 20px;
        font-weight: bold;
        height: 80px;
        border: none;
        background-color: #F5F5F5;
        border-radius: 8px;
        cursor: pointer;
        width: 100%;
        a {
            font-size: 20px;
            text-decoration: none;
            color: #27625F;
        }
    }
}

@media (max-width: 1367px) {
    .layout-requirements {
        margin-bottom: 30px;

        .wrapper {
            gap: 10px;
        }

        &_download {
            height: 60px;
        }
    }
}

@media (max-width: 700px) {
    .layout-requirements {
        margin-bottom: 0px;

        .wrapper {
            gap: 20px;
        }

        .cards {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        &_download {
            font-size: 16px;
            height: 60px;
            a {
                font-size: 16px;
            }   
        }
    }
}
</style>