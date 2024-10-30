<template>
    <div class="card">
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
    &_title {
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-weight: 700;
        li {
            position: relative;
            padding-left: 25px;
            font-weight: 700;

            &::before {
                content: '';
                background-image: url('../../../assets/img/pages/Delivery/checkMark.svg');
                background-size: cover;
                position: absolute;
                top: 6px;
                left: 0;
                width: 10px;
                height: 6px;
            }
        }
    }
    &:first-child{
        background-color: #CEFFFD;
    }
}
@media (max-width: 1367px) {
    .card {
        gap: 20px;
        padding: 25px;
        &_title {
            font-size: 20px;
            margin-bottom: 20px;
        }
    
        ul {
            gap: 20px;
    
            li {
                position: relative;
                padding-left: 25px;
            }
        }
    }
}
@media (max-width: 700px) {
    .card {
        gap: 20px;
        padding: 20px;
        &_title {
            font-size: 20px;
            margin-bottom: 0px;
        }
    
        ul {
            gap: 20px;
        }
    }
}
</style>