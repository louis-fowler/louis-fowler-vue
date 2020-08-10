<template>
  <footer class="App-footer">
    <a href="#toTop">
      <p>top</p>
    </a>
  </footer>
</template>

<script>
export default {
  Name: "FooterComp"
};
</script>

<style lang="scss" scoped>
.App-footer {
  grid-area: App-footer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
