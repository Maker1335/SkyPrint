<template>
    <div class="additional-info">
        <div class="additional-info_paragraphs">
            <p @click="togglePrices" class="additional-info_prices">Цены</p>
            <p @click="toggleRequirements" class="additional-info_requirements-for-layouts">
                Требования к макетам
            </p>
        </div>
        <transition name="fade">
            <div v-if="showPrices" class="additional-info_content">
                <table>
                    <tr>
                        <th>Наименование</th>
                        <th>Цена</th>
                    </tr>
                    <tr>
                        <td>Позиция 1</td>
                        <td>1000 &#8381;</td>
                    </tr>
                    <tr>
                        <td>Позиция 2</td>
                        <td>2000 &#8381;</td>
                    </tr>
                </table>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="showRequirements" class="additional-info_content">
                <p @click="toggleSection(1)">1. К печати принимаются макеты в следующих программах</p>
                <ol v-show="activeSection === 1">
                    <li>COREL DRAW (до 17 версии) – cdr, eps.</li>
                    <li>Adobe Photoshop (CC) – psd, tiff, jpg, bmp.</li>
                    <li>Adobe Acrobat – pdf</li>
                    <li><button
                            @click="copyText('COREL DRAW (до 17 версии) – cdr, eps.\nAdobe Photoshop (CC) – psd, tiff, jpg, bmp.\nAdobe Acrobat – pdf')">Копировать</button>
                    </li>
                </ol>
                <p @click="toggleSection(2)">2. Общие требования</p>
                <ol v-show="activeSection === 2">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Porro ab mollitia ad veniam libero possimus dolores harum.</li>
                    <li><button
                            @click="copyText('Lorem ipsum dolor sit amet consectetur adipisicing elit.\nPorro ab mollitia ad veniam libero possimus dolores harum.')">Копировать</button>
                    </li>
                </ol>
                <p @click="toggleSection(3)">3. Требования к растру и вектору</p>
                <ol v-show="activeSection === 3">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Porro ab mollitia ad veniam libero possimus dolores harum.</li>
                    <li><button
                            @click="copyText('Lorem ipsum dolor sit amet consectetur adipisicing elit.\nPorro ab mollitia ad veniam libero possimus dolores harum.')">Копировать</button>
                    </li>
                </ol>
            </div>
        </transition>
    </div>
</template>

<script>
import { useToast } from 'vue-toastification';

export default {
    name: 'AdditionalInfo',
    data() {
        return {
            showPrices: false,
            showRequirements: false,
            activeSection: null
        };
    },
    methods: {
        togglePrices() {
            this.showPrices = !this.showPrices;
            if (this.showPrices) this.showRequirements = false; // Закрываем требования, если открыты цены
        },
        toggleRequirements() {
            this.showRequirements = !this.showRequirements;
            if (this.showRequirements) this.showPrices = false; // Закрываем цены, если открыты требования
        },
        toggleSection(section) {
            this.activeSection = this.activeSection === section ? null : section;
        },
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
        }
    }
};
</script>

<style lang="scss" scoped>
.additional-info {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 16px;
    margin-top: 30px;
    margin-left: 35px;

    &_paragraphs {
        display: flex;
        gap: 32px;
    }

    &_prices,
    &_requirements-for-layouts {
        position: relative;
        cursor: pointer;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background-color: #27625F;
        }
    }

    &_content {
        margin-top: 20px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-sizing: border-box;

        p {
            margin-left: 20px;
            position: relative;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;

            &::after {
                content: "";
                border: 2px solid #27625F;
                border-width: 0 3px 3px 0;
                display: inline-block;
                padding: 3px;
                -webkit-transform: rotate(45deg);
                position: absolute;
                top: 5px;
                margin-left: 16px;
                box-sizing: border-box;
            }
        }

        ol {
            display: flex;
            flex-direction: column;

            li {
                list-style: decimal;
                margin-left: 60px;
                font-weight: normal;

                &:last-child {
                    list-style: none;
                }

                button {
                    cursor: pointer;
                    margin-top: 10px;
                    color: #27625F;
                    font-size: 16px;
                    background: none;
                    border: none;
                    border-bottom: 1px solid #27625F;
                }
            }
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 16px;

            tr {
                border-bottom: 1px solid #a0b6b5;
                display: flex;

                td {
                    width: 50%;
                    font-size: 16px;
                    padding: 20px 30px;
                    box-sizing: border-box;

                    &:last-child {
                        font-weight: bold;
                    }
                }

                th {
                    width: 50%;
                    font-size: 16px;
                    padding: 20px 30px;
                    box-sizing: border-box;
                }
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    max-height: 1000px;
    opacity: 1;
    transition: max-height 0.5s ease, opacity 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
    max-height: 0;
    opacity: 0;
}

@media (max-width: 1367px) {
    .additional-info {

        &_content {
            margin-top: 20px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-sizing: border-box;

            p {
                margin-left: 20px;
                position: relative;
                cursor: pointer;
                font-size: 20px;
                font-weight: bold;

                &::after {
                    position: relative;
                    top: -3px;
                }
            }
        }
    }
}

@media (max-width: 361px) {
    .additional-info {
        font-size: 14px;
        margin-left: 0px;

        &_content {
            padding: 0px;

            p {
                font-size: 16px;
            }

            ol {
                display: flex;
                flex-direction: column;

                li {
                    button {
                        font-size: 14px;
                    }
                }
            }

            table {
                width: 100%;
                border-collapse: collapse;
                font-size: 16px;

                tr {
                    border-bottom: 1px solid #a0b6b5;
                    display: flex;

                    td {
                        font-size: 14px;
                        padding: 10px;
                    }

                    th {
                        padding: 10px;
                    }
                }
            }
        }
    }
}
</style>
