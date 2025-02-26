<template>
  <div id="app">
    <HeaderComponent />
    <!--<MainContentComponent />-->
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import MainContentComponent from './components/MainContent.vue';
import FooterComponent from './components/Footer.vue';

export default {
  components: {
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
  },
};
</script>
