<script setup>
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue';
let items = ['/banner3.jpg', '/banner2.jpg', '/banner.jpg']
const el = ref()
const { width, height } = useElementSize(el)
console.log({width, height});
</script>

<template>
<div ref="el" class="carousel-wrapper">
   <el-carousel :interval="4000" arrow="always" :autoplay="true" :height="height*0.37" indicator-position="none">
      <el-carousel-item v-for="item in items" :key="item">
         <img :src="item" class="banner-image" loading="lazy">
      </el-carousel-item>
   </el-carousel>
</div>
</template>


