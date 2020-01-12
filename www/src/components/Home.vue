<template>
  <div class="home">
    <h1 class="title fg-white text-center">Supercars dream</h1>

    <div class="d-flex flex-align-center flex-justify-center text-center">
      <router-link
        to="modes"
        class="tile-medium mx-2 my-4 p-1 bg-orange outline ol-white border bd-white fg-white"
      >
        <h2>play</h2>
      </router-link>

      <router-link
        to="garage"
        class="tile-medium mx-2 my-4 p-1 bg-orange outline ol-white border bd-white fg-white"
      >
        <h2>garage</h2>
      </router-link>

      <a
        @click="onQuit"
        class="tile-medium mx-2 my-4 p-1 bg-orange outline ol-white border bd-white fg-white"
      >
        <h2>quit</h2>
      </a>
    </div>
  </div>
</template>
<script>
import Metro from "metro4";

export default {
  data() {
    return {
      options: {
        title: "Are you sure you want to quit game?",
        actions: [
          {
            caption: "Yes",
            cls: "js-dialog-close primary",
            onclick: function() {
              cordova.plugins.exit();
            }
          },
          {
            caption: "No",
            onclick: function() {
              Metro.dialog.close(quit);
            }
          }
        ]
      }
    };
  },
  name: "Home",
  props: {
    msg: String
  },
  methods: {
    onQuit() {
      Metro.dialog.create(this.options);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.tile-medium h2 {
  line-height: 2.5;
}
</style>