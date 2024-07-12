<template>
  <div id="app">
    <div class="content">
      <Sidebar class="sidebar" />
      <div class="page">
        <router-view/>
        <!-- <MainPage class="main_page" /> -->
        <!-- <Catalog class="catalog"/> -->
        <!-- <Product class="product"/> -->
        <!-- <Contacts /> -->
      </div>
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
* {
  padding: 0px;
  margin: 0px;
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

ul,
li {
  list-style: none;
}
</style>

<style lang="scss" scoped>
#app {
  display: grid;
  grid-template-columns: 356px 36px 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "content content content"
    "footer footer footer";
  min-height: 100vh;
}

.content {
  grid-area: content;

  display: grid;
  grid-template-columns: 356px 36px 1fr;
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

.page{
  .amain_page {
    .wrapper{
      .header{
        visibility: hidden;
      }
    }
  }
}

</style>
