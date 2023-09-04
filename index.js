import fs from 'node:fs'
import {FormaCategory} from './src/store/forma.js'
import {ClothesCategory} from './src/store/clothes.js'

let newProducts = []
for (let i = 0; i < FormaCategory.products.length; i++) {
   newProducts.push(processProduct(FormaCategory.products[i]))
}
for (let i = 0; i < ClothesCategory.products.length; i++) {
   newProducts.push(processProduct(ClothesCategory.products[i]))
}

fs.promises.writeFile(process.cwd() + '/data.json', JSON.stringify(newProducts, null, '  '))

function processProduct(prod) {
   let newProd = {
      title: prod.title_long,
      material: prod.material,
      description: [prod.breaf, ...prod.description].join(' '),
      price: prod.price,
      images: prod.imgs.map(im => 'https://lionstyle.com.ua' + im)
   }
   // console.log({newProd});
   return newProd
}



// processProduct(FormaCategory.products[0])