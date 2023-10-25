<template>
  <nav class="nav">
    <div class=" nav-wrap container">
      <div class="nav__hambuger">
        <img src="../../public/assets/shared/tablet/icon-hamburger.svg" alt="hamburger">
      </div>
    <div class="nav__logo">
      <img src="../../public/assets/shared/desktop/logo.svg" alt="logo">
    </div>   
      <ul class="nav__list">
        <li class="nav__list__item" >
         <h6>home</h6>     
        </li>
        <li class="nav__list__item">
          <h6>headphone</h6>  
        </li>
        <li class="nav__list__item">
          <h6>speakers</h6> 
        </li>
        <li class="nav__list__item">
          <h6>earphones</h6> 
        </li>
      </ul>
    <div class="nav__cart_icon">
      <img src="../../public/assets/shared/desktop/icon-cart.svg" alt="cart">
    </div>
    </div>
    

  </nav>
</template>

<script setup>

</script>

<style scoped>
.nav{
  background-color: var(--primary); 
}

.nav-wrap{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:1em 0 1em 0;
}

.nav__list{
  display:none;
}


@media(min-width:600px){
  .nav-wrap{  
  justify-content:flex-start; 
}
.nav__logo{
  margin-left: 3em;
}
.nav__cart_icon{
  margin: 0 0 0 auto;
}

}
@media (min-width: 1200px){
  .nav-wrap{  
  justify-content: space-between;
  padding:2em 0 2em 0;
  border-bottom: 1px solid var(--text-medium);
}

.nav__hambuger{
  display:none;
}
.nav__list{
  display:flex;
  gap:1em;
}
.nav__list__item{
color:var( --text-heavy);
}

.nav__logo{
  margin-left: 0;
}

.nav__list{
  margin-left:auto;
}

}

</style>