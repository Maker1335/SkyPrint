import { defineStore } from 'pinia'
import pens from '../../assets/img/goods/img/pens.svg'
import pensPrices from '../../assets/img/goods/prices/pensPrices.svg'
import canvases from '../../assets/img/goods/img/canvases.svg'
import canvasesPrices from '../../assets/img/goods/prices/canvasesPrices.svg'
import lamination from '../../assets/img/goods/img/lamination.svg'
import laminationPrices from '../../assets/img/goods/prices/laminationPrices.svg'
import magneticVinyl from '../../assets/img/goods/img/magneticVinyl.svg'
import magneticVinylPrice from '../../assets/img/goods/prices/magneticVinylPrices.svg'
import shopper from '../../assets/img/goods/img/shopper.svg'
import shopperPrices from '../../assets/img/goods/prices/shopperPrices.svg'
import pillow from '../../assets/img/goods/img/pillow.svg'
import pillowPrices from '../../assets/img/goods/prices/pillowPrices.svg'
import t_shirt from '../../assets/img/goods/img/t-shirt.svg'
import t_shirtPrices from '../../assets/img/goods/prices/t-shirtPrices.svg'

export const useProductStore = defineStore('product', {
    state: () => ({
        products:  [
            {
                id: 1,
                name: 'Ручки',
                img: pens,
                category: 'Сувениры',
                description: 'Интересный развития. Соображения идейные направлений высшего финансовых нашей и по позволяет задача постоянный постоянный позволяет прогрессивного прогрессивного плановых идейные роль структура нашей равным рамки рост административных нашей же и в развития.Рост и значение равным существенных форм количественный нашей активности и модель интересный играет идейные отношении реализации же постоянный.',
                count: 'От 50 шт',
                details: {
                    estimatedCost: '8 ₽',
                    customFields: {
                        'Тираж': ['От 50 шт'],
                    },
                    // арт ручку: ['Каталог (цена в PS)'],
                    // тампопопечать 1цвет/1оттиск: ['При партии до 250шт. - 2310руб. при партии 500шт. - 3500руб.'],
                    // уф-печать и шелкография: ['(Цену в PS уточнить)'],
                    dimensions: ['50 х 90 мм', '90 х 100 мм', '40 х 80 мм', '200 х 150 мм', '50 х 150 мм'],
                    paperType: ['Мелованная 100-300/м²', 'Фактурная 100-300/м²', 'Цветная 100-300/м²'],
                    printType: ['Полноцветная с одной стороны'],
                    lamination: ['Матовая', 'глянцевая'],
                    angles: ['Скругленные', 'без скругления'],
                    rowspan: 2,
                    colspan: 2,
                },
                prices: [
                    // { name: 'Тираж от 50 шт.', price: '1000 ₽' },
                    // { name: 'Тираж ', price: ['2310 ₽', '3500 ₽'] },
                    pensPrices
                ],
                save: false,
            },
            {
                id: 2,
                name: 'Холсты',
                img: canvases,
                category: 'Тиражирование',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCost: '910 ₽',
                    customFields: {
                        'Размеры': ['20x30', '30x40', '40x50', '50x70', '80x100', '80x80', '80x60', '30x30', '40x60', '60x90', '90x90', '150x120'],
                        'Тип печати': ['Печать на холсте'],
                    },
                    rowspan: 2,
                    colspan: 12,
                },
                prices: [
                    // { name: 'Позиция 1', price: '100 ₽' },
                    // { name: 'Позиция 2', price: '900 ₽' },
                    // { name: 'Позиция 3', price: '5000 ₽' }
                    canvasesPrices
                ],
                save: false
            },
            {
                id: 3,
                name: 'Ламинирование',
                img: lamination,
                category: 'Копировальные услуги',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '100 ₽',
                    customFields: {
                        'тираж': ['10 шт'],
                        'Формат': ['A4', 'A3', 'A2', 'A1','A0'],
                    },
                },
                prices: [
                    // { name: 'Позиция 1', price: '100 ₽' },
                    laminationPrices
                ],
                save: false
            },
            {
                id: 4,
                name: 'Магнитный винил',
                img: magneticVinyl,
                category: 'Копировальные услуги',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCost: '70 ₽',
                    customFields: {
                        'Тираж': ['1-49 шт, 50-99 шт', '100-199 шт', '200-499 шт', '500-999 шт', '1000-2499 шт', '<2500 шт'],
                        'Размеры': ['55x55 мм', '50x80 мм', '70x100 мм', '100x150 мм', '150x200 мм', '200x300 мм'],
                    },
                },
                prices: [
                    magneticVinylPrice,
                ],
                save: false
            },
            {
                id: 5,
                name: 'Шоппер',
                img: shopper,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '600 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    shopperPrices
                ],
                save: false
            },
            {
                id: 6,
                name: 'Подушка',
                img: pillow,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '600 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    pillowPrices
                ],
                save: false
            },
            {
                id: 7,
                name: 'Футболка',
                img: t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '600 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    t_shirtPrices,
                ],
                save: false
            },
        ]
    }),
    actions: {
        toggleSave(productId) {
            const product = this.products.find(p => p.id === productId);
            if (product) {
                product.save = !product.save;
                this.updateLocalStorage();
            }
        },
        updateLocalStorage() {
            localStorage.setItem('products', JSON.stringify(this.products));
        },
        // Метод для инициализации данных из локального хранилища
        loadFromLocalStorage() {
            const savedProducts = localStorage.getItem('products');
            if (savedProducts) {
                this.products = JSON.parse(savedProducts);
            }
        },
    },
    created() {
        this.loadFromLocalStorage();
    }
})
