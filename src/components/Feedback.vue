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
                    <button class="form_button">Отправить</button>
                </div>
                <div class="contact-manager" :class="{ selected: selectedContact === 'manager' }"
                    @click="selectContact('manager')">
                    <p>
                        Связаться с менеджером
                        <img v-if="selectedContact === 'manager'" :src="checkmark" alt="галочка" />
                    </p>
                </div>
                <div class="contact-designer" :class="{ selected: selectedContact === 'designer' }"
                    @click="selectContact('designer')">
                    <p>
                        Связаться с дизайнером
                        <img v-if="selectedContact === 'designer'" :src="checkmark" alt="галочка" />
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import checkmark from "../assets/img/pages/MainPage/Feedback/checkmark.svg"

export default {
    name: 'Feedback',
    data() {
        return {
            selectedContact: 'manager', // Начальное состояние
            checkmark
        };
    },
    methods: {
        selectContact(contact) {
            this.selectedContact = contact;
        },
    },
    props: {
        titleText: String
    }
}
</script>

<style lang="scss" scoped>
$goodsBG: "../assets/img/background.png";

.feedback {
    background: #CEFFFD;
    margin-top: 80px;
    padding: 30px;

    .wrapper {
        display: flex;
        flex-direction: column;
    }

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
                padding-left: 25px;
                background: #FFFFFF;
                border: 0px;
                box-sizing: border-box;
            }

            &_checkbox {
                font-size: 16px;
                color: #27625F;
                width: 402px;

                a {
                    color: #27625F;
                    text-decoration: underline;
                }
            }

            &_button {
                width: 474px;
                height: 62px;
                border-radius: 5px;
                background: none;
                font-size: 20px;
                color: #27625F;
                transition: all 0.5s;
                border: 1px solid #27625F;
                cursor: pointer;

                &:hover {
                    background-image: url($goodsBG);
                    background-size: cover;
                    color: #FFFFFF;
                border: none;
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
            border: 1px solid #27625F;

            p {
                padding: 20px;
                font-size: 20px;
                color: #27625F;
                font-weight: bold;
            }
        }

        .selected {
            background-color: #FFFFFF;
            border: none;

        }
    }
}

@media (max-width: 1367px) {
    .feedback {
        margin-top: 80px;

        .wrapper {
            display: flex;
            flex-direction: column;
        }

        h4 {
            font-size: 30px;
            width: 400px;
            margin-bottom: 20px;
        }

        &_form {
            .form {
                grid-gap: 8px;

                &_input {
                    width: 100%;
                    height: 40px;
                    padding-left: 18px;
                }

                &_checkbox {
                    font-size: 12px;
                    width: 100%;
                }

                &_button {
                    width: 100%;
                    height: 40px;
                    font-size: 16px;
                }
            }

            .contact-manager,
            .contact-designer {
                width: 100%;
                height: 238px;
                border-radius: 5px;
                background-color: none;
                transition: background-color 0.5s;

                p {
                    padding: 20px;
                    font-size: 16px;
                    color: #27625F;
                    font-weight: bold;
                }
            }

            .selected {
                background-color: #FFFFFF;
            }
        }
    }
}

//@media (max-width: 361px) {
    @media (max-width: 700px) {
    .feedback {
        margin-top: 40px;
        padding: 10px;

        .wrapper {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        h4 {
            font-size: 24px;
            width: 300px;
            margin-bottom: 20px;
        }

        &_form {
            display: flex;
            flex-direction: column;
            gap: 8px;

            .form {
                display: grid;
                grid-template-rows: 44px 44px 44px 60px 60px 35px 44px;
                grid-template-areas: 
                "input"
                "input"
                "input"
                "."
                "."
                "checkbox"
                "button"
                ;
                gap: 8px;

                &_input {
                    width: 100%;
                    height: 44px;
                    font-size: 14px;
                }

                &_checkbox {
                    font-size: 14px;
                    width: 100%;
                    grid-area: checkbox;
                }

                &_button {
                    width: 100%;
                    height: 44px;
                    font-size: 14px;
                    grid-area: button;
                }
            }

            .contact-manager,
            .contact-designer {
                width: 100%;
                height: 60px;
                border: 1px solid #000000;
                box-sizing: border-box;
                position: absolute;
                p {
                    font-size: 14px;
                }
            }
            .contact-manager{
                bottom: 163px;
            }
            .contact-designer{
                bottom: 95px;
            }
        }
    }
}
</style>