import { createApp } from 'vue'
import './style.scss'
// import App from './App.vue'
import ProductMenu from './components/ProductMenu.vue'
import ProductsList from './components/ProductsList.vue'
import { FormaCategory } from './store/forma'
import { ClothesCategory } from './store/clothes'

// createApp(App).mount('#app')
createApp(ProductMenu).mount('#product_menu')
createApp(ProductsList, { products: FormaCategory.products }).mount('#forma-products')
createApp(ProductsList, { products: ClothesCategory.products }).mount('#clothes-products')
