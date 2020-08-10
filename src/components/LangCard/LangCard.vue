<template>
  <div class="displayCards">
    <div v-for="(lang, index) in langs" :key="index" class="cardContainer">
      <div class="card">
        <img :src="lang.img" :alt="lang.name" />
      </div>
      <h3>{{ lang.name }}</h3>
    </div>
  </div>
</template>

<script>
import langArray from "../../assets/data/langArray";
export default {
  data() {
    return {
      image: require("../../assets/img/shopify-brands.svg"),
      langs: langArray
    };
  },

  name: "LangCard"
};
</script>

<style lang="scss" scoped>
.cardContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35vw;
}

.cardContainer h3 {
  font-size: 2.5vmin;
  margin-top: 0;
  margin-bottom: 5vh;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 25vw;
  border-radius: 10px;
}

.card i {
  font-size: 22vw;
  color: #ffcaa2;
  text-shadow: 0.8px 0.8px 0.5px rgb(143, 48, 19);
}
</style>
