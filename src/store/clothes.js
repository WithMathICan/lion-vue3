import { Product } from './Product'
import { Category } from './Category'

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
   imgs: ['/img/14.jpg','/img/15.jpg','/img/31.jpg','/img/32.jpg','/img/33.jpg','/img/34.jpg']
})

const TeplyiKostum = new Product({
   title: 'Теплий костюм',
   href: 'TeplyiKostum',
   title_long: 'Теплий костюм від LION STYLE з фірмовою вишивкою🦁',
   breaf: 'Нова колекція теплих спортивних костюмів від українського національного бренду LION STYLE з оригінальною вишивкою!',
   material: 'футер трьохнитка на флісі (Туреччина)',
   description: [
      'Худі помаранчева з чорними рукавами і фірмовою вишивкою LION STYLE. Брюки чорні',
      'Люксова якість пошиву від LION STYLE 👌⭐⭐⭐⭐⭐',
   ],
   price: 1999,
   imgs: ['/img/tk01.jpg','/img/tk02.jpg','/img/tk03.jpg']
})

const ExclusiveCostyumy = new Product({
   title: 'Ексклюзивний костюм',
   href: 'exkl-kostyum',
   title_long: 'Ексклюзивний теплий костюм від LION STYLE',
   breaf: 'Нова колекція теплих спортивних костюмів від українського національного бренду LION STYLE з оригінальною вишивкою!',
   material: 'футертрьохнитка + фліс (Туреччина)',
   description: [
      'Неповторний стиль і національна українська вишиванка!',
      'Люксова якість пошиву від LION STYLE!',
   ],
   price: 2099,
   imgs: ['/img/16.jpg','/img/35.jpg','/img/36.jpg'],
})

const ExclusiveCostyum2 = new Product({
   title: 'Ексклюзивний теплий костюм',
   href: 'ExclusiveCostyum2',
   title_long: 'Ексклюзивний теплий костюм від LION STYLE з вишиванкою',
   breaf: 'Нова колекція теплих спортивних костюмів від українського національного бренду LION STYLE з оригінальною вишивкою!',
   material: 'футер трьохнитка на флісі (Туреччина)',
   description: [
      'Худі помаранчева з оригінальною вертикальною вишивкою. Брюки чорні',
      'Люксова якість пошиву від LION STYLE! 👌⭐⭐⭐⭐⭐',
   ],
   price: 2099,
   imgs: ['/img/extk01.jpg','/img/extk02.jpg','/img/extk03.jpg'],
})

export const ClothesCategory = new Category({
   title: 'Одяг широкого споживання',
   description: '',
   products: [
      TepliKostumy,
      TeplyiKostum,
      ExclusiveCostyumy,
      ExclusiveCostyum2,
   ],
})

