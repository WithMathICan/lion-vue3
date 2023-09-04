import { Product } from './Product.js'
import { Category } from './Category.js'

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
   fake_price: 2449,
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
   price: 1949,
   fake_price: 2149,
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
   price: 1599,
   fake_price: 1799,
   imgs: ['/img/vtb01.jpg','/img/vtb02.jpg', '/img/21.webp','/img/22.webp','/img/23.jpg','/img/24.jpg','/img/25.jpg',]
})

const PoliceiskiBruki = new Product({
   title: 'Поліцейські брюки',
   title_long: 'Поліцейські брюки чоловічі від LION STYLE 🦁',
   href: 'PoliceiskiBruki',
   breaf: 'Розмір: 48-58',
   material: 'Матеріал: ріп-стоп чорний (Туреччина), фурнітура (Німеччина) 👍',
   description: [
      'Дуже комфортні, зручні та міцні!',
      'Люксова якість пошиву від LION STYLE 💪',
   ],
   price: 1950,
   fake_price: 2150,
   imgs: ['/img/p01.jpg','/img/p02.jpg','/img/p03.jpg','/img/p04.jpg','/img/p05.jpg']
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
   price: 1249,
   fake_price: 1349,
   imgs: ['/img/bs01.jpg','/img/bs02.jpg','/img/bs03.jpg','/img/7.jpg','/img/8.jpg','/img/9.jpg','/img/r01.jpg','/img/r02.jpg','/img/r03.jpg','/img/r04.jpg', '/img/db01.jpg', '/img/db02.jpg','/img/r05.jpg']
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
   price: 2699,
   fake_price: 3199,
   imgs: ['/img/vk04.jpg','/img/vk05.jpg','/img/vk06.jpg', '/img/vk01.jpg','/img/vk02.jpg','/img/vk03.jpg']
})

// const ViyskoviFutbolki = new Product({
//    title: 'Військові футболки',
//    title_long: 'Військові футболки',
//    href: 'ViyskoviFutbolki',
//    breaf: 'Нові моделі літніх військових футболок найвищої якості!',
//    material: 'кулір пеньє піксель (Туреччина)',
//    description: [
//       'Склад: 80% - хлопок, 20% - поліестер. Розмір: 48-58.',
//       'Найвища якість пошиву від LION STYLE!',
//    ],
//    price: 249,
//    fake_price: 349,
//    imgs: ['/img/vf01.jpg','/img/vf02.jpg','/img/vf03.jpg','/img/vf04.jpg','/img/vf05.jpg']
// })

const ViyskoviFutbolki2 = new Product({
   title: 'Військові футболки кулір піксель',
   title_long: 'Військові футболки піксель',
   href: 'ViyskoviFutbolki2',
   breaf: 'Нова модель літньої військової футболки піксель з манжетами і воротником хакі!',
   material: 'кулір пеньє піксель + кул пасс хакі  (Туреччина)',
   description: [
      'Склад: 80% - хлопок, 20% - поліестер. Розмір: 48-58.',
      'Найвища якість пошиву від LION STYLE!',
   ],
   price: 249,
   fake_price: 349,
   imgs: ['/img/vf2-07.jpg','/img/vf2-08.jpg','/img/vf2-09.jpg','/img/vf2-01.jpg','/img/vf2-02.jpg','/img/vf2-03.jpg','/img/vf2-04.jpg','/img/vf2-05.jpg','/img/vf2-06.jpg', '/img/vf01.jpg','/img/vf02.jpg','/img/vf03.jpg','/img/vf04.jpg','/img/vf05.jpg']
})

const KombinovanaFutbolka = new Product({
   title: 'Комбінована футболка',
   title_long: 'Футболка комбінована Кулір піксель+ кул пасс хакі',
   href: 'KombinovanaFutbolka',
   breaf: 'Нова модель комбінованої літньої військової футболки!',
   material: 'кулір пеньє піксель + кул пасс хакі  (Туреччина)',
   description: [
      'Склад: 80% - хлопок, 20% - поліестер. Розмір: 48-58.',
      'Найвища якість пошиву від LION STYLE!',
   ],
   price: 449,
   fake_price: 549,
   imgs: ['/img/kvf01.jpg','/img/kvf02.jpg','/img/kvf03.jpg']
})

