<template>
   <div class="product__card" :id="product.href">
      <el-carousel :interval="5000" arrow="always" :autoplay="false" indicator-position="none">
         <el-carousel-item v-for="item in product.imgs" :key="item">
            <img :src="item" :alt="product.title" class="product_img" loading="lazy">
         </el-carousel-item>
      </el-carousel>
      <h3 class="color-header">{{ product.title_long }}</h3>
      <div class="product__info">
         <p v-if="product.breaf">{{ product.breaf }}</p>
         <p v-if="product.material">Матеріал: {{ product.material }} 👍</p>
         <p v-for="t in product.description">{{ t }}</p>
         <p v-if="product.price" class="price">АКЦІЙНА ЦІНА: {{ product.price }} грн. 🔥🔥🔥</p>

         <a @click="sendOrder" class="color-header order-button">Замовити</a>
         <a class="color-header order-button" href="viber://chat?number=%2B380508601507">Задати питання</a>
      </div>
   </div>
</template>

<script setup>
import { ElNotification } from 'element-plus'
/** @type {{product: import('../store/Product').Product}} */
const props = defineProps(['product'])

function successInfo() {
   ElNotification({
      title: 'Замовдення зареєстровано',
      message: 'Скоро вам перетелефонують для підтвердження замовлення',
      type: 'success',
      duration: 9000,
   })
}

function errorInfo() {
   ElNotification({
      title: 'Помилка замовлення',
      message: 'Спробуйте замовити пізніше',
      type: 'error',
      duration: 9000,
   })
}

function sendOrder() {
   const result = window.prompt('Для замовлення залиште номер телефону', '');
   if (result) {
      const message = `Замовлення з сайту LionStyle.com.ua. Товар: ${props.product.title_long}. Телефон: ${result}`
      fetch('/api/index.php', {
         method: 'POST',
         body: JSON.stringify({ message }),
         headers: { "Content-Type": "application/json" }
      }).then(response => {
         if (response.ok) successInfo()
         else errorInfo()
      }).catch(() => {
         errorInfo()
      })
   }
}
</script>

<style lang="scss" scoped>
.product__card {
   border: solid 1px rgb(113, 110, 110);
   padding-bottom: 1rem;

   h3 {
      margin: 0;
      padding: 10px;
      font-size: 1.1rem;
      font-weight: 700;
   }

   .product_img {
      width: 100%;
      height: 100%;
      object-fit: contain;
   }

   p.price {
      color: red;
      font-weight: bold;
   }

   .product__info {
      padding: 0 10px;

      p {
         padding: 0 0 5px 0;
         margin: 0;
      }
   }

   .order-button {
      text-transform: uppercase;
      font-weight: 600;
      padding: 1rem 1rem 1rem 0;
   }

   .order-button:hover {
      cursor: pointer;
      user-select: none;
   }

}
</style>
