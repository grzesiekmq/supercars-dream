<template>
  <div class="modes">
    <router-link
      to="/"
      class="tile-medium mt-1 p-1 text-center text-upper va-middle bg-white border bd-orange fg-orange"
    >
      <h2>back</h2>
    </router-link>

    <h2 class="text-center fg-orange mt-8-minus">modes</h2>
    <ul class="inline-list text-center">
      <li>
        <router-link
          to="tracks"
          class="tile-medium mx-2 p-1 text-center va-middle bg-orange outline ol-white fg-black"
          id="free"
        >
          <h2>
            free
            <p></p>mode
          </h2>
        </router-link>
      </li>
      <li>
        <router-link
          to="career"
          class="tile-medium mx-2 p-1 text-center va-middle bg-orange outline ol-white fg-black"
          id="career"
        >
          <h2>
            career
            <p></p>mode
          </h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>