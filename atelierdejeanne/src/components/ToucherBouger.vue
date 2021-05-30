<template>
<div class="containerGeneral">
  <!--<div class="pt-3 text-center">
    <router-link to="/soins" class="btn btn-info btn-lg ">Retour aux soins</router-link>
  </div>-->
    <div class="logoContainer">
      <b-img :src="require('../assets/img/logo-green.png')" fluid thumbnail width="300" center rounded="circle"></b-img>
    </div>
    <h1>« Toucher-bouger » en famille</h1>
    <h2>Pour qui ?</h2>
    <p>Les enfants à partir de 5 ans et jusqu’à 12 ans accompagnés d’un adulte : un
      parent, un parrain, une tata,…</p>
    
    <b-img :src="require('../assets/img/toucher-bouger1.jpg')" fluid  width="600"></b-img>

    <h2>Comment ça se passe ?</h2>
    <p>La rencontre dure environ 50 minutes. En binôme adulte-enfant, on mélange des
      activités de psychomotricité, des exercices de massage habillés, des postures de
      yoga et de la relaxation.<br>
      Une tenue souple et confortable est adaptée. Le matériel est fourni.<br>
      Tu peux décider de t’offrir un moment privilégié en binôme, dans ton salon ou à
      l’atelier.<br>
      Tu peux prévoir une animation pour toute la fratrie, avec les cousins et cousines,
      par exemple lors d’une fête de famille (maximum 6 binômes).<br>
      Tu peux aussi rejoindre un atelier collectif pour rencontrer d’autres familles !<br>
      Tu peux décider de venir à une rencontre pour découvrir le concept ou de profiter
      d’un tarif dégressif en t’inscrivant à plusieurs ateliers !
      <br><br>
      Les ateliers « toucher-bouger » peuvent également se faire entre enfants, par
      exemple lors d’un goûter d’anniversaire. L’ambiance est d’autant plus festive et on
      pratique en musique !
    </p>

    <b-img :src="require('../assets/img/toucher-bouger2.jpg')" fluid  width="600"></b-img>

    <h2>Quels bénéfices ?</h2>
    <p>Les ateliers « toucher-bouger » en binôme, c’est un moment suspendu, une petite
      bulle de partage rien qu’à vous. C’est l’occasion de vivre un moment top en
      famille. De consacrer du temps à ton enfant au cours d’une activité ludique et
      conviviale.<br>
      Tu y apprendras des jeux et des postures faciles à reproduire à la maison. Des
      petits conseils pour apporter calme et sérénité au sein de ton foyer.<br>
      Les ateliers « touchez-bouger » resserrent les liens, renforcent la cohésion et
      l’entente au sein d’une famille.
    </p>

    <b-img :src="require('../assets/img/toucher-bouger4.jpg')" fluid  width="600"></b-img>

    <h2>Tarifs</h2>
    <p>40 € par binôme en individuel<br>
      180 € par binôme pour 5 séances en individuel
      <br><br>
      15 € par binôme en collectif<br>
      65 € pour 5 séances en collectif
      <br><br>
      70 € pour une séance en famille étendue (maximum 6 binômes) ou pour une
      animation collective entre enfants (maximum 12 enfants).
    </p>
 
</div>
</template>

<script>
export default {
  name: 'ToucherBouger',
}
