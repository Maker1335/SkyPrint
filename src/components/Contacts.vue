<template>
    <div class="contacts">
        <div class="wrapper">
            <h4>Контакты</h4>
            <div class="contacts_cards">
                <div v-for="contact in contacts" :key="contact.title" class="card">
                    <p class="card_title">{{ contact.title }}</p>
                    <div v-if="contact.phone" class="card_phone">
                        <img :src="phoneIcon" alt="Phone">
                        <p>{{ contact.phone }}</p>
                    </div>
                    <div v-if="contact.phone" class="card_whatsapp">
                        <img :src="whatsappIcon" alt="WhatsApp">
                        <p>{{ contact.WhatsApp }}</p>
                    </div>
                    <div class="card_email">
                        <img :src="emailIcon" alt="Email">
                        <p>{{ contact.email }}</p>
                    </div>
                    <div class="card_hours" v-if="contact.hours">
                        <ul>
                            <li v-for="(hour, index) in contact.hours" :key="index">{{ hour }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="map">
                <div class="map_info">
                    <div class="address">
                        <p class="address_addre">Наш адрес</p>
                        <p class="address_title">Ул. Витебская 3а</p>
                    </div>
                    <div class="email">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=example@example.com&su=Hello&body=Message%20body" target="_blank">
                            <img :src="emailIcon" alt="email">
                        </a>
                    </div>
                    <div class="whatsapp">
                        <img :src="whatsappIcon" alt="WhatsApp">
                    </div>
                    <div class="telegram">
                        <a href="https://t.me/skyprint74">
                            <img :src="telegramIcon" alt="Telegram">
                        </a>
                    </div>
                    <div class="vk">
                        <a href="https://vk.com/skyprint74" target="_blank">
                            <img :src="vkIcon" alt="VK">
                        </a>
                    </div>
                </div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=false&amp;source=constructor-api&amp;um=constructor%3A7fb6797bf8d1af4216e7adc1994b150695b59c304837bd4848ad55dd64365ed6"
                    frameborder="0" allowfullscreen="true" width="100%" height="100%" style="display: block;">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script>
import phoneIcon from '../assets/img/pages/MainPage/Contacts/phone.svg'
import emailIcon from '../assets/img/pages/MainPage/Contacts/email.svg'
import whatsappIcon from '../assets/img/pages/MainPage/Contacts/WhatsApp.svg'
import telegramIcon from '../assets/img/pages/MainPage/Contacts/telegram.svg'
import vkIcon from '../assets/img/pages/MainPage/Contacts/vk.svg'

export default {
    name: 'Contacts',
    data() {
        return {
            contacts: [
                {
                    title: 'Менеджер',
                    phone: '+7 (351) 248-72-87, 245-45-75',
                    WhatsApp: '+7 (951) 871-71-92',
                    email: 'zakaz@skyprint74.ru',
                    hours: ['Пн-Пт: 09:00 — 18:00']
                },
                {
                    title: 'Дизайнер',
                    email: 'design@skyprint74.ru',
                    hours: ['Пн-Пт: 09:00 — 18:00']
                },
                {
                    title: 'Копировальный центр',
                    //phone: '+7 (351) 248-72-87',
                    email: 'operator@skyprint74.ru',
                    hours: [
                        'Пн-Пт: 9:00 — 19:00',
                        'Сб: 9:00 — 18:00',
                        'Вс: 9:00 — 16:00'
                    ]
                }
            ],
            phoneIcon,
            emailIcon,
            whatsappIcon,
            telegramIcon,
            vkIcon
        };
    }
};
</script>

<style lang="scss" scoped>
.contacts {
    margin-top: 71px;

    .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 80px 1fr;
        grid-template-areas:
            "h4 h4 h4"
            "cards map map";
        flex-direction: column;
    }

    h4 {
        font-size: 50px;
        font-weight: bold;
        color: #27625F;
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
            border-radius: 5px;
            background-color: #CEFFFD;
            gap: 17px;
            padding: 20px;
            box-sizing: border-box;
            justify-content: space-between;
            border-radius: 8px;
            color: #27625F;

            &_title {
                font-size: 24px;
                font-weight: bold;
                margin-left: 20px;
            }

            &_phone {
                display: flex;
                align-items: center;
                margin-left: 20px;
                font-size: 20px;

                img {
                    width: 17px;
                    height: 17px;
                    margin-right: 10px;
                }
            }

            &_whatsapp {
                display: flex;
                align-items: center;
                margin-left: 20px;
                font-size: 20px;

                img {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                }
            }

            &_email {
                display: flex;
                align-items: flex-end;
                margin-left: 20px;
                font-size: 20px;

                img {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                }
            }

            &_hours {
                margin-left: 20px;
                font-size: 20px;
            }

            &:last-child {
                background: #F6F6F6;
                color: #494949;
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
                border-radius: 8px;

                &_addre {
                    font-size: 20px;
                    font-weight: bold;
                    color: #AFAFAF;
                    font-weight: 700;
                    margin-left: 25px;
                }

                &_title {
                    font-size: 24px;
                    margin-top: 5px;
                    color: #6A6A6A;
                    font-weight: 700;
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
                border-radius: 8px;

                img {
                    width: 33px;
                    height: 33px;
                }
            }
        }

        iframe {
            margin-top: 10px;
            width: 100%;
            height: 549px;
            border-radius: 8px;
        }
    }
}

