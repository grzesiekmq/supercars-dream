<template>
  <div class="page-content">
    <router-link
      to="makes"
      class="tile-medium mt-1 p-1 text-center text-upper va-middle bg-white border bd-orange fg-orange"
    >
      <h2>back</h2>
    </router-link>
    <h2
      class="cars-title fg-orange text-center mt-14-minus"
      v-for="models in filteredModels"
      :key="models.id"
    >Model selection</h2>
    <router-link
      :to="{name:'car-select', params: {make: clickedMake, model: model}}"
      v-for="model in models"
      :key="model"
      class="select-car tile-small place-right mt-17-minus p-1 text-center bg-orange border bd-orange outline ol-white fg-black"
    >Select</router-link>

    <div class="info"></div>

    <ul class="inline-list" @click="modelHandler" v-for="models in filteredModels" :key="models.id">
      <li v-for="model in models" :key="model">
        <router-link
          :to="{name:'car-select',params:{ model:model}}"
          class="col-100 tile-small m-2 p-1 va-middle bg-orange border bd-orange outline ol-white fg-black"
        >
          <h4 class="model-name">{{model}}</h4>
        </router-link>
      </li>
    </ul>
  </div>
</template>
                    
<script>
import axios from "axios";
import bus from "../eventBus";

import * as BABYLON from "@babylonjs/core";

import "@babylonjs/loaders/glTF";

import * as Materials from "@babylonjs/materials";

import scene from "../js/app";
import { Vector3, Quaternion } from "@babylonjs/core";

const carsPath = "www/assets/models/cars";
const texturesPath = "www/assets/textures";

const json = "www/data/carProps.json";

const cars = [
  {
    name: "adi",
    models: [
      "a8",
      "avus",
      "r18",
      "r8 fsi",
      "r8 le mans",
      "rs7",
      "rsq",
      "tt clubsport"
    ]
  },

  { name: "akura", models: ["nzx", "xrx", "NZX GT3"] },

  { name: "alfa", models: ["8c spider", "zagato tz3 stradale"] },

  {
    name: "aston",
    models: [
      "DBR9",
      "dbs volante",
      "one 77",
      "rapide",
      "v12 vanquish",
      "vanquish",
      "vantage",
      "vulcan"
    ]
  },

  { name: "bentle", models: ["continental gt supersports"] },

  {
    name: "bmv",
    models: [
      "7",
      "8 series concept",
      "i8",
      "m3 e92",
      "M3 GTR",
      "m3",
      "m5 tuning",
      "m6"
    ]
  },

  { name: "bugati", models: ["chiron", "veyron"] },

  { name: "cadilac", models: ["cien", "cts"] },

  { name: "chonda", models: ["NZX TAKATA DOME", "s2000 tuned"] },

  { name: "citron", models: ["citron gt"] },

  {
    name: "dodg",
    models: ["viper gts", "viper zrt", "viper", "zrt challenger"]
  },

  {
    name: "ferari",
    models: [
      "430",
      "458 italia",
      "599",
      "812 superfast",
      "f12",
      "la ferari",
      "modena",
      "testarosa"
    ]
  },

  { name: "fort", models: ["gt 90", "gt", "mustang salen", "mustang"] },

  { name: "henesey", models: ["venom gt"] },

  {
    name: "hevrolet",
    models: ["camaro old", "camaro", "corvete concept", "corvette C7"]
  },

  { name: "holdem", models: ["monaro"] },

  { name: "hrysler", models: ["300c", "crossfire", "ME"] },

  { name: "jagur", models: ["c-x75", "f type", "xkr"] },

  { name: "konigseg", models: ["agera", "ccx", "one1"] },

  {
    name: "lambo",
    models: [
      "asterion",
      "aventador",
      "diablo sv",
      "gallardo",
      "huracan",
      "murcielago",
      "reventon",
      "urus",
      "veneno"
    ]
  },

  { name: "lotuz", models: ["evora", "exige s"] },

  { name: "luxus", models: ["gs", "lfa"] },

  { name: "maklaren", models: ["576 gt", "f1", "GT", "mp4 12c", "mp4", "p1"] },

  { name: "masda", models: ["MX 5", "mx5 2016", "RX 7", "RX 8"] },

  { name: "maybah", models: ["exelero"] },

  { name: "mazerati", models: ["G Turismo", "mc12", "quatroporte", "spyder"] },
  {
    name: "merc",
    models: [
      "amge gts",
      "cl",
      "clk dtm",
      "clk gtr",
      "slr maklaren",
      "sls amge",
      "sls"
    ]
  },

  { name: "mitsushi", models: ["3000gt", "eclipse", "lancer evolution x"] },

  { name: "nisan", models: ["370z", "gtr nizmo", "R35 GTR", "skyline gtr"] },

  { name: "opl", models: ["speedster"] },

  {
    name: "other",
    models: [
      "asterisk",
      "concept car 2009",
      "concept car 7",
      "concept car5",
      "exotic car",
      "race car",
      "vm x1",
      "wizard gt"
    ]
  },

  { name: "pahani", models: ["huayra", "zonda f"] },

  { name: "pontiak", models: ["firebird", "gto"] },

  {
    name: "porshe",
    models: [
      "911 turbo",
      "918 r type",
      "996",
      "997 gt3",
      "boxster s",
      "boxster",
      "carrera gt",
      "cayman 2017",
      "panamera turbo"
    ]
  },

  { name: "rols-roys", models: ["phantom"] },

  { name: "rufe", models: ["rt 12s"] },

  { name: "sab", models: ["aero x"] },

  { name: "salen", models: ["s7"] },

  { name: "shelbi", models: ["cobra"] },

  { name: "tezla", models: ["models s"] },

  { name: "tojota", models: ["soarer"] },

  { name: "twr", models: ["sagaris"] },

  { name: "vendeta", models: ["gtr 800"] },

  { name: "vw", models: ["ego"] },

  { name: "zenwo", models: ["st1"] },

  { name: "zubaru", models: ["b11s", "impreza"] }
];

