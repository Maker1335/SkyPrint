<template>
    <div class="header">
        <ul>
            <div class="search-container"><a href="#"><img src="../../src/assets/img/header/search.svg" alt="search"
                        class="search-icon">
                    <input type="text" class="search-input" placeholder="поиск"></a>
            </div>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Оплата</a></li>
            <li><a href="#">Требования к макету</a></li>
            <li><a href="#">Доставка</a></li>
            <li><a href="#">Контакты</a></li>
            <li class="save">
                <a href="#">
                    <p><img class="save_img" src="../../src/assets/img/header/save.svg" alt="save"> 3</p>
                </a>
                <ul class="save_list">
                    <li class="save_item"><img class="save_item_img" src="../../src/assets/img/goods/RollUp.svg" alt="">
                        <p class="save_item_title">Шелкография <img src="../../src/assets/img/header/save.svg" alt="">
                        </p>
                        <p class="save_item_count">От 3 шт</p>
                    </li>
                    <li class="save_item"><img class="save_item_img" src="../../src/assets/img/goods/RollUp.svg" alt="">
                        <p class="save_item_title">Постпечатная обработка <img
                                src="../../src//assets/img/header/save.svg" alt=""></p>
                        <p class="save_item_count">От 3 шт</p>
                    </li>
                    <li class="save_item"><img class="save_item_img" src="../../src/assets/img/goods/RollUp.svg" alt="">
                        <p class="save_item_title">Пластиковые карты <img src="../../src/assets/img/header/save.svg"
                                alt=""></p>
                        <p class="save_item_count">От 3 шт</p>
                    </li>
                </ul>
            </li>
            <li><a href="#"><img src="../../src/assets/img/header/email.svg" alt="email"></a> </li>
            <li class="phone"><a href="#"><img src="../../src/assets/img/header/phone.svg" alt="phone"></a>
                <ul class="phone_list">
                    <li><a href="#"><img src="../../src/assets/img/header/phone.svg" alt="phone"></a></li>
                    <li><a href="#"><img src="../../src/assets/img/footer/whatsapp.svg" alt="whatsapp"></a></li>
                    <li><a href="#"><img src="../../src/assets/img/footer/telegram.svg" alt="telegram"></a></li>
                    <li><a href="#"><img src="../../src/assets/img/footer/vk.svg" alt="vk"></a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 85px;
    background: #EFEFEF;

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;

        li {
            font-size: 16px;
            color: #27625F;

            a {
                text-decoration: none;
                color: #27625F
            }
        }

        .save {
            padding: 10px 20px;
            border: 1px solid #27625F;
            border-radius: 5px;
            transition: background-color 0.5s;
            position: relative;

            &_img {
                width: 12px;
                height: 16px;
            }

            p {
                display: flex;
                align-items: center;
                gap: 5px;
            }

            &:hover {
                border: 1px solid white;
                background-color: white;
            }

            &:hover .save_list {
                opacity: 1;
                pointer-events: auto
            }

            &_list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                position: absolute;
                top: 40px;
                right: 0;
                background-color: white;
                list-style-type: none;
                padding: 20px;
                border-radius: 5px;
                height: auto;
                opacity: 0;
                transition: opacity 0.5s;
                pointer-events: none
            }

            &_item {
                display: grid;
                background-color: #F4F4F4;
                grid-template-columns: 87px 1fr;
                grid-template-areas: "img title"
                    "img count";
                width: 272px;
                height: 103px;

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
                    justify-content: space-between;
                }

                &_count {
                    grid-area: count;
                    font-size: 16px;
                    color: #27625F;
                    font-weight: 600;
                }
            }

        }

        .phone {
            position: relative;

            .phone_list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                position: absolute;
                top: 0;
                right: -10px;
                background-color: black;
                padding: 0;
                margin: 0;
                list-style-type: none;
                border-radius: 30px;
                width: 34px;
                background: #ddd;
                opacity: 0;
                height: 0;
                overflow: hidden;
                transition: opacity 0.5s ease, height 0.5s ease;

                li {
                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
            }

            &:hover .phone_list {
                opacity: 1;
                height: 170px;
                padding: 5px;
            }
        }

        .search-container {
            position: relative;
            width: 100%;
            max-width: 478px;

            .search-icon {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                color: #aaa;
                width: 15px;
                height: 15px;
            }

            .search-input {
                width: 100%;
                padding: 10px 10px 10px 35px;
                border: 1px solid #27625F;
                border-radius: 10px;
                font-size: 16px;
                background: none;
                box-sizing: border-box;
            }

            .search-input::placeholder {
                color: #aaa;
            }
        }

    }

}
</style>
