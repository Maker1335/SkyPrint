<template>
    <div class="action-buttons">
        <router-link to=""><button class="action-buttons_submit-application">Оставить заявку</button></router-link>
        <router-link to="/designServices"><button class="action-buttons_designer-services">Услуги дизайнера</button></router-link>
    </div>
</template>

<script>
export default {
    name: 'ActionButtons '
}
</script>

<style lang="scss" scoped>
.action-buttons {
    display: flex;
    margin-top: 40px;
    gap: 33px;

    a {
        text-decoration: none;
        color: #27625F;
        width: 50%;

        button {
            width: 100%;
            cursor: pointer;
            height: 122px;
            font-size: 21px;
            font-weight: bold;
            color: #27625F;
            border-radius: 8px;
            position: relative;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border: none;

            &::after {
                content: "";
                border: solid #27625F;
                border-width: 0 4px 4px 0;
                display: inline-block;
                padding: 4px;
                box-sizing: border-box;
                -webkit-transform: rotate(-45deg);
            }
        }
    }

    &_submit-application {
        background-color: #CEFFFD;

        &:hover {
            background-color: #EAEAEA;
            transition: background-color 0.5s;
        }
    }

    &_designer-services {
        background-color: #EAEAEA;

        &:hover {
            background-color: #CEFFFD;
            transition: background-color 0.5s;
        }
    }
}
@media (max-width: 361px) {
    .action-buttons {
        flex-direction: column;
        margin-top: 30px;
        gap: 10px;
    
        a {
            width: 100%;
    
            button {
                width: 100%;
                height: 80px;
                font-size: 16px;
            }
        }
    }
}
</style>
