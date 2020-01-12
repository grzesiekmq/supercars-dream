<template>
  <div class="page-content">
    <router-link
      to="modes"
      class="tile-medium mt-1 p-1 text-center text-upper va-middle bg-white border bd-orange fg-orange"
    >
      <h2>back</h2>
    </router-link>

    <h2 class="tracks-title fg-white text-center mt-14-minus">Track selection</h2>
    <div class="block tracks" @click="trackHandler">
      <div class="row">
        <router-link
          to="makes"
          v-for="track of tracks"
          :key="track.name"
          class="col-20 tile-medium m-2 p-1 va-middle bg-orange border bd-white outline ol-white fg-white drop-shadow text-center"
          :id="track.name"
        >
          <h6 class="item-title">{{track.name}}</h6>
          <img :src="track.image" width="100" height="100" :id="track.name" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import scene from "../js/app";
import bus from "../eventBus";

import * as Materials from "@babylonjs/materials";
import { Vector3, Vector4 } from "@babylonjs/core";

const tracksPath = "www/assets/models/tracks/";
const texturesPath = "www/assets/textures";

const trackImages = "www/assets/models/tracks/images/";
const tracks = [
  {
    name: "Barcelona",
    image: `${trackImages}Barcelona.jpg`
  },

  {
    name: "Bathurst",
    image: `${trackImages}Bathurst.jpg`
  },

  {
    name: "Brands-Hatch",
    image: `${trackImages}Brands_Hatch.jpg`
  },

  /* {
    name: 'Circuit de la Sarthe',
                    image: `${trackImages}Circuit_DeLa_Sarthe.jpg`
                }, */

  {
    name: "Hungaroring",
    image: `${trackImages}Hungaroring.jpg`
  },

  {
    name: "Indianapolis",
    image: `${trackImages}Indianapolis.jpg`
  },

  {
    name: "Interlagos",
    image: `${trackImages}Interlagos.jpg`
  },

  {
    name: "Isle-of-Man",
    image: `${trackImages}Isle_of_Man.jpg`
  },

  {
    name: "Kyalami",
    image: `${trackImages}Kyalami.jpg`
  },

  {
    name: "Laguna-Seca",
    image: `${trackImages}Laguna_Seca.jpg`
  },

  {
    name: "Le-Mans",
    image: `${trackImages}Le_Mans.jpg`
  },

  {
    name: "Magny-Cours",
    image: `${trackImages}Magny_Cours.jpg`
  },

  {
    name: "Monaco",
    image: `${trackImages}Monaco.jpg`
  },

  {
    name: "Montreal",
    image: `${trackImages}Montreal.jpg`
  },

  {
    name: "Monza",
    image: `${trackImages}Monza.jpg`
  },

  {
    name: "Nurburgring",
    image: `${trackImages}Nurburgring.jpg`
  },

  {
    name: "Red-Bull-Ring",
    image: `${trackImages}Red_Bull_Ring.jpg`
  },

  {
    name: "Silverstone",
    image: `${trackImages}Silverstone.jpg`
  },

  {
    name: "Spa-Francorchamps",
    image: `${trackImages}Spa-Francorchamps.jpg`
  },

  {
    name: "Suzuka",
    image: `${trackImages}Suzuka.jpg`
  },

  {
    name: "Zandvoort",
    image: `${trackImages}Zandvoort.jpg`
  }
];

export default {
  data() {
    return {
      tracks
    };
  },
  methods: {
    trackHandler(event) {
      const trackName = event.target.textContent.trim();
      const trackFile = trackName + ".gltf";

      function onSuccess(scene) {
        let track = scene.getNodeByName(trackName);

        function addMaterial(trackNode) {
          trackNode.material = new Materials.TriPlanarMaterial(
            "track Material",
            scene
          );
          trackNode.material.diffuseTextureX = new BABYLON.Texture(
            `${texturesPath}/asphalt.jpg`,
            scene
          );
          trackNode.material.diffuseTextureY =
            trackNode.material.diffuseTextureX;
          trackNode.material.diffuseTextureZ =
            trackNode.material.diffuseTextureX;

          trackNode.material.specularPower = 100;

          trackNode.material.tileSize = 100;
        }

        if (trackName !== "Nurburgring") {
          addMaterial(track);
        }
        // change position of track to set car on track
        switch (trackName) {
          case "Barcelona":
            track.position = new Vector3(-40, 0, 12);

            break;
          case "Bathurst":
            track.position = new Vector3(-40, 0, 15);

            break;
          case "Brands-Hatch":
            track.position = new Vector3(-40, 0, 10);

            break;
          case "Hungaroring":
            track.position = new Vector3(-40, 0, 0);

            break;
          case "Indianapolis":
            track.position = new Vector3(-40, -8, 0);

            break;
          case "Interlagos":
            track.position = new Vector3(-40, -12, 0);

            break;
          case "Isle-of-Man":
            track.position = new Vector3(-100, 0, 10);

            break;
          case "Kyalami":
            track.position = new Vector3(-40, -10, 12);

            break;
          case "Laguna-Seca":
            track.position = new Vector3(-40, 0, 12);

            break;
          case "Le-Mans":
            track.position = new Vector3(-40, 0, 12);

            break;
          case "Magny-Cours":
            track.position = new Vector3(-40, 2, 0);

            break;
          case "Monaco":
            track.position = new Vector3(-40, -10, 20);

            break;
          case "Montreal":
            track.position = new Vector3(-60, -35, 12);

            break;
          case "Monza":
            track.position = new Vector3(-40, 0, 18);

            break;

          //change position and fix texture
          case "Nurburgring":
            track.position = new Vector3(-40, 0, 12);

            const childNode = scene.getNodeByName("xxx");

            addMaterial(childNode);

            break;
          case "Red-Bull-Ring":
            track.position = new Vector3(-40, 0, 12);

            break;
          case "Silverstone":
            track.position = new Vector3(-420, -150, 100);

            break;
          case "Spa-Francorchamps":
            track.position = new Vector4(-40, 0, 25, 1);

            break;
          case "Suzuka":
            track.position = new Vector3(-40, 0, 12);

            break;
          case "Zandvoort":
            track.position = new Vector3(-40, 0, 6);

            break;
          // case 'Circuit de la Sarthe':

          //    break;
        }

        console.log("pos track", track.position);
      }

      BABYLON.SceneLoader.Append(`${tracksPath}`, trackFile, scene, onSuccess);
    }
  }
};
</script>