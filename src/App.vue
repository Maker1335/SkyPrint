<template>
  <div id="app">
    <!-- <Sidebar class="sidebar" /> -->
    <div class="content">
      <Sidebar class="sidebar" />
      <MainPage class="main_page" />
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import MainPage from './components/views/MaimPage.vue';
import Footer from './components/footer.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    MainPage,
    Footer
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
//#app {
//  display: flex;
//  flex-direction: column;
//  min-height: 100vh;
//}

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

  .main_page {
    grid-area: content;
  }

  .sidebar {
    grid-area: sidebar;
  }
}



.footer {
  grid-area: footer;
}
</style>
