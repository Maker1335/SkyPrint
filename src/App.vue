<template>
  <div id="app">
    <div class="content">
      <div class="page">
        <router-view />
      </div>
      <Sidebar class="sidebar" />
    </div>
    <div class="pulse">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <i class="fa fa-phone"></i>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import MainPage from './components/views/MaimPage.vue';
import Footer from './components/footer.vue';
import Catalog from './components/views/Catalog.vue';
import Product from './components/views/Product.vue';
import Contacts from './components/views/Contacts.vue';
import Header from './components/header.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    MainPage,
    Footer,
    Catalog,
    Product,
    Contacts,
    Header
  },
  created() {
    window.onload = function () {
      var screenWidth = window.innerWidth;
      var screenHeight = window.innerHeight;
      console.log('Ширина рабочей области: ' + screenWidth + 'px');
      console.log('Высота рабочей области: ' + screenHeight + 'px');
    }
  }
};
</script>

<style lang="scss">
@import './assets/style/index.scss';
</style>

<style lang="scss" scoped>
.pulse {
  background: #4fbaea;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.pulse {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  i {
    text-align: center;

    line-height: 100px;
    color: #fff;
    font-size: 60px;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    animation: sequence 6s ease-in-out infinite;
  }
}

.pulse:before,
.pulse:after {
  content: " ";
  display: block;
  position: absolute;
  border: 50%;
  border: 1px solid #4fbaea;
  left: -20px;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 50%;
}

.pulse:before,
.pulse:after {
}
@keyframes sequence {
  /* Период покачивания */
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(15deg);
  }
  10% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(-15deg);
  }
  20% {
    transform: rotate(0deg);
  }

  /* Задержка перед вращением */
  30% {
    transform: rotate(0deg);
  }

  /* Период вращения */
  40% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }

  /* Задержка перед затуханием */
  60% {
    transform: rotate(360deg);
  }

  /* Период затухания */
  70% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }

  /* Задержка перед повтором */
  100% {
    opacity: 1;
    transform: rotate(0deg);
  }
}


@keyframes animate {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

#app {
  min-height: 100vh;
  //width: 1920px;
  //width: 100%;
  width: max-content;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "content"
    "footer";
  justify-content: center;
}

.content {
  grid-area: content;
  display: grid;
  grid-template-columns: 356px 36px 1508px;
  grid-template-areas:
    "sidebar . content";

  .page {
    grid-area: content;
  }

  .sidebar {
    grid-area: sidebar;
  }
}

.footer {
  grid-area: footer;
}

@media (max-width: 1367px) {
  .content {
    grid-template-columns: 311px 16px 1019px;
  }
}

@media (max-width: 700px) {
  #app {
    width: 100%;
    display: block;
  }

  .content {
    grid-area: content;
    display: flex;
    flex-direction: column;
    width: 100%;
    //display: grid;
    //grid-template-columns: 1fr;
    //grid-template-areas:
    //  "content";

    .page {
      //grid-area: content;
    }

    .sidebar {
      display: none;
    }
  }
}
</style>
