<template>
    <button class="btn" :class="{'btn--3':type===3,'btn--2':type===2,'btn--1':type===1}">
        <p v-if="type==3" class="btn__text btn__text--3" >shop</p>
        <p v-else class="btn__text"  :class="{'btn__text--2':type===2,'btn__text--1':type===1}">see product</p>
        <img v-if="type==3" src="../../public/assets/shared/desktop/icon-arrow-right.svg" alt="arrow">
    </button>
  
</template>

<script setup>
import {defineProps} from "vue";
const props = defineProps(["type"])

</script>

<style scoped>
.btn{
    padding:1em 1.5em;
    
}
.btn__text{
    text-transform: uppercase;
}

.btn--1{
    background-color: var(--secondary);
    
}

.btn__text--1{
color:var(--text-light);
font-weight: 700;
}
.btn--2{
   background-color: var(--text-heavy);
    font-weight: 700;
}

.btn__text--2{

}

.btn--3{
    display:flex;
    justify-content: center;
    gap:1em;
    border:0px;
    font-weight: 700;
   
}
.btn__text--3{

}
</style>