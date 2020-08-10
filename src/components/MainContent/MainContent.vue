<template>
  <div class="mainContainer">
    <div class="titleContainer">
      <h2>Full stack web developer residing in Auckland, New Zealand</h2>
    </div>
    <h2 class="titleText">Experience in</h2>
    <div class="displayCards">
      <LangCard />
    </div>
    <h2 class="titleText">Current Projects</h2>
    <div class="displayCards">
      <ProjectCard />
    </div>
    <div class="contactContainer">
      <h2 class="titleText">Contact:</h2>
      <h3>
        Phone:
        <a href="tel:+064-21-903-800">021 903 800</a>
      </h3>

      <h3>
        Email:
        <a href="mailto: louis.fowler@gmail.com">louis.fowler@gmail.com</a>
      </h3>
    </div>
    <div class="linksContainer">
      <a href="https://github.com/louis-fowler">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="https://linkedin.com/in/louis-fowler-9046aa195">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
    </div>
  </div>
</template>

<script>
import LangCard from "../LangCard/LangCard";
import ProjectCard from "../ProjectCard/ProjectCard";

export default {
  name: "MainContent",
  components: {
    LangCard,
    ProjectCard
  }
};
</script>

<style lang="scss" scoped>
.mainContainer {
  width: 90%;
  margin: 0 auto;
  grid-area: mainContainer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mainContainer h1 {
  font-size: calc(10px + 6vmin);
  font-weight: 200;
}

.titleContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3vh;
}

.titleContainer > * {
  font-weight: 500;
  font-size: calc(5px + 3vmin);
}

.titleText {
  padding-top: 3vh;
  padding-bottom: 1vh;
  font-size: calc(15px + 3vmin);
  font-weight: 400;
  border-bottom: 1px solid #ffcaa2;
}

.displayCards {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.projectCards {
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.contactContainer h3 {
  font-weight: 200;
  font-size: calc(12px + 2vmin);
}

.linksContainer a {
  margin: 10px;
  font-size: 40px;
}
</style>
