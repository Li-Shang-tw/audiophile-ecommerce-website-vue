<template>
  <section class="hero">
    <div class="container">
    <div class="hero__content">
        <h6 class="hero__content__subheading">New product</h6>
        <h2 class="hero__content__heading">  XX99 Mark II Headphones
</h2>
<p class="hero__content__text">  Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
</p>
 <Button  :type="1"  class="hero__btn"/>
    </div>
</div> 
  </section>
</template>

<script setup>
import Button from './Button.vue';

</script>

<style scoped>
   .hero{
    background: url("../../public/assets/home/mobile/image-header.jpg");  
    background-position: center ;
    background-size: cover;
    padding:5em 0 10em 0;
}
.hero__content__subheading{
color:var(--text-medium);
margin-bottom: 1em;
}

.hero__content__heading{
    color:var(--text-light);
    margin-bottom: 0.5em;

}

.hero__content__text{
    color:var(--text-heavy);
    margin-bottom: 2em;
    
}




@media(min-width:600px){
    .hero{
    background:center/ cover url("../../public/assets/home/tablet/image-header.jpg");  
    text-align: center;
}

}
@media(min-width:1200px){

    .hero{
background:center/ cover url("../../public/assets/home/desktop/image-hero.jpg");
padding:8em 0 10em 0;

}
.hero__content{
    width:40%;
}
.hero__content__subheading{
color:var(--text-medium);
margin-bottom: 1em;
}

.hero__content__heading{
    color:var(--text-light);
    margin-bottom: 0.5em;

}

.hero__content__text{
    color:var(--text-heavy);
    margin-bottom: 2em;
    
}
}

</style>