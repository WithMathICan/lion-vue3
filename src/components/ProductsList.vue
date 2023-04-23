<template>
<div class="product__wrapper">
   <Product v-for="item in products" :product="item" />
</div>
</template>

<script setup>
import Product from './Product.vue'
const props = defineProps(['products'])
</script>

<style lang="scss">
.product__wrapper{
   display: grid;
   grid-template-columns: 1fr 1fr;
   column-gap: 10px;
   row-gap: 10px;

   @media screen and (max-width: 550px) {
      grid-template-columns: 1fr;
   }
}
</style>