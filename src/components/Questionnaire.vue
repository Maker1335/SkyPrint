<template>
    <div v-if="isOpen" class="overlay" @click="toggleMenu"></div>
    <div v-if="isOpen" class="questionnaire">
        <h2 class="questionnaire_title">Скоро перезвоним</h2>
        <div class="questionnaire_form">
            <form @submit.prevent="handleSubmit" class="form" >
                <input type="text" placeholder="Имя" v-model="formData.name" class="form_input" required />
                <input type="tel" placeholder="Телефон" v-model="formData.phone" class="form_input" required />
                <input type="email" placeholder="Почта" v-model="formData.email" class="form_input" required />
                <label class="form_checkbox">
                    <input type="checkbox" v-model="formData.agreement" required />
                    Нажимая кнопку "Отправить", я соглашаюсь с условиями
                    <a href="#">пользовательского соглашения</a>
                </label>
                <button type="submit" class="form_button">Отправить</button>
            </form>
            <p v-if="successMessage" class="success_message">{{ successMessage }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Questionnaire',
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        toggleMenu: {
            type: Function,
            required: true,
        },
    },
    data() {
        return {
            formData: {
                name: '',
                phone: '',
                email: '',
                agreement: false,
            },
            successMessage: '',
        };
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.formData),
                });

                if (response.ok) {
                    this.successMessage = 'Ваш запрос успешно отправлен!';
                    this.resetForm();
                } else {
                    throw new Error('Ошибка при отправке данных');
                }
            } catch (error) {
                console.error('Ошибка:', error.message);
                alert('Не удалось отправить данные. Попробуйте снова позже.');
            }
        },
        resetForm() {
            this.formData = {
                name: '',
                phone: '',
                email: '',
                agreement: false,
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.questionnaire {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #27625F;
    position: absolute;
    background: #FFFFFF;
    padding: 30px;
    border-radius: 8px;
    top: 50%;
    left: 300%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: auto;

    &_title {
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 30px;
    }

    &_form {
        .form {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(5, 1fr);
            grid-gap: 10px;

            &_input {
                width: 620px;
                height: 65px;
                border-radius: 5px;
                font-size: 16px;
                color: #80AAA8;
                padding-left: 10px;
                padding-right: 10px;
                background: #F4F4F4;
                border: 0px;
                box-sizing: border-box;
            }

            &_checkbox {
                font-size: 16px;
                width: 402px;

                a {
                    color: #27625F;
                    text-decoration: underline;
                }
            }

            &_button {
                width: 620px;
                height: 62px;
                border-radius: 5px;
                background: none;
                font-size: 20px;
                font-weight: bold;
                color: #27625F;
                transition: all 0.5s;
                border: 1px solid #27625F;

                &:hover {
                    background-image: url(../assets/img/background.png);
                    background-size: cover;
                    color: #FFFFFF;
                }
            }
        }
    }
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 8;
}
</style>