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
body {
  font-family: "Raleway", sans-serif;
  background-color: rgb(250, 250, 250);
  margin: 0;
}

a {
  text-decoration: none;
  color: black;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.lineRight {
  border-right: 0.02em solid rgb(172, 172, 172);
  padding-right: 0.3em;
  margin-right: 0.3em;
}

.app {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20vmax 1fr 5%;
  grid-template-areas: "App-header" "mainContainer" "App-footer";
  background-color: rgb(250, 250, 250);
}

@media screen and (min-width: 1024px) {
  .app {
    grid-template-rows: 12vmax 1fr 5%;
  }

  .mainContainer {
    margin: 0 auto;
  }

  .displayCards {
    width: 60%;
  }

  .projectCards {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  .proCardContainer {
    width: 35%;
  }

  .proCardContainer:nth-child(1) {
    margin-right: 5vh;
  }

  .cardContainer {
    width: 17vw;
  }

  .card {
    width: 17vw;
    height: 12vw;
  }

  .card i {
    color: black;
    font-size: 10vw;
    transition: 0.6s;
    text-shadow: none;
  }

  .card i:hover {
    font-size: 11vw;
    color: #ffcaa2;
    text-shadow: 2px 2px 2px rgb(143, 48, 19);
  }
}
</style>
