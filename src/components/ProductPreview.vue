<template>
  <div class="product" :class="{'product--even':isEven,'product--odd':!isEven}">    
    <div class="product__img__block " >
     <template v-if="page==='catergory'" >
      <img v-if="mediaType=='mobile'" class="product__img round_corner" :src="item.categoryImage.mobile" alt="product__img-mobile">
      <img v-else-if="mediaType=='laptop'" class="product__img round_corner" :src="item.categoryImage.tablet" alt="product__img-mobile">
      <img v-else-if="mediaType=='desktop'" class="product__img round_corner" :src="item.categoryImage.desktop" alt="product__img-mobile">
    </template>
     <template v-else-if="page==='detail'" >
      <img v-if="mediaType=='mobile'" class="product__img round_corner" :src="item.image.mobile" alt="product__img-mobile">
      <img v-else-if="mediaType=='laptop'" class="product__img round_corner" :src="item.image.tablet" alt="product__img-mobile">
      <img v-else-if="mediaType=='desktop'" class="product__img round_corner" :src="item.image.desktop" alt="product__img-mobile">
    </template>
    </div>
    <div class="product__cotent">
      <div class="prodcut__content__title__section">
        <p class="product__content__subtitle overline" v-if="item.new">new product</p>
        <h4 class="product__content__title">{{ item.name }}</h4>
      </div>        
        <p class="product__content__text">{{ item.description }}</p>
        <h6 v-if="page==='detail'" class="product__content__price">$ {{ item.price }}</h6>
        <router-link :to="urlToDetail">
          <Button class="prouduct__content__btn" :type="1"/>
        </router-link>
        
    </div>
  </div>
</template>

<script setup>
import {defineProps,computed} from "vue"
const props = defineProps(["item",'index','page'])
import Button from "./Button.vue";
import {useMediaDetative} from "../composables/useMediaDetative"
const  {mediaType} = useMediaDetative();

const isEven = computed(()=> props.index%2);
const urlToDetail = computed(()=>"/"+props.item.category+"/"+props.item.id)

</script>

<style scoped>
.product{
  margin-bottom: 3em;
}
.product__content__subtitle{
  color:var(--secondary);
  text-transform: uppercase;
  margin-bottom: 1em;
}

.product__img {
  margin-bottom: 1em;
} 
.product__content__title{
  margin-bottom: 1em;
}
.product__content__text{
  margin-bottom: 1em;
}
.product__content__price{
  margin-bottom: 1em;
}

@media(min-width:600px){ 
  .product{
    text-align: center;
  }

  .prodcut__content__title__section{
    margin:0 auto;
    width:50%;
  }
}

@media(min-width:1200px){ 
.product{
  display:flex;
  text-align: left;  

}

.product--even .product__img__block {
  order:1;

}

.product--odd .product__cotent {
  padding-left:5%;

}
.product__img__block {
  width:50%;

}
.product__cotent{
  width:50%; 
}


.prodcut__content__title__section{
    margin-left:0;
    width:50%;
  }
}

</style>