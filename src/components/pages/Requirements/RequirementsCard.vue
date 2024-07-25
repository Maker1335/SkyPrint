<template>
    <div class="card">
        <p class="card_title">{{ title }}</p>
        <p class="card_file-type">{{ fileType }}</p>
        <ol>
            <li v-for="(requirement, index) in requirements" :key="index">{{ requirement }}</li>
        </ol>
        <button @click="copyText">{{ buttonText }}</button>
    </div>
</template>

<script>
export default {
    name: 'RequirementsCard',
    props: {
        title: String,
        fileType: String,
        requirements: Array,
        buttonText: String,
        copyText: Function
    }
};
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100%;
    border-radius: 8px;
    background-color: #F5F5F5;
    position: relative;
    padding: 24px;
    box-sizing: border-box;
    gap: 8px;
    padding-bottom: 110px;

    &_title {
        font-size: 30px;
        font-weight: bold;
    }

    &_file-type {
        font-size: 20px;
        font-weight: bold;
        color: #A1A1A1;
    }

    ol {
        display: flex;
        flex-direction: column;
        list-style-type: decimal;
        margin-left: 20px;
        gap: 18px;

        li {
            list-style: decimal;
            font-size: 18px;
            font-weight: bold;
            color: #27625F;
        }
    }

    button {
        position: absolute;
        bottom: 24px;
        right: 40px;
        cursor: pointer;
        color: #27625F;
        font-size: 16px;
        background: none;
        border: none;
        border-bottom: 1px solid #27625F;
    }

    &:first-child {
        background-color: #CEFFFD;
    }
}
</style>
