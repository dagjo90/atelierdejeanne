<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/test">test</router-link>
      <router-link to="/hello">hello</router-link>
    </div>-->
<Header/>
<div class="containerGeneral" id="buttonContainer">
      
      <b-button class="my-3 btn btn-lg menuButton" v-b-toggle.sidebar-right>Afficher le menu</b-button>
    
</div>
<Sidebar/>
<transition name="fade">
  <router-view></router-view>
</transition>
<Carousel/>
<Footer/>
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
 
}
</script>
