<template>
    <div class="home">
    <h1 class="title fg-orange text-center">Supercars dream</h1>
     <ul class="inline-list text-center">

            <li>

                <router-link to="modes" class="tile-medium mx-auto my-4 p-1 text-center bg-orange outline ol-white fg-black" id="play">
                    <h2>
                        play
                    </h2>
                </router-link>
            </li>
            <li>

                <router-link to="garage" class="tile-medium mx-auto my-4 p-1 text-center bg-orange outline ol-white fg-black" id="garage">
                    <h2>
                        garage
                    </h2>
                </router-link>
            </li>
            <li>

                <a class="tile-medium mx-auto my-4 p-1 text-center bg-orange outline ol-white fg-black" id="quit">
                    <h2>
                        quit
                    </h2>
                </a>
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    name: 'Home',
    props: {
        msg: String
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}


a {
    color: #42b983;
}
</style>