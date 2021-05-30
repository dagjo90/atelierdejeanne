<template>
  <div class="mobileMenu d-flex justify-content-center flex-column d-md-none">
    <router-link to="/massage-energetique" class="btn btn-info btn-lg" >Massage énergétique personnalisé</router-link>
    <router-link to="/massage-prenatal" class="btn btn-info btn-lg">Massage prénatal</router-link>
    <router-link to="/yoga-prenatal" class="btn btn-info btn-lg">Yoga prénatal</router-link>
    <router-link to="/massage-bebe" class="btn btn-info btn-lg">Massage bébé</router-link>
    <router-link to="/toucher-bouger" class="btn btn-info btn-lg">« Toucher-bouger » en famille</router-link>
    <router-link to="/massages-ecole" class="btn btn-info btn-lg">Massages à l’école</router-link>
    <router-link to="/ateliers-cosmetiques" class="btn btn-info btn-lg">Ateliers cosmétiques</router-link>
   <router-link to="/" class="btn btn-info btn-lg">Retour au menu</router-link>
  </div>
</template>

<script>
export default {
  name: 'Soins',
}
