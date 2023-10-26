<template>
    <ul class="category__list container">
        <li class="catergory__list__item">
            <div class="catergory__list__item__wrap">
            <img src="../../public/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="headphones" class="catergory__list__item__img">
            <h6 class="catergory__list__item__title">Headphones</h6>
            <router-link to="/catergory/headphones">
            <Button :type ="3"/>
             </router-link>
             </div>
             <div class="catergory__list__item__bg"></div>            
        </li>
        <li class="catergory__list__item">
            <div class="catergory__list__item__wrap">                
             <img src="../../public/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="speakers" class="catergory__list__item__img">
             <h6 class="catergory__list__item__title">Speakers</h6>
             <router-link to="/catergory/speakers">
             <Button :type ="3"/>
             </router-link>
            </div>
            <div class="catergory__list__item__bg"></div>            
        </li>
        <li class="catergory__list__item">
            <div class="catergory__list__item__wrap">
            <img src="../../public/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="earphones" class="catergory__list__item__img">
            <h6 class="catergory__list__item__title">Earphones</h6>
            <router-link to="/catergory/earphones">
            <Button :type ="3"/>
            </router-link>
             </div>
             <div class="catergory__list__item__bg"></div>            
        </li>
    </ul>
</template>

<script setup>
import Button from './Button.vue';

</script>

<style scoped>
.category__list{
    display:flex;
    flex-direction: column;
    gap:1em;
    margin-bottom: 6em;
}

.catergory__list__item__img{
    width:100%;
}
.catergory__list__item__wrap{
    margin:0 auto;      
    width:50%;
    display:flex;
    flex-direction: column;
}
.catergory__list__item__bg{
    background-color: var(--text-heavy);
    width:100%;
    height: 12em;
    margin-top: -12em;
    border-radius: 5px;
}



@media(min-width:600px){    
.category__list{    
    flex-direction: row; 
    align-items: baseline;
    text-align: center;      
}
.catergory__list__item__wrap{
    margin:0 auto;      
    width:70%;
    display:flex;
    flex-direction: column;
}
.catergory__list__item__title{
    font-size: 0.8rem;
}


.catergory__list__item__bg{    
    height: 10em;
    margin-top: -10em;    
}
}
@media (min-width: 1200px){
    .catergory__list__item__bg{    
    height: 12em;
    margin-top: -12em;    
}

}
</style>