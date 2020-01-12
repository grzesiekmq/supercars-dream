<template>
  <div class="car-select">
    <router-link
      :to="{name:'models'}"
      class="tile-medium mt-1 p-1 text-center text-upper va-middle bg-white border bd-orange fg-orange"
    >
      <h2>back</h2>
    </router-link>

    <h6 class="fg-white text-center">{{clickedModel}}</h6>

    <span class="fg-white">acceleration: {{model.acceleration}} s</span>

    <p></p>
    <span class="fg-white">top speed: {{model.topSpeed}} km/h</span>

    <router-link :to="{name:'testdrive', params:{model:clickedModel}}" @click="select">select</router-link>

    <div class="hud fg-orange">
      <h1>
        <span class="speed">0</span>
      </h1>
      <div class="timer fg-white">
        <h1>
          <span id="m">00</span>:
          <span id="s">00</span>
        </h1>
      </div>
    </div>
    <h1 class="start fg-orange"></h1>
    <h1 class="distance fg-orange"></h1>
  </div>
</template>
<script>
import bus from "../eventBus";
import scene from "../js/app";

import * as BABYLON from "@babylonjs/core";

const car = scene.getNodeByName("avus.gltf");
const track = scene.getNodeByName("Barcelona.gltf");

console.log("car", car);

export default {
  data() {
    return { clickedModel: "", model: null };
  },
  methods: {
    onModelClicked(clickedModel) {
      this.clickedModel = clickedModel;
    },
    getModel(model) {
      this.model = model;
    },
    select() {}
  },
  created() {
    bus.$on("clickedModel", this.onModelClicked);
    bus.$on("modelObj", this.getModel);
  },
  destroyed() {
    bus.$off("clickedModel", this.onModelClicked);
    bus.$off("modelObj", this.getModel);
  }
};
</script>
<style scoped>
.car-select {
  background: #fa6800;
}
.hud,
.start,
.distance {
  position: absolute;
}
.start {
  margin-left: 40%;
}
.distance {
  margin-left: 70%;
}
</style>
