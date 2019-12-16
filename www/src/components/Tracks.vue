<template>
    <div class="page-content">
      <router-link to="modes" 
      class="tile-medium mt-1 p-1 text-center text-upper va-middle bg-white border bd-orange fg-orange">
        <h2>back</h2>
      </router-link>

      <h2 class="tracks-title fg-orange text-center mt-14-minus">Track selection</h2>
      <div class="block tracks">
        <div class="row">
          <router-link to="makes"
            v-for="track of tracks"
            :key="track.name"
            class="col-20 tile-medium m-2 p-1 va-middle bg-orange border bd-orange outline ol-white fg-black"
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
    name: "Brands Hatch",
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
    name: "Isle of Man",
    image: `${trackImages}Isle_of_Man.jpg`
  },

  {
    name: "Kyalami",
    image: `${trackImages}Kyalami.jpg`
  },

  {
    name: "Laguna Seca",
    image: `${trackImages}Laguna_Seca.jpg`
  },

  {
    name: "Le Mans",
    image: `${trackImages}Le_Mans.jpg`
  },

  {
    name: "Magny Cours",
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
    name: "Red Bull Ring",
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
  }
};
</script>