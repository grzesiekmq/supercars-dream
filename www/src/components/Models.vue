<template>
  <div class="page-content">
    <router-link
      to="makes"
      class="tile-medium mt-1 p-1 text-center text-upper va-middle bg-white border bd-orange fg-orange"
    >
      <h2>back</h2>
    </router-link>
    <h2
      class="cars-title fg-white text-center mt-14-minus"
      v-for="models in filteredModels"
      :key="models.id"
    >Model selection</h2>
  

    <ul class="inline-list" @click="modelHandler" v-for="models in filteredModels" :key="models.id">
      <li v-for="model in models" :key="model">
        <router-link
          :to="{name:'car-select',params:{ model:model}}"
          class="h-50 tile-medium m-2 p-1 bg-orange border bd-white outline ol-white fg-white"
        >
          <h4 class="model-name text-center">{{model}}</h4>
        </router-link>
      </li>
    </ul>
  </div>
</template>
                    
<script>
import axios from "axios";
import bus from "../eventBus";

import * as BABYLON from "@babylonjs/core";
import { Engine } from "@babylonjs/core";
import Metro from "metro4";
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
    models: ["7", "8 series concept", "i8", "m3 GTR", "m3", "m6"]
  },

  { name: "bugati", models: ["chiron", "veyron", "centodieci"] },

  { name: "cadilac", models: ["cien", "cts"] },

  { name: "chonda", models: ["NZX TAKATA DOME", "s2000 tuned"] },

  { name: "citron", models: ["citron gt"] },

  {
    name: "dodg",
    models: ["viper gts", "viper zrt", "viper", "challenger"]
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

  { name: "fort", models: ["gt 90", "fort gt", "mustang salen", "mustang"] },

  { name: "henesey", models: ["venom gt"] },

  {
    name: "hevrolet",
    models: ["camaro old", "camaro", "corvete concept", "corvete c7"]
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

  { name: "maklaren", models: ["576 gt", "f1", "maklaren gt", "mp4", "p1"] },

  { name: "masda", models: ["mx5", "mx5 2016", "rx7", "rx8"] },

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
      "concept car 5",
      "exotic car",
      "race car",
      "vm x1",
      "wizard gt"
    ]
  },

  { name: "pahani", models: ["huayra", "zonda r"] },

  { name: "pontiak", models: ["gto"] },

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
      "cayman",
      "panamera turbo"
    ]
  },

  { name: "rols-roys", models: ["phantom"] },

  { name: "rufe", models: ["rt 12s"] },

  { name: "sab", models: ["aero x"] },

  { name: "salen", models: ["s7"] },

  { name: "shelbi", models: ["cobra"] },

  { name: "tezla", models: ["model s"] },

  { name: "tojota", models: ["soarer"] },

  { name: "twr", models: ["sagaris"] },

  { name: "vendeta", models: ["gtr 800"] },

  { name: "vw", models: ["ego"] },

  { name: "zenwo", models: ["st1"] },

  { name: "zubaru", models: ["b11s", "impreza"] }
];

