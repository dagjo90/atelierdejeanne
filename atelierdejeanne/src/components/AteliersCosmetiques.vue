<template>
<div class="containerGeneral">
        <div class="logoContainer">
      <b-img :src="require('../assets/img/logo-green.png')" fluid thumbnail width="300" center rounded="circle" alt="L’atelier de Jeanne te propose des massages personnalisés sur Liège. Massage énergétique pour tous. Massage prénatal, accompagnement à la naissance, massage bébé, Yoga prénatal, ateliers toucher-bouger en famille, ateliers cosmétiques chaque mois ! L’atelier de Jeanne intervient également à l’école pour des animations massage et toucher bienveillant."></b-img>
      </div>

  <h1>Ateliers cosmétiques</h1>
  <h2>Pour qui ?</h2>
  <p>Pour tous !</p>
  <h2>Comment ça se passe ?</h2>
  <p>Le premier lundi du mois en soirée pendant deux heures, on se réunit autour d’un
    thème annoncé.<br>
    Je mélange toujours la théorie, la pratique et le bon vin !<br>
    Tu repars avec ta création et un livret explicatif complet. Tu peux également, lors
    des ateliers, acheter en vrac les matières premières nécessaires pour reproduire
    facilement les recettes à la maison.<br>
    Pendant les rencontres, on prend le temps de grignoter local et de déguster un
    verre de vin naturel ou de limonade maison !<br>
    L’agenda des ateliers est disponible sur notre <a href="https://www.facebook.com/Latelier-de-Jeanne-101933898761632" target="_blank">page facebook</a> ou sur simple
    demande via le <router-link :to="'contact'">formulaire de contact</router-link>.
    <br><br>
    Tu peux décider de venir à un atelier pour découvrir le concept et apprendre un
    sujet en particulier, ou alors, profiter de plusieurs rencontres à prix attractif pour
    maîtriser l’ensemble de la matière comme un(e) pro !
    <br><br>
    Les ateliers cosmétiques s’adaptent à tes envies ! Tu souhaites aborder un sujet
    particulier ? Tu veux rassembler tes amis pour un moment super convivial ? Tu
    organises une baby-shower ou un enterrement de vie de jeune fille et tu ne trouves
    pas LA bonne idée pour animer cet évènement ? Je me déplace à domicile ou
    reçois sur demande !
  </p>
  <h2>Quels bénéfices ?</h2>
  <p>Apprendre la cosmétique naturelle, c’est déjà super ludique, alors en groupe,
    autour d’un verre, dans une ambiance décontractée, c’est top !
    <br><br>
    Fabriquer ses propres produits, c’est prendre ses distances avec l’industrie
    conventionnelle, c’est repenser sa consommation, c’est envisager de faire
    « autrement ».
    <br><br>
    Les ateliers te donnent les outils nécessaires pour te lancer sans crainte. Tu vas
    enfin connaître la composition exacte de tes cosmétiques, sélectionner les
    ingrédients et principes actifs qui te conviennent réellement, consommer mieux et
    en fonction de tes valeurs !
  </p>
  <h2>Tarifs</h2>
  <p>30 € par personne, cosmétique et grignotage compris !<br>
    125 € pour une carte de 5 places. Tu peux partager la carte avec ta fille, ton frère
    ton/ta BFF ou même ta belle-mère (si elle est sympa) au cours d’une même
    soirée… Bref, ramène du monde!
  </p>
  
</div>
</template>

<script>
export default {
  name: 'AteliersCosmetiques',
      metaInfo() {
        return { 
            title: "Ateliers Cosmétiques | Atelier de Jeanne",
            meta: [
                { name: 'description', content:  'L’atelier de Jeanne proposes des ateliers cosmétiques sur liège. Apprends la cosmétique naturelle, repars avec tes créations ! Tu peux y acheter en vrac les matières premières nécessaires pour reproduire facilement les recettes.'},
                { property: 'og:title', content: "Ateliers Cosmétiques | Atelier de Jeanne"},
                { property: 'og:site_name', content: 'atelier de Jeanne'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    }
}