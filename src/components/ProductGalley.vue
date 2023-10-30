<template>
  {{ images }}
</template>

<script setup>
import {defineProps,computed} from "vue"
const props = defineProps(["product"]);
import { useMediaDetative } from "../composables/useMediaDetative";
 const {mediaType} = useMediaDetative();



</script>

<style scoped>

</style>