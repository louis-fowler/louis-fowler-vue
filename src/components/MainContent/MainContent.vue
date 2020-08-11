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
      <h3>Or enter query here:</h3>
      <form class="formContainer">
        <input
          type="text"
          placeholder="email"
          required
          v-model="newUser.email"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="enter query here"
          v-model="newUser.text"
          required
        ></textarea>
        <button type="submit" v-on:click="addUser">Send it</button>
      </form>
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
import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBGRKDJd6z3vISkD2BME_4xm0fYfqHW9uo",
  authDomain: "test-db-40333.firebaseapp.com",
  databaseURL: "https://test-db-40333.firebaseio.com",
  projectId: "test-db-40333",
  storageBucket: "test-db-40333.appspot.com",
  messagingSenderId: "441208098617",
  appId: "1:441208098617:web:1ad50de4f9428edc34e2e8"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
let db = app.database();
let userRef = db.ref("email");

export default {
  data() {
    return {
      newUser: {
        email: "",
        text: ""
      }
    };
  },

  methods: {
    addUser: function(e) {
      e.preventDefault();
      userRef.push(this.newUser);
      this.newUser.email = "";
      this.newUser.text = "";
    }
  },
  name: "MainContent",
  components: {
    LangCard,
    ProjectCard
  }
};
</script>

<style lang="scss">
.formContainer {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
</style>
