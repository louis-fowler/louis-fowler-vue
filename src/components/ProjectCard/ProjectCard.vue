<template>
  <div>Hello</div>
</template>

<script>
export default {
  name: "ProjectCard"
};
</script>

<style lang="scss" scoped>
.proCardContainer {
  padding-top: 3vh;
  width: 70%;
}

.imgContainer {
  transition: 0.3s;
  -webkit-box-shadow: 0px 0px 35px -13px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 35px -13px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 35px -13px rgba(0, 0, 0, 0.75);
}

.imgContainer:hover {
  -webkit-box-shadow: 0px 0px 70px -13px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 70px -13px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 70px -13px rgba(0, 0, 0, 0.75);
}

.projectLink {
  text-align: center;
  font-size: calc(7px + 2vmin);
  font-weight: 300;
  transition: 0.3s;
}

.projectLink:hover {
  color: #ff913c;
}

/* Links */

.linksContainer a i {
  margin: 10px;
  font-size: 40px;
}
</style>
