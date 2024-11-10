<template>
  <div id="app">
    <div class="content">
      <div class="page">
        <router-view />
      </div>
      <Sidebar class="sidebar" />
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
#app {
  min-height: 100vh;
  width: 1920px;
  width: 100%;
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

@media (max-width: 1537px) {
  #app {
    width: 1349px;
  width: calc(100% + 369px);

  }
}

@media (max-width: 1367px) {
  #app {
    width: 1349px;
    width: 100%;
  }

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
