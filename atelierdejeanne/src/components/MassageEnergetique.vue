<template>
<div class="containerGeneral">
      <div class="logoContainer">
      <b-img :src="require('../assets/img/logo-green.png')" fluid thumbnail width="300" center rounded="circle" alt="L’atelier de Jeanne te propose des massages personnalisés sur Liège. Massage énergétique pour tous. Massage prénatal, accompagnement à la naissance, massage bébé, Yoga prénatal, ateliers toucher-bouger en famille, ateliers cosmétiques chaque mois ! L’atelier de Jeanne intervient également à l’école pour des animations massage et toucher bienveillant."></b-img>
      </div>
  
    <h1>Massage énergétique personnalisé</h1>
    <h2>Pour qui ?</h2>
    <p>Ce massage s’adresse à tous et s’adapte à tes attentes.</p>
      <b-img :src="require('../assets/img/massage-energetique.jpg')" fluid thumbnail width="500" alt="L’atelier de Jeanne te propose un Massage énergétique personnalisé à Liège. Massage complet à l’huile inspiré des grands principes de la médecine énergétique chinoise."></b-img>

    <h2>Comment ça se passe ?</h2>
    <p>Le soin dure 1h30. Je prends d’abord le temps de t’accueillir, d’échanger avec toi.
        Le massage est complet (ensemble du corps) et se pratique à l’huile.
        <br><br>
        Très loin d’une offre classique standardisée, ce massage est personnalisé en
        fonction de tes besoins. Je peux par exemple utiliser des pierres chaudes, des
        pochons d’épices, des huiles essentielles,… Je m’inspire des grands principes de la
        médecine énergétique chinoise.
        <br><br>
        Après le massage, on prend un moment pour faire le point. Si je peux t’apporter
        certains outils ou conseils pour poursuivre ton chemin après notre rencontre, je le
        ferai avec plaisir !
        <br><br>
        C’est un massage que tu peux offrir ou t’offrir en « one-shot » dès que tu en
        ressens le besoin ou l’envie. Tu peux aussi décider de venir régulièrement, par
        exemple chaque mois ou à chaque changement de saison.
    </p>
    <h2>Quels Bénéfices ?</h2>
    <p>D’abord, tu prends du temps pour toi, et c’est non négligeable !<br>
      Tu fais le point. J’adapte ma pratique à tes attentes. C’est l’occasion pour toi de
      t’écouter, de venir te déposer en toute confiance, d’identifier ce qui ne fonctionne
      pas en ce moment et de faire le nécessaire pour améliorer ce qui doit l’être. Tu n’as
      pas envie de raconter ta vie ? Pas de soucis ! Ton corps parle pour toi, je suis à son
      écoute...
      <br><br>
      Ce soin complet peut être un simple moment de détente et de plaisir, un soutien au
      cours d’une période difficile, un coup de boost en plein hiver, un pansement sur
      une blessure affective, un moyen de lâcher prise ou l’occasion de te reconnecter à
      toi, à ton corps et aux autres.
      <br><br>
      Dans tous les cas, je te promets un temps de bien-être en toute convivialité. Tu es
      entre de bonnes mains !
    </p>
    <h2>Tarifs</h2>
    <p>75 € (+- 90 minutes)<br>
    275 € pour 4 massages (+- 90 minutes)
    </p>
  
</div>
</template>

<script>
export default {
  name: 'MassageEnergetique',
          metaInfo() {
        return { 
            title: "Massage Énergétique | L’atelier de Jeanne",
            meta: [
                { name: 'description', content:  'L’atelier de Jeanne te propose un Massage énergétique personnalisé à Liège. Massage complet à l’huile inspiré des grands principes de la médecine énergétique chinoise. '},
                { property: 'og:title', content: "Massage Énergétique | L’atelier de Jeanne"},
                { property: 'og:site_name', content: 'atelier de Jeanne'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    }
}
