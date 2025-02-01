<template>
    <div class="action-buttons">
        <router-link to=""><button class="action-buttons_submit-application">Оставить заявку</button></router-link>
        <router-link to="/katalog-produktsii/dizayn/dizayn"><button class="action-buttons_designer-services">Услуги
                дизайнера</button></router-link>
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
            z-index: 1;

            &::after {
                content: "";
                border: solid #27625F;
                border-width: 0 4px 4px 0;
                display: inline-block;
                padding: 4px;
                box-sizing: border-box;
                -webkit-transform: rotate(-45deg);
            }

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url("../../../assets/img/background.png");
                opacity: 0;
                background-size: cover;
                transition: opacity 0.5s;
                z-index: -1;
            }
    
            &:hover::before {
                opacity: 1;
                border-radius: 8px; 
            }
        }
    }

    &_submit-application {
        background-color: #CEFFFD;
    }

    &_designer-services {
        background-color: #EAEAEA;
    }
}

@media (max-width: 1367px) {
    .action-buttons {
        gap: 10px;

        a {
            button {
                height: 80px;
                font-size: 16px;
                &::after {
                    border-width: 0 3px 3px 0;
                    padding: 4px;
                }
            }
        }
    }
}

@media (max-width: 700px) {
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
