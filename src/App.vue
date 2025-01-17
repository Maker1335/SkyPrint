<template>
  <div id="app">
    <div class="content">
      <div class="page">
        <router-view />
      </div>
      <Sidebar class="sidebar" />
    </div>
    <Footer class="footer" />
    <Telephone />
  </div>

</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Footer from './components/footer.vue';
import Telephone from './components/telephone.vue';


export default {
  name: 'App',
  components: {
    Sidebar,
    Footer,
    Telephone
  },
};
</script>

<style lang="scss">
@import './assets/style/index.scss';
</style>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
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

    .sidebar {
      display: none;
    }
  }
}
</style>
