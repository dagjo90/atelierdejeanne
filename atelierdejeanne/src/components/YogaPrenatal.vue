<template>
<div class="containerGeneral">
      <div class="logoContainer">
      <b-img :src="require('../assets/img/logo-green.png')" fluid thumbnail width="300" center rounded="circle" alt="L’atelier de Jeanne te propose des massages personnalisés sur Liège. Massage énergétique pour tous. Massage prénatal, accompagnement à la naissance, massage bébé, Yoga prénatal, ateliers toucher-bouger en famille, ateliers cosmétiques chaque mois ! L’atelier de Jeanne intervient également à l’école pour des animations massage et toucher bienveillant."></b-img>
      </div>

  <h1>Yoga prénatal</h1>
  <h2>Pour qui ?</h2>
  <p>Toi qui porte la vie ! (sans blague:))</p>
  <h2>Comment ça se passe ?</h2>
  <p>Une séance de Yoga dure une heure en moyenne. Une tenue souple et confortable
    est adaptée. On pratique sur tapis, souvent avec un ballon de grossesse et des
    sangles. L’ensemble du matériel est fourni.
    <br><br>
    Tu peux décider de pratiquer le Yoga prénatal lors d’entretiens individuels. Dans
    ce cas, tout qui souhaite t’accompagner dans ta pratique est le bienvenu. Le
    coparent, la bonne copine, ton premier né, … on déconseille juste les belles-mères
    acariâtres mais, qui sait, ça pourrait leur faire du bien :)
    <br>
    Tu peux aussi rejoindre un atelier collectif. C’est l’occasion de rencontrer d’autres
    parents, de papoter et de pratiquer le Yoga ensemble, de façon décontractée et
    surtout, décomplexée !(tracasse on n’est pas là pour faire le grand écart tête en bas
    jambe retournée).
    <br>
    Individuel ou collectif, tu peux pratiquer le Yoga prénatal juste une fois pour
    découvrir, chopper quelques « trucs » pour le jour J ou simplement te consacrer un
    moment de bien-être. Du peux aussi t’offrir (ou te faire offrir !) plusieurs
    rencontres à un prix avantageux pour prendre le temps de progresser et
    d’approfondir.
  </p>
  <h2>Quels bénéfices ?</h2>
  <p>Le Yoga prénatal favorise une bonne posture et une respiration juste.<br>
    Le Yoga assouplit les tissus et tonifie les muscles et le périnée pour préparer à
    l’effort de l’accouchement (et de ta vie de maman!). Il accompagne l’ouverture du
    bassin et de la cage thoracique.<br>
    Le Yoga t’aide à prendre conscience de ton corps, de ses changements et de ses
    possibilités pour favoriser un accouchement serein, maîtrisé et en pleine
    conscience.<br>
    Le Yoga t’apporte calme et sérénité. La libération d’endorphine participe à
    l’équilibre du système nerveux.
  </p>
  <h2>Tarifs</h2>
  <p>40 € la séance en individuel ou 180€ les 5 séances<br>
  15 € la séance en collectif ou 65 € les 5 séances</p>

  <p style="color:gray;"><br>accompagnement en couple</p>

</div>
</template>

<script>
export default {
  name: 'YogaPrenatal',
      metaInfo() {
        return { 
            title: "Yoga prénatal | L’atelier de Jeanne",
            meta: [
                { name: 'description', content:  'A Liège, L’atelier de Jeanne t’invite à une séance de yoga prénatal ! Le Yoga t’aide à prendre conscience de ton corps, de ses changements et de ses possibilités pour favoriser un accouchement serein.'},
                { property: 'og:title', content: "Yoga prénatal | L’atelier de Jeanne"},
                { property: 'og:site_name', content: 'atelier de Jeanne'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    }
}
