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
   price: 1750,
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
   price: 1550,
   imgs: ['/img/5.jpg', '/img/6.jpg', '/img/db01.jpg', '/img/db02.jpg', '/img/db03.jpg', 
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
   price: 1250,
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
   price: 950,
   imgs: ['/img/7.jpg','/img/8.jpg','/img/9.jpg','/img/r01.jpg','/img/r02.jpg','/img/r03.jpg','/img/r04.jpg','/img/r05.jpg']
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
      Shevrony,
   ],
})
