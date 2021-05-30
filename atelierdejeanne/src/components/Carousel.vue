<template>
  <div id="carouselContainer" class="containerGeneral mt-3">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      fade
      background="#ababab"
      img-width="1536"
      img-height="2048"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
            <b-carousel-slide
      caption="Massage pour bébé"
        text="Venez apprendre les secrets d'un massage réussi !">
        <template #img>
          <router-link :to="'massage-bebe'">
          <img
            class="d-block img-fluid w-100"
            src="../assets/img/massage-bebe.jpg"
            alt="L'atelier de Jeanne vous propose une séance de massage pour bébé"
          >
          </router-link>
        </template>
      </b-carousel-slide>

      <b-carousel-slide
      caption="Toucher-bouger en famille"
        text="Venez vous détendre et vous amuser en famille !">
        <template #img>
          <router-link :to="'toucher-bouger'">
          <img
            class="d-block img-fluid w-100"
            src="../assets/img/toucher-bouger3.jpg"
            alt="L'atelier de Jeanne vous propose une séance de toucher bouger en famille"
          >
          </router-link>
        </template>
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>
  export default {
      name: 'Carousel',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        console.log(slide)
        this.sliding = true
      },
      onSlideEnd(slide) {
        console.log(slide)
        this.sliding = true
      }
    }
  }
</script>