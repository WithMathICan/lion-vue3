import { Product } from './Product.js'
import { Category } from './Category.js'

const TepliKostumy = new Product({
   title: 'Теплі костюми',
   href: 'kostyumy',
   title_long: 'Теплі костюми з вишивкою',
   breaf: 'Нова колекція теплих спортивних костюмів від українського національного бренду LION STYLE з оригінальною вишивкою!',
   material: 'футер трьохнитка + фліс (Туреччина)',
   description: [
      'Дуже класні, стильні, комфортні та яскраві!',
      'Неповторний дизайн і найвища якість пошиву від LION STYLE!',
   ],
   price: 1999,
   fake_price: 2499,
   imgs: ['/img/14.jpg','/img/15.jpg','/img/31.jpg','/img/32.jpg','/img/33.jpg','/img/34.jpg']
})

const TeplyiKostum = new Product({
   title: 'Теплий костюм',
   href: 'TeplyiKostum',
   title_long: 'Теплий костюм з вишивкою LION STYLE (помаранчева худі з чорними рукавами+ чорні штани)',
   breaf: 'Нова колекція теплих спортивних костюмів від українського національного бренду LION STYLE з оригінальною вишивкою!',
   material: 'футер трьохнитка на флісі (Туреччина)',
   description: [
      'Худі помаранчева з чорними рукавами і фірмовою вишивкою LION STYLE. Брюки чорні',
      'Люксова якість пошиву від LION STYLE 👌⭐⭐⭐⭐⭐',
   ],
   price: 1999,
   fake_price: 2499,
   imgs: ['/img/tk01.jpg','/img/tk02.jpg','/img/tk03.jpg']
})

const ExclusiveCostyumy = new Product({
   title: 'Ексклюзивний костюм',
   href: 'exkl-kostyum',
   title_long: 'Теплий костюм від LION STYLE з ексклюзивною горизонтальною вишиванкою (помаранчевий)',
   breaf: 'Нова колекція теплих спортивних костюмів від українського національного бренду LION STYLE з оригінальною вишивкою!',
   material: 'футертрьохнитка + фліс (Туреччина)',
   description: [
      'Неповторний стиль і національна українська вишиванка!',
      'Люксова якість пошиву від LION STYLE!',
   ],
   price: 2099,
   fake_price: 2599,
   imgs: ['/img/16.jpg','/img/35.jpg','/img/36.jpg'],
})

const ExclusiveCostyum2 = new Product({
   title: 'Ексклюзивний теплий костюм',
   href: 'ExclusiveCostyum2',
   title_long: 'Теплий костюм від LION STYLE з ексклюзивною вертикальною вишиванкою (помаранчевий)',
   breaf: 'Нова колекція теплих спортивних костюмів від українського національного бренду LION STYLE з оригінальною вишивкою!',
   material: 'футер трьохнитка на флісі (Туреччина)',
   description: [
      'Худі помаранчева з оригінальною вертикальною вишивкою. Брюки чорні',
      'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
   ],
   price: 2099,
   fake_price: 2599,
   imgs: ['/img/extk01.jpg','/img/extk02.jpg','/img/extk03.jpg'],
})

const Futbolka = new Product({
   title: 'Футболка Стрейч Кулір',
   href: 'Futbolka',
   title_long: 'Футболка Стрейч Кулір чорна від LION STYLE 🦁',
   breaf: '',
   material: 'Елітний Стрейч Кулір найвищої якості (Туреччина) 👍',
   description: [
      'Склад: бавовна - 95%, поліестер - 5% 👌',
      'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
   ],
   price: 399,
   fake_price: 499,
   imgs: ['/img/f002.jpg','/img/f01.webp','/img/f02.webp','/img/f03.webp','/img/f04.webp','/img/f001.jpg','/img/f003.jpg','/img/f004.jpg'],
})

const Futbolka1 = new Product({
   title: 'Чорна Футболка',
   href: 'Futbolka1',
   title_long: 'Чорна футболка з кольоровим надписом "З Україною в серці" від LION STYLE 🦁',
   breaf: 'Розмір: 48-58',
   material: 'Стрейч Кулір найвищої якості (Туреччина) 👌',
   description: [
      'Склад: 95% бавовна, 5% поліестер 👍',
      'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
   ],
   price: 549,
   fake_price: 649,
   imgs: ['/img/futb1-01.jpg'],
})

const Futbolka2 = new Product({
   title: 'Чорна Футболка з логотипом',
   href: 'Futbolka2',
   title_long: 'Чорна футболка із золотим логотипом LION STYLE 🦁',
   breaf: 'Розмір: 48-58',
   material: 'Стрейч Кулір найвищої якості (Туреччина) 👌',
   description: [
      'Склад: 95% бавовна, 5% поліестер 👍',
      'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
   ],
   price: 499,
   fake_price: 599,
   imgs: ['/img/futb2-01.jpg'],
})

const Futbolka3 = new Product({
   title: 'Чорна Футболка з гербом',
   href: 'Futbolka3',
   title_long: 'Чорна футболка з гербом від LION STYLE 🦁',
   breaf: 'Розмір: 48-58',
   material: 'Стрейч Кулір найвищої якості (Туреччина) 👌',
   description: [
      'Склад: 95% бавовна, 5% поліестер 👍',
      'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
   ],
   price: 479,
   fake_price: 579,
   imgs: ['/img/futb3-01.jpg'],
})