export function getCar(carName, scene, make) {
  function onSuccess(scene) {
    let track = scene.rootNodes[2];
    let mesh = scene.rootNodes[3];

    let wheelRR = scene.getNodeByName("Audi Avus_0");
    let wheelRL = scene.getNodeByName("Audi Avus_1");
    let wheelFL = scene.getNodeByName("Audi Avus_2");
    let wheelFR = scene.getNodeByName("Audi Avus_3");
    // todo wheel colliders

    const cartest = scene.getNodeByName("avus.gltf");

    const tracktest = scene.getNodeByName("Barcelona.stl");

    const canvas = document.querySelector("#application-canvas");

    let forceDirection = mesh.right;
    const engineForce = 40000;
    const brakeForce = -20000;
    const contactLocalRefPoint = new Vector3.Zero();

    // ground

    const ground = BABYLON.MeshBuilder.CreateGround(
      "ground",
      { width: 10000, height: 4000 },
      scene
    );
    const groundMat = new BABYLON.StandardMaterial("ground Material", scene);
    groundMat.diffuseTexture = new BABYLON.Texture(
      `${texturesPath}/grass3.jpg`,
      scene
    );
    groundMat.diffuseTexture.uScale = 50;
    groundMat.diffuseTexture.vScale = 50;

    ground.material = groundMat;

    // track
    //  todo texture on track

    tracktest.material = new Materials.TriPlanarMaterial(
      "track Material",
      scene
    );
    tracktest.material.diffuseTextureX = new BABYLON.Texture(
      `${texturesPath}/asphalt.jpg`,
      scene
    );
    tracktest.material.diffuseTextureY = tracktest.material.diffuseTextureX;
    tracktest.material.diffuseTextureZ = tracktest.material.diffuseTextureX;

    tracktest.material.specularPower = 100;

    tracktest.material.tileSize = 100;

    // skybox

    const skyMat = new Materials.SkyMaterial("skyMaterial", scene);
    skyMat.backFaceCulling = false;
    skyMat.luminance = 1;
    skyMat.inclination = 0;
    skyMat.turbidity = 100;

    skyMat.cameraOffset.y = 100;

    const skybox = BABYLON.Mesh.CreateBox("skyBox", 10000, scene);
    skybox.material = skyMat;

    // car impostor
    mesh.physicsImpostor = new BABYLON.PhysicsImpostor(
      mesh,
      BABYLON.PhysicsImpostor.BoxImpostor,
      { mass: 1250 },
      scene
    );
    // track impostor
    track.physicsImpostor = new BABYLON.PhysicsImpostor(
      track,
      BABYLON.PhysicsImpostor.BoxImpostor,
      { mass: 0 },
      scene
    );

    mesh.rotationQuaternion = new BABYLON.Quaternion.Zero();

    mesh.rotationQuaternion = null;

    mesh.rotation.y = 1.5;

    track.scaling = new Vector3(10, 1, 10);

    track.position.x = 400;
    track.position.y = -3;
    track.position.z = -120;

    ground.position.y = -4;

    mesh.checkCollisions = true;
    track.checkCollisions = true;

    console.log("before forcedir", forceDirection);

    // follow camera
    const followCam = new BABYLON.FollowCamera(
      "FollowCam",
      new Vector3(100, 0, 0),
      scene
    );
    followCam.radius = 10;
    followCam.heightOffset = 10;
    followCam.rotationOffset = 0;

    followCam.attachControl(canvas, true);

    followCam.lockedTarget = mesh;

    scene.activeCameras.push(followCam);

    scene.registerBeforeRender(function() {
      const debug = document.querySelector("#debug");
      // console.log("pos", mesh.position);
      if (Math.round(mesh.physicsImpostor.getLinearVelocity().x * 3.6) <= 0) {
        debug.innerHTML = `${mesh.physicsImpostor
          .getLinearVelocity()
          .z.toFixed(2)} m/s \
      ${Math.abs(
        Math.round(mesh.physicsImpostor.getLinearVelocity().x * 3.6)
      )} kph`;
      } else {
        debug.innerHTML = `${mesh.physicsImpostor
          .getLinearVelocity()
          .z.toFixed(2)} m/s \
      ${Math.abs(
        Math.round(mesh.physicsImpostor.getLinearVelocity().x * 3.6)
      )} kph R`;
      }

      if (mesh.intersectsMesh(track)) {
        console.log("check", "yes");
      } else {
        // console.log('no intersection')
      }
    });
    // keyboard controls
    scene.onKeyboardObservable.add(kbInfo => {
      switch (kbInfo.type) {
        case BABYLON.KeyboardEventTypes.KEYDOWN:
          switch (kbInfo.event.key) {
            case "w":
              mesh.physicsImpostor.applyForce(
                forceDirection.scale(engineForce),
                mesh.getAbsolutePosition().add(contactLocalRefPoint)
              );
              console.log("pressed w force", forceDirection);

              break;
            case "a":
              cartest.rotate(
                BABYLON.Axis.Y,
                -Math.PI / 64,
                BABYLON.Space.WORLD
              );

              // forceDirection.z -= Math.PI / 64;

              console.log("forcedir", forceDirection);
              break;
            case "s":
              mesh.physicsImpostor.applyForce(
                forceDirection.scale(brakeForce),
                mesh.getAbsolutePosition().add(contactLocalRefPoint)
              );

              break;
            case "d":
              cartest.rotate(BABYLON.Axis.Y, Math.PI / 64, BABYLON.Space.WORLD);

              //  forceDirection.z += Math.PI / 64;
              console.log(mesh.rotation);
              break;

              break;
          }
          break;
      }
    });

    console.log("car mesh ", mesh);
    console.log("track", track);
  }

  BABYLON.SceneLoader.Append(`${carsPath}/${make}/`, carName, scene, onSuccess);
}

export default {
  data() {
    return { cars, clickedMake: "", models: null };
  },
  methods: {
    getCars() {
      return axios.get(json).then(response => console.log(response.data));
    },
    modelHandler(event) {
      bus.$emit("clickedModel", event.target.textContent.trim());

      const carName = event.target.textContent.trim() + ".gltf";
      getCar(carName, scene, this.clickedMake);
    },

    onMakeClicked(clickedMake) {
      this.clickedMake = clickedMake;
    }
  },
  created() {
    bus.$on("clickedMake", this.onMakeClicked);
  },

  mounted() {},

  destroyed() {
    bus.$off("clickedMake", this.onMakeClicked);
  },
  computed: {
    filteredModels() {
      return cars
        .filter(make => make.name === this.clickedMake)
        .map(make => make.models);
    }
  }
};
</script>