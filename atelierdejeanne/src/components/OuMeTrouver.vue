<template>
<div class="containerGeneral">
  <!--<div class="pt-3 text-center">
    <router-link to="/" class="btn btn-info btn-lg ">Retour au menu</router-link>
  </div>-->
       <div class="logoContainer">
      <b-img :src="require('../assets/img/logo-green.png')" fluid thumbnail width="300" center rounded="circle" alt="L’atelier de Jeanne te propose des massages personnalisés sur Liège. Massage énergétique pour tous. Massage prénatal, accompagnement à la naissance, massage bébé, Yoga prénatal, ateliers toucher-bouger en famille, ateliers cosmétiques chaque mois ! L’atelier de Jeanne intervient également à l’école pour des animations massage et toucher bienveillant."></b-img>
      </div>
  <h1>Où me trouver : </h1>
  <p>Je me déplace à domicile ou vous pouvez me retrouver à <a target="_blank" href="https://www.espace-de-ressourcement.be/profil-praticien-anne-sophie-buchsenschmidt/anne-sophie-buchsenschmidt/anne-sophie-buchsenschmidt-578.html">l'espace de resourcement</a> : <br><br> Rue Schmerling n°9 4000 Liège</p>
  <div class="containerMap">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.621672037277!2d5.554293215904154!3d50.634144581992395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0fa1f5fc1107d%3A0xe5526e1295571524!2sRue%20Schmerling%209%2C%204000%20Li%C3%A8ge!5e0!3m2!1sfr!2sbe!4v1642793141136!5m2!1sfr!2sbe" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
  </div>
</template>

<script>
export default {
  name: 'OuMeTrouver',
                metaInfo() {
        return { 
            title: "Où me trouver | L’atelier de Jeanne",
            meta: [
                { name: 'description', content:  'Vous pouvez retrouver l’atelier de Jeanne à domicile ou Rue de Fétinne n°14, 4020 Liège'},
                { property: 'og:title', content: "Où me trouver | L’atelier de Jeanne"},
                { property: 'og:site_name', content: 'atelier de Jeanne'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    }
}
