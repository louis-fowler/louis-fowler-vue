<template>
  <div class="app">
    <HeaderComp />
    <MainContent />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "./components/FooterComp/FooterComp";
import HeaderComp from "./components/HeaderComp/HeaderComp";
import MainContent from "./components/MainContent/MainContent";
export default {
  name: "App",
  components: {
    FooterComp,
    HeaderComp,
    MainContent
  }
};
</script>

<style lang="scss">
@import "./style.css";
</style>
