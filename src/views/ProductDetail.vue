<template>
  <div class="product_detail container">
  <ProductPreview :item="product" :page="'detail'"/>
<FeatureInbox :product="product"/>
<ProductGalley :product="product"/>
  <Catergory1/>
</div>
</template>

<script setup>
import {ref, defineProps,watchEffect} from "vue"
//引入元件
import ProductPreview from "../components/ProductPreview.vue";
import Catergory1 from "../components/Catergory1.vue";
import FeatureInbox from "../components/FeatureInbox.vue";
import ProductGalley from "../components/ProductGalley.vue";
const props = defineProps(["id"]);
//引入store
import { useProductsStore } from "../stores/products";

const productsStore =useProductsStore();


const product = ref({});
watchEffect(()=>{
    product.value= productsStore.products.find((item)=>item.id==props.id);
})



</script>

<style scoped>
.product_detail{
  text-align: left;
}
</style>