<template>
  <header class="App-header" id="toTop">
    <a href="louisfowler.co.nz">
      <h2>Louis Fowler - Web Dev</h2>
    </a>
  </header>
</template>

<script>
export default {
  Name: "HeaderComp"
};
</script>

<style lang="scss" scoped>
.App-header {
  grid-area: App-header;
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: rgb(0, 0, 0);
  border-bottom: 0.05em solid #ffcaa2;
}

.App-header h2 {
  font-weight: 200;
  padding: 0.1em 0.2em;
  border-bottom: 0.05em solid rgb(172, 172, 172);
}
</style>