const Futbolka2 = new Product({
   title: 'Військова футболка',
   title_long: 'Футболка Кул Макс мультікам',
   href: 'Futbolka2',
   breaf: 'Нова модель військової футболки від LION STYLE 🦁',
   material: 'Кулл Макс мультікам, активно вбирає вологу, приємно охолоджує',
   description: [
      'Склад: 80% - хлопок, 20% - поліестер. Розмір: 48-58.',
      'Люксова якість пошиву від LION STYLE 👌⭐⭐⭐⭐⭐',
   ],
   price: 349,
   fake_price: 449,
   imgs: ['/img/f06.jpg','/img/f07.jpg','/img/f08.jpg','/img/f01.jpg','/img/f02.jpg','/img/f03.jpg','/img/f04.jpg','/img/f05.jpg']
})

const LitnyaViyskovaFutbolka = new Product({
   title: 'Літня військова футболка',
   title_long: 'Футболка Кул пасс хакі',
   href: 'LitnyaViyskovaFutbolka',
   breaf: 'Нова модель літньої військової футболки від LION STYLE 🦁',
   material: 'кул пасс хакі найвищої якості (Туреччина)',
   description: [
      'Розмір: 48-58.',
      'Люксова якість пошиву від LION STYLE ⭐⭐⭐⭐⭐',
   ],
   price: 449,
   fake_price: 549,
   imgs: ['/img/lvf01.jpg','/img/lvf02.jpg']
})

const FutbolkaVKombinovana = new Product({
   title: 'Футболка військова комбінована',
   title_long: 'Футболка військова комбінована кул макс мультікам+кул пасс хакі',
   href: 'FutbolkaVKombinovana',
   breaf: 'Нова модель літньої військової футболки від LION STYLE 🦁',
   material: 'Кул Пасс хакі (Туреччина) + Кул Макс мультікам (Туреччина)',
   description: [
      'Розмір: 48-58.',
      'Найвища якість пошиву від LION STYLE 👌',
   ],
   price: 449,
   fake_price: 549,
   imgs: ['/img/kvf04.jpg','/img/kvf05.jpg','/img/kvf06.jpg','/img/fvk01.jpg','/img/fvk02.jpg','/img/fvk03.jpg','/img/fvk04.jpg','/img/fvk05.jpg']
})

// const Shevrony = new Product({
//    title: 'Шеврони',
//    title_long: 'Військові шеврони',
//    href: 'shevrony',
//    breaf: 'Нові моделі військових шевронів для ЗСУ виготовляються на сучасному новому обладнанні найвищого класу з найякіснішої імпортної сировини з урахуванням всіх діючих стандартів.',
//    description: [
//       'Тільки найякісніші і найкращі шеврони для самих найкращих захисників у світі!!!',
//       'Працюємо заради Перемоги з Україною в серці!',
//    ],
//    imgs: ['/img/10.jpg','/img/11.jpg','/img/12.jpg','/img/13.jpg','/img/sh01.jpg','/img/sh02.jpg']
// })

const Shevrony1 = new Product({
   title: 'Шеврони',
   title_long: 'Військові шеврони',
   href: 'shevrony1',
   breaf: 'Нові моделі військових шевронів для ЗСУ виготовляються на сучасному новому обладнанні найвищого класу з найякіснішої імпортної сировини з урахуванням всіх діючих стандартів.',
   description: [
      'Тільки найякісніші і найкращі шеврони для самих найкращих захисників у світі!!!',
      'Працюємо заради Перемоги з Україною в серці!',
   ],
   price: 60,
   imgs: ['/img/sh15.jpg','/img/sh21.jpg','/img/sh22.jpg','/img/sh23.jpg','/img/sh24.jpg','/img/sh25.jpg','/img/sh26.jpg','/img/sh27.jpg']
})

const ShevronyWide = new Product({
   title: 'Шеврон флаг з гербом',
   title_long: 'Шеврон флаг з гербом',
   href: 'ShevronyWide',
   breaf: 'Нові моделі військових шевронів для ЗСУ виготовляються на сучасному новому обладнанні найвищого класу з найякіснішої імпортної сировини з урахуванням всіх діючих стандартів.',
   description: [
      'Тільки найякісніші і найкращі шеврони для самих найкращих захисників у світі!!!',
      'Працюємо заради Перемоги з Україною в серці!',
   ],
   price: 40,
   imgs: ['/img/sh11.jpg']
})

