<template>
<div class="containerGeneral">
      <div class="logoContainer">
      <b-img :src="require('../assets/img/logo-green.png')" fluid thumbnail width="300" center rounded="circle" alt="L’atelier de Jeanne te propose des massages personnalisés sur Liège. Massage énergétique pour tous. Massage prénatal, accompagnement à la naissance, massage bébé, Yoga prénatal, ateliers toucher-bouger en famille, ateliers cosmétiques chaque mois ! L’atelier de Jeanne intervient également à l’école pour des animations massage et toucher bienveillant."></b-img>
      </div>
  
  <h1>Massage prénatal</h1>
  <h2>Pour qui ?</h2>
  <p>Toi qui porte la vie ! (sans blague:))
  Dès le début de ta grossesse et jusqu’à l’accouchement, sans contre-indication. Le
  massage est adapté à chaque étape de ta grossesse pour te garantir confort et
  sécurité.
  </p>
  <h2>Comment ça se passe ?</h2>
  <p>Le massage dure 1h . Je prends d’abord le temps de t’accueillir, d’échanger avec
    toi.<br>
    Le massage est complet (ensemble du corps) et se pratique à l’huile. Tu es couchée
    en position latéral pour un maximum de confort.
    <br><br>
    Le massage s’adapte à toi, en fonction de l’état d’avancement de ta grossesse, de
    tes besoins et des éventuels petits maux à soulager.
    <br><br>
    Après le massage, on prend un moment pour faire le point. Si je peux t’apporter
    certains outils ou conseils pour poursuivre ton chemin après notre rencontre, je le
    ferai avec plaisir !
    <br><br>
    C’est un massage que tu peux offrir, t’offrir ou te faire offrir une fois, dès que tu en
    ressens le besoin ou l’envie. Tu peux aussi décider de venir régulièrement, par
    exemple chaque mois ou chaque trimestre.
  </p>
  <h2>Quels bénéfices ?</h2>
  <p>Le massage prénatal est un moment privilégié de détente et de lâcher-prise. Il
    favorise le bien-être tout au long de ta grossesse.<br>
    C’est un soutien moral, une aide pour soulager les maux physiques ou psychiques.
    C’est un instant qui t’est réservé pour garder le lien avec ton corps, le chouchouter
    et l’aimer.<br>
    Le massage rassure, il apaise les craintes, favorise un sommeil réparateur et libère
    des hormones de bien-être, les ocytocines qui sont transmises au bébé. Te faire du
    bien, c’est faire du bien à ta progéniture. Elle est bien faite la vie:) <br>
    La grossesse est un état que tu ne connaîtras pas souvent ! Laisse-moi
    t’accompagner par le massage pour faire de cette période si particulière une
    expérience positive, riche et pleine de plaisir.
  </p>

  <h2>Tarifs</h2>
  <p>60 € (+- 1 heure)<br>
    5 massages pour 275 €
  </p>
 
</div>
</template>

<script>
export default {
  name: 'MassagePrenatal',
            metaInfo() {
        return { 
            title: "Massage Prénatal | L’atelier de Jeanne",
            meta: [
                { name: 'description', content:  'L’atelier de Jeanne te propose un accompagnement personnalisé par le massage tout au long de ta grossesse. Sur Liège, profite d’un moment privilégié de détente et de lâcher-prise.'},
                { property: 'og:title', content: "Massage Prénatal | L’atelier de Jeanne"},
                { property: 'og:site_name', content: 'atelier de Jeanne'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    }
}
