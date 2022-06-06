<template>
  <div class="containerGeneral">
    <!--<div class="pt-3 text-center">
    < router-link to="/" class="btn btn-info btn-lg ">Retour au menu</router-link>
   </div>-->
      <div class="logoContainer">
          <b-img :src="require('../assets/img/logo-green.png')" fluid thumbnail width="300" center rounded="circle" alt="L’atelier de Jeanne te propose des massages personnalisés sur Liège. Massage énergétique pour tous. Massage prénatal, accompagnement à la naissance, massage bébé, Yoga prénatal, ateliers toucher-bouger en famille, ateliers cosmétiques chaque mois ! L’atelier de Jeanne intervient également à l’école pour des animations massage et toucher bienveillant."></b-img>
      </div>


      <h1>QUI JE SUIS :</h1>
      <p>
      Trentenaire (hyper) active, maman d’une petite Jeanne de 4 ans, je me suis
      convertie au massage après de (trop) longues études universitaires et plusieurs
      années dans le secteur bancaire.
      </p>
          <b-img :src="require('../assets/img/qui-je-suis.jpg')" center fluid width="500"  ></b-img>

      <h2>Ma motivation :</h2>
      <p>Avant tout, être un acteur local de bien-être. Participer à ton bonheur et à celui de
      ta famille. T’accompagner, qui que tu sois, vers un « mieux-vivre ».
      Défendre des idées féministes selon lesquelles une femme est actrice de sa
      maternité. Bouleverser les codes établis autour de la parentalité.
      Amener dans les classes des notions de consentement, de respect, de toucher sain
      et bienveillant par le massage.
      Être un modèle d’ouverture, de tolérance.</p>

      <h2>Mes formations :</h2>
      <ul>
        <li>Praticienne massage prénatal</li>
        <li>Animatrice Yoga périnatal</li>
        <li>Accompagnatrice à la naissance</li>
        <li>Praticienne massage bébé suivant la tradition shantala (0 à 1 an)</li>
        <li>Instructrice MISP, Massage in school program (de 4 à 12 ans) et Mini-MISP (2-3 ans)</li>
        <li>Animatrice yoga pour enfants (à partir de 5 ans)</li>
        <li>Masseur, chef d’entreprise (IFAPME)</li>
        <li>Praticienne massage énergétique personnalisé (suivant la médecine chinoise)</li>
        <li>Préparatrice en Cosmétique</li>
        <li>Aromathérapeute</li>
      </ul>
      <h2>Mon plaisir :</h2>
      <p>Participer au tien :) </p>
   
  </div>
</template>

<script>
export default {
  name: 'QuiJeSuis',
                  metaInfo() {
        return { 
            title: "Qui je suis | L’atelier de Jeanne",
            meta: [
                { name: 'description', content:  'L’atelier de Jeanne veut être un acteur local de bien-être.'},
                { property: 'og:title', content: "Qui je suis | L’atelier de Jeanne"},
                { property: 'og:site_name', content: 'atelier de Jeanne'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    }
}
