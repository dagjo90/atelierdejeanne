<template>
<div class="containerGeneral">
  <div class="logoContainer">
      <b-img :src="require('../assets/img/logo-green.png')" fluid thumbnail width="300" center rounded="circle" alt="L’atelier de Jeanne te propose des massages personnalisés sur Liège. Massage énergétique pour tous. Massage prénatal, accompagnement à la naissance, massage bébé, Yoga prénatal, ateliers toucher-bouger en famille, ateliers cosmétiques chaque mois ! L’atelier de Jeanne intervient également à l’école pour des animations massage et toucher bienveillant."></b-img>
  </div>
    <h1>Parce qu'il n'est jamais trop tôt pour se faire plaisir !</h1>
    <h2>L’atelier de Jeanne s’adresse à toi, qui que tu sois !</h2>
    <p>Viens te déposer, le temps d’un massage énergétique. Chaque soin est unique et
        personnalisé.<br><br>
        Un Heureux évènement en perspective ? Bienvenue à toi, aventurier de la
        parentalité. Je t’accompagne pour faire de cette grossesse un moment privilégié !
        Massage, Yoga, relaxation profonde, préparation en couple, ... Tout est pensé pour
        ton bien-être, et celui de ton bébé.
        <br><br>
        Après la naissance, poursuivons la route ensemble pour apprendre le massage
        bébé !
        <br><br>
        Et pour les plus grands ? Découvrez les ateliers de massage en binôme et le Yoga
        en famille. Une graine de Bouddha sommeille en chacun de tes enfants !
        <br><br>
        À l’école aussi : tu souhaites que j’intervienne dans la classe de ton enfant pour
        des ateliers de massages bienveillants avec tous ses copains, je suis à ton service !
    </p>
    <div class="text-center py-3">
        <b-button class=" btn btn-lg menuButton" v-b-toggle.sidebar-right>Afficher le menu !</b-button>
    </div>
  
</div>
</template>

<script>
export default {
  name: 'Accueil',
    metaInfo() {
        return { 
            title: "L’atelier de Jeanne s’adresse à toi, qui que tu sois !",
            meta: [
                { name: 'description', content:  'Viens te déposer, le temps d’un massage énergétique. Chaque soin est unique et personnalisé.'},
                { property: 'og:title', content: "L’atelier de Jeanne s’adresse à toi, qui que tu sois !"},
                { property: 'og:site_name', content: 'atelier de Jeanne'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    }
}