const Futbolka4 = new Product({
   title: 'Чорна Футболка з надписом',
   href: 'Futbolka4',
   title_long: 'Чорна футболка з кольоровим надписом "I\'m Ukrainian" від LION STYLE 🦁',
   breaf: 'Розмір: 48-58',
   material: 'Стрейч Кулір найвищої якості (Туреччина) 👌',
   description: [
      'Склад: 95% бавовна, 5% поліестер 👍',
      'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
   ],
   price: 549,
   fake_price: 649,
   imgs: ['/img/futb4-01.jpg'],
})

const Futbolka5 = new Product({
   title: 'Чорна Футболка з серцем',
   href: 'Futbolka5',
   title_long: 'Чорна футболка з кольоровим серцем "Stay with Ukraine" від LION STYLE 🦁',
   breaf: 'Розмір: 48-58',
   material: 'Стрейч Кулір найвищої якості (Туреччина) 👌',
   description: [
      'Склад: 95% бавовна, 5% поліестер 👍',
      'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
   ],
   price: 599,
   fake_price: 699,
   imgs: ['/img/futb5-01.jpg'],
})

const Futbolka6 = new Product({
   title: 'Чорна Футболка з кольоровим гербом',
   href: 'Futbolka6',
   title_long: 'Чорна футболка з великим кольоровим гербом від LION STYLE 🦁',
   breaf: 'Розмір: 48-58',
   material: 'Стрейч Кулір найвищої якості (Туреччина) 👌',
   description: [
      'Склад: 95% бавовна, 5% поліестер 👍',
      'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
   ],
   price: 599,
   fake_price: 699,
   imgs: ['/img/futb6-01.jpg', '/img/futb6-02.jpg'],
})

const Bruki = new Product({
   title: 'Теплі чоловічі брюки',
   href: 'Bruki',
   title_long: 'Теплі чоловічі брюки від LION STYLE 🦁',
   breaf: 'Розмір: 48-58',
   material: 'софтшел на флісі (Туреччина), фірмова якісна німецька фурнітура 👍',
   description: [
      'Склад: 95% бавовна, 5% поліестер 👍',
      'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
      'Колір: чорний',
      'Стиль: класика+модерн',
      'Стильний неповторний дизайн з поєднанням класики і модерна. Зручні великі кишені з накладними клапанами, задній карман оздоблений фірмовою вологостійкою молнією. Спеціальне оздоблення шльовок і бокових кишень тесьмою чорного кольору. Пояс з подвійними шльовками для різного типу ременів👌',
      'Теплі, зручні, стильні та комфортні! 🤗'
   ],
   price: 1799,
   fake_price: 1999,
   imgs: ['/img/tchb01.jpg', '/img/tchb02.jpg', '/img/tchb03.jpg', '/img/tchb04.jpg', '/img/tchb05.jpg', 
    '/img/tchb06.jpg', '/img/tchb07.jpg', '/img/tchb08.jpg', '/img/bchd01.jpg', '/img/bchd02.jpg', '/img/bchd03.jpg', '/img/bchd04.jpg'],
})

// const BrukiDemi = new Product({
//    title: 'Теплі демисезонні брюки',
//    href: 'BrukiDemi',
//    title_long: 'Теплі демисезонні брюки від LION STYLE 🦁',
//    breaf: 'Розмір: 48-58',
//    material: 'софтшел на флісі (Туреччина), фірмова якісна німецька фурнітура 👍',
//    description: [
//       'Склад: 95% бавовна, 5% поліестер 👍',
//       'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
//       'Колір: чорний',
//       'Стильний неповторний дизайн з поєднанням класики і модерна! 👌',
//       'Теплі, зручні та комфортні! 🤗'
//    ],
//    price: 1850,
//    fake_price: 2050,
//    imgs: ['/img/bchd01.jpg', '/img/bchd02.jpg', '/img/bchd03.jpg', '/img/bchd04.jpg'],
// })

const CapDemi = new Product({
   title: 'Стильний демисезонний капелюх',
   href: 'CapDemi',
   title_long: 'Стильний демисезонний капелюх від LION STYLE 🦁',
   breaf: 'Розмір: 58-62',
   material: 'софтшел на флісі (Туреччина), фірмова якісна німецька фурнітура 👍',
   description: [
      'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
      'Колір: чорний',
   ],
   price: 450,
   fake_price: 550,
   imgs: ['/img/capd01.jpg', '/img/capd02.jpg', '/img/capd03.jpg'],
})


export const ClothesCategory = new Category({
   title: 'Одяг широкого споживання',
   description: '',
   products: [
      TepliKostumy,
      TeplyiKostum,
      ExclusiveCostyumy,
      ExclusiveCostyum2,
      Futbolka,
      Futbolka1,
      Futbolka2,
      Futbolka3,
      Futbolka4,
      Futbolka5,
      Futbolka6,
      Bruki,
      CapDemi,
   ],
})

