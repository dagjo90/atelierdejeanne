<template>
<div class="containerGeneral">
  <!--<div class="pt-3 text-center">
    <router-link to="/soins" class="btn btn-info btn-lg ">Retour aux soins</router-link>
  </div>-->
  <div class="logoContainer">
      <b-img :src="require('../assets/img/logo-green.png')" fluid thumbnail width="300" center rounded="circle" alt="L’atelier de Jeanne te propose des massages personnalisés sur Liège. Massage énergétique pour tous. Massage prénatal, accompagnement à la naissance, massage bébé, Yoga prénatal, ateliers toucher-bouger en famille, ateliers cosmétiques chaque mois ! L’atelier de Jeanne intervient également à l’école pour des animations massage et toucher bienveillant."></b-img>
  </div>
    <h1>Massage bébé</h1>
   
    <h2>Pour qui ?</h2>
    <p>Tous les enfants, de 6 semaines à un an, accompagné d’un parent.</p>

    <b-img :src="require('../assets/img/massage-bebe3.jpg')" alt="L’atelier de Jeanne organise sur Liège des ateliers massage bébé. En groupe ou lors de séances individuelles, le massage bébé te permet de partager une première activité avec ton tout-petit. C’est un moment d’échange, de rencontre et de communication !" fluid  width="500" ></b-img>

    <h2>Comment ça se passe ?</h2>
    <p>La séance dure environ 45 minutes. Tu y apprendras le massage suivant la tradition
      Ayurvédique Shantala. C’est un massage complet du corps à l’huile.<br>
      3 séances sont nécessaires pour l’apprentissage du massage complet. À la fin de
      ces trois rencontres, tu repars avec un livret explicatif qui reprend les différentes
      manœuvres du massage ainsi que des infos, conseils, et propositions d’activités
      autour du toucher adaptés à l’age de ton bébé.<br>
      Je consacre également un moment au cours de nos rendez-vous pour te parler des
      huiles végétales et essentielles adaptées aux plus jeunes. Tu repartiras avec ta
      propre huile de massage personnalisée pour poursuivre la pratique à la maison !
      <br><br>
      Seul le parent touche son bébé. Je montre les gestes sur Oscar, notre poupée
      officielle :)
      <br><br>
      Si ta progéniture n’est pas d’humeur, pas de panique, tu peux t’entraîner sur une
      poupée à disposition et profiter pleinement de l’apprentissage tout en respectant la
      disponibilité de ton enfant.
      <br><br>
      Le massage bébé s’apprend en cours individuels ou en cours collectif. Dans les
      deux cas, le coparent ou tout qui souhaite participer est le bienvenu.
    </p>

      <b-img right :src="require('../assets/img/massage-bebe.jpg')" fluid  alt="L’atelier de Jeanne organise sur Liège des ateliers massage bébé. En groupe ou lors de séances individuelles, le massage bébé te permet de partager une première activité avec ton tout-petit. C’est un moment d’échange, de rencontre et de communication !" width="500" ></b-img>

    <h2>Quels bénéfices ?</h2>
    <p>Le massage bébé est vraiment une occasion en or pour partager une première
      activité avec ton tout-petit. C’est un moment d’échange, de partage, de rencontre et
      de communication incomparable.
      <br><br>
      La sensibilité de la peau est une fonction corporelle fondamentale et l'une des
      premières à se développer. La stimulation par le toucher est indispensable à une
      évolution physiologique et psychologique adéquate.
      Le contact bienveillant améliore le fonctionnement des différents systèmes du
      corps humain.<br>
      La stimulation sensorielle par le massage accélère la myélinisation du cerveau (qui
      protège le système nerveux et accélère la transmission des impulsions nerveuses
      du cerveau au reste du corps).<br>
      Le massage diminue le taux de Cortisol (hormone du stress) et active la production
      d'ocytocine (hormone du plaisir).<br>
      Être touché avec amour aide à grandir et à se développer, tant d’un point de vue
      physique qu’émotionnel.
    </p>
              <b-img right :src="require('../assets/img/massage-bebe2.jpg')" alt="L’atelier de Jeanne organise sur Liège des ateliers massage bébé. En groupe ou lors de séances individuelles, le massage bébé te permet de partager une première activité avec ton tout-petit. C’est un moment d’échange, de rencontre et de communication !" fluid  width="500" ></b-img>

    <h2>Tarif</h2>
    <p>90 € pour un cycle de 3 séances en individuel<br>
    45 € pour un cycle de 3 séances en collectif
    </p>
  
</div>
</template>

<script>
export default {
  name: 'MassageBebe',
        metaInfo() {
        return { 
            title: "Massage bébé | L’atelier de Jeanne",
            meta: [
                { name: 'description', content:  'L’atelier de Jeanne organise sur Liège des ateliers massage bébé. En groupe ou en individuel, le massage bébé te permet de partager une première activité avec ton tout-petit. C’est un moment d’échange et de communication !'},
                { property: 'og:title', content: "Massage bébé | L’atelier de Jeanne"},
                { property: 'og:site_name', content: 'atelier de Jeanne'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    }
}
