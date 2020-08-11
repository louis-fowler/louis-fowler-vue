<template>
  <div class="displayCards">
    <div v-for="(lang, index) in langs" :key="index" class="cardContainer">
      <div class="card">
        <img :src="require(`@/assets/img/${lang.img}`)" :alt="lang.name" />
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
      langs: langArray
    };
  },

  name: "LangCard"
};
</script>
