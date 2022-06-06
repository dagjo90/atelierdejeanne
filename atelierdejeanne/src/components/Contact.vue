<template>
<div class="containerGeneral">
       <div class="logoContainer">
      <b-img :src="require('../assets/img/logo-green.png')" fluid thumbnail width="300" center rounded="circle" alt="L’atelier de Jeanne te propose des massages personnalisés sur Liège. Massage énergétique pour tous. Massage prénatal, accompagnement à la naissance, massage bébé, Yoga prénatal, ateliers toucher-bouger en famille, ateliers cosmétiques chaque mois ! L’atelier de Jeanne intervient également à l’école pour des animations massage et toucher bienveillant."></b-img>
      </div>

    <h1>Me contacter</h1>
    <p>Vous pouvez me contacter en utilisant ce formulaire. Vous recevrez une copie à l'adresse mail que vous mentionnez.</p>
  <form class="contact-form" @submit.prevent="sendEmail">
    <div v-if="ok" class="alert alert-success" role="alert">
      Le mail a bien été envoyé
    </div>
      <div v-if="nok" class="alert alert-danger" role="alert">
      Une erreur est survenue, veuillez vérifier le formulaire.
    </div>
    <label>Nom</label>
    <input type="text" v-model="user_name" name="user_name">
    <label>Email</label>
    <input type="email" v-model="user_email" name="user_email">
    <label>Message</label>
    <textarea name="message" v-model="message" ></textarea>
    <input class="btn menuButton btn-lg" type="submit" value="Envoyer">
  </form>

  </div>
</template>

<style scoped>
* {box-sizing: border-box;}

.contact-form {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  
  padding: 70px 50px 50px 50px;
  min-width: 300px;
  max-width:700px;
  margin-top: 50px;
  margin-bottom:100px;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

</style>
<script>

import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  data: function(){
    return {
      message:'',
      user_email:'',
      user_name:'',
      ok:false,
      nok:false,
    }
  },
  methods: {
    sendEmail(e) {
      this.ok=false;
      this.nok=false;
      emailjs.sendForm('service_9z6q5yn', 'template_9dz6by7', e.target, 'user_DdEF9S85eMD2XjeOt353m')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            this.message= '';
            this.user_email='';
            this.user_name='';
            this.ok=true;

        }, (error) => {
          this.nok=true;
            console.log('FAILED...', error);
        });
    }
  },
      metaInfo() {
        return { 
            title: "Contact | L’atelier de Jeanne",
            meta: [
                { name: 'description', content:  'Formulaire de contact pour l\'Atelier de Jeanne'},
                { property: 'og:title', content: "Contact | L’atelier de Jeanne"},
                { property: 'og:site_name', content: 'atelier de Jeanne'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    }
}

</script>

