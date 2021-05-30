import Vue from 'vue'
import VueRouter from 'vue-router'
//import Menu from '../components/Menu.vue'
import Accueil from '../components/Accueil.vue'
import QuiJeSuis from '../components/QuiJeSuis.vue'
import Soins from '../components/Soins.vue'

  import MassageEnergetique from '../components/MassageEnergetique.vue'
  import MassagePrenatal from '../components/MassagePrenatal.vue'
  import YogaPrenatal from '../components/YogaPrenatal.vue'
  import MassageBebe from '../components/MassageBebe.vue'
  import ToucherBouger from '../components/ToucherBouger.vue'
  import MassagesEcole from '../components/MassagesEcole.vue'
  import AteliersCosmetiques from '../components/AteliersCosmetiques.vue'

import OuMeTrouver from '../components/OuMeTrouver.vue'
import Tarifs from '../components/Tarifs.vue'
import Reservation from '../components/Reservation.vue'
import Contact from '../components/Contact.vue'




Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Accueil
  },
  {
    path: '/soins',
    name: 'soins',
    component: Soins
  },
  {
    path: '/ou-me-trouver',
    name: 'ou-me-trouver',
    component: OuMeTrouver
  },
  {
    path: '/tarifs',
    name: 'tarifs',
    component: Tarifs
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation
  },
  {
    path: '/qui-je-suis',
    name: 'qui-je-suis',
    component: QuiJeSuis
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/massage-energetique',
    name: 'massage-energetique',
    component: MassageEnergetique
  },
  {
    path: '/massage-prenatal',
    name: 'massage-prenatal',
    component: MassagePrenatal
  },
  {
    path: '/yoga-prenatal',
    name: 'yoga-prenatal',
    component: YogaPrenatal
  },
  {
    path: '/massage-bebe',
    name: 'massage-bebe',
    component: MassageBebe
  },
  {
    path: '/toucher-bouger',
    name: 'toucher-bouger',
    component: ToucherBouger
  },
  {
    path: '/massages-ecole',
    name: 'massages-ecole',
    component: MassagesEcole
  },
  {
    path: '/ateliers-cosmetiques',
    name: 'ateliers-cosmetiques',
    component: AteliersCosmetiques
  },
  {
    path: '*',
    name: 'not-found',
    component: Accueil
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router