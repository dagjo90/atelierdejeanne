

<template>
  <div class=" navSideBar">
    <b-sidebar id="sidebar-right"  title="L'atelier de Jeanne" backdrop="true" bg-variant="dark" text-variant="light" width="500px" right shadow>
      
      <div class="px-3 py-2 mx-3">
        <b-navbar-brand :to="'/'">
          <b-img :src="require('../assets/img/logo-green.png')" fluid thumbnail width="300" center rounded="circle" alt="L'atelier de Jeanne massages liège"></b-img>
        </b-navbar-brand>
          <b-navbar-nav>
            <b-nav-item :to="'/'" >Accueil</b-nav-item>
            <b-nav-item :to="'qui-je-suis'" >Qui je suis</b-nav-item>
            <b-nav-item>Les soins</b-nav-item>
              <b-navbar-nav class="mx-3">  
                      <b-nav-item :to="'massage-energetique'">Massage énergétique personnalisé</b-nav-item>
                      <b-nav-item :to="'massage-prenatal'">Massage prénatal</b-nav-item>
                      <b-nav-item :to="'yoga-prenatal'">Yoga prénatal</b-nav-item>
                      <b-nav-item :to="'massage-bebe'">Massage bébé</b-nav-item>
                      <b-nav-item :to="'toucher-bouger'">« Toucher-bouger » en famille</b-nav-item>
                      <b-nav-item :to="'massages-ecole'">Massages à l’école</b-nav-item>
                      <b-nav-item :to="'ateliers-cosmetiques'">Ateliers cosmétiques</b-nav-item>
              </b-navbar-nav> 
        
            <b-nav-item :to="'ou-me-trouver'" >Où me trouver</b-nav-item>
            <b-nav-item :to="'tarifs'" >Tarifs</b-nav-item>
            <b-nav-item :to="'reservation'" >Réservation</b-nav-item>
            <b-nav-item :to="'contact'" >Contact</b-nav-item>
          </b-navbar-nav> 

      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>