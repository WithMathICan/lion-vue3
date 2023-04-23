<template>
   <li class="info" v-for="cat in categories">
      {{ cat.title }}
      <ul>
         <li class="item" v-for="item in cat.products"><a :href="'#'+item.href">{{ item.title }}</a></li>
      </ul>
   </li>
</template>

<script setup>
import {categories} from '../store'
</script>
