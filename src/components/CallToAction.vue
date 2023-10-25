<template>
  <section class="cta container">
    <div class="cta__img">      
      <img v-if="mediaType=='mobile'" src="../../public/assets/shared/mobile/image-best-gear.jpg" alt="cta-img-mobile">
      <img v-else-if="mediaType=='laptop'" src="../../public/assets/shared/tablet/image-best-gear.jpg" alt="cta-img-laptop">
      <img v-else-if="mediaType=='desktop'" src="../../public/assets/shared/desktop/image-best-gear.jpg" alt="cta-img-desktop">
    </div>
    <div class="cta__content">
      <h4 class="cta__content__title">  Bringing you the <strong class="emphasis_word">best</strong>  audio gear
</h4>
      <p class="cta__content__text">
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
  earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
  rooms available for you to browse and experience a wide range of our products. Stop by our store 
  to meet some of the fantastic people who make Audiophile the best place to buy your portable 
  audio equipment.
      </p>

    </div>
  </section>
</template>

<script setup>
import { useMediaDetative } from '../composables/useMediaDetative';
const  {mediaType} = useMediaDetative();


</script>

<style scoped>

.cta__img{
  margin-bottom: 1em;
}
.cta__content__title{
  width:95%;
  margin-bottom: 0.5em;
}

@media(min-width:600px){
  .cta__content__title{
    font-size: 2rem;
  }
}
@media(min-width:1200px){
  .cta{
    display:flex;
  }
  .cta__img{
    order:1;
  }
  .cta__content{
    width:50%;
    padding:5em;
    padding-top:7em;
  }
}
</style>