const ShevronySmall = new Product({
   title: 'Шеврон флаг маленький',
   title_long: 'Шеврон флаг маленький',
   href: 'ShevronySmall',
   breaf: 'Нові моделі військових шевронів для ЗСУ виготовляються на сучасному новому обладнанні найвищого класу з найякіснішої імпортної сировини з урахуванням всіх діючих стандартів.',
   description: [
      'Тільки найякісніші і найкращі шеврони для самих найкращих захисників у світі!!!',
      'Працюємо заради Перемоги з Україною в серці!',
   ],
   price: 30,
   imgs: ['/img/sh12.jpg', ]
})

const ShevronDSNS = new Product({
   title: 'Шеврон ДСНС',
   title_long: 'Шеврон ДСНС',
   href: 'ShevronDSNS',
   breaf: 'Нові моделі військових шевронів для ЗСУ виготовляються на сучасному новому обладнанні найвищого класу з найякіснішої імпортної сировини з урахуванням всіх діючих стандартів.',
   description: [
      'Тільки найякісніші і найкращі шеврони для самих найкращих захисників у світі!!!',
      'Працюємо заради Перемоги з Україною в серці!',
   ],
   price: 60,
   imgs: ['/img/sh13.jpg','/img/sh28.jpg','/img/sh29.jpg']
})

// const ShevronPolice = new Product({
//    title: 'Шеврон Поліція',
//    title_long: 'Шеврон Поліція',
//    href: 'ShevronPolice',
//    breaf: 'Нові моделі шевронів виготовляються на сучасному новому обладнанні найвищого класу з найякіснішої імпортної сировини з урахуванням всіх діючих стандартів.',
//    description: [
//       'Тільки найякісніші і найкращі шеврони для самих найкращих захисників у світі!!!',
//       'Працюємо заради Перемоги з Україною в серці!',
//    ],
//    price: 60,
//    imgs: ['/img/sh14.jpg']
// })

const NashivkaDSNS = new Product({
   title: 'Нашивка ДСНС',
   title_long: 'Нашивка ДСНС',
   href: 'NashivkaDSNS',
   breaf: 'Нові моделі військових шевронів для ЗСУ виготовляються на сучасному новому обладнанні найвищого класу з найякіснішої імпортної сировини з урахуванням всіх діючих стандартів.',
   description: [
      'Тільки найякісніші і найкращі шеврони для самих найкращих захисників у світі!!!',
      'Працюємо заради Перемоги з Україною в серці!',
   ],
   price: 40,
   imgs: ['/img/sh13.jpg']
})

const NashivkaZSU = new Product({
   title: 'Нашивка ЗСУ',
   title_long: 'Нашивка ЗСУ',
   href: 'NashivkaZSU',
   breaf: 'Нові моделі військових шевронів для ЗСУ виготовляються на сучасному новому обладнанні найвищого класу з найякіснішої імпортної сировини з урахуванням всіх діючих стандартів.',
   description: [
      'Тільки найякісніші і найкращі шеврони для самих найкращих захисників у світі!!!',
      'Працюємо заради Перемоги з Україною в серці!',
   ],
   price: 40,
   imgs: ['/img/zsu.jpg','/img/zsu01.jpg','/img/zsu02.jpg'],
})

const Futbolka7 = new Product({
   title: 'Чорна Футболка з наліпками під шеврони',
   href: 'Futbolka7',
   title_long: 'Чорна футболка з наліпками під шеврони від LION STYLE 🦁',
   breaf: 'Розмір: 48-58',
   material: 'Стрейч Кулір найвищої якості (Туреччина) 👌',
   description: [
      'Склад: 95% бавовна, 5% поліестер 👍',
      'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
   ],
   price: 449,
   fake_price: 549,
   imgs: ['/img/futb7-01.jpg', '/img/futb7-02.jpg', '/img/futb7-03.jpg', '/img/futb7-04.jpg', '/img/futb7-05.jpg'],
})

export const FormaCategory = new Category({
   title: 'Військова форма',
   description: '',
   products: [
      TepliBruki,
      DemiBruki,
      LitniBruki,
      PoliceiskiBruki,
      BoyoviSorochky,
      BoyoviKostyumy,
      KombinovanaFutbolka,
      // ViyskoviFutbolki,
      ViyskoviFutbolki2,
      Futbolka2,
      LitnyaViyskovaFutbolka,
      FutbolkaVKombinovana,
      Futbolka7,
      Shevrony1,
      ShevronyWide,
      ShevronySmall,
      NashivkaZSU,
      ShevronDSNS,
      NashivkaDSNS,
   ],
})
