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
  }
};
</script>

<style lang="scss">
@import './assets/style/index.scss'
</style>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  width: 1920px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "content"
    "footer";
}

.content {
  grid-area: content;
  display: grid;
  grid-template-columns: 356px 36px 1528px;
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

.page {
  .amain_page {
    .wrapper {
      .header {
        visibility: hidden;
      }
    }
  }
}

//@media (max-width: 1367px) {
//  .content {
//    grid-template-columns: 327px 16px 1023px;
//  }
//}
</style>
