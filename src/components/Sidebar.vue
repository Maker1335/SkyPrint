<template>
    <div class="sidebar">
        <router-link to="/">
            <img src="../assets/img/Sidebar/logo.svg" alt="Логотип компании" class="logo">
        </router-link>
        <ul class="service-list">
            <li><a href="#"><img src="../assets/img/goods/businessСards.svg" alt="">
                    <p>Визитки</p>
                </a></li>
            <li><a href="#"><img src="../assets/img/goods/printing.svg" alt="">
                    <p>Полиграфия</p>
                </a></li>
            <li><a href="#"><img src="../assets/img/goods/notepads.svg" alt="">
                    <p>Широкоформатная печать</p>
                </a></li>
            <li><a href="#"><img src="../assets/img/goods/lamination.svg" alt="">
                    <p>Копировальные услуги</p>
                </a></li>
            <li><a href="#"><img src="../assets/img/goods/pens.svg" alt="">
                    <p>Сувениры</p>
                </a></li>
            <li><a href="#"><img src="../assets/img/goods/canvases.svg" alt="">
                    <p>Тиражирование</p>
                </a></li>
            <li><a href="#"><img src="../assets/img/goods/printing.svg" alt="">
                    <p>Прочее</p>
                </a></li>
            <ul class="goods-list">
                <router-link to="/product">
                    <li class="goods-list_item"><img class="goods-list_item_img"
                            src="../../src/assets/img/goods/printing.svg" alt="фото товара">
                        <p class="goods-list_item_title">Название товара
                            <img class="goods-list_item_save" src="../../src/assets/img/header/saveOff.svg"
                                alt="фото закладки">
                        </p>
                        <p class="goods-list_item_count">От 3 шт</p>
                    </li>
                </router-link>
                <li class="goods-list_item"><img class="goods-list_item_img"
                        src="../../src/assets/img/goods/printing.svg" alt="фото товара">
                    <p class="goods-list_item_title">Название товара
                        <img class="goods-list_item_save" src="../../src/assets/img/header/saveOff.svg"
                            alt="фото закладки">
                    </p>
                    <p class="goods-list_item_count">От 3 шт</p>
                </li>
                <li class="goods-list_item"><img class="goods-list_item_img"
                        src="../../src/assets/img/goods/printing.svg" alt="фото товара">
                    <p class="goods-list_item_title">Название товара
                        <img class="goods-list_item_save" src="../../src/assets/img/header/saveOff.svg"
                            alt="фото закладки">
                    </p>
                    <p class="goods-list_item_count">От 3 шт</p>
                </li>
                <li class="goods-list_item"><img class="goods-list_item_img"
                        src="../../src/assets/img/goods/printing.svg" alt="фото товара">
                    <p class="goods-list_item_title">Название товара
                        <img class="goods-list_item_save" src="../../src/assets/img/header/saveOff.svg"
                            alt="фото закладки">
                    </p>
                    <p class="goods-list_item_count">От 3 шт</p>
                </li>
                <li class="goods-list_item"><img class="goods-list_item_img"
                        src="../../src/assets/img/goods/printing.svg" alt="фото товара">
                    <p class="goods-list_item_title">Название товара
                        <img class="goods-list_item_save" src="../../src/assets/img/header/saveOff.svg"
                            alt="фото закладки">
                    </p>
                    <p class="goods-list_item_count">От 3 шт</p>
                </li>
                <li class="goods-list_item"><img class="goods-list_item_img"
                        src="../../src/assets/img/goods/printing.svg" alt="фото товара">
                    <p class="goods-list_item_title">Название товара
                        <img class="goods-list_item_save" src="../../src/assets/img/header/saveOff.svg"
                            alt="фото закладки">
                    </p>
                    <p class="goods-list_item_count">От 3 шт</p>
                </li>
                <li class="goods-list_item"><img class="goods-list_item_img"
                        src="../../src/assets/img/goods/printing.svg" alt="фото товара">
                    <p class="goods-list_item_title">Название товара
                        <img class="goods-list_item_save" src="../../src/assets/img/header/saveOff.svg"
                            alt="фото закладки">
                    </p>
                    <p class="goods-list_item_count">От 3 шт</p>
                </li>
                <li class="goods-list_item"><img class="goods-list_item_img"
                        src="../../src/assets/img/goods/printing.svg" alt="фото товара">
                    <p class="goods-list_item_title">Название товара
                        <img class="goods-list_item_save" src="../../src/assets/img/header/saveOff.svg"
                            alt="фото закладки">
                    </p>
                    <p class="goods-list_item_count">От 3 шт</p>
                </li>
                <li class="goods-list_item"><img class="goods-list_item_img"
                        src="../../src/assets/img/goods/printing.svg" alt="фото товара">
                    <p class="goods-list_item_title">Название товара
                        <img class="goods-list_item_save" src="../../src/assets/img/header/saveOff.svg"
                            alt="фото закладки">
                    </p>
                    <p class="goods-list_item_count">От 3 шт</p>
                </li>
            </ul>
        </ul>
        <a href="#contact" class="contact-link">
            <p>Связаться с менеджером</p>
        </a>
        <router-link to="/designServices" class="designer-link">
            <p>Услуги дизайнера</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
};
</script>

