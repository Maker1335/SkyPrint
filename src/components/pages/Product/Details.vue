<template>
    <div class="details">
        <div class="details_estimated-cost">
            <p class="details_estimated-cost_price">{{ productDetails.estimatedCost }}</p>
            <p class="details_estimated-cost_title">Ориентировочная стоимость</p>
        </div>
        <table class="details_table">
            <tr v-for="(values, key) in productDetails.customFields" :key="key">
                <td>{{ key }}</td>
                <td>
                    <ul class="details_list">
                        <li v-for="(value, index) in values" :key="index">{{ value }}</li>
                    </ul>
                </td>
            </tr>
        </table>
        <AdditionalInfo :prices="prices" :rowspan="productDetails.rowspan" :colspan="productDetails.colspan" />
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
    },
    props: {
        productDetails: {
            type: Object,
            required: true
        }, 
        prices: {
            type: Object,
            required: true
        }
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
                    display: flex;
                    flex-wrap: wrap;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    gap: 10px;

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

@media (max-width: 700px) {
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