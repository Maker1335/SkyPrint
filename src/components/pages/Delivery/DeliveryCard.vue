<template>
    <div class="card" :style="{ backgroundColor: backgroundColor }">
        <p class="card_title">{{ title }}</p>
        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DeliveryCard',
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 35px 25px;
    box-sizing: border-box;
    background-color: #F5F5F5;
    p {
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 10px;

            &::before {
                content: '✔';
                position: absolute;
                left: 0;
                width: 10px;
                height: 5px;
            }
        }
    }
    &:first-child{
        background-color: #CEFFFD;
    }
}
</style>