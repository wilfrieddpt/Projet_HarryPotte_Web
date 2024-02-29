import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/views/PageAccueil'
import Personnages from '../src/views/PagePersonnages'
import Sorts from '../src/views/PageSorts'
import Livres from '../src/views/PageLivres'
import Potions from '../src/views/PagePotions'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home
  },
  {
    path:'/Personnages',
    name: 'Personnages',
    component: Personnages
  },
  {
    path:'/Sorts',
    name: 'Sorts',
    component: Sorts
  },
  {
    path:'/Livres',
    name: 'Livres',
    component: Livres
  },
  {
    path:'/Potions',
    name: 'Potions',
    component: Potions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router