import { Product } from './Product'
import { Category } from './Category'

const TepliBruki = new Product({
   title: 'Теплі брюки',
   title_long: 'Теплі військові брюки',
   href: 'tepli-bruki',
   breaf: 'Теплі військові тактичні штани для зимового періоду',
   material: 'софтшел + фліс (Туреччина), фурнітура (Німеччина)',
   description: [
      'Дуже зручні, приємні та комфортні у використанні!',
      'Найвища якість пошиву від LION STYLE!',
   ],
   price: 2249,
   imgs: ['/img/3.jpg', '/img/4.jpg']
})

const DemiBruki = new Product({
   title: 'Демісезонні брюки',
   title_long: 'Демісезонні військові брюки',
   href: 'demi-bruki',
   breaf: 'Військові тактичні брюки з високоякісної турецької сировини для наших захисників!',
   material: 'ріп-стоп мультікам (Туреччина), якісна надійна фурнітура (Німеччина)',
   description: [
      'Дуже комфортні, зручні та міцні!',
      'Найвища якість пошиву від LION STYLE!',
   ],
   price: 1899,
   imgs: ['/img/5.jpg', '/img/6.jpg', '/img/db03.jpg', 
      '/img/db04.jpg', '/img/db05.jpg', '/img/db06.jpg', '/img/db07.jpg', '/img/db08.jpg', '/img/db09.jpg', '/img/db10.jpg']
})

const LitniBruki = new Product({
   title: 'Літні брюки',
   title_long: 'Літні військові тактичні брюки',
   href: 'litni-bruki',
   breaf: 'Військові тактичні брюки з високоякісної турецької сировини для наших захисників!',
   material: 'ріп-стоп піксель (Туреччина), фурнітура (Німеччина)',
   description: [
      'Дуже комфортні, зручні та міцні!',
      'Найвища якість пошиву від LION STYLE!',
   ],
   price: 1499,
   imgs: ['/img/21.webp','/img/22.webp','/img/23.jpg','/img/24.jpg','/img/25.jpg',]
})

const BoyoviSorochky = new Product({
   title: 'Бойові сорочки',
   title_long: 'Бойові тактичні сорочки',
   href: 'boyovi-sorochki',
   breaf: 'Нова модель бойової тактичної сорочки з потайними кишенями на рукавах з блискавками!',
   material: 'ріп-стоп піксель (Туреччина) + стрейчкулір хакі (Туреччина), якісна надійна фурнітура (Німеччина)',
   description: [
      'Дуже зручна і приємна у використанні!',
      'Найвища якість пошиву від LION STYLE!',
   ],
   price: 1199,
   imgs: ['/img/7.jpg','/img/8.jpg','/img/9.jpg','/img/r01.jpg','/img/r02.jpg','/img/r03.jpg','/img/r04.jpg', '/img/db01.jpg', '/img/db02.jpg','/img/r05.jpg']
})

const BoyoviKostyumy = new Product({
   title: 'Бойові костюми',
   title_long: 'Бойова сорочка + військові тактичні брюки',
   href: 'boyovi-kostyumy',
   breaf: 'Нова модель бойової тактичної сорочки з потайними кишенями на рукавах з блискавками!',
   material: 'ріп-стоп піксель+кулпас хакі (Туреччина), надійна міцна фурнітура (Німеччина)',
   description: [
      'Нові моделі літніх військових костюмів: бойова сорочка + військові тактичні брюки!',
      'Найвища якість пошиву від LION STYLE!',
   ],
   price: 2599,
   imgs: ['/img/vk01.jpg','/img/vk02.jpg','/img/vk03.jpg']
})

const ViyskoviFutbolki = new Product({
   title: 'Військові футболки',
   title_long: 'Військові футболки',
   href: 'ViyskoviFutbolki',
   breaf: 'Нові моделі літніх військових футболок найвищої якості!',
   material: 'кулір пеньє піксель (Туреччина)',
   description: [
      'Склад: 80% - хлопок, 20% - поліестер. Розмір: 48-58.',
      'Найвища якість пошиву від LION STYLE!',
   ],
   price: 249,
   imgs: ['/img/vf01.jpg','/img/vf02.jpg','/img/vf03.jpg','/img/vf04.jpg','/img/vf05.jpg']
})

