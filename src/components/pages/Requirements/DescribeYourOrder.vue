<template>
    <div class="describe-your-order">
        <div class="wrapper">
            <h3>Опишите свой заказ</h3>
            <div class="cards">
                <div class="card" v-for="(item, index) in items" :key="index">
                    <p class="card_title">{{ item.title }}</p>
                    <img :src="item.imgSrc" :alt="item.alt" class="card_img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import first from "../../../assets/img/pages/Requirements/1.svg";
import second from "../../../assets/img/pages/Requirements/2.svg";
import three from "../../../assets/img/pages/Requirements/3.svg";
import four from "../../../assets/img/pages/Requirements/4.svg";
import book from "../../../assets/img/pages/Requirements/book.jpg";

export default {
    name: 'DescribeYourOrder',
    data() {
        return {
            items: [
                { title: "Формат продукции с указанием размеров (визитка, брошюра, листовка и т.д.)", imgSrc: first, alt: "фото" },
                { title: "Краткое описание того, чем вы занимаетесь, какая целевая аудитория, а также ссылки на сайт или социальные сети.", imgSrc: second, alt: "фото" },
                { title: "Цвета и шрифты, которые нужно использовать. Если у вас есть фирменный шрифт, то просим описать его и приложить образцы.", imgSrc: three, alt: "фото" },
                { title: "Срок выполнения. Будет замечательно, если вы приложите примеры/образцы или даже зарисовки от руки, как вы видите макет. Если у вас есть брендбук, будем благодарны, если вы его нам пришлете.", imgSrc: four, alt: "фото" },
                { title: "Чем больше информации вы укажете в ТЗ, тем быстрее и качественнее будет разработан макет.", imgSrc: book, alt: "фото" }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.describe-your-order {
    margin-bottom: 50px;
    .wrapper {
        display: grid;
        grid-template-columns: auto 1fr;
    }
    h3 {
        font-size: 30px;
        font-weight: bold;
        width: 100%;
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 12px;
        .card {
            display: flex;
            flex-direction: column;
            width: 462px;
            height: 272px;
            background-color: #F5F5F5;
            position: relative;
            padding: 28px;
            box-sizing: border-box;
            &_title {
                font-size: 16px;
                font-weight: bold;
                z-index: 1;
            }
            &_img {
                position: absolute;
                bottom: 30px;
                right: 45px;
                width: 40px;
                height: 67px;
                &:last-child {
                    width: 56px;
                    height: 49px;
                }
            }
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url("../../../assets/img/background.png");
                background-size: cover;
                opacity: 0;
                transition: opacity 0.5s ease;
            }
            &:hover {
                &::before {
                    opacity: 1;
                }
            }
        }
    }
}
@media (max-width: 1367px) {
    .describe-your-order {
        h3 {
            font-size: 20px;
        }
        .cards {
            gap: 10px;
            .card {
                width: 330px;
                height: 330px;
                &_title {
                    font-weight: 600;
                }
                &_img {
                    bottom: 20px;
                    right: 30px;
                }
            }
        }
    }
}
@media (max-width: 361px) {
    .describe-your-order {
        margin-bottom: 30px;
        .wrapper {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        h3 {
            font-size: 16px;
        }
        .cards {
            gap: 5px;
            .card {
                width: 100%;
                height: 235px;
                &_title {
                    font-size: 14px;
                }
                &_img {
                    bottom: 20px;
                    width: 40px;
                    height: 67px;
                }
            }
        }
    }
}
</style>