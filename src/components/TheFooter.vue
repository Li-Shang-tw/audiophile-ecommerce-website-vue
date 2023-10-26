<template>
    <section class="footer">
        <div class="footer-wrap container">
            <div class="footer__header">
                <div class="footer__logo">
                <img src="../../public/assets/shared/desktop/logo.svg" alt="footer_logo">
            </div>
            <ul class="footer__nav__list">
                <router-link to="/">
        <li class="footer__nav__list__item" >
         <h6>home</h6>     
        </li>
    </router-link>
    <router-link to="/catergory/headphones">
        <li class="footer__nav__list__item">
          <h6>headphone</h6>  
        </li>
    </router-link>
    <router-link to="/catergory/speakers">
        <li class="footer__nav__list__item">
          <h6>speakers</h6> 
        </li>
    </router-link>
    <router-link to="/catergory/earphones">
        <li class="footer__nav__list__item">
          <h6>earphones</h6> 
        </li>
    </router-link>
      </ul>

            </div>
          
      <p class="footer__content">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
  and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
  visit our demo facility - we’re open 7 days a week.
      </p>
      <div class="footer__copyright__social-media-wrap">    
      <p class="footer__copyright">  Copyright 2021. All Rights Reserved
</p>
<ul class="footer__social-media">
    <li class="footer__social-media-item">
        <img src="../../public/assets/shared/desktop/icon-facebook.svg" alt="icon-facebook">
    </li>
    <li class="footer__social-media-item">
        <img src="../../public/assets/shared/desktop/icon-twitter.svg" alt="icon-twitter">
    </li>
    <li class="footer__social-media-item">
        <img src="../../public/assets/shared/desktop/icon-instagram.svg" alt="icon-instagram">
    </li>
    
</ul>
</div>
      
        </div>
    </section>
  
</template>

<script setup>

</script>

<style scoped>
.footer{
    background: var(--primary);
    color:var(--text-heavy)
}
/*--fix--router link style-- */
a{
    color:var(--text-heavy)
}

.footer__logo{
    padding: 3em 0;
}

.footer__nav__list,.footer__content,.footer__copyright{
    margin-bottom: 3em;
}
.footer__nav__list{
    display:flex;
    flex-direction: column;
    font-weight: 500;
}
.footer__nav__list__item{
    padding:0.5em 0;
}

.footer__social-media{
    display:flex;
    justify-content: center;
    gap:1.5em;
    padding-bottom: 2.5em;    
}
@media(min-width:600px){   
.footer__nav__list{
    flex-direction: row;
    gap:1em;
    
}

.footer__nav__list,.footer__content,.footer__copyright{
    margin-bottom: 2em;
}

.footer__content{
    margin-bottom: 4em;
}
.footer__copyright__social-media-wrap{
    display:flex;
    justify-content: space-between;
}
}
@media(min-width:1200px){
.footer__header{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.footer__content{
    width:50%;
}
.footer__copyright__social-media-wrap{
   flex-wrap: wrap;
   flex-direction: row-reverse;
   padding-bottom: 2em;
 
}
.footer__social-media{
    order:-1;
    width:100%;
    justify-content: flex-end;
}

.footer__copyright{
    margin:0 auto 0 0;
}
}
</style>