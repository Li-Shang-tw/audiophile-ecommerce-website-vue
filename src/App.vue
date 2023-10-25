<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavigator from './components/TheNavigator.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  
 <TheNavigator/>
  <RouterView />
  <TheFooter/>
</template>

<style scoped>

</style>
