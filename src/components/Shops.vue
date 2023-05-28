<template>
<div class="shop" v-for="shop in Shops" :key="shop">
    <div class="title">{{ shop.title }}</div>
    <div class="address">{{ shop.address }}</div>
    <div>
        Тел.
        <a class="color-header tel_href" v-for="t in shop.tel" :href="'tel:'+t.replaceAll('-', '')">
            {{ t }}
        </a> 
    </div>
</div>
</template>

<script setup>
import { Shops } from '../store/shops'
</script>

<style scoped lang="scss">
.shop{
    padding: 0.5rem;
    border: solid 1px rgb(113, 110, 110);
    margin-top: 1rem;
    .title{
        font-size: 1.2rem;
        font-weight: 700;
        padding-bottom: 0.5rem;
    }
    // .address{
    //     margin-bottom: 0.5rem;
    // }
    .tel_href{
        display: inline-block;
        padding: 0.5rem;
    }
}
</style>