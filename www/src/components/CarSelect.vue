<template>
  <div>
    <router-link
      to="models"
      class="tile-medium mt-1 p-1 text-center text-upper va-middle bg-white border bd-orange fg-orange"
    >
      <h2>back</h2>
    </router-link>

    <h6 class="fg-orange text-center">{{clickedModel}}</h6>

    <span class="fg-white">acceleration: {{}}s</span>
    <p></p>
    <span class="fg-white">top speed: {{}}kph</span>

    <router-link :to="{name:'testdrive', params:{model:clickedModel}}">select</router-link>
  </div>
</template>
<script>
import bus from "../eventBus";
export default {
    data() {
        return { clickedModel: "" };
    },
    methods: {
        onModelClicked(clickedModel) {
            this.clickedModel = clickedModel;
        }
    },
    created() {
        bus.$on("clickedModel", this.onModelClicked);
    },
    destroyed() {
        bus.$off("clickedModel", this.onModelClicked);
    }
};
</script>
