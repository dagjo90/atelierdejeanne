<template>
  <div class="mobileMenu d-flex justify-content-center flex-column d-md-none">
  <router-link to="/qui-je-suis" class="btn btn-info btn-lg" >Qui je suis</router-link>
  <router-link to="/soins" class="btn btn-info btn-lg">Les soins</router-link>
  <router-link to="/ou-me-trouver" class="btn btn-info btn-lg">Où me trouver</router-link>
  <router-link to="/tarifs" class="btn btn-info btn-lg">Tarifs</router-link>
  <router-link to="/reservation" class="btn btn-info btn-lg">Réservation</router-link>
  <router-link to="/contact" class="btn btn-info btn-lg">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
