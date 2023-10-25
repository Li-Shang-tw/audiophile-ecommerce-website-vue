<template>
 <TheHero class="hero"/>
 <Catergory1/>
 <Catergory2/>
<CallToAction/>
</template>

<script setup>
import CallToAction from '../components/CallToAction.vue';
import TheHero from '../components/TheHero.vue';
import Catergory1 from '../components/Catergory1.vue';
import Catergory2 from "../components/Catergory2.vue"

</script>

<style scoped>
.hero{
    margin-bottom:5em;
}
</style>