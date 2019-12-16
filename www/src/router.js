import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'


Vue.use(Router)
const routes = [{
    path: '/',
    name: 'home',
    component: Home
},
{
    path: '/modes',
    name: 'modes',
    component: () =>
        import('./components/Modes.vue')

},
{
    path: '/garage',
    name: 'garage',
    component: () =>
        import('./components/Garage.vue')

},
{
    path: '/tracks',
    name: 'tracks',
    component: () =>
        import('./components/Tracks.vue')
},
{
    path: '/makes',
    name: 'makes',
    component: () =>
        import('./components/Makes.vue')
},
{
    path: '/:make',
    name: 'models',
    component: () =>
        import('./components/Models.vue')
},
{
    path: '/:make/:model',
    name: 'car-select',
    component: () =>
        import('./components/CarSelect.vue')
}



]
export default new Router({
    routes
})