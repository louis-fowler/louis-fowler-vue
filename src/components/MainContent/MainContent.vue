<template>
  <div class="mainContainer">
    <div class="titleContainer">
      <h2>Full stack web developer residing in Auckland, New Zealand</h2>
    </div>
    <h2 class="titleText">Experience in</h2>
    <LangCard />
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
