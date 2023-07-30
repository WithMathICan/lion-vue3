import { createApp } from 'vue'
// import 'element-plus/es/defaults.mjs'
import 'element-plus/es/components/notification/style/css'
import './style.scss'
// import App from './App.vue'
import MainBanner from './components/MainBanner.vue'
import ProductMenu from './components/ProductMenu.vue'
import ProductsList from './components/ProductsList.vue'
import Shops from './components/Shops.vue'
import { FormaCategory } from './store/forma'
import { ClothesCategory } from './store/clothes'


// import { getCurrentInstance } from 'vue'
// import { ElNotification } from 'element-plus'
// const { appContext } = getCurrentInstance()
// ElNotification({}, appContext)

// createApp(App).mount('#app')
createApp(ProductMenu).mount('#product_menu')
createApp(ProductsList, { products: FormaCategory.products }).mount('#forma-products')
createApp(ProductsList, { products: ClothesCategory.products }).mount('#clothes-products')
createApp(Shops).mount('#shops-to-buy')
createApp(MainBanner).mount('#main-banner')