@media (max-width: 1367px) {
    .contacts {
        margin-top: 60px;

        .wrapper {}

        h4 {
            font-size: 24px;
        }

        &_cards {
            grid-gap: 5px;

            .card {
                width: 325px;

                &_title {
                    font-size: 16px;
                }

                &_phone {
                    font-size: 16px;
                }

                &_email {
                    font-size: 16px;
                }

                &_hours {
                    font-size: 16px;
                }

                &:last-child {
                    background: #F6F6F6;
                }
            }
        }

        .map {
            grid-area: map;

            &_info {
                .address {
                    height: 62px;
                    width: 280px;
                    border-radius: 8px;

                    &_addre {
                        font-size: 16px;
                        margin-left: 20px;
                    }

                    &_title {
                        font-size: 20px;
                        margin-left: 20px;
                    }
                }

                .email,
                .whatsapp,
                .telegram,
                .vk {
                    border-radius: 8px;
                    width: 80px;
                    height: 62px;

                    img {
                        width: 30px;
                        height: 30px;
                    }
                }
            }

            iframe {
                height: 502px;
                border-radius: 8px;
            }
        }
    }
}

//@media (max-width: 361px) {
@media (max-width: 700px) {
    .contacts {
        margin-top: 30px;

        .wrapper {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        h4 {
            font-size: 16px;
        }

        &_cards {
            display: flex;
            flex-direction: column;
            grid-gap: 8px;

            .card {
                width: 100%;

                &_title {
                    font-size: 16px;
                }

                &_phone {
                    font-size: 16px;

                    img {
                        width: 17px;
                        height: 17px;
                    }
                }

                &_email {
                    font-size: 16px;

                    img {
                        width: 20px;
                        height: 20px;
                    }
                }

                &_hours {
                    font-size: 16px;
                }
            }
        }

        .map {
            &_info {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(2, 1fr);
                gap: 15px;

                .address {
                    height: 60px;
                    width: 100%;
                    grid-column: span 4;

                    &_addre {
                        font-size: 16px;
                        margin-left: 10px;
                    }

                    &_title {
                        font-size: 20px;
                        margin-left: 10px;
                    }
                }

                .email,
                .whatsapp,
                .telegram,
                .vk {
                    width: 100%;
                    height: 58px;

                    img {
                        width: 33px;
                        height: 33px;
                    }
                }
            }

            iframe {
                margin-top: 5px;
                width: 100%;
                height: 441px;
            }
        }
    }
}
</style>