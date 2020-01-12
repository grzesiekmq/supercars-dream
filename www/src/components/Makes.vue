<template>
  <div class="page-content">
    <router-link
      to="tracks"
      class="tile-medium mt-1 p-1 text-center text-upper va-middle bg-white border bd-orange fg-orange"
    >
      <h2>back</h2>
    </router-link>
    <h2 class="cars-title fg-white text-center mt-14-minus">Make selection</h2>
    <div class="block cars">
      <div class="row" @click="makeHandler">
        <router-link
          :to="{name:'models', params: {make: make}}"
          v-for="make of makes"
          :key="make"
          class="col-100 tile-small m-2 p-1 va-middle bg-orange outline ol-white border bd-white fg-white text-center"
        >
          <span class="badge inside bg-white fg-orange">4</span>
          <h4>{{make}}</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "../eventBus";
const makes = [
  "adi",
  "akura",
  "alfa",
  "aston",
  "bentle",
  "bmv",
  "bugati",
  "cadilac",
  "chonda",
  "citron",
  "dodg",
  "ferari",
  "fort",
  "henesey",
  "hevrolet",
  "holdem",
  "hrysler",
  "jagur",
  "konigseg",
  "lambo",
  "lotuz",
  "luxus",
  "maklaren",
  "masda",
  "maybah",
  "mazerati",
  "merc",
  "mitsushi",
  "nisan",
  "opl",
  "other",
  "pahani",
  "pontiak",
  "porshe",
  "rols-roys",
  "rufe",
  "sab",
  "salen",
  "shelbi",
  "tezla",
  "tojota",
  "twr",
  "vendeta",
  "vw",
  "zenwo",
  "zubaru"
];
export default {
  data() {
    return { makes };
  },
  methods: {
    makeHandler(event) {
      let make = event.target.textContent;
      bus.$emit("clickedMake", make);
    }
  },
  created() {}
};
</script>