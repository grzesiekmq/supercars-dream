<template>
  <div class="modes">
    <router-link
      to="/"
      class="tile-medium mt-1 p-1 text-center text-upper va-middle bg-white border bd-orange fg-orange"
    >
      <h2>back</h2>
    </router-link>

    <h2 class="text-center fg-white modes-text">modes</h2>

    <div class="d-flex flex-align-center flex-justify-center text-center">
      <router-link
        to="tracks"
        class="tile-medium mx-2 p-1 text-center va-middle bg-orange outline ol-white border bd-white fg-white"
        id="free"
      >
        <h2>
          free
          <p></p>mode
        </h2>
      </router-link>

      <router-link
        to="career"
        class="tile-medium mx-2 p-1 text-center va-middle bg-orange outline ol-white border bd-white fg-white"
        id="career"
      >
        <h2>
          career
          <p></p>mode
        </h2>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.modes-text {
  margin-top: -120px;
}
</style>