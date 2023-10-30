<template>
 <div class="heading__section">
    <h2 class="heading">
        {{ type }}
    </h2>
 </div>
 <template v-for="(item, index) in productOfCatergory"  :key="item.id" >
    <ProductPreview :item="item" :page="'catergory'" class="container" :index="index"/>
</template>
<Catergory1/>
<CallToAction/>

</template>

<script setup>
import { defineProps,ref,watchEffect} from 'vue'

//匯入元件
import ProductPreview from "../components/ProductPreview.vue"
import Catergory1 from '../components/catergory1.vue';
import CallToAction from '../components/CallToAction.vue';
//匯入資料
import { useProductsStore } from '../stores/products';
const productsStore =  useProductsStore();
const props =defineProps(["type"]);
//篩選出該類型的商品

const productOfCatergory  =ref([])

watchEffect(
    ()=>{
       
        if(props.type ==="headphones"){
    productOfCatergory.value =productsStore.getHeadphones;
}else if(props.type ==="speakers"){
    productOfCatergory.value =productsStore.getSpeakers;
}else if(props.type ==="earphones"){
    productOfCatergory.value =productsStore.getEarphones;
}
    }
)


</script>


<style scoped>
.heading__section{
    text-align: center;
    background: var(--primary);
    padding:5em 0;
    margin-bottom: 3em;

}
.heading{
    color:var(--text-light);

}


@media(min-width:600px){ }

@media(min-width:1200px){ }

</style>