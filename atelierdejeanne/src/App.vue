<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/test">test</router-link>
      <router-link to="/hello">hello</router-link>
    </div>-->
<Header/>
<!--<div class="alert text-center alertOpening" role="alert">
  Ouverture le 1er septembre 2021 !
</div>-->
<div class="containerGeneral" id="buttonContainer">
      
      <b-button class="my-3 btn btn-lg menuButton" v-b-toggle.sidebar-right>Afficher le menu</b-button>
    
</div>
<Sidebar/>
<transition name="fade">
  <router-view></router-view>
</transition>
<Carousel/>
<Footer/>

<!-- Messenger Plug-in Discussion Code 
    <div id="fb-root"></div>-->

    <!-- Your Plug-in Discussion code -->
    <!-- <div id="fb-customer-chat" class="fb-customerchat">
    </div>-->
  </div>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>
import './assets/styles/default.css'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
import Carousel from './components/Carousel.vue'
export default {
      components:{
        'Header': Header,
        'Sidebar': Sidebar,
        "Footer": Footer,
        'Carousel': Carousel,
        
    },
  name: 'App',
  title: "L'atelier de Jeanne",

  metaInfo() {
        return { 
            title: "L'atelier de Jeanne",
            meta: [
                { name: 'description', content:  'L’atelier de Jeanne te propose des massages personnalisés, des ateliers toucher-bouger en famille, et des ateliers cosmétiques ! L’atelier de Jeanne intervient également à l’école pour des animations.'},
                { property: 'og:title', content: "L'atelier de Jeanne"},
                { property: 'og:site_name', content: 'atelier de Jeanne'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    }

   /*var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "101933898761632");
      chatbox.setAttribute("attribution", "biz_inbox");
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v10.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/fr_FR/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));*/
 
}
</script>
