<template>
<div class="product__card" :id="product.href">
   <h3>{{ product.title_long }}</h3>
</div>
</template>

<script setup>
/** @type {{product: import('../store/Product').Product}} */
const props = defineProps(['product'])
</script>

<style lang="scss">
.product__card {
   border: solid 1px rgb(113, 110, 110);
   h3{
      margin: 0;
      padding: 10px;
      font-size: 1.1rem;
      font-weight: 700;
   }
}
</style>