const ViyskoviFutbolki2 = new Product({
   title: 'Військові футболки піксель',
   title_long: 'Військові футболки піксель',
   href: 'ViyskoviFutbolki2',
   breaf: 'Нова модель літньої військової футболки піксель з манжетами і воротником хакі!',
   material: 'кулір пеньє піксель + кул пасс хакі  (Туреччина)',
   description: [
      'Склад: 80% - хлопок, 20% - поліестер. Розмір: 48-58.',
      'Найвища якість пошиву від LION STYLE!',
   ],
   price: 249,
   imgs: ['/img/vf2-01.jpg','/img/vf2-02.jpg','/img/vf2-03.jpg','/img/vf2-04.jpg','/img/vf2-05.jpg','/img/vf2-06.jpg']
})

const KombinovanaFutbolka = new Product({
   title: 'Комбінована футболка',
   title_long: 'Комбінована військова футболка',
   href: 'KombinovanaFutbolka',
   breaf: 'Нова модель комбінованої літньої військової футболки!',
   material: 'кулір пеньє піксель + кул пасс хакі  (Туреччина)',
   description: [
      'Склад: 80% - хлопок, 20% - поліестер. Розмір: 48-58.',
      'Найвища якість пошиву від LION STYLE!',
   ],
   price: 449,
   imgs: ['/img/kvf01.jpg','/img/kvf02.jpg','/img/kvf03.jpg']
})

const Futbolka2 = new Product({
   title: 'Військова футболка',
   title_long: 'Нова модель військової футболки',
   href: 'Futbolka2',
   breaf: 'Нова модель військової футболки від LION STYLE 🦁',
   material: 'Кулл Макс мультікам, активно вбирає вологу, приємно охолоджує',
   description: [
      'Склад: 80% - хлопок, 20% - поліестер. Розмір: 48-58.',
      'Люксова якість пошиву від LION STYLE 👌⭐⭐⭐⭐⭐',
   ],
   price: 349,
   imgs: ['/img/f01.jpg','/img/f02.jpg','/img/f03.jpg','/img/f04.jpg','/img/f05.jpg']
})

const LitnyaViyskovaFutbolka = new Product({
   title: 'Літня військова футболка',
   title_long: 'Літня військова футболка',
   href: 'LitnyaViyskovaFutbolka',
   breaf: 'Нова модель літньої військової футболки від LION STYLE 🦁',
   material: 'кул пасс хакі найвищої якості (Туреччина)',
   description: [
      'Розмір: 48-58.',
      'Люксова якість пошиву від LION STYLE ⭐⭐⭐⭐⭐',
   ],
   price: 349,
   imgs: ['/img/lvf01.jpg','/img/lvf02.jpg']
})

const Shevrony = new Product({
   title: 'Шеврони',
   title_long: 'Військові шеврони',
   href: 'shevrony',
   breaf: 'Нові моделі військових шевронів для ЗСУ виготовляються на сучасному новому обладнанні найвищого класу з найякіснішої імпортної сировини з урахуванням всіх діючих стандартів.',
   description: [
      'Тільки найякісніші і найкращі шеврони для самих найкращих захисників у світі!!!',
      'Працюємо заради Перемоги з Україною в серці!',
   ],
   imgs: ['/img/10.jpg','/img/11.jpg','/img/12.jpg','/img/13.jpg','/img/sh01.jpg','/img/sh02.jpg']
})

export const FormaCategory = new Category({
   title: 'Військова форма',
   description: '',
   products: [
      TepliBruki,
      DemiBruki,
      LitniBruki,
      BoyoviSorochky,
      BoyoviKostyumy,
      KombinovanaFutbolka,
      ViyskoviFutbolki,
      ViyskoviFutbolki2,
      Futbolka2,
      LitnyaViyskovaFutbolka,
      Shevrony,
   ],
})
