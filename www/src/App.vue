<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

    <style>
body {
  background: #fa6800;
}
#application-canvas {
  width: 100%;
}

.block.cars .row .col-100,
.block.tracks .row .col-20 {
  width: 17.6vw;
  height: 30vh;
}

.block.cars .row .col-100 {
  height: 10vh;
}

.block.tracks .row .col-20:nth-of-type(18) > .item-title {
  margin-top: -1px;
}

.page-content a.tile-medium {
  height: 20vh;
}
</style>
    
        
    

