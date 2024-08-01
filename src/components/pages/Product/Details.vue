<template>
    <div class="details">
        <div class="details_estimated-cost">
            <p class="details_estimated-cost_price">10 400 &#8381;</p>
            <p class="details_estimated-cost_title">Ориентировочная стоимость</p>
        </div>
        <table class="details_table">
            <tr class="details_dimensions">
                <td>Размеры</td>
                <td>
                    <ul class="details_list">
                        <li>50 х 90 мм</li>
                        <li>90 х 100 мм</li>
                        <li>40 х 80 мм</li>
                        <li>200 х 150 мм</li>
                        <li>200 х 150 мм</li>
                        <li>50 х 150 мм</li>
                    </ul>
                </td>
            </tr>
            <tr class="details_paper-type">
                <td>Тип бумаги</td>
                <td>
                    <ul class="details_list">
                        <li>Мелованная 100-300/м²</li>
                        <li>Фактурная 100-300/м²</li>
                        <li>Цветная 100-300/м²</li>
                    </ul>
                </td>
            </tr>
            <tr class="details_print-type">
                <td>Тип печати</td>
                <td>
                    <ul class="details_list">
                        <li>Полноцветная с одной стороны</li>
                    </ul>
                </td>
            </tr>
            <tr class="details_lamination">
                <td>Ламинация</td>
                <td>
                    <ul class="details_list">
                        <li>Матовая</li>
                        <li>глянцевая</li>
                    </ul>
                </td>
            </tr>
            <tr class="details_angles">
                <td>Углы</td>
                <td>
                    <ul class="details_list">
                        <li>Скругленные</li>
                        <li>без скругления</li>
                    </ul>
                </td>
            </tr>
        </table>
        <AdditionalInfo />
        <ActionButtons />
    </div>
</template>

<script>
import AdditionalInfo from './AdditionalInfo.vue';
import ActionButtons from './ActionButtons .vue';
export default {
    name: 'Details',
    components: {
        AdditionalInfo,
        ActionButtons
    }
}
</script>

<style lang="scss" scoped>
.details {
    grid-area: details;

    &_estimated-cost {
        display: flex;
        flex-direction: column;
        font-weight: bold;

        &_price {
            font-size: 75px;
        }

        &_title {
            font-size: 24px;
        }
    }

    &_table {
        width: 100%;
        border-collapse: collapse;
        font-size: 16px;
        margin-top: 20px;

        tr {
            border-bottom: 1px solid #a0b6b5;
            display: flex;

            td {
                width: 50%;
                padding: 20px 30px;
                box-sizing: border-box;

                .details_list {
                    list-style: none;
                    padding: 0;
                    margin: 0;

                    li {
                        display: inline-block;

                        &:not(:last-child)::after {
                            content: ",";
                            margin-right: 4px;
                        }
                    }
                }

                &:last-child {
                    font-weight: bold;
                }
            }
        }
    }
}

@media (max-width: 1367px) {
    .details {
        &_estimated-cost {

            &_price {
                font-size: 50px;
            }

            &_title {
                font-size: 20px;
            }
        }
    }
}

@media (max-width: 361px) {
    .details {
        &_estimated-cost {
            position: absolute;
            top: 0;
            right: 10px;

            &_price {
                font-size: 30px;

            }

            &_title {
                font-size: 14px;
            }
        }

        &_table {
            font-size: 14px;

            tr {
                &:first-child {
                    border-top: 1px solid #a0b6b5;
                }

                td {
                    padding: 20px 0px;
                }
            }
        }
    }
}
</style>