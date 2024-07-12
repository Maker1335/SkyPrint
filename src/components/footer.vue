<template>
    <div class="footer">
        <ul class="footer_links">
            <li>Контакты</li>
            <li>Каталог</li>
            <li>Портфолио</li>
            <li>О нас</li>
            <li>Требования к макету</li>
            <li>Доставка</li>
            <li>Оплата</li>
        </ul>
        <ul class="footer_catalog">
            <li>Широкоформатная печать</li>
            <li>Холсты</li>
            <li>Копировальные услуги</li>
            <li>Сувениры</li>
            <li>Полиграфия</li>
            <li>Дизайн</li>
            <li>Печать на холсте</li>
        </ul>
        <ul class="footer_catalog">
            <li>Широкоформатная печать</li>
            <li>Холсты</li>
            <li>Копировальные услуги</li>
            <li>Сувениры</li>
            <li>Полиграфия</li>
            <li>Дизайн</li>
            <li>Печать на холсте</li>
        </ul>
        <div class="orders">
            <p class="text">Приём заказов</p>
            <div class="manager">
                <p class="title">Менеджер</p>
                <p class="text"><img src="../assets/img/footer/phone.svg" alt="phone">+7 (351) 248-72-87, 245-45-75</p>
                <p class="text"><img src="../assets/img/footer/email.svg" alt="email">zakaz@skyprint74.ru</p>
            </div>
            <div class="designer">
                <p class="title">Дизайнер</p>
                <p class="text"><img src="../assets/img/footer/email.svg" alt="email">zakaz@skyprint74.ru</p>
                <p class="text">Пн-Пт: 09:00 — 18:00</p>
            </div>
            <ul class="social_links">
                <li><img src="../assets/img/footer/email.svg" alt="email"></li>
                <li><img src="../assets/img/footer/whatsapp.svg" alt="WhatsApp"></li>
                <li><img src="../assets/img/footer/telegram.svg" alt="tg"></li>
                <li><img src="../assets/img/footer/vk.svg" alt="vk"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
    margin-top: 111px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: #27625F;
    z-index: 1;
    color: white;
    padding: 75px 35px 35px 35px;

    &_links {
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
            font-size: 30px;
            font-weight: bold;
        }
    }

    &_catalog {
        display: flex;
        flex-direction: column;
        gap: 13px;

        li {
            font-size: 20px;
        }
    }

    .orders {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .text {
            font-size: 20px;
            font-weight: bold;
        }

        .title {
            font-size: 16px;
        }

        .manager,
        .designer {
            display: flex;
            flex-direction: column;
            gap: 10px;

            img {
                width: 17px;
                height: 17px;
            }

            .text {
                display: flex;
                align-items: center;
                gap: 5px;
            }
        }

        .social_links {
            display: flex;
            gap: 33px;

            img {
                width: 30px;
                height: 30px;
            }
        }
    }
}
</style>