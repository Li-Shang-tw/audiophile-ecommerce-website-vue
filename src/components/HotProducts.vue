<template>
  <ul class="hot-products__list container">
    <li class="hot-products__item--1">
        <div class="hot-products__item-wrap--1">
        <img src="../../public/assets/home/mobile/image-speaker-zx9.png" alt="speaker-zx9" class="hot-products__item__img--1 wrap">
        <div class="hot-products__item__content--1">
            <h4 class="hot-products__item__content__title--1 wrap">ZX9<br> speaker</h4>
            <p class="hot-products__item__content__text--1 ">  Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Button :type="2" class="btn--1" /></div>
        </div>
    </li>
    <li class="hot-products__item--2">    
        <h4 class="hot-products__item__title--2">ZX7 speaker</h4>            
        <Button :type="2" class="btn" />
    </li>
    <li class="hot-products__item--3">        
        <img src="../../public/assets/home/mobile/image-earphones-yx1.jpg" alt="earphones" class="hot-products__item__img--3">
        <div class="hot-products__item__content--3">
            <h4 class="hot-products__item__content__title--3 ">  YX1 earphones</h4>            
            <Button :type="2" class="btn--2" />
        </div>
        
    </li>
  </ul>
</template>

<script setup>
import Button from './Button.vue';

</script>

<style scoped>

.hot-products__list{
margin-bottom: 3em;
}
/*---product-1----- */
.hot-products__item--1{
    background-color: var(--secondary);
    background-image: url("../../public/assets/home/desktop/pattern-circles.svg");
    background-position: center top;
    background-size: cover;
    padding:5em 0;
    border-radius: 5px;
    margin-bottom: 1em;
    overflow: hidden;
}

.hot-products__item-wrap--1{
    margin:0 auto;
    width:70%;
}
.hot-products__item__content__text--1{
    font-size: 0.8rem;
}

.wrap{
    margin:0 auto;
    width:60%;
}

.hot-products__item__img--1{
    margin-bottom: 1em;
}

.hot-products__item__content__title--1{
    color:var(--text-light);
    margin-bottom: 0.7em;
}
.hot-products__item__content__text--1{
    color:var(--text-medium);
    margin-bottom: 1em;
}

/*--btn--- */
.btn--1{
    background-color: var(--primary);
    color:var(--text-light)
}

/*---product2----- */
.hot-products__item--2{
    background-image: url("../../public/assets/home/mobile/image-speaker-zx7.jpg");
    background-position: center;
    background-size: cover;
    text-align: left;
    padding: 8em 10%;
    border-radius: 5px;
    margin-bottom: 1em;
}
.hot-products__item__title--2{
    margin-bottom: 1em;
}

/*---product3----- */
.hot-products__item--3{
    display:flex;
    flex-direction: column;
    gap:1em;
    text-align: left;    
}

.hot-products__item__img--3{
    border-radius: 5px;
}
.hot-products__item__content--3{
    border-radius: 5px;
    background-color: var(--text-heavy); 
    padding:3em 2em; 
}

.hot-products__item__content__title--3{
    color:var(--primary);
    margin-bottom: 1em;
}

@media(min-width:600px){ 
.hot-products__list {
text-align: center;
}
    /*--font-size---- */
.hot-products__item__content__title--1{
    font-size: 2.5rem;
}  
.hot-products__item__content__title--3{
    font-size: 1.5rem;
}  
.hot-products__item__content__text--1{
    font-size: 15px;
    width:45%;
    margin:0 auto 2em;
}
/*---product-1----- */

.wrap{
    width:30%;
}
/*---product2----- */
.hot-products__item--2{
    background-image: url("../../public/assets/home/tablet/image-speaker-zx7.jpg");   
}

/*---product3----- */
.hot-products__item--3{
    flex-direction: row;
    gap:2%;
   
}
.hot-products__item__img--3{
width:50%;
}
.hot-products__item__content--3{
    width:50%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

}
@media(min-width:1200px){
    .hot-products__list {
text-align: left;
}

/*---product-1----- */

.hot-products__item--1{    
    padding:5em 0 0 0;
    
}
/*---兩區塊占比 */
.hot-products__item__img--1{
    margin-bottom:-1em;
    width:45%; 
    margin: 0 auto -1em  0;  
}

.hot-products__item__content--1{
    width:45%;    
}
.hot-products__item-wrap--1{
        display:flex;       
        justify-content: space-between;     
        width:80%;   
    }

.hot-products__item__content__title--1{
    width:100%;
}

.hot-products__item__content__text--1{
    margin-left: 0;
    width:80%;
    
}
/*---product2----- */
.hot-products__item--2{
    background-image: url("../../public/assets/home/desktop/image-speaker-zx7.jpg");   
}
}
</style>