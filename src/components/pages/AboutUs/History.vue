<template>
    <div class="history">
        <div class="wrapper">
            <h3>История</h3>
            <div class="image-container">
                <img src="../../../assets/img/pages/AboutUs/history.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'History'
}
</script>

<style lang="scss" scoped>
.history {
    margin-bottom: 90px;
    h3 {
        font-size: 38px;
        font-weight: bold;
        margin-bottom: 50px;
    }
    .image-container {
        overflow-x: auto;
        white-space: nowrap;
        img {
            display: inline-block;
            max-width: none;
        }
    }
    
}
@media (max-width: 1367px) {
    .history {
        h3 {
            font-size: 20px;
        }
    }
}
@media (max-width: 700px) {
    .history {
        margin-bottom: 30px;
        h3 {
            font-size: 16px;
            margin-bottom: 20px;
        }
        img {
            height:  100%;
        }
    }
}
</style>