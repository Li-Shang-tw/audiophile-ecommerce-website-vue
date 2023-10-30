<template>
    <section class="feature_inbox_section">
        <div class="feature__block">
            <h4 class="feature__block__title">features</h4>
            <div class="feature__block__content">{{ product.features }}</div>
        </div>
        <div class="inbox__block">
            <h4 class="inbox__block__title">in the box</h4>
            <ul class="inbox__block__list">
                <li class="inbox__block__list__item" v-for="piece  in product.includes" :key="piece.item">
                    <span class="inbox__block__list__item__unity">
                         {{ piece.quantity }}x
                    </span>
                    <span class="inbox__block__list__item__name">
                        {{ piece.item }}
                    </span>
                     
                    </li>
            </ul>
        </div>
    </section>
  
</template>

<script setup>
import {defineProps} from "vue";
const props = defineProps(["product"])
</script>

<style scoped>
.feature__block{
    margin-bottom: 2em;
}

.inbox__block__list__item__unity{
    color:var(--secondary);
    margin-right:1em;
}
</style>