<template>
 <TheHero class="hero"/>
 <Catergory1/>
 <HotProducts/>
<CallToAction/>
</template>

<script setup>
import CallToAction from '../components/CallToAction.vue';
import TheHero from '../components/TheHero.vue';
import Catergory1 from '../components/Catergory1.vue';
import HotProducts from "../components/HotProducts.vue"

</script>

<style scoped>
.hero{
    margin-bottom:5em;
}
</style>