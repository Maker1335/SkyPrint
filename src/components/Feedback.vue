<template>
    <div class="feedback">
        <div class="wrapper">
            <h4>{{ titleText }}</h4>
            <div class="feedback_form">
                <div class="form">
                    <input type="text" placeholder="Имя" class="form_input">
                    <input type="phone" placeholder="Телефон" class="form_input">
                    <input type="email" placeholder="Почта" class="form_input">
                    <label class="form_checkbox"><input type="checkbox"> Нажимая кнопку "Отправить", я соглашаюсь с
                        условиями <a href="#">пользовательского соглашения</a> </label>
                    <button class="form_button">
                        <p class="form_button_text">Отправить</p>
                    </button>
                </div>
                <div class="contact-manager" :class="{ selected: selectedContact === 'manager' }"
                    @click="selectContact('manager')">
                    <p>
                        Связаться с менеджером
                        <img v-if="selectedContact === 'manager'"
                            src="../assets/img/pages/MainPage/Feedback/checkmark.svg" alt="галочка" />
                    </p>
                </div>
                <div class="contact-designer" :class="{ selected: selectedContact === 'designer' }"
                    @click="selectContact('designer')">
                    <p>
                        Связаться с дизайнером
                        <img v-if="selectedContact === 'designer'"
                            src="../assets/img/pages/MainPage/Feedback/checkmark.svg" alt="галочка" />
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feedback',
    data() {
        return {
            selectedContact: 'manager', // Начальное состояние
        };
    },
    methods: {
        selectContact(contact) {
            this.selectedContact = contact;
        },
    },
    props: {
        titleText: Object
    }
}
</script>

<style lang="scss" scoped>
$goodsBG: "../assets/img/background.png";

.feedback {
    display: flex;
    flex-direction: column;
    background: #CEFFFD;
    margin-top: 80px;
    padding: 30px;

    h4 {
        font-size: 50px;
        font-weight: bold;
        color: #27625F;
        width: 600px;
        margin-bottom: 47px;
    }

    &_form {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-gap: 10px;

        .form {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(5, 1fr);
            grid-gap: 10px;

            &_input {
                width: 474px;
                height: 65px;
                border-radius: 5px;
                font-size: 16px;
                color: #80AAA8;
                padding-left: 10px;
                background: #FFFFFF;
                border: 0px;
            }

            &_checkbox {
                font-size: 16px;
                color: #27625F;
                width: 402px;
            }

            &_button {
                width: 474px;
                height: 62px;
                border-radius: 5px;
                background: none;
                color: #27625F;
                transition: all 0.5s;
                position: relative;

                &_text {
                    font-size: 20px;
                    z-index: 2;
                    position: relative;
                }

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url($goodsBG);
                    background-size: cover;
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }

                &:hover {
                    background-color: transparent;

                    color: #FFFFFF;

                    &::before {
                        opacity: 1;
                    }
                }
            }
        }

        .contact-manager,
        .contact-designer {
            width: 474px;
            height: 356px;
            border-radius: 5px;
            background-color: none;
            transition: background-color 0.5s;

            p {
                padding: 20px;
                font-size: 20px;
                color: #27625F;
                font-weight: bold;
            }
        }

        .selected {
            background-color: #FFFFFF;
        }
    }
}
</style>