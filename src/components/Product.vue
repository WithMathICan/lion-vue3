<template>
   <div class="product__card" :id="product.href">
      <el-carousel :interval="5000" arrow="always" :autoplay="false" indicator-position="none">
         <el-carousel-item v-for="item in product.imgs" :key="item">
            <!-- <div class="img__wrapper">
               123
            </div> -->
            <img :src="item" :alt="product.title" class="product_img">
         </el-carousel-item>
      </el-carousel>
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

   h3 {
      margin: 0;
      padding: 10px;
      font-size: 1.1rem;
      font-weight: 700;
   }

   .product_img{
      width: 100%;
      height: 100%;
      object-fit: contain;
   }
   
}
</style>
