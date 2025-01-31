<template>
        <div v-if="isOpen" class="overlay" @click="toggleMenu"></div>
        <div :class="['burger-menu-container', { 'open': isOpen }]">
            <div class="search-container"><img src="../../src/assets/img/header/search.svg" alt="search"
                    class="search-icon">
                <input type="text" class="search-input" placeholder="поиск">
            </div>
            <div :class="['burger-menu', { 'open': isOpen }]" @click="toggleMenu">
                <div class="line" v-for="n in 3" :key="n"></div>
            </div>
            <div v-if="isOpen" class="menu-items">
                <ul>
                    <li><router-link to="/">Главная</router-link></li>
                    <li><router-link to="/catalog">Каталог</router-link></li>
                    <li><router-link to="/aboutUs">О нас</router-link></li>
                    <li><router-link to="/payment">Оплата</router-link></li>
                    <li><router-link to="/requirements">Требования к макету</router-link></li>
                    <li><router-link to="/delivery">Доставка</router-link></li>
                    <li><router-link to="/contacts">Контакты</router-link></li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
    name: 'BurgerMenu',
    emits: ['toggle-menu'],  
    data() {
        return {
            isOpen: false
        };
    },  
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
            this.$emit('toggle-menu', this.isOpen);  // Emit event with current state
        }
    }
};
</script>

<style lang="scss" scoped>
.burger-menu-container {
    display: flex;
    align-items: center;
    position: relative;
    visibility: hidden;
    justify-content: space-between;
    height: 100%;

    &.open {
        background: #EFEFEF;

        .burger-menu {
            .line {
                background-color: #000;
            }
        }
    }

    .search-container {
        position: relative;
        width: 100%;
        max-width: 200px;

        .search-icon {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 10px;
            height: 10px;
        }

        .search-input {
            width: 100%;
            padding: 5px 5px 5px 25px;
            border: 1px solid #27625F;
            border-radius: 10px;
            font-size: 16px;
            background: none;
            box-sizing: border-box;
        }

        .search-input::placeholder {
            color: #aaa;
        }
    }

    .burger-menu {
        width: 30px;
        height: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        cursor: pointer;

        .line {
            width: 100%;
            height: 3px;
            background-color: #000;
            transition: all 0.3s;
        }

        &.open {
            .line:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }

            .line:nth-child(2) {
                opacity: 0;
            }

            .line:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -5px);
            }
        }
    }

    .menu-items {
        position: absolute;
        top: 55px;
        left: 0;
        width: 100%;
        background-color: white;
        border-radius: 8px;
        z-index: 10;
        animation: fadeIn 0.3s;
        padding: 10px;
        box-sizing: border-box;

        ul {
            list-style-type: none;

            li {
                padding: 10px;
                text-align: center;

                a {
                    text-decoration: none;
                    color: #27625F;
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

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>