<style lang="scss" scoped>
.sidebar {
    position: sticky;
    top: 38px;
    width: 331px;
    height: 850px;
    background-color: #FFFFFF;
    color: white;
    display: flex;
    flex-direction: column;
    margin-top: 38px;
    margin-right: 36px;
    margin-left: 34px;
    z-index: 1;


    .logo {
        width: 178px;
        height: 74px;
        margin-bottom: 20px;
    }

    .service-list {
        list-style-type: none;
        width: 100%;
        position: relative;

        li {
            margin-bottom: 10px;

            a {
                color: #010101;
                text-decoration: none;
                display: flex;
                align-items: center;
                background-color: #F4F4F4;
                border-radius: 5px;
                position: relative;
                transition: background-color 0.5s;

                &:hover {
                    background: none;
                }

                p {
                    width: 156px;
                }

                img {
                    height: 75px;
                    width: 112px;
                }

                &::after {
                    content: '>';
                    position: absolute;
                    right: 10px;
                    color: #010101;
                    font-weight: bold;
                }
            }

            &:hover {
                background-image: url("../assets/img/background.png");
                background-size: cover;
            }

        }

        .goods-list {
            position: absolute;
            top: 8%;
            //left: -1000%;
            max-width: 0px;
            background-color: white;
            transition: left 0.5s ease;
            display: grid;
            grid-template-columns: repeat(2, 272px);
            gap: 8px;
            padding: 10px;
            visibility: hidden;
            opacity: 0;

            a {
                text-decoration: none;
            }

            &_item {
                display: grid;
                background-color: #F4F4F4;
                grid-template-areas: "img title"
                    "img count";
                width: 272px;
                margin: 0px;
                align-items: center;

                &_img {
                    grid-area: img;
                    width: 87px;
                    height: 87px;
                    grid-row: span 2;
                }

                &_title {
                    grid-area: title;
                    font-size: 16px;
                    color: black;
                    width: 166px;
                    display: flex;
                    justify-content: space-between;
                }

                &_count {
                    grid-area: count;
                    font-size: 16px;
                    color: #27625F;
                    font-weight: 600;
                }

                &_save {
                    width: 13px;
                    height: 16px;
                }
            }
        }

        &:hover .goods-list {
            left: 100%;
            transition: all 0.5s ease;
            max-width: 1000px;
            opacity: 1;
            visibility: visible;
        }

    }

    .contact-link,
    .designer-link {
        display: flex;
        color: #27625F;
        text-decoration: none;
        background-color: #F4F4F4;
        border-radius: 5px;
        text-align: center;
        width: 331px;
        height: 75px;
        margin-top: 10px;
        position: relative;
        font-weight: bold;
        align-items: center;
        transition: background-image 0.5s;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('../../src/assets/img/background.png');
            opacity: 0;
            background-size: cover;
            transition: opacity 0.5s;
        }

        &:hover::before {
            opacity: 1;
        }

        p {
            margin-left: 18px;
            z-index: 1;
        }

        &::after {
            content: '>';
            position: absolute;
            right: 10px;
            color: #010101;
        }
    }
}

//@media (max-width: 1367px) {
//    .sidebar {
//        position: sticky;
//        top: 38px;
//        width: 294px;
//        height: 850px;
//        background-color: #FFFFFF;
//        color: white;
//        display: flex;
//        flex-direction: column;
//        margin-top: 38px;
//        margin-right: 36px;
//        margin-left: 34px;
//        z-index: 1;
//        .logo {
//            width: 117px;
//            height: 49px;
//        }
//        .service-list {
//            li {
//                a {
//                    img {
//                        width: 81px;
//                        height: 75px;
//                    }
//                }
//            }
//        }
//        .contact-link,
//        .designer-link {
//            width: 294px;
//            height: 64px;
//        }
//    }
//}
</style>
