<template>
    <div class="contacts">
        <div class="wrapper">
            <h4>Контакты</h4>
            <div class="contacts_cards">
                <div class="card">
                    <p class="card_title">Менеджер</p>
                    <div class="card_phone">
                        <img src="../assets/img/pages/MainPage/Contacts/phone.svg" alt="">
                        <p>+7 (351) 248-72-87, 245-45-75</p>
                    </div>
                    <div class="card_email">
                        <img src="../assets/img/header/email.svg" alt="">
                        <p>zakaz@skyprint74.ru</p>
                    </div>
                    <p class="card_hours">Пн-Пт: 09:00 — 18:00</p>
                </div>
                <div class="card">
                    <p class="card_title">Дизайнер</p>
                    <div class="card_email">
                        <img src="../assets/img/header/email.svg" alt="">
                        <p>zakaz@skyprint74.ru</p>
                    </div>
                    <p class="card_hours">Пн-Пт: 09:00 — 18:00</p>
                </div>
                <div class="card">
                    <p class="card_title">Копировальный центр</p>
                    <div class="card_phone">
                        <img src="../assets/img/pages/MainPage/Contacts/phone.svg" alt="">
                        <p>+7 (351) 248-72-87</p>
                    </div>
                    <div class="card_email">
                        <img src="../assets/img/header/email.svg" alt="">
                        <p>operator@skyprint74.ru</p>
                    </div>
                    <ul class="card_hours">
                        <li>Пн-Пт: 9:00 — 19:00</li>
                        <li>Сб: 9:00 — 18:00</li>
                        <li>Вс: 9:00 — 16:00</li>
                    </ul>
                </div>
            </div>
            <div class="map">
                <div class="map_info">
                    <div class="address">
                        <p class="address_addre">Наш адрес</p>
                        <p class="address_title">Ул. Витебская 3а. 46530</p>
                    </div>
                    <div class="email">
                        <img src="../assets/img/pages/MainPage/contacts/email.svg" alt="Email">
                    </div>
                    <div class="whatsapp">
                        <img src="../assets/img/pages/MainPage/contacts/whatsapp.jpg" alt="WhatsApp">
                    </div>
                    <div class="telegram">
                        <img src="../assets/img/pages/MainPage/contacts/telegram.svg" alt="Telegram">
                    </div>
                    <div class="vk">
                        <img src="../assets/img/pages/MainPage/contacts/vk.svg" alt="VK">
                    </div>
                </div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=false&amp;source=constructor-api&amp;um=constructor%3A7fb6797bf8d1af4216e7adc1994b150695b59c304837bd4848ad55dd64365ed6"
                    frameborder="0" allowfullscreen="true" width="100%" height="100%" style="display: block;"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../header.vue';
export default {
    name: 'Contacts',
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
.contacts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px 1fr;
    grid-template-areas:
        "h4 h4 h4"
        "cards map map";
    flex-direction: column;
    margin-top: 71px;

    h4 {
        font-size: 30px;
        font-weight: bold;
        color: #27625F;
        margin-bottom: 40px;
        grid-area: h4;
    }

    &_cards {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, auto);
        grid-gap: 10px;
        grid-area: cards;

        .card {
            display: flex;
            flex-direction: column;
            width: 474px;
            height: 190px;
            border-radius: 5px;
            background-color: #CEFFFD;

            &_title {
                font-size: 24px;
                font-weight: bold;
                color: #27625F;
                margin-top: 20px;
                margin-left: 20px;
            }

            &_phone {
                display: flex;
                align-items: center;
                margin-left: 20px;
                margin-top: 20px;

                img {
                    width: 17px;
                    height: 17px;
                    margin-right: 10px;
                }
            }

            &_email {
                display: flex;
                align-items: center;
                margin-left: 20px;
                margin-top: 20px;

                img {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                }
            }

            &_hours {
                margin-left: 20px;
                margin-top: 20px;
            }

            &:nth-child(1) {
                width: 474px;
                height: 190px;
            }

            &:nth-child(2) {
                width: 474px;
                height: 152px;
            }

            &:nth-child(3) {
                width: 474px;
                height: 281px;
                background: #F6F6F6;
            }
        }
    }

    .map {
        grid-area: map;

        &_info {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(1, 1fr);
            gap: 14px;

            .address {
                display: flex;
                flex-direction: column;
                height: 80px;
                width: 340px;
                background: #F6F6F6;
                justify-content: center;

                &_addre {
                    font-size: 20px;
                    font-weight: bold;
                    color: #AFAFAF;
                    margin-left: 25px;
                }

                &_title {
                    font-size: 24px;
                    margin-top: 5px;
                    color: #6A6A6A;
                    margin-left: 25px;
                }
            }

            .email,
            .whatsapp,
            .telegram,
            .vk {
                background: #F6F6F6;
                width: 138px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 33px;
                    height: 33px;
                }
            }
        }

        iframe {
            margin-top: 10px;
            width: 953px;
            height: 549px;
        }
    }
}
</style>