export function getCar(carName, scene, make, topSpeed) {
  function onSuccess(scene) {
    const canvas = document.querySelector("#application-canvas");

    let mesh = scene.rootNodes[3];

    let cartest = scene.getNodeByName("avus.gltf");

    // wheels
    let wheelRR = scene.getNodeByName("Audi Avus_0");
    let wheelRL = scene.getNodeByName("Audi Avus_1");
    let wheelFL = scene.getNodeByName("Audi Avus_2");
    let wheelFR = scene.getNodeByName("Audi Avus_3");
    let wheelpart = scene.getNodeByName("Audi Avus_4");

    // TODO wheel colliders

    let trackRoot = scene.rootNodes[2];

    var boundingbox = new BABYLON.BoundingBoxGizmo();
    var boundingbox2 = new BABYLON.BoundingBoxGizmo();

    // scale all tracks

    trackRoot.scaling = new Vector3(10, 1, 10);

    // boundingbox2.attachedMesh = trackRoot

    const sizeScale = 0.01;
    // mesh.scaling = new Vector3(sizeScale, sizeScale, sizeScale)

    // boundingbox.attachedMesh = mesh;
    console.log("bounding box car", boundingbox._boundingDimensions);
    console.log("bounding box track", boundingbox2._boundingDimensions);

    let forceDirection = mesh.right;
    const engineForce = 30000;
    const brakeForce = -20000;

    const mass = 1250;

    // testing params
    // in meters
    const wheelBase = 2.8;
    const rearTrack = 1.5;
    const turnCircle = 10;
    const wheelRadius = 0.22;

    const halfRearTrack = rearTrack * 0.5;

    // Ackermann steering
    // in rad
    let ackermannAngleLeft = Math.atan(
      wheelBase / (turnCircle - halfRearTrack)
    );
    let ackermannAngleRight = Math.atan(
      wheelBase / (turnCircle + halfRearTrack)
    );

    console.log("angle left", ackermannAngleLeft);
    console.log("angle right", ackermannAngleRight);

    // ground
    function createGround() {
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

      ground.position.y = -1;
    }

    // skybox
    function createSkybox() {
      const skyMat = new Materials.SkyMaterial("skyMaterial", scene);
      skyMat.backFaceCulling = false;
      skyMat.luminance = 1;
      skyMat.inclination = 0;
      skyMat.turbidity = 100;

      skyMat.cameraOffset.y = 100;

      const skybox = BABYLON.Mesh.CreateBox("skyBox", 10000, scene);
      skybox.material = skyMat;
    }
    //-- impostors --
    // car impostor
    mesh.physicsImpostor = new BABYLON.PhysicsImpostor(
      mesh,
      BABYLON.PhysicsImpostor.BoxImpostor,
      { mass: mass },
      scene
    );
    // track impostor
    trackRoot.physicsImpostor = new BABYLON.PhysicsImpostor(
      trackRoot,
      BABYLON.PhysicsImpostor.BoxImpostor,
      { mass: 0 },
      scene
    );

    mesh.rotationQuaternion = new BABYLON.Quaternion.Zero();

    mesh.rotationQuaternion = null;

    mesh.rotation.y = -Math.PI / 2;

    console.log(mesh._children[0].position);

    mesh.checkCollisions = true;
    trackRoot.checkCollisions = true;

    console.log("before forcedir", forceDirection);

    // follow camera
    function createFollowCam() {
      const followCam = new BABYLON.FollowCamera(
        "FollowCam",
        new Vector3(100, 0, 0),
        scene
      );
      followCam.radius = 2;
      followCam.heightOffset = 3;
      followCam.rotationOffset = 180;

      followCam.attachControl(canvas, true);

      followCam.lockedTarget = mesh;

      scene.activeCameras.push(followCam);
    }

    const speedContainer = document.querySelector(".speed");
    const distanceContainer = document.querySelector(".distance");
    const secContainer = document.querySelector("#s");
    const debug = document.querySelector(".debug");
    const start = document.querySelector(".start");

    let seconds = 0;

    let num = 4;

    function countdown() {
      --num;
      // 3,2,1
      if (num < 4 && num > 0) {
        start.textContent = num;
      }
      // start as 0
      else if (num < 1 && num > -1) {
        start.textContent = "START";
        function hideStart() {
          start.style.display = "none";
        }
        setTimeout(hideStart, 2000);
      } else {
        return;
      }
    }

    setInterval(countdown, 1000);

    function update() {
      let distance = Math.abs(Math.round(mesh.position.x));
      distanceContainer.textContent = `${distance} m`;

      let speed = Math.abs(
        Math.round(mesh.physicsImpostor.getLinearVelocity().x * 3.6)
      );

      function forwardSpeed(speed) {
        return (speedContainer.textContent = `
          ${speed} km/h`);
      }
      function reverse(speed) {
        return (speedContainer.textContent = `
          ${speed} km/h R`);
      }

      function timer() {
        seconds++;
      }

      let elapsedTime = () => setInterval(timer, 1000);

      elapsedTime = Math.round(elapsedTime());

      // auto accelerate
      if (start.textContent === "START" && speed <= topSpeed) {
        secContainer.textContent = elapsedTime;
        accelerate();
      }

      if (speed >= 0) {
        forwardSpeed(speed);
      } else {
        reverse(speed);
      }

      // acceleration 0-100 test

      // if (speed === 100) {
      //   alert(`acceleration ${elapsedTime}`);
      // }

    const finishDistance = 1000

      function finishDialog() {
        const options = {
          title: "Finish",
          content: "race finished",
          onShow: function() {
            const el = $(this);
            el.addClass("ani-swoopInTop");
            setTimeout(() => el.removeClass("ani-swoopInTop"), 500);
          },
          onHide: function() {
            console.log("hide");
            const el = $(this);
            el.addClass("ani-swoopOutTop");
          },
          actions: [{
            caption: "Ok",
            cls: "js-dialog-close primary",
            onclick: function() {
              location.href = "/";
            }
          }]
        };

        Metro.dialog.create(options);
      }

      if (distance === finishDistance) {
        finishDialog();
      }
    }

    // update
    scene.registerBeforeRender(update);

    function accelerate() {
      return mesh.physicsImpostor.applyForce(
        forceDirection.scale(engineForce),
        mesh.getAbsolutePosition()
      );
    }

    function brake() {
      return mesh.physicsImpostor.applyForce(
        forceDirection.scale(brakeForce),
        mesh.getAbsolutePosition()
      );
    }

    let angleLeft = -Math.PI / 200;
    let angleRight = Math.PI / 200;

    console.log("force init x", forceDirection.x);

    // keyboard controls
    scene.onKeyboardObservable.add(kbInfo => {
      switch (kbInfo.type) {
        case BABYLON.KeyboardEventTypes.KEYDOWN:
          switch (kbInfo.event.key) {
            case "w":
              break;
            case "a":
              cartest.rotate(BABYLON.Axis.Y, angleLeft, BABYLON.Space.WORLD);

              if (forceDirection.x < 0) {
                forceDirection.x -= ackermannAngleLeft;
              } else if (forceDirection.x > 0) {
                forceDirection.x -= ackermannAngleLeft;
              }

              console.log("forcedir left", forceDirection);
              console.log("rotation", mesh.rotation);
              break;
            case "s":
              brake();

              break;
            case "d":
              cartest.rotate(BABYLON.Axis.Y, angleRight, BABYLON.Space.WORLD);
              if (forceDirection.x > 0) {
                forceDirection.x += ackermannAngleRight;
              } else if (forceDirection.x < 0) {
                forceDirection.x += ackermannAngleRight;
              }
              console.log("forcedir right", forceDirection);

              console.log("rotation", mesh.rotation);
              break;

              break;
          }
          break;
      }
    });

    function enableJoystick() {
      const joystick = new BABYLON.VirtualJoystick(true);

      const moveSpeed = 5;

      scene.onBeforeRenderObservable.add(() => {
        let moveY = joystick.deltaPosition.y * moveSpeed;
        if (joystick.pressed && moveY > 0) {
          accelerate();
          console.log("joy up");
        } else if (joystick.pressed && moveY < 0) {
          brake();
          console.log("joy down");
        }
      });
    }

    console.log("car mesh ", mesh);
    console.log("track", trackRoot);

    createGround();
    createSkybox();
    createFollowCam();
  }

  BABYLON.SceneLoader.Append(`${carsPath}/${make}/`, carName, scene, onSuccess);
}

export default {
  data() {
    return {
      cars,
      clickedMake: "",
      models: null,
      modelArr: null
    };
  },
  methods: {
    modelHandler(event) {
      let modelName = event.target.textContent.trim()
      bus.$emit("clickedModel", modelName);

      axios.get(json).then(response => {
        const data = response.data;
        const make = Object.keys(data).filter(
          make => make === this.clickedMake
        );

        console.log(make);

        let carFile = data[make[0]]
          .filter(model => model.name === modelName)
          .map(model => model.modelFile);

        this.modelArr = data[make[0]].filter(
          model => model.name === modelName
        );

        const modelObj = this.modelArr[0]
        const topSpeed = modelObj.topSpeed

        // get file from array
        carFile = carFile[0]

        bus.$emit("modelObj", modelObj);

        console.log("topspeed", topSpeed);

        console.log("car from json", carFile);

        getCar(carFile, scene, this.clickedMake, topSpeed);
      });
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
<style scoped>

</style>