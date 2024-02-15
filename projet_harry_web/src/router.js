// router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../src/views/Accueil'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home
  },
  // ajoutez d'autres routes ici
]

const router = new VueRouter({
  routes
})